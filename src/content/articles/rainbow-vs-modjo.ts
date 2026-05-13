import type { Article } from "./index";

/**
 * Rainbow vs Modjo — the most important comparison for an
 * "assistant commercial IA" search in France. Modjo dominates
 * the call-intelligence segment ; Rainbow occupies the field-
 * sales segment they don't address. Key positioning split:
 * Modjo = post-call, Rainbow = field/driving.
 */
export const article: Article = {
  slug: "rainbow-vs-modjo",
  category: "comparaison",
  title: "Rainbow vs Modjo : appels enregistrés ou terrain vocal ?",
  metaTitle: "Rainbow vs Modjo : comparatif 2026 pour commerciaux",
  metaDesc:
    "Modjo enregistre vos calls, Rainbow capte vos visites terrain. Comparatif 2026 — prix, usages, intégrations, positionnement.",
  datePublished: "2026-04-22",
  dateModified: "2026-04-22",
  heroLead:
    "Rainbow et Modjo ne sont pas sur le même terrain. Modjo enregistre les appels et visioconférences pour les coacher (conversation intelligence). Rainbow capte la voix du commercial après une visite physique et remplit le compte-rendu. Choisir l'un ou l'autre se joue sur la nature du rendez-vous : téléphone et visio, ou voiture et physique.",
  tldr: [
    "Modjo = intelligence conversationnelle sur calls et Zoom. Rainbow = capture vocale après visite terrain.",
    "Modjo cible les inside sales, SDR et managers sales (coaching, scoring d'appels).",
    "Rainbow cible les commerciaux terrain B2B (vin, médical, automobile) qui passent l'essentiel de leur temps en voiture.",
    "Modjo coûte ~99 €/utilisateur/mois (15 sièges minimum). Rainbow est actuellement en bêta gratuite (post-bêta sur demande), sans minimum de sièges.",
  ],
  sections: [
    {
      h2: "Rainbow vs Modjo : la différence fondamentale",
      paragraphs: [
        {
          lead: "Modjo écoute ce que vous dites au téléphone ; Rainbow écoute ce que vous dites après le rendez-vous.",
          body: "Modjo s'intègre à vos outils de call (Aircall, Ringover, Dialpad) et à vos visios (Google Meet, Teams, Zoom) pour enregistrer, transcrire, et coacher. Son produit est pensé pour un commercial assis, casque sur les oreilles, en équipe inside sales. Rainbow ne touche pas aux appels ; il capte la dictée du commercial en sortie de rendez-vous physique, en voiture entre deux clients, ou le soir à l'hôtel.",
        },
      ],
      callout: {
        kind: "tip",
        text: "Si votre équipe fait 80 % d'appels et 20 % de terrain, Modjo est le bon choix. Si c'est l'inverse (80 % de terrain, 20 % d'appels), Rainbow est adapté. Les deux peuvent coexister pour les équipes hybrides.",
      },
    },
    {
      h2: "Tableau comparatif Rainbow vs Modjo (2026)",
      paragraphs: [
        {
          lead: "Les deux outils occupent des places très différentes dans le quotidien d'un commercial.",
        },
      ],
      table: {
        headers: ["", "Rainbow", "Modjo"],
        rows: [
          ["Type d'outil", "Assistant vocal terrain", "Intelligence conversationnelle"],
          ["Cas d'usage principal", "Compte-rendu post-visite", "Analyse de call commercial"],
          ["Capture", "Voix du commercial (mémo)", "Enregistrement du call entier"],
          ["Moment", "Après la visite, en voiture, le soir", "Pendant le call (temps réel)"],
          ["Cible", "Commerciaux terrain B2B", "Inside sales, SDR, managers sales"],
          ["Prix France (u/mois)", "Bêta gratuite (post-bêta sur demande)", "~99 €"],
          ["Minimum de sièges", "1", "15 sièges"],
          ["Intégrations clés", "CRM via CSV + API sur demande", "Aircall, Ringover, Zoom, Teams, HubSpot, Salesforce"],
          ["Hébergement", "UE (France)", "UE (France), SOC2 Type II"],
          ["Clients cités", "PME commerciales terrain", "Bouygues Telecom, Doctolib, Spendesk, Payfit"],
        ],
        caption:
          "Sources : modjo.ai (avril 2026), revues Dixmilleheures, Salesdorado. Modjo a levé une Série B de ~€34M en 2024.",
      },
    },
    {
      h2: "Quand choisir Modjo plutôt que Rainbow ?",
      paragraphs: [
        {
          lead: "Modjo est le meilleur choix pour les équipes où le call est le canal principal, ou pour coacher des commerciaux junior.",
          bullets: [
            "Votre équipe passe plus d'une heure par jour en visioconférence ou en call commercial.",
            "Vous voulez scorer les appels (pitch, closing, objections) et coacher l'équipe.",
            "Votre cible ARR permet un budget 99 €+/utilisateur/mois et un engagement 15 sièges.",
            "Vous êtes en inside sales ou SaaS B2B avec cycle de vente sur call.",
          ],
        },
      ],
    },
    {
      h2: "Quand choisir Rainbow plutôt que Modjo ?",
      paragraphs: [
        {
          lead: "Rainbow est le meilleur choix pour les commerciaux qui passent la moitié de leur semaine en voiture.",
          bullets: [
            "Vos rendez-vous sont physiques : chez le caviste, à l'hôpital, en concession, chez le client.",
            "Vous voulez un outil qui fonctionne hors ligne (rural, parking, hôpital, salon).",
            "Votre budget est plafonné — Rainbow est actuellement en bêta gratuite, post-bêta sur demande.",
            "Vous êtes seul commercial ou en TPE — le minimum 15 sièges est rédhibitoire.",
          ],
        },
      ],
      quote: {
        text: "J'ai raté des ventes et des rdv c'est sûr. Pas parce que je travaille mal, parce que le soir je n'ai plus la force de tout noter.",
        attribution: "Tom, commercial terrain B2B, interview utilisateur",
      },
    },
    {
      h2: "Modjo et Rainbow sont-ils complémentaires ?",
      paragraphs: [
        {
          lead: "Oui, et pour certaines équipes hybrides ils fonctionnent mieux ensemble qu'isolément.",
          body: "Une équipe commerciale qui mélange calls de qualification (Modjo territory) et visites physiques (Rainbow territory) peut très bien utiliser les deux. Modjo coache les premiers rendez-vous téléphoniques ; Rainbow gère la documentation après les visites en voiture. Le CRM reste la base commune.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Modjo fait-il la même chose que Rainbow ?",
      a: "Non. Modjo enregistre et analyse les appels et visios du commercial ; Rainbow capte la dictée post-visite d'un commercial terrain. Ils occupent deux moments différents de la journée commerciale.",
    },
    {
      q: "Puis-je utiliser Modjo pour mes visites terrain ?",
      a: "Techniquement non. Modjo est conçu pour se brancher sur des outils de télécommunication (Aircall, Ringover, Zoom, Teams). Il n'a pas de mode \"mémo vocal terrain\" comparable à Rainbow.",
    },
    {
      q: "Quel est le prix exact de Modjo ?",
      a: "Modjo ne publie pas de grille officielle ; les revues publiques en avril 2026 évoquent ~99 €/utilisateur/mois avec un minimum de 15 sièges. Le prix est négocié en direct avec l'équipe commerciale Modjo.",
    },
    {
      q: "Modjo fonctionne-t-il en français ?",
      a: "Oui, Modjo est né en France et son modèle est entraîné sur le français. Des revues (notamment Dixmilleheures 2026) mentionnent des imprécisions sur certains accents régionaux — à tester avant déploiement.",
    },
    {
      q: "Quelle est l'alternative à Modjo pour les commerciaux terrain ?",
      a: "Rainbow pour la capture vocale post-visite. Leexi pour la transcription de réunions. Pour le coaching de commerciaux terrain sur la qualité de leur discours, aucun outil ne fait exactement ce que fait Modjo aujourd'hui en France.",
    },
  ],
  keyTakeaways: [
    "Modjo enregistre les calls et visios ; Rainbow capte la dictée post-visite.",
    "Modjo cible l'inside sales ; Rainbow cible le commercial terrain.",
    "Modjo demande 15 sièges minimum et coûte ~99 €/u/mois ; Rainbow est actuellement en bêta gratuite sans minimum.",
    "Les deux peuvent coexister pour les équipes hybrides calls + terrain.",
  ],
  comparison: {
    vs: "Modjo",
    vsHomepage: "https://www.modjo.ai",
    verdict:
      "Modjo pour les inside sales et le coaching d'appels ; Rainbow pour les commerciaux terrain physiques.",
  },
  related: ["assistant-commercial-ia", "rainbow-vs-trustlead"],
};
