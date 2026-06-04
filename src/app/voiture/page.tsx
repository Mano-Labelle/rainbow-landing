import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { VoitureTool } from "@/components/leadmagnet/VoitureTool";

const SITE = "https://askrainbow.ai";

export const metadata: Metadata = {
  title: "Négocier sa voiture de fonction en 2026 — Rainbow",
  description:
    "Ce que tu peux vraiment négocier sur ta voiture de fonction en 2026 : budget, modèles, électrique, forfait km, pièges à la restitution. Le guide pour les commerciaux terrain.",
  alternates: { canonical: "/voiture" },
  openGraph: {
    title: "Négocier sa voiture de fonction en 2026",
    description:
      "Budget, modèles, électrique, forfait km, pièges. Le guide pour avoir la bonne caisse.",
    url: `${SITE}/voiture`,
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Rainbow" }],
  },
};

export default function VoiturePage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-10">
        <VoitureTool />
      </main>
      <Footer />
    </>
  );
}
