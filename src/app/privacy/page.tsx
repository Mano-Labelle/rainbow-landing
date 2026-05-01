import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Rainbow",
  description:
    "Comment Rainbow collecte, utilise et protège vos données. Conforme RGPD. Couvre les scopes Google (Calendar) et le traitement OpenAI.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Politique de confidentialité — Rainbow",
    description:
      "Données collectées, traitement IA, droits RGPD, intégration Google Calendar.",
    url: "https://askrainbow.ai/privacy",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Privacy Rainbow" }],
  },
};

const LAST_UPDATED = "1er mai 2026";
// Micro-entrepreneur (entreprise individuelle). Replace placeholders.
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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 mb-2 text-lg font-semibold text-lavender">{children}</h3>
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

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative">
          <div className="mx-auto max-w-3xl px-6 pt-16 pb-24">
            <div className="text-[11px] font-mono tracking-[0.18em] text-accent">
              CONFIDENTIALITÉ
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-serif leading-[1.05] tracking-tight">
              Politique de confidentialité
            </h1>
            <p className="mt-4 text-sm font-mono text-lavender-dim">
              Dernière mise à jour : {LAST_UPDATED}
            </p>

            <P>
              {ENTITY_NAME} ({ENTITY_FORM}, « Rainbow », « nous ») édite
              l&apos;application Rainbow, un assistant commercial IA pour
              commerciaux terrain. Cette politique décrit les données que nous
              traitons et vos droits, conformément au Règlement (UE) 2016/679
              (« RGPD »).
            </P>

            <H2 id="responsable">1. Responsable du traitement</H2>
            <P>
              {ENTITY_NAME} — {ENTITY_FORM}, {ENTITY_ADDRESS}. SIRET{" "}
              {ENTITY_SIRET}. Contact :{" "}
              <a className="text-accent" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              .
            </P>

            <H2 id="donnees">2. Données collectées</H2>
            <P>Nous collectons uniquement ce qui est nécessaire au service :</P>
            <UL>
              <li>
                <strong>Identifiants de compte</strong> — nom, adresse email, mot de
                passe haché (Argon2), numéro de téléphone (optionnel).
              </li>
              <li>
                <strong>Messages et requêtes</strong> — texte saisi, mémos vocaux
                (transmis à OpenAI Whisper pour transcription), images (transmis à
                OpenAI Vision pour analyse de cartes de visite, devis, etc.).
              </li>
              <li>
                <strong>Données CRM saisies par vous</strong> — contacts
                professionnels, tâches, rendez-vous, notes.
              </li>
              <li>
                <strong>Données Google Calendar</strong> (si vous connectez votre
                agenda) — voir section « Intégration Google » ci-dessous.
              </li>
              <li>
                <strong>Position approximative</strong> — uniquement quand vous
                recherchez des contacts à proximité. Géocodage via une API tierce.
                Non stockée.
              </li>
              <li>
                <strong>Données techniques</strong> — diagnostics et rapports de
                crash (Sentry), logs serveur (Railway), aucun pixel publicitaire.
              </li>
            </UL>

            <H2 id="ia">3. Traitement par l&apos;IA — OpenAI</H2>
            <P>
              Rainbow utilise les API OpenAI (Whisper, GPT, Vision) pour comprendre
              vos demandes et générer des réponses. Le traitement IA n&apos;est activé
              qu&apos;après votre <strong>consentement explicite</strong> via une modale
              dédiée à votre première utilisation.
            </P>
            <UL>
              <li>
                <strong>OpenAI conserve les données 30 jours maximum</strong> à des
                fins de surveillance des abus, puis les supprime
                automatiquement (<a
                  className="text-accent underline"
                  href="https://openai.com/enterprise-privacy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Enterprise Privacy
                </a>
                ).
              </li>
              <li>
                <strong>OpenAI n&apos;utilise pas vos données pour entraîner ses
                modèles</strong> (API Data Usage Policy).
              </li>
              <li>
                Vous pouvez révoquer votre consentement à tout moment depuis{" "}
                <em>Paramètres &gt; Traitement IA</em>. La révocation prend effet
                immédiatement et bloque tout nouvel envoi à OpenAI.
              </li>
            </UL>

            <H2 id="google">4. Intégration Google (Calendar)</H2>
            <P>
              Si vous connectez votre Google Calendar, Rainbow demande l&apos;accès à
              deux scopes Google :
            </P>
            <UL>
              <li>
                <code className="font-mono text-sm bg-ink-surface/40 px-1.5 py-0.5 rounded">
                  https://www.googleapis.com/auth/calendar
                </code>{" "}
                — lecture et écriture de vos événements de calendrier.
              </li>
              <li>
                <code className="font-mono text-sm bg-ink-surface/40 px-1.5 py-0.5 rounded">
                  https://www.googleapis.com/auth/userinfo.email
                </code>{" "}
                — votre adresse email Google, pour identifier le compte connecté.
              </li>
            </UL>
            <H3>Pourquoi cet accès ?</H3>
            <UL>
              <li>
                <strong>Lecture</strong> : afficher vos rendez-vous dans
                l&apos;application, répondre à des questions comme « mon prochain
                rendez-vous avec Marie ? », générer le digest matinal et les briefs
                pré-rendez-vous.
              </li>
              <li>
                <strong>Écriture</strong> : créer un événement quand vous dictez «
                rendez-vous avec Paul demain 14h », mettre à jour ou supprimer un
                événement quand vous le demandez à l&apos;assistant.
              </li>
            </UL>
            <H3>Ce que nous stockons</H3>
            <UL>
              <li>
                <strong>Tokens OAuth</strong> (access + refresh) chiffrés au repos
                (AES-256-GCM, clé de chiffrement gérée séparément des données).
              </li>
              <li>
                <strong>Mappings événement</strong> — pour relier un rendez-vous
                Rainbow à son événement Google correspondant (id Google + id
                Rainbow + id calendrier).
              </li>
              <li>
                <strong>Cache léger d&apos;événements à venir</strong> — titre, date,
                participants, lieu — pour servir l&apos;agenda hors-ligne et générer
                les briefings sans appeler Google à chaque ouverture d&apos;écran.
              </li>
            </UL>
            <H3>Ce que nous NE faisons PAS</H3>
            <UL>
              <li>Aucun partage de vos données Google avec des tiers.</li>
              <li>
                Aucune utilisation pour de la publicité, du profilage marketing ou
                de l&apos;entraînement de modèles.
              </li>
              <li>
                Aucune lecture d&apos;événements antérieurs à 6 mois (limite de
                requête).
              </li>
            </UL>
            <H3>Comment révoquer l&apos;accès Google</H3>
            <P>
              Deux options :
            </P>
            <UL>
              <li>
                Dans Rainbow : <em>Paramètres &gt; Calendrier &gt; Déconnecter
                Google</em>. Les tokens sont effacés et l&apos;accès est révoqué côté
                Google.
              </li>
              <li>
                Sur Google :{" "}
                <a
                  className="text-accent underline"
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noreferrer"
                >
                  myaccount.google.com/permissions
                </a>{" "}
                — révoquer Rainbow.
              </li>
            </UL>
            <P>
              <strong>Conformité Google API Services User Data Policy.</strong>{" "}
              L&apos;utilisation et le transfert par Rainbow des informations reçues
              des API Google respectent la{" "}
              <a
                className="text-accent underline"
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noreferrer"
              >
                Google API Services User Data Policy
              </a>
              , y compris les exigences d&apos;utilisation limitée (Limited Use).
            </P>

            <H2 id="finalites">5. Finalités du traitement</H2>
            <UL>
              <li>Fournir l&apos;assistant commercial IA (transcription, réponse, exécution d&apos;actions).</li>
              <li>Stocker votre CRM (contacts, tâches, notes, rendez-vous).</li>
              <li>Synchroniser votre agenda Google avec vos rendez-vous Rainbow.</li>
              <li>Vous envoyer des notifications et rappels (avec votre consentement push).</li>
              <li>Diagnostiquer les erreurs et améliorer la qualité du service.</li>
            </UL>
            <P>
              Bases légales : exécution du contrat (article 6.1.b du RGPD) pour les
              fonctions essentielles ; consentement (article 6.1.a) pour le
              traitement IA et les notifications.
            </P>

            <H2 id="sous-traitants">6. Sous-traitants et hébergement</H2>
            <UL>
              <li>
                <strong>Neon</strong> (PostgreSQL managé) — hébergement base de
                données dans l&apos;Union européenne (Francfort, Allemagne).
              </li>
              <li>
                <strong>Railway</strong> — hébergement du serveur backend.
              </li>
              <li>
                <strong>OpenAI</strong> — traitement IA des messages, images, audio
                (États-Unis, sous Standard Contractual Clauses).
              </li>
              <li>
                <strong>Google</strong> — agenda (lecture/écriture, sous votre
                contrôle via OAuth).
              </li>
              <li>
                <strong>Sentry</strong> — diagnostics d&apos;erreurs.
              </li>
              <li>
                <strong>Expo / EAS</strong> — distribution mobile et notifications
                push (APNs Apple, FCM Google).
              </li>
            </UL>

            <H2 id="conservation">7. Durée de conservation</H2>
            <UL>
              <li>
                <strong>Compte actif</strong> : tant que votre compte existe.
              </li>
              <li>
                <strong>Historique de conversation</strong> : conservé pour
                permettre la reprise de contexte. Vous pouvez le purger via{" "}
                <em>Paramètres &gt; Supprimer mes données</em>.
              </li>
              <li>
                <strong>Données envoyées à OpenAI</strong> : 30 jours maximum côté
                OpenAI.
              </li>
              <li>
                <strong>Tokens Google</strong> : effacés à la déconnexion ou à la
                suppression du compte.
              </li>
              <li>
                <strong>Logs techniques</strong> : 30 jours sur Sentry et Railway.
              </li>
              <li>
                <strong>Sauvegardes</strong> : 7 jours roulants, automatiques.
              </li>
            </UL>

            <H2 id="securite">8. Sécurité</H2>
            <UL>
              <li>Communications HTTPS/TLS 1.3.</li>
              <li>Mots de passe hachés Argon2id.</li>
              <li>Tokens d&apos;authentification dans le trousseau sécurisé de l&apos;appareil (Keychain iOS, Keystore Android).</li>
              <li>Tokens Google chiffrés AES-256-GCM au repos.</li>
              <li>Isolation des organisations via Row-Level Security PostgreSQL.</li>
              <li>Accès interne restreint, journalisé.</li>
            </UL>

            <H2 id="droits-rgpd">9. Vos droits (RGPD)</H2>
            <P>Vous disposez des droits suivants :</P>
            <UL>
              <li><strong>Accès</strong> — obtenir une copie de vos données.</li>
              <li><strong>Rectification</strong> — corriger vos informations.</li>
              <li><strong>Effacement</strong> — supprimer toutes vos données (<em>Paramètres &gt; Supprimer mes données</em>, immédiat).</li>
              <li><strong>Portabilité</strong> — recevoir vos données dans un format standard (CSV, JSON).</li>
              <li><strong>Opposition</strong> — refuser certains traitements (toggle IA dans les Paramètres).</li>
              <li><strong>Retrait du consentement</strong> — désactiver le traitement IA, déconnecter Google, à tout moment.</li>
              <li><strong>Réclamation</strong> — auprès de la CNIL (<a className="text-accent underline" href="https://www.cnil.fr" target="_blank" rel="noreferrer">cnil.fr</a>) si vous estimez que vos droits ne sont pas respectés.</li>
            </UL>
            <P>
              Pour exercer vos droits, écrivez à{" "}
              <a className="text-accent" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              . Réponse sous 30 jours maximum.
            </P>

            <H2 id="enfants">10. Mineurs</H2>
            <P>
              Rainbow n&apos;est pas destiné aux personnes de moins de 16 ans. Nous
              ne collectons pas sciemment de données de mineurs.
            </P>

            <H2 id="modifications">11. Modifications</H2>
            <P>
              Toute modification importante de cette politique sera notifiée dans
              l&apos;application au moins 30 jours avant son entrée en vigueur. La
              date de dernière mise à jour figure en haut de cette page.
            </P>

            <H2 id="contact">12. Contact</H2>
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
