import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { SalaireTool } from "@/components/leadmagnet/SalaireTool";

const SITE = "https://askrainbow.ai";

export const metadata: Metadata = {
  title: "Combien gagne un commercial terrain en 2026 ? — Rainbow",
  description:
    "Le benchmark des salaires des commerciaux terrain et itinérants par secteur en 2026. Données Uptoo, APEC, Michael Page. Vois où tu te situes.",
  alternates: { canonical: "/salaires" },
  openGraph: {
    title: "Combien gagne un commercial terrain en 2026 ?",
    description:
      "Benchmark des salaires des itinérants par secteur. Vois où tu te situes.",
    url: `${SITE}/salaires`,
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Rainbow" }],
  },
};

export default function SalairesPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-10">
        <SalaireTool />
      </main>
      <Footer />
    </>
  );
}
