import { DIRECTION } from "@/content/direction";
import { SectionHead } from "@/components/brand/SectionHead";

function MicIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="9"
        y="3"
        width="6"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5 11 a7 7 0 0 0 14 0 M12 18 v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6 a2 2 0 0 1 2 -2 h12 a2 2 0 0 1 2 2 v9 a2 2 0 0 1 -2 2 h-6 l-5 4 v-4 h-1 a2 2 0 0 1 -2 -2 z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="10.5" r="0.8" fill="currentColor" />
      <circle cx="12" cy="10.5" r="0.8" fill="currentColor" />
      <circle cx="15" cy="10.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8 a2 2 0 0 1 2 -2 h2 l1.5 -2 h5 l1.5 2 h2 a2 2 0 0 1 2 2 v10 a2 2 0 0 1 -2 2 h-14 a2 2 0 0 1 -2 -2 z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const CARDS: Array<{ title: string; icon: React.ReactNode }> = [
  { title: "Parler", icon: <MicIcon /> },
  { title: "Écrire", icon: <ChatIcon /> },
  { title: "Prendre une photo", icon: <CameraIcon /> },
];

export function Flow() {
  const steps = CARDS.map((c, i) => ({
    ...c,
    n: `0${i + 1}`,
    body: DIRECTION.productExplain.paragraphs[i],
  }));

  return (
    <section id="fonctionnement" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHead
          index="04"
          label="La boucle"
          title={DIRECTION.productExplain.title}
        />
        <div className="mt-12 grid sm:grid-cols-3 gap-4 md:gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-ink-border/60 bg-ink-panel/40 p-6 hover:border-ink-border transition"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-ink/60 border border-ink-border/60 flex items-center justify-center text-lavender">
                  {s.icon}
                </div>
                <span className="font-mono text-[11px] tracking-[0.14em] text-accent">
                  {s.n}
                </span>
              </div>
              <div className="mt-5 font-serif text-2xl text-lavender">
                {s.title}
              </div>
              <p className="mt-3 text-sm text-lavender-muted leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
