"use client";

import { useState } from "react";
import { FAQ as FAQ_ITEMS } from "@/content/direction";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <div className="text-[11px] font-mono tracking-[0.18em] text-lavender-dim mb-6">
          · 05 · QUESTIONS FRÉQUENTES ·
        </div>
        <h2 className="text-4xl md:text-5xl font-serif leading-tight">
          Questions fréquentes.
        </h2>

        <div className="mt-12 divide-y divide-ink-border/40 border-y border-ink-border/40">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-medium group-hover:text-accent transition">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full border border-ink-border flex items-center justify-center transition-transform ${
                      isOpen ? "rotate-45 bg-accent text-ink border-accent" : "text-lavender-muted"
                    }`}
                    aria-hidden
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10">
                      <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base leading-relaxed text-lavender-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
