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
          <Link
            href="/#fonctionnement"
            className="hover:text-lavender transition"
          >
            Comment ça marche
          </Link>
          <Link href="/guides" className="hover:text-lavender transition">
            Guides
          </Link>
          <Link
            href="/comparaisons"
            className="hover:text-lavender transition"
          >
            Comparaisons
          </Link>
          <Link href="/#faq" className="hover:text-lavender transition">
            FAQ
          </Link>
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
