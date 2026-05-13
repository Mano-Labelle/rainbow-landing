import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /tarifs renamed to /beta (2026-05-08) — no public pricing surface anymore.
      { source: "/tarifs", destination: "/beta", permanent: true },
    ];
  },
};

export default nextConfig;
