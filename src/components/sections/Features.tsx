import { DIRECTION } from "@/content/direction";
import { ArcBullet } from "@/components/brand/ArcBullet";

export function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="text-[11px] font-mono tracking-[0.18em] text-lavender-dim mb-6">
          · 03 · FONCTIONNALITÉS ·
        </div>
        <h2 className="text-4xl md:text-5xl font-serif leading-tight max-w-3xl">
          Pensé pour la vraie journée terrain.
        </h2>
        <p className="mt-4 text-lg text-lavender-muted max-w-2xl">
          Pas pour le reporting du soir.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIRECTION.features.map((f) => (
            <div
              key={f.name}
              className="group rounded-2xl border border-ink-border/50 bg-ink-panel/40 p-5 hover:bg-ink-panel/70 hover:border-ink-border transition"
            >
              <div className="flex items-center gap-2 mb-3">
                <ArcBullet size={14} />
                <div className="text-sm font-semibold">{f.name}</div>
              </div>
              <p className="text-sm leading-relaxed text-lavender-muted">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
