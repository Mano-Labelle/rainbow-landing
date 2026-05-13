import Link from "next/link";
import { DIRECTION } from "@/content/direction";
import { HeroChat } from "@/components/hero/HeroChat";
import { StoreButton } from "@/components/brand/StoreButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 0%, rgba(255,94,196,0.12), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 20%, rgba(91,184,255,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-16 md:pt-16 md:pb-24 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
        {/* Left: copy + CTA */}
        <div>
          <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-accent">
            Assistant commercial IA
          </div>

          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.02] tracking-tight text-lavender">
            <span className="block">Parlez.</span>
            <span className="block">
              <em className="not-italic">
                <span className="rink-warm">Rainbow</span>
              </em>{" "}
              prend les notes.
            </span>
          </h1>

          <p className="mt-6 text-lg text-lavender-muted leading-relaxed max-w-[30rem]">
            {DIRECTION.hero.subhead}
          </p>

          <div className="mt-8">
            <div className="text-xs font-mono tracking-[0.12em] uppercase text-lavender-dim">
              Rainbow vit sur votre téléphone
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <StoreButton kind="apple" />
              <StoreButton kind="google" />
              <StoreButton kind="web" variant="ghost" />
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-lavender-dim">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-spec-green" aria-hidden />
              <span>
                <Link
                  href="/beta"
                  className="underline decoration-dotted underline-offset-2 hover:text-lavender transition"
                >
                  Bêta gratuite, sans carte
                </Link>
                .
              </span>
            </div>
          </div>
        </div>

        {/* Right: animated chat */}
        <div className="relative">
          <HeroChat />
          <div className="mt-6 flex items-center justify-center text-xs text-lavender-dim italic">
            Vous parlez. Rainbow vous répond par écrit.
          </div>
        </div>
      </div>
    </section>
  );
}
