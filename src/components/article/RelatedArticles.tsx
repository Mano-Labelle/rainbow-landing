import Link from "next/link";
import type { Article } from "@/content/articles";
import { articleUrl, articleCategoryLabel } from "@/content/articles";

export function RelatedArticles({ items }: { items: Article[] }) {
  if (!items.length) return null;
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-5">
      <h2 className="text-[22px] font-serif tracking-tight text-lavender-muted">
        À lire ensuite
      </h2>
      <ul className="grid sm:grid-cols-2 gap-4">
        {items.map((a) => (
          <li key={a.slug}>
            <Link
              href={articleUrl(a)}
              className="block h-full p-4 rounded-lg border border-ink-border/50 bg-ink-panel/30 hover:border-accent/60 hover:bg-ink-panel/60 transition"
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-lavender-dim mb-2">
                {articleCategoryLabel(a.category)}
              </div>
              <div className="font-serif text-[19px] text-lavender leading-snug">
                {a.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
