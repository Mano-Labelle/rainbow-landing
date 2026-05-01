import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — Rainbow",
  description:
    "Conditions générales d'utilisation de l'application Rainbow. Engagements, limitations, résiliation, droit applicable.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "CGU — Rainbow",
    description:
      "Conditions générales d'utilisation de Rainbow.",
    url: "https://askrainbow.ai/terms",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CGU Rainbow" }],
  },
};

const LAST_UPDATED = "1er mai 2026";
const ENTITY_NAME = "Mano Labelle";
const ENTITY_FORM = "Micro-entrepreneur (entreprise individuelle)";
const ENTITY_SIRET = "889 097 739 00011";
const ENTITY_ADDRESS = "8 rue du 8 Mai 1945, 76700 Gonfreville l'Orcher, France";
const CONTACT_EMAIL = "mano@askrainbow.ai";

function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="mt-12 mb-4 text-2xl md:text-3xl font-serif tracking-tight text-lavender"
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-relaxed text-lavender-muted mb-4">{children}</p>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-6 mb-4 space-y-1.5 text-base leading-relaxed text-lavender-muted">
      {children}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative">
          <div className="mx-auto max-w-3xl px-6 pt-16 pb-24">
            <div className="text-[11px] font-mono tracking-[0.18em] text-accent">
              CONDITIONS D&apos;UTILISATION
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-serif leading-[1.05] tracking-tight">
              Conditions générales d&apos;utilisation
            </h1>
            <p className="mt-4 text-sm font-mono text-lavender-dim">
              Dernière mise à jour : {LAST_UPDATED}
            </p>

            <H2 id="objet">1. Objet</H2>
            <P>
              Les présentes conditions générales d&apos;utilisation (« CGU ») régissent
              l&apos;accès et l&apos;utilisation de l&apos;application Rainbow (« le Service »),
              éditée par {ENTITY_NAME} ({ENTITY_FORM}), {ENTITY_ADDRESS}, SIRET {ENTITY_SIRET}.
              En créant un compte, vous acceptez sans réserve ces CGU.
            </P>

            <H2 id="service">2. Description du service</H2>
            <P>
              Rainbow est un assistant commercial IA pour commerciaux terrain. Il
              permet la prise de notes vocale, la gestion de contacts et de
              tâches, la synchronisation avec votre agenda Google, et la
              génération de réponses par intelligence artificielle.
            </P>

            <H2 id="compte">3. Compte utilisateur</H2>
            <UL>
              <li>L&apos;inscription nécessite une adresse email valide et un mot de passe.</li>
              <li>Vous êtes responsable de la confidentialité de vos identifiants.</li>
              <li>Vous garantissez l&apos;exactitude des informations fournies.</li>
              <li>Le service est réservé aux personnes de 16 ans et plus.</li>
              <li>Un seul compte par personne physique.</li>
            </UL>

            <H2 id="usage">4. Usage acceptable</H2>
            <P>Vous vous engagez à ne pas :</P>
            <UL>
              <li>Utiliser le service à des fins illégales ou frauduleuses.</li>
              <li>Tenter de contourner les mesures de sécurité ou d&apos;authentification.</li>
              <li>Sous-traiter, revendre ou redistribuer l&apos;accès au service sans autorisation.</li>
              <li>Charger ou transmettre du contenu illicite, diffamatoire, harcelant.</li>
              <li>Effectuer du reverse engineering du service ou de l&apos;API.</li>
              <li>Saisir des données de tiers sans leur consentement (RGPD).</li>
            </UL>
            <P>
              Tout manquement peut entraîner la suspension ou la résiliation
              immédiate du compte sans remboursement.
            </P>

            <H2 id="ia">5. Traitement par intelligence artificielle</H2>
            <P>
              Rainbow utilise des services d&apos;IA tiers (notamment OpenAI) pour
              traiter vos messages. Ce traitement nécessite votre consentement
              explicite, recueilli au premier usage et révocable à tout moment.
            </P>
            <P>
              <strong>Limites de l&apos;IA</strong> — les réponses générées peuvent
              contenir des erreurs ou des inexactitudes. Vous restez responsable
              de la vérification des actions critiques (envoi d&apos;emails, création
              de rendez-vous, modifications de contacts). Rainbow ne se substitue
              pas à votre jugement professionnel.
            </P>

            <H2 id="google">6. Intégration Google Calendar</H2>
            <P>
              Si vous connectez votre Google Calendar, vous autorisez Rainbow à
              lire et modifier vos événements selon vos demandes. Les modalités
              précises sont décrites dans la{" "}
              <Link className="text-accent underline" href="/privacy">
                politique de confidentialité
              </Link>
              .
            </P>
            <P>
              La déconnexion est possible à tout moment depuis{" "}
              <em>Paramètres &gt; Calendrier</em>. Les événements créés dans Google
              avant déconnexion ne sont pas supprimés.
            </P>

            <H2 id="propriete">7. Propriété intellectuelle</H2>
            <P>
              <strong>Vos données</strong> — vous conservez tous les droits sur les
              contenus que vous saisissez (contacts, notes, photos, audio). Vous
              nous accordez une licence limitée d&apos;usage pour fournir le service.
            </P>
            <P>
              <strong>Notre service</strong> — l&apos;application, le code, les
              marques, le design et la documentation sont la propriété exclusive
              de {ENTITY_NAME}. Toute reproduction non autorisée est interdite.
            </P>

            <H2 id="disponibilite">8. Disponibilité du service</H2>
            <P>
              Nous nous efforçons d&apos;assurer une disponibilité maximale, sans
              garantie d&apos;absence d&apos;interruption. Maintenance, incidents tiers
              (OpenAI, Google, Railway, Neon) ou cas de force majeure peuvent
              entraîner des interruptions temporaires. Le mode hors-ligne permet
              de continuer à consulter vos données locales pendant ces périodes.
            </P>

            <H2 id="responsabilite">9. Limitation de responsabilité</H2>
            <P>
              Dans la mesure permise par la loi applicable, {ENTITY_NAME} ne
              saurait être tenue responsable des dommages indirects (perte de
              chiffre d&apos;affaires, perte de clientèle, atteinte à la réputation)
              résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser le
              service.
            </P>
            <P>
              Notre responsabilité totale est limitée au montant payé pour le
              service au cours des 12 derniers mois précédant le fait générateur.
            </P>

            <H2 id="resiliation">10. Résiliation</H2>
            <UL>
              <li>
                Vous pouvez supprimer votre compte à tout moment via{" "}
                <em>Paramètres &gt; Supprimer mes données</em>. La suppression est
                immédiate et irréversible.
              </li>
              <li>
                Nous pouvons suspendre ou résilier votre accès en cas de
                manquement aux CGU, avec préavis si possible.
              </li>
              <li>
                En cas d&apos;arrêt du service, nous vous notifierons au moins 30
                jours à l&apos;avance et permettrons l&apos;export de vos données.
              </li>
            </UL>

            <H2 id="modifications">11. Modifications des CGU</H2>
            <P>
              Toute modification substantielle sera notifiée dans l&apos;application au
              moins 30 jours avant son entrée en vigueur. La poursuite de
              l&apos;utilisation après ce délai vaut acceptation.
            </P>

            <H2 id="droit">12. Droit applicable et juridiction</H2>
            <P>
              Les présentes CGU sont soumises au droit français. Tout litige sera
              porté devant les tribunaux compétents de Paris, sous réserve des
              dispositions impératives de protection des consommateurs.
            </P>

            <H2 id="contact">13. Contact</H2>
            <P>
              Pour toute question :{" "}
              <a className="text-accent" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
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
