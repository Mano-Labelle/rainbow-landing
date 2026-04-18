import { Arc } from "@/components/brand/Arc";
import { RInk } from "@/components/brand/RInk";
import { SectionHead } from "@/components/brand/SectionHead";

type Contact = {
  name: string;
  role: string;
  company: string;
  lastContact: string;
  action: string;
  actionTone?: "warn" | "default";
  silence: number;
};

const CONTACTS: Contact[] = [
  {
    name: "Benoît Lemaire",
    role: "Chef d'atelier",
    company: "Moreau SA",
    lastContact: "09:15 · carte scannée",
    action: "Devis 420 · demain",
    actionTone: "warn",
    silence: 0,
  },
  {
    name: "Céline Durand",
    role: "Directrice",
    company: "Ateliers Durand",
    lastContact: "14:05 · visite (voix)",
    action: "Renvoyer devis",
    silence: 0,
  },
  {
    name: "Fabrice Ménard",
    role: "Acheteur",
    company: "Bouygues Énergies",
    lastContact: "Lun. 28 avr.",
    action: "Point technique",
    silence: 64,
  },
  {
    name: "Sonia Rastel",
    role: "Responsable achats",
    company: "Schneider Sud",
    lastContact: "12 mars",
    action: "Relance trimestre",
    silence: 72,
  },
  {
    name: "Youssef Amara",
    role: "Directeur travaux",
    company: "Vinci Construction",
    lastContact: "04 mars",
    action: "Proposer RDV",
    silence: 80,
  },
];

const SIDEBAR = [
  { icon: "◼", name: "Contacts", count: "1 248", active: true },
  { icon: "◐", name: "Tâches", count: "34" },
  { icon: "◻", name: "Journal", count: "212" },
  { icon: "◇", name: "Comptes", count: "87" },
  { icon: "◎", name: "Relances", count: "11" },
];

export function WebAdmin() {
  return (
    <section id="web" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHead
          index="03"
          label="Rainbow sur ordinateur"
          title={
            <>
              L&apos;IA vit dans l&apos;app. Le web, c&apos;est <RInk>la base</RInk>.
            </>
          }
          intro="Sur téléphone, tu parles à Rainbow. Sur ordinateur, tu passes en revue : tes contacts, tes tâches, ton journal. Tu exportes. Tu corriges. Tu pilotes."
        />

        <div className="mt-12 rounded-2xl border border-ink-border/60 overflow-hidden shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] bg-ink-panel/40">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 px-4 py-2.5 border-b border-ink-border/60 bg-ink/70">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-ink-border" />
              <span className="w-3 h-3 rounded-full bg-ink-border" />
              <span className="w-3 h-3 rounded-full bg-ink-border" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="font-mono text-[11px] text-lavender-dim tracking-wide bg-ink-panel/70 border border-ink-border/60 rounded-md px-3 py-1">
                app.askrainbow.ai / contacts
              </div>
            </div>
            <div className="font-mono text-[10px] text-lavender-dim tracking-[0.14em] uppercase hidden md:block">
              web · base de données
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <aside className="border-b md:border-b-0 md:border-r border-ink-border/60 bg-ink/40 p-3">
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-lavender-dim px-2 py-1">
                Espace de travail
              </div>
              <div className="mt-1 space-y-0.5">
                {SIDEBAR.map((s) => (
                  <div
                    key={s.name}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm ${
                      s.active
                        ? "bg-accent/15 text-lavender border border-accent/30"
                        : "text-lavender-muted border border-transparent hover:bg-ink-panel/50"
                    }`}
                  >
                    <span className="text-[11px] text-accent w-4">{s.icon}</span>
                    <span className="flex-1">{s.name}</span>
                    <span className="font-mono text-[10px] text-lavender-dim">
                      {s.count}
                    </span>
                  </div>
                ))}
              </div>

              <div className="my-4 h-px bg-ink-border/60" />

              <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-lavender-dim px-2">
                Vues enregistrées
              </div>
              <div className="mt-2 space-y-1 px-2 text-[12px] text-lavender-muted">
                <div>Silence &gt; 60 jours</div>
                <div>Devis en attente</div>
                <div>Tournée Sud · cette semaine</div>
              </div>

              <div className="mt-5 px-2">
                <button className="w-full inline-flex items-center justify-center gap-2 text-[11px] text-lavender bg-ink-panel border border-ink-border rounded-lg px-3 py-2 hover:border-lavender-muted transition">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M7 9V1 M7 1 L4 4 M7 1 L10 4 M2 9 v3 h10 v-3" />
                  </svg>
                  Exporter la vue · CSV
                </button>
              </div>
            </aside>

            {/* Main */}
            <div className="p-4 md:p-6 min-w-0">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex-1 min-w-[240px] flex items-center gap-2 px-3 py-2 rounded-lg border border-ink-border bg-ink/40 text-sm text-lavender-dim">
                  <span>⌕</span>
                  <span>Chercher un contact, un compte, une tâche…</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Tous les contacts", "Région · Sud", "+ filtre"].map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center px-2.5 py-1 text-xs rounded-md border border-ink-border bg-ink-panel/60 text-lavender-muted"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-sm min-w-[640px]">
                  <thead>
                    <tr className="text-left font-mono text-[10px] tracking-[0.14em] uppercase text-lavender-dim">
                      <th className="font-normal pb-3 pr-3">Nom</th>
                      <th className="font-normal pb-3 pr-3">Compte</th>
                      <th className="font-normal pb-3 pr-3">Dernier contact</th>
                      <th className="font-normal pb-3 pr-3">Prochaine action</th>
                      <th className="font-normal pb-3">Silence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-border/50">
                    {CONTACTS.map((c) => (
                      <tr key={c.name} className="align-top">
                        <td className="py-3 pr-3">
                          <div className="text-lavender font-medium">{c.name}</div>
                          <div className="text-[11px] text-lavender-dim">{c.role}</div>
                        </td>
                        <td className="py-3 pr-3 text-lavender-muted">{c.company}</td>
                        <td className="py-3 pr-3 text-lavender-muted">
                          {c.lastContact}
                        </td>
                        <td className="py-3 pr-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] border ${
                              c.actionTone === "warn"
                                ? "bg-accent/12 border-accent/40 text-accent"
                                : "bg-ink-panel/60 border-ink-border text-lavender-muted"
                            }`}
                          >
                            {c.action}
                          </span>
                        </td>
                        <td className="py-3 font-mono text-[11px]">
                          <span
                            className={
                              c.silence >= 60
                                ? "text-spec-orange"
                                : "text-lavender-muted"
                            }
                          >
                            {c.silence} j
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-lavender-dim font-mono">
                <span>5 sur 1 248 · triés par silence croissant</span>
                <span className="inline-flex items-center gap-2">
                  <Arc size={14} withGlow={false} strokeW={8} />
                  <span>
                    Rainbow a mis à jour 12 lignes aujourd&apos;hui, depuis ton
                    téléphone.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-lavender-dim max-w-xl mx-auto">
          Rainbow parle dans ton téléphone. Au bureau, tu relis. Tu exportes. Tu
          gardes la main.
        </p>
      </div>
    </section>
  );
}
