import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import type { ArticleCategory, Article } from "@/content/articles";
import {
  articleUrl,
  articleCategoryLabel,
  getArticlesByCategory,
} from "@/content/articles";

export interface ArticleIndexProps {
  category: ArticleCategory;
  title: string;
  lead: string;
  /** Shown when the list is empty. */
  emptyLabel?: string;
}

export function ArticleIndex({
  category,
  title,
  lead,
  emptyLabel = "Bientôt disponible.",
}: ArticleIndexProps) {
  const items: Article[] = getArticlesByCategory(category);
  return (
    <>
      <Nav />
      <main>
        <header className="max-w-3xl mx-auto px-6 pt-14 pb-8 space-y-5">
          <nav
            aria-label="Fil d'Ariane"
            className="text-sm text-lavender-dim flex items-center gap-2"
          >
            <Link href="/" className="hover:text-lavender transition">
              Accueil
            </Link>
            <span aria-hidden>›</span>
            <span className="text-lavender-muted">
              {articleCategoryLabel(category)}
            </span>
          </nav>
          <h1 className="font-serif text-[40px] md:text-[48px] leading-[1.05] tracking-tight text-lavender">
            {title}
          </h1>
          <p className="text-[19px] text-lavender-muted leading-relaxed">
            {lead}
          </p>
        </header>
        <section className="max-w-3xl mx-auto px-6 pb-20">
          {items.length === 0 ? (
            <div className="text-lavender-dim font-mono text-sm py-12 border-t border-b border-ink-border/40 text-center">
              {emptyLabel}
            </div>
          ) : (
            <ul className="divide-y divide-ink-border/40 border-t border-b border-ink-border/40">
              {items.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={articleUrl(a)}
                    className="block py-5 hover:bg-ink-panel/30 transition px-2 -mx-2 rounded"
                  >
                    <div className="text-[11px] font-mono uppercase tracking-wider text-lavender-dim mb-1.5">
                      {articleCategoryLabel(a.category)}
                      {a.vertical ? ` · ${a.vertical.replace(/-/g, " ")}` : ""}
                    </div>
                    <div className="font-serif text-[22px] text-lavender leading-snug">
                      {a.title}
                    </div>
                    <div className="mt-1.5 text-lavender-muted text-[15px] leading-relaxed">
                      {a.metaDesc}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
