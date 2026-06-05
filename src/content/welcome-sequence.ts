// Opt-in welcome / nurture sequence for the lead magnets.
// Sent + scheduled by /api/lead at opt-in time (Resend `scheduled_at`).
// Audience = ALL itinerant field workers (agronomes, chantier managers, chargés
// d'affaires, technico-commerciaux, field reps) — NOT just "sales". Frame = the
// after-visit admin drudgery + concrete Rainbow usage. "tu". From Mano (Rainbow).
// Content is INLINE branded HTML with visuals (hero, usage cards, app buttons).

export type Magnet = "salaires" | "voiture";

const APPSTORE = "https://apps.apple.com/fr/app/rainbow-ai/id6758268983";
const TELECHARGER = "https://askrainbow.ai/telecharger";
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

// Branded gradient hero (solid fallback for clients that drop gradients).
function hero(title: string, sub: string): string {
  return `<div style="background:#140a2e;background:linear-gradient(135deg,#0A0612,#2a1655);border-radius:16px;padding:30px 24px;text-align:center;margin:0 0 22px">
    <img src="${LOGO}" alt="" height="26" style="height:26px;margin-bottom:12px">
    <div style="${FONT};color:#ffffff;font-size:21px;font-weight:700;line-height:1.3">${title}</div>
    ${sub ? `<div style="${FONT};color:#c9bff0;font-size:14px;margin-top:8px">${sub}</div>` : ""}
  </div>`;
}

// One usage "card": emoji chip + title + body + who-uses-it line.
function card(emoji: string, title: string, body: string, who: string): string {
  return `<table role="presentation" width="100%" style="border-collapse:collapse;margin:14px 0"><tr>
    <td width="56" valign="top" style="${FONT}">
      <div style="width:46px;height:46px;border-radius:13px;background:#f4f1fb;text-align:center;line-height:46px;font-size:23px">${emoji}</div>
    </td>
    <td valign="top" style="${FONT};padding-left:12px">
      <div style="${FONT};font-weight:700;font-size:15px;color:#1a1626;margin-bottom:3px">${title}</div>
      <div style="${FONT};font-size:14px;line-height:1.55;color:#444">${body}</div>
      ${who ? `<div style="${FONT};font-size:12px;color:#8a82a0;margin-top:5px">${who}</div>` : ""}
    </td></tr></table>`;
}

// Download block — direct App Store link + Android beta fallback.
function appButtons(): string {
  return `<div style="margin:24px 0;text-align:center">
    <a href="${APPSTORE}" style="${FONT};background:#0A0612;color:#ffffff;text-decoration:none;font-weight:700;padding:14px 26px;border-radius:12px;display:inline-block;font-size:15px">📲 Télécharger sur l'App Store</a>
    <div style="${FONT};font-size:12px;color:#8a82a0;margin-top:10px">Sur Android ? <a href="${TELECHARGER}" style="color:#c0249a;text-decoration:none">Rejoins la bêta ici</a> &middot; Gratuit, sans carte bancaire</div>
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
          html: wrap(`${p("Salut 👋,")}${p("Merci d'avoir testé le simulateur de salaire.")}${p("Comme promis, voilà la grille complète des salaires des commerciaux terrain en 2026 :")}${salaireGrille()}${p("Et bienvenue dans la newsletter de Rainbow : de temps en temps, des astuces et des situations concrètes pour mieux gérer ton métier d'itinérant.")}${p("Bonne route,<br>Mano")}`),
        }
      : {
          subject: "Ta checklist voiture de fonction",
          html: wrap(`${p("Salut 👋,")}${p("Merci d'avoir testé le guide voiture de fonction.")}${p("Comme promis, voilà l'essentiel à négocier sur ta voiture de fonction :")}${voitureChecklist()}${p("Et bienvenue dans la newsletter de Rainbow : de temps en temps, des astuces et des situations concrètes pour mieux gérer ton métier d'itinérant.")}${p("Bonne route,<br>Mano")}`),
        };

  return [
    { delayDays: 0, ...e1 },
    {
      delayDays: 2,
      subject: "C'est quoi Rainbow (et pourquoi je l'ai créé)",
      html: wrap(
        `${hero("Zéro admin en fin de journée.", "Pour tous les métiers de terrain.")}` +
        `${p("Salut, moi c'est Mano 👋")}` +
        `${p("J'étais commercial sur le terrain. Et comme beaucoup d'itinérants — agronomes, chargés d'affaires, chefs de chantier, technico-commerciaux — je passais mes soirées à taper des comptes-rendus au lieu d'être tranquille.")}` +
        `${p("Alors j'ai créé <b>Rainbow</b> : un assistant IA dans ton téléphone qui s'occupe de l'admin à ta place. Tu sors d'un rendez-vous, tu parles 30 secondes en voiture, et ton compte-rendu, tes tâches et tes relances s'écrivent tout seuls, rangés dans ton agenda.")}` +
        `${p("Mon obsession, elle est simple : <b>réduire à zéro le temps d'admin de tous les métiers itinérants.</b>")}` +
        `${appButtons()}` +
        `${p("Bonne route,<br>Mano")}`
      ),
    },
    {
      delayDays: 4,
      subject: "3 façons d'utiliser Rainbow sur le terrain",
      html: wrap(
        `${p("Rainbow, ce n'est pas une appli de plus à apprendre. Voilà comment des itinérants s'en servent, vraiment, au quotidien 👇")}` +
        `${card("🎙️", "Le compte-rendu dicté", "En sortant du RDV, tu parles 30 secondes en voiture. Le compte-rendu est écrit et rangé. Le soir, plus rien à taper.", "Un chef de chantier, après chaque visite de site.")}` +
        `${card("🔔", "Les relances qui ne tombent jamais", "Tu dictes « rappeler M. Martin jeudi », c'est bloqué dans ton agenda. Zéro relance oubliée.", "Un chargé d'affaires dans les énergies renouvelables.")}` +
        `${card("🧠", "Le brief avant le rendez-vous", "10 secondes sur ton téléphone : l'IA te ressort ce qui s'est dit la dernière fois — le détail, le prénom, la promesse faite.", "Un agronome, avant sa tournée de fermes.")}` +
        `${p("Le mieux, c'est de l'essayer sur un vrai rendez-vous à toi.")}` +
        `${appButtons()}` +
        `${p("Bonne route,<br>Mano")}`
      ),
    },
    {
      delayDays: 6,
      subject: "Se souvenir des gens (et un test pour toi)",
      html: wrap(
        `${p("Deux dernières façons de t'en servir, puis je te laisse essayer :")}` +
        `${card("🤝", "Se souvenir des gens", "Anniversaires, prénoms des enfants, la dernière promesse faite... l'IA ressort ce qu'elle a entendu, avant chaque RDV. Tes clients se sentent suivis.", "")}` +
        `${card("🚀", "Rester proactif", "Plus besoin de courir après ta semaine : l'IA te pousse tes prochaines actions, au bon moment.", "")}` +
        `${p("<b>Le test, cette semaine :</b> à ton prochain rendez-vous, dicte ton compte-rendu 30 secondes en sortant. Une fois. Le soir, regarde : rien à taper, la tête vide.")}` +
        `${p("Si ça t'aide, tu gardes. Sinon, ton retour m'aide à construire un meilleur outil. Les deux me vont.")}` +
        `${appButtons()}` +
        `${p("Bonne route,<br>Mano")}`
      ),
    },
  ];
}
