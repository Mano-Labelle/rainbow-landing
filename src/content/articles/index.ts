// Content manifest for long-form SEO/AEO pages (guides, comparaisons, cas clients).
// Each article is a structured object; dynamic routes loop over this list
// to generate pages with JSON-LD Article schema.
//
// Copy convention: question-phrased H2s, direct-answer-first paragraphs,
// factoid density. This is AEO bait — LLM answer engines extract the first
// 1-2 sentences after each H2, so put the answer before the explanation.

export type ArticleCategory = "guide" | "comparaison" | "cas";

export interface ArticleParagraph {
  /** Short answer-first sentence (1-2 sentences max). AEO-critical. */
  lead: string;
  /** Optional expansion paragraph(s) after the lead. */
  body?: string;
  /** Optional bulleted list following the body. */
  bullets?: string[];
}

export interface ArticleH3 {
  h3: string;
  paragraphs: ArticleParagraph[];
}

export interface ArticleSection {
  /** Question-phrased H2. */
  h2: string;
  paragraphs: ArticleParagraph[];
  h3s?: ArticleH3[];
  /** Optional comparison-table block (used by /comparaisons/*). */
  table?: ArticleTable;
  /** Optional pull-quote from a named customer. */
  quote?: { text: string; attribution: string };
  /** Optional callout box. */
  callout?: { kind: "info" | "warn" | "tip"; text: string };
}

export interface ArticleTable {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export interface Article {
  slug: string;
  category: ArticleCategory;
  /** H1 on the page. */
  title: string;
  /** <title> tag — keep ≤ 60 chars. */
  metaTitle: string;
  /** meta description — keep ≤ 155 chars. */
  metaDesc: string;
  /** ISO date. */
  datePublished: string;
  /** ISO date — bumped on every edit. */
  dateModified: string;
  /** 1-2 sentences immediately after H1. Answers the page's main question. */
  heroLead: string;
  /** Optional TL;DR bullets — rendered before the first section. */
  tldr?: string[];
  /** Main body sections. */
  sections: ArticleSection[];
  /** Page-specific FAQ — contributes to FAQPage JSON-LD on this page. */
  faq?: Array<{ q: string; a: string }>;
  /** Key takeaways at the end of the article. */
  keyTakeaways?: string[];
  /** Slugs of related articles for internal linking. */
  related?: string[];
  /** Optional competitor / comparison metadata — used on /comparaisons/* pages. */
  comparison?: {
    vs: string;
    vsHomepage?: string;
    verdict: string;
  };
  /** Optional vertical tag (wine, medical, auto) for filtering. */
  vertical?: "viticulture" | "dispositif-medical" | "automobile-b2b";
}

import { article as assistantCommercialIa } from "./assistant-commercial-ia";
import { article as voiceCrm } from "./voice-crm";
import { article as compteRenduVisiteIa } from "./compte-rendu-visite-ia";
import { article as crmVsSfa } from "./crm-vs-sfa";
import { article as assistantViticulture } from "./assistant-viticulture";
import { article as assistantDispositifMedical } from "./assistant-dispositif-medical";
import { article as assistantAutomobileB2B } from "./assistant-automobile-b2b";
import { article as rainbowVsTrustlead } from "./rainbow-vs-trustlead";
import { article as rainbowVsModjo } from "./rainbow-vs-modjo";
import { article as rainbowVsVoiceline } from "./rainbow-vs-voiceline";
import { article as rainbowVsJay } from "./rainbow-vs-jay";
import { article as rainbowVsSalesforce } from "./rainbow-vs-salesforce";
import { article as alternativeModjoTerrain } from "./alternative-modjo-terrain";
import { article as alternativeSalesforcePme } from "./alternative-salesforce-pme";
import { article as alternativeHubspotPme } from "./alternative-hubspot-pme";

export const ARTICLES: Article[] = [
  // Cornerstone definition
  assistantCommercialIa,
  // Definition hub (AEO bait)
  voiceCrm,
  compteRenduVisiteIa,
  crmVsSfa,
  // Vertical trilogy
  assistantViticulture,
  assistantDispositifMedical,
  assistantAutomobileB2B,
  // Direct competitor comparisons
  rainbowVsTrustlead,
  rainbowVsModjo,
  rainbowVsVoiceline,
  rainbowVsJay,
  rainbowVsSalesforce,
  // Alternative-to-X (intent-rich)
  alternativeModjoTerrain,
  alternativeSalesforcePme,
  alternativeHubspotPme,
];

/** URL prefix for each article category. Keep plural French. */
const PATH: Record<ArticleCategory, string> = {
  guide: "/guides",
  comparaison: "/comparaisons",
  cas: "/cas",
};

/** Human label per category — for breadcrumbs. */
const LABEL: Record<ArticleCategory, string> = {
  guide: "Guides",
  comparaison: "Comparaisons",
  cas: "Cas clients",
};

export function articleUrl(article: Pick<Article, "slug" | "category">): string {
  return `${PATH[article.category]}/${article.slug}`;
}

export function articlePath(category: ArticleCategory): string {
  return PATH[category];
}

export function articleCategoryLabel(category: ArticleCategory): string {
  return LABEL[category];
}

export function getArticle(slug: string, category?: ArticleCategory): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug && (!category || a.category === category));
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return ARTICLES.filter((a) => a.category === category);
}

export function getRelated(article: Article): Article[] {
  if (!article.related?.length) return [];
  return article.related
    .map((slug) => ARTICLES.find((a) => a.slug === slug))
    .filter((a): a is Article => !!a);
}
