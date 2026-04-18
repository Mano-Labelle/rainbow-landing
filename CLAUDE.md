# rainbow-landing — Claude Guide

Marketing site for Rainbow (AI sales assistant). Lives at `askrainbow.ai`.
The app (for authenticated users) lives at `app.askrainbow.ai` — different project, different repo.

## Positioning (memorize)

Rainbow is an **assistant commercial IA, pas un CRM**. Voice in + chat by text. Rainbow writes back. iOS / Android / Web. Full CSV export.
Never soften this positioning into "CRM light" or similar.

## Architecture rules

1. **Copy lives in `src/content/direction.ts`.** Never hardcode French strings elsewhere. Add a field to the `Direction` type + update `DIRECTION` export.
2. **Client components only where needed.** Default to server components. Mark `"use client"` only for interactivity (FAQ accordion, hero animation).
3. **Everything SSG.** No `fetch` at runtime. No dynamic data. Every byte pre-rendered for AEO.
4. **Rainbow gradient is sacred.** Only used for: the Arc logo, chat bubbles, voice waveform, section divider, RInk keyword accents. Never for section backgrounds or button fills.
5. **Accent color (`#FF5EC4`) is the only CTA color.** No other button colors.
6. **Font pairing is locked:** Instrument Serif (H1/H2), Inter (body), JetBrains Mono (labels/URLs). Configured in `src/app/layout.tsx` — do not swap without discussion.

## Editing

- Copy change → edit `src/content/direction.ts`, push, done.
- New section → add file in `src/components/sections/`, import in `src/app/page.tsx`.
- Add an FAQ → append to the `FAQ` array; JSON-LD schema auto-regenerates.
- Add a page → `src/app/<path>/page.tsx`. Remember to add to `sitemap.ts`.

## Deploy

Pushes to `main` auto-deploy to production. PRs get preview URLs.

## SEO / AEO checklist before shipping

- [ ] `metaTitle` ≤ 60 chars, `metaDesc` ≤ 155 chars
- [ ] OG image exists at `/public/og.png` (1200×630)
- [ ] New sections have proper H1/H2/H3 hierarchy (one H1 per page)
- [ ] FAQ entries reflected in `FAQ` array (auto-injected into schema)
- [ ] `llms.txt` still accurate for LLM crawlers

## Deferred work (from Claude Design prototype)

These sections exist in the Claude Design handoff but aren't yet built:
- `VJournee` — 4-scene "journée avec Rainbow" (briefing / carte / agenda / relire)
- `VDemoChat` — second expanded chat demo below hero
- `VFlow` — 3-step process diagram
- `VCSV` — CSV export module with mock file preview
- `VPortes` — iPhone / Android / Web platform strip

Ship baseline first, iterate these in later.
