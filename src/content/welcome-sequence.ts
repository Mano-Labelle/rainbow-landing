// Opt-in welcome / nurture sequence for the lead magnets.
// Sent + scheduled by /api/lead at opt-in time (Resend `scheduled_at`).
// Frame: charge mentale + temps. Rep-first. "tu". From Mano (Rainbow).
// NOTE: money is bait (the magnet), never the pitch — these emails never sell on money.

export type Magnet = "salaires" | "voiture";

const WEB_APP_URL = "https://askrainbow.ai/telecharger";

function shell(inner: string): string {
  return `<div style="font-family:Inter,-apple-system,Segoe UI,Arial,sans-serif;font-size:16px;line-height:1.6;color:#1a1a1a;max-width:540px;margin:0 auto">
${inner}
<p style="color:#9a9a9a;font-size:12px;margin-top:36px;border-top:1px solid #eee;padding-top:14px">Tu reçois ça parce que tu as utilisé un outil Rainbow. Réponds <strong>stop</strong> et je ne t'envoie plus rien.</p>
</div>`;
}

function btn(href: string, label: string): string {
  return `<p style="margin:24px 0"><a href="${href}" style="background:#FF5EC4;color:#0A0612;text-decoration:none;font-weight:600;padding:12px 22px;border-radius:9999px;display:inline-block">${label}</a></p>`;
}

export interface SequenceEmail {
  subject: string;
  html: string;
  delayDays: number; // 0 = send immediately
}

export function buildSequence(magnet: Magnet, pdfUrl: string): SequenceEmail[] {
  const tool =
    magnet === "salaires" ? "l'outil salaires" : "le guide voiture de fonction";

  return [
    {
      delayDays: 0,
      subject: "Ton accès, et un mot rapide",
      html: shell(
        `<p>Salut,</p>
<p>Merci d'avoir testé ${tool}. Voilà la version complète à garder : <a href="${pdfUrl}" style="color:#c0249a">${pdfUrl}</a></p>
<p>Moi c'est Mano, je fais Rainbow. Je t'enverrai de temps en temps un truc court et utile pour les gens qui bossent sur la route. Jamais de spam.</p>
<p>Bonne route,<br>Mano</p>`
      ),
    },
    {
      delayDays: 2,
      subject: "Un truc que m'ont dit 30 commerciaux terrain",
      html: shell(
        `<p>Le même truc revient tout le temps :</p>
<p style="border-left:3px solid #FF5EC4;padding-left:14px;color:#444"><em>"Je garde tout dans la tête. Et le soir, faut taper les comptes-rendus, mettre l'agenda à jour, noter les relances."</em></p>
<p>La charge mentale toute la journée, l'admin le soir. Ça te parle ?</p>
<p>Mano</p>`
      ),
    },
    {
      delayDays: 4,
      subject: "Comment certains ont arrêté l'admin du soir",
      html: shell(
        `<p>Ceux qui n'y passent plus leurs soirées ont un point commun : ils ne tapent plus, ils parlent.</p>
<p>En sortant d'un RDV, avant de redémarrer, ils disent leur compte-rendu à voix haute. C'est transcrit, rangé, et la prochaine action est dans l'agenda. Le soir, plus rien à faire, et la tête est vide.</p>
<p>C'est exactement ce qu'on a construit avec Rainbow.</p>
<p>Mano</p>`
      ),
    },
    {
      delayDays: 6,
      subject: "Un test, à ton prochain RDV",
      html: shell(
        `<p>Un seul truc à essayer cette semaine. À la fin de ton prochain rendez-vous, avant de redémarrer : ouvre Rainbow et dis ton compte-rendu à voix haute. 30 secondes.</p>
<p>Regarde ta soirée : rien à taper, la tête vide. Si ça te plaît, tu gardes. Sinon, tu me fais un retour, ça m'aide aussi.</p>
${btn(WEB_APP_URL, "Essaie Rainbow")}
<p>Bonne route,<br>Mano</p>`
      ),
    },
  ];
}
