import Link from "next/link";
import type { Article } from "@/content/articles";
import { articlePath, articleCategoryLabel } from "@/content/articles";

/** Hero block for an article page: breadcrumb → H1 → answer-first lead → meta. */
export function ArticleHero({ article }: { article: Article }) {
  const dateLabel = new Date(article.dateModified).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="max-w-3xl mx-auto px-6 pt-14 pb-8 space-y-6">
      <nav
        aria-label="Fil d'Ariane"
        className="text-sm text-lavender-dim flex items-center gap-2"
      >
        <Link href="/" className="hover:text-lavender transition">
          Accueil
        </Link>
        <span aria-hidden>›</span>
        <Link
          href={articlePath(article.category)}
          className="hover:text-lavender transition"
        >
          {articleCategoryLabel(article.category)}
        </Link>
      </nav>
      <h1 className="font-serif text-[36px] md:text-[44px] leading-[1.08] tracking-tight text-lavender">
        {article.title}
      </h1>
      <p className="text-[19px] text-lavender-muted leading-relaxed">
        {article.heroLead}
      </p>
      <div className="text-xs text-lavender-dim font-mono uppercase tracking-wider">
        Mis à jour le {dateLabel}
      </div>
    </header>
  );
}
