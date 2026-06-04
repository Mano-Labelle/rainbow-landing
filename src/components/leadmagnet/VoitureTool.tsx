"use client";

import { useState } from "react";

// Data backbone: leadmagnets/data_voiture_fonction_2026.md
// Guided, paced experience — one idea per screen (no scroll wall). Frame = empowerment, not cost.

type Tier = { id: string; label: string; budget: string; modeles: string; elec: string };
const TIERS: Tier[] = [
  { id: "junior", label: "Junior / standard", budget: "~320-450 €/mois", modeles: "Clio, 208, Mokka, Arona", elec: "e-208, ë-C3, MG4, Dacia Spring" },
  { id: "confirme", label: "Confirmé / KAM", budget: "~450-700 €/mois", modeles: "3008, Symbioz hybride, Golf", elec: "Mégane E-Tech, Tesla Model 3, ID.4, Enyaq" },
  { id: "senior", label: "Senior / cadre", budget: "~800-1 200 €/mois", modeles: "Série 5, A6, Classe E", elec: "BMW i4, Q4 e-tron, Tesla Model Y" },
];
const NIVEAU_EMOJI: Record<string, string> = { junior: "🌱", confirme: "📈", senior: "🏆" };

const NEGOCIABLE = [
  ["🚙", "La catégorie / le modèle", "Pousse un cran au-dessus de ce qu'on te propose."],
  ["💶", "Le budget / loyer mensuel", "Argumente avec tes vrais kilomètres des 12 derniers mois."],
  ["⚡", "Électrique vs thermique", "Le plus gros levier 2026 — l'employeur y gagne, échange-le."],
  ["⛽", "La carte carburant / recharge", "Prise en charge directe, pas d'avance de ta poche."],
  ["🛣️", "Le forfait km", "Qu'il colle à ta tournée réelle, sinon facture à la restitution."],
  ["📝", "L'usage perso écrit au contrat", "C'est ça qui en fait une voiture de fonction, pas de service."],
] as const;

const QUESTIONS = [
  "L'usage perso est-il autorisé et écrit au contrat ? (sinon c'est une voiture de service, retirable du jour au lendemain)",
  "Quel forfait km, et colle-t-il à ma tournée réelle ? (le dépassement se facture ~0,15 €/km)",
  "La catégorie / le modèle sont-ils négociables à mon niveau ?",
  "La carte carburant ou la recharge sont-elles prises en charge ?",
  "Une électrique est-elle possible ? (l'employeur évite le malus, moi j'ai l'abattement de 70%)",
  "Un conducteur secondaire (conjoint) est-il autorisé par écrit ?",
  "La grille de vétusté et les conditions de restitution me sont-elles données à l'avance ?",
];
const PIEGES = [
  ["Le forfait km sous-évalué", "Dépassement facturé en fin de contrat. Fais corriger le forfait avant de signer."],
  ["L'usure « normale » facturée", "Micro-rayures, sièges : c'est de l'usure normale. Tu as 15 jours pour contester par LRAR."],
  ["Pas d'état des lieux contradictoire", "Exige-le, présent, avec photos. Sinon c'est leur parole contre la tienne."],
] as const;
const SOURCES = [["URSSAF", "barème 2026"], ["service-public", "fiscalité"], ["Arval", "300 entreprises"], ["L'Argus", "malus & modèles"], ["Flotauto", "immatriculations"]];

const FLOW = ["standard", "negociable", "questions", "pieges"] as const;
type Step = "email" | "niveau" | (typeof FLOW)[number];

export function VoitureTool() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [tier, setTier] = useState<Tier | null>(null);

  function submitEmail(e: React.FormEvent) {
    e.preventDefault();
    const clean = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(clean)) { setEmailErr("Hmm, cet email a l'air invalide."); return; }
    setEmailErr("");
    fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: clean, magnet: "voiture" }) }).catch(() => {});
    setStep("niveau");
  }
  const next = () => { const i = FLOW.indexOf(step as (typeof FLOW)[number]); if (i >= 0 && i < FLOW.length - 1) setStep(FLOW[i + 1]); };

  async function share() {
    const text = "Voiture de fonction : ce qu'il faut négocier et les pièges à éviter avant de signer. askrainbow.ai/voiture";
    const blob = await makeCard();
    const file = blob ? new File([blob], "voiture-2026.png", { type: "image/png" }) : null;
    if (file && navigator.canShare?.({ files: [file] })) { try { await navigator.share({ files: [file], text }); return; } catch {} }
    if (navigator.share) { try { await navigator.share({ text, url: "https://askrainbow.ai/voiture" }); return; } catch {} }
    await navigator.clipboard?.writeText(text);
    alert("Copié ! Colle-le dans ton groupe WhatsApp / Facebook.");
  }

  const inFlow = (FLOW as readonly string[]).includes(step);
  const flowIdx = FLOW.indexOf(step as (typeof FLOW)[number]);

  return (
    <div className="text-lavender">
      {/* hero only on entry screens */}
      {(step === "email" || step === "niveau") && (
        <>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-lavender-dim">
            <img src="/logo.svg" alt="Rainbow" className="h-5 w-auto" /> · outil gratuit
          </div>
          <h1 className="mt-3 font-serif text-4xl leading-[1.05] sm:text-5xl">
            Négocie ta voiture de fonction <span className="text-accent">comme un pro</span>
          </h1>
          <p className="mt-3 max-w-xl text-lavender-muted">
            Ta voiture, c'est ton 2e salaire, et la plupart signent sans rien négocier. On a compilé les règles 2026
            (URSSAF, baromètre Arval, L'Argus) pour que tu signes pas en dessous.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-ink-border/60 bg-ink-panel/40 p-6"><CarArt /></div>
        </>
      )}

      {/* compact header + progress during the guided flow */}
      {inFlow && (
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs uppercase tracking-widest text-lavender-dim">
            <span className="flex items-center gap-2"><img src="/logo.svg" alt="" className="h-4 w-auto" /> Négocier sa voiture</span>
            <span>Étape {flowIdx + 1} / {FLOW.length}</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink">
            <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${((flowIdx + 1) / FLOW.length) * 100}%` }} />
          </div>
        </div>
      )}

      {step === "email" && (
        <form onSubmit={submitEmail} className="mt-6 rounded-2xl border border-ink-border/60 bg-ink-panel/40 p-6">
          <p className="text-lavender-muted">Entre ton email pour démarrer. On y va étape par étape, 1 minute.</p>
          <input type="email" inputMode="email" autoComplete="email" placeholder="ton@email.fr" value={email} onChange={(e) => setEmail(e.target.value)}
            className="mt-4 w-full rounded-xl border border-ink-border bg-ink px-4 py-3 text-lavender placeholder:text-lavender-dim focus:border-accent focus:outline-none" />
          {emailErr && <p className="mt-2 text-sm text-spec-orange">{emailErr}</p>}
          <button type="submit" className="mt-4 w-full rounded-full bg-accent px-6 py-3 font-semibold text-ink">Démarrer 🚗</button>
          <SourceStrip />
        </form>
      )}

      {step === "niveau" && (
        <div className="mt-6">
          <p className="mb-4 text-lavender-muted">Ton niveau ?</p>
          <div className="flex flex-col gap-3">
            {TIERS.map((t) => (
              <button key={t.id} onClick={() => { setTier(t); setStep("standard"); }}
                className="rounded-xl border border-ink-border bg-ink-panel/40 px-5 py-4 text-left text-lg font-medium text-lavender transition hover:border-accent">
                {NIVEAU_EMOJI[t.id]} {t.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === "standard" && tier && (
        <Screen title={`💰 Ton standard 2026`} sub={tier.label}>
          <p className="font-serif text-4xl text-lavender">{tier.budget}</p>
          <p className="mt-3 text-lavender-muted">🔧 Thermique / hybride : <span className="text-lavender">{tier.modeles}</span></p>
          <p className="mt-1 text-lavender-muted">⚡ Électrique : <span className="text-lavender">{tier.elec}</span></p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <Insight k="1 050 €" v="Le budget pro moyen mensuel. En dessous, tu peux pousser." />
            <Insight k="80 000 €" v="Le malus max 2026, que l'électrique évite. Ton levier." />
            <Insight k="-70%" v="L'abattement sur l'avantage en nature d'une électrique." />
          </div>
          <Next onClick={next} label="Qu'est-ce que je peux négocier ? →" />
        </Screen>
      )}

      {step === "negociable" && (
        <Screen title="🤝 Ce qui se négocie" sub="6 leviers que la plupart oublient">
          <div className="space-y-3">
            {NEGOCIABLE.map(([e, t, d]) => (
              <div key={t} className="rounded-xl border border-ink-border/60 bg-ink p-4">
                <p className="font-medium text-lavender">{e} {t}</p>
                <p className="mt-1 text-sm text-lavender-muted">{d}</p>
              </div>
            ))}
          </div>
          <Next onClick={next} label="Les questions à poser avant de signer →" />
        </Screen>
      )}

      {step === "questions" && (
        <Screen title="❓ Avant de signer" sub="Les 7 questions à poser, noir sur blanc">
          <ol className="space-y-3">
            {QUESTIONS.map((q, i) => (
              <li key={i} className="rounded-xl border border-ink-border/60 bg-ink p-4 text-sm text-lavender">
                <span className="font-serif text-accent">{i + 1}.</span> {q}
              </li>
            ))}
          </ol>
          <Next onClick={next} label="Et les pièges à la restitution ? →" />
        </Screen>
      )}

      {step === "pieges" && (
        <Screen title="⚠️ Restitution" sub="Ne te fais pas avoir en rendant la voiture">
          <div className="space-y-3">
            {PIEGES.map(([t, d]) => (
              <div key={t} className="rounded-xl border border-ink-border/60 bg-ink p-4">
                <p className="font-medium text-lavender">{t}</p>
                <p className="mt-1 text-sm text-lavender-muted">{d}</p>
              </div>
            ))}
          </div>
          <button onClick={share} className="mt-6 w-full rounded-full bg-accent px-6 py-3 font-semibold text-ink">Partage la checklist 📲</button>
          <p className="mt-3 text-center text-sm text-lavender-muted">Ta checklist complète + les modèles 2026 par budget arrivent dans ta boîte mail 📬</p>
          <SourceStrip />
        </Screen>
      )}
    </div>
  );
}

function Screen({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-lavender sm:text-3xl">{title}</h2>
      <p className="mb-5 mt-1 text-sm text-lavender-dim">{sub}</p>
      {children}
    </div>
  );
}
function Next({ onClick, label }: { onClick: () => void; label: string }) {
  return <button onClick={onClick} className="mt-6 w-full rounded-full border border-accent px-6 py-3 font-semibold text-accent transition hover:bg-accent hover:text-ink">{label}</button>;
}
function SourceStrip() {
  return (
    <div className="mt-6 border-t border-ink-border/50 pt-4">
      <p className="mb-2 text-[11px] uppercase tracking-widest text-lavender-dim">Sources</p>
      <div className="flex flex-wrap gap-2">
        {SOURCES.map(([n, d]) => (
          <span key={n} className="rounded-full border border-ink-border/70 bg-ink px-3 py-1 text-xs text-lavender-muted"><strong className="text-lavender">{n}</strong> · {d}</span>
        ))}
      </div>
    </div>
  );
}
function Insight({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-ink-border/60 bg-ink p-4">
      <p className="font-serif text-2xl text-accent">{k}</p>
      <p className="mt-1 text-xs text-lavender-muted">{v}</p>
    </div>
  );
}
function CarArt() {
  return (
    <svg viewBox="0 0 320 90" className="h-24 w-full" role="img" aria-label="voiture de fonction">
      <defs><linearGradient id="cg" x1="0" x2="1"><stop offset="0" stopColor="#B57DFF" /><stop offset="0.5" stopColor="#FF5EC4" /><stop offset="1" stopColor="#FFA060" /></linearGradient></defs>
      <line x1="0" y1="72" x2="320" y2="72" stroke="#4a4060" strokeWidth="2" strokeDasharray="14 10" />
      <path d="M70 66 L86 44 Q90 38 100 38 L150 38 Q160 38 168 46 L184 62 L210 66 Q220 67 220 74 L70 74 Q66 70 70 66 Z" fill="url(#cg)" />
      <circle cx="104" cy="74" r="11" fill="#0A0612" stroke="url(#cg)" strokeWidth="4" />
      <circle cx="186" cy="74" r="11" fill="#0A0612" stroke="url(#cg)" strokeWidth="4" />
    </svg>
  );
}
async function makeCard(): Promise<Blob | null> {
  if (typeof document === "undefined") return null;
  const c = document.createElement("canvas"); c.width = 1080; c.height = 1080;
  const ctx = c.getContext("2d"); if (!ctx) return null;
  ctx.fillStyle = "#0A0612"; ctx.fillRect(0, 0, 1080, 1080);
  const grad = ctx.createLinearGradient(0, 0, 1080, 0);
  grad.addColorStop(0, "#B57DFF"); grad.addColorStop(0.5, "#FF5EC4"); grad.addColorStop(1, "#FFA060");
  ctx.fillStyle = grad; ctx.fillRect(80, 250, 160, 12);
  ctx.fillStyle = "#B9B0D0"; ctx.font = "500 34px Inter, Arial, sans-serif"; ctx.fillText("VOITURE DE FONCTION · 2026", 80, 180);
  ctx.fillStyle = "#F4EFFF"; ctx.font = "700 64px Inter, Arial, sans-serif";
  ctx.fillText("Ce qu'il faut", 80, 380); ctx.fillText("négocier", 80, 460); ctx.fillText("avant de signer", 80, 540);
  ctx.fillStyle = "#B9B0D0"; ctx.font = "400 40px Inter, Arial, sans-serif"; ctx.fillText("(et les pièges à éviter)", 80, 630);
  ctx.fillStyle = "#7A7090"; ctx.font = "500 36px Inter, Arial, sans-serif"; ctx.fillText("askrainbow.ai/voiture", 80, 1000);
  return new Promise((res) => c.toBlob((b) => res(b), "image/png"));
}
