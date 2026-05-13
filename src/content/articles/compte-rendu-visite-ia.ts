import type { Article } from "./index";

export const article: Article = {
  slug: "compte-rendu-visite-ia",
  category: "guide",
  title: "Compte-rendu de visite commerciale généré par IA : définition, outils, modèles",
  metaTitle: "Compte-rendu de visite IA : définition + modèles (2026)",
  metaDesc:
    "Un compte-rendu de visite généré par IA structure automatiquement la visite à partir d'une dictée vocale. Définition, modèles, outils, prix France.",
  datePublished: "2026-04-22",
  dateModified: "2026-04-22",
  heroLead:
    "Un compte-rendu de visite généré par IA est un document structuré (contact, entreprise, décisions, prochaines étapes) produit automatiquement à partir d'une dictée vocale du commercial. Il remplace les heures de saisie manuelle du soir par 60 à 90 secondes de voix en sortant du rendez-vous.",
  tldr: [
    "Un compte-rendu IA = transcription vocale + extraction automatique des entités (contact, entreprise, tâche, date, montant).",
    "Un commercial terrain y gagne 3 à 5 h par semaine (sources Leexi, Sidely, Suricats 2026).",
    "En France, Rainbow, Leexi, Noota, Modjo, Trustlead produisent des comptes-rendus IA avec des focus différents.",
    "Le modèle standard inclut 7 sections : interlocuteur, contexte, discussion, décisions, actions, risques, prochaine étape.",
  ],
  sections: [
    {
      h2: "Quel est le modèle standard d'un compte-rendu de visite en 2026 ?",
      paragraphs: [
        {
          lead: "Un compte-rendu de visite commerciale efficace contient 7 sections en français.",
          bullets: [
            "Interlocuteur — nom, fonction, coordonnées (extrait automatiquement).",
            "Contexte — date, lieu, motif de la visite.",
            "Discussion — points abordés, position du client, arguments (résumé IA).",
            "Décisions — ce qui a été acté pendant la visite.",
            "Actions — qui fait quoi, avec quelle date.",
            "Risques / objections — blocages à lever avant la prochaine étape.",
            "Prochaine étape — date, objectif, participants attendus.",
          ],
        },
        {
          lead: "Ce modèle est celui que reproduisent par défaut les assistants IA commerciaux ; il peut être personnalisé selon le secteur.",
        },
      ],
    },
    {
      h2: "Comment l'IA génère-t-elle un compte-rendu à partir d'une dictée ?",
      paragraphs: [
        {
          lead: "Trois étapes : transcription audio, reconnaissance d'entités, structuration en sections.",
          bullets: [
            "Transcription — modèles Whisper, Deepgram ou modèle français dédié transforment la voix en texte.",
            "Reconnaissance d'entités (NER) — extraction automatique des noms, entreprises, dates, tâches, montants.",
            "Structuration — un prompt de template remplit chaque section du modèle (interlocuteur, décisions, actions…).",
          ],
        },
      ],
      callout: {
        kind: "tip",
        text: "La qualité finale dépend de la qualité de la dictée. Donner 2-3 indices structurants au commercial (dire « interlocuteur », « prochaine étape » en mot-clé) améliore la précision de 15 à 20 %.",
      },
    },
    {
      h2: "Outils qui génèrent des comptes-rendus IA en France (2026)",
      paragraphs: [
        {
          lead: "Quatre catégories d'outils produisent des comptes-rendus IA en 2026 ; le choix dépend de votre type de rendez-vous.",
          bullets: [
            "Voice CRM terrain (Rainbow, Trustlead, Jay) — commercial dicte à l'assistant après la visite physique.",
            "Intelligence conversationnelle (Modjo, Leexi, Noota) — outil enregistre l'appel ou la visio et produit un résumé.",
            "Couches IA sur CRM enterprise (Salesforce Agentforce, HubSpot Breeze, Pipedrive AI) — génération de résumé à partir d'un transcript.",
            "Outils généralistes (ChatGPT, Claude, Gemini) — peuvent produire un compte-rendu ad hoc à partir d'un transcript dicté, sans intégration CRM.",
          ],
        },
      ],
    },
    {
      h2: "Combien coûte un compte-rendu IA ?",
      paragraphs: [
        {
          lead: "Entre 0 € (outil généraliste) et 100 €/utilisateur/mois (couche enterprise) en 2026.",
          body: "Rainbow (bêta gratuite, post-bêta sur demande), Leexi (29 €), Modjo (~99 €), ChatGPT Pro individuel (≈20 €/mois) couvrent le spectre. Pour un commercial seul avec quelques visites/semaine, ChatGPT suffit ; pour une équipe avec CRM, un outil spécialisé est plus efficace.",
        },
      ],
    },
  ],
  faq: [
    {
      q: "Quel est le meilleur outil pour générer des comptes-rendus de visite en 2026 ?",
      a: "Cela dépend du type de rendez-vous. Pour les visites physiques : Rainbow ou Trustlead. Pour les appels et visios : Modjo, Leexi ou Noota. Pour un usage ponctuel sans CRM : ChatGPT ou Claude à la demande.",
    },
    {
      q: "Un compte-rendu IA est-il aussi fiable qu'un compte-rendu humain ?",
      a: "Dans 90 % des cas, oui. Les 10 % restants concernent les termes métier très spécifiques (médical, légal, industriel) qui peuvent nécessiter une relecture humaine. Toujours valider avant envoi externe.",
    },
    {
      q: "Puis-je personnaliser le template du compte-rendu ?",
      a: "Oui pour la plupart des outils professionnels (Rainbow, Modjo, Leexi). Les outils généralistes (ChatGPT) nécessitent un prompt personnalisé à chaque fois.",
    },
    {
      q: "Les comptes-rendus IA sont-ils RGPD ?",
      a: "Oui pour les éditeurs français et européens (Rainbow, Leexi, Noota, Modjo). Vérifier DPA, sous-traitants et hébergement avant contrat — protocole habituel.",
    },
    {
      q: "Faut-il avoir l'autorisation du client pour enregistrer une visite ?",
      a: "Pour une dictée post-visite en solo (comme Rainbow), non — vous enregistrez votre propre monologue. Pour une intelligence conversationnelle qui enregistre un dialogue (Modjo, Leexi), l'accord du client est obligatoire (RGPD + droits personnels).",
    },
  ],
  keyTakeaways: [
    "Un compte-rendu IA = transcription vocale + extraction d'entités + structuration en 7 sections.",
    "Le gain documenté est de 3 à 5 heures par semaine pour un commercial terrain.",
    "Les outils varient selon le type de rendez-vous (terrain, call, visio).",
    "Pour une dictée solo post-visite (Rainbow), pas d'accord client requis ; pour une conversation enregistrée (Modjo), accord obligatoire.",
  ],
  related: ["assistant-commercial-ia", "voice-crm", "rainbow-vs-modjo"],
};
