import { DIRECTION } from "@/content/direction";

export function Testimonials() {
  return (
    <section
      id="avis"
      className="relative bg-ink-panel/40 border-y border-ink-border/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="text-[11px] font-mono tracking-[0.18em] text-lavender-dim mb-6">
          · 04 · ILS PARLENT À RAINBOW ·
        </div>
        <h2 className="text-4xl md:text-5xl font-serif leading-tight max-w-3xl">
          Ce qu&apos;on entend sur le terrain.
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {DIRECTION.testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl border border-ink-border/50 bg-ink/50 p-6 flex flex-col"
            >
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                className="text-accent/60 mb-4"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M0 18V8.4c0-3 .7-5.3 2.2-6.9C3.7.5 5.8-.1 8.4-.1v4.5c-1.5 0-2.6.4-3.3 1.2-.7.8-1.1 2-1.1 3.6H8v9H0zm13.6 0V8.4c0-3 .7-5.3 2.2-6.9C17.3.5 19.4-.1 22-.1v4.5c-1.5 0-2.6.4-3.3 1.2-.7.8-1.1 2-1.1 3.6h4.3v9h-8.3z"
                />
              </svg>
              <blockquote className="text-base leading-relaxed text-lavender flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-ink-border/40">
                <div className="font-semibold text-sm">{t.author}</div>
                <div className="text-xs text-lavender-dim mt-0.5">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
