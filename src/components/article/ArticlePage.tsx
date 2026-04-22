import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { ArticleHero } from "./ArticleHero";
import { Prose } from "./Prose";
import { Tldr, KeyTakeaways, ArticleCta } from "./TldrAndCta";
import { ArticleFaq } from "./ArticleFaq";
import { RelatedArticles } from "./RelatedArticles";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { type Article, getRelated } from "@/content/articles";

/**
 * Shared layout for every article page (guide, comparaison, cas). Wraps the
 * Nav/Footer and composes every block an article can have. Pages just pass
 * the Article and the component handles rendering order + conditional blocks.
 */
export function ArticlePage({ article }: { article: Article }) {
  const related = getRelated(article);
  return (
    <>
      <ArticleJsonLd article={article} />
      <Nav />
      <main>
        <ArticleHero article={article} />
        {article.tldr?.length ? <Tldr items={article.tldr} /> : null}
        <article className="max-w-3xl mx-auto px-6 py-8">
          <Prose sections={article.sections} />
        </article>
        {article.keyTakeaways?.length ? (
          <KeyTakeaways items={article.keyTakeaways} />
        ) : null}
        {article.faq?.length ? <ArticleFaq items={article.faq} /> : null}
        <ArticleCta article={article} />
        <RelatedArticles items={related} />
      </main>
      <Footer />
    </>
  );
}
