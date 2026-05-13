import { ANDROID_APP_URL, IOS_APP_URL, WEB_APP_URL } from "@/content/app-urls";

interface StoreButtonProps {
  kind: "apple" | "google" | "web";
  variant?: "primary" | "ghost";
  /** Override the default href. When omitted, resolves to the canonical URL for the kind. */
  href?: string;
}

const DEFAULT_HREF: Record<StoreButtonProps["kind"], string> = {
  apple: IOS_APP_URL,
  google: ANDROID_APP_URL,
  web: WEB_APP_URL,
};

export function StoreButton({
  kind,
  variant = "primary",
  href,
}: StoreButtonProps) {
  const finalHref = href ?? DEFAULT_HREF[kind];

  const label =
    kind === "apple"
      ? "App Store"
      : kind === "google"
        ? "Google Play"
        : "Version web";
  const small =
    kind === "apple"
      ? "Téléchargez sur l'"
      : kind === "google"
        ? "Téléchargez sur"
        : "Essayez en ligne";

  const base =
    "inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border transition select-none";
  const skin =
    variant === "primary"
      ? "bg-lavender text-ink border-lavender hover:shadow-[0_0_24px_rgba(244,239,255,0.25)]"
      : "bg-ink-panel/60 text-lavender border-ink-border hover:border-lavender-muted";

  const body = (
    <>
      <span className="shrink-0" aria-hidden>
        {kind === "apple" ? (
          <AppleGlyph />
        ) : kind === "google" ? (
          <PlayGlyph />
        ) : (
          <WebGlyph />
        )}
      </span>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[9px] uppercase tracking-[0.12em] opacity-70 font-mono">
          {small}
        </span>
        <span className="text-sm font-semibold">{label}</span>
      </span>
    </>
  );

  return (
    <a href={finalHref} className={`${base} ${skin}`}>
      {body}
    </a>
  );
}

function AppleGlyph() {
  return (
    <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg width="20" height="22" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="sb-pg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#00B2FF" />
          <stop offset="1" stopColor="#00E676" />
        </linearGradient>
      </defs>
      <path
        d="M3.5 3 L14 12 L3.5 21 Z"
        fill="url(#sb-pg)"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.95"
      />
      <path d="M14 12 L20 8 L20 16 Z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function WebGlyph() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
    </svg>
  );
}
