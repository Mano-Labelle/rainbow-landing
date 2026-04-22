import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ARTICLES,
  getArticle,
  articleUrl,
} from "@/content/articles";
import { ArticlePage } from "@/components/article/ArticlePage";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.filter((a) => a.category === "comparaison").map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug, "comparaison");
  if (!article) return {};
  const url = articleUrl(article);
  return {
    title: article.metaTitle,
    description: article.metaDesc,
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDesc,
      url: "https://askrainbow.ai" + url,
      type: "article",
      locale: "fr_FR",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: article.metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDesc,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug, "comparaison");
  if (!article) notFound();
  return <ArticlePage article={article} />;
}
