"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

interface AndroidWaitlistProps {
  /** Visually compact variant for hero / Calculator. */
  compact?: boolean;
  /** Source tag forwarded to the API so we can segment later. */
  source?: string;
}

/**
 * Inline email-capture form for the Android beta waitlist.
 * Posts to /api/waitlist — which writes to the Notion Waitlist DB.
 *
 * Honeypot field catches naive bots. No visible label, so only
 * automated fills will populate it; we reject those server-side.
 */
export function AndroidWaitlist({
  compact = false,
  source = "android-waitlist",
}: AndroidWaitlistProps) {
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrorMsg("");

    // Honeypot: bots usually fill every field
    if (honeypot.trim()) {
      setStatus("success"); // silent accept
      return;
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Erreur inconnue");
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-xl border border-spec-green/40 bg-spec-green/5 text-spec-green ${
          compact ? "px-4 py-3 text-sm" : "px-5 py-4"
        }`}
        role="status"
      >
        Merci. On vous écrit dès que Rainbow Android est disponible — c'est pour les 30 prochains jours.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className={`flex ${compact ? "flex-col sm:flex-row gap-2" : "flex-col gap-2"}`}>
        <label htmlFor={`waitlist-email-${source}`} className="sr-only">
          Votre email pour être prévenu quand Rainbow Android sort
        </label>
        <input
          id={`waitlist-email-${source}`}
          type="email"
          required
          placeholder="votre@email.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-lg bg-ink-panel/60 border border-ink-border/60 px-4 py-2.5 text-sm text-lavender placeholder:text-lavender-dim focus:outline-none focus:border-accent/60 transition"
        />
        {/* Honeypot — visually hidden, must remain empty */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="absolute -left-[9999px] opacity-0 pointer-events-none"
          aria-hidden
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-ink text-sm font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "..." : "Me prévenir"}
        </button>
      </div>
      {status === "error" ? (
        <div className="text-xs text-spec-orange" role="alert">
          {errorMsg || "Impossible d'enregistrer votre email. Réessayez."}
        </div>
      ) : (
        <div className="text-xs text-lavender-dim">
          On vous écrit dès que Rainbow Android sort. Aucun spam, vous pouvez vous désinscrire à tout moment.
        </div>
      )}
    </form>
  );
}
