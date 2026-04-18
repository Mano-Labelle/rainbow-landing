import { DIRECTION } from "@/content/direction";
import { Arc } from "@/components/brand/Arc";

const STEP_ICONS = [
  { label: "Parler", icon: "🎙" },
  { label: "Chatter", icon: "💬" },
  { label: "Relire", icon: "📖" },
  { label: "Exporter", icon: "📤" },
];

export function ProductExplain() {
  return (
    <section
      id="fonctionnement"
      className="relative bg-ink-panel/40 border-y border-ink-border/40"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="text-[11px] font-mono tracking-[0.18em] text-lavender-dim mb-6">
          · 02 · COMMENT ÇA MARCHE ·
        </div>
        <h2 className="text-4xl md:text-5xl font-serif leading-tight max-w-3xl">
          {DIRECTION.productExplain.title}
        </h2>

        <div className="mt-12 grid gap-8 md:gap-10">
          {DIRECTION.productExplain.paragraphs.map((p, i) => (
            <div
              key={i}
              className="flex gap-5 items-start max-w-3xl"
            >
              <div className="shrink-0 w-10 h-10 rounded-full border border-ink-border/60 bg-ink flex items-center justify-center font-mono text-sm text-lavender-muted">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-lg leading-relaxed text-lavender-muted">{p}</p>
            </div>
          ))}
        </div>

        {/* 4-step pillars */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {DIRECTION.headings.h3.map((label, i) => (
            <div
              key={label}
              className="rounded-2xl border border-ink-border/50 bg-ink/50 p-5 flex flex-col gap-3"
            >
              <div className="text-2xl">{STEP_ICONS[i]?.icon}</div>
              <div className="text-sm font-semibold">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center">
          <Arc size={36} withGlow />
        </div>
      </div>
    </section>
  );
}
