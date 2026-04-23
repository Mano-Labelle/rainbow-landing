"use client";

import { useMemo, useState } from "react";
import { COMMISSION } from "@/content/direction";
import { IOS_APP_URL } from "@/content/app-urls";
import { AndroidWaitlist } from "@/components/waitlist/AndroidWaitlist";

const SAVE_RATE = 0.7; // Rainbow recovers 70% of admin time
const VARIABLE_PCT = 0.3; // variable comp = 30% of OTE for a typical field rep
const SELL_BASELINE_H = 11; // rounded from Pace Productivity: 10.7h/week selling
const EFFICIENCY = 0.5; // only 50% of redirected time converts into signed deals (conservative)
const WORK_WEEK_H = 40;
const FRIDAY_BLOCK_H = 6; // avg size of a "vendredi soir" admin catch-up (~19h→01h)

function formatEuros(n: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatHours(h: number): string {
  const rounded = Math.round(h * 2) / 2;
  const whole = Math.floor(rounded);
  const half = rounded - whole >= 0.5;
  if (half) return `${whole}h30`;
  return `${whole}h`;
}

export function Calculator() {
  const [ote, setOte] = useState<number>(COMMISSION.inputs.ote.default);
  const [adminH, setAdminH] = useState<number>(COMMISSION.inputs.admin.default);

  const calc = useMemo(() => {
    const savedHPerWeek = adminH * SAVE_RATE;
    const savedHPerYear = savedHPerWeek * 52;
    const savedWeeks = Math.round(savedHPerYear / WORK_WEEK_H);
    const fridayNights = Math.min(52, Math.round(savedHPerYear / FRIDAY_BLOCK_H));
    const variable = ote * VARIABLE_PCT;
    const sellUplift = savedHPerWeek / SELL_BASELINE_H;
    const extraCommissionRaw = variable * sellUplift * EFFICIENCY;
    const extraCommission = Math.round(extraCommissionRaw / 50) * 50; // round to €50

    return {
      savedHPerWeek,
      savedHFormatted: formatHours(savedHPerWeek),
      savedHPerYear: Math.round(savedHPerYear),
      savedWeeks,
      fridayNights,
      sellUpliftPct: Math.round(sellUplift * 100),
      extraCommission,
      extraCommissionFormatted: formatEuros(extraCommission),
    };
  }, [ote, adminH]);

  const salaryAnchor =
    COMMISSION.salaryAnchors.find((a) => ote <= a.max)?.text ?? "";

  async function handleShare() {
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}/ma-commission?ote=${ote}&admin=${adminH}`;
    const text = COMMISSION.cta.shareTextTemplate
      .replace("{hours}", calc.savedHFormatted)
      .replace("{commission}", calc.extraCommissionFormatted);

    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({
          title: "Rainbow — Ma commission",
          text,
          url,
        });
        return;
      } catch {
        // user canceled — fall through to clipboard
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(`${text} ${url}`);
    }
  }

  return (
    <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
      {/* ======================================================== */}
      {/* INPUTS */}
      {/* ======================================================== */}
      <div className="space-y-12">
        {/* OTE */}
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <label
              htmlFor="ote-slider"
              className="text-sm text-lavender-muted font-medium"
            >
              {COMMISSION.inputs.ote.label}
            </label>
            <span className="font-serif text-3xl md:text-4xl text-lavender tabular-nums">
              {formatEuros(ote)}
            </span>
          </div>
          <input
            id="ote-slider"
            type="range"
            min={COMMISSION.inputs.ote.min}
            max={COMMISSION.inputs.ote.max}
            step={COMMISSION.inputs.ote.step}
            value={ote}
            onChange={(e) => setOte(Number(e.target.value))}
            className="w-full mt-4 h-2 cursor-pointer"
            style={{ accentColor: "var(--color-accent)" }}
          />
          <div className="flex items-center justify-between mt-2 text-xs font-mono text-lavender-dim">
            <span>{formatEuros(COMMISSION.inputs.ote.min)}</span>
            <span>{formatEuros(COMMISSION.inputs.ote.max)}</span>
          </div>
          <div className="mt-3 text-sm text-lavender-muted italic leading-relaxed">
            {salaryAnchor}
          </div>
          <div className="mt-1 text-xs font-mono text-lavender-dim">
            {COMMISSION.inputs.ote.hint}
          </div>
        </div>

        {/* Admin hours */}
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <label
              htmlFor="admin-slider"
              className="text-sm text-lavender-muted font-medium"
            >
              {COMMISSION.inputs.admin.label}
            </label>
            <span className="font-serif text-3xl md:text-4xl text-lavender tabular-nums">
              {adminH}h
            </span>
          </div>
          <input
            id="admin-slider"
            type="range"
            min={COMMISSION.inputs.admin.min}
            max={COMMISSION.inputs.admin.max}
            step={COMMISSION.inputs.admin.step}
            value={adminH}
            onChange={(e) => setAdminH(Number(e.target.value))}
            className="w-full mt-4 h-2 cursor-pointer"
            style={{ accentColor: "var(--color-accent)" }}
          />
          <div className="flex items-center justify-between mt-2 text-xs font-mono text-lavender-dim">
            <span>{COMMISSION.inputs.admin.min}h</span>
            <span>{COMMISSION.inputs.admin.max}h</span>
          </div>
          <div className="mt-3 text-xs font-mono text-lavender-dim">
            {COMMISSION.inputs.admin.hint}
          </div>
        </div>

        {/* Method (repliable) */}
        <details className="group text-sm text-lavender-muted">
          <summary className="cursor-pointer list-none flex items-center gap-2 hover:text-lavender transition">
            <span className="w-5 h-5 rounded-full border border-ink-border flex items-center justify-center text-xs group-open:rotate-45 transition-transform">
              +
            </span>
            <span className="font-mono text-xs tracking-[0.1em] uppercase">
              {COMMISSION.method.title}
            </span>
          </summary>
          <ul className="mt-4 pl-7 space-y-2 text-xs leading-relaxed text-lavender-dim">
            {COMMISSION.method.items.map((item, i) => (
              <li key={i} className="list-disc">
                {item}
              </li>
            ))}
          </ul>
        </details>
      </div>

      {/* ======================================================== */}
      {/* OUTPUT CARD */}
      {/* ======================================================== */}
      <div className="rounded-3xl bg-ink-panel/70 border border-ink-border/60 p-8 md:p-10 shadow-[0_0_60px_-20px_rgba(255,94,196,0.25)]">
        <div className="text-[11px] font-mono tracking-[0.18em] text-lavender-dim">
          {COMMISSION.output.eyebrow}
        </div>

        {/* Lead */}
        <p className="mt-3 text-3xl md:text-4xl font-serif leading-[1.1]">
          {COMMISSION.output.leadPrefix}
          <span className="rink-warm font-medium">{calc.savedHFormatted}</span>
          {COMMISSION.output.leadSuffix}
        </p>
        <p className="mt-3 text-lavender-muted leading-relaxed">
          {COMMISSION.output.subPrefix}
          <span className="text-lavender">{calc.savedHPerYear}h</span>
          {COMMISSION.output.subMiddle}
          <span className="text-lavender font-medium">{calc.savedWeeks}</span>
          {COMMISSION.output.subSuffix}
        </p>

        {/* Divider */}
        <div className="my-8 h-px bg-ink-border/50" />

        {/* Options */}
        <div className="text-[11px] font-mono tracking-[0.18em] text-lavender-dim">
          {COMMISSION.output.optionsEyebrow}
        </div>

        {/* Option A */}
        <div className="mt-5">
          <div className="font-serif text-xl text-lavender">
            Option A — {COMMISSION.output.optionA.name}
          </div>
          <p className="mt-1.5 text-sm text-lavender-muted leading-relaxed">
            <span className="text-lavender font-medium">
              {calc.fridayNights}
            </span>{" "}
            {COMMISSION.output.optionA.body}
          </p>
        </div>

        {/* Option B — the money option */}
        <div className="mt-6">
          <div className="font-serif text-xl text-lavender">
            Option B — {COMMISSION.output.optionB.name}
          </div>
          <p className="mt-1.5 text-sm text-lavender-muted leading-relaxed">
            <span className="text-lavender font-medium">
              +{calc.sellUpliftPct}%
            </span>{" "}
            {COMMISSION.output.optionB.intro}
          </p>
          <div className="mt-4 font-serif text-5xl md:text-6xl leading-none tracking-tight">
            <span className="rink-warm">+{calc.extraCommissionFormatted}</span>
            <span className="ml-2 text-2xl md:text-3xl text-lavender-muted font-sans font-normal">
              / an
            </span>
          </div>
          <p className="mt-3 text-xs text-lavender-dim italic">
            {COMMISSION.output.optionB.after}
          </p>
        </div>

        {/* Option C */}
        <div className="mt-6">
          <div className="font-serif text-xl text-lavender">
            Option C — {COMMISSION.output.optionC.name}
          </div>
          <p className="mt-1.5 text-sm text-lavender-muted leading-relaxed">
            {COMMISSION.output.optionC.body}
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={IOS_APP_URL}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-ink text-sm font-semibold hover:shadow-[0_0_30px_rgba(255,94,196,0.5)] transition"
          >
            {COMMISSION.cta.ios}
          </a>
        </div>
        <p className="mt-3 text-xs text-lavender-dim">{COMMISSION.cta.fine}</p>

        {/* Android — coming soon + waitlist */}
        <div className="mt-6 pt-6 border-t border-ink-border/40">
          <div className="text-xs font-mono tracking-[0.12em] uppercase text-lavender-dim mb-2">
            Android — dans les 30 prochains jours
          </div>
          <div className="text-sm text-lavender-muted mb-3">
            Laissez votre email, on vous prévient dès que Rainbow Android est dispo.
          </div>
          <AndroidWaitlist compact source="android-waitlist" />
        </div>

        {/* Share */}
        <div className="mt-8 pt-6 border-t border-ink-border/40">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-sm text-lavender-muted hover:text-accent transition group"
          >
            <span
              aria-hidden
              className="w-8 h-8 rounded-full border border-ink-border flex items-center justify-center group-hover:border-accent transition"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            </span>
            <span>{COMMISSION.cta.share}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
