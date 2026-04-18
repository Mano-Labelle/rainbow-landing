import { DIRECTION } from "@/content/direction";
import { Arc } from "@/components/brand/Arc";
import { RInk } from "@/components/brand/RInk";
import { StoreButton } from "@/components/brand/StoreButton";
import { FakeQR } from "@/components/brand/FakeQR";

export function CTA() {
  return (
    <section id="cta" className="relative">
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-ink-border/60 bg-ink-panel/40 px-8 py-14 md:px-14 md:py-20">
          {/* Arc glow decoration */}
          <div
            aria-hidden
            className="absolute -top-20 right-0 md:-right-8 opacity-40 pointer-events-none"
          >
            <Arc size={180} withGlow strokeW={3} />
          </div>
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 50% 0%, rgba(255,94,196,0.12), transparent 70%)",
            }}
          />

          <div className="relative">
            <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-lavender-dim">
              · Dernière scène ·
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-serif leading-[1.05] tracking-tight text-lavender max-w-2xl">
              Parle, scanne, planifie.
              <br />
              <RInk>Rainbow</RInk> s&apos;occupe du reste.
            </h2>
            <p className="mt-5 text-lavender-muted max-w-xl">
              {DIRECTION.pricing.hook}
            </p>

            <div className="mt-10 grid md:grid-cols-[auto_1fr] items-center gap-8 md:gap-12">
              <div className="hidden md:flex justify-start">
                <FakeQR size={200} />
              </div>
              <div>
                <div className="text-lavender font-serif text-xl">
                  Installe Rainbow sur ton téléphone.
                </div>
                <div className="mt-1 text-sm text-lavender-muted">
                  Scanne le QR, ou attrape-le dans les stores.
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <StoreButton kind="apple" href="https://app.askrainbow.ai" />
                  <StoreButton kind="google" href="https://app.askrainbow.ai" />
                </div>
                <div className="mt-5 text-xs font-mono tracking-wide text-lavender-dim">
                  {DIRECTION.pricing.note}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
