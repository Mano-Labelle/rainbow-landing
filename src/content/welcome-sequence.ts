// Opt-in welcome / nurture sequence for the lead magnets.
// Sent + scheduled by /api/lead at opt-in time (Resend `scheduled_at`).
// Frame: charge mentale + temps. Rep-first. "tu". From Mano (Rainbow).
// Content is INLINE (branded HTML). One consistent font on every element (incl. table cells,
// which email clients don't inherit). Real unsubscribe link in the footer.

export type Magnet = "salaires" | "voiture";

const APP = "https://askrainbow.ai/telecharger";
const LOGO = "https://askrainbow.ai/logo.png";
const FONT = "font-family:Inter,-apple-system,'Segoe UI',Arial,sans-serif";

function shell(inner: string, unsubUrl: string): string {
  return `<div style="background:#f4f1fb;padding:24px 12px;margin:0;${FONT}">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden">
    <div style="background:#0A0612;padding:16px 28px"><img src="${LOGO}" alt="" height="22" style="height:22px;vertical-align:middle;display:inline-block"> <span style="${FONT};color:#ffffff;font-weight:600;font-size:18px;vertical-align:middle;margin-left:6px">Rainbow</span></div>
    <div style="height:5px;background:linear-gradient(90deg,#B57DFF,#FF5EC4,#FFA060)"></div>
    <div style="padding:30px 28px;${FONT};color:#1a1626;font-size:16px;line-height:1.6">${inner}</div>
    <div style="padding:18px 28px;background:#faf8ff;text-align:center;${FONT}">
      <a href="${unsubUrl}" style="${FONT};color:#8a82a0;font-size:12px">Se désabonner</a>
    </div>
  </div>
</div>`;
}
const p = (t: string) => `<p style="margin:0 0 14px;${FONT};font-size:16px;line-height:1.6;color:#1a1626">${t}</p>`;
const btn = (href: string, label: string) =>
  `<div style="margin:24px 0"><a href="${href}" style="${FONT};background:#FF5EC4;color:#0A0612;text-decoration:none;font-weight:700;padding:13px 24px;border-radius:9999px;display:inline-block">${label}</a></div>`;

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
    "La catégorie / le modèle, négociables à ton niveau",
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

  const e1 =
    magnet === "salaires"
      ? {
          subject: "Ta grille des salaires 2026",
          html: wrap(`${p("Salut 👋,")}${p("Merci d'avoir testé le simulateur de salaire.")}${p("Comme promis, voilà la grille complète des salaires des commerciaux terrain en 2026 :")}${salaireGrille()}${p("Et bienvenue dans la newsletter de Rainbow : tu recevras de temps en temps des astuces, des conseils et des situations concrètes pour mieux gérer ton métier d'itinérant.")}${p("Bonne route,<br>Mano")}`),
        }
      : {
          subject: "Ta checklist voiture de fonction",
          html: wrap(`${p("Salut 👋,")}${p("Merci d'avoir testé le guide voiture de fonction.")}${p("Comme promis, voilà l'essentiel à négocier sur ta voiture de fonction :")}${voitureChecklist()}${p("Et bienvenue dans la newsletter de Rainbow : tu recevras de temps en temps des astuces, des conseils et des situations concrètes pour mieux gérer ton métier d'itinérant.")}${p("Bonne route,<br>Mano")}`),
        };

  return [
    { delayDays: 0, ...e1 },
    {
      delayDays: 2,
      subject: "Un truc que m'ont dit 30 commerciaux terrain",
      html: wrap(`${p("Le même truc revient tout le temps :")}<p style="margin:0 0 14px;${FONT};border-left:3px solid #FF5EC4;padding-left:14px;color:#555;font-style:italic;font-size:16px;line-height:1.6">"Je garde tout dans la tête. Et le soir, faut taper les comptes-rendus, mettre l'agenda à jour, noter les relances."</p>${p("La charge mentale toute la journée, l'admin le soir. Ça te parle ?")}${p("Mano")}`),
    },
    {
      delayDays: 4,
      subject: "Comment certains ont arrêté l'admin du soir",
      html: wrap(`${p("Ceux qui n'y passent plus leurs soirées ont un point commun : ils ne tapent plus, ils parlent.")}${p("En sortant d'un RDV, avant de redémarrer, ils disent leur compte-rendu à voix haute. C'est transcrit, rangé, et la prochaine action est dans l'agenda. Le soir, plus rien à faire, et la tête est vide.")}${p("C'est exactement ce qu'on a construit avec Rainbow.")}${p("Mano")}`),
    },
    {
      delayDays: 6,
      subject: "Un test, à ton prochain RDV",
      html: wrap(`${p("Un seul truc à essayer cette semaine. À la fin de ton prochain rendez-vous, avant de redémarrer : ouvre Rainbow et dis ton compte-rendu à voix haute. 30 secondes.")}${p("Regarde ta soirée : rien à taper, la tête vide. Si ça te plaît, tu gardes. Sinon, tu me fais un retour, ça m'aide aussi.")}${btn(APP, "Essaie Rainbow")}${p("Bonne route,<br>Mano")}`),
    },
  ];
}
