import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Calculator } from "@/components/commission/Calculator";
import { RainbowDivider } from "@/components/brand/RainbowDivider";
import { COMMISSION } from "@/content/direction";

export const metadata: Metadata = {
  title: COMMISSION.meta.title,
  description: COMMISSION.meta.description,
  alternates: { canonical: "/ma-commission" },
  openGraph: {
    title: COMMISSION.meta.title,
    description: COMMISSION.meta.description,
    url: "https://askrainbow.ai/ma-commission",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: COMMISSION.meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: COMMISSION.meta.title,
    description: COMMISSION.meta.description,
  },
};

export default function MaCommissionPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden">
          {/* Ambient glow — consistent with the hero treatment */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 70% 0%, rgba(255,94,196,0.12), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 20%, rgba(91,184,255,0.08), transparent 60%)",
            }}
          />

          <div className="relative mx-auto max-w-6xl px-6 pt-12 md:pt-16 pb-10">
            <div className="max-w-3xl">
              <div className="text-[11px] font-mono tracking-[0.18em] text-accent">
                {COMMISSION.hero.eyebrow}
              </div>
              <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] tracking-tight">
                {COMMISSION.hero.h1}
              </h1>
              <p className="mt-3 text-2xl md:text-3xl font-serif text-lavender-muted leading-tight">
                {COMMISSION.hero.subh}
              </p>
              <p className="mt-6 text-base md:text-lg text-lavender-muted leading-relaxed max-w-[36rem]">
                {COMMISSION.hero.lede}
              </p>
            </div>
          </div>
        </section>

        <RainbowDivider />

        <section className="relative">
          <div className="mx-auto max-w-6xl px-6 pt-14 pb-24 md:pt-20 md:pb-32">
            <Calculator />
            <p className="mt-10 text-xs text-lavender-dim italic max-w-2xl">
              {COMMISSION.footerNote}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
