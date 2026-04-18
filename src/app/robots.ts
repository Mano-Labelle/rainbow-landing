import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://askrainbow.ai/sitemap.xml",
    host: "https://askrainbow.ai",
  };
}
