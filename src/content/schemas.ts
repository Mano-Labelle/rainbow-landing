// JSON-LD schema generators. One set per direction (metaTitle/desc vary).
// Consumed by src/components/seo/JsonLd.tsx to inject into <head>.

import type { Direction } from "./direction";
import { FAQ } from "./direction";

const BASE = "https://askrainbow.ai";
const APP = "https://app.askrainbow.ai";

export function buildSchemas(dir: Direction) {
  const url = BASE + "/";

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": url + "#software",
    name: "Rainbow",
    alternateName: "Rainbow AI",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Sales assistant (not a CRM)",
    operatingSystem: "iOS, Android, Web",
    description: dir.seo.metaDesc,
    url,
    inLanguage: "fr-FR",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Commerciaux terrain B2B",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Essai gratuit 14 jours, sans carte bancaire",
      availability: "https://schema.org/InStock",
    },
    featureList: dir.features.map((f) => f.name).join(", "),
    screenshot: url + "og.png",
    softwareVersion: "2026.1",
    publisher: { "@id": BASE + "#organization" },
    sameAs: [APP],
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": BASE + "#organization",
    name: "Rainbow AI",
    legalName: "Rainbow AI SAS",
    url: BASE,
    logo: BASE + "/logo.svg",
    description:
      "Éditeur français d'un assistant commercial IA pour commerciaux terrain.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Mano Labelle",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
      addressLocality: "Paris",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@askrainbow.ai",
        availableLanguage: ["French"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/rainbow-ai-fr",
      "https://twitter.com/rainbow_ai_fr",
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": url + "#faq",
    inLanguage: "fr-FR",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE + "/" },
    ],
  };

  return [softwareApplication, organization, faqPage, breadcrumbList];
}
