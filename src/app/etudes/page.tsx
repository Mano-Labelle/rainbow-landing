import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Études AskRainbow — données originales sur les commerciaux terrain",
  description:
    "Études qualitatives et quantitatives publiées par AskRainbow sur les commerciaux terrain B2B français : pains, outils, pricing, secteurs.",
  alternates: { canonical: "/etudes" },
  openGraph: {
    title: "Études AskRainbow",
    description:
      "Données originales sur les commerciaux terrain B2B en France.",
    url: "https://askrainbow.ai/etudes",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Études AskRainbow" }],
  },
};

const STUDIES = [
  {
    slug: "commerciaux-terrain-2026",
    title: "10 commerciaux terrain en France parlent",
    subtitle:
      "Étude qualitative menée hiver 2026 auprès de 10 commerciaux français (vin, dispositif médical, automobile B2B, AgTech, FMCG retail). Pains, outils, pricing accepté.",
    date: "Mai 2026",
    method: "Qualitative · n=10",
  },
];

export default function EtudesIndex() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-10 pb-24">
        <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-accent">
          Études · askrainbow.ai
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-serif leading-[1.05] tracking-tight text-lavender">
          Données originales sur les commerciaux terrain.
        </h1>
        <p className="mt-6 text-lg text-lavender-muted leading-relaxed">
          AskRainbow publie ses propres études qualitatives et quantitatives sur les commerciaux terrain B2B français. Méthodologie transparente, citations attribuables, données téléchargeables sur demande. Licence CC BY 4.0.
        </p>

        <section className="mt-12 space-y-6">
          {STUDIES.map((s) => (
            <Link
              key={s.slug}
              href={`/etudes/${s.slug}`}
              className="block rounded-2xl border border-ink-border/40 bg-ink-panel/30 p-6 hover:border-accent/40 transition"
            >
              <div className="flex items-baseline justify-between gap-4">
                <div className="text-xs font-mono uppercase tracking-[0.14em] text-lavender-dim">
                  {s.date} · {s.method}
                </div>
              </div>
              <h2 className="mt-2 text-2xl font-serif text-lavender">{s.title}</h2>
              <p className="mt-2 text-sm text-lavender-muted leading-relaxed">{s.subtitle}</p>
              <div className="mt-3 text-xs font-mono text-accent">Lire l&apos;étude →</div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
