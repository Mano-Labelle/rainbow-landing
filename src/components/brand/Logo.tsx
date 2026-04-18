import { Arc } from "./Arc";

interface LogoProps {
  size?: number;
  showWord?: boolean;
}

export function Logo({ size = 28, showWord = true }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <Arc size={size * 1.3} withGlow />
      {showWord && (
        <span className="font-serif text-[1.1em] tracking-tight">Rainbow</span>
      )}
    </span>
  );
}
