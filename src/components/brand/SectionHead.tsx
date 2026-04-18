interface SectionHeadProps {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
}

/** Eyebrow index + label, then serif H2, then optional intro paragraph. */
export function SectionHead({
  index,
  label,
  title,
  intro,
  align = "center",
}: SectionHeadProps) {
  const alignCls =
    align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignCls} max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
      <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-lavender-dim">
        · {index} · {label} ·
      </div>
      <h2 className="mt-3 text-3xl md:text-5xl font-serif leading-[1.05] tracking-tight text-lavender">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-lavender-muted leading-relaxed max-w-2xl">{intro}</p>
      )}
    </div>
  );
}
