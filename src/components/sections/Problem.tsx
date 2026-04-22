import { DIRECTION } from "@/content/direction";
import { RainbowDivider } from "@/components/brand/RainbowDivider";
import { ProblemVisual } from "./ProblemVisual";

export function Problem() {
  return (
    <>
      <RainbowDivider />
      <section id="probleme" className="relative">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-lavender-dim mb-6">
            · 02 · Le constat ·
          </div>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-lavender">
            {DIRECTION.problem.title}
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-lavender-muted">
            {DIRECTION.problem.body}
          </p>

          <div className="mt-10 relative rounded-2xl border border-ink-border/60 bg-ink-panel/40 p-6 md:p-8">
            <div className="absolute -top-3 -left-2 font-serif text-6xl text-accent/40 leading-none select-none">
              &ldquo;
            </div>
            <p className="relative font-serif italic text-xl md:text-2xl text-lavender leading-snug">
              Un CRM demande que vous le teniez. Rainbow tient à votre place, et vous le relisez entre deux visites.
            </p>
          </div>

          <ProblemVisual />
        </div>
      </section>
    </>
  );
}
