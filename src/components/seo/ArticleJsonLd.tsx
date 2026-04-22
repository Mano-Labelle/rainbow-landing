import type { Article } from "@/content/articles";
import { buildArticleSchemas } from "@/content/schemas";

/**
 * Injects Article + optional FAQPage + BreadcrumbList JSON-LD for a single
 * article page. Use inside /guides/[slug]/page.tsx etc. alongside the
 * site-wide <JsonLd /> in layout.tsx.
 */
export function ArticleJsonLd({ article }: { article: Article }) {
  const schemas = buildArticleSchemas(article);
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD injection
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
