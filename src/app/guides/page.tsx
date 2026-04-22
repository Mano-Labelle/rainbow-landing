import type { Metadata } from "next";
import { ArticleIndex } from "@/components/article/ArticleIndex";

export const metadata: Metadata = {
  title: "Guides Rainbow — assistant commercial IA pour commerciaux terrain",
  description:
    "Guides concrets pour commerciaux terrain : voice CRM, prise de notes vocale, compte-rendu automatique, outils par secteur (vin, dispositif médical, auto B2B).",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Guides Rainbow",
    description:
      "Guides concrets pour commerciaux terrain — voice CRM, prise de notes vocale, outils par secteur.",
    url: "https://askrainbow.ai/guides",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Guides Rainbow" }],
  },
};

export default function Page() {
  return (
    <ArticleIndex
      category="guide"
      title="Guides Rainbow"
      lead="Comment les commerciaux terrain gagnent du temps avec un assistant IA. Méthodologies, définitions, panoramas par secteur."
    />
  );
}
