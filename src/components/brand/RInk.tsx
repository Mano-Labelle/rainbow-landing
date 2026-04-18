interface RInkProps {
  children: React.ReactNode;
  variant?: "full" | "warm";
}

/** Rainbow-ink gradient text. Use for keywords only (not sentences). */
export function RInk({ children, variant = "warm" }: RInkProps) {
  return <span className={variant === "warm" ? "rink-warm" : "rink"}>{children}</span>;
}
