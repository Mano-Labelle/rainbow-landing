import { DIRECTION } from "@/content/direction";
import { buildSchemas } from "@/content/schemas";

/**
 * Injects JSON-LD schema blocks into <head>.
 * Emitted server-side so AEO crawlers (Perplexity, Claude search, Google) read them.
 */
export function JsonLd() {
  const schemas = buildSchemas(DIRECTION);
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
