#!/usr/bin/env node
// IndexNow: ping Bing/Yandex/Seznam on deploy so their indexes (and by
// extension ChatGPT/Copilot/Perplexity) pick up changes within minutes.
//
// Usage:
//   node scripts/indexnow.mjs --setup     # writes public/<KEY>.txt
//   node scripts/indexnow.mjs             # submits URLs to Bing IndexNow
//
// Reads INDEXNOW_KEY from environment (.env.local for local runs; Vercel env
// for prod). Generate a key with: openssl rand -hex 16

import { writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const HOST = "askrainbow.ai";
const KEY = process.env.INDEXNOW_KEY;
const PUBLIC_DIR = new URL("../public/", import.meta.url).pathname;

if (!KEY || !/^[a-f0-9]{8,128}$/i.test(KEY)) {
  console.error(
    "✗ INDEXNOW_KEY is missing or not a hex string.\n" +
      "  Generate one with: openssl rand -hex 16\n" +
      "  Then add it to .env.local and Vercel env."
  );
  process.exit(1);
}

const keyFile = `${KEY}.txt`;
const keyPath = join(PUBLIC_DIR, keyFile);
const keyUrl = `https://${HOST}/${keyFile}`;

// --- setup mode: stamp the public key file -----------------------------------
if (process.argv.includes("--setup")) {
  // Remove any stale key files from a previous key (keep everything else)
  for (const f of readdirSync(PUBLIC_DIR)) {
    if (/^[a-f0-9]{8,128}\.txt$/i.test(f) && f !== keyFile) {
      console.warn(`  … removing stale key file: ${f}`);
    }
  }
  writeFileSync(keyPath, KEY);
  console.log(`✓ wrote ${keyPath}`);
  console.log(`  verify: ${keyUrl}`);
  process.exit(0);
}

// --- submit mode: POST URLs to Bing ------------------------------------------
if (!existsSync(keyPath)) {
  console.error(
    `✗ Key file missing at public/${keyFile}. Run with --setup first.`
  );
  process.exit(1);
}

// Single-page site for now. When more pages ship, pull from sitemap.
const urls = [`https://${HOST}/`];

const body = {
  host: HOST,
  key: KEY,
  keyLocation: keyUrl,
  urlList: urls,
};

const res = await fetch("https://www.bing.com/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

if (res.status === 200 || res.status === 202) {
  console.log(`✓ IndexNow accepted ${urls.length} URL(s) — ${res.status}`);
} else {
  const text = await res.text().catch(() => "");
  console.error(`✗ IndexNow ${res.status}: ${text}`);
  process.exit(1);
}
