import { Arc } from "./Arc";

/** Replaces dots/chevrons in lists with a small warm arc. */
export function ArcBullet({ size = 14 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-end justify-center align-middle mr-2"
      style={{ width: size, height: size * 0.55 }}
      aria-hidden
    >
      <Arc size={size} withGlow={false} strokeW={6} warm />
    </span>
  );
}
