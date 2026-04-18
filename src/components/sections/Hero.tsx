import { DIRECTION } from "@/content/direction";
import { Arc } from "@/components/brand/Arc";
import { HeroChat } from "@/components/hero/HeroChat";
import { StoreButton } from "@/components/brand/StoreButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 0%, rgba(255,94,196,0.12), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 20%, rgba(91,184,255,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
        {/* Left — copy + CTA */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-border/60 bg-ink-panel/40 text-xs text-lavender-muted font-mono">
            <Arc size={16} withGlow={false} strokeW={8} />
            <span>Rainbow · assistant commercial IA · France</span>
          </div>

          <div className="mt-5 text-[11px] font-mono tracking-[0.18em] text-accent">
            — PAS UN CRM. UN ASSISTANT.
          </div>

          <h1 className="mt-3 text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.02] tracking-tight">
            <span className="block">Parlez.</span>
            <span className="block">
              <em className="not-italic">
                <span className="rink-warm">Rainbow</span>
              </em>{" "}
              prend les notes.
            </span>
          </h1>

          <p className="mt-6 text-lg text-lavender-muted leading-relaxed max-w-[30rem]">
            {DIRECTION.hero.subhead}
          </p>

          {/* CTA block */}
          <div className="mt-8">
            <div className="text-xs font-mono tracking-[0.12em] uppercase text-lavender-dim">
              Rainbow vit sur ton téléphone
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <StoreButton kind="apple" href="https://app.askrainbow.ai" />
              <StoreButton kind="google" href="https://app.askrainbow.ai" />
              <a
                href="#journee"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-ink-border bg-ink-panel/60 text-sm text-lavender-muted hover:text-lavender hover:border-lavender-muted transition"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-accent"
                  aria-hidden
                />
                {DIRECTION.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-lavender-dim font-mono">
            <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-ink-panel/60 border border-ink-border/50">
              <span className="text-lavender-dim">URL</span>
              <span className="text-lavender">askrainbow.ai</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-lavender-dim" />
            <span>iPhone · Android · Hors-ligne · RGPD · Export CSV</span>
          </div>
        </div>

        {/* Right — animated chat */}
        <div className="relative">
          <HeroChat />
          <div className="mt-6 flex items-center justify-center text-xs text-lavender-dim italic">
            Tu parles. Rainbow te répond par écrit. Toujours.
          </div>
        </div>
      </div>
    </section>
  );
}
