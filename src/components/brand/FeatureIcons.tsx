/**
 * Line-icon set for the Features grid. One per feature, in the same stroke
 * weight and size so the 8 cards read as a family.
 */

const STROKE = 1.6;

function Wrap({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IconMic() {
  return (
    <Wrap>
      <rect x="11" y="4" width="6" height="12" rx="3" />
      <path d="M6 12 a8 8 0 0 0 16 0 M14 20 v3" />
    </Wrap>
  );
}

export function IconChat() {
  return (
    <Wrap>
      <path d="M5 7 a2 2 0 0 1 2 -2 h14 a2 2 0 0 1 2 2 v10 a2 2 0 0 1 -2 2 h-8 l-5 4 v-4 h-1 a2 2 0 0 1 -2 -2 z" />
      <path d="M10 12 h8 M10 15 h5" />
    </Wrap>
  );
}

export function IconExtract() {
  return (
    <Wrap>
      <path d="M5 7 h12 M5 12 h16 M5 17 h10" />
      <circle cx="22" cy="7" r="2.5" fill="currentColor" stroke="none" />
    </Wrap>
  );
}

export function IconBriefing() {
  return (
    <Wrap>
      <rect x="4" y="6" width="20" height="16" rx="2" />
      <path d="M4 11 h20 M9 3 v5 M19 3 v5" />
      <path d="M9 16 h5" stroke="currentColor" />
      <circle cx="18" cy="16" r="2" />
    </Wrap>
  );
}

export function IconCSV() {
  return (
    <Wrap>
      <path d="M8 3 h9 l4 4 v18 a1 1 0 0 1 -1 1 h-12 a1 1 0 0 1 -1 -1 v-22 a1 1 0 0 1 1 -1 z" />
      <path d="M17 3 v4 h4" />
      <path d="M14 14 v6 M10 17 L14 20 L18 17" />
    </Wrap>
  );
}

export function IconPlatforms() {
  return (
    <Wrap>
      <rect x="3" y="7" width="10" height="16" rx="1.5" />
      <path d="M5 9 h6 M5 21 h6" />
      <rect x="15" y="4" width="10" height="14" rx="1" />
      <path d="M15 15 h10 M18 21 h4" />
    </Wrap>
  );
}

export function IconOffline() {
  return (
    <Wrap>
      <path d="M4 17 a6 6 0 0 1 12 -2 a4 4 0 0 1 4 6 h-14 a2.5 2.5 0 0 1 -2 -4" />
      <path d="M5 5 L23 23" />
    </Wrap>
  );
}

export function IconShield() {
  return (
    <Wrap>
      <path d="M14 3 l8 3 v7 c0 6 -4 9 -8 11 c-4 -2 -8 -5 -8 -11 v-7 z" />
      <path d="M10 13 l3 3 l5 -5" />
    </Wrap>
  );
}

export const FEATURE_ICONS = [
  IconMic,
  IconChat,
  IconExtract,
  IconBriefing,
  IconCSV,
  IconPlatforms,
  IconOffline,
  IconShield,
];
