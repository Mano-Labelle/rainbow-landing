import { LLMS_TXT } from "@/content/direction";

// /llms.txt — a short, self-describing markdown file that LLM crawlers
// (Claude, ChatGPT, Perplexity) can ingest cleanly.
export function GET() {
  return new Response(LLMS_TXT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
