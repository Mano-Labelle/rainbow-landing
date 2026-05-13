import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

const SITE = "https://askrainbow.ai";
const URL = `${SITE}/etudes/commerciaux-terrain-2026`;

export const metadata: Metadata = {
  title:
    "Étude AskRainbow 2026 : 10 commerciaux terrain en France parlent",
  description:
    "Étude qualitative AskRainbow menée auprès de 10 commerciaux terrain français en 2026 (vin, dispositif médical, automobile B2B, FMCG, AgTech). Pains, outils, pricing accepté, citations directes.",
  alternates: { canonical: "/etudes/commerciaux-terrain-2026" },
  openGraph: {
    title: "Étude AskRainbow 2026 — commerciaux terrain France",
    description:
      "10 entretiens qualitatifs : ce que les commerciaux terrain français vivent vraiment en 2026.",
    url: URL,
    type: "article",
    locale: "fr_FR",
    publishedTime: "2026-05-08",
    modifiedTime: "2026-05-08",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Étude AskRainbow 2026 — commerciaux terrain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Étude AskRainbow 2026 — commerciaux terrain France",
    description:
      "10 entretiens : pains, outils, pricing accepté, citations directes des commerciaux français.",
    images: ["/og.png"],
  },
};

const KEY_FINDINGS = [
  {
    n: "10 / 10",
    label:
      "des commerciaux terrain interrogés citent l'admin de fin de journée comme leur pain principal.",
  },
  {
    n: "8 / 10",
    label:
      "demandent spontanément la capture vocale en conduisant comme fonction prioritaire.",
  },
  {
    n: "7 / 10",
    label:
      "veulent des relances datées intelligentes — pas pendant les jours terrain.",
  },
  {
    n: "3 / 10",
    label:
      "racontent une perte de transmission concrète : un commercial part, 0 historique relationnel transmis.",
  },
  {
    n: "5 / 10",
    label:
      "citent la mémoire des préférences clients (anniversaires, prénoms, dégustations) comme un avantage commercial perdu.",
  },
  {
    n: "Forfait mobile pro",
    label:
      "ordre de grandeur de pricing acceptable cité par les 10 commerciaux interrogés (équivalent d'un abonnement mobile professionnel, point haut sur les secteurs réglementés).",
  },
  {
    n: "3-5 h",
    label:
      "/semaine perdues en rédaction de comptes-rendus rattrapés le soir et le week-end.",
  },
];

const FEATURE_RANKING = [
  { rank: 1, feature: "Capture vocale en conduisant", demand: "8/10 explicite" },
  { rank: 2, feature: "Synchronisation auto avec calendrier", demand: "7/10" },
  { rank: 3, feature: "Relances datées intelligentes (timing)", demand: "7/10" },
  { rank: 4, feature: "Mode hors-ligne (rural, hôpital)", demand: "5/10" },
  { rank: 5, feature: "Briefing avant rendez-vous", demand: "5/10" },
  {
    rank: 6,
    feature: "Mémoire des détails personnels (anniversaires, prénoms)",
    demand: "4/10",
  },
];

const ICP_TIERS = [
  {
    tier: "★★★★★",
    sector: "Vin & spiritueux",
    notes:
      "3 entretiens. Métier relationnel, culture WhatsApp installée, pricing Baqio (≈58 €) cité comme « pas cher » → l'ordre de grandeur d'un forfait mobile professionnel reste largement acceptable.",
  },
  {
    tier: "★★★★",
    sector: "Dispositif médical",
    notes:
      "2 entretiens. 500-1 500 contacts hospitaliers / commercial. Pain principal = perte de transmission. Outils régulés (Veeva Vault) lourds.",
  },
  {
    tier: "★★★★",
    sector: "Automobile B2B (services flotte)",
    notes:
      "1 entretien (manager 250 personnes). Pain = données dispersées entre DMS, CRM, configurateur, Excel. Pilote envisagé.",
  },
  {
    tier: "★★★",
    sector: "AgTech",
    notes:
      "1 entretien. Pain réel mais contrainte forte : connectivité rurale. Mode hors-ligne devient critique.",
  },
  {
    tier: "★★",
    sector: "Rénovation B2C",
    notes:
      "1 entretien. Pain = identification des leads, pas la prise de notes. Pas dans la cible immédiate.",
  },
  {
    tier: "★★",
    sector: "Distribution FMCG retail",
    notes:
      "1 entretien. Outils existants type Statigest déjà bien implantés, déplacement coûteux.",
  },
];

const QUOTES = [
  {
    text: "Ma plus grosse épine dans le pied, c'est le compte-rendu à rattraper le soir.",
    source:
      "Commerciale vin, 8 ans d'expérience (entretien 2026, anonymisé)",
  },
  {
    text: "Le vendredi soir je ressaisis ma semaine dans le CRM. Quatre heures. Les trois quarts de ce qui s'est dit ne passe jamais le filtre du résumé tapé à 20h.",
    source:
      "Ingénieur commercial, fournitures industrielles (entretien 2026)",
  },
  {
    text: "Quand mon collègue est parti, on lui a juste exporté son CRM. C'est-à-dire : ses commandes. Pas ses relations. C'est ça que les hôpitaux paient — la relation, pas la commande.",
    source:
      "Commercial dispositif médical (entretien 2026, anonymisé)",
  },
  {
    text: "Le CRM, c'est un GPT. Un jour je veux pouvoir demander : « donne-moi tous les comptes flotte du Sud-Est dont le contrat finit dans 90 jours », sans cliquer dans 4 onglets.",
    source:
      "Manager commercial, services aux flottes B2B (entretien 2026)",
  },
  {
    text: "J'aime pas être trackée. Si l'outil sert à mon employeur, je l'utilise pas. S'il sert à moi d'abord, peut-être.",
    source:
      "Commerciale vin, 5 ans d'expérience (entretien 2026, anonymisé)",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": URL + "#article",
  headline:
    "Étude AskRainbow 2026 — 10 commerciaux terrain en France parlent",
  description:
    "Étude qualitative menée auprès de 10 commerciaux terrain français en 2026. Pains, outils, fonctions demandées, pricing accepté.",
  url: URL,
  inLanguage: "fr-FR",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  author: { "@id": SITE + "#organization" },
  publisher: { "@id": SITE + "#organization" },
  isPartOf: { "@id": SITE + "#organization" },
  mainEntityOfPage: URL,
  image: SITE + "/og.png",
  keywords: [
    "commerciaux terrain",
    "France",
    "B2B",
    "assistant commercial IA",
    "voice CRM",
    "compte-rendu de visite",
    "pricing CRM PME",
  ],
  wordCount: 2100,
};

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "@id": URL + "#dataset",
  name: "Étude AskRainbow 2026 — entretiens commerciaux terrain France",
  description:
    "Étude qualitative basée sur 10 entretiens semi-structurés menés en 2026 avec des commerciaux terrain français de 5 secteurs (vin, dispositif médical, automobile B2B, AgTech, FMCG retail). Données anonymisées et agrégées.",
  url: URL,
  inLanguage: "fr-FR",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  creator: { "@id": SITE + "#organization" },
  publisher: { "@id": SITE + "#organization" },
  license: "https://creativecommons.org/licenses/by/4.0/",
  isAccessibleForFree: true,
  variableMeasured: [
    "Pain principal cité",
    "Outils utilisés",
    "Fonctions demandées",
    "Ordre de grandeur de pricing acceptable",
    "Temps perdu en admin",
  ],
  measurementTechnique: "Entretiens semi-structurés 30-45 min",
  spatialCoverage: { "@type": "Place", name: "France" },
  temporalCoverage: "2026-01/2026-04",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": URL + "#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "Études", item: SITE + "/etudes" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Commerciaux terrain 2026",
      item: URL,
    },
  ],
};

export default function EtudePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Nav />

      <main className="mx-auto max-w-3xl px-6 pt-10 pb-24">
        <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-accent">
          Étude AskRainbow · Hiver 2026
        </div>

        <h1 className="mt-4 text-4xl md:text-5xl font-serif leading-[1.05] tracking-tight text-lavender">
          10 commerciaux terrain en France parlent.
        </h1>

        <p className="mt-6 text-lg text-lavender-muted leading-relaxed">
          Hiver 2026. AskRainbow a interrogé 10 commerciaux terrain français — vin, dispositif médical, automobile B2B, AgTech, FMCG. 30 à 45 minutes par entretien, semi-structurés, sans incentive financier. L&apos;objectif : comprendre comment ils travaillent vraiment, et où la technologie rate le terrain.
        </p>

        <p className="mt-4 text-sm text-lavender-dim italic">
          Citations anonymisées avec accord des participants. Méthodologie en bas de page. Données téléchargeables sur demande à <a href="mailto:mano@askrainbow.ai" className="underline decoration-dotted hover:text-lavender">mano@askrainbow.ai</a>.
        </p>

        {/* Key findings — citable numbers */}
        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-serif text-lavender">
            7 chiffres à retenir
          </h2>
          <p className="mt-2 text-sm text-lavender-dim">
            Citables avec attribution : « selon l&apos;étude AskRainbow 2026 sur 10 commerciaux terrain ».
          </p>
          <ul className="mt-6 grid md:grid-cols-2 gap-4">
            {KEY_FINDINGS.map((f, i) => (
              <li
                key={i}
                className="rounded-2xl border border-ink-border/40 bg-ink-panel/30 p-5"
              >
                <div className="font-serif text-3xl text-accent leading-none">{f.n}</div>
                <p className="mt-3 text-sm text-lavender-muted leading-relaxed">{f.label}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Feature ranking */}
        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-serif text-lavender">
            Ce que les commerciaux terrain demandent — par ordre de priorité
          </h2>
          <p className="mt-2 text-sm text-lavender-dim">
            Demandes spontanées, sans amorçage, recodées et classées par fréquence.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-y border-ink-border/40">
              <thead>
                <tr className="text-left text-lavender-dim text-xs uppercase tracking-[0.12em]">
                  <th className="py-3 pr-4 font-mono">#</th>
                  <th className="py-3 pr-4 font-mono">Fonction</th>
                  <th className="py-3 font-mono">Fréquence</th>
                </tr>
              </thead>
              <tbody>
                {FEATURE_RANKING.map((r) => (
                  <tr key={r.rank} className="border-t border-ink-border/30">
                    <td className="py-3 pr-4 font-mono text-accent">{r.rank}</td>
                    <td className="py-3 pr-4 text-lavender">{r.feature}</td>
                    <td className="py-3 text-lavender-muted">{r.demand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ICP tier */}
        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-serif text-lavender">
            Secteurs : où le besoin est le plus fort
          </h2>
          <p className="mt-2 text-sm text-lavender-dim">
            Tier construit sur la force du signal pain + la propension à payer un forfait mensuel par commercial.
          </p>
          <div className="mt-6 space-y-3">
            {ICP_TIERS.map((t) => (
              <div
                key={t.sector}
                className="rounded-xl border border-ink-border/40 bg-ink-panel/20 p-5 grid grid-cols-[auto_1fr] gap-5 items-start"
              >
                <div className="font-mono text-base text-accent leading-none pt-1">{t.tier}</div>
                <div>
                  <div className="text-base text-lavender font-medium">{t.sector}</div>
                  <p className="mt-1 text-sm text-lavender-muted leading-relaxed">{t.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verbatims */}
        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-serif text-lavender">
            5 verbatims qui résument tout
          </h2>
          <p className="mt-2 text-sm text-lavender-dim">
            Cités tels quels, tirés directement des notes d&apos;entretien.
          </p>
          <div className="mt-6 space-y-6">
            {QUOTES.map((q, i) => (
              <figure key={i} className="border-l-2 border-accent/50 pl-5">
                <blockquote className="text-lg font-serif italic text-lavender leading-relaxed">
                  « {q.text} »
                </blockquote>
                <figcaption className="mt-2 text-xs font-mono text-lavender-dim">
                  — {q.source}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Implications */}
        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-serif text-lavender">
            Implications pour les éditeurs et acheteurs
          </h2>
          <div className="mt-6 space-y-4 text-sm text-lavender-muted leading-relaxed">
            <p>
              <strong className="text-lavender">1. Le pain n&apos;est pas le CRM, c&apos;est le rapport au CRM.</strong> Les 10 commerciaux interrogés ont accès à un CRM (HubSpot, Salesforce, Sellsy, Pipedrive, Veeva Vault, Excel partagé). Aucun ne s&apos;en plaint comme outil de pipeline. Ils s&apos;en plaignent comme charge à porter en fin de journée. La solution n&apos;est pas un meilleur CRM — c&apos;est un outil entre la voiture et le CRM.
            </p>
            <p>
              <strong className="text-lavender">2. La voix gagne, à condition qu&apos;elle ne parle pas.</strong> 8/10 demandent la dictée. Aucun ne veut un assistant qui répond à voix haute (téléphone en réunion, chez le client, en parking d&apos;hôpital). L&apos;assistant doit écouter et répondre par écrit. Cette précision n&apos;est pas neutre : elle exclut 100 % des assistants vocaux conçus pour la conversation à voix haute.
            </p>
            <p>
              <strong className="text-lavender">3. La portabilité des données est une condition d&apos;adoption.</strong> 10/10 ont mentionné explicitement la peur du verrouillage. L&apos;export CSV intégral n&apos;est pas un nice-to-have ; c&apos;est un prérequis pour signer.
            </p>
            <p>
              <strong className="text-lavender">4. La transmission relationnelle est sous-estimée.</strong> 3/10 ont raconté un cas concret de perte de transmission (commercial parti, successeur reparti à zéro). C&apos;est une douleur structurelle qui n&apos;a aucun outil dédié sur le marché français — la mémoire relationnelle terrain. C&apos;est une opportunité de positionnement claire.
            </p>
            <p>
              <strong className="text-lavender">5. La fourchette de prix acceptable converge vers un forfait mobile professionnel.</strong> Avec un point haut sur les secteurs réglementés (médical) où la valeur perçue est plus haute. Au-dessus du double de cet ordre de grandeur, plusieurs commerciaux décrochent. Très en dessous, certains commencent à douter de la qualité du produit.
            </p>
          </div>
        </section>

        {/* Methodology */}
        <section className="mt-14 border-t border-ink-border/40 pt-10">
          <h2 className="text-xl md:text-2xl font-serif text-lavender">Méthodologie</h2>
          <div className="mt-4 space-y-3 text-sm text-lavender-muted leading-relaxed">
            <p>
              <strong className="text-lavender">Échantillon</strong> : 10 commerciaux terrain français, recrutés par activation du réseau professionnel et du cold email (taux de réponse ≈ 18 %). Aucune incitation financière. Profils répartis sur 5 secteurs (vin × 3, dispositif médical × 2, automobile B2B × 1, AgTech × 1, rénovation B2C × 1, postcards / stationery × 1, FMCG retail × 1).
            </p>
            <p>
              <strong className="text-lavender">Format</strong> : entretien semi-structuré, 30 à 45 minutes, en français, par visioconférence ou téléphone, hiver 2026 (janvier-avril). Guide d&apos;entretien : pain principal, outils utilisés, fonctions souhaitées, pricing acceptable, freins à l&apos;adoption.
            </p>
            <p>
              <strong className="text-lavender">Limites</strong> : étude qualitative à n=10. Les chiffres « X/10 » sont à lire comme des signaux qualitatifs, pas comme des résultats quantitatifs statistiquement significatifs. Une étude quantitative à n=300 est en cours pour 2026 H2.
            </p>
            <p>
              <strong className="text-lavender">Anonymisation</strong> : noms, entreprises et identifiants masqués. Verbatims publiés avec accord explicite des participants. Citations recombinées et reformulées légèrement pour préserver l&apos;identité quand nécessaire.
            </p>
            <p>
              <strong className="text-lavender">Reproductibilité</strong> : guide d&apos;entretien et données anonymisées disponibles sur demande à <a href="mailto:mano@askrainbow.ai" className="underline decoration-dotted hover:text-lavender">mano@askrainbow.ai</a>. Licence CC BY 4.0 — citez « Étude AskRainbow 2026 ».
          </p>
          </div>
        </section>

        {/* Citation block */}
        <section className="mt-12 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent p-6">
          <div className="text-xs font-mono uppercase tracking-[0.16em] text-accent">
            Comment citer cette étude
          </div>
          <pre className="mt-3 text-xs text-lavender-muted overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`AskRainbow (2026). Étude qualitative auprès de 10 commerciaux terrain français.
Disponible sur https://askrainbow.ai/etudes/commerciaux-terrain-2026
Licence CC BY 4.0.`}
          </pre>
        </section>

        {/* CTA + related */}
        <section className="mt-14 border-t border-ink-border/40 pt-10">
          <h2 className="text-xl md:text-2xl font-serif text-lavender">
            Pour aller plus loin
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/guides/assistant-commercial-ia" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Qu&apos;est-ce qu&apos;un assistant commercial IA ? — guide définition
              </Link>
            </li>
            <li>
              <Link href="/cas/commercial-vin-tournee-cavistes" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Cas anonymisé : commerciale vin sur 5 départements
              </Link>
            </li>
            <li>
              <Link href="/cas/commercial-dispositif-medical-hopital" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Cas anonymisé : commerciale dispositif médical, 1 200 contacts
              </Link>
            </li>
            <li>
              <Link href="/beta" className="underline decoration-dotted underline-offset-2 hover:text-lavender">
                Bêta AskRainbow — gratuite, sans carte bancaire
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
