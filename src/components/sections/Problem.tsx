import { DIRECTION } from "@/content/direction";
import { RainbowDivider } from "@/components/brand/RainbowDivider";

export function Problem() {
  return (
    <>
      <RainbowDivider />
      <section className="relative">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="text-[11px] font-mono tracking-[0.18em] text-lavender-dim mb-6">
            · 01 · LE PROBLÈME DU TERRAIN ·
          </div>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            {DIRECTION.problem.title}
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-lavender-muted">
            {DIRECTION.problem.body}
          </p>
        </div>
      </section>
    </>
  );
}
