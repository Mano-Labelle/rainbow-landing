import { buildSequence, type Magnet } from "@/content/welcome-sequence";

// POST /api/lead — Écran-0 opt-in for the lead magnets.
// Body: { email: string, magnet: "salaires" | "voiture", sector?: string }
//
// 1. Adds the contact to the Resend audience (RESEND_AUDIENCE_ID).
// 2. Sends the welcome sequence: E1 now, E2-E4 scheduled via Resend `scheduled_at`.
//    (No dashboard automation needed — the whole nurture is driven from here.)
//
// Env (set in .env.local for dev + Vercel project env for prod):
//   RESEND_API_KEY        — full-access key from https://resend.com/api-keys
//   RESEND_AUDIENCE_ID    — audience the opt-ins land in
//
// Until RESEND_API_KEY is set the endpoint still returns success and logs the
// opt-in to the server console, so the form never breaks.

const RESEND = "https://api.resend.com";
const FROM = "Mano (Rainbow) <mano@news.askrainbow.ai>";
const REPLY_TO = "mano@askrainbow.ai";

const PDF_URL: Record<Magnet, string> = {
  salaires: "https://askrainbow.ai/pdf/salaires-itinerants-2026.pdf",
  voiture: "https://askrainbow.ai/pdf/negocier-voiture-fonction-2026.pdf",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_EMAIL_LEN = 254;

function isMagnet(v: unknown): v is Magnet {
  return v === "salaires" || v === "voiture";
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return Response.json({ ok: false, error: "Invalid body." }, { status: 400 });
  }

  const { email, magnet, sector } = body as Record<string, unknown>;

  if (typeof email !== "string") {
    return Response.json({ ok: false, error: "Email manquant." }, { status: 400 });
  }
  const cleanEmail = email.trim().toLowerCase();
  if (cleanEmail.length === 0 || cleanEmail.length > MAX_EMAIL_LEN || !EMAIL_RE.test(cleanEmail)) {
    return Response.json({ ok: false, error: "Format d'email invalide." }, { status: 400 });
  }

  const cleanMagnet: Magnet = isMagnet(magnet) ? magnet : "salaires";
  const cleanSector = typeof sector === "string" ? sector.slice(0, 60) : "";

  const key = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!key) {
    console.log(
      "[lead] opt-in received (RESEND_API_KEY missing):",
      JSON.stringify({ email: cleanEmail, magnet: cleanMagnet, sector: cleanSector, at: new Date().toISOString() })
    );
    return Response.json({ ok: true, stored: "console" });
  }

  const auth = { Authorization: `Bearer ${key}`, "Content-Type": "application/json" };

  // 1. Add to the audience (best-effort — a dupe just 200s/409s, we don't fail the user).
  if (audienceId) {
    try {
      await fetch(`${RESEND}/audiences/${audienceId}/contacts`, {
        method: "POST",
        headers: auth,
        body: JSON.stringify({ email: cleanEmail, unsubscribed: false }),
      });
    } catch (err) {
      console.error("[lead] audience add failed:", err instanceof Error ? err.message : "unknown");
    }
  }

  // 2. Send + schedule the welcome sequence.
  const seq = buildSequence(cleanMagnet, PDF_URL[cleanMagnet]);
  const now = Date.now();
  const results = await Promise.allSettled(
    seq.map((e) => {
      const payload: Record<string, unknown> = {
        from: FROM,
        to: [cleanEmail],
        reply_to: REPLY_TO,
        subject: e.subject,
        html: e.html,
        headers: { "List-Unsubscribe": "<mailto:stop@news.askrainbow.ai>" },
      };
      if (e.delayDays > 0) {
        payload.scheduled_at = new Date(now + e.delayDays * 86_400_000).toISOString();
      }
      return fetch(`${RESEND}/emails`, { method: "POST", headers: auth, body: JSON.stringify(payload) });
    })
  );

  const sent = results.filter((r) => r.status === "fulfilled").length;
  console.log(
    "[lead] opt-in:",
    JSON.stringify({ email: cleanEmail, magnet: cleanMagnet, sector: cleanSector, sequenceSent: sent, of: seq.length })
  );

  return Response.json({ ok: true, stored: "resend", sequenceSent: sent });
}
