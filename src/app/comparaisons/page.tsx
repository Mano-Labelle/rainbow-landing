import type { Metadata } from "next";
import { ArticleIndex } from "@/components/article/ArticleIndex";

export const metadata: Metadata = {
  title: "Comparaisons — Rainbow vs Salesforce, HubSpot, Modjo, Trustlead",
  description:
    "Rainbow vs les CRM et assistants IA du marché. Comparaisons concrètes pour commerciaux terrain — positionnement, prix, usage, alternatives.",
  alternates: { canonical: "/comparaisons" },
  openGraph: {
    title: "Comparaisons Rainbow",
    description:
      "Rainbow vs les CRM et assistants IA du marché. Comparaisons pour commerciaux terrain.",
    url: "https://askrainbow.ai/comparaisons",
    type: "website",
    locale: "fr_FR",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Comparaisons Rainbow" },
    ],
  },
};

export default function Page() {
  return (
    <ArticleIndex
      category="comparaison"
      title="Comparaisons"
      lead="Rainbow en face des outils existants. Ce que vous gagnez, ce qui reste différent, et quand un outil est mieux placé qu'un autre."
    />
  );
}
