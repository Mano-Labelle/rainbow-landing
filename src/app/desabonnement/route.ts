// GET /desabonnement?e=<email>  → marks the contact unsubscribed in Resend + shows a confirmation page.
// POST (same URL)               → RFC 8058 one-click unsubscribe (from the List-Unsubscribe-Post header).
//
// Note: this stops the ongoing newsletter immediately. The welcome sequence is sent via Resend
// transactional + scheduled_at, so the few already-scheduled nurture emails may still arrive — acceptable
// at this stage; revisit with a native Resend automation if it becomes an issue.

async function unsubscribe(email: string): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const aid = process.env.RESEND_AUDIENCE_ID;
  const clean = email.trim().toLowerCase();
  if (!clean || !key || !aid) return;
  try {
    await fetch(`https://api.resend.com/audiences/${aid}/contacts/${encodeURIComponent(clean)}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ unsubscribed: true }),
    });
  } catch {
    /* never error the user */
  }
}

const PAGE = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Désabonné · Rainbow</title></head>
<body style="font-family:Inter,-apple-system,'Segoe UI',Arial,sans-serif;background:#0A0612;color:#F4EFFF;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;text-align:center;padding:24px">
<div><img src="/logo.svg" alt="Rainbow" style="height:28px"><h1 style="font-weight:600;font-size:24px;margin:20px 0 8px">C'est fait, tu es désabonné.</h1><p style="color:#B9B0D0;margin:0">Tu ne recevras plus d'emails de Rainbow. Bonne route 🚗</p></div></body></html>`;

export async function GET(req: Request) {
  const email = new URL(req.url).searchParams.get("e") || "";
  await unsubscribe(email);
  return new Response(PAGE, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}

export async function POST(req: Request) {
  const email = new URL(req.url).searchParams.get("e") || "";
  await unsubscribe(email);
  return new Response(null, { status: 200 });
}
