import { Arc } from "@/components/brand/Arc";
import { ArcBullet } from "@/components/brand/ArcBullet";
import { RInk } from "@/components/brand/RInk";
import { SectionHead } from "@/components/brand/SectionHead";

export function Journee() {
  return (
    <section id="journee" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHead
          index="02"
          label="Une journée avec Rainbow"
          title={
            <>
              Du café au coucher, <RInk>Rainbow</RInk> tient.
            </>
          }
        />
        <div className="mt-16 grid md:grid-cols-2 gap-6 md:gap-8">
          <SceneBriefing />
          <SceneCarte />
          <SceneAgenda />
          <SceneRelire />
        </div>
      </div>
    </section>
  );
}

function SceneShell({
  time,
  title,
  lead,
  children,
}: {
  time: string;
  title: string;
  lead: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-ink-border/60 bg-ink-panel/50 p-6 md:p-8 relative overflow-hidden">
      <div className="flex items-baseline gap-3">
        <span className="inline-flex items-center font-mono text-[10px] tracking-[0.15em] text-lavender-dim bg-ink/60 border border-ink-border/60 rounded-md px-2 py-1">
          {time}
        </span>
        <span className="font-serif italic text-2xl text-lavender">{title}</span>
      </div>
      <p className="mt-3 text-sm text-lavender-muted">{lead}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function SceneBriefing() {
  return (
    <SceneShell
      time="08:00"
      title="Le briefing"
      lead="Avant le café, Rainbow t'écrit ta journée."
    >
      <div className="relative mx-auto w-full max-w-[340px] aspect-[9/12] rounded-[36px] border border-ink-border/60 bg-gradient-to-b from-ink-elev to-ink p-5 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 60% 30% at 50% 10%, rgba(181,125,255,0.20), transparent 70%)",
          }}
        />
        <div className="relative text-center pt-2">
          <div className="font-serif text-6xl text-lavender leading-none tracking-tight">
            08:00
          </div>
          <div className="mt-2 text-xs text-lavender-muted font-mono tracking-wide">
            mercredi 6 mai
          </div>
        </div>
        <div className="relative mt-8 rounded-2xl bg-lavender/10 backdrop-blur border border-lavender/15 px-4 py-3">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.14em] text-lavender-muted uppercase">
            <Arc size={14} withGlow={false} strokeW={8} />
            <span className="text-lavender">RAINBOW</span>
            <span className="ml-auto">maintenant</span>
          </div>
          <div className="mt-2 text-sm text-lavender font-medium">
            Bonjour. Ta journée en trois lignes.
          </div>
          <div className="mt-1 text-xs text-lavender-muted">
            3 relances · 2 visites · 1 devis à envoyer.
          </div>
          <div className="mt-3 space-y-1.5 text-[11px] text-lavender-muted leading-snug">
            <div className="flex items-center">
              <ArcBullet size={10} /> Moreau SA · 10h · devis gamme 400
            </div>
            <div className="flex items-center">
              <ArcBullet size={10} /> Ateliers Durand · 14h · prix au mètre
            </div>
            <div className="flex items-center">
              <ArcBullet size={10} /> Bouygues · 16h30 · point technique
            </div>
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

function SceneCarte() {
  return (
    <SceneShell
      time="09:15"
      title="La carte de visite"
      lead="Tu prends une photo. Rainbow a déjà le contact."
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4">
        {/* The business card */}
        <div className="relative aspect-[3/4.5] rounded-xl bg-lavender text-ink p-3 overflow-hidden shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
          <div className="font-mono text-[9px] tracking-[0.18em] text-ink/70">
            MOREAU SA
          </div>
          <div className="mt-1 h-px bg-ink/20" />
          <div className="mt-3 font-serif text-lg leading-tight">Benoît Lemaire</div>
          <div className="text-[10px] text-ink/70 mt-0.5">Chef d&apos;atelier</div>
          <div className="mt-3 space-y-0.5 text-[9px] text-ink/80 leading-snug">
            <div>b.lemaire@moreau.fr</div>
            <div>+33 6 12 34 56 78</div>
            <div>12 rue des Forges · Villeurbanne</div>
          </div>
          {/* Scan sweep */}
          <div
            aria-hidden
            className="absolute inset-x-0 h-8 top-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,94,196,0.6), transparent)",
              animation: "cardScan 3.4s ease-in-out infinite",
            }}
          />
        </div>
        {/* Arrow */}
        <svg
          width="60"
          height="30"
          viewBox="0 0 80 30"
          fill="none"
          aria-hidden
          className="text-lavender"
        >
          <defs>
            <linearGradient id="carr-arrow" x1="0" x2="1">
              <stop offset="0" stopColor="#FF5EC4" />
              <stop offset="1" stopColor="#FFA060" />
            </linearGradient>
          </defs>
          <path
            d="M 5 15 Q 40 -5 70 15"
            fill="none"
            stroke="url(#carr-arrow)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 63 9 L 72 15 L 63 21"
            fill="none"
            stroke="url(#carr-arrow)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {/* Contact record */}
        <div className="rounded-xl border border-ink-border bg-ink/60 p-3 text-[10px]">
          <div className="flex items-center gap-1.5 text-lavender font-medium text-[11px]">
            <Arc size={12} withGlow={false} strokeW={8} />
            Contact créé
            <span className="ml-auto text-spec-green text-sm">✓</span>
          </div>
          <div className="mt-2 space-y-1 text-lavender-muted">
            <Row k="Nom" v="Benoît Lemaire" />
            <Row k="Compte" v="Moreau SA" />
            <Row k="Rôle" v="Chef d'atelier" />
            <Row k="Tél." v="+33 6 12 34 56 78" />
            <Row k="Email" v="b.lemaire@moreau.fr" />
          </div>
          <div className="mt-2 pt-2 border-t border-ink-border/70 text-[9px] text-lavender-dim">
            Adresse géocodée automatiquement.
          </div>
        </div>
      </div>
      <style>{`@keyframes cardScan { 0% { transform: translateY(-8px); opacity: 0; } 30% { opacity: 0.9; } 60% { transform: translateY(220%); opacity: 0.9; } 100% { transform: translateY(260%); opacity: 0; } }`}</style>
    </SceneShell>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-lavender-dim">{k}</span>
      <span className="text-lavender font-medium text-right truncate">{v}</span>
    </div>
  );
}

function SceneAgenda() {
  return (
    <SceneShell
      time="16:00"
      title="L'agenda"
      lead="Rainbow ajoute la note dans ton événement Google."
    >
      <div className="rounded-xl border border-ink-border bg-ink/60 overflow-hidden">
        <div className="flex">
          <div className="w-1.5 bg-spec-pink" />
          <div className="flex-1 p-4">
            <div className="text-lavender font-medium">Visite · Moreau SA</div>
            <div className="mt-1 flex items-center gap-2 text-[11px] text-lavender-muted font-mono">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <circle cx="6" cy="6" r="5" />
                <path d="M6 3 v3 L8 7.5" />
              </svg>
              16:00 – 17:00 · 12 rue des Forges, Villeurbanne
            </div>
            <div className="mt-3 flex gap-1.5 flex-wrap">
              <span className="px-2 py-0.5 rounded-md bg-ink-panel text-[10px] text-lavender-muted border border-ink-border/60">
                Benoît Lemaire
              </span>
              <span className="px-2 py-0.5 rounded-md bg-ink-panel text-[10px] text-lavender-muted border border-ink-border/60">
                Toi
              </span>
            </div>
            <div className="mt-4 rounded-lg border border-ink-border/60 bg-ink-panel/70 p-3">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.12em] uppercase text-lavender-dim">
                <Arc size={12} withGlow={false} strokeW={8} />
                <span className="text-lavender-muted">Ajouté par Rainbow</span>
                <span className="ml-auto">il y a 2 min</span>
              </div>
              <p className="mt-2 text-[11px] text-lavender-muted leading-relaxed">
                <strong className="text-lavender">Contexte.</strong> Devis gamme 400
                promis le 22 avril. 3 points ouverts : prix au mètre sur la 420,
                délai de livraison, extension de garantie. Concurrence citée :
                Kontek (–7% sur devis équivalent).
              </p>
              <p className="mt-2 text-[11px] text-lavender-muted leading-relaxed">
                <strong className="text-lavender">À ne pas oublier.</strong> Benoît
                aime le café noisette. Son chef (Fabrice) passe en fin de mois —
                proposer RDV conjoint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SceneShell>
  );
}

function SceneRelire() {
  const rows = [
    { t: "08:00", w: "Briefing reçu · 3 relances", tag: "notif", hl: false },
    { t: "09:15", w: "Contact créé · Benoît Lemaire (Moreau)", tag: "carte", hl: false },
    { t: "10:12", w: "CR visite Moreau · 4 points, 1 tâche", tag: "voix", hl: false },
    { t: "14:05", w: "CR Ateliers Durand · devis 420", tag: "voix", hl: false },
    { t: "16:45", w: "Note ajoutée dans Google Agenda", tag: "agenda", hl: true },
    { t: "17:20", w: "Rappel : devis 400 à envoyer demain", tag: "tâche", hl: false },
  ];
  return (
    <SceneShell
      time="19:30"
      title="Relire, au calme"
      lead="Le soir, tu passes au web. Tu relis, tu exportes."
    >
      <div className="rounded-xl border border-ink-border bg-ink/80 overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 border-b border-ink-border/60 bg-ink-panel/60">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-ink-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-ink-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-ink-border" />
          </div>
          <div className="ml-2 font-mono text-[10px] text-lavender-dim tracking-wide">
            app.askrainbow.ai / journal
          </div>
        </div>
        <div className="divide-y divide-ink-border/50">
          {rows.map((r, i) => (
            <div
              key={i}
              className={`grid grid-cols-[60px_1fr_auto] items-center gap-3 px-4 py-2.5 text-[11px] ${
                r.hl ? "bg-accent/5" : ""
              }`}
            >
              <span className="font-mono text-lavender-dim">{r.t}</span>
              <span className="text-lavender-muted truncate">{r.w}</span>
              <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-lavender-dim bg-ink-panel/60 border border-ink-border/60 rounded px-1.5 py-0.5">
                {r.tag}
              </span>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 border-t border-ink-border/60 flex justify-end">
          <button className="inline-flex items-center gap-2 text-[11px] font-medium text-lavender bg-ink-panel border border-ink-border px-3 py-1.5 rounded-lg hover:border-lavender-muted transition">
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M7 9V1 M7 1 L4 4 M7 1 L10 4 M2 9 v3 h10 v-3" />
            </svg>
            Exporter la journée · CSV
          </button>
        </div>
      </div>
    </SceneShell>
  );
}
