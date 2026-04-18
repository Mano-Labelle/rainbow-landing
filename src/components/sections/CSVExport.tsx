import { SectionHead } from "@/components/brand/SectionHead";

const TOOLS = [
  "HubSpot",
  "Salesforce",
  "Pipedrive",
  "Sellsy",
  "Axonaut",
  "Zoho",
  "Excel",
];

const ROWS = [
  { n: "Benoît Lemaire", c: "Moreau SA", r: "Chef d'atelier", l: "2026-04-18", x: "2026-05-06" },
  { n: "Céline Durand", c: "Ateliers Durand", r: "Acheteuse", l: "2026-04-22", x: "2026-05-07" },
  { n: "Karim Benali", c: "Bouygues Én.", r: "Resp. techn.", l: "2026-02-28", x: "—" },
  { n: "Agnès Roche", c: "Schneider Sud", r: "Dir. achats", l: "2026-03-04", x: "2026-05-12" },
  { n: "Farid Ouazzani", c: "Kontek", r: "Commercial", l: "2026-04-30", x: "—" },
];

export function CSVExport() {
  return (
    <section id="csv" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="rounded-3xl border border-ink-border/60 bg-ink-panel/40 overflow-hidden grid md:grid-cols-2 gap-8 md:gap-0">
          <div className="p-8 md:p-12">
            <SectionHead
              index="06"
              label="Vos données restent les vôtres"
              title={<>Un clic. Un fichier. Vos données.</>}
              align="left"
            />
            <p className="mt-6 text-lavender-muted leading-relaxed max-w-lg">
              Rainbow n&apos;est pas un CRM. Tout ce qu&apos;il note — contacts,
              comptes-rendus, tâches, relances — s&apos;exporte en CSV à tout
              moment. Importez-le dans HubSpot, Salesforce, Pipedrive, Sellsy,
              Axonaut, ou gardez-le dans un tableur. Vous partez avec vos données,
              pas de verrou.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3 py-1 text-xs rounded-full border border-ink-border bg-ink/50 text-lavender-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative p-6 md:p-10 bg-gradient-to-br from-ink-elev to-ink border-t md:border-t-0 md:border-l border-ink-border/60">
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(255,94,196,0.1), transparent 70%)",
              }}
            />
            <div className="relative rounded-xl border border-ink-border bg-ink/80 overflow-hidden font-mono text-[11px]">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-ink-border/60 bg-ink-panel/70">
                <span className="w-2.5 h-2.5 rounded-full bg-spec-green" />
                <span className="flex-1 text-lavender-muted truncate">
                  rainbow_contacts_2026-05-06.csv
                </span>
                <span className="text-lavender-dim">42 Ko</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[460px]">
                  <thead>
                    <tr className="text-left text-[10px] tracking-[0.08em] uppercase text-lavender-dim bg-ink-panel/40">
                      <th className="font-normal px-3 py-2">name</th>
                      <th className="font-normal px-3 py-2">company</th>
                      <th className="font-normal px-3 py-2">role</th>
                      <th className="font-normal px-3 py-2">last_visit</th>
                      <th className="font-normal px-3 py-2">next</th>
                    </tr>
                  </thead>
                  <tbody className="text-lavender">
                    {ROWS.map((r) => (
                      <tr
                        key={r.n}
                        className="border-t border-ink-border/40"
                      >
                        <td className="px-3 py-1.5">{r.n}</td>
                        <td className="px-3 py-1.5 text-lavender-muted">{r.c}</td>
                        <td className="px-3 py-1.5 text-lavender-muted">{r.r}</td>
                        <td className="px-3 py-1.5 text-lavender-muted">{r.l}</td>
                        <td className="px-3 py-1.5 text-lavender-muted">{r.x}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-3 py-2 border-t border-ink-border/60 text-lavender-dim text-[10px]">
                + 238 lignes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
