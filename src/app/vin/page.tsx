import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { StoreButton } from "@/components/brand/StoreButton";
import { HeroChat } from "@/components/hero/HeroChat";
import { ANDROID_APP_URL, IOS_APP_URL, WEB_APP_URL } from "@/content/app-urls";

const SITE = "https://askrainbow.ai";
const URL = `${SITE}/vin`;

export const metadata: Metadata = {
  title: "Rainbow pour le vin — assistant commercial IA cavistes & sommeliers",
  description:
    "AskRainbow est l'assistant commercial IA pour les commerciaux vin : cavistes, sommeliers, restaurateurs. Dictez en sortant, Rainbow note, vous vendez. Bêta gratuite, sans carte.",
  alternates: { canonical: "/vin" },
  openGraph: {
    title: "Rainbow pour le vin — caviste, sommelier, restaurateur",
    description:
      "Dictez à la sortie d'un caviste, Rainbow note, range, prépare la prochaine visite. Pour les commerciaux vin terrain.",
    url: URL,
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Rainbow pour le vin" }],
  },
};

const FOUR_PAINS = [
  {
    h: "Le compte-rendu du dimanche soir",
    p: "Vous rattrapez 8 visites le dimanche soir, à moitié de mémoire. Les trois quarts de ce qui s'est dit chez le caviste ne passe pas le filtre du résumé tapé à 21h.",
  },
  {
    h: "La mémoire relationnelle qui fuit",
    p: "Le prénom du fils, l'anniversaire du sommelier, la dégustation préférée — au bout de 6 mois, vous avez oublié. Le caviste le sent. La relation s'effrite.",
  },
  {
    h: "Les relances oubliées",
    p: "« Je vous rappelle dans 3 semaines pour la Saint-Vincent. » Noté nulle part. Oublié. Le caviste rappelle un autre négoce qui, lui, l'a noté.",
  },
  {
    h: "Le CRM rempli à 40 %",
    p: "Baqio, WineCRM, Excel partagé — vous avez tout. Vous remplissez rien. 40 % des champs CRM ne sont jamais remplis (Incenteev, toujours valide en 2026).",
  },
];

const WORKFLOW = [
  {
    title: "Dans la voiture, en sortant d'un caviste",
    body: "60 à 90 secondes de dictée libre. « Caviste Durand à Brive, carte orientée Bourgogne, attend mes prix sur les 2024 Pouilly-Fuissé. Anniversaire de sa fille dans 3 semaines. Commande probable de 12 cartons en rouge pour la Saint-Vincent. » Rainbow extrait : contact, entreprise, relance datée, montant probable, détail relationnel.",
  },
  {
    title: "Pendant une dégustation chez un restaurateur",
    body: "Vous écoutez le sommelier, vous dégustez, vous vendez. Rainbow est éteint. À la sortie, dans la voiture, vous dictez ce qu'il a dit sur le millésime 2022. Rainbow gère le vocabulaire métier (attaque, longueur, tanins, robe, minéralité, cépages, appellations).",
  },
  {
    title: "Le dimanche soir : plus rien à faire",
    body: "Avant Rainbow : 4 à 5 heures à rattraper la semaine. Après : un coup d'œil de validation. Vous parcourez les CR de la semaine déjà rédigés, vous validez, vous fermez l'app. Le dimanche redevient un dimanche.",
  },
];

const VS_BAQIO = {
  caption: "Comparaison rapide — pour aller plus loin : /comparaisons/rainbow-vs-baqio",
  rows: [
    ["Capture vocale en sortie de visite", "Oui — natif", "Non"],
    ["Mémoire relationnelle (anniversaires, préférences)", "Oui — natif", "Champs notes manuels"],
    ["Vocabulaire vin (cuvées, appellations, dégustation)", "Oui", "Adapté wine-industry"],
    ["Gestion de stock, commandes, facturation vin", "Non", "Oui — natif"],
    ["Mode hors-ligne (vignobles, caves)", "Oui — natif", "Limité"],
    ["Pricing 2026", "Bêta gratuite (post-bêta sur demande)", "≈ 58 €/u/mois (Baqio)"],
    ["Cible", "Commercial vin individuel ou équipe 1-30", "Domaines, négoces, distributeurs"],
  ],
};

const WINE_FAQ = [
  {
    q: "Rainbow remplace-t-il Baqio ou WineCRM ?",
    a: "Non. Baqio gère vos commandes, factures, stock — c'est l'outil du négoce. Rainbow capte la voix sur le terrain et alimente Baqio par export CSV. Les deux fonctionnent ensemble : Rainbow est la mémoire commerciale du commercial, Baqio est le système de gestion du négoce. Comparatif détaillé : /comparaisons/rainbow-vs-baqio.",
  },
  {
    q: "Rainbow comprend-il le vocabulaire viticole (cuvées, appellations, cépages, dégustation) ?",
    a: "Oui. Le modèle est entraîné sur les termes métier du vin : appellations françaises (Pouilly-Fuissé, Saint-Émilion, Châteauneuf-du-Pape…), cépages (Chardonnay, Pinot Noir, Cabernet…), termes de dégustation (attaque, longueur, robe, tanins, minéralité), millésimes, et les codes du métier.",
  },
  {
    q: "Mon employeur peut-il voir mes notes commerciales ?",
    a: "Sur l'abonnement individuel : non. Vos données vous appartiennent et restent privées. Sur l'abonnement équipe : les politiques d'accès sont explicites et paramétrables. Rainbow ne surveille pas le commercial — un point bloquant levé chez les commerciales vin interrogées : « j'aime pas être trackée. »",
  },
  {
    q: "Rainbow fonctionne-t-il en zone blanche (vignobles, caves, chais) ?",
    a: "Oui. Le mode hors ligne est natif — la dictée est enregistrée localement et synchronisée dès le retour de réseau. Adapté aux vignobles éloignés, aux caves voûtées et aux zones rurales sans 4G.",
  },
  {
    q: "Combien coûte Rainbow par rapport à Baqio pour un commercial vin ?",
    a: "AskRainbow est actuellement en bêta gratuite, sans carte bancaire. Le tarif post-bêta est discuté au cas par cas (mano@askrainbow.ai) — Rainbow et Baqio ne se remplacent pas, ils se complètent : Rainbow capte sur le terrain, Baqio (≈ 58 €/u/mois) gère le négoce.",
  },
  {
    q: "Comment commence-t-on ?",
    a: "Téléchargez Rainbow sur iPhone (App Store), Android (Google Play) ou ouvrez la version web. Bêta gratuite, sans carte bancaire. Première dictée en moins de 2 minutes — pas de setup, pas de formation.",
  },
  {
    q: "Y a-t-il des cas concrets de commerciaux vin qui utilisent Rainbow ?",
    a: "Oui. Voir notamment le cas anonymisé d'une commerciale vin sur 5 départements : /cas/commercial-vin-tournee-cavistes. Profil construit à partir de 3 entretiens utilisateurs menés en 2026.",
  },
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": URL + "#webpage",
  url: URL,
  name: "Rainbow pour le vin — assistant commercial IA cavistes & sommeliers",
  description:
    "AskRainbow est l'assistant commercial IA pour les commerciaux vin : cavistes, sommeliers, restaurateurs.",
  inLanguage: "fr-FR",
  isPartOf: { "@id": SITE + "#website" },
  about: { "@id": SITE + "#software" },
  primaryImageOfPage: { "@type": "ImageObject", url: SITE + "/og.png" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": URL + "#service",
  serviceType: "Assistant commercial IA pour le secteur du vin",
  provider: { "@id": SITE + "#organization" },
  areaServed: { "@type": "Country", name: "France" },
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Commerciaux vin terrain : négoces, vignerons, distributeurs, importateurs",
  },
  description:
    "AskRainbow équipe les commerciaux vin terrain : capture vocale en sortie de visite caviste, mémoire relationnelle (préférences sommeliers, dégustations), export CSV vers Baqio / WineCRM / autres.",
  offers: { "@id": SITE + "/beta#offer" },
  url: URL,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": URL + "#faq",
  inLanguage: "fr-FR",
  mainEntity: WINE_FAQ.map((item) => ({
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
    { "@type": "ListItem", position: 2, name: "Vin", item: URL },
  ],
};

export default function VinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 70% 0%, rgba(255,94,196,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 20%, rgba(91,184,255,0.08), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-16 md:pt-16 md:pb-20 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
          <div>
            <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-accent">
              Vin · askrainbow.ai
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-serif leading-[1.04] tracking-tight text-lavender">
              <span className="block">Caviste, sommelier, restaurateur.</span>
              <span className="block">
                <em className="not-italic"><span className="rink-warm">Rainbow</span></em> note. Vous vendez.
              </span>
            </h1>
            <p className="mt-6 text-lg text-lavender-muted leading-relaxed max-w-[32rem]">
              AskRainbow est l&apos;assistant commercial IA pour les commerciaux vin
              terrain. Dictez 60 à 90 secondes en sortant d&apos;un caviste : Rainbow
              extrait contacts, dégustations, relances, anniversaires. Le dimanche
              redevient un dimanche.
            </p>
            <div className="mt-8">
              <div className="text-xs font-mono tracking-[0.12em] uppercase text-lavender-dim">
                Bêta gratuite, sans carte bancaire
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <StoreButton kind="apple" />
                <StoreButton kind="google" />
                <StoreButton kind="web" variant="ghost" />
              </div>
              <div className="mt-3 text-xs text-lavender-dim">
                <Link href="/beta" className="underline decoration-dotted underline-offset-2 hover:text-lavender">Bêta gratuite, sans carte</Link>.
              </div>
            </div>
          </div>
          <div className="relative">
            <HeroChat />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-6 pb-24">
        {/* Pains */}
        <section className="mt-6 md:mt-12">
          <div className="text-[11px] font-mono tracking-[0.16em] uppercase text-lavender-dim">
            · Le terrain vin en 2026 ·
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-lavender">
            Les 4 pertes de temps du commercial vin.
          </h2>
          <p className="mt-3 text-base text-lavender-muted max-w-2xl">
            Validées par 3 entretiens utilisateurs avec des commerciaux vin
            (cavistes, sommeliers, restaurateurs) en 2026.{" "}
            <Link href="/etudes/commerciaux-terrain-2026" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
              Voir l&apos;étude complète
            </Link>.
          </p>
          <ul className="mt-6 grid md:grid-cols-2 gap-4">
            {FOUR_PAINS.map((p) => (
              <li key={p.h} className="rounded-2xl border border-ink-border/40 bg-ink-panel/30 p-5">
                <h3 className="text-base font-medium text-lavender">{p.h}</h3>
                <p className="mt-2 text-sm text-lavender-muted leading-relaxed">{p.p}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Workflow */}
        <section className="mt-16">
          <div className="text-[11px] font-mono tracking-[0.16em] uppercase text-lavender-dim">
            · Comment ça marche pour le vin ·
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-lavender">
            Trois moments de capture. Zéro saisie.
          </h2>
          <ol className="mt-6 space-y-4">
            {WORKFLOW.map((w, i) => (
              <li
                key={w.title}
                className="rounded-2xl border border-ink-border/40 bg-ink-panel/30 p-5 grid grid-cols-[auto_1fr] gap-5"
              >
                <div className="font-mono text-2xl text-accent leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-lg text-lavender">{w.title}</h3>
                  <p className="mt-2 text-sm text-lavender-muted leading-relaxed">{w.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Vocab reassurance */}
        <section className="mt-16 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-6">
          <div className="text-xs font-mono uppercase tracking-[0.16em] text-accent">
            Vocabulaire métier
          </div>
          <h2 className="mt-2 text-2xl md:text-3xl font-serif text-lavender">
            Pouilly-Fuissé, attaque, longueur, robe.
          </h2>
          <p className="mt-3 text-sm text-lavender-muted leading-relaxed max-w-3xl">
            Rainbow est entraîné sur les termes du métier vin : appellations
            françaises (Saint-Émilion, Châteauneuf-du-Pape, Sancerre, Pouilly-Fuissé,
            Crozes-Hermitage…), cépages (Chardonnay, Pinot Noir, Cabernet, Syrah,
            Grenache…), termes de dégustation (attaque, longueur, robe, tanins,
            minéralité, structure, finale), millésimes, codes de la filière.
            Vous parlez normalement ; Rainbow comprend.
          </p>
        </section>

        {/* vs Baqio */}
        <section className="mt-16">
          <div className="text-[11px] font-mono tracking-[0.16em] uppercase text-lavender-dim">
            · Et Baqio dans tout ça ? ·
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-lavender">
            Rainbow vs Baqio : assistant ou CRM-ERP wine ?
          </h2>
          <p className="mt-3 text-base text-lavender-muted max-w-2xl">
            Baqio est un CRM-ERP wine-industry, ≈ 58 €/u/mois. Rainbow est un
            assistant vocal commercial actuellement en bêta gratuite (post-bêta sur
            demande). Les deux cohabitent : Rainbow capte sur le terrain, Baqio
            gère le négoce.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-y border-ink-border/40">
              <caption className="text-left text-xs text-lavender-dim mb-3">
                {VS_BAQIO.caption}
              </caption>
              <thead>
                <tr className="text-left text-lavender-dim text-xs uppercase tracking-[0.12em]">
                  <th className="py-3 pr-4 font-mono">Fonction</th>
                  <th className="py-3 pr-4 font-mono">Rainbow</th>
                  <th className="py-3 font-mono">Baqio</th>
                </tr>
              </thead>
              <tbody>
                {VS_BAQIO.rows.map((row, i) => (
                  <tr key={i} className="border-t border-ink-border/30">
                    <td className="py-3 pr-4 text-lavender">{row[0]}</td>
                    <td className="py-3 pr-4 text-lavender-muted">{row[1]}</td>
                    <td className="py-3 text-lavender-muted">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm">
            <Link href="/comparaisons/rainbow-vs-baqio" className="underline decoration-dotted underline-offset-2 text-accent hover:text-lavender">
              Comparatif complet Rainbow vs Baqio →
            </Link>
          </div>
        </section>

        {/* Beta strip */}
        <section className="mt-16 rounded-2xl border border-ink-border/50 bg-ink-panel/40 p-6 md:p-8 grid md:grid-cols-[1.2fr_1fr] gap-6 items-center">
          <div>
            <div className="text-xs font-mono tracking-[0.16em] uppercase text-spec-green">
              Bêta · gratuit · sans carte
            </div>
            <h2 className="mt-2 text-2xl md:text-3xl font-serif text-lavender">
              Le dimanche, lui, n&apos;a pas de prix.
            </h2>
            <p className="mt-3 text-sm text-lavender-muted leading-relaxed">
              Pour un commercial vin qui facture 35 €/h chargé, 4 heures gagnées
              par semaine valent ≈ 7 000 €/an de temps libéré. Rainbow est en bêta
              gratuite, sans carte bancaire. Le tarif post-bêta est discuté avec
              l&apos;éditeur (mano@askrainbow.ai).
            </p>
            <div className="mt-4">
              <Link href="/beta" className="text-sm underline decoration-dotted underline-offset-2 text-accent hover:text-lavender">
                Détail de la bêta →
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={IOS_APP_URL}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-accent text-ink hover:opacity-90 transition"
            >
              iPhone
            </a>
            <a
              href={ANDROID_APP_URL}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border border-accent/60 text-accent hover:bg-accent hover:text-ink transition"
            >
              Android
            </a>
            <a
              href={WEB_APP_URL}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm border border-ink-border text-lavender hover:border-lavender transition"
            >
              Version web
            </a>
          </div>
        </section>

        {/* Pull quote */}
        <section className="mt-16">
          <figure className="border-l-2 border-accent/50 pl-6 py-2 max-w-3xl">
            <blockquote className="text-2xl md:text-3xl font-serif italic text-lavender leading-snug">
              « Ma plus grosse épine dans le pied, c&apos;est le compte-rendu à
              rattraper le soir. Et celui que je rattrape le dimanche, il est à
              moitié vrai. »
            </blockquote>
            <figcaption className="mt-3 text-xs font-mono text-lavender-dim">
              — Commerciale vin, 8 ans dans le métier (entretien AskRainbow 2026, anonymisé)
            </figcaption>
          </figure>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-3xl md:text-4xl font-serif text-lavender">
            Questions des commerciaux vin
          </h2>
          <div className="mt-6 divide-y divide-ink-border/40 border-y border-ink-border/40">
            {WINE_FAQ.map((item) => (
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

        {/* Related */}
        <section className="mt-16 border-t border-ink-border/40 pt-10">
          <h2 className="text-xl md:text-2xl font-serif text-lavender">
            Aller plus loin
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/guides/assistant-commercial-viticulture" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Guide complet : assistant commercial IA pour la filière vin
              </Link>
            </li>
            <li>
              <Link href="/cas/commercial-vin-tournee-cavistes" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Cas anonymisé : commerciale vin sur 5 départements
              </Link>
            </li>
            <li>
              <Link href="/comparaisons/rainbow-vs-baqio" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Comparatif Rainbow vs Baqio
              </Link>
            </li>
            <li>
              <Link href="/guides/compte-rendu-degustation-ia" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Compte-rendu de dégustation IA — comment faire en 2026
              </Link>
            </li>
            <li>
              <Link href="/etudes/commerciaux-terrain-2026" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Étude AskRainbow 2026 — 10 commerciaux terrain en France
              </Link>
            </li>
            <li>
              <Link href="/beta" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Bêta AskRainbow
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
