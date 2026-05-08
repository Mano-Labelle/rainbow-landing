import type { Article } from "./index";

// Profile anonymisé construit à partir de 2 entretiens utilisateurs menés
// en 2026 avec des commerciaux du secteur dispositif médical (hôpitaux,
// cabinets, pharmacies). Citations issues directement des notes d'entretien.
export const article: Article = {
  slug: "commercial-dispositif-medical-hopital",
  category: "cas",
  vertical: "dispositif-medical",
  title:
    "Commerciale dispositif médical : 1 200 contacts hospitaliers, 8 CR le vendredi soir",
  metaTitle: "Cas client : commerciale dispositif médical — Rainbow",
  metaDesc:
    "Profil anonymisé : Laura, commerciale dispositif médical, 1 200 contacts hôpital/cabinet. 8 CR le vendredi soir, perte de transmission quand un commercial part. Comment Rainbow s'insère sans remplacer le CRM régulé.",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  heroLead:
    "Laura est commerciale terrain pour un fabricant de dispositifs médicaux. Elle visite hôpitaux, cabinets et cliniques sur la moitié nord de la France. 1 200 contacts en portefeuille, 8 comptes-rendus à rattraper le vendredi soir, et la peur permanente d'une perte de transmission quand un commercial s'en va. Voici comment AskRainbow s'insère dans son terrain réglementé.",
  tldr: [
    "Profil : 6 ans en dispositif médical, ~1 200 contacts, visites hospitalières et cabinets, traçabilité réglementaire forte.",
    "Pain principal : 8 CR par vendredi soir, perte de mémoire quand un commercial part (« 0 transmission » dit-elle d'un cas vécu chez un concurrent).",
    "Stack actuel : Veeva Vault ou équivalent (régulé pharma/médical), Outlook, smartphone pro.",
    "Avec Rainbow : capture vocale en sortie de visite, traçabilité des supports présentés, alimentation du CRM régulé par export CSV.",
  ],
  sections: [
    {
      h2: "Profil : 1 200 contacts, traçabilité réglementaire, fenêtre serrée",
      paragraphs: [
        {
          lead:
            "Laura travaille pour un fabricant de dispositifs médicaux (DM) classe IIa, équipement de bloc opératoire.",
          body:
            "Sa journée type : 4 à 8 visites — chirurgiens, cadres infirmiers, pharmaciens d'hôpital, acheteurs. La fenêtre est serrée : 15 à 30 minutes par RDV, souvent debout, parfois interrompue. À chaque visite, elle doit tracer ce qu'elle a présenté (un dispositif médical = obligation de traçabilité réglementaire).",
        },
        {
          lead:
            "Son outil principal : un CRM pharma/médical de type Veeva Vault, lourd, désigné pour la conformité, pas pour la rapidité du commercial.",
          body:
            "Laura le remplit en différé, tard. La hiérarchie le sait. Le CRM est rempli à 60 % parce que le métier ne laisse pas de respiration pour le formulaire.",
        },
      ],
      callout: {
        kind: "warn",
        text: "En dispositif médical, le CRM régulé (Veeva, IQVIA, MedTrack) reste obligatoire pour la traçabilité réglementaire. Rainbow ne le remplace pas. Il l'alimente.",
      },
    },
    {
      h2: "Le vrai problème : la perte de mémoire quand un commercial part",
      paragraphs: [
        {
          lead:
            "Le pain le plus douloureux n'est pas la saisie — c'est ce qui se passe quand un commercial s'en va.",
          body:
            "Laura raconte un cas vécu chez un concurrent : un commercial sénior part en retraite, son successeur reprend ses 800 contacts hospitaliers… avec rien. Pas une note exploitable, pas un historique de relations. « Zéro transmission. » Le successeur a mis 18 mois à reconstituer ce que l'ancien savait.",
        },
      ],
      quote: {
        text: "Quand mon collègue est parti, on lui a juste exporté son CRM. C'est-à-dire : ses commandes. Pas ses relations. C'est ça que les hôpitaux paient — la relation, pas la commande.",
        attribution:
          "Profil anonymisé, secteur dispositif médical, entretien 2026",
      },
    },
    {
      h2: "Sa journée avec Rainbow : capture, contexte, traçabilité",
      paragraphs: [
        {
          lead:
            "Rainbow s'insère dans 4 moments précis sans toucher au CRM régulé.",
        },
      ],
      h3s: [
        {
          h3: "1. Brief avant la visite, dans le parking",
          paragraphs: [
            {
              lead:
                "« Prépare-moi la visite chez Dr. Bernard, CHU de Lyon, bloc orthopédie. »",
              body:
                "Rainbow ressort en 3 lignes : dernière visite il y a 4 mois, présentation faite sur la gamme XR-200, point en suspens (devis envoyé, sans retour), détail relationnel (le Dr. Bernard rentrait de congrès à Vienne, à recroiser). Laura entre en RDV avec le bon contexte.",
            },
          ],
        },
        {
          h3: "2. Pendant la visite : aucune capture",
          paragraphs: [
            {
              lead:
                "Rainbow est éteint pendant la visite. Pas d'enregistrement, pas de transcription en bloc, pas de doute déontologique.",
              body:
                "Le commercial garde le contact visuel, écoute, présente. La capture vient après.",
            },
          ],
        },
        {
          h3: "3. Sortie de visite : 90 secondes de dictée",
          paragraphs: [
            {
              lead:
                "« Dr. Bernard, gamme XR-200 présentée, devis 14 200 € à confirmer. Bloc orthopédie achète sur 2027 budget, à recontacter mi-octobre. Référent achat : pharmacien d'hôpital Mme Costa, à inclure au prochain envoi. Détail : le Dr. recommande son chef de bloc à voir. »",
              body:
                "Rainbow extrait : contact (Dr. Bernard, Mme Costa, chef de bloc à identifier), entreprise (CHU Lyon, bloc ortho), tâches (recontact octobre, envoi à Mme Costa), montant (14 200 € en attente), traçabilité (gamme XR-200 présentée le X/X).",
            },
          ],
        },
        {
          h3: "4. Vendredi soir : alimentation du CRM régulé en CSV",
          paragraphs: [
            {
              lead:
                "Laura exporte les CR de la semaine en CSV, les importe dans Veeva Vault.",
              body:
                "Le CRM régulé reste à jour, sans qu'elle ait passé sa soirée à recopier 8 CR depuis ses notes manuscrites. Le vendredi soir redevient un vendredi soir.",
            },
          ],
        },
      ],
    },
    {
      h2: "Le scénario qui change tout : qu'est-ce qu'on transmet quand on part ?",
      paragraphs: [
        {
          lead:
            "Si Laura quitte demain, son successeur reçoit son export CSV Rainbow.",
          body:
            "Pas seulement ses commandes (le CRM régulé les a déjà), mais ses 1 200 historiques de relation : qui présente quoi à qui, quand recontacter, quelle est la fenêtre budgétaire de chaque hôpital, quels sont les détails personnels (« le Dr. Bernard parle allemand », « Mme Costa préfère les RDV de fin de matinée »). Le successeur arrive avec 18 mois d'avance.",
        },
        {
          lead:
            "Ça, c'est la promesse qui résonne le plus chez Laura.",
          body:
            "« Si on me retire de cette zone demain, je veux que celui qui prend la suite ne paie pas mon départ. »",
        },
      ],
    },
    {
      h2: "Bilan : conformité préservée, mémoire restaurée",
      paragraphs: [
        {
          lead:
            "Rainbow ne remplace pas Veeva Vault. Il le rend praticable.",
          bullets: [
            "Traçabilité réglementaire (DM présenté, date, interlocuteur) : assurée par export CSV régulier vers le CRM régulé.",
            "Mémoire relationnelle : reste dans Rainbow, exportable à tout moment.",
            "Continuité d'activité en cas de turnover : 1 export CSV transmissible.",
            "Temps gagné : 4 à 6 h/semaine sur la rédaction de CR le soir et le week-end.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Rainbow est-il conforme aux exigences réglementaires du dispositif médical ?",
      a: "Rainbow ne se substitue pas au CRM régulé (Veeva Vault, IQVIA, MedTrack) qui assure la traçabilité réglementaire. Rainbow est un outil de capture commerciale ; les données sensibles (DM présenté, date, interlocuteur) sont exportées par CSV vers le CRM régulé selon votre périodicité. L'hébergement de Rainbow est en France et conforme RGPD.",
    },
    {
      q: "Qui possède les notes d'un commercial dispositif médical ?",
      a: "Sur l'abonnement individuel, les notes appartiennent au commercial. Sur l'abonnement équipe, les politiques d'accès sont explicites et paramétrables par votre laboratoire. Voir notre guide privacy : /privacy.",
    },
    {
      q: "Que se passe-t-il quand un commercial part ?",
      a: "L'export CSV de Rainbow contient l'historique relationnel (notes, contacts, relances, contexte) — au-delà de ce que le CRM régulé garde (commandes, traçabilité). Cet export est transmissible au successeur en quelques minutes, ce qui réduit drastiquement le temps de prise en main de la zone.",
    },
    {
      q: "Combien coûte Rainbow pour un labo de DM ?",
      a: "Bêta gratuite sans carte. Au lancement payant, entre 15 et 25 €/utilisateur/mois sans engagement, sans minimum d'utilisateurs. Pour une équipe de 10 commerciaux DM, c'est 1 800 à 3 000 €/an — moins qu'une seule heure de consulting Veeva.",
    },
    {
      q: "Rainbow comprend-il le vocabulaire métier (gammes, classes de DM, références) ?",
      a: "Oui. Les références produits, les classes de DM (I, IIa, IIb, III), les abréviations métier (PLV, FDS, CHU, CME) sont reconnues dès les premiers échanges. Pour aller plus loin, voir le guide complet : /guides/assistant-commercial-dispositif-medical.",
    },
  ],
  keyTakeaways: [
    "Une commerciale DM gère 1 000 à 1 500 contacts hospitaliers et passe 4-6 h/semaine en CR.",
    "Le pain le plus douloureux n'est pas la saisie : c'est la perte de transmission quand un commercial part.",
    "Rainbow ne remplace pas le CRM régulé (Veeva Vault) — il l'alimente par export CSV régulier.",
    "Effet caché : continuité d'activité préservée. L'historique relationnel devient transmissible.",
    "Bêta gratuite pour tester sans engagement.",
  ],
  related: [
    "assistant-commercial-dispositif-medical",
    "compte-rendu-visite-ia",
    "rainbow-vs-salesforce",
  ],
};
