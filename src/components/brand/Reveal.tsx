"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  as?: "div" | "section" | "span";
  className?: string;
  /** Translate amount when hidden. Default 16px. */
  y?: number;
}

/**
 * Fade + slide in when the element enters the viewport.
 * Respects prefers-reduced-motion (CSS in globals cuts transition duration).
 */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
  y = 16,
}: RevealProps) {
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const style: React.CSSProperties = {
    opacity: on ? 1 : 0,
    transform: on ? "translateY(0)" : `translateY(${y}px)`,
    transition: `opacity 700ms ease, transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1)`,
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
  };

  if (as === "section") {
    return (
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className={className}
        style={style}
      >
        {children}
      </section>
    );
  }
  if (as === "span") {
    return (
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className={className}
        style={style}
      >
        {children}
      </span>
    );
  }
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}
