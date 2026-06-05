import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // PostHog reverse proxy (EU): serve analytics first-party via /ingest so ad-blockers,
  // which blocklist *.i.posthog.com, can't silently drop events. Order matters — the
  // /static rule must come before the catch-all.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  async redirects() {
    return [
      // /tarifs renamed to /beta (2026-05-08) — no public pricing surface anymore.
      { source: "/tarifs", destination: "/beta", permanent: true },
    ];
  },
};

export default nextConfig;
