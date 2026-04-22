import type { Metadata } from "next";
import { ArticleIndex } from "@/components/article/ArticleIndex";

export const metadata: Metadata = {
  title: "Cas clients Rainbow — commerciaux terrain en action",
  description:
    "Comment des commerciaux terrain (vin, dispositif médical, automobile B2B) utilisent Rainbow au quotidien. Retours d'expérience, chiffres, usages.",
  alternates: { canonical: "/cas" },
  openGraph: {
    title: "Cas clients Rainbow",
    description:
      "Comment des commerciaux terrain utilisent Rainbow au quotidien — retours d'expérience, chiffres, usages.",
    url: "https://askrainbow.ai/cas",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Cas clients Rainbow" }],
  },
};

export default function Page() {
  return (
    <ArticleIndex
      category="cas"
      title="Cas clients"
      lead="Des commerciaux terrain qui utilisent Rainbow. Comment ils s'en servent au quotidien et ce que ça leur fait gagner."
    />
  );
}
