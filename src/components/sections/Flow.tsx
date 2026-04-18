import { DIRECTION } from "@/content/direction";
import { SectionHead } from "@/components/brand/SectionHead";

const TITLES = ["Parler", "Écrire", "Relire", "Exporter"];

export function Flow() {
  const steps = DIRECTION.productExplain.paragraphs.map((body, i) => ({
    n: `0${i + 1}`,
    title: TITLES[i],
    body,
  }));

  return (
    <section id="fonctionnement" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHead
          index="04"
          label="La boucle"
          title={DIRECTION.productExplain.title}
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-ink-border/60 bg-ink-panel/40 p-6 hover:border-ink-border transition"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-[0.14em] text-accent">
                  {s.n}
                </span>
                <span className="font-serif text-xl text-lavender">{s.title}</span>
              </div>
              <p className="mt-4 text-sm text-lavender-muted leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
