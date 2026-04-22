import Link from "next/link";

/**
 * "Pour aller plus loin" — internal-link block on the home page pointing
 * to the cornerstone article + vertical guides + top comparisons. Good for
 * SEO crawl depth and for users who want to learn before signing up.
 */

const CARDS: Array<{
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
}> = [
  {
    eyebrow: "Définition",
    title: "Qu'est-ce qu'un assistant commercial IA ?",
    desc: "La différence avec un CRM, ce que ça fait au quotidien, combien ça coûte en 2026.",
    href: "/guides/assistant-commercial-ia",
  },
  {
    eyebrow: "Comparaison",
    title: "Rainbow vs Salesforce",
    desc: "Quand un assistant vocal suffit, quand un CRM enterprise reste incontournable.",
    href: "/comparaisons/rainbow-vs-salesforce",
  },
  {
    eyebrow: "Comparaison",
    title: "Rainbow vs Modjo",
    desc: "Modjo écoute vos calls. Rainbow écoute votre terrain. Quand choisir lequel.",
    href: "/comparaisons/rainbow-vs-modjo",
  },
  {
    eyebrow: "Métier",
    title: "Assistant commercial vin & viticulture",
    desc: "Comment les commerciaux vin gagnent 4 h par semaine, et ce qui change en dégustation.",
    href: "/guides/assistant-commercial-viticulture",
  },
  {
    eyebrow: "Métier",
    title: "Assistant commercial dispositif médical",
    desc: "Traçabilité, fréquence de visite, alternatives à Veeva et IQVIA.",
    href: "/guides/assistant-commercial-dispositif-medical",
  },
  {
    eyebrow: "Métier",
    title: "Assistant commercial automobile B2B",
    desc: "40 outils, une seule voix. Flottes, LLD, suivi test-drives.",
    href: "/guides/assistant-commercial-automobile-b2b",
  },
];

export function Resources() {
  return (
    <section id="ressources" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-lavender-dim mb-4">
          · 10 · Pour aller plus loin ·
        </div>
        <h2 className="text-4xl md:text-5xl font-serif leading-tight text-lavender mb-12 max-w-3xl">
          Comprendre le sujet avant d&apos;essayer.
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CARDS.map((card) => (
            <li key={card.href}>
              <Link
                href={card.href}
                className="block h-full p-5 rounded-lg border border-ink-border/50 bg-ink-panel/30 hover:border-accent/60 hover:bg-ink-panel/60 transition"
              >
                <div className="text-[11px] font-mono uppercase tracking-wider text-lavender-dim mb-2">
                  {card.eyebrow}
                </div>
                <div className="font-serif text-[20px] text-lavender leading-snug mb-2">
                  {card.title}
                </div>
                <div className="text-sm text-lavender-muted leading-relaxed">
                  {card.desc}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-lavender-muted">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ink-border/60 hover:border-accent/60 hover:text-lavender transition"
          >
            Tous les guides →
          </Link>
          <Link
            href="/comparaisons"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ink-border/60 hover:border-accent/60 hover:text-lavender transition"
          >
            Toutes les comparaisons →
          </Link>
        </div>
      </div>
    </section>
  );
}
