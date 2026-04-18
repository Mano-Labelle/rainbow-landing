"use client";

import { useEffect, useRef, useState } from "react";
import { RInk } from "@/components/brand/RInk";

const ROWS = [
  { label: "Contacts croisés", bad: "oubliés", good: "fiche créée" },
  { label: "Prix, délai, concurrent", bad: "flou", good: "noté, daté" },
  { label: "Relances à faire", bad: "post-it", good: "liste du jour" },
  { label: "Saisie CRM le soir", bad: "2h30", good: "0 min" },
  { label: "Rentrer à la maison", bad: "21h", good: "18h" },
];

export function ProblemVisual() {
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setOn(true);
      },
      { threshold: 0.2 },
    );
    io.observe(node);
    const t = setTimeout(() => setOn(true), 1500);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="mt-10 rounded-2xl border border-ink-border/60 bg-ink-panel/40 p-6 md:p-8"
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6 pb-4 border-b border-ink-border/60">
        <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-lavender-dim">
          Sans Rainbow
        </div>
        <div aria-hidden className="text-lavender-dim text-xs">
          ›
        </div>
        <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-lavender text-right md:text-left">
          Avec <RInk>Rainbow</RInk>
        </div>
      </div>

      <div>
        {ROWS.map((r, i) => (
          <div
            key={r.label}
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6 py-3 border-b border-ink-border/30 last:border-b-0 transition-all duration-700"
            style={{
              opacity: on ? 1 : 0,
              transform: on ? "translateY(0)" : "translateY(8px)",
              transitionDelay: `${i * 120}ms`,
            }}
          >
            <div className="text-sm text-lavender-dim line-through decoration-lavender-dim/50">
              {r.bad}
            </div>
            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-lavender-dim text-center">
              {r.label}
            </div>
            <div className="flex items-center gap-2 text-sm text-lavender font-medium">
              <span className="text-accent" aria-hidden>
                ›
              </span>
              <span>{r.good}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
