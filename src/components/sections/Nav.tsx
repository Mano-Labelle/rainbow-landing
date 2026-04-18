import { Logo } from "@/components/brand/Logo";

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-ink/70 border-b border-ink-border/40">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Logo size={22} />
        <div className="hidden md:flex items-center gap-8 text-sm text-lavender-muted">
          <a href="#fonctionnement" className="hover:text-lavender transition">Fonctionnement</a>
          <a href="#features" className="hover:text-lavender transition">Fonctionnalités</a>
          <a href="#avis" className="hover:text-lavender transition">Avis terrain</a>
          <a href="#faq" className="hover:text-lavender transition">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://app.askrainbow.ai"
            className="hidden sm:inline text-sm text-lavender-muted hover:text-lavender transition"
          >
            Se connecter
          </a>
          <a
            href="https://app.askrainbow.ai"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent text-ink hover:shadow-[0_0_24px_rgba(255,94,196,0.4)] transition"
          >
            Ouvrir Rainbow
          </a>
        </div>
      </div>
    </nav>
  );
}
