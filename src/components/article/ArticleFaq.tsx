"use client";

import { useState } from "react";

export function ArticleFaq({
  items,
}: {
  items: Array<{ q: string; a: string }>;
}) {
  const [open, setOpen] = useState<number | null>(null);
  if (!items.length) return null;
  return (
    <section className="max-w-3xl mx-auto px-6 py-10 space-y-4">
      <h2 className="text-[28px] md:text-[32px] font-serif tracking-tight text-lavender">
        Questions fréquentes
      </h2>
      <div className="divide-y divide-ink-border/40 border-y border-ink-border/40">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                type="button"
                className="w-full py-4 text-left flex items-center justify-between gap-4 hover:text-accent transition"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="font-medium text-[17px] text-lavender">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`text-accent text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {isOpen ? (
                <p className="pb-4 text-lavender-muted leading-relaxed text-[16px] pr-8">
                  {item.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
