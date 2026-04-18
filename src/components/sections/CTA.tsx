import { DIRECTION } from "@/content/direction";
import { Arc } from "@/components/brand/Arc";

export function CTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-ink-border/60 bg-ink-panel/40 px-8 py-14 md:px-14 md:py-20 text-center">
          {/* Ambient rainbow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(255,94,196,0.15), transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="flex justify-center mb-6">
              <Arc size={48} withGlow />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              {DIRECTION.pricing.hook}
            </h2>
            <p className="mt-4 text-lavender-muted">{DIRECTION.pricing.note}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://app.askrainbow.ai"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-ink text-sm font-semibold hover:shadow-[0_0_40px_rgba(255,94,196,0.6)] transition"
              >
                {DIRECTION.pricing.cta}
              </a>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-ink-border text-sm text-lavender-muted hover:text-lavender transition"
              >
                Lire les questions fréquentes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
