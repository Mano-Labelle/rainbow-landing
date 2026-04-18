import { DIRECTION } from "@/content/direction";
import { RInk } from "@/components/brand/RInk";
import { SectionHead } from "@/components/brand/SectionHead";
import { FEATURE_ICONS } from "@/components/brand/FeatureIcons";

export function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHead
          index="05"
          label="À quoi ressemble l'assistant"
          title={
            <>
              Huit manières d&apos;économiser <RInk>une journée</RInk> par semaine.
            </>
          }
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIRECTION.features.map((f, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <div
                key={f.name}
                className="group rounded-2xl border border-ink-border/50 bg-ink-panel/40 p-6 hover:bg-ink-panel/70 hover:border-ink-border transition"
              >
                <div className="mb-4 text-accent">
                  <Icon />
                </div>
                <div className="text-sm font-semibold text-lavender">{f.name}</div>
                <p className="mt-2 text-sm leading-relaxed text-lavender-muted">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
