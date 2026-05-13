import type { Article } from "./index";

// Profile anonymisé construit à partir de 3 entretiens utilisateurs menés
// en 2026 avec des commerciaux du secteur vin (cavistes / sommeliers /
// restaurateurs). Citations issues directement des notes d'entretien.
export const article: Article = {
  slug: "commercial-vin-tournee-cavistes",
  category: "cas",
  vertical: "viticulture",
  title:
    "Commerciale vin sur 5 départements : comment Léontine sort du compte-rendu du dimanche soir",
  metaTitle: "Cas client : commerciale vin, Rainbow remplace le CR du dimanche",
  metaDesc:
    "Profil anonymisé : Léontine, commerciale vin sur 5 départements, perd 5h/semaine en comptes-rendus le dimanche. Comment Rainbow capte sa tournée caviste sans CRM à tenir.",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  heroLead:
    "Léontine est commerciale terrain pour un négoce de vin du Sud-Ouest. Elle visite cavistes, sommeliers et restaurateurs sur 5 départements. Sa plus grosse épine dans le pied : rattraper les comptes-rendus le dimanche soir, parce qu'en semaine, elle conduit, elle déguste, elle vend. Voici comment l'assistant commercial IA AskRainbow s'insère dans sa journée.",
  tldr: [
    "Profil : 8 ans dans le vin, négoce indépendant, 5 départements, ~120 cavistes / sommeliers / restaurateurs en portefeuille.",
    "Pain principal : 4 à 5 h le dimanche soir à rattraper les CR, plus la mémoire relationnelle qui fuit (préférences sommeliers, anniversaires, dégustations).",
    "Stack actuel : iPhone, Excel partagé, WhatsApp, parfois Baqio. Pas de CRM tenu à jour.",
    "Avec Rainbow : 60-90 secondes de dictée à la sortie d'un caviste ; pas de retour en arrière le dimanche.",
  ],
  sections: [
    {
      h2: "Profil : 5 départements, 4 visites par jour, zéro temps mort",
      paragraphs: [
        {
          lead:
            "Léontine est commerciale itinérante pour un négoce de vin du Sud-Ouest, 8 ans dans le métier, 120 comptes actifs.",
          body:
            "Sa semaine type : lundi-mardi sur l'arc atlantique (cavistes urbains), mercredi sur les restaurants gastronomiques, jeudi en grande distribution spécialisée, vendredi en clôture administrative et préparation. 4 à 6 visites par jour selon la zone, avec 30 à 90 minutes de route entre chaque rendez-vous.",
        },
        {
          lead:
            "Son outil principal aujourd'hui : un tableur Excel partagé avec son chef de zone, plus WhatsApp pour les échanges courts.",
          body:
            "Le négoce a un Baqio (CRM wine-industry) mais Léontine ne l'ouvre que pour passer les commandes. Pas pour saisir un CR ou suivre une relance — « je n'ai pas le temps de remplir des formulaires entre deux RDV ».",
        },
      ],
      callout: {
        kind: "info",
        text: "120 comptes actifs × 1 visite/trimestre = 480 visites/an. À 15 minutes de saisie par CR, c'est 120 heures/an perdues à rattraper.",
      },
    },
    {
      h2: "Le vrai problème : la mémoire relationnelle qui fuit",
      paragraphs: [
        {
          lead:
            "Le compte-rendu n'est pas le pire. Le pire, c'est ce qu'il y a autour : les préférences, les anniversaires, le prénom du fils du caviste.",
          body:
            "« Quand j'arrive chez M. Durand pour la troisième fois et que je ne me souviens plus si c'est sa fille qui se marie ou sa nièce, il le sent. » Le métier du vin se joue sur 5 ans de relation, pas sur une commande. Perdre la mémoire relationnelle, c'est perdre la vente future.",
        },
      ],
      quote: {
        text: "Ma plus grosse épine dans le pied, c'est le compte-rendu à rattraper le soir. Et celui que je rattrape le dimanche, il est à moitié vrai.",
        attribution:
          "Léontine, commerciale vin, entretien utilisateur 2026 (citation reconstituée et anonymisée)",
      },
    },
    {
      h2: "Sa journée avec Rainbow : trois moments de capture",
      paragraphs: [
        {
          lead:
            "AskRainbow s'insère dans trois moments précis de la journée de Léontine, sans rien remplacer d'autre.",
        },
      ],
      h3s: [
        {
          h3: "1. À la sortie d'un caviste, dans la voiture",
          paragraphs: [
            {
              lead:
                "60 à 90 secondes de dictée libre, en marchant ou en s'asseyant au volant.",
              body:
                "« Caviste Durand à Brive, carte orientée Bourgogne, attend mes prix sur les 2024 Pouilly-Fuissé. Anniversaire de sa fille dans 3 semaines. Commande probable de 12 cartons en rouge pour la Saint-Vincent. » Rainbow extrait : contact (Durand), entreprise (caviste Brive), 1 relance datée (3 semaines, anniversaire fille), 1 montant probable (12 cartons), 1 note dégustation (Pouilly-Fuissé 2024).",
            },
          ],
        },
        {
          h3: "2. Pendant une dégustation au restaurant",
          paragraphs: [
            {
              lead:
                "Léontine ne dicte pas pendant l'échange — elle écoute le sommelier. Elle note à la sortie, dans la voiture.",
              body:
                "Rainbow gère le vocabulaire métier (attaque, longueur, tanins, robe, minéralité, cépages, appellations). Le compte-rendu reste lisible et structuré. Quand elle revient 6 mois plus tard, elle retrouve la note exacte du sommelier sur le millésime 2022.",
            },
          ],
        },
        {
          h3: "3. Le dimanche soir : plus rien à faire",
          paragraphs: [
            {
              lead:
                "C'est le test ultime : le dimanche soir, 19h. Avant Rainbow : 4 à 5 heures de saisie. Après : un coup d'œil de validation.",
              body:
                "Léontine ouvre l'app, parcourt les 18 CR de la semaine déjà rédigés, valide, ajoute parfois une ligne, et passe à la suite. Le dimanche redevient un dimanche.",
            },
          ],
        },
      ],
    },
    {
      h2: "Ce qu'AskRainbow ne fait pas (et qui n'est pas grave)",
      paragraphs: [
        {
          lead:
            "Rainbow ne remplace pas Baqio. Et Léontine ne le veut pas.",
          body:
            "Baqio gère les commandes, la facturation, le stock — c'est l'outil du négoce. Rainbow capte la voix de Léontine sur le terrain et alimente Baqio par export CSV. Les deux outils cohabitent : l'un est la mémoire commerciale du terrain, l'autre est le système de gestion de l'entreprise.",
        },
        {
          lead:
            "Rainbow ne surveille pas Léontine.",
          body:
            "Sur l'abonnement individuel, ses notes sont à elle. Le négoce n'a pas accès à sa mémoire relationnelle — seulement aux exports CSV qu'elle décide de partager (ou que son contrat lui demande). C'est un point bloquant levé : « j'aime pas être trackée », un retour récurrent en entretiens vin.",
        },
      ],
    },
    {
      h2: "Bilan en chiffres (estimés)",
      paragraphs: [
        {
          lead:
            "Sur la base de 4-5 h récupérées par semaine, à un coût horaire chargé de 35 € pour une commerciale province :",
          bullets: [
            "Temps libéré : ≈ 200 h/an, soit 5 semaines complètes.",
            "Valeur du temps : ≈ 7 000 €/an de temps redirigé vers la vente ou la vie personnelle.",
            "Coût de Rainbow : actuellement en bêta gratuite, post-bêta discuté au cas par cas avec l'éditeur.",
            "ROI temps brut : ordre de grandeur supérieur à 20x sur le temps libéré, vs un abonnement de niveau forfait mobile professionnel.",
          ],
        },
        {
          lead:
            "Mais la métrique qui compte le plus pour Léontine n'est pas en euros.",
          body:
            "« Je veux mes dimanches. » Rainbow lui rend ses dimanches. Le reste — meilleure préparation des visites, mémoire relationnelle plus fiable, moins d'oublis de relance — vient en bonus.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Léontine est-elle une vraie cliente ?",
      a: "Profil anonymisé construit à partir de 3 entretiens utilisateurs menés en 2026 par AskRainbow avec des commerciaux du secteur vin. Les citations sont issues directement des notes d'entretien, recombinées et anonymisées pour protéger l'identité des participantes. La situation décrite est représentative du secteur, pas d'une personne unique.",
    },
    {
      q: "Pourquoi le secteur vin est-il prioritaire pour Rainbow ?",
      a: "Trois raisons : la relation client compte plus que le pipeline (mémoire relationnelle), la culture WhatsApp/voix est déjà installée chez les commerciaux vin, et les outils CRM existants (Baqio, WineCRM) sont complémentaires plutôt que concurrents. Voir le guide complet : /guides/assistant-commercial-viticulture.",
    },
    {
      q: "Combien coûte Rainbow pour une commerciale comme Léontine ?",
      a: "AskRainbow est actuellement en bêta gratuite, sans carte bancaire. Le tarif post-bêta est discuté au cas par cas avec l'éditeur (mano@askrainbow.ai).",
    },
    {
      q: "Rainbow remplace-t-il Baqio ou WineCRM ?",
      a: "Non. Rainbow capte la voix sur le terrain et alimente Baqio/WineCRM par export CSV. Les deux outils cohabitent : Rainbow est la mémoire commerciale du commercial, Baqio est le système de gestion du négoce.",
    },
    {
      q: "Comment commencer si je suis dans la même situation que Léontine ?",
      a: "Téléchargez Rainbow sur iPhone (App Store), Android (Google Play) ou ouvrez la version web sur app.askrainbow.ai. Bêta gratuite, sans carte. Première dictée en moins de 2 minutes, pas de setup, pas de formation.",
    },
  ],
  keyTakeaways: [
    "Une commerciale vin perd 4-5 h/semaine sur les CR du dimanche soir.",
    "Le vrai pain n'est pas la saisie, c'est la mémoire relationnelle qui fuit (préférences sommeliers, anniversaires).",
    "Rainbow capte 60-90 s à la sortie d'un caviste et alimente Baqio par CSV — sans remplacer le CRM existant.",
    "ROI : un ordre de grandeur supérieur à 20x sur le temps libéré, vs un abonnement de niveau forfait mobile professionnel.",
    "La métrique qui compte vraiment pour Léontine : récupérer ses dimanches.",
  ],
  related: [
    "assistant-commercial-viticulture",
    "compte-rendu-visite-ia",
    "rainbow-vs-modjo",
  ],
};
