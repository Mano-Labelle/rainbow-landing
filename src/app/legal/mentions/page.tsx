import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — Rainbow",
  description:
    "Éditeur, hébergeur, propriété intellectuelle. Mentions légales obligatoires de l'application Rainbow.",
  alternates: { canonical: "/legal/mentions" },
  openGraph: {
    title: "Mentions légales — Rainbow",
    description: "Éditeur, hébergeur, propriété intellectuelle.",
    url: "https://askrainbow.ai/legal/mentions",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Mentions légales Rainbow" }],
  },
};

// Micro-entrepreneur (entreprise individuelle). Replace SIRET / address.
const ENTITY_NAME = "Mano Labelle";
const ENTITY_FORM = "Micro-entrepreneur (entreprise individuelle)";
const ENTITY_SIRET = "889 097 739 00011";
const ENTITY_ADDRESS = "8 rue du 8 Mai 1945, 76700 Gonfreville l'Orcher, France";
const ENTITY_TVA = "TVA non applicable, article 293 B du CGI";
const CONTACT_EMAIL = "contact@askrainbow.ai";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-4 text-2xl md:text-3xl font-serif tracking-tight text-lavender">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-relaxed text-lavender-muted mb-4">{children}</p>
  );
}

export default function MentionsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative">
          <div className="mx-auto max-w-3xl px-6 pt-16 pb-24">
            <div className="text-[11px] font-mono tracking-[0.18em] text-accent">
              MENTIONS LÉGALES
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-serif leading-[1.05] tracking-tight">
              Mentions légales
            </h1>

            <H2>Éditeur</H2>
            <P>
              {ENTITY_NAME}
              <br />
              {ENTITY_FORM}
              <br />
              Adresse : {ENTITY_ADDRESS}
              <br />
              SIRET : {ENTITY_SIRET}
              <br />
              {ENTITY_TVA}
              <br />
              Contact :{" "}
              <a className="text-accent" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </P>

            <H2>Directeur de la publication</H2>
            <P>{ENTITY_NAME}</P>

            <H2>Hébergement</H2>
            <P>
              <strong>Site web</strong> — Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, États-Unis.
              <br />
              <strong>Application backend</strong> — Railway Corp., États-Unis.
              <br />
              <strong>Base de données</strong> — Neon Inc. (région UE Francfort,
              Allemagne).
            </P>

            <H2>Propriété intellectuelle</H2>
            <P>
              L&apos;ensemble du contenu du site askrainbow.ai (textes, graphismes,
              logos, code source) est la propriété exclusive de {ENTITY_NAME},
              sauf mention contraire. Toute reproduction, représentation,
              modification ou diffusion, totale ou partielle, est interdite sans
              autorisation écrite préalable.
            </P>

            <H2>Liens externes</H2>
            <P>
              Le site peut contenir des liens vers des sites tiers. Nous
              n&apos;exerçons aucun contrôle sur leur contenu et déclinons toute
              responsabilité quant à leurs pratiques de confidentialité ou à leur
              contenu.
            </P>

            <H2>Données personnelles</H2>
            <P>
              Pour tout ce qui concerne le traitement de vos données personnelles,
              consultez notre{" "}
              <Link className="text-accent underline" href="/privacy">
                politique de confidentialité
              </Link>
              .
            </P>

            <H2>Conditions d&apos;utilisation</H2>
            <P>
              L&apos;usage de l&apos;application est régi par les{" "}
              <Link className="text-accent underline" href="/terms">
                conditions générales d&apos;utilisation
              </Link>
              .
            </P>

            <div className="mt-16 pt-6 border-t border-ink-border/40 text-sm text-lavender-dim font-mono">
              <Link href="/" className="hover:text-lavender">← Retour à l&apos;accueil</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
