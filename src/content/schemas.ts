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
import { ANDROID_APP_URL, IOS_APP_URL, WEB_APP_URL } from "./app-urls";

const BASE = "https://askrainbow.ai";
const APP = WEB_APP_URL;

export function buildSchemas(dir: Direction) {
  const url = BASE + "/";

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": url + "#software",
    name: "AskRainbow",
    alternateName: ["Rainbow", "Rainbow AI", "askrainbow", "Rainbow assistant commercial"],
    disambiguatingDescription:
      "AskRainbow — assistant commercial IA (askrainbow.ai) pour commerciaux terrain B2B. À ne pas confondre avec l'application météo rainbow.ai.",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Assistant commercial IA (pas un CRM)",
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
      description: "Bêta gratuite, sans carte bancaire",
      availability: "https://schema.org/InStock",
    },
    featureList: dir.features.map((f) => f.name).join(", "),
    screenshot: url + "og.png",
    softwareVersion: "2026.1",
    downloadUrl: IOS_APP_URL,
    installUrl: IOS_APP_URL,
    publisher: { "@id": BASE + "#organization" },
    sameAs: [APP, IOS_APP_URL, ANDROID_APP_URL],
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": BASE + "#organization",
    name: "AskRainbow",
    alternateName: ["Rainbow", "Rainbow AI", "askrainbow", "AskRainbow France"],
    disambiguatingDescription:
      "Éditeur de l'assistant commercial IA AskRainbow (askrainbow.ai). À ne pas confondre avec rainbow.ai, application de prévisions météo.",
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
    knowsAbout: [
      "Assistant commercial IA",
      "Voice CRM",
      "Compte-rendu de visite",
      "Commerciaux terrain",
      "Sales enablement",
      "B2B field sales",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "mano@askrainbow.ai",
        availableLanguage: ["French"],
      },
    ],
    sameAs: [APP, IOS_APP_URL, ANDROID_APP_URL],
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

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": BASE + "#website",
    name: "AskRainbow",
    alternateName: ["Rainbow", "Rainbow AI", "askrainbow.ai"],
    url: BASE,
    inLanguage: "fr-FR",
    description: dir.seo.metaDesc,
    publisher: { "@id": BASE + "#organization" },
    about: { "@id": BASE + "#software" },
  };

  return [webSite, softwareApplication, organization, faqPage, breadcrumbList];
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
