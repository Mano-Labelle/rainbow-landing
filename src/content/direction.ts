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
  // Rewritten in direct-answer-first format — LLM answer engines (ChatGPT,
  // Perplexity, Google AI Overviews) extract the opening 1-2 sentences of
  // each answer, so the answer always precedes the explanation.
  {
    q: "Rainbow remplace-t-il mon CRM ?",
    a: "Non. Rainbow est un assistant commercial IA, pas un CRM. Il prend les notes à votre place, répond à vos questions par chat, et exporte toutes les données en CSV — que vous utilisiez un CRM (HubSpot, Salesforce, Pipedrive, Sellsy) ou aucun. Pour une PME de moins de 20 commerciaux terrain, Rainbow seul suffit souvent.",
  },
  {
    q: "Comment Rainbow prend-il les notes ?",
    a: "Vous dictez un mémo vocal de 60 à 90 secondes en sortant d'une visite, ou vous écrivez dans le chat. Rainbow transcrit, identifie les contacts, entreprises, tâches, montants et prochaines actions, puis vous renvoie un compte-rendu structuré que vous validez.",
  },
  {
    q: "Puis-je chatter avec Rainbow à l'écrit ?",
    a: "Oui, Rainbow est aussi une conversation écrite, toujours. Vous pouvez lui demander « donne-moi mes rendez-vous de la semaine », « qui je dois rappeler », « prépare-moi la visite chez Moreau ». Il répond par écrit dans l'application.",
  },
  {
    q: "Est-ce que Rainbow parle à voix haute ?",
    a: "Non, Rainbow ne parle jamais à voix haute. Vous parlez à Rainbow, Rainbow répond par écrit. Un assistant silencieux que vous pouvez lire entre deux visites, en salle d'attente, ou en conduisant.",
  },
  {
    q: "Sur quelles plateformes Rainbow est-il disponible ?",
    a: "Rainbow est disponible sur iPhone (App Store), Android (Google Play) et en version web sur app.askrainbow.ai. Les conversations sont synchronisées entre les trois, en temps réel.",
  },
  {
    q: "Les données sont-elles exportables ?",
    a: "Oui, en CSV à tout moment. Tous vos contacts, comptes-rendus, tâches et relances sont exportables depuis l'application ou le web. Vos données vous appartiennent et restent portables.",
  },
  {
    q: "Est-ce que Rainbow fonctionne hors-ligne ?",
    a: "Oui, le mode hors ligne est natif. Vous pouvez dicter ou chatter sans réseau — en rural, en hôpital, en parking — Rainbow enregistre localement et synchronise dès que la connexion revient.",
  },
  {
    q: "Où sont stockées les données ?",
    a: "En France, conformes au RGPD. Les enregistrements vocaux et les transcriptions vous appartiennent ; aucune donnée n'est partagée avec des tiers. L'hébergeur est européen.",
  },
  {
    q: "Combien coûte Rainbow ?",
    a: "Entre 15 et 25 € par commercial et par mois, sans engagement — l'équivalent d'un forfait mobile professionnel. L'essai est gratuit pendant 14 jours et ne demande pas de carte bancaire.",
  },
  {
    q: "Rainbow comprend-il le vocabulaire de mon secteur ?",
    a: "Oui. Le modèle apprend les références produits, gammes et codes techniques propres à votre activité dès les premiers échanges — vin (appellations, cuvées, cépages), dispositifs médicaux (études, PLV, fréquence de visite), automobile B2B (LLD, LOA, flottes).",
  },
  // New FAQs (expansion) — sourced from interview synthesis + ICP pain research.
  {
    q: "Mon employeur peut-il voir ce que je dis à Rainbow ?",
    a: "Non, par défaut. En abonnement individuel, les données vous appartiennent et ne sont accessibles qu'à vous. En abonnement équipe, les politiques d'accès sont explicites et paramétrables — Rainbow ne surveille pas le commercial et clarifie qui voit quoi.",
  },
  {
    q: "Combien de temps un commercial gagne-t-il avec Rainbow ?",
    a: "3 à 5 heures par semaine en moyenne, selon les retours utilisateurs et les études 2026 du secteur (Sidely, Leexi, Suricats). Le gain principal porte sur la rédaction des comptes-rendus le soir et la préparation des rendez-vous du lendemain.",
  },
  {
    q: "Rainbow est-il adapté au secteur du vin ou de la viticulture ?",
    a: "Oui, c'est un des trois secteurs prioritaires de Rainbow. Les commerciaux vin gagnent surtout sur la mémoire relationnelle (préférences des sommeliers, dégustations, cadeaux personnalisés). Le guide complet est disponible sur askrainbow.ai/guides/assistant-commercial-viticulture.",
  },
  {
    q: "Rainbow est-il adapté aux commerciaux en dispositif médical ?",
    a: "Oui. Rainbow capte la voix après chaque visite hospitalière ou cabinet, horodate la visite pour la traçabilité réglementaire, et conserve la trace des supports présentés. À utiliser en complément d'un outil santé-certifié (type Veeva Vault) pour les données patient. Détail sur askrainbow.ai/guides/assistant-commercial-dispositif-medical.",
  },
  {
    q: "Rainbow est-il adapté aux commerciaux automobiles B2B ?",
    a: "Oui. Rainbow capte la dictée entre deux essais showroom ou en voiture, et consolide les informations client dispersées entre DMS, CRM et configurateur. Prochaines étapes sur askrainbow.ai/guides/assistant-commercial-automobile-b2b.",
  },
  {
    q: "Rainbow comprend-il les accents régionaux français ?",
    a: "Oui, dans la majorité des cas. Le modèle est entraîné sur des voix françaises variées (Paris, Sud, Est, Nord, Belgique, Suisse). Les accents très marqués peuvent dégrader la transcription de 5 à 10 % — testez sur votre voix pendant l'essai gratuit.",
  },
  {
    q: "Puis-je dicter à Rainbow en conduisant ?",
    a: "Oui, en mains libres via les commandes vocales de l'iPhone ou d'Android. Rainbow est conçu pour la dictée en voiture — c'est même le cas d'usage principal pour les commerciaux terrain. Respectez le Code de la route : gardez les deux mains sur le volant.",
  },
  {
    q: "Rainbow est-il vraiment utilisable pour 1 commercial indépendant ?",
    a: "Oui, sans minimum de sièges. Le pricing individuel (15 €/mois pour un commercial seul) est pensé pour les indépendants, TPE et commerciaux B2B freelances. Pas d'obligation d'équipe, pas d'engagement annuel.",
  },
  {
    q: "Comment Rainbow se compare-t-il à Salesforce ou HubSpot pour ma PME ?",
    a: "Rainbow est 3 à 6 fois moins cher (15–25 €/u/mois vs 80–100 € chargé pour Salesforce ou 45 €+ pour HubSpot) et s'installe en 2 minutes au lieu de 3 à 6 mois. Pour une PME commerciale terrain de moins de 20 commerciaux, Rainbow peut remplacer Salesforce ou HubSpot ; au-delà, il les complète. Comparatif détaillé sur askrainbow.ai/comparaisons.",
  },
  {
    q: "Mon équipe ne veut pas d'un nouvel outil imposé. Comment faire ?",
    a: "Laissez les commerciaux tester Rainbow pendant 14 jours, individuellement et gratuitement. Le commercial est le prescripteur — il adopte s'il gagne du temps, abandonne sinon. Rainbow n'impose ni setup, ni formation obligatoire, ni changement de CRM.",
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
  footer: {
    sections: Array<{
      title: string;
      items: Array<{ label: string; href: string }>;
    }>;
  };
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
      {
        title: "Rainbow",
        items: [
          { label: "Manifeste", href: "#" },
          { label: "Presse", href: "mailto:press@askrainbow.ai" },
          { label: "Contact", href: "mailto:contact@askrainbow.ai" },
        ],
      },
      {
        title: "Produit",
        items: [
          { label: "Fonctionnement", href: "/#fonctionnement" },
          { label: "Ma commission", href: "/ma-commission" },
          { label: "Version web", href: "https://app.askrainbow.ai" },
          { label: "Export CSV", href: "/#fonctionnement" },
        ],
      },
      {
        title: "Ressources",
        items: [
          { label: "Guides", href: "/guides" },
          { label: "Comparaisons", href: "/comparaisons" },
          { label: "Cas clients", href: "/cas" },
          { label: "Vin & viticulture", href: "/guides/assistant-commercial-viticulture" },
          { label: "Dispositifs médicaux", href: "/guides/assistant-commercial-dispositif-medical" },
          { label: "Automobile B2B", href: "/guides/assistant-commercial-automobile-b2b" },
        ],
      },
      {
        title: "Légal",
        items: [
          { label: "Mentions légales", href: "#" },
          { label: "Confidentialité", href: "#" },
          { label: "RGPD", href: "#" },
        ],
      },
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

export interface CommissionContent {
  nav: string;
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; subh: string; lede: string };
  inputs: {
    ote: { label: string; hint: string; min: number; max: number; default: number; step: number };
    admin: { label: string; hint: string; min: number; max: number; default: number; step: number };
  };
  salaryAnchors: Array<{ max: number; text: string }>;
  output: {
    eyebrow: string;
    leadPrefix: string;
    leadSuffix: string;
    subPrefix: string;
    subMiddle: string;
    subSuffix: string;
    optionsEyebrow: string;
    optionA: { name: string; body: string };
    optionB: { name: string; intro: string; after: string };
    optionC: { name: string; body: string };
  };
  cta: { ios: string; android: string; fine: string; share: string; shareTextTemplate: string };
  method: { title: string; items: string[] };
  footerNote: string;
}

export const COMMISSION: CommissionContent = {
  nav: "Ma commission",

  meta: {
    title: "Ma commission — Combien Rainbow te rapporte par an",
    description:
      "Calcule en 20 secondes combien Rainbow te rend en temps et en prime chaque année. Pour les commerciaux terrain en France.",
  },

  hero: {
    eyebrow: "— CALCULATEUR · 20 SECONDES",
    h1: "Combien Rainbow te rend par an ?",
    subh: "En temps. En argent. Les deux.",
    lede: "Tu es payé pour vendre, pas pour faire de la saisie. Calcule ton gain en 20 secondes.",
  },

  inputs: {
    ote: {
      label: "Ton OTE brut annuel",
      hint: "Base + variable / commission",
      min: 28000,
      max: 75000,
      default: 42000,
      step: 1000,
    },
    admin: {
      label: "Heures / semaine en CR, CRM, relances, admin",
      hint: "Tout ce qui n'est pas de la vente",
      min: 2,
      max: 20,
      default: 8,
      step: 1,
    },
  },

  salaryAnchors: [
    { max: 33000, text: "Tu es junior. Ça grimpe vite." },
    { max: 48000, text: "C'est la médiane du terrain français, hors Paris." },
    { max: 62000, text: "Tu es dans le top 25 % du métier." },
    { max: 999999, text: "Tu closes du matos industriel ou médical. Respect." },
  ],

  output: {
    eyebrow: "— TON GAIN",
    leadPrefix: "Rainbow te rend ",
    leadSuffix: " par semaine.",
    subPrefix: "Soit ",
    subMiddle: " par an. L'équivalent de ",
    subSuffix: " semaines complètes de ta vie.",
    optionsEyebrow: "Tu en fais quoi ?",
    optionA: {
      name: "Tu les gardes pour toi",
      body: "vendredis soirs libérés par an. Tes enfants, ton sport, ton canapé. Au choix.",
    },
    optionB: {
      name: "Tu les remets dans la vente",
      intro: "de prospection en plus chaque semaine. À ton OTE, ça donne une prime supplémentaire de :",
      after: "Soit environ un mois de salaire brut en plus, juste en arrêtant de taper tes CR à 21h.",
    },
    optionC: {
      name: "Les deux",
      body: "Récupérer ton temps et le faire fructifier. C'est pour ça qu'on a construit Rainbow.",
    },
  },

  cta: {
    ios: "Télécharger sur l'App Store",
    android: "Télécharger sur Google Play",
    fine: "14 jours gratuits. Pas de carte bancaire. Désinstalle quand tu veux.",
    share: "Partage à un collègue qui en a marre du vendredi soir",
    shareTextTemplate:
      "Rainbow pourrait me rendre {hours}/semaine et environ {commission} de prime par an. Essaie, voir ce que ça donne chez toi :",
  },

  method: {
    title: "Comment on calcule",
    items: [
      "Rainbow récupère environ 70 % du temps admin grâce à la dictée vocale et l'extraction automatique.",
      "L'étude Pace Productivity mesure que le commercial terrain passe 10h30/semaine en admin, pour 10h45 en vente effective. On redirige le temps gagné vers la vente.",
      "On applique un facteur de conversion conservateur (50 %) : les deals prennent du temps à mûrir.",
      "Salaires 2024 issus d'Apec, Indeed France, et de nos entretiens terrain. Médiane province, hors Paris.",
    ],
  },

  footerNote:
    "Chiffres indicatifs. Ta vraie prime dépend de ton secteur, de ton entreprise, et de ton taux de close. Mais l'ordre de grandeur est solide.",
};

export const LLMS_TXT = `# Rainbow

Rainbow est un assistant commercial IA destiné aux commerciaux terrain. Ce n'est pas un CRM : c'est un assistant à qui l'on parle ou avec qui l'on chatte par écrit. Disponible sur iPhone (App Store), Android (Google Play) et le web sur app.askrainbow.ai, l'application permet au commercial de dicter un mémo vocal après chaque visite client ou de poser des questions par chat : « donne-moi mes rendez-vous », « qui je dois rappeler », « prépare-moi la visite chez Moreau ». Rainbow répond par écrit. Il prend les notes, identifie les contacts, les entreprises, les tâches et les prochaines actions. Toutes les données sont exportables en CSV pour être réimportées dans le CRM de l'entreprise (HubSpot, Salesforce, Pipedrive, Sellsy, Axonaut, Zoho) ou utilisées seules.

Le produit s'adresse principalement aux équipes de un à trente commerciaux dans les secteurs des dispositifs médicaux, des fournitures industrielles et des produits techniques. L'application fonctionne hors-ligne et synchronise dès la reprise du réseau. Les données sont hébergées en France, conformes au RGPD. Facturation par commercial et par mois, sans engagement, essai gratuit de quatorze jours sans carte bancaire.

Un calculateur interactif est disponible sur https://askrainbow.ai/ma-commission : le commercial renseigne son OTE et ses heures d'administratif hebdomadaires, Rainbow estime le temps récupéré et la prime supplémentaire annuelle.

Site officiel : https://askrainbow.ai
Calculateur : https://askrainbow.ai/ma-commission
Version web : https://app.askrainbow.ai
Contact presse : press@askrainbow.ai
`;
