interface FakeQRProps {
  size?: number;
}

/**
 * Decorative QR code. Not functional — just a confident-looking square
 * with a Rainbow arc baked into the center module.
 */
export function FakeQR({ size = 180 }: FakeQRProps) {
  const modules = 21;
  const cell = 100 / modules;

  // Deterministic pseudo-random pattern so SSR/CSR match.
  const pattern: boolean[][] = [];
  for (let y = 0; y < modules; y++) {
    const row: boolean[] = [];
    for (let x = 0; x < modules; x++) {
      const v = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      row.push(v - Math.floor(v) > 0.55);
    }
    pattern.push(row);
  }

  // Finder squares in 3 corners
  const finder = (fx: number, fy: number) => (
    <g transform={`translate(${fx * cell},${fy * cell})`} key={`${fx}-${fy}`}>
      <rect width={cell * 7} height={cell * 7} fill="currentColor" />
      <rect
        x={cell}
        y={cell}
        width={cell * 5}
        height={cell * 5}
        fill="var(--color-ink-panel)"
      />
      <rect
        x={cell * 2}
        y={cell * 2}
        width={cell * 3}
        height={cell * 3}
        fill="currentColor"
      />
    </g>
  );

  const inFinder = (x: number, y: number) => {
    if (x < 7 && y < 7) return true;
    if (x > modules - 8 && y < 7) return true;
    if (x < 7 && y > modules - 8) return true;
    return false;
  };

  return (
    <div
      className="relative inline-block rounded-2xl bg-lavender p-4 text-ink"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        {pattern.map((row, y) =>
          row.map((on, x) =>
            on && !inFinder(x, y) ? (
              <rect
                key={`${x}-${y}`}
                x={x * cell}
                y={y * cell}
                width={cell * 0.9}
                height={cell * 0.9}
                rx={cell * 0.2}
                fill="currentColor"
              />
            ) : null,
          ),
        )}
        {finder(0, 0)}
        {finder(modules - 7, 0)}
        {finder(0, modules - 7)}
        {/* Rainbow center badge */}
        <g transform={`translate(50, 50)`}>
          <circle r="11" fill="var(--color-ink-panel)" />
          <g transform="translate(-9, -2)">
            {[
              { r: 8, c: "#FF5EC4" },
              { r: 6.5, c: "#FFA060" },
              { r: 5, c: "#6BE9B0" },
              { r: 3.5, c: "#5BB8FF" },
            ].map((a, i) => (
              <path
                key={i}
                d={`M ${9 - a.r} 4 A ${a.r} ${a.r} 0 0 1 ${9 + a.r} 4`}
                fill="none"
                stroke={a.c}
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
