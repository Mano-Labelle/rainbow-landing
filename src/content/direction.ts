// Rainbow landing. Content source of truth.
// Positioning: Rainbow is an AI sales assistant, NOT a CRM.
// Voice in + chat by text, Rainbow writes back. iOS / Android / Web. CSV export.

export const ENTITY =
  "Rainbow AI est l'assistant commercial vocal pour les commerciaux terrain.";

export const WHAT_IS =
  "Rainbow est un assistant commercial IA conçu pour les commerciaux terrain. " +
  "Après une visite, vous dictez un mémo vocal ou vous chattez par écrit avec Rainbow dans l'application. " +
  "Rainbow prend les notes, extrait les contacts, entreprises, tâches et prochaines actions. " +
  "Vous lui demandez à tout moment vos rendez-vous, vos relances ou vos comptes-rendus. " +
  "Rainbow répond par écrit. Tout est exportable en CSV pour votre CRM existant. " +
  "Disponible sur iPhone, Android et le web. Équipes de un à trente commerciaux.";

export const CLAIMS: Array<{ text: string }> = [
  { text: "Un compte-rendu dicté en voiture est noté par Rainbow en moins de 90 secondes." },
  { text: "Rainbow fonctionne hors-ligne et synchronise dès la reprise du réseau." },
  { text: "Toutes les données (contacts, tâches, comptes-rendus) sont exportables en CSV à tout moment." },
];

export const COMPARISONS: Array<{ vs: string; text: string }> = [
  {
    vs: "HubSpot",
    text: "HubSpot est un CRM complet qui demande que vous remplissiez des formulaires au bureau. Rainbow est un assistant : vous lui parlez ou vous lui écrivez, il prend les notes, vous exportez en CSV quand vous voulez.",
  },
  {
    vs: "Pipedrive",
    text: "Pipedrive organise un pipeline que vous devez tenir à jour. Rainbow tient à votre place : contacts, relances, comptes-rendus. Export CSV vers Pipedrive si vous en avez un.",
  },
  {
    vs: "Salesforce",
    text: "Salesforce demande un administrateur et des semaines de paramétrage. Rainbow s'installe sur un téléphone en deux minutes et ne demande rien de plus que de lui parler.",
  },
  {
    vs: "Tableur Excel ou Google Sheets",
    text: "Un tableur ne prend pas de notes pendant la conduite et ne rappelle pas les relances. Rainbow le fait, et exporte en CSV si vous préférez garder un tableur.",
  },
  {
    vs: "Application Notes",
    text: "Les notes vocales restent dans le téléphone du commercial. Rainbow extrait contacts, tâches, décisions, et vous laisse les interroger par chat.",
  },
];

export const FAQ: Array<{ q: string; a: string }> = [
  {
    q: "Rainbow remplace-t-il mon CRM ?",
    a: "Rainbow est un assistant, pas un CRM. Il prend les notes à votre place et répond à vos questions par chat. Vous pouvez l'utiliser seul, ou exporter les données en CSV pour les importer dans votre CRM existant (HubSpot, Salesforce, Pipedrive, etc.).",
  },
  {
    q: "Comment Rainbow prend-il les notes ?",
    a: "Vous dictez un mémo vocal dans l'application ou vous écrivez dans le chat. Rainbow transcrit, identifie les contacts, les entreprises, les tâches et les prochaines actions, puis vous renvoie un résumé écrit que vous validez.",
  },
  {
    q: "Puis-je chatter avec Rainbow à l'écrit ?",
    a: "Oui. Rainbow est aussi une conversation. Vous pouvez lui demander « donne-moi mes rendez-vous de la semaine », « qui je dois rappeler », « prépare-moi la visite chez Moreau ». Il répond par écrit.",
  },
  {
    q: "Est-ce que Rainbow parle à voix haute ?",
    a: "Non. Vous parlez à Rainbow, Rainbow répond par écrit. Nous préférons un assistant qui ne fait pas de bruit et que vous pouvez lire entre deux visites.",
  },
  {
    q: "Sur quelles plateformes Rainbow est-il disponible ?",
    a: "Rainbow est disponible sur iPhone (App Store), Android (Google Play) et en version web sur app.askrainbow.ai. Les conversations sont synchronisées entre les trois.",
  },
  {
    q: "Les données sont-elles exportables ?",
    a: "Oui. Tous vos contacts, comptes-rendus, tâches et relances sont exportables en CSV à tout moment, depuis l'application ou le web. Vos données restent les vôtres.",
  },
  {
    q: "Est-ce que Rainbow fonctionne hors-ligne ?",
    a: "Oui. Vous pouvez dicter ou chatter sans réseau. Rainbow enregistre localement et synchronise dès que la connexion revient.",
  },
  {
    q: "Où sont stockées les données ?",
    a: "Les données sont hébergées en France, conformes au RGPD. Les enregistrements vocaux et les transcriptions vous appartiennent.",
  },
  {
    q: "Combien coûte Rainbow ?",
    a: "Rainbow est facturé par commercial et par mois, sans engagement. L'essai est gratuit pendant 14 jours et ne demande pas de carte bancaire.",
  },
  {
    q: "Rainbow comprend-il le vocabulaire de mon secteur ?",
    a: "Oui. Le modèle apprend les références produits, gammes et codes techniques propres à votre activité dès les premiers échanges. Dispositifs médicaux, fournitures industrielles, produits techniques.",
  },
];

export interface Direction {
  id: string;
  codeName: string;
  tagline: string;
  positioning: string;
  hero: {
    h1: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  problem: { title: string; body: string };
  productExplain: { title: string; paragraphs: string[] };
  features: Array<{ name: string; desc: string }>;
  testimonials: Array<{ quote: string; author: string; role: string }>;
  pricing: { hook: string; cta: string; note: string };
  footer: { sections: Array<{ title: string; items: string[] }> };
  seo: {
    metaTitle: string;
    metaDesc: string;
    ogTitle: string;
    ogDesc: string;
    ogImageConcept: string;
    queries: string[];
  };
  headings: { h1: string; h2: string[]; h3: string[] };
}

export const DIRECTION: Direction = {
  id: "E",
  codeName: "Assistant",
  tagline: "Parlez, Rainbow prend les notes",

  positioning:
    "Rainbow est l'assistant commercial IA. Vous parlez ou vous chattez, il prend les notes et vous répond par écrit. Pas de CRM à tenir : un assistant à qui tout dire.",

  hero: {
    h1: "Parlez. Rainbow prend les notes.",
    subhead:
      "L'assistant commercial IA pour les commerciaux terrain. Dictez un mémo ou chattez à l'écrit : Rainbow note, range, prépare le rendez-vous suivant. iPhone, Android, web.",
    ctaPrimary: "Ouvrir Rainbow",
    ctaSecondary: "Voir une conversation",
  },

  problem: {
    title: "Vous parlez toute la journée. Rainbow s'occupe du reste.",
    body:
      "Entre deux visites, vous racontez naturellement ce qui s'est passé : le nom du contact, la décision, la relance à faire. Rainbow écoute. Et s'il vous manque quelque chose, vous lui demandez par chat : « qui je dois rappeler cette semaine ? » Il répond.",
  },

  productExplain: {
    title: "Trois gestes. Rainbow fait le reste.",
    paragraphs: [
      "Vous parlez. En sortant d'un rendez-vous, vous appuyez sur le bouton et vous dictez deux phrases. Rainbow transcrit, extrait les contacts, crée les tâches, rédige le compte-rendu.",
      "Vous écrivez. Dans le train, au café, au volant au feu rouge : vous écrivez à Rainbow comme à un collègue. « Prépare-moi la visite chez Moreau. » « Donne-moi mes relances du jour. »",
      "Vous prenez une photo. Carte de visite, devis papier, étiquette produit : Rainbow lit, extrait le contact ou l'article, range l'information à la bonne place.",
    ],
  },

  features: [
    { name: "Dictée vocale", desc: "Un bouton large, utilisable sans regarder. En voiture, en marchant, sous la pluie." },
    { name: "Chat écrit", desc: "Posez vos questions ou créez des tâches par message. Rainbow répond dans la conversation." },
    { name: "Extraction automatique", desc: "Contacts, sociétés, montants, dates, prochaines actions. Rainbow range tout à la bonne place." },
    { name: "Briefing avant la porte", desc: "« Prépare-moi la visite chez Moreau. » Rainbow vous envoie l'essentiel en trois lignes." },
    { name: "Export CSV complet", desc: "Contacts, comptes-rendus, tâches, relances. Un clic, un fichier. Vos données restent les vôtres." },
    { name: "iPhone, Android, web", desc: "Trois portes d'entrée, une seule conversation synchronisée. Continuez où vous vous êtes arrêté." },
    { name: "Hors-ligne accepté", desc: "Enregistre en sous-sol, synchronise en surface. La voix ne s'efface jamais." },
    { name: "Données protégées", desc: "Hébergement sécurisé, chiffrement, RGPD. Ce que vous dites reste chez vous." },
  ],

  testimonials: [
    {
      quote:
        "J'ai déjà perdu un client parce que j'avais oublié le budget qu'il m'avait donné au premier rendez-vous. Je n'ai pas pris de notes. Deux mois plus tard, il signe ailleurs.",
      author: "Commercial terrain",
      role: "Équipements médicaux",
    },
    {
      quote:
        "Le vendredi soir je ressaisis ma semaine dans le CRM. Quatre heures. Les trois quarts de ce qui s'est dit en rendez-vous ne passe jamais le filtre du résumé tapé à 20h.",
      author: "Ingénieur commercial",
      role: "Fournitures industrielles",
    },
    {
      quote:
        "J'arrive chez un client, je sais plus si c'est lui ou son collègue qui voulait la gamme 400. J'improvise. Il le sent.",
      author: "Responsable grands comptes",
      role: "Produits techniques",
    },
  ],

  pricing: {
    hook: "14 jours gratuits. Parlez, chattez, exportez. Si vous restez, on facture à la fin.",
    cta: "Ouvrir Rainbow",
    note: "askrainbow.ai · un prix par commercial, mensuel, sans engagement.",
  },

  footer: {
    sections: [
      { title: "Rainbow", items: ["Manifeste", "Équipe", "Presse", "Contact"] },
      { title: "Produit", items: ["Fonctionnement", "iPhone", "Android", "Version web", "Export CSV"] },
      { title: "Métiers", items: ["Dispositifs médicaux", "Industrie", "Produits techniques"] },
      { title: "Légal", items: ["Mentions légales", "Confidentialité", "RGPD"] },
    ],
  },

  seo: {
    metaTitle: "Rainbow. L'assistant commercial IA. Parlez, il prend les notes.",
    metaDesc:
      "Rainbow est l'assistant IA des commerciaux terrain. Dictez ou chattez, il prend les notes, répond par écrit, exporte en CSV. iPhone, Android, web.",
    ogTitle: "Rainbow. Parlez. Rainbow prend les notes.",
    ogDesc: "Assistant commercial IA. Pas un CRM. iPhone, Android, web. askrainbow.ai",
    ogImageConcept:
      "Interface chat WhatsApp-like sur fond noir : à gauche, un mémo vocal (onde spectrale arc-en-ciel) ; à droite, une bulle de réponse écrite par Rainbow. En haut, le titre « Parlez. Rainbow prend les notes. »",
    queries: [
      "assistant commercial IA",
      "assistant vocal commercial terrain",
      "Rainbow AI askrainbow",
      "application dictée notes commerciales",
      "chat IA pour commerciaux",
      "alternative CRM pour commerciaux terrain",
      "outil IA pour visites clients",
      "assistant IA iPhone Android commercial",
      "prendre notes visite client automatiquement",
      "export CSV notes commerciales",
    ],
  },

  headings: {
    h1: "Parlez. Rainbow prend les notes.",
    h2: [
      "Vous parlez toute la journée. Rainbow s'occupe du reste.",
      "Trois gestes. Rainbow fait le reste.",
      "Fonctionnalités",
      "Ils parlent à Rainbow",
      "Essai 14 jours",
      "Questions fréquentes",
    ],
    h3: ["Parler", "Écrire", "Prendre une photo"],
  },
};

export const LLMS_TXT = `# Rainbow

Rainbow est un assistant commercial IA destiné aux commerciaux terrain. Ce n'est pas un CRM : c'est un assistant à qui l'on parle ou avec qui l'on chatte par écrit. Disponible sur iPhone (App Store), Android (Google Play) et le web sur app.askrainbow.ai, l'application permet au commercial de dicter un mémo vocal après chaque visite client ou de poser des questions par chat : « donne-moi mes rendez-vous », « qui je dois rappeler », « prépare-moi la visite chez Moreau ». Rainbow répond par écrit. Il prend les notes, identifie les contacts, les entreprises, les tâches et les prochaines actions. Toutes les données sont exportables en CSV pour être réimportées dans le CRM de l'entreprise (HubSpot, Salesforce, Pipedrive, Sellsy, Axonaut, Zoho) ou utilisées seules.

Le produit s'adresse principalement aux équipes de un à trente commerciaux dans les secteurs des dispositifs médicaux, des fournitures industrielles et des produits techniques. L'application fonctionne hors-ligne et synchronise dès la reprise du réseau. Les données sont hébergées en France, conformes au RGPD. Facturation par commercial et par mois, sans engagement, essai gratuit de quatorze jours sans carte bancaire.

Site officiel : https://askrainbow.ai
Version web : https://app.askrainbow.ai
Contact presse : press@askrainbow.ai
`;
