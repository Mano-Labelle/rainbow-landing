import { SectionHead } from "@/components/brand/SectionHead";

const PORTES = [
  {
    name: "iPhone",
    tag: "App Store",
    body: "Un bouton large, utilisable sans regarder. Enregistre même en sous-sol.",
    icon: <AppleIcon />,
  },
  {
    name: "Android",
    tag: "Google Play",
    body: "Même conversation, même notes, synchronisées en arrière-plan.",
    icon: <AndroidIcon />,
  },
  {
    name: "Web",
    tag: "app.askrainbow.ai",
    body: "Pour relire, chercher, exporter. Le clavier quand vous êtes au bureau.",
    icon: <BrowserIcon />,
  },
];

export function Portes() {
  return (
    <section id="portes" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHead
          index="07"
          label="Trois portes, une conversation"
          title={<>Une seule appli. Trois endroits où la retrouver.</>}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-4 md:gap-6">
          {PORTES.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-ink-border/60 bg-ink-panel/40 p-8 text-center hover:border-ink-border transition"
            >
              <div className="flex justify-center text-lavender">{p.icon}</div>
              <div className="mt-5 font-serif text-2xl text-lavender">{p.name}</div>
              <div className="mt-1 font-mono text-[11px] tracking-[0.12em] uppercase text-lavender-dim">
                {p.tag}
              </div>
              <p className="mt-4 text-sm text-lavender-muted leading-relaxed max-w-xs mx-auto">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function AndroidIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.6 9.48l1.84-3.18a.4.4 0 10-.69-.4l-1.86 3.23a11.87 11.87 0 00-9.78 0L5.25 5.9a.4.4 0 10-.69.4L6.4 9.48A10.8 10.8 0 001 18h22a10.8 10.8 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
    </svg>
  );
}

function BrowserIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden
    >
      <rect x="2.5" y="3.5" width="19" height="17" rx="2" />
      <path d="M2.5 8.5h19" />
      <circle cx="5.5" cy="6" r=".6" fill="currentColor" />
      <circle cx="7.5" cy="6" r=".6" fill="currentColor" />
      <circle cx="9.5" cy="6" r=".6" fill="currentColor" />
    </svg>
  );
}
