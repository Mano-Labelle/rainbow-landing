// Opt-in welcome / nurture sequence for the lead magnets.
// Sent + scheduled by /api/lead at opt-in time (Resend `scheduled_at`).
// Frame: charge mentale + temps. Rep-first. "tu". From Mano (Rainbow).
// Content is INLINE (branded HTML) — no external links to break.

export type Magnet = "salaires" | "voiture";

const APP = "https://askrainbow.ai/telecharger";
const LOGO = "https://askrainbow.ai/logo.png";

function shell(inner: string): string {
  return `<div style="background:#f4f1fb;padding:24px 12px;margin:0">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;font-family:Inter,-apple-system,Segoe UI,Arial,sans-serif">
    <div style="background:#0A0612;padding:16px 28px"><img src="${LOGO}" alt="Rainbow" height="22" style="height:22px;display:block"></div>
    <div style="height:5px;background:linear-gradient(90deg,#B57DFF,#FF5EC4,#FFA060)"></div>
    <div style="padding:30px 28px;color:#1a1626;font-size:16px;line-height:1.6">${inner}</div>
    <div style="padding:16px 28px;background:#faf8ff;color:#8a82a0;font-size:12px;line-height:1.5">Tu reçois ça parce que tu as utilisé un outil Rainbow. Réponds <b>stop</b> et je ne t'envoie plus rien.</div>
  </div>
</div>`;
}

function btn(href: string, label: string): string {
  return `<div style="margin:24px 0"><a href="${href}" style="background:#FF5EC4;color:#0A0612;text-decoration:none;font-weight:700;padding:13px 24px;border-radius:9999px;display:inline-block">${label}</a></div>`;
}

const GRILLE: [string, string][] = [
  ["Dispositifs médicaux", "60-75k"], ["Industrie / technico", "53-65k"], ["BTP / matériaux", "48-53k"],
  ["Télécoms / IT terrain", "45-55k"], ["Distribution / GMS", "45-55k"], ["Énergie / photovoltaïque", "42-50k"],
  ["Visiteur médical", "42-46k"], ["Automobile B2B", "40-48k"], ["Agro / agronome", "38-44k"], ["Vin / spiritueux / CHR", "36-42k"],
];

function salaireGrille(): string {
  const rows = GRILLE.map(
    ([s, r], i) =>
      `<tr style="background:${i % 2 ? "#faf8ff" : "#fff"}"><td style="padding:7px 10px;font-size:14px">${s}</td><td style="padding:7px 10px;font-size:14px;text-align:right;font-weight:600;color:#c0249a">${r}</td></tr>`
  ).join("");
  return `<table style="width:100%;border-collapse:collapse;border:1px solid #eee;border-radius:10px;overflow:hidden;margin:16px 0">
  <tr style="background:#0A0612;color:#fff"><td style="padding:8px 10px;font-size:13px">Secteur (commercial terrain, confirmé)</td><td style="padding:8px 10px;font-size:13px;text-align:right">Package 2026</td></tr>
  ${rows}</table>
  <p style="font-size:13px;color:#8a82a0">Île-de-France +12%, grande métropole +5%. Moyenne tous secteurs : 47k, dont 26% de variable. Sources : Uptoo (~110 000), APEC (26 000), Expectra, Michael Page, Hellowork.</p>`;
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
  return `<ul style="padding-left:18px;margin:16px 0">${items.map((i) => `<li style="margin:7px 0;font-size:14px">${i}</li>`).join("")}</ul>
  <p style="font-size:13px;color:#8a82a0">Budget pro moyen ~1 050 €/mois. Sources : URSSAF, Arval, L'Argus, service-public.</p>`;
}

export interface SequenceEmail {
  subject: string;
  html: string;
  delayDays: number;
}

export function buildSequence(magnet: Magnet): SequenceEmail[] {
  const e1 =
    magnet === "salaires"
      ? {
          subject: "Ta grille des salaires 2026 (et un mot)",
          html: shell(
            `<p>Salut,</p><p>Merci d'avoir testé l'outil. Voilà la grille complète des salaires des commerciaux terrain en 2026, à garder :</p>${salaireGrille()}<p>Moi c'est Mano, je fais Rainbow. Je t'envoie de temps en temps un truc court et utile pour les gens de la route, jamais de spam.</p><p>Bonne route,<br>Mano</p>`
          ),
        }
      : {
          subject: "Ta checklist voiture de fonction (et un mot)",
          html: shell(
            `<p>Salut,</p><p>Merci d'avoir testé l'outil. Voilà l'essentiel à négocier sur ta voiture de fonction, à garder sous la main :</p>${voitureChecklist()}<p>Moi c'est Mano, je fais Rainbow. Je t'envoie de temps en temps un truc court et utile pour les gens de la route, jamais de spam.</p><p>Bonne route,<br>Mano</p>`
          ),
        };

  return [
    { delayDays: 0, ...e1 },
    {
      delayDays: 2,
      subject: "Un truc que m'ont dit 30 commerciaux terrain",
      html: shell(
        `<p>Le même truc revient tout le temps :</p><p style="border-left:3px solid #FF5EC4;padding-left:14px;color:#555;font-style:italic">"Je garde tout dans la tête. Et le soir, faut taper les comptes-rendus, mettre l'agenda à jour, noter les relances."</p><p>La charge mentale toute la journée, l'admin le soir. Ça te parle ?</p><p>Mano</p>`
      ),
    },
    {
      delayDays: 4,
      subject: "Comment certains ont arrêté l'admin du soir",
      html: shell(
        `<p>Ceux qui n'y passent plus leurs soirées ont un point commun : ils ne tapent plus, ils parlent.</p><p>En sortant d'un RDV, avant de redémarrer, ils disent leur compte-rendu à voix haute. C'est transcrit, rangé, et la prochaine action est dans l'agenda. Le soir, plus rien à faire, et la tête est vide.</p><p>C'est exactement ce qu'on a construit avec Rainbow.</p><p>Mano</p>`
      ),
    },
    {
      delayDays: 6,
      subject: "Un test, à ton prochain RDV",
      html: shell(
        `<p>Un seul truc à essayer cette semaine. À la fin de ton prochain rendez-vous, avant de redémarrer : ouvre Rainbow et dis ton compte-rendu à voix haute. 30 secondes.</p><p>Regarde ta soirée : rien à taper, la tête vide. Si ça te plaît, tu gardes. Sinon, tu me fais un retour, ça m'aide aussi.</p>${btn(APP, "Essaie Rainbow")}<p>Bonne route,<br>Mano</p>`
      ),
    },
  ];
}
