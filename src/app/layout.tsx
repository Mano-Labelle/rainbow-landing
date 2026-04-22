import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { DIRECTION } from "@/content/direction";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@/components/seo/Analytics";
import "./globals.css";

const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const BING_VERIFICATION = process.env.NEXT_PUBLIC_BING_VERIFICATION;

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://askrainbow.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DIRECTION.seo.metaTitle,
    template: "%s · Rainbow",
  },
  description: DIRECTION.seo.metaDesc,
  applicationName: "Rainbow",
  authors: [{ name: "Rainbow AI" }],
  keywords: DIRECTION.seo.queries,
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Rainbow",
    title: DIRECTION.seo.ogTitle,
    description: DIRECTION.seo.ogDesc,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: DIRECTION.seo.ogTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DIRECTION.seo.ogTitle,
    description: DIRECTION.seo.ogDesc,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Next.js auto-discovers src/app/icon.png and serves it as the favicon.
  category: "technology",
  verification: {
    google: GSC_VERIFICATION,
    other: BING_VERIFICATION ? { "msvalidate.01": BING_VERIFICATION } : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0612",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-ink text-lavender font-sans">
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
