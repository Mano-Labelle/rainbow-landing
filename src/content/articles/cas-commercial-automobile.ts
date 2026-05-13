import type { Article } from "./index";

// Profile anonymisé construit à partir de 2 entretiens utilisateurs menés
// en 2026 avec des managers commerciaux du secteur automobile B2B
// (services aux flottes, LLD/LOA, distributeurs B2B2C). Citations issues
// directement des notes d'entretien.
export const article: Article = {
  slug: "commercial-automobile-b2b-flotte",
  category: "cas",
  vertical: "automobile-b2b",
  title:
    "Manager commercial automobile B2B : 250 collaborateurs, des données dispersées entre 4 outils",
  metaTitle: "Cas client : manager commercial automobile B2B — Rainbow",
  metaDesc:
    "Profil anonymisé : Nicolas, manager commercial dans un service aux flottes. 250 personnes, données dispersées entre DMS, CRM, configurateur et Excel. Comment Rainbow consolide la mémoire client à la sortie d'un essai.",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  heroLead:
    "Nicolas dirige l'équipe commerciale d'une PME de 250 personnes spécialisée en services aux flottes (LLD, LOA, gestion de parc). Son terrain quotidien : 4 outils à la fois (DMS, CRM, configurateur, Excel partagé), des essais clients en showroom, et une mémoire commerciale disséminée. AskRainbow lui propose une seule capture, un seul fichier, exportable partout.",
  tldr: [
    "Profil : manager commercial dans une PME de 250 personnes, services aux flottes B2B/B2B2C, ~50 commerciaux terrain.",
    "Pain principal : 4 outils en parallèle (DMS, CRM, configurateur, Excel), aucune source unique pour l'historique client.",
    "Stack actuel : DMS constructeur, CRM Salesforce, configurateur en ligne, Excel partagé d'équipe.",
    "Avec Rainbow : capture vocale entre deux essais, export CSV vers chacun des 4 outils selon le besoin.",
  ],
  sections: [
    {
      h2: "Profil : 250 collaborateurs, 50 commerciaux, 4 logiciels en parallèle",
      paragraphs: [
        {
          lead:
            "Nicolas dirige les ventes d'une PME indépendante française qui distribue des services aux flottes : location longue durée (LLD), location avec option d'achat (LOA), gestion de parc, conseil. Son équipe : 50 commerciaux terrain, 200 collaborateurs back-office.",
          body:
            "Sa journée type : 30 % management terrain, 30 % gestion de comptes stratégiques, 30 % outillage / process, 10 % le reste. Il connaît la douleur opérationnelle de l'équipe par cœur — il était lui-même commercial il y a 4 ans.",
        },
        {
          lead:
            "Le stack actuel : 4 outils en parallèle, 0 source unique de vérité.",
          bullets: [
            "DMS du constructeur — pour la commande véhicule, le stock, la livraison.",
            "CRM Salesforce — pour le pipeline, les opportunités, les forecasts.",
            "Configurateur en ligne — pour les devis LLD/LOA personnalisés.",
            "Excel partagé d'équipe — pour le suivi rapide, les notes informelles, les RDV en cours.",
          ],
        },
      ],
      callout: {
        kind: "info",
        text: "L'historique d'un client passe par 4 systèmes différents. Aucun ne contient la totalité. Le commercial garde la cohérence dans sa tête.",
      },
    },
    {
      h2: "Le vrai problème : tout est éclaté, rien n'est consolidé",
      paragraphs: [
        {
          lead:
            "Quand un client revient pour renouveler une flotte, le commercial doit reconstituer son historique entre 4 outils.",
          body:
            "DMS pour les véhicules livrés, Salesforce pour le pipeline, configurateur pour les devis, Excel pour les détails informels. Et la mémoire personnelle pour le reste — la conversation avec le DAF il y a 8 mois, la préférence du dirigeant pour les SUV plutôt que les berlines, la promesse de revoir le contrat à la prochaine échéance.",
        },
        {
          lead:
            "« Le CRM, c'est un GPT. » C'est ce que dit Nicolas du futur du métier.",
          body:
            "Il veut pouvoir demander à voix : « donne-moi tous les comptes flotte du Sud-Est dont le contrat finit dans 90 jours », « qui je dois recontacter cette semaine », « prépare-moi le brief pour le RDV chez X ». Sans cliquer dans 4 onglets.",
        },
      ],
      quote: {
        text: "Aujourd'hui, l'info est dans les têtes. Et quand un commercial s'en va, on perd 18 mois de relation. Le CRM ne capture que les commandes, pas la matière relationnelle.",
        attribution:
          "Profil anonymisé, manager commercial automobile B2B, entretien 2026",
      },
    },
    {
      h2: "Sa journée avec Rainbow : un point de capture, quatre exports",
      paragraphs: [
        {
          lead:
            "Le pari de Rainbow chez Nicolas : un seul point de capture vocale, plusieurs exports CSV vers les outils existants.",
        },
      ],
      h3s: [
        {
          h3: "1. Entre deux essais en showroom",
          paragraphs: [
            {
              lead:
                "« Essai pris par M. Dupuis, gérant de Logistique Atlantique, 14 véhicules à renouveler en juin 2026, intéressé par hybride rechargeable. Préférence pour Volkswagen, mais ouvert à Peugeot si remise volume. Décideur final : son DAF Mme Berger, à inclure au prochain RDV. »",
              body:
                "Rainbow extrait : contact (M. Dupuis, Mme Berger DAF à ajouter), entreprise (Logistique Atlantique), tâches (envoi devis, inclure DAF), montant (14 véhicules), préférences (hybride rechargeable, VW prioritaire), relance (juin 2026 — fin de contrat).",
            },
          ],
        },
        {
          h3: "2. Le soir, à l'agence : exports différenciés",
          paragraphs: [
            {
              lead:
                "Rainbow exporte par CSV. Nicolas (ou son commercial) ventile : pipeline → Salesforce, devis → configurateur, livraisons à venir → DMS, RDV à recroiser → Excel équipe.",
              body:
                "Aucun outil n'est remplacé. Mais chacun reçoit la donnée pertinente pour lui. La saisie est faite une seule fois, par la voix.",
            },
          ],
        },
        {
          h3: "3. Sur la route, briefing avant le prochain rendez-vous",
          paragraphs: [
            {
              lead:
                "« Prépare-moi le brief client pour Logistique Atlantique. »",
              body:
                "Rainbow ressort en 4 lignes : contrat actuel (14 véhicules, fin juin 2026), historique des derniers échanges, préférence (hybride rechargeable, VW), point en suspens (DAF à inclure). Le commercial entre en RDV préparé sans avoir ouvert 4 outils.",
            },
          ],
        },
      ],
    },
    {
      h2: "Pourquoi ça marche sur l'automobile B2B en particulier",
      paragraphs: [
        {
          lead:
            "L'automobile B2B est un terrain où la donnée client est, par construction, dispersée.",
          bullets: [
            "Le DMS est imposé par le constructeur — non négociable.",
            "Le CRM est imposé par la maison-mère ou la stratégie groupe — non négociable.",
            "Le configurateur est lié au constructeur — non négociable.",
            "Excel est l'outil naturel des commerciaux pour ce qui n'entre nulle part ailleurs.",
          ],
        },
        {
          lead:
            "Rainbow ne prétend pas remplacer ce stack. Il ajoute une couche commune en amont, qui consolide la voix du commercial, et alimente les 4 outils par CSV.",
          body:
            "La promesse n'est pas « moins d'outils ». La promesse est « moins de saisie redondante » — saisir une fois, distribuer.",
        },
      ],
    },
    {
      h2: "Bilan : un point de vérité commercial, exportable partout",
      paragraphs: [
        {
          lead:
            "Pour Nicolas, l'enjeu est moins le temps gagné que la robustesse du process.",
          bullets: [
            "1 point de capture vocale au lieu de 4 saisies (DMS, CRM, configurateur, Excel).",
            "Continuité d'activité : si un commercial s'en va, l'historique relationnel est exportable, pas seulement les commandes.",
            "Onboarding accéléré pour un nouveau commercial : il reçoit un export CSV de Rainbow plutôt qu'un mois d'accompagnement terrain.",
            "Visibilité management : Nicolas peut interroger l'app pour ses forecasts et ses points stratégiques.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Rainbow remplace-t-il Salesforce ou le DMS d'un constructeur ?",
      a: "Non. Salesforce et le DMS restent les systèmes de référence pour le pipeline et la livraison de véhicules. Rainbow les alimente par export CSV avec les données capturées en mobilité (CR de visite, contacts, préférences, relances, points relationnels). Comparatif détaillé : /comparaisons/rainbow-vs-salesforce.",
    },
    {
      q: "Comment Rainbow se branche-t-il sur le configurateur LLD/LOA ?",
      a: "Par export CSV : Rainbow génère un fichier de prospects/opportunités à importer dans le configurateur ou dans Salesforce. Pas d'API directe en bêta — la portabilité par CSV est volontairement le canal universel pour ne dépendre d'aucun éditeur.",
    },
    {
      q: "Que se passe-t-il pour la connaissance commerciale quand un commercial part ?",
      a: "L'export CSV Rainbow contient l'historique relationnel : préférences clients, échanges informels, points en suspens, relances datées. Ce que le CRM ne garde pas. C'est ce qui transforme un départ subi en transmission propre. Voir aussi notre cas dispositif médical pour le même mécanisme : /cas/commercial-dispositif-medical-hopital.",
    },
    {
      q: "Combien coûte Rainbow pour une équipe de 50 commerciaux automobile B2B ?",
      a: "AskRainbow est actuellement en bêta gratuite, sans carte bancaire. Le tarif post-bêta est discuté au cas par cas avec l'éditeur (mano@askrainbow.ai). Voir /beta.",
    },
    {
      q: "Rainbow gère-t-il le vocabulaire métier (LLD, LOA, gestion de parc, hybride rechargeable, autonomie) ?",
      a: "Oui. Les abréviations métier (LLD, LOA, AUER, FCR, BEV, PHEV) et les termes flotte sont reconnus dès les premiers échanges. Pour le détail, voir le guide complet : /guides/assistant-commercial-automobile-b2b.",
    },
  ],
  keyTakeaways: [
    "Manager d'équipe automobile B2B : 4 outils en parallèle, aucune source unique de vérité.",
    "Le pain principal n'est pas le temps : c'est la dispersion de l'information client entre DMS, CRM, configurateur, Excel.",
    "Rainbow consolide la capture en un point vocal, exporte par CSV vers les 4 outils.",
    "Effet stratégique : continuité d'activité préservée en cas de turnover commercial.",
    "Modèle de pricing aligné : actuellement en bêta gratuite, post-bêta discuté au cas par cas avec l'éditeur.",
  ],
  related: [
    "assistant-commercial-automobile-b2b",
    "rainbow-vs-salesforce",
    "alternative-salesforce-pme",
  ],
};
