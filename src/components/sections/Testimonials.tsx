import { DIRECTION } from "@/content/direction";
import { SectionHead } from "@/components/brand/SectionHead";

export function Testimonials() {
  return (
    <section
      id="avis"
      className="relative bg-ink-panel/40 border-y border-ink-border/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <SectionHead
          index="08"
          label="Ils chattent avec Rainbow"
          title={<>Trois voix sur le terrain.</>}
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {DIRECTION.testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl border border-ink-border/50 bg-ink/50 p-6 flex flex-col"
            >
              <blockquote className="font-serif italic text-lg leading-relaxed text-lavender flex-1">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-ink-border/40 flex items-center gap-3">
                <div
                  aria-hidden
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-spec-pink/30 to-spec-violet/30 border border-ink-border"
                />
                <div>
                  <div className="font-semibold text-sm text-lavender">{t.author}</div>
                  <div className="text-xs text-lavender-dim mt-0.5">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
