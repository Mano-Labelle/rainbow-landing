import { DIRECTION } from "@/content/direction";
import { Arc } from "@/components/brand/Arc";
import { RInk } from "@/components/brand/RInk";
import { StoreButton } from "@/components/brand/StoreButton";
import { AppleQR } from "@/components/brand/AppleQR";
import { AndroidWaitlist } from "@/components/waitlist/AndroidWaitlist";

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
              Parlez, scannez, planifiez.
              <br />
              <RInk>Rainbow</RInk> s&apos;occupe du reste.
            </h2>
            <p className="mt-5 text-lavender-muted max-w-xl">
              {DIRECTION.pricing.hook}
            </p>

            <div className="mt-10 grid md:grid-cols-[auto_1fr] items-start gap-8 md:gap-12">
              <div className="hidden md:flex flex-col items-start gap-2">
                <AppleQR size={200} />
                <div className="text-[11px] font-mono tracking-[0.12em] uppercase text-lavender-dim">
                  Scannez pour l&apos;App Store
                </div>
              </div>
              <div>
                <div className="text-lavender font-serif text-xl">
                  Installez Rainbow sur votre téléphone.
                </div>
                <div className="mt-1 text-sm text-lavender-muted">
                  Scannez le QR, ou attrapez-le dans l&apos;App Store.
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <StoreButton kind="apple" />
                  <StoreButton kind="web" variant="ghost" />
                </div>
                <div className="mt-5 text-xs font-mono tracking-wide text-lavender-dim">
                  {DIRECTION.pricing.note}
                </div>

                {/* Android waitlist — anchored so other links can jump here */}
                <div
                  id="android-waitlist"
                  className="mt-10 pt-8 border-t border-ink-border/40"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="shrink-0 mt-0.5 w-8 h-8 rounded-lg border border-ink-border/60 bg-ink-panel/60 flex items-center justify-center text-lavender-muted">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M17.6 9.48l1.84-3.18a.4.4 0 10-.69-.4l-1.86 3.23a11.87 11.87 0 00-9.78 0L5.25 5.9a.4.4 0 10-.69.4L6.4 9.48A10.8 10.8 0 001 18h22a10.8 10.8 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-serif text-lg text-lavender">
                        Android — dans les 30 prochains jours
                      </div>
                      <div className="text-sm text-lavender-muted mt-1">
                        Rainbow Android arrive. Laissez votre email, on vous prévient dès que c&apos;est disponible.
                      </div>
                    </div>
                  </div>
                  <AndroidWaitlist source="android-waitlist" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
