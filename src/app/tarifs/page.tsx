import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { StoreButton } from "@/components/brand/StoreButton";
import { IOS_APP_URL, WEB_APP_URL } from "@/content/app-urls";

const SITE = "https://askrainbow.ai";
const URL = `${SITE}/tarifs`;

export const metadata: Metadata = {
  title: "Tarifs AskRainbow — 15 à 25 €/commercial/mois (bêta gratuite)",
  description:
    "AskRainbow est en bêta gratuite, sans carte bancaire. Le prix de lancement sera entre 15 et 25 €/commercial/mois, sans engagement, sans minimum d'utilisateurs.",
  alternates: { canonical: "/tarifs" },
  openGraph: {
    title: "Tarifs AskRainbow — assistant commercial IA",
    description:
      "Bêta gratuite, sans carte. Tarif de lancement : 15 à 25 €/commercial/mois, sans engagement.",
    url: URL,
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tarifs AskRainbow" }],
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
  "Synchronisation iPhone, Android (à venir), web",
  "Hébergement France, RGPD",
];

const PRICING_FAQ = [
  {
    q: "Pourquoi pas un prix fixe dès maintenant ?",
    a: "AskRainbow est encore en bêta. Le prix sera fixé entre 15 et 25 €/utilisateur/mois en fonction des retours des premiers commerciaux qui l'utilisent au quotidien. Vous serez prévenu plusieurs semaines avant tout passage payant.",
  },
  {
    q: "Y a-t-il un minimum d'utilisateurs ?",
    a: "Non. Un commercial seul peut s'abonner — c'est même un cas d'usage prioritaire (commercial freelance, indépendant, TPE). Pas de minimum de sièges, pas de palier d'équipe.",
  },
  {
    q: "Y a-t-il un engagement ?",
    a: "Non, abonnement mensuel sans engagement. Vous pouvez résilier à tout moment depuis votre espace, et vos données restent exportables en CSV.",
  },
  {
    q: "Faut-il une carte bancaire pour la bêta ?",
    a: "Non. La bêta est entièrement gratuite, sans carte bancaire. Vous téléchargez l'application iPhone ou utilisez la version web, et vous l'utilisez tant que vous voulez pendant la bêta.",
  },
  {
    q: "Comment serai-je prévenu du passage payant ?",
    a: "Par email, plusieurs semaines à l'avance, avec le tarif définitif et la marche à suivre. Vous pouvez à tout moment exporter toutes vos données en CSV avant de décider.",
  },
  {
    q: "Et pour une équipe de plusieurs commerciaux ?",
    a: "Le tarif est le même par utilisateur (15-25 €/mois). Pour une équipe de 5 à 30 commerciaux, vous pouvez facturer en une seule ligne, avec un administrateur unique. Contactez-nous à mano@askrainbow.ai pour les équipes de plus de 30.",
  },
  {
    q: "Le prix inclut-il un support ?",
    a: "Oui. Vous écrivez par email à mano@askrainbow.ai, vous obtenez une réponse dans la journée ouvrée. Pas de chatbot, pas de file d'attente — vous parlez directement à l'éditeur.",
  },
  {
    q: "Y a-t-il des frais cachés (setup, intégration, données) ?",
    a: "Non. Le tarif annoncé est le tarif final. Pas de frais d'installation, pas de surcoût pour l'export CSV, pas de paywall sur les fonctionnalités IA. La promesse : un prix par commercial, mensuel, transparent.",
  },
];

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "@id": URL + "#offer",
  url: URL,
  name: "AskRainbow — assistant commercial IA",
  description:
    "Assistant commercial IA pour commerciaux terrain B2B. Bêta gratuite sans carte ; 15 à 25 €/utilisateur/mois après lancement, sans engagement.",
  price: "0",
  priceCurrency: "EUR",
  priceSpecification: {
    "@type": "PriceSpecification",
    minPrice: "15",
    maxPrice: "25",
    priceCurrency: "EUR",
    description:
      "Tarif de lancement post-bêta : entre 15 et 25 €/utilisateur/mois, sans engagement.",
  },
  availability: "https://schema.org/InStock",
  validFrom: "2026-04-22",
  category: "BusinessApplication",
  seller: { "@id": SITE + "#organization" },
  itemOffered: { "@id": SITE + "/#software" },
  eligibleRegion: { "@type": "Country", name: "France" },
  acceptedPaymentMethod: ["http://purl.org/goodrelations/v1#ByBankTransfer"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": URL + "#faq",
  inLanguage: "fr-FR",
  mainEntity: PRICING_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": URL + "#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "Tarifs", item: URL },
  ],
};

export default function TarifsPage() {
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
          Tarifs · askrainbow.ai
        </div>

        <h1 className="mt-4 text-4xl md:text-5xl font-serif leading-[1.05] tracking-tight text-lavender">
          Un prix par commercial, mensuel, sans engagement.
        </h1>

        <p className="mt-6 text-lg text-lavender-muted leading-relaxed max-w-2xl">
          AskRainbow est l&apos;équivalent d&apos;un forfait mobile pour la prospection
          terrain. Pas de palier, pas de minimum d&apos;utilisateurs, pas de frais
          cachés. Aujourd&apos;hui en bêta gratuite, sans carte.
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
                  Au lancement payant
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-serif text-lavender">15 – 25 €</span>
                  <span className="text-sm text-lavender-muted">
                    / utilisateur / mois
                  </span>
                </div>
                <p className="mt-3 text-sm text-lavender-muted leading-relaxed">
                  Le tarif final sera fixé dans cette fourchette en fonction des
                  retours bêta. Vous serez prévenu par email plusieurs semaines à
                  l&apos;avance, avec le tarif définitif.
                </p>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono tracking-[0.16em] uppercase text-lavender-dim">
                Tout est inclus
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
            <StoreButton kind="web" variant="ghost" />
            <span className="text-xs text-lavender-dim ml-2">
              Android — bientôt.
            </span>
          </div>
        </section>

        {/* What's NOT included */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-serif text-lavender">
            Ce qui n&apos;est pas inclus (et ce qu&apos;on ne fera jamais payer)
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
            Questions tarifaires
          </h2>
          <div className="mt-6 divide-y divide-ink-border/40 border-y border-ink-border/40">
            {PRICING_FAQ.map((item) => (
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
                Essayez. Décidez après.
              </h2>
              <p className="mt-2 text-sm text-lavender-muted">
                Bêta gratuite. Sans carte. Désinstallez quand vous voulez.
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
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
