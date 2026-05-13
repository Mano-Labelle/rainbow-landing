import type { Article } from "./index";

/**
 * Rainbow vs Salesforce — the "alternative à Salesforce" adjacent
 * comparison. Salesforce owns CRM in France, but it is not a
 * comparable direct product to Rainbow. Frame this as
 * "complementary, not competitor".
 */
export const article: Article = {
  slug: "rainbow-vs-salesforce",
  category: "comparaison",
  title: "Rainbow vs Salesforce : l'assistant vocal contre le CRM enterprise",
  metaTitle: "Rainbow vs Salesforce : comparatif 2026 PME",
  metaDesc:
    "Rainbow est un assistant vocal commercial, Salesforce est un CRM enterprise. Positionnement, prix, complémentarité, alternatives PME.",
  datePublished: "2026-04-22",
  dateModified: "2026-04-22",
  heroLead:
    "Rainbow et Salesforce ne sont pas le même produit. Salesforce est un CRM enterprise qui structure pipeline, leads et reporting — Rainbow est un assistant vocal qui remplit ce CRM (ou fonctionne sans). Les deux peuvent coexister ; le choix dépend de la taille de votre équipe et de votre budget.",
  tldr: [
    "Salesforce est un CRM (base de données pipeline) ; Rainbow est un assistant vocal qui capte la dictée du commercial.",
    "Salesforce démarre à 25 €/utilisateur/mois (Starter) mais monte à 80–330 €/utilisateur/mois chargé en production.",
    "Rainbow est actuellement en bêta gratuite (post-bêta sur demande), tout compris.",
    "Pour une PME française de moins de 20 commerciaux, Rainbow seul suffit souvent ; au-delà, Rainbow + Salesforce (ou Rainbow + HubSpot) est la combinaison efficace.",
  ],
  sections: [
    {
      h2: "Rainbow vs Salesforce : deux produits différents",
      paragraphs: [
        {
          lead: "Salesforce stocke les données ; Rainbow les produit pour le commercial.",
          body: "Un CRM Salesforce attend que le commercial saisisse manuellement chaque contact, compte, opportunité, note. Sans cette saisie, le CRM reste vide — c'est le scénario documenté des équipes où « 40 % des champs CRM ne sont jamais remplis » (Incenteev). Rainbow résout ce problème en amont : le commercial dicte, Rainbow structure et peut pousser le résultat vers Salesforce via export CSV ou API.",
        },
      ],
      quote: {
        text: "Ease of use de Salesforce est absolument brutal. Perte de temps et complexités inutiles.",
        attribution: "Revues Trustpilot FR et comparateurs Salesforce (avril 2026)",
      },
    },
    {
      h2: "Tableau comparatif Rainbow vs Salesforce",
      paragraphs: [
        {
          lead: "Deux produits très différents ; comparer côte à côte aide à voir que Rainbow ne remplace pas Salesforce — il le complète ou le précède.",
        },
      ],
      table: {
        headers: ["", "Rainbow", "Salesforce Sales Cloud"],
        rows: [
          ["Type", "Assistant vocal commercial", "CRM enterprise"],
          ["Capture", "Voix + chat", "Saisie manuelle"],
          ["Moment d'usage", "Terrain, voiture, post-visite", "Bureau, fin de journée"],
          ["Prix France 2026", "Bêta gratuite (post-bêta sur demande)", "25 € Starter → 330 € Einstein"],
          ["Coût réel en production", "Bêta gratuite (post-bêta sur demande)", "80–100 € chargé (licences + intégrateur)"],
          ["Setup", "2 minutes", "Projet de 3–12 mois (intégrateur)"],
          ["Cible", "Commerciaux terrain, PME", "Grandes entreprises, équipes ops dédiées"],
          ["Intégrations CRM tiers", "Oui", "N/A (c'est lui le CRM)"],
          ["Mode hors ligne", "Natif", "Limité"],
          ["Export CSV complet", "Oui", "Oui, mais complexe"],
        ],
        caption:
          "Sources : salesforce.com/fr/pricing, revues Impli, Trustpilot FR, Salesdorado (avril 2026).",
      },
    },
    {
      h2: "Quand Salesforce est-il incontournable ?",
      paragraphs: [
        {
          lead: "Salesforce reste incontournable pour les grandes organisations avec équipes commerciales complexes.",
          bullets: [
            "Votre entreprise a plus de 50 commerciaux et un reporting pipeline exigeant (board, investisseurs, direction).",
            "Vous avez une équipe Sales Ops / Revenue Ops dédiée et un budget intégrateur.",
            "Vous avez besoin de forecasting avancé, de scoring prédictif, de workflows multi-départements.",
            "Vous êtes dans un secteur régulé (banque, assurance, pharma) où Salesforce domine historiquement.",
          ],
        },
      ],
    },
    {
      h2: "Quand Rainbow suffit-il (sans Salesforce) ?",
      paragraphs: [
        {
          lead: "Pour une PME commerciale française de moins de 20 commerciaux, Rainbow peut remplacer un CRM de base.",
          bullets: [
            "Vous avez entre 1 et 20 commerciaux terrain et vous n'avez pas encore de CRM (ou votre CRM actuel est sous-utilisé).",
            "Votre reporting se fait en Excel ou via des exports CSV hebdomadaires.",
            "Vous n'avez pas de projet Salesforce chiffré à 6 mois et 50 k€ d'implémentation.",
            "Vous préférez un outil adopté par 100 % de vos commerciaux qu'un CRM complet utilisé à 40 %.",
          ],
        },
      ],
    },
    {
      h2: "Rainbow et Salesforce peuvent-ils coexister ?",
      paragraphs: [
        {
          lead: "Oui, et c'est le scénario idéal pour les entreprises mid-market qui veulent tirer le meilleur des deux.",
          body: "Rainbow capte la voix du commercial sur le terrain, structure les notes, puis alimente Salesforce via export CSV ou API. Le commercial n'ouvre plus jamais Salesforce ; la direction commerciale continue de piloter sur Salesforce. C'est la configuration qu'ont adoptée plusieurs équipes hybrides en France en 2026.",
        },
      ],
      callout: {
        kind: "tip",
        text: "Si votre direction hésite entre « payer plus de Salesforce » ou « ajouter un assistant vocal », l'ordre de grandeur typique est le suivant : 1 000 € investis dans Rainbow débloquent 10 000 € de valeur Salesforce déjà payée mais non utilisée (champs CRM remplis, compte-rendus réguliers, relances structurées).",
      },
    },
  ],
  faq: [
    {
      q: "Rainbow remplace-t-il Salesforce ?",
      a: "Pour une PME de moins de 20 commerciaux, oui — Rainbow en standalone + export CSV couvre 80 % des besoins. Au-delà, Rainbow complète Salesforce au lieu de le remplacer : il capte la voix du commercial et alimente Salesforce.",
    },
    {
      q: "Salesforce est-il trop cher pour une PME française ?",
      a: "Salesforce Starter commence à 25 €/utilisateur/mois, mais le coût réel chargé (licences + intégrateur + support) monte à 80–100 €/utilisateur/mois en production. Pour une équipe de 10 commerciaux en PME, cela représente 10–12 k€/an hors intégration initiale. Rainbow est actuellement en bêta gratuite (post-bêta sur demande) et reste l'alternative à bas bruit.",
    },
    {
      q: "Peut-on exporter ses données Rainbow vers Salesforce ?",
      a: "Oui, Rainbow exporte toutes les données en CSV à tout moment. L'export peut être importé dans Salesforce via Data Loader ou Salesforce API. Une intégration native peut être développée sur demande.",
    },
    {
      q: "Salesforce a-t-il son propre assistant vocal ?",
      a: "Oui — Salesforce Agentforce (anciennement Einstein Copilot) intègre de l'IA dans le stack Salesforce. Mais c'est payant en plus de la licence Sales Cloud, et la capture vocale terrain reste moins mature qu'un outil dédié comme Rainbow ou VoiceLine.",
    },
    {
      q: "Quelle alternative si Salesforce est trop cher et Rainbow pas assez structuré ?",
      a: "Pour le mid-market, Pipedrive (29–99 €/utilisateur/mois), HubSpot Sales Hub (45 €+), ou Sellsy (29 €+) sont des CRM moins chers que Salesforce. Rainbow peut alimenter n'importe lequel de ces CRM.",
    },
  ],
  keyTakeaways: [
    "Salesforce est un CRM enterprise ; Rainbow est un assistant vocal qui remplit ce CRM ou fonctionne seul.",
    "Salesforce coûte 25–330 €/u/mois en façade, 80–100 € chargé ; Rainbow est actuellement en bêta gratuite (post-bêta sur demande).",
    "Pour une PME de moins de 20 commerciaux, Rainbow seul suffit souvent.",
    "Pour un mid-market, Rainbow + Salesforce (ou HubSpot, Pipedrive, Sellsy) est la combinaison efficace.",
  ],
  comparison: {
    vs: "Salesforce",
    vsHomepage: "https://www.salesforce.com/fr",
    verdict:
      "Salesforce pour le reporting enterprise ; Rainbow pour capter la voix du commercial. Les deux peuvent coexister ; pour une PME, Rainbow seul est souvent plus efficace.",
  },
  related: ["assistant-commercial-ia", "rainbow-vs-modjo", "rainbow-vs-trustlead"],
};
