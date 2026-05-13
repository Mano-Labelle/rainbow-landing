import type { Article } from "./index";

export const article: Article = {
  slug: "rainbow-vs-sidely",
  category: "comparaison",
  title: "Rainbow vs Sidely : assistant vocal léger ou plateforme SFA terrain complète ?",
  metaTitle: "Rainbow vs Sidely (2026) — terrain B2B France",
  metaDesc:
    "AskRainbow (assistant vocal terrain, bêta gratuite) ou Sidely (plateforme SFA / sales force automation terrain, 30-60 €/u/mois) ? Comparatif honnête, cas d'usage 2026.",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  comparison: {
    vs: "Sidely",
    vsHomepage: "https://www.go-sidely.com/",
    verdict:
      "Sidely est une plateforme SFA (sales force automation) terrain française, pensée pour les équipes structurées (FMCG, retail, distribution). Rainbow est un assistant vocal léger, individu-friendly. Choix selon la taille d'équipe et le degré de structuration nécessaire.",
  },
  heroLead:
    "Sidely (go-sidely.com) est une plateforme française de sales force automation pour les équipes commerciales terrain : géolocalisation de tournée, planification, signatures, photos produit, relevés de linéaire. AskRainbow est un assistant commercial IA plus léger, dédié à la capture vocale et la mémoire relationnelle. Voici quand chacun est le bon choix.",
  tldr: [
    "Sidely = plateforme SFA terrain française, structurée pour FMCG / retail / distribution, 30-60 €/u/mois.",
    "Rainbow = assistant vocal IA pour commerciaux terrain B2B, actuellement en bêta gratuite (post-bêta sur demande).",
    "Verdict : Sidely pour équipes 10+ avec besoin de pilotage tournée, géoloc, relevés linéaire. Rainbow pour équipes 1-30 avec pain principal sur la capture et la mémoire.",
    "Cohabitation possible : certaines équipes utilisent Sidely pour la tournée, Rainbow pour la voix. Mais pour la majorité, on choisit l'un ou l'autre.",
  ],
  sections: [
    {
      h2: "En une phrase : à quoi sert chacun ?",
      paragraphs: [
        {
          lead:
            "Sidely est une plateforme de sales force automation (SFA) destinée aux équipes commerciales terrain structurées (FMCG, retail, BtoB).",
          body:
            "Conçue pour piloter des tournées multi-points-de-vente, Sidely intègre géolocalisation, planification de visites, prise de commande, photo de linéaire (merchandising), signature électronique, reporting. Elle convient bien aux équipes de 10+ commerciaux avec un manager terrain et une logique de tournée optimisée.",
        },
        {
          lead:
            "AskRainbow est un assistant commercial IA plus léger, centré sur un seul cas d'usage : capter ce qui se dit en mobilité.",
          body:
            "Le commercial dicte un mémo après une visite, Rainbow extrait contacts, tâches, montants, relances. Pas de planification de tournée, pas de relevé de linéaire, pas de signature. Juste une mémoire commerciale rapide, vocale, exportable en CSV.",
        },
      ],
    },
    {
      h2: "Comparatif fonctionnel — où chacun excelle",
      paragraphs: [
        {
          lead:
            "Tableau comparatif des fonctions clés en 2026.",
        },
      ],
      table: {
        caption:
          "Comparatif AskRainbow vs Sidely — 2026, sources : sites éditeurs et entretiens utilisateurs.",
        headers: ["Fonction", "Rainbow", "Sidely"],
        rows: [
          ["Capture vocale (mémo après visite)", "Oui — natif", "Limité (notes texte)"],
          ["Chat IA conversationnel", "Oui — natif", "Non"],
          ["Extraction auto entités", "Oui — natif", "Manuel"],
          ["Planification de tournée géoloc", "Non", "Oui — natif"],
          ["Relevé de linéaire (photo merchandising)", "Non", "Oui — natif"],
          ["Prise de commande sur le terrain", "Non", "Oui — natif"],
          ["Signature électronique", "Non", "Oui — natif"],
          ["Reporting management terrain", "Non (export CSV)", "Oui — natif"],
          ["Mode hors-ligne", "Oui — natif", "Oui (selon édition)"],
          ["Briefing avant rendez-vous (« prépare la visite »)", "Oui — natif", "Limité"],
          ["Setup / formation requise", "0 minute", "Plusieurs jours à plusieurs semaines"],
          ["Cible utilisateur", "1-30 commerciaux B2B", "10+ commerciaux FMCG / retail / B2B"],
          ["Pricing 2026", "Bêta gratuite (post-bêta sur demande)", "30-60 €/u/mois selon édition"],
        ],
      },
    },
    {
      h2: "Cas où Sidely est le bon choix",
      paragraphs: [
        {
          lead:
            "Sidely est pertinent si vous gérez une équipe terrain structurée avec besoin de pilotage opérationnel.",
          bullets: [
            "Vous avez 10+ commerciaux qui font des tournées de 5-15 points de vente par jour.",
            "Vous avez besoin de géolocaliser les visites, planifier les tournées, optimiser les itinéraires.",
            "Vos commerciaux relèvent les linéaires, prennent des photos merchandising, font signer des bons de commande.",
            "Vous voulez un management terrain (qui a fait quoi, où, quand, avec quel résultat) consolidé.",
            "Vous êtes en FMCG, retail, distribution alimentaire, ou tout autre secteur où la tournée structurée est centrale.",
          ],
        },
      ],
    },
    {
      h2: "Cas où Rainbow est le bon choix",
      paragraphs: [
        {
          lead:
            "Rainbow est pertinent si votre pain principal est la capture, pas la planification.",
          bullets: [
            "Vous êtes 1-30 commerciaux, parfois indépendants ou freelance.",
            "Le métier est relationnel (vin, dispositif médical, automobile B2B, conseil) plus que de la prise de commande répétée.",
            "Le pain n'est pas « optimiser la tournée », c'est « ne pas oublier ce que le client a dit ».",
            "Vous voulez tester sans setup, sans engagement, sans former l'équipe à un workflow imposé.",
            "Le commercial individuel doit pouvoir s'abonner seul (ce que Sidely ne permet pas vraiment).",
          ],
        },
      ],
      callout: {
        kind: "tip",
        text: "Sidely et Rainbow visent des publics légèrement différents : Sidely pour piloter une équipe FMCG / retail structurée ; Rainbow pour donner une mémoire à un commercial individuel ou une petite équipe B2B relationnelle.",
      },
    },
    {
      h2: "Faire cohabiter Rainbow et Sidely (cas hybride)",
      paragraphs: [
        {
          lead:
            "Pour une équipe FMCG ou retail qui a Sidely pour la tournée, Rainbow peut s'ajouter pour la couche conversationnelle.",
          body:
            "Sidely structure : qui visite quoi, quand, avec quoi (linéaire, photo, commande). Rainbow capte : ce qui se dit dans le bureau du gérant, les détails relationnels, les opportunités hors process. Les deux exportent en CSV. La donnée Rainbow vient enrichir le CRM derrière Sidely.",
        },
        {
          lead:
            "Pour la majorité des équipes, ce double équipement est surdimensionné. La règle pratique :",
          bullets: [
            "Si votre besoin est « voir où mes commerciaux sont et qu'ils relèvent les linéaires » : Sidely.",
            "Si votre besoin est « ne pas perdre ce qui se dit en visite » : Rainbow.",
            "Si vous avez les deux besoins et un budget conséquent : les deux.",
          ],
        },
      ],
    },
    {
      h2: "Sur le pricing en 2026",
      paragraphs: [
        {
          lead:
            "Sidely : pricing sur devis, fourchette observée 30-60 €/u/mois selon l'édition (Standard / Premium / Enterprise) et le volume.",
          body:
            "Pour une équipe de 10 commerciaux : 3 600 à 7 200 €/an environ. Setup et formation initiale facturés séparément dans certains cas.",
        },
        {
          lead:
            "AskRainbow : bêta gratuite actuellement, sans engagement, sans setup. Le tarif post-bêta est discuté au cas par cas avec l'éditeur.",
          body:
            "Sans carte bancaire pour démarrer. Voir /beta.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Sidely fonctionne-t-il pour une équipe de moins de 10 commerciaux ?",
      a: "Sidely peut s'adresser à des équipes plus petites, mais le pricing et le setup sont calibrés pour des équipes structurées avec un manager terrain. Pour 1-5 commerciaux indépendants ou freelance, Rainbow est mieux dimensionné.",
    },
    {
      q: "Rainbow fait-il de la géolocalisation ou du relevé de linéaire ?",
      a: "Non. Rainbow est volontairement minimal : capture vocale, extraction d'entités, briefing, export CSV. Si vous avez besoin de géoloc tournée et de merchandising terrain, Sidely (ou un équivalent SFA) est le bon outil.",
    },
    {
      q: "Pourquoi Sidely apparaît-il en haut des recherches « assistant commercial IA » ?",
      a: "Sidely a investi dans le SEO et le content marketing depuis des années. Leur blog et leurs guides sont indexés en haut des résultats français — ce qui ne signifie pas que c'est l'outil pertinent pour vous : c'est un signal d'autorité SEO, pas de fit produit.",
    },
    {
      q: "Comment intégrer Rainbow et Sidely si on a les deux ?",
      a: "Par export CSV. Rainbow exporte les contacts/CR/tâches en CSV ; vous les importez en complément de la donnée Sidely (souvent dans un CRM centralisateur en aval, type HubSpot, Salesforce, Sellsy).",
    },
    {
      q: "Sidely est-il français ?",
      a: "Oui, Sidely est une société française. AskRainbow également (askrainbow.ai, France, fondé en 2024). Les deux sont hébergés en France et conformes RGPD.",
    },
    {
      q: "Et pour comparer à d'autres assistants vocaux ?",
      a: "Voir /comparaisons/rainbow-vs-modjo (revenue intelligence inside sales), /comparaisons/rainbow-vs-trustlead (assistant vocal direct concurrent), /comparaisons/rainbow-vs-voiceline (revenue intelligence terrain).",
    },
  ],
  keyTakeaways: [
    "Sidely = plateforme SFA terrain pour équipes 10+ structurées (FMCG, retail), 30-60 €/u/mois.",
    "Rainbow = assistant vocal léger pour 1-30 commerciaux relationnels, actuellement en bêta gratuite (post-bêta sur demande).",
    "Choisir Sidely si pain = pilotage tournée, géoloc, relevé linéaire, signatures.",
    "Choisir Rainbow si pain = capture rapide, mémoire relationnelle, mobilité, individu-friendly.",
    "Cohabitation possible mais souvent surdimensionnée — choisir l'un.",
  ],
  related: [
    "rainbow-vs-modjo",
    "rainbow-vs-trustlead",
    "alternative-modjo-terrain",
  ],
};
