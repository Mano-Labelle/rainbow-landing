import type { Article } from "./index";

export const article: Article = {
  slug: "crm-vs-sfa",
  category: "guide",
  title: "CRM vs SFA vs assistant commercial IA : quelle différence en 2026 ?",
  metaTitle: "CRM vs SFA vs assistant IA : différences 2026",
  metaDesc:
    "CRM, SFA, assistant commercial IA : trois outils, trois rôles. Définitions, différences et guide de choix pour les équipes commerciales françaises 2026.",
  datePublished: "2026-04-22",
  dateModified: "2026-04-22",
  heroLead:
    "CRM, SFA et assistant commercial IA sont trois outils distincts, souvent confondus. Un CRM stocke les données. Un SFA (Sales Force Automation) automatise le pipeline. Un assistant commercial IA capte la voix et produit la donnée à la source. Les trois peuvent coexister — ou un seul suffire selon votre taille.",
  tldr: [
    "CRM — Customer Relationship Management : base de données contacts, comptes, historique. Exemples : Salesforce, HubSpot, Pipedrive, Sellsy.",
    "SFA — Sales Force Automation : automatisation du pipeline (scoring, forecast, workflows). Souvent intégré au CRM enterprise.",
    "Assistant commercial IA — capture vocale + génération de contenus (compte-rendu, relance, email). Exemples : Rainbow, Modjo, Leexi.",
    "Une PME commerciale terrain peut fonctionner avec l'assistant IA seul ; un mid-market ajoute un CRM ; un enterprise combine CRM + SFA + assistant IA.",
  ],
  sections: [
    {
      h2: "Qu'est-ce qu'un CRM ?",
      paragraphs: [
        {
          lead: "Un CRM (Customer Relationship Management) est une base de données structurée des interactions entre une entreprise et ses clients.",
          body: "Un CRM stocke : contacts, comptes (entreprises), activités (visites, appels, emails), opportunités (pipeline), transactions (ventes closes). Il est la mémoire centralisée de l'équipe commerciale. Exemples en France : Salesforce (enterprise), HubSpot (mid-market), Pipedrive (PME), Sellsy (PME France), Axonaut (TPE).",
        },
      ],
    },
    {
      h2: "Qu'est-ce qu'un SFA ?",
      paragraphs: [
        {
          lead: "Un SFA (Sales Force Automation) est un ensemble de fonctionnalités d'automatisation du pipeline commercial, souvent intégré au CRM.",
          body: "Le SFA ajoute au CRM : scoring automatique des leads, forecast prédictif, workflow de relance, territoire et quota management, génération de rapports hebdomadaires. En 2026, la plupart des CRM enterprise (Salesforce, HubSpot, Dynamics) incluent des modules SFA. Quelques éditeurs purs SFA existent (Outreach, Salesloft) pour l'inside sales SaaS.",
        },
      ],
    },
    {
      h2: "Qu'est-ce qu'un assistant commercial IA ?",
      paragraphs: [
        {
          lead: "Un assistant commercial IA capte la voix ou le chat du commercial et produit la donnée qui alimente le CRM — sans saisie manuelle.",
          body: "Contrairement au CRM (qui stocke) et au SFA (qui automatise), l'assistant IA génère le contenu à la source. Exemples : Rainbow (voix terrain), Modjo (call coaching), Leexi (transcription réunion), Trustlead (voice-to-CRM), VoiceLine (voice enterprise).",
        },
      ],
    },
    {
      h2: "CRM vs SFA vs assistant IA : tableau récapitulatif",
      paragraphs: [
        {
          lead: "Trois rôles distincts ; la confusion vient du fait qu'un même éditeur peut couvrir les trois (ex. Salesforce + Einstein) — mais les catégories fonctionnelles restent séparées.",
        },
      ],
      table: {
        headers: ["", "CRM", "SFA", "Assistant IA"],
        rows: [
          ["Rôle", "Stocker", "Automatiser pipeline", "Générer le contenu"],
          ["Entrée", "Saisie manuelle", "Données CRM", "Voix / chat du commercial"],
          ["Sortie", "Base de données structurée", "Scoring, forecast, workflow", "Compte-rendu, email, relance"],
          ["Utilisateur principal", "Commercial + direction", "Direction commerciale", "Commercial terrain"],
          ["Exemple français", "Sellsy, Pipedrive", "Salesforce + Einstein", "Rainbow, Modjo"],
          ["Prix France 2026", "29 € à 330 €/u/mois", "Inclus dans CRM ou +50 €", "15 € à 99 €/u/mois"],
        ],
        caption:
          "Les trois catégories peuvent coexister dans une même entreprise ; chacune peut aussi fonctionner seule selon la taille.",
      },
    },
    {
      h2: "Quelle combinaison choisir selon la taille de l'équipe ?",
      paragraphs: [
        {
          lead: "La bonne combinaison dépend du nombre de commerciaux et du type de vente.",
          bullets: [
            "1 à 10 commerciaux, terrain, pas de CRM — Assistant IA seul (Rainbow, Trustlead) + export CSV.",
            "10 à 50 commerciaux, mix terrain/inside — CRM PME (Pipedrive, Sellsy, HubSpot Starter) + assistant IA (Rainbow).",
            "50 à 200 commerciaux, process mature — CRM + SFA (HubSpot Pro, Salesforce Starter) + assistant IA (Rainbow ou VoiceLine).",
            "200+ commerciaux, enterprise — CRM enterprise (Salesforce) + SFA natif (Einstein / Agentforce) + assistant IA terrain (Rainbow, VoiceLine) + assistant IA call (Modjo).",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Un assistant commercial IA est-il un CRM ?",
      a: "Non. Un assistant IA capte la voix et génère du contenu ; un CRM stocke les données. Mais un assistant IA peut remplacer un CRM de base pour une PME (export CSV, contacts, historique).",
    },
    {
      q: "Peut-on se passer de SFA ?",
      a: "Oui pour les PME et mid-market — le SFA est surtout critique au-delà de 50 commerciaux avec reporting exigé. En 2026, beaucoup de fonctions SFA (scoring, workflows) sont incluses dans les CRM Pro/Enterprise.",
    },
    {
      q: "Salesforce est-il un CRM ou un SFA ?",
      a: "Les deux. Salesforce est originellement un CRM, avec un module SFA intégré (Sales Cloud + Einstein) et désormais un assistant IA (Agentforce). Même éditeur, trois rôles fonctionnels.",
    },
    {
      q: "Quelle est la meilleure combinaison pour une PME française en 2026 ?",
      a: "Pour moins de 20 commerciaux terrain : Rainbow seul + Excel reporting. Pour 20 à 50 commerciaux : Rainbow + Pipedrive ou HubSpot Starter. Pour 50+ : Rainbow + HubSpot Professional ou Salesforce.",
    },
    {
      q: "Où se situe Modjo dans cette typologie ?",
      a: "Modjo est un assistant IA de conversation intelligence — sous-catégorie call-focused. Il n'est ni un CRM ni un SFA, mais il alimente les deux.",
    },
  ],
  keyTakeaways: [
    "CRM stocke, SFA automatise, assistant IA génère.",
    "Un même éditeur (Salesforce) peut couvrir les trois rôles — les catégories fonctionnelles restent séparées.",
    "Pour moins de 20 commerciaux terrain, un assistant IA seul peut suffire.",
    "Pour plus de 50 commerciaux, la combinaison CRM + SFA + assistant IA devient optimale.",
  ],
  related: ["assistant-commercial-ia", "voice-crm", "rainbow-vs-salesforce"],
};
