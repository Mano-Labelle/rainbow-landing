"use client";

import { useState } from "react";

// Data backbone: leadmagnets/data_salaries_2026.md (itinerants only, € brut annuel package).
// Ranges by ancienneté: [junior 0-2, confirmé 3-5, senior 5+].
type Sector = {
  id: string;
  label: string;
  ranges: [number, number][];
  variable: string;
  mid: number; // confirmé midpoint, for ranking
};

const SECTORS: Sector[] = [
  { id: "medical-device", label: "Dispositifs médicaux", ranges: [[45, 55], [60, 75], [80, 95]], variable: "15-30%", mid: 67 },
  { id: "industrie", label: "Industrie / technico", ranges: [[38, 49], [53, 65], [70, 95]], variable: "20-30%", mid: 59 },
  { id: "btp", label: "BTP / matériaux", ranges: [[37, 43], [48, 53], [58, 74]], variable: "17-25%", mid: 50.5 },
  { id: "telecom", label: "Télécoms / IT terrain", ranges: [[38, 45], [45, 55], [55, 65]], variable: "déplafonné", mid: 50 },
  { id: "distribution", label: "Distribution / GMS", ranges: [[37, 43], [45, 55], [49, 57]], variable: "18-25%", mid: 50 },
  { id: "enr", label: "Énergie / photovoltaïque", ranges: [[35, 40], [42, 50], [50, 57]], variable: "lourd", mid: 46 },
  { id: "visiteur-medical", label: "Visiteur médical", ranges: [[34, 38], [42, 46], [46, 55]], variable: "~10-20%", mid: 44 },
  { id: "auto", label: "Automobile B2B", ranges: [[31, 38], [40, 48], [46, 55]], variable: "primes", mid: 44 },
  { id: "agro", label: "Agro / agronome", ranges: [[30, 35], [38, 44], [44, 50]], variable: "~15%", mid: 41 },
  { id: "vin", label: "Vin / spiritueux / CHR", ranges: [[30, 34], [36, 42], [44, 50]], variable: "variable", mid: 39 },
];
const RANKED = [...SECTORS].sort((a, b) => b.mid - a.mid);
const SECTOR_EMOJI: Record<string, string> = { "medical-device": "💊", industrie: "🏭", btp: "🏗️", telecom: "📡", distribution: "🛒", enr: "⚡", "visiteur-medical": "🩺", auto: "🚗", agro: "🌾", vin: "🍷" };
const ANCIEN_EMOJI = ["🌱", "📈", "🏆"];

const ANCIENNETES = ["Junior (0-2 ans)", "Confirmé (3-5 ans)", "Senior (5 ans +)"];

const REGIONS = [
  { id: "idf", emoji: "🗼", label: "Île-de-France", mult: 1.12, note: "+12% sur le même poste" },
  { id: "metropole", emoji: "🏙️", label: "Grande métropole (Lyon, Lille…)", mult: 1.05, note: "+5%" },
  { id: "reste", emoji: "🗺️", label: "Partout ailleurs en France", mult: 1.0, note: "référence" },
];

const SOURCES = [
  ["Uptoo", "≈110 000 commerciaux"],
  ["APEC", "26 000 cadres"],
  ["Expectra", "50 000 fiches de paie"],
  ["Michael Page", "étude 2026"],
  ["Hellowork", "offres en temps réel"],
];

type Step = "email" | "secteur" | "ancien" | "region" | "result";

export function SalaireTool() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [sector, setSector] = useState<Sector | null>(null);
  const [ancien, setAncien] = useState<number | null>(null);
  const [region, setRegion] = useState<(typeof REGIONS)[number] | null>(null);

  function postLead(extra: Record<string, unknown> = {}) {
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim().toLowerCase(), magnet: "salaires", ...extra }),
    }).catch(() => {});
  }

  function submitEmail(e: React.FormEvent) {
    e.preventDefault();
    const clean = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(clean)) {
      setEmailErr("Hmm, cet email a l'air invalide.");
      return;
    }
    setEmailErr("");
    postLead();
    setStep("secteur");
  }

  const baseRange = sector && ancien !== null ? sector.ranges[ancien] : null;
  const adj = baseRange && region ? ([Math.round(baseRange[0] * region.mult), Math.round(baseRange[1] * region.mult)] as [number, number]) : null;
  const rank = sector ? RANKED.findIndex((s) => s.id === sector.id) + 1 : 0;

  async function share() {
    if (!sector || !adj) return;
    const text = `Commercial ${sector.label} : le marché est à ${adj[0]}-${adj[1]}k en 2026 (${rank}e secteur le mieux payé sur 10 chez les itinérants). Et toi, tu te situes où ? askrainbow.ai/salaires`;
    const blob = await makeCard(sector.label, adj, rank);
    const file = blob ? new File([blob], "salaire-2026.png", { type: "image/png" }) : null;
    if (file && navigator.canShare?.({ files: [file] })) {
      try { await navigator.share({ files: [file], text }); return; } catch {}
    }
    if (navigator.share) { try { await navigator.share({ text, url: "https://askrainbow.ai/salaires" }); return; } catch {} }
    await navigator.clipboard?.writeText(text);
    alert("Copié ! Colle-le dans ton groupe WhatsApp / Facebook.");
  }

  return (
    <div className="text-lavender">
      {/* ── HERO ── */}
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-lavender-dim">
        <img src="/logo.svg" alt="Rainbow" className="h-5 w-auto" /> · outil gratuit
      </div>
      <h1 className="mt-3 font-serif text-4xl leading-[1.05] sm:text-5xl">
        Combien tu devrais <span className="text-accent">vraiment</span> gagner en 2026
      </h1>
      <p className="mt-3 max-w-xl text-lavender-muted">
        Le salaire des commerciaux terrain, secteur par secteur. On a épluché 5 sources de référence et près de{" "}
        <strong className="text-lavender">185 000 salaires</strong> pour te dire où tu te situes vraiment.
      </p>

      {/* hero visual */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-ink-border/60 bg-ink-panel/40 p-6">
        <BarsArt />
      </div>

      {step === "email" && (
        <form onSubmit={submitEmail} className="mt-6 rounded-2xl border border-ink-border/60 bg-ink-panel/40 p-6">
          <p className="text-lavender-muted">Le commercial terrain gagne 47 000 € en moyenne, mais d'un secteur à l'autre ça va du simple au double. Entre ton email et vois où tu te situes vraiment, secteur par secteur et région par région.</p>
          <input
            type="email" inputMode="email" autoComplete="email" placeholder="ton@email.fr"
            value={email} onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full rounded-xl border border-ink-border bg-ink px-4 py-3 text-lavender placeholder:text-lavender-dim focus:border-accent focus:outline-none"
          />
          {emailErr && <p className="mt-2 text-sm text-spec-orange">{emailErr}</p>}
          <button type="submit" className="mt-4 w-full rounded-full bg-accent px-6 py-3 font-semibold text-ink">Démarrer</button>
          <SourceStrip />
        </form>
      )}

      {step === "secteur" && (
        <Choice title="Ton secteur ?" cols={2}>
          {SECTORS.map((s) => (
            <Tile key={s.id} onClick={() => { setSector(s); postLead({ sector: s.label }); setStep("ancien"); }}>{SECTOR_EMOJI[s.id]} {s.label}</Tile>
          ))}
        </Choice>
      )}

      {step === "ancien" && (
        <Choice title="Ton ancienneté ?">
          {ANCIENNETES.map((a, i) => (
            <Tile key={a} onClick={() => { setAncien(i); setStep("region"); }}>{ANCIEN_EMOJI[i]} {a}</Tile>
          ))}
        </Choice>
      )}

      {step === "region" && (
        <Choice title="Tu bosses où ?">
          {REGIONS.map((r) => (
            <Tile key={r.id} onClick={() => { setRegion(r); setStep("result"); }}>
              {r.emoji} {r.label} <span className="text-lavender-dim">· {r.note}</span>
            </Tile>
          ))}
        </Choice>
      )}

      {step === "result" && sector && ancien !== null && region && adj && (
        <div className="mt-6 space-y-5">
          <div className="rounded-2xl border border-ink-border/60 bg-ink-panel/40 p-6">
            <p className="text-sm text-lavender-dim">{sector.label} · {ANCIENNETES[ancien].split(" (")[0]} · {region.label}</p>
            <p className="mt-2 font-serif text-5xl text-lavender">{adj[0]}–{adj[1]}<span className="text-2xl text-lavender-muted">k / an</span></p>
            <p className="mt-1 text-sm text-lavender-muted">Package marché 2026, dont {sector.variable} de variable.</p>
          </div>

          {/* ranking */}
          <div className="rounded-2xl border border-ink-border/60 bg-ink-panel/40 p-6">
            <p className="font-semibold text-lavender">Ton secteur est <span className="text-accent">{rank}e sur 10</span> chez les itinérants</p>
            <div className="mt-4 space-y-2">
              {RANKED.map((s) => {
                const me = s.id === sector.id;
                const w = Math.round((s.mid / RANKED[0].mid) * 100);
                return (
                  <div key={s.id} className="flex items-center gap-3">
                    <div className="w-40 shrink-0 truncate text-xs" style={{ color: me ? "#FF5EC4" : "#9a90b0" }}>{s.label}</div>
                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-ink">
                      <div className="h-full rounded-full" style={{ width: `${w}%`, background: me ? "#FF5EC4" : "#4a4060" }} />
                    </div>
                    <div className="w-12 shrink-0 text-right text-xs" style={{ color: me ? "#FF5EC4" : "#9a90b0" }}>{s.mid}k</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* insights */}
          <div className="grid gap-3 sm:grid-cols-3">
            <Insight k={region.id === "reste" ? "+12%" : `+${Math.round((region.mult - 1) * 100)}%`} v={region.id === "reste" ? "Ce que tu gagnerais en plus en Île-de-France." : "Ta région paie au-dessus du reste de la France."} />
            <Insight k="+8%" v="Le fixe a grimpé en 2 ans. Le variable, lui, se stabilise." />
            <Insight k="47k" v="La moyenne tous secteurs terrain, dont 26% de variable." />
          </div>

          <button onClick={share} className="w-full rounded-full bg-accent px-6 py-3 font-semibold text-ink">Partage ton classement</button>
          <p className="text-center text-sm text-lavender-muted">Ta grille complète, tous secteurs × régions, arrive dans ta boîte mail 📬</p>
          <SourceStrip />
        </div>
      )}
    </div>
  );
}

function SourceStrip() {
  return (
    <div className="mt-6 border-t border-ink-border/50 pt-4">
      <p className="mb-2 text-[11px] uppercase tracking-widest text-lavender-dim">Sources</p>
      <div className="flex flex-wrap gap-2">
        {SOURCES.map(([n, d]) => (
          <span key={n} className="rounded-full border border-ink-border/70 bg-ink px-3 py-1 text-xs text-lavender-muted">
            <strong className="text-lavender">{n}</strong> · {d}
          </span>
        ))}
      </div>
    </div>
  );
}

function Choice({ title, cols, children }: { title: string; cols?: number; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <p className="mb-4 text-lavender-muted">{title}</p>
      <div className={cols === 2 ? "grid grid-cols-2 gap-3" : "flex flex-col gap-3"}>{children}</div>
    </div>
  );
}
function Tile({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="rounded-xl border border-ink-border bg-ink-panel/40 px-5 py-4 text-left text-sm font-medium text-lavender transition hover:border-accent">
      {children}
    </button>
  );
}
function Insight({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-ink-border/60 bg-ink-panel/40 p-4">
      <p className="font-serif text-2xl text-accent">{k}</p>
      <p className="mt-1 text-xs text-lavender-muted">{v}</p>
    </div>
  );
}

function BarsArt() {
  const bars = [38, 52, 60, 47, 72, 55, 90, 66];
  return (
    <svg viewBox="0 0 320 90" className="h-24 w-full" role="img" aria-label="salaires">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#B57DFF" /><stop offset="0.5" stopColor="#FF5EC4" /><stop offset="1" stopColor="#FFA060" />
        </linearGradient>
      </defs>
      {bars.map((h, i) => (
        <rect key={i} x={i * 40 + 6} y={90 - h} width="28" height={h} rx="4" fill="url(#g)" opacity={0.4 + (i / bars.length) * 0.6} />
      ))}
    </svg>
  );
}

async function makeCard(sector: string, range: [number, number], rank: number): Promise<Blob | null> {
  if (typeof document === "undefined") return null;
  const c = document.createElement("canvas");
  c.width = 1080; c.height = 1080;
  const ctx = c.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = "#0A0612"; ctx.fillRect(0, 0, 1080, 1080);
  const grad = ctx.createLinearGradient(0, 0, 1080, 0);
  grad.addColorStop(0, "#B57DFF"); grad.addColorStop(0.5, "#FF5EC4"); grad.addColorStop(1, "#FFA060");
  ctx.fillStyle = grad; ctx.fillRect(80, 250, 160, 12);
  ctx.fillStyle = "#B9B0D0"; ctx.font = "500 34px Inter, Arial, sans-serif";
  ctx.fillText("SALAIRE COMMERCIAL TERRAIN · 2026", 80, 180);
  ctx.fillStyle = "#F4EFFF"; ctx.font = "600 54px Inter, Arial, sans-serif";
  ctx.fillText(sector, 80, 360);
  ctx.fillStyle = "#FF5EC4"; ctx.font = "700 150px Inter, Arial, sans-serif";
  ctx.fillText(`${range[0]}–${range[1]}k`, 80, 560);
  ctx.fillStyle = "#F4EFFF"; ctx.font = "500 44px Inter, Arial, sans-serif";
  ctx.fillText(`${rank}e secteur le mieux payé sur 10`, 80, 660);
  ctx.fillStyle = "#F4EFFF"; ctx.font = "500 48px Inter, Arial, sans-serif";
  ctx.fillText("Et toi, tu te situes où ?", 80, 760);
  ctx.fillStyle = "#7A7090"; ctx.font = "500 36px Inter, Arial, sans-serif";
  ctx.fillText("askrainbow.ai/salaires", 80, 1000);
  return new Promise((res) => c.toBlob((b) => res(b), "image/png"));
}
