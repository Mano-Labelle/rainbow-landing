import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Arc } from "@/components/brand/Arc";

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-ink/70 border-b border-ink-border/40">
      <div className="mx-auto max-w-6xl px-6 py-3.5 flex items-center justify-between">
        <Link href="/" aria-label="Accueil Rainbow">
          <Logo size={22} />
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm text-lavender-muted">
          <Link href="/#fonctionnement" className="hover:text-lavender transition">
            Comment ça marche
          </Link>
          <Link href="/#faq" className="hover:text-lavender transition">
            FAQ
          </Link>
          <div className="relative group">
            <button className="inline-flex items-center gap-1 hover:text-lavender transition">
              Ressources
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="opacity-70">
                <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="invisible absolute right-0 top-full pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="min-w-56 rounded-2xl border border-ink-border/70 bg-ink-panel/95 p-2 shadow-xl backdrop-blur">
                {(
                  [
                    ["💰", "Salaire", "/salaires"],
                    ["🚗", "Voiture de fonction", "/voiture"],
                    ["🧮", "Ma commission", "/ma-commission"],
                    ["🍷", "Vin", "/vin"],
                    ["📊", "Comparaisons", "/comparaisons"],
                    ["📚", "Guides", "/guides"],
                    ["✨", "Bêta", "/beta"],
                  ] as const
                ).map(([emoji, label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-2 rounded-xl px-3 py-2 text-lavender-muted transition hover:bg-ink hover:text-lavender"
                  >
                    <span>{emoji}</span> {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://app.askrainbow.ai"
            className="hidden sm:inline text-sm text-lavender-muted hover:text-lavender transition"
          >
            Se connecter
          </a>
          <a
            href="/#cta"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent text-ink hover:shadow-[0_0_24px_rgba(255,94,196,0.4)] transition"
          >
            <Arc size={14} withGlow={false} strokeW={9} />
            Télécharger
          </a>
        </div>
      </div>
    </nav>
  );
}
