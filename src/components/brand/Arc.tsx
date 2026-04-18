"use client";

import { useId } from "react";

interface ArcProps {
  size?: number;
  withGlow?: boolean;
  warm?: boolean;
  strokeW?: number;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * The signature Rainbow mark — concentric rainbow arcs.
 * Use `warm` variant (4 arcs, pink→peach→cream→violet) to avoid pride-flag read.
 */
export function Arc({
  size = 24,
  withGlow = true,
  warm = false,
  strokeW = 5,
  style,
  className,
}: ArcProps) {
  const id = useId();
  const filterId = `arc-${id}`;

  const arcs = warm
    ? [
        { r: 42, c: "#FF5EC4" },
        { r: 33, c: "#FFA060" },
        { r: 24, c: "#FFD88A" },
        { r: 15, c: "#B57DFF" },
      ]
    : [
        { r: 42, c: "#FF5EC4" },
        { r: 36, c: "#FFA060" },
        { r: 30, c: "#F7E07A" },
        { r: 24, c: "#6BE9B0" },
        { r: 18, c: "#5BB8FF" },
        { r: 12, c: "#B57DFF" },
      ];

  return (
    <svg
      viewBox="0 0 100 60"
      width={size}
      height={size * 0.6}
      className={className}
      style={{ overflow: "visible", ...style }}
      aria-hidden
    >
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {arcs.map((a, i) => (
        <path
          key={i}
          d={`M ${50 - a.r} 52 A ${a.r} ${a.r} 0 0 1 ${50 + a.r} 52`}
          fill="none"
          stroke={a.c}
          strokeWidth={strokeW}
          strokeLinecap="round"
          filter={withGlow ? `url(#${filterId})` : undefined}
        />
      ))}
    </svg>
  );
}
