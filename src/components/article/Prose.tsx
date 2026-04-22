import type { ArticleSection, ArticleParagraph } from "@/content/articles";

function Paragraphs({ items }: { items: ArticleParagraph[] }) {
  return (
    <div className="space-y-4">
      {items.map((p, i) => (
        <div key={i} className="space-y-3">
          <p className="text-lavender leading-relaxed text-[17px]">
            <span className="font-medium">{p.lead}</span>
            {p.body && " " + p.body}
          </p>
          {p.bullets?.length ? (
            <ul className="space-y-2 pl-1">
              {p.bullets.map((b, j) => (
                <li
                  key={j}
                  className="pl-5 relative text-lavender-muted leading-relaxed before:content-['•'] before:absolute before:left-0 before:text-accent"
                >
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function Table({ table }: { table: NonNullable<ArticleSection["table"]> }) {
  return (
    <div className="overflow-x-auto my-4 rounded-lg border border-ink-border/60">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-ink-panel/60 text-lavender">
          <tr>
            {table.headers.map((h, i) => (
              <th
                key={i}
                className="text-left font-medium px-4 py-3 border-b border-ink-border/60"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr
              key={i}
              className="even:bg-ink-panel/20 border-b border-ink-border/30 last:border-0"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3 text-lavender-muted align-top"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.caption ? (
        <div className="text-xs text-lavender-dim px-4 py-2 bg-ink-panel/40">
          {table.caption}
        </div>
      ) : null}
    </div>
  );
}

function Callout({ kind, text }: NonNullable<ArticleSection["callout"]>) {
  const styles: Record<typeof kind, string> = {
    info: "border-spec-blue/40 bg-spec-blue/5 text-spec-blue",
    warn: "border-spec-orange/40 bg-spec-orange/5 text-spec-orange",
    tip: "border-spec-green/40 bg-spec-green/5 text-spec-green",
  };
  return (
    <div
      className={`my-4 border-l-2 rounded-sm px-4 py-3 text-sm ${styles[kind]}`}
    >
      {text}
    </div>
  );
}

function Quote({ text, attribution }: { text: string; attribution: string }) {
  return (
    <blockquote className="my-6 pl-5 border-l-2 border-accent/60">
      <p className="font-serif text-[19px] text-lavender italic leading-relaxed">
        « {text} »
      </p>
      <footer className="mt-2 text-sm text-lavender-dim not-italic">
        — {attribution}
      </footer>
    </blockquote>
  );
}

export function Prose({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section, i) => (
        <section key={i} className="space-y-5">
          <h2 className="text-[28px] md:text-[32px] font-serif tracking-tight text-lavender">
            {section.h2}
          </h2>
          <Paragraphs items={section.paragraphs} />
          {section.h3s?.map((h3, j) => (
            <div key={j} className="mt-6 space-y-3">
              <h3 className="text-[20px] font-sans font-semibold text-lavender">
                {h3.h3}
              </h3>
              <Paragraphs items={h3.paragraphs} />
            </div>
          ))}
          {section.table ? <Table table={section.table} /> : null}
          {section.quote ? (
            <Quote text={section.quote.text} attribution={section.quote.attribution} />
          ) : null}
          {section.callout ? (
            <Callout kind={section.callout.kind} text={section.callout.text} />
          ) : null}
        </section>
      ))}
    </div>
  );
}
