import type { Article } from "./index";

export const article: Article = {
  slug: "assistant-commercial-automobile-b2b",
  category: "guide",
  vertical: "automobile-b2b",
  title: "Assistant commercial IA automobile B2B : moins d'outils, plus de ventes",
  metaTitle: "Assistant commercial IA automobile B2B (2026)",
  metaDesc:
    "Commerciaux flotte, LLD, B2B auto : comment consolider DMS, CRM, quoting, insurance avec un assistant vocal. Usages, outils, prix France.",
  datePublished: "2026-04-22",
  dateModified: "2026-04-22",
  heroLead:
    "Un commercial automobile B2B jongle en moyenne avec 40 outils par jour : DMS, CRM constructeur, configurateur LLD, finance, assurance, logiciel OEM. Un assistant commercial IA comme Rainbow capte la voix du commercial au showroom ou en visite client, unifie les notes, et pousse vers le CRM central. Résultat : moins d'onglets, plus de temps pour vendre.",
  tldr: [
    "Les commerciaux auto B2B jonglent en moyenne avec 40 outils par jour (source : MotorK 2026).",
    "Les données client sont fragmentées sur 3+ bases (DMS constructeur, CRM, Excel flotte).",
    "Un assistant vocal capture la visite client dans une seule dictée, puis alimente le CRM et le DMS.",
    "Rainbow est actuellement en bêta gratuite (post-bêta sur demande), à comparer aux 40 €+/u/mois des CRM auto-spécialisés (Youday, SelliCar).",
  ],
  sections: [
    {
      h2: "Pourquoi le commercial automobile B2B perd du temps en 2026",
      paragraphs: [
        {
          lead: "Trois frictions spécifiques expliquent la perte de temps : outils multiples, Excel flotte, follow-ups dispersés.",
          bullets: [
            "40 outils par jour en moyenne — DMS, CRM constructeur, configurateur, finance, insurance (source : MotorK 2026).",
            "Suivi flotte sous Excel — fichiers fragiles, risque de perte, duplication entre reps.",
            "Follow-ups dispersés — relances LLD/LOA à 3, 6, 12, 36 mois, noyées entre les tickets.",
            "Showroom entre les rendez-vous — pas de bureau fixe, saisie tardive en soirée.",
          ],
        },
      ],
    },
    {
      h2: "Comment un assistant IA consolide la journée du commercial auto B2B",
      paragraphs: [
        {
          lead: "L'assistant IA intervient à trois moments : après la visite flotte, entre deux essais, en fin de journée.",
        },
      ],
      h3s: [
        {
          h3: "Après une visite client flotte",
          paragraphs: [
            {
              lead: "Le commercial dicte la visite en sortant : nom de l'entreprise, interlocuteur, véhicules ciblés, timing, budget.",
              body: "« Groupe Martin Transport, 12 véhicules utilitaires à renouveler avant septembre, interlocuteur Mr Dupont DAF, budget 45 000 €/unité, préférence électrique, visite retour dans 2 semaines avec devis LLD 36 mois. » L'assistant extrait : entreprise, contact, 12 véhicules, date, budget, type carburant, prochaine étape.",
            },
          ],
        },
        {
          h3: "Entre deux essais showroom",
          paragraphs: [
            {
              lead: "5 minutes entre deux test-drives suffisent pour dicter le follow-up du précédent.",
              body: "Le commercial n'a plus besoin de se souvenir jusqu'à 18h ; l'IA garde la trace immédiate. Le compte-rendu est prêt quand le client demande un rappel.",
            },
          ],
        },
        {
          h3: "En fin de journée",
          paragraphs: [
            {
              lead: "Le commercial vérifie ses dictées, valide les relances planifiées, passe la main.",
              body: "Les données sont poussées vers le CRM (Youday, SelliCar, Salesforce Automotive). Le DMS est alimenté côté opérationnel. Plus de fichier Excel flotte fragile à maintenir en parallèle.",
            },
          ],
        },
      ],
    },
    {
      h2: "Rainbow vs Youday, SelliCar, Apogea, MotorK",
      paragraphs: [
        {
          lead: "Les CRM auto-spécialisés couvrent le pipeline auto-spécifique ; Rainbow couvre la capture vocale qu'ils n'ont pas.",
        },
      ],
      table: {
        headers: ["", "Rainbow", "Youday / SelliCar / MotorK"],
        rows: [
          ["Type", "Assistant vocal commercial", "CRM auto-spécialisé"],
          ["Capture", "Voix + chat", "Saisie manuelle + intégration DMS"],
          ["Pipeline spécifique LLD/LOA", "Non", "Oui"],
          ["Intégration DMS constructeur", "Non native", "Native"],
          ["Mobile / terrain", "Natif, hors ligne", "Variable selon éditeur"],
          ["Prix France 2026", "Bêta gratuite (post-bêta sur demande)", "40–100 €/u/mois"],
          ["Cible", "Commerciaux individuels + PME", "Concessions + équipes sales auto"],
        ],
        caption:
          "Rainbow alimente un CRM auto-spécialisé par export CSV ; il ne le remplace pas sur les workflows métier.",
      },
    },
    {
      h2: "Quand Rainbow suffit-il seul ?",
      paragraphs: [
        {
          lead: "Pour un commercial indépendant ou une petite concession, Rainbow seul peut couvrir la capture + le suivi simple.",
          bullets: [
            "Vous êtes courtier LLD / LOA indépendant, pas besoin d'un DMS constructeur.",
            "Vous vendez des flottes à quelques dizaines de clients entreprises, pas des centaines.",
            "Vous travaillez en lien avec un constructeur mais l'intégration DMS n'est pas exigée.",
            "Votre budget est plafonné — 40 €+/u/mois pour un CRM auto-spécialisé est exclu.",
          ],
        },
      ],
    },
    {
      h2: "Combien coûte un assistant IA pour un commercial auto B2B en France ?",
      paragraphs: [
        {
          lead: "Rainbow est actuellement en bêta gratuite, sensiblement moins cher qu'un CRM auto-spécialisé une fois le tarif post-bêta connu.",
          body: "Pour une équipe de 5 commerciaux B2B / flotte, Youday ou SelliCar représentent 2 400–6 000 €/an. Si vous avez déjà un CRM auto-spécialisé, Rainbow se positionne en couche vocale par-dessus, avec un gain documenté de 3 à 5 h/semaine.",
        },
      ],
      callout: {
        kind: "tip",
        text: "L'équation ROI : pour un commercial B2B qui signe une flotte de 10 véhicules à 30 000 €/unité, une visite rattrapée par trimestre amortit un an d'abonnement Rainbow. Le vrai frein n'est pas le prix — c'est l'adoption.",
      },
    },
  ],
  faq: [
    {
      q: "Rainbow s'intègre-t-il aux DMS constructeur (VW, Renault, Peugeot, Stellantis, BMW) ?",
      a: "Pas en natif à ce jour (avril 2026). Rainbow exporte en CSV, importable dans le DMS par l'équipe Ops. Une intégration native peut être développée sur demande pour une équipe établie.",
    },
    {
      q: "Rainbow remplace-t-il Youday ou SelliCar ?",
      a: "Pour un commercial indépendant ou une petite concession, oui. Pour une concession multi-marques avec DMS constructeur et pipeline complexe, non — Rainbow complète Youday/SelliCar sans les remplacer.",
    },
    {
      q: "Rainbow aide-t-il à gérer les échéances LLD (6, 12, 36 mois) ?",
      a: "Oui. Rainbow planifie des relances à date — « me rappeler ce contact dans 18 mois ». Les échéances LLD/LOA sont un cas d'usage idéal : le commercial dicte en signant, et l'IA rappelle à l'échéance.",
    },
    {
      q: "Le commercial auto B2B conduit beaucoup — est-ce utilisable en voiture ?",
      a: "Oui, c'est un des cas d'usage centraux. Rainbow est conçu pour la dictée en voiture (mains libres). Le mode hors ligne garantit la capture même en zone blanche.",
    },
    {
      q: "Rainbow est-il adapté aux concessions ou aux courtiers LLD indépendants ?",
      a: "Les deux. Pour un concessionnaire multi-marques avec DMS constructeur, Rainbow se positionne en couche vocale. Pour un courtier LLD indépendant (sans DMS), Rainbow peut être le seul outil avec export CSV pour la comptabilité.",
    },
  ],
  keyTakeaways: [
    "Un commercial auto B2B jongle avec 40 outils par jour — Rainbow consolide la capture en un seul flux vocal.",
    "Rainbow est en bêta gratuite (post-bêta sur demande), sensiblement moins cher que Youday ou SelliCar.",
    "Rainbow alimente un DMS ou un CRM auto-spécialisé — il ne les remplace pas sur le métier.",
    "La dictée en voiture (mains libres, hors ligne) est un des cas d'usage centraux.",
  ],
  related: ["assistant-commercial-ia", "assistant-viticulture", "assistant-dispositif-medical"],
};
