// Opt-in welcome / nurture sequence for the lead magnets.
// Sent + scheduled by /api/lead at opt-in time (Resend `scheduled_at`).
// Audience = ALL itinerant field workers (agronomes, chantier managers, chargés
// d'affaires, technico-commerciaux, field reps), NOT just "sales". Frame = charge
// mentale of the day + the after-visit admin, and concrete Rainbow usage. "tu".
// Every email: image hero + re-greeting + a short story, generous spacing, no
// em-dashes. One adaptive download link (/telecharger routes by device), benefit CTA.

export type Magnet = "salaires" | "voiture";

const TELECHARGER = "https://askrainbow.ai/telecharger";
const LOGO = "https://askrainbow.ai/logo.png";
const IMG = "https://askrainbow.ai/email";
const FONT = "font-family:Inter,-apple-system,'Segoe UI',Arial,sans-serif";

function shell(inner: string, unsubUrl: string): string {
  return `<div style="background:#f4f1fb;padding:24px 12px;margin:0;${FONT}">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden">
    <div style="background:#0A0612;padding:16px 28px"><img src="${LOGO}" alt="" height="22" style="height:22px;vertical-align:middle;display:inline-block"> <span style="${FONT};color:#ffffff;font-weight:600;font-size:18px;vertical-align:middle;margin-left:6px">Rainbow</span></div>
    <div style="height:5px;background:linear-gradient(90deg,#B57DFF,#FF5EC4,#FFA060)"></div>
    <div style="padding:28px 28px;${FONT};color:#1a1626;font-size:16px;line-height:1.65">${inner}</div>
    <div style="padding:18px 28px;background:#faf8ff;text-align:center;${FONT}">
      <a href="${unsubUrl}" style="${FONT};color:#8a82a0;font-size:12px">Se désabonner</a>
    </div>
  </div>
</div>`;
}

const p = (t: string) => `<p style="margin:0 0 16px;${FONT};font-size:16px;line-height:1.65;color:#1a1626">${t}</p>`;

// Full-width rounded image hero at the top of an email.
function imgHero(file: string): string {
  return `<img src="${IMG}/${file}" width="100%" alt="" style="width:100%;max-width:504px;border-radius:14px;display:block;margin:0 0 22px">`;
}

// Spaced bullet list (readability).
function bullets(items: string[]): string {
  return `<ul style="margin:8px 0 18px;padding-left:20px">${items.map((i) => `<li style="${FONT};font-size:16px;line-height:1.6;color:#1a1626;margin:8px 0">${i}</li>`).join("")}</ul>`;
}

// One usage "card": emoji chip + title + body + who-uses-it line.
function card(emoji: string, title: string, body: string, who: string): string {
  return `<table role="presentation" width="100%" style="border-collapse:collapse;margin:16px 0"><tr>
    <td width="56" valign="top" style="${FONT}">
      <div style="width:46px;height:46px;border-radius:13px;background:#f4f1fb;text-align:center;line-height:46px;font-size:23px">${emoji}</div>
    </td>
    <td valign="top" style="${FONT};padding-left:12px">
      <div style="${FONT};font-weight:700;font-size:15px;color:#1a1626;margin-bottom:4px">${title}</div>
      <div style="${FONT};font-size:14px;line-height:1.55;color:#444">${body}</div>
      ${who ? `<div style="${FONT};font-size:12px;color:#8a82a0;margin-top:6px">${who}</div>` : ""}
    </td></tr></table>`;
}

// Download block: one adaptive link (routes to App Store or Play by device), benefit-first.
function appButton(): string {
  return `<div style="margin:26px 0;text-align:center">
    <a href="${TELECHARGER}" style="${FONT};background:#FF5EC4;color:#0A0612;text-decoration:none;font-weight:700;padding:14px 30px;border-radius:12px;display:inline-block;font-size:16px">Je gagne du temps</a>
    <div style="${FONT};font-size:12px;color:#8a82a0;margin-top:10px">Sur iPhone et Android</div>
  </div>`;
}

const GRILLE: [string, string][] = [
  ["Dispositifs médicaux", "60-75k"], ["Industrie / technico", "53-65k"], ["BTP / matériaux", "48-53k"],
  ["Télécoms / IT terrain", "45-55k"], ["Distribution / GMS", "45-55k"], ["Énergie / photovoltaïque", "42-50k"],
  ["Visiteur médical", "42-46k"], ["Automobile B2B", "40-48k"], ["Agro / agronome", "38-44k"], ["Vin / spiritueux / CHR", "36-42k"],
];
function salaireGrille(): string {
  const td = `${FONT};padding:7px 10px;font-size:14px`;
  const rows = GRILLE.map(([s, r], i) =>
    `<tr style="background:${i % 2 ? "#faf8ff" : "#fff"}"><td style="${td};color:#1a1626">${s}</td><td style="${td};text-align:right;font-weight:600;color:#c0249a">${r}</td></tr>`
  ).join("");
  return `<table style="width:100%;border-collapse:collapse;border:1px solid #eee;border-radius:10px;overflow:hidden;margin:16px 0">
  <tr style="background:#0A0612"><td style="${td};color:#fff">Secteur (commercial terrain, confirmé)</td><td style="${td};color:#fff;text-align:right">Package 2026</td></tr>
  ${rows}</table>
  ${p(`<span style="font-size:13px;color:#8a82a0">Île-de-France +12%, grande métropole +5%. Moyenne tous secteurs : 47k, dont 26% de variable. Sources : Uptoo (~110 000), APEC (26 000), Expectra, Michael Page, Hellowork.</span>`)}`;
}
function voitureChecklist(): string {
  const items = [
    "L'usage perso écrit au contrat (sinon c'est une voiture de service, retirable)",
    "Le forfait km qui colle à ta tournée (le dépassement se facture ~0,15 €/km)",
    "La catégorie ou le modèle, négociables à ton niveau",
    "La carte carburant ou recharge prise en charge",
    "Une électrique (l'employeur évite le malus, toi tu as l'abattement de 70%)",
    "La grille de vétusté donnée AVANT la restitution",
  ];
  return `<ul style="padding-left:18px;margin:16px 0">${items.map((i) => `<li style="${FONT};margin:7px 0;font-size:14px;color:#1a1626">${i}</li>`).join("")}</ul>
  ${p(`<span style="font-size:13px;color:#8a82a0">Budget pro moyen ~1 050 €/mois. Sources : URSSAF, Arval, L'Argus, service-public.</span>`)}`;
}

export interface SequenceEmail { subject: string; html: string; delayDays: number }

export function buildSequence(magnet: Magnet, email: string): SequenceEmail[] {
  const unsub = `https://askrainbow.ai/desabonnement?e=${encodeURIComponent(email)}`;
  const wrap = (inner: string) => shell(inner, unsub);
  const tested = magnet === "salaires" ? "le simulateur de salaire" : "le guide voiture de fonction";

  const e1 =
    magnet === "salaires"
      ? {
          subject: "Ta grille des salaires 2026",
          html: wrap(`${p("Salut 👋")}${p("Merci d'avoir testé le simulateur de salaire.")}${p("Comme promis, voilà la grille complète des salaires des commerciaux terrain en 2026 :")}${salaireGrille()}${p("Et bienvenue dans la newsletter de Rainbow : de temps en temps, des astuces et des situations concrètes pour mieux gérer ton métier d'itinérant.")}${p("Bonne route,<br>Mano")}`),
        }
      : {
          subject: "Ta checklist voiture de fonction",
          html: wrap(`${p("Salut 👋")}${p("Merci d'avoir testé le guide voiture de fonction.")}${p("Comme promis, voilà l'essentiel à négocier sur ta voiture de fonction :")}${voitureChecklist()}${p("Et bienvenue dans la newsletter de Rainbow : de temps en temps, des astuces et des situations concrètes pour mieux gérer ton métier d'itinérant.")}${p("Bonne route,<br>Mano")}`),
        };

  return [
    { delayDays: 0, ...e1 },
    {
      delayDays: 2,
      subject: "Bienvenue, et c'est quoi Rainbow",
      html: wrap(
        `${imgHero("hero-voiture.jpg")}` +
        `${p("Salut 👋")}` +
        `${p("Ravi de t'avoir ici ! Tu reçois ce mail parce que tu as testé " + tested + ", et je voulais me présenter.")}` +
        `${p("Moi c'est Mano. J'ai été commercial terrain. Et comme beaucoup d'itinérants (agronomes, chargés d'affaires, chefs de chantier, technico-commerciaux), je connaissais ça par cœur :")}` +
        `${bullets(["Garder toute la journée les infos dans la tête", "Jongler entre les rendez-vous et la route", "Taper l'admin le soir, au lieu d'être tranquille"])}` +
        `${p("La charge mentale, quoi.")}` +
        `${p("Alors j'ai créé <b>Rainbow</b> : un assistant IA dans ton téléphone qui s'occupe de l'admin à ta place.")}` +
        `${p("Tu sors d'un rendez-vous, tu parles 30 secondes en voiture, et ton compte-rendu, tes tâches et tes relances s'écrivent tout seuls, rangés dans ton agenda.")}` +
        `${p("Mon obsession, elle est simple : réduire à zéro le temps d'admin de tous les métiers itinérants.")}` +
        `${appButton()}` +
        `${p("Bonne route,<br>Mano")}`
      ),
    },
    {
      delayDays: 4,
      subject: "Comment des itinérants utilisent Rainbow",
      html: wrap(
        `${imgHero("terrain-solaire.jpg")}` +
        `${p("Salut, c'est encore Mano 👋")}` +
        `${p("La semaine dernière, un chef de chantier me raconte son ancien quotidien : rentrer le soir avec quatre visites de site dans la tête, et en oublier la moitié en tapant ses rapports à 20h.")}` +
        `${p("Depuis qu'il utilise Rainbow, il dicte 30 secondes dans sa voiture en quittant le chantier. Le soir, tout est déjà écrit.")}` +
        `${p("Voilà comment des itinérants s'en servent, concrètement :")}` +
        `${card("🎙️", "Le compte-rendu dicté", "En sortant du rendez-vous, tu parles 30 secondes en voiture. Le compte-rendu est écrit et rangé. Le soir, plus rien à taper.", "Un chef de chantier, après chaque visite de site.")}` +
        `${card("🔔", "Les relances qui ne tombent jamais", "Tu dictes « rappeler M. Martin jeudi », c'est bloqué dans ton agenda. Plus aucune relance oubliée.", "Un chargé d'affaires dans les énergies renouvelables.")}` +
        `${card("🌅", "Ton briefing du matin", "Chaque matin, Rainbow te prépare ta journée : tes RDV, ce qui s'est dit la dernière fois avec chacun, et tes relances du jour.", "Un commercial qui enchaîne les rendez-vous.")}` +
        `${card("🧠", "Le brief avant chaque RDV", "10 secondes sur ton téléphone : l'IA te ressort ce qui s'est dit la dernière fois, le détail, le prénom, la promesse faite.", "Un agronome, avant sa tournée de fermes.")}` +
        `${p("Le mieux, c'est de l'essayer sur un vrai rendez-vous à toi.")}` +
        `${appButton()}` +
        `${p("Bonne route,<br>Mano")}`
      ),
    },
    {
      delayDays: 6,
      subject: "Se souvenir des gens (et un test pour toi)",
      html: wrap(
        `${imgHero("agronome.jpg")}` +
        `${p("Salut, dernier mail de bienvenue 👋")}` +
        `${p("Un agronome me disait l'autre jour : le pire, c'est d'arriver chez un client et d'avoir oublié qu'il t'avait parlé de sa fille qui passe le bac.")}` +
        `${p("Maintenant, avant chaque visite, Rainbow lui ressort ces détails. Ses clients le trouvent attentionné comme jamais. En vrai, c'est juste l'IA qui se souvient à sa place.")}` +
        `${card("🤝", "Se souvenir des gens", "Anniversaires, prénoms des enfants, la dernière promesse faite. L'IA ressort ce qu'elle a entendu avant chaque RDV. Tes clients se sentent suivis.", "")}` +
        `${card("🚀", "Rester proactif", "Plus besoin de courir après ta semaine : l'IA te pousse tes prochaines actions, au bon moment.", "")}` +
        `${p("<b>Le test, cette semaine :</b> à ton prochain rendez-vous, dicte ton compte-rendu 30 secondes en sortant. Une fois. Le soir, regarde : rien à taper, la tête vide.")}` +
        `${p("Si ça t'aide, tu gardes. Sinon, ton retour m'aide à construire un meilleur outil. Les deux me vont.")}` +
        `${appButton()}` +
        `${p("Bonne route,<br>Mano")}`
      ),
    },
  ];
}
