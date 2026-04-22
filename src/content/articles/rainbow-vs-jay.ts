import type { Article } from "./index";

/**
 * Rainbow vs Jay (heyjay.fr) — emerging French voice CRM competitor
 * with limited public content. Positioning this as an uncontested
 * "rainbow vs jay" SERP slot.
 */
export const article: Article = {
  slug: "rainbow-vs-jay",
  category: "comparaison",
  title: "Rainbow vs Jay : deux assistants vocaux français pour commerciaux",
  metaTitle: "Rainbow vs Jay (heyjay.fr) : comparatif 2026",
  metaDesc:
    "Rainbow et Jay sont deux assistants vocaux français pour commerciaux. Prix, intégrations, usages concrets — comparatif 2026.",
  datePublished: "2026-04-22",
  dateModified: "2026-04-22",
  heroLead:
    "Rainbow et Jay (heyjay.fr) appartiennent à la même vague française d'assistants vocaux pour commerciaux, lancés en 2024. Les deux captent la voix du commercial pour gagner du temps ; Rainbow se distingue par son hébergement français explicite, son prix public et son export CSV complet.",
  tldr: [
    "Jay et Rainbow captent tous deux la voix du commercial pour générer des notes et des relances.",
    "Les deux éditeurs sont français et ciblent le marché PME commercial.",
    "Rainbow publie un prix clair (15–25 €/utilisateur/mois) ; Jay n'affiche pas de grille publique en avril 2026.",
    "Rainbow met l'accent sur le mode hors ligne et l'export CSV complet ; Jay n'est pas documenté sur ces points.",
  ],
  sections: [
    {
      h2: "Rainbow vs Jay : quelle différence en 2026 ?",
      paragraphs: [
        {
          lead: "Rainbow et Jay occupent la même place dans la journée d'un commercial : la capture vocale post-visite. Leurs différences tiennent à la maturité produit et à la transparence tarifaire.",
          body: "Jay (heyjay.fr) est un acteur récent du marché français des assistants commerciaux vocaux. À ce jour (avril 2026), la documentation publique est limitée : pas de grille de prix, pas de documentation mode hors ligne, pas de liste d'intégrations. Rainbow publie ces éléments et donne accès à un essai gratuit de 14 jours sans carte bancaire.",
        },
      ],
    },
    {
      h2: "Tableau comparatif Rainbow vs Jay",
      paragraphs: [
        {
          lead: "Voici les éléments vérifiables au 22 avril 2026 pour les deux éditeurs français.",
        },
      ],
      table: {
        headers: ["", "Rainbow", "Jay (heyjay.fr)"],
        rows: [
          ["Origine", "France", "France"],
          ["Capture vocale", "Oui — iOS, Android, Web", "Oui"],
          ["Mode hors ligne documenté", "Oui (natif)", "Non documenté publiquement"],
          ["Prix public", "15–25 €/u/mois", "Non publié"],
          ["Essai gratuit", "14 jours, sans CB", "Sur demande"],
          ["Export CSV complet", "Oui", "Non documenté"],
          ["Intégrations CRM", "CSV + API sur demande", "Non documenté publiquement"],
          ["Hébergement", "UE (France)", "UE (France) probable"],
        ],
        caption:
          "Source : askrainbow.ai et heyjay.fr consultés le 22 avril 2026. À jour à la date de publication ; les éditeurs évoluent vite.",
      },
    },
    {
      h2: "Quand choisir Jay plutôt que Rainbow ?",
      paragraphs: [
        {
          lead: "Jay peut être le bon choix si vous êtes prêt à échanger avec leur équipe commerciale avant décision, ou si un retour utilisateur vous oriente vers eux.",
          bullets: [
            "Vous recherchez un éditeur français très récent et acceptez l'absence de grille publique.",
            "Vous avez un contact direct avec l'équipe Jay et un dialogue commercial en cours.",
            "Vous ne faites pas du mode hors ligne un critère bloquant.",
          ],
        },
      ],
    },
    {
      h2: "Quand choisir Rainbow plutôt que Jay ?",
      paragraphs: [
        {
          lead: "Rainbow est le bon choix si la transparence tarifaire, le hors ligne et l'export CSV sont des critères forts.",
          bullets: [
            "Vous voulez un prix public en euros affichés sans devis.",
            "Vous êtes souvent hors réseau (rural, hôpital, parking) et le mode hors ligne est non négociable.",
            "Vous voulez garantir la portabilité des données (export CSV complet).",
            "Vous êtes commercial individuel ou TPE avec un budget mensuel limité.",
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: "Qui édite Jay (heyjay.fr) ?",
      a: "Jay est édité en France, lancé autour de 2024. La documentation publique de l'éditeur est limitée en avril 2026. Contacter heyjay.fr directement pour obtenir grille tarifaire, intégrations et modalités.",
    },
    {
      q: "Jay et Rainbow sont-ils adaptés aux mêmes secteurs ?",
      a: "Rainbow cible explicitement les commerciaux terrain (vin, dispositif médical, automobile B2B). Jay n'indique pas publiquement ses secteurs prioritaires ; à questionner en premier contact.",
    },
    {
      q: "Rainbow et Jay s'intègrent-ils à Salesforce ou HubSpot ?",
      a: "Rainbow propose un export CSV complet et une intégration sur demande. Jay n'a pas publié sa liste d'intégrations ; à vérifier en démo.",
    },
    {
      q: "Quel est le prix de Jay ?",
      a: "Non publié en avril 2026. Demander un devis à heyjay.fr.",
    },
    {
      q: "Si Jay ne me convient pas, quelles autres alternatives françaises ?",
      a: "Rainbow et Trustlead sont les deux autres assistants vocaux français pour commerciaux terrain en 2026. Pour les inside sales et les calls, Modjo et Leexi sont les références.",
    },
  ],
  keyTakeaways: [
    "Jay et Rainbow sont deux éditeurs français lancés en 2024 sur le même créneau (capture vocale commerciale).",
    "Rainbow se démarque par la transparence (prix public, essai sans CB, export CSV) et le mode hors ligne documenté.",
    "Jay reste à questionner en direct pour obtenir prix et intégrations.",
  ],
  comparison: {
    vs: "Jay",
    vsHomepage: "https://heyjay.fr",
    verdict:
      "Rainbow si vous voulez un prix public, un mode hors ligne documenté et un export CSV ; Jay si vous cherchez un contact direct avec un éditeur émergent.",
  },
  related: ["assistant-commercial-ia", "rainbow-vs-trustlead", "rainbow-vs-modjo"],
};
