import { Client } from "@notionhq/client";

// POST /api/waitlist
// Body: { email: string, source?: string }
// Writes a row to the Waitlist database in the Intelligence Hub.
//
// Env:
//   NOTION_API_TOKEN         — integration secret from https://www.notion.so/profile/integrations
//   NOTION_WAITLIST_DB_ID    — (optional) database id; falls back to hard-coded
//
// Setup (one time, by the site owner):
//   1. Create a Notion internal integration, copy the "Internal Integration Secret".
//   2. Open the Waitlist DB in Notion → ⋯ → Connections → add the integration.
//   3. Add NOTION_API_TOKEN as an env var in Vercel.
//   4. Redeploy.
//
// Until NOTION_API_TOKEN is set in the environment, the endpoint still returns
// a 200 success so the form always works — the signup is logged to the server
// console and the user gets the confirmation state.

const WAITLIST_DB_ID =
  process.env.NOTION_WAITLIST_DB_ID ||
  "ed892bef57bc42fda541306515345c3a";

const EMAIL_RE =
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MAX_EMAIL_LEN = 254;

function normalise(s: string): string {
  return s.trim().toLowerCase();
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (typeof body !== "object" || body === null) {
    return Response.json(
      { ok: false, error: "Invalid body." },
      { status: 400 }
    );
  }

  const { email, source } = body as Record<string, unknown>;

  if (typeof email !== "string") {
    return Response.json(
      { ok: false, error: "Email manquant." },
      { status: 400 }
    );
  }

  const cleanEmail = normalise(email);

  if (cleanEmail.length === 0 || cleanEmail.length > MAX_EMAIL_LEN) {
    return Response.json(
      { ok: false, error: "Email invalide." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(cleanEmail)) {
    return Response.json(
      { ok: false, error: "Format d'email invalide." },
      { status: 400 }
    );
  }

  const allowedSources = new Set([
    "android-waitlist",
    "press",
    "other",
  ]);
  const cleanSource =
    typeof source === "string" && allowedSources.has(source)
      ? source
      : "android-waitlist";

  const token = process.env.NOTION_API_TOKEN;

  if (!token) {
    // Fallback: always succeed so the UI stays honest. The signup is logged
    // in Vercel so the owner can retrieve it until the integration is wired.
    console.log(
      "[waitlist] signup received (Notion token missing):",
      JSON.stringify({
        email: cleanEmail,
        source: cleanSource,
        at: new Date().toISOString(),
      })
    );
    return Response.json({ ok: true, stored: "console" });
  }

  try {
    const notion = new Client({ auth: token });
    await notion.pages.create({
      parent: { type: "database_id", database_id: WAITLIST_DB_ID },
      properties: {
        Email: {
          title: [{ type: "text", text: { content: cleanEmail } }],
        },
        Source: {
          select: { name: cleanSource },
        },
        Status: {
          select: { name: "New" },
        },
      },
    });
    return Response.json({ ok: true, stored: "notion" });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "unknown";
    console.error("[waitlist] Notion write failed:", msg);
    // Still return success — we have the email in the logs. Never lose a
    // signup just because the backend had a hiccup.
    console.log(
      "[waitlist] signup (after Notion failure):",
      JSON.stringify({
        email: cleanEmail,
        source: cleanSource,
        at: new Date().toISOString(),
      })
    );
    return Response.json({ ok: true, stored: "console-fallback" });
  }
}
