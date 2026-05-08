import type { Article } from "./index";

export const article: Article = {
  slug: "compte-rendu-degustation-ia",
  category: "guide",
  vertical: "viticulture",
  title:
    "Compte-rendu de dégustation IA : comment automatiser sans perdre la nuance",
  metaTitle: "Compte-rendu de dégustation IA — guide 2026",
  metaDesc:
    "Comment un assistant IA prend le compte-rendu d'une dégustation : vocabulaire métier (attaque, longueur, robe), workflow caviste / sommelier / restaurateur, outils 2026.",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  heroLead:
    "Le compte-rendu d'une dégustation est une discipline à part : on ne décrit pas un vin comme on décrit un client. Vocabulaire métier dense (attaque, longueur, robe, tanins, minéralité), millésimes, cuvées, accords mets-vins. Voici comment un assistant commercial IA comme AskRainbow prend ce CR sans perdre la nuance, et comment l'intégrer à votre workflow commercial vin.",
  tldr: [
    "Un compte-rendu de dégustation a sa propre grammaire — l'IA doit comprendre le métier, pas juste transcrire.",
    "Le bon workflow : dégustation, sortie du restaurant ou de la cave, dictée 90 secondes dans la voiture, validation le soir.",
    "Vocabulaire critique à supporter : attaque, longueur, robe, tanins, minéralité, structure, finale, cépages, appellations, millésimes.",
    "AskRainbow gère ce vocabulaire et lie la dégustation au contact (sommelier, restaurateur, caviste) — pas dans un fichier orphelin.",
  ],
  sections: [
    {
      h2: "Qu'est-ce qu'un compte-rendu de dégustation ?",
      paragraphs: [
        {
          lead:
            "Un compte-rendu (CR) de dégustation décrit ce qu'un commercial vin (ou un sommelier) a goûté lors d'une visite, d'un salon, d'une présentation gamme ou d'un déjeuner client.",
          body:
            "À la différence d'un CR de visite classique (« qu'est-ce qu'on s'est dit »), le CR de dégustation décrit le produit lui-même : robe, nez, bouche, finale. Pour un commercial vin, c'est une mémoire double : ce que le client a aimé / pas aimé, ET ce que le commercial pourra lui re-proposer dans 6 mois.",
        },
        {
          lead:
            "C'est un actif commercial sous-estimé.",
          body:
            "Un CR de dégustation bien archivé permet de retrouver, 6 mois plus tard, qu'un sommelier précis a apprécié un Pouilly-Fuissé 2024 sur une attaque vive et une finale saline. Quand le commercial passe à la prochaine cuvée comparable, il a son argument prêt.",
        },
      ],
    },
    {
      h2: "Pourquoi l'IA est plus utile qu'on ne croit pour ce CR",
      paragraphs: [
        {
          lead:
            "Le CR de dégustation est typiquement saisi tard, mal, ou pas du tout — exactement comme un CR de visite, mais avec un vocabulaire plus exigeant.",
          body:
            "Les commerciaux vin interrogés en 2026 décrivent le même pain : « Le soir, je ne me souviens plus de ce qu'il a dit sur le 2022. Je note un truc générique. » L'IA résout ça en captant à la sortie de la dégustation, dans la voiture, quand la mémoire est encore fraîche.",
        },
      ],
      h3s: [
        {
          h3: "Le moment de capture optimal",
          paragraphs: [
            {
              lead:
                "Idéalement : entre la dégustation et la prochaine activité. Au volant en partant, sur le quai d'une gare, en attendant un Uber.",
              body:
                "Pas pendant la dégustation (il faut écouter le client) et pas le soir (la mémoire s'est tassée).",
            },
          ],
        },
        {
          h3: "Le vocabulaire métier à supporter",
          paragraphs: [
            {
              lead:
                "L'IA doit reconnaître au minimum : robe, nez, bouche, attaque, milieu, finale, longueur (en caudalies), tanins, acidité, minéralité, structure, équilibre.",
              body:
                "Plus les cépages français (Chardonnay, Pinot Noir, Cabernet Sauvignon, Cabernet Franc, Merlot, Syrah, Grenache, Sauvignon Blanc, Riesling, Gewurztraminer…), les appellations (Pouilly-Fuissé, Saint-Émilion, Châteauneuf-du-Pape, Sancerre, Crozes-Hermitage, Chablis, Margaux…), et les codes du métier (allocation, en primeur, sur lies, élevage en barriques, biodynamie, vin de France, IGP, AOP).",
            },
          ],
        },
        {
          h3: "Lier la dégustation au contact",
          paragraphs: [
            {
              lead:
                "Le piège : un fichier de notes de dégustation orphelin (Excel, Word, papier) sans lien au sommelier qui les a données.",
              body:
                "Le bon workflow associe chaque dégustation à un contact (sommelier Mme X, restaurateur M. Y, caviste Z) et à un contexte (date, restaurant, salon). C'est ce qui permet, 6 mois plus tard, de retrouver « ce que Mme X a dit du 2022 ».",
            },
          ],
        },
      ],
    },
    {
      h2: "Workflow type : du verre à la mémoire commerciale",
      paragraphs: [
        {
          lead:
            "Un workflow simple en 4 étapes pour un commercial vin équipé d'un assistant IA.",
        },
      ],
      h3s: [
        {
          h3: "1. Avant la dégustation : briefing",
          paragraphs: [
            {
              lead:
                "« Prépare la visite chez Le Comptoir du Vin à Lyon. »",
              body:
                "L'IA ressort en 3-4 lignes : dernières dégustations chez ce restaurateur, cuvées appréciées, point en suspens (« attendre prix sur le 2024 Pouilly »). Le commercial entre préparé.",
            },
          ],
        },
        {
          h3: "2. Pendant la dégustation : éteint",
          paragraphs: [
            {
              lead:
                "L'IA est éteinte. Vous êtes en relation avec le sommelier ou le restaurateur, vous écoutez, vous ajustez.",
              body:
                "C'est important : aucune transcription en bloc, aucune écoute passive, aucun doute déontologique. Vous n'avez pas un dictaphone allumé en réunion.",
            },
          ],
        },
        {
          h3: "3. À la sortie : 90 secondes de dictée",
          paragraphs: [
            {
              lead:
                "Au volant, dans la rue, dans le métro : vous dictez ce qui mérite d'être retenu.",
              body:
                "Exemple : « Le Comptoir du Vin, sommelier M. Dubreuil. Dégustation 5 cuvées : Pouilly-Fuissé 2024 — attaque vive, longueur 6-7 caudalies, validé pour la carte été. Sancerre 2023 — minéralité bien marquée mais finale jugée trop courte. Anniversaire de sa fille la semaine prochaine. Relance prévue mi-juin pour les rosés Provence. »",
            },
            {
              lead:
                "L'IA extrait : 1 contact (M. Dubreuil), 1 entreprise (Le Comptoir du Vin), 5 dégustations liées (avec termes), 1 décision commerciale (Pouilly-Fuissé validé carte été), 1 détail relationnel (anniversaire fille), 1 relance datée (mi-juin, rosés Provence).",
            },
          ],
        },
        {
          h3: "4. Le soir : validation, pas saisie",
          paragraphs: [
            {
              lead:
                "Vous parcourez le CR rédigé par l'IA, validez, ajoutez parfois une nuance. Pas de saisie au clavier.",
              body:
                "Le CR est lié au contact M. Dubreuil — la prochaine fois que vous vous préparez à le revoir, l'IA ressortira ces 5 dégustations dans le bon ordre.",
            },
          ],
        },
      ],
    },
    {
      h2: "Ce que change un CR de dégustation IA — concrètement",
      paragraphs: [
        {
          lead:
            "Trois changements observables chez les commerciaux vin équipés.",
          bullets: [
            "Plus de dégustations sont captées (90 % vs ~30 % en saisie manuelle, retours interviews 2026).",
            "Les CR sont liés au contact, pas perdus dans un fichier orphelin.",
            "La préparation des visites suivantes redevient possible — l'argumentaire « rappel-toi en juin tu m'avais dit que… » revient.",
          ],
        },
      ],
      callout: {
        kind: "tip",
        text: "Le vrai gain n'est pas la rapidité de saisie. C'est la mémoire long terme. Un sommelier qui se sent reconnu (« vous m'aviez dit aimer le Pouilly-Fuissé sur l'attaque vive ») reste fidèle 5 ans. Sans cette mémoire, vous le perdez à la concurrence dans 18 mois.",
      },
    },
    {
      h2: "Outils 2026 : qui fait quoi pour le CR de dégustation ?",
      paragraphs: [
        {
          lead:
            "Trois familles d'outils sur le marché en 2026.",
          bullets: [
            "**CRM-ERP wine-industry** (Baqio, WineCRM, iD Systemes, Cap Vignes) : champs notes manuels, pas de capture vocale dédiée à la dégustation.",
            "**Apps de dégustation** (Vivino, Delectable, Raisin) : conçues pour le particulier, pas pour le commercial B2B.",
            "**Assistants commerciaux vocaux** comme AskRainbow : capture vocale + extraction + lien au contact + export CSV vers le CRM-ERP wine.",
          ],
        },
        {
          lead:
            "AskRainbow se positionne dans la 3e famille — pas un CRM, pas une app de dégustation grand public, mais un assistant qui capte la voix du commercial vin et alimente le CRM existant.",
          body:
            "Voir le comparatif détaillé : /comparaisons/rainbow-vs-baqio.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "L'IA comprend-elle le vocabulaire technique de dégustation (attaque, longueur, caudalies, structure) ?",
      a: "Oui, AskRainbow est entraîné sur les termes métier de la dégustation : robe, nez, bouche, attaque, milieu, finale, longueur (caudalies), tanins, acidité, minéralité, structure, équilibre, finale. Plus les cépages, appellations et codes filière (en primeur, sur lies, biodynamie…).",
    },
    {
      q: "Que se passe-t-il si je dicte un terme rare (cépage italien, vin nature) ?",
      a: "L'IA gère le vocabulaire grand-public + le métier français en standard. Pour les termes très rares (cépages exotiques, jargon de niche), la transcription peut nécessiter une correction au moment de la validation. Vous le faites en quelques secondes — pas pendant la dictée.",
    },
    {
      q: "Comment AskRainbow lie-t-il la dégustation au contact (sommelier, restaurateur) ?",
      a: "L'IA reconnaît dans le mémo dicté : le nom du contact (M. Dubreuil), l'entreprise (Le Comptoir du Vin), et les cuvées dégustées. Elle crée un lien explicite : la dégustation est rangée sous le contact, pas dans un fichier orphelin. La prochaine fois que vous préparez ce contact, l'IA ressort l'historique.",
    },
    {
      q: "Faut-il être en ligne pour dicter dans une cave ou un vignoble ?",
      a: "Non. Le mode hors ligne est natif. Vous dictez en cave, en vignoble, en parking d'hôpital — peu importe la couverture réseau. La synchronisation se fait au retour de connexion.",
    },
    {
      q: "Combien coûte AskRainbow pour un commercial vin ?",
      a: "Bêta gratuite actuellement, sans carte. Au lancement payant, 15 à 25 €/u/mois sans engagement. Détail tarifs : /tarifs.",
    },
    {
      q: "Et pour aller plus loin sur le vin ?",
      a: "Voir la page dédiée vin : /vin. Le guide complet : /guides/assistant-commercial-viticulture. Le cas anonymisé : /cas/commercial-vin-tournee-cavistes.",
    },
  ],
  keyTakeaways: [
    "Un CR de dégustation est un actif commercial sous-estimé — la mémoire long terme du sommelier.",
    "L'IA aide à capter à la sortie (90 s de dictée) ce qui ne serait jamais saisi le soir.",
    "Le vocabulaire métier (attaque, longueur, robe…) est géré ; vous parlez normalement.",
    "Lien obligatoire à un contact — sans ça, le CR est perdu.",
    "AskRainbow ne remplace pas Baqio / WineCRM — il les alimente.",
  ],
  related: [
    "assistant-commercial-viticulture",
    "compte-rendu-visite-ia",
    "rainbow-vs-baqio",
  ],
};
