import { DIRECTION } from "@/content/direction";
import { Logo } from "@/components/brand/Logo";
import { RainbowDivider } from "@/components/brand/RainbowDivider";

export function Footer() {
  return (
    <footer className="relative">
      <RainbowDivider />
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-[1.4fr_repeat(4,1fr)] gap-10">
          <div>
            <Logo size={28} />
            <p className="mt-4 text-sm text-lavender-muted max-w-xs leading-relaxed">
              L&apos;assistant commercial IA pour les commerciaux terrain.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-lavender-dim font-mono">
              <span className="w-2 h-2 rounded-full bg-spec-green animate-pulse" />
              askrainbow.ai · app.askrainbow.ai
            </div>
          </div>
          {DIRECTION.footer.sections.map((s) => (
            <div key={s.title}>
              <div className="text-xs font-mono tracking-[0.15em] text-lavender-dim mb-4">
                {s.title.toUpperCase()}
              </div>
              <ul className="space-y-2.5">
                {s.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-lavender-muted hover:text-lavender transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-ink-border/40 flex flex-wrap items-center justify-between gap-3 text-xs text-lavender-dim font-mono">
          <span>© 2026 Rainbow AI · SAS · Paris, France</span>
          <span>Hébergement français · RGPD</span>
        </div>
      </div>
    </footer>
  );
}
