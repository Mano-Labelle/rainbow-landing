import Link from "next/link";
import { DIRECTION } from "@/content/direction";
import { ANDROID_APP_URL, IOS_APP_URL } from "@/content/app-urls";
import type { Article } from "@/content/articles";

/** Inline TL;DR bullets + post-article CTA block. */

export function Tldr({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <aside
      aria-label="Points clés"
      className="max-w-3xl mx-auto px-6 my-6"
    >
      <div className="rounded-lg border border-accent/30 bg-accent/5 p-5">
        <div className="text-xs font-mono uppercase tracking-wider text-accent mb-3">
          En bref
        </div>
        <ul className="space-y-2">
          {items.map((b, i) => (
            <li
              key={i}
              className="pl-5 relative text-lavender leading-relaxed before:content-['›'] before:absolute before:left-0 before:text-accent"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export function KeyTakeaways({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <section
      aria-label="À retenir"
      className="max-w-3xl mx-auto px-6 py-6"
    >
      <div className="rounded-lg border border-ink-border/60 bg-ink-panel/40 p-5">
        <h2 className="text-[19px] font-serif text-lavender mb-3">
          À retenir
        </h2>
        <ul className="space-y-2">
          {items.map((b, i) => (
            <li
              key={i}
              className="pl-5 relative text-lavender-muted leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-accent"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ArticleCta({ article }: { article: Article }) {
  return (
    <section
      aria-label="Essayer Rainbow"
      className="max-w-3xl mx-auto px-6 py-10"
    >
      <div className="rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/10 to-spec-violet/10 p-8 text-center space-y-4">
        <h2 className="text-[28px] font-serif text-lavender">
          Essayez Rainbow
          {article.category === "comparaison" && article.comparison
            ? ` — l'alternative à ${article.comparison.vs}`
            : ""}
        </h2>
        <p className="text-lavender-muted leading-relaxed max-w-lg mx-auto">
          {DIRECTION.positioning}
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={IOS_APP_URL}
            className="inline-block px-6 py-3 rounded-lg bg-accent text-ink font-medium hover:opacity-90 transition"
          >
            Télécharger sur iOS
          </a>
          <a
            href={ANDROID_APP_URL}
            className="inline-block px-6 py-3 rounded-lg border border-accent/60 text-accent font-medium hover:bg-accent hover:text-ink transition"
          >
            Télécharger sur Android
          </a>
          <a
            href="https://app.askrainbow.ai"
            className="inline-block px-6 py-3 rounded-lg border border-ink-border bg-ink-panel/60 text-lavender font-medium hover:border-lavender-muted transition"
          >
            Version web
          </a>
        </div>
        <div className="text-xs text-lavender-dim font-mono">
          Bêta gratuite · sans carte bancaire · iPhone, Android, web
        </div>
      </div>
    </section>
  );
}
