interface RainbowDividerProps {
  flip?: boolean;
  className?: string;
}

/** A thin horizontal rainbow arc used as a section transition. */
export function RainbowDivider({ flip = false, className }: RainbowDividerProps) {
  return (
    <div className={`w-full ${className ?? ""}`} aria-hidden>
      <svg
        viewBox="0 0 1000 60"
        preserveAspectRatio="none"
        width="100%"
        height="60"
        style={{ transform: flip ? "rotate(180deg)" : undefined }}
      >
        <defs>
          <linearGradient id="div-grad" x1="0" x2="1">
            <stop offset="0" stopColor="#B57DFF" stopOpacity="0" />
            <stop offset="0.15" stopColor="#B57DFF" stopOpacity="0.7" />
            <stop offset="0.35" stopColor="#FF5EC4" stopOpacity="0.9" />
            <stop offset="0.55" stopColor="#FFA060" stopOpacity="0.9" />
            <stop offset="0.75" stopColor="#F7E07A" stopOpacity="0.7" />
            <stop offset="1" stopColor="#6BE9B0" stopOpacity="0" />
          </linearGradient>
          <filter id="div-blur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <path
          d="M 0 50 Q 500 -10 1000 50"
          fill="none"
          stroke="url(#div-grad)"
          strokeWidth="2"
          filter="url(#div-blur)"
        />
        <path
          d="M 0 50 Q 500 -10 1000 50"
          fill="none"
          stroke="url(#div-grad)"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}
