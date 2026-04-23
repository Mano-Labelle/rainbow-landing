// JSON-LD schema generators. One set per direction (metaTitle/desc vary).
// Consumed by src/components/seo/JsonLd.tsx to inject into <head>.

import type { Direction } from "./direction";
import { FAQ } from "./direction";
import type { Article } from "./articles";
import {
  articleUrl,
  articlePath,
  articleCategoryLabel,
} from "./articles";

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
    operatingSystem: "iOS, Web",
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
      description: "Bêta gratuite, sans carte bancaire",
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

/**
 * Per-article schema set. Injected on /guides/*, /comparaisons/*, /cas/*.
 * Returns an Article schema, an optional FAQPage schema (if the article has
 * its own FAQ), and a 3-level BreadcrumbList.
 */
export function buildArticleSchemas(article: Article): object[] {
  const url = BASE + articleUrl(article);

  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": article.category === "cas" ? "CaseStudy" : "Article",
    "@id": url + "#article",
    headline: article.title,
    description: article.metaDesc,
    url,
    inLanguage: "fr-FR",
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { "@id": BASE + "#organization" },
    publisher: { "@id": BASE + "#organization" },
    isPartOf: { "@id": BASE + "#organization" },
    mainEntityOfPage: url,
    image: BASE + "/og.png",
  };

  const schemas: object[] = [articleSchema];

  if (article.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": url + "#faq",
      inLanguage: "fr-FR",
      mainEntity: article.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    });
  }

  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": url + "#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: BASE + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: articleCategoryLabel(article.category),
        item: BASE + articlePath(article.category),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: url,
      },
    ],
  });

  return schemas;
}
