import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { StoreButton } from "@/components/brand/StoreButton";
import { IOS_APP_URL, ANDROID_APP_URL, WEB_APP_URL } from "@/content/app-urls";

const SITE = "https://askrainbow.ai";
const URL = `${SITE}/beta`;

export const metadata: Metadata = {
  title: "Bêta AskRainbow — gratuite, sans carte bancaire",
  description:
    "AskRainbow est en bêta gratuite, sans carte bancaire, sans engagement, sans minimum d'utilisateurs. iPhone, Android, web. Le tarif post-bêta est discuté au cas par cas — écrivez-nous pour en parler.",
  alternates: { canonical: "/beta" },
  openGraph: {
    title: "Bêta AskRainbow — gratuite, sans carte",
    description:
      "Installez, parlez, exportez. La bêta est gratuite, sans carte. Pour le pricing post-bêta, on se parle.",
    url: URL,
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bêta AskRainbow" }],
  },
};

const FEATURES_INCLUDED = [
  "Dictée vocale illimitée",
  "Chat écrit illimité",
  "Extraction automatique : contacts, entreprises, tâches, dates, montants",
  "Comptes-rendus structurés",
  "Briefing avant rendez-vous (« prépare la visite chez Moreau »)",
  "Photo → contact / produit (carte de visite, étiquette, devis)",
  "Export CSV à tout moment",
  "Mode hors-ligne natif",
  "Synchronisation iPhone, Android, web",
  "Hébergement France, RGPD",
];

const BETA_FAQ = [
  {
    q: "Combien coûte la bêta ?",
    a: "Rien. La bêta est entièrement gratuite, sans carte bancaire, sans minimum d'utilisateurs, sans engagement. Vous installez, vous parlez à Rainbow, vous exportez en CSV. Vous décidez.",
  },
  {
    q: "Et après la bêta, combien ça coûtera ?",
    a: "Le tarif post-bêta n'est pas publié sur le site. Il est discuté au cas par cas en fonction de votre profil (commercial individuel, équipe, secteur). Pour en parler dès maintenant : mano@askrainbow.ai. Tous les utilisateurs bêta sont prévenus plusieurs semaines à l'avance avant tout passage payant.",
  },
  {
    q: "Pourquoi pas de prix affiché ?",
    a: "AskRainbow est encore en phase d'apprentissage marché. Le pricing sera fixé une fois la bêta clôturée, en fonction des retours utilisateurs. Plutôt qu'afficher un chiffre que nous changerions probablement, nous préférons en discuter directement avec ceux qui utilisent le produit.",
  },
  {
    q: "Y a-t-il un minimum d'utilisateurs ?",
    a: "Non. Un commercial seul peut s'inscrire — c'est même un cas d'usage prioritaire (commercial freelance, indépendant, TPE). Pas de minimum de sièges, pas de palier d'équipe.",
  },
  {
    q: "Y a-t-il un engagement pour la bêta ?",
    a: "Non. Vous pouvez désinstaller à tout moment et exporter toutes vos données en CSV depuis l'application ou le web. Vos données vous appartiennent.",
  },
  {
    q: "Faut-il une carte bancaire pour s'inscrire ?",
    a: "Non. Aucune carte demandée pour la bêta. Vous téléchargez Rainbow sur iPhone, Android ou ouvrez la version web, et vous l'utilisez tant que vous voulez pendant la bêta.",
  },
  {
    q: "Comment serai-je prévenu du passage payant ?",
    a: "Par email, plusieurs semaines à l'avance, avec la marche à suivre. Vous pouvez à tout moment exporter toutes vos données en CSV avant de décider.",
  },
  {
    q: "Et pour une équipe de plusieurs commerciaux ?",
    a: "L'équipe peut s'inscrire en bêta sans aucune contrainte. Pour discuter du tarif post-bêta d'une équipe (5 à 30 commerciaux), contactez mano@askrainbow.ai — la conversation se fait directement avec l'éditeur.",
  },
  {
    q: "Le pricing inclura-t-il un support ?",
    a: "Oui. Vous écrivez par email à mano@askrainbow.ai, vous obtenez une réponse dans la journée ouvrée. Pas de chatbot, pas de file d'attente — vous parlez directement à l'éditeur. C'est déjà le cas pendant la bêta.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": URL + "#faq",
  inLanguage: "fr-FR",
  mainEntity: BETA_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "@id": URL + "#offer",
  url: URL,
  name: "AskRainbow — assistant commercial IA (bêta gratuite)",
  description:
    "Assistant commercial IA pour commerciaux terrain B2B. Bêta gratuite sans carte. Tarif post-bêta discuté au cas par cas (mano@askrainbow.ai).",
  price: "0",
  priceCurrency: "EUR",
  availability: "https://schema.org/InStock",
  validFrom: "2026-04-22",
  category: "BusinessApplication",
  seller: { "@id": SITE + "#organization" },
  itemOffered: { "@id": SITE + "/#software" },
  eligibleRegion: { "@type": "Country", name: "France" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": URL + "#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "Bêta", item: URL },
  ],
};

export default function BetaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Nav />

      <main className="mx-auto max-w-4xl px-6 pt-10 pb-24">
        <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-accent">
          Bêta · askrainbow.ai
        </div>

        <h1 className="mt-4 text-4xl md:text-5xl font-serif leading-[1.05] tracking-tight text-lavender">
          Bêta gratuite. Pour le reste, on se parle.
        </h1>

        <p className="mt-6 text-lg text-lavender-muted leading-relaxed max-w-2xl">
          AskRainbow est en bêta gratuite, sans carte bancaire, sans engagement,
          sans minimum d&apos;utilisateurs. Le tarif post-bêta sera fixé après la
          fin de la bêta et discuté au cas par cas. Pour en parler tout de suite :
          <a href="mailto:mano@askrainbow.ai" className="ml-1 underline decoration-dotted underline-offset-2 hover:text-lavender">mano@askrainbow.ai</a>.
        </p>

        {/* Pricing card */}
        <section className="mt-12 rounded-2xl border border-ink-border/50 bg-ink-panel/40 p-8 md:p-10">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <div>
              <div className="text-xs font-mono tracking-[0.16em] uppercase text-spec-green">
                Bêta · gratuit · sans carte
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-6xl font-serif text-lavender">0&nbsp;€</span>
                <span className="text-lavender-muted">aujourd&apos;hui</span>
              </div>
              <div className="mt-4 text-sm text-lavender-muted leading-relaxed">
                <p>
                  Pas de carte bancaire demandée. Vous installez, vous parlez à
                  Rainbow, vous exportez en CSV. Vous décidez.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-ink-border/40">
                <div className="text-xs font-mono tracking-[0.16em] uppercase text-lavender-dim">
                  Au-delà de la bêta
                </div>
                <p className="mt-3 text-sm text-lavender-muted leading-relaxed">
                  Le tarif post-bêta est discuté au cas par cas — un commercial
                  individuel, une TPE, une équipe de 10 commerciaux n&apos;ont pas
                  le même contexte. Pour en parler maintenant, ou être prévenu
                  avant le passage payant :{" "}
                  <a href="mailto:mano@askrainbow.ai" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                    mano@askrainbow.ai
                  </a>
                  .
                </p>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono tracking-[0.16em] uppercase text-lavender-dim">
                Tout est inclus pendant la bêta
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-lavender">
                {FEATURES_INCLUDED.map((feat) => (
                  <li key={feat} className="flex gap-3">
                    <span className="mt-[7px] inline-block w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-ink-border/40 flex flex-wrap items-center gap-3">
            <StoreButton kind="apple" />
            <StoreButton kind="google" />
            <StoreButton kind="web" variant="ghost" />
          </div>
        </section>

        {/* What's NOT included */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-serif text-lavender">
            Ce qu&apos;on ne fera jamais payer
          </h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-ink-border/50 bg-ink-panel/30 p-5">
              <div className="text-xs font-mono uppercase tracking-[0.14em] text-lavender-dim">
                Pas de surcoût IA
              </div>
              <p className="mt-2 text-lavender-muted leading-relaxed">
                La dictée vocale, l&apos;extraction d&apos;entités, les briefings :
                tout est inclus. Pas de jeton à recharger.
              </p>
            </div>
            <div className="rounded-xl border border-ink-border/50 bg-ink-panel/30 p-5">
              <div className="text-xs font-mono uppercase tracking-[0.14em] text-lavender-dim">
                Pas de paywall export
              </div>
              <p className="mt-2 text-lavender-muted leading-relaxed">
                L&apos;export CSV est inclus à tous les niveaux. Vos données vous
                appartiennent et restent portables, payantes ou non.
              </p>
            </div>
            <div className="rounded-xl border border-ink-border/50 bg-ink-panel/30 p-5">
              <div className="text-xs font-mono uppercase tracking-[0.14em] text-lavender-dim">
                Pas de frais setup
              </div>
              <p className="mt-2 text-lavender-muted leading-relaxed">
                Pas d&apos;installation, pas de formation obligatoire, pas de
                consultant. Vous téléchargez et vous parlez.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-serif text-lavender">
            Questions sur la bêta
          </h2>
          <div className="mt-6 divide-y divide-ink-border/40 border-y border-ink-border/40">
            {BETA_FAQ.map((item) => (
              <details
                key={item.q}
                className="group py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base text-lavender">
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="shrink-0 w-6 h-6 rounded-full border border-ink-border flex items-center justify-center text-lavender-muted transition-transform group-open:rotate-45 group-open:bg-accent group-open:text-ink group-open:border-accent"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
                      <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-lavender-muted leading-relaxed max-w-3xl">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section className="mt-16 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-serif text-lavender">
                Essayez. Discutons après.
              </h2>
              <p className="mt-2 text-sm text-lavender-muted">
                Bêta gratuite. Sans carte. iPhone, Android, web.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={IOS_APP_URL}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-accent text-ink hover:opacity-90 transition"
              >
                Télécharger sur iPhone
              </a>
              <a
                href={ANDROID_APP_URL}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border border-accent/60 text-accent hover:bg-accent hover:text-ink transition"
              >
                Télécharger sur Android
              </a>
              <a
                href={WEB_APP_URL}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border border-ink-border text-lavender hover:border-lavender transition"
              >
                Ouvrir la version web
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="mt-16 text-sm text-lavender-muted">
          <div className="text-xs font-mono uppercase tracking-[0.14em] text-lavender-dim">
            Pour aller plus loin
          </div>
          <ul className="mt-3 space-y-1.5">
            <li>
              <Link href="/ma-commission" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Calculez ce qu&apos;AskRainbow vous fait gagner par an
              </Link>
            </li>
            <li>
              <Link href="/comparaisons" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Comparaisons : Rainbow vs Salesforce, Modjo, HubSpot…
              </Link>
            </li>
            <li>
              <Link href="/guides/assistant-commercial-ia" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Qu&apos;est-ce qu&apos;un assistant commercial IA ?
              </Link>
            </li>
            <li>
              <a href="mailto:mano@askrainbow.ai" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Parler tarif maintenant — mano@askrainbow.ai
              </a>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
