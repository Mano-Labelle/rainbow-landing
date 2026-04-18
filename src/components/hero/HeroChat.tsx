"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";

function RainbowAvatar({ size = 22 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center shrink-0"
      style={{ width: size + 6, height: size + 6 }}
    >
      <Image
        src="/logo.png"
        alt=""
        width={size}
        height={size}
        className="select-none"
        style={{ width: size, height: "auto" }}
      />
    </span>
  );
}

/* =====================================================================
   Spectral voice waveform — used inside voice-message bubbles.
   Animates a rainbow-gradient bar equalizer.
   ===================================================================== */
interface SpectralWaveProps {
  bars?: number;
  height?: number;
  seed?: number;
  animate?: boolean;
  played?: number;
}

function SpectralWave({
  bars = 42,
  height = 26,
  seed = 0,
  animate = true,
  played = 1,
}: SpectralWaveProps) {
  const id = useId();
  const gradId = `sw-${id}`;
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  const arr: number[] = [];
  for (let i = 0; i < bars; i++) {
    const phase = i * 0.37 + seed;
    const base = 0.35 + 0.35 * Math.abs(Math.sin(phase * 1.7));
    const pulse = animate ? 0.3 * Math.sin(t * 4 + i * 0.45) : 0;
    const env = Math.sin((i / bars) * Math.PI);
    arr.push(Math.max(0.12, Math.min(1, (base + pulse * 0.5) * (0.4 + 0.9 * env))));
  }

  const bw = 100 / bars;
  const gap = Math.min(bw * 0.3, 1);

  return (
    <svg
      viewBox={`0 0 100 ${height / 3}`}
      width="100%"
      height={height}
      preserveAspectRatio="none"
      style={{ display: "block" }}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0" x2="1">
          <stop offset="0" stopColor="#B57DFF" />
          <stop offset="0.25" stopColor="#FF5EC4" />
          <stop offset="0.5" stopColor="#FFA060" />
          <stop offset="0.75" stopColor="#6BE9B0" />
          <stop offset="1" stopColor="#5BB8FF" />
        </linearGradient>
      </defs>
      {arr.map((h, i) => {
        const x = i * bw + gap / 2;
        const bh = h * (height / 3);
        const y = (height / 3 - bh) / 2;
        const active = i / bars < played;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={bw - gap}
            height={bh}
            rx={bw / 3}
            fill={active ? `url(#${gradId})` : "rgba(255,255,255,0.18)"}
          />
        );
      })}
    </svg>
  );
}

/* =====================================================================
   Typewriter — reveals text character-by-character
   ===================================================================== */
function Typewriter({
  text,
  speed = 22,
  start = 0,
}: {
  text: string;
  speed?: number;
  start?: number;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    setN(0);
    const startT = Date.now() + start * 1000;
    const int = setInterval(() => {
      const elapsed = Date.now() - startT;
      if (elapsed < 0) return;
      const target = Math.min(text.length, Math.floor(elapsed / speed));
      setN(target);
      if (target >= text.length) clearInterval(int);
    }, 32);
    return () => clearInterval(int);
  }, [text, start, speed]);

  return (
    <>
      {text.slice(0, n)}
      {n < text.length && <span className="inline-block w-[2px] h-[0.9em] bg-lavender align-middle animate-pulse ml-[1px]" />}
    </>
  );
}

/* =====================================================================
   Chat bubble. User bubble right (muted lavender), Rainbow left (dark).
   ===================================================================== */
type BubbleSide = "user" | "rainbow";
type BubbleKind = "text" | "voice";

interface ChatBubbleProps {
  side: BubbleSide;
  kind: BubbleKind;
  text?: string;
  time?: string;
  animateText?: boolean;
  voice?: { bars?: number; seed?: number; played?: number; duration?: string };
}

function ChatBubble({
  side,
  kind,
  text,
  time,
  animateText,
  voice,
}: ChatBubbleProps) {
  const isUser = side === "user";
  const rowClasses = `flex gap-2 mb-2 ${isUser ? "justify-end" : "justify-start"}`;

  return (
    <div className={rowClasses}>
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-ink-elev border border-ink-border flex items-center justify-center shrink-0 self-end">
          <RainbowAvatar size={18} />
        </div>
      )}
      <div
        className={[
          "relative max-w-[78%] px-3 py-2 text-[13px] leading-snug",
          isUser
            ? "text-lavender rounded-[18px] rounded-br-[4px] border border-lavender/10 bg-[rgba(181,125,255,0.18)]"
            : "bg-ink-elev text-lavender rounded-[18px] rounded-bl-[4px] border border-ink-border/50",
        ].join(" ")}
      >
        {!isUser && (
          <span
            className="absolute inset-0 rounded-[18px] rounded-bl-[4px] pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,94,196,0.08), rgba(91,184,255,0.04))",
            }}
          />
        )}
        {kind === "voice" ? (
          <div className="relative flex items-center gap-2 w-[180px]">
            <button
              className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"
              aria-label="Lire le mémo vocal"
            >
              <svg width="10" height="12" viewBox="0 0 10 12">
                <path d="M0 0 L10 6 L0 12 Z" fill="currentColor" />
              </svg>
            </button>
            <div className="flex-1">
              <SpectralWave
                bars={voice?.bars ?? 34}
                height={22}
                seed={voice?.seed ?? 0}
                played={voice?.played ?? 0.6}
              />
            </div>
            <span className="text-[10px] opacity-70 font-mono">
              {voice?.duration ?? "0:12"}
            </span>
          </div>
        ) : (
          <div className="relative">
            {animateText && text ? <Typewriter text={text} /> : text}
          </div>
        )}
        <div className="text-[10px] opacity-60 mt-1 text-right font-mono">
          {time}
        </div>
      </div>
    </div>
  );
}

/* =====================================================================
   Typing indicator (three dots) — used while Rainbow is "thinking"
   ===================================================================== */
function ChatTyping() {
  return (
    <div className="flex gap-2 mb-2 justify-start">
      <div className="w-7 h-7 rounded-full bg-ink-elev border border-ink-border flex items-center justify-center shrink-0 self-end">
        <RainbowAvatar size={18} />
      </div>
      <div className="bg-ink-elev rounded-[18px] rounded-bl-[4px] border border-ink-border/50 px-3 py-3 flex gap-1 items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-lavender-muted animate-bounce [animation-delay:-0.3s]" />
        <span className="w-1.5 h-1.5 rounded-full bg-lavender-muted animate-bounce [animation-delay:-0.15s]" />
        <span className="w-1.5 h-1.5 rounded-full bg-lavender-muted animate-bounce" />
      </div>
    </div>
  );
}

/* =====================================================================
   iPhone frame — wraps the chat in a stylized phone body
   ===================================================================== */
function IPhoneFrame({
  children,
  stateLabel,
}: {
  children: React.ReactNode;
  stateLabel?: string;
}) {
  return (
    <div className="relative mx-auto w-[340px] max-w-full">
      {/* Soft glow behind the phone */}
      <div
        className="absolute inset-0 blur-3xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,94,196,0.4), rgba(91,184,255,0.2) 50%, transparent 80%)",
        }}
      />
      <div className="relative rounded-[42px] bg-[#0b0710] border border-ink-border/70 p-[6px] shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        <div className="relative rounded-[36px] bg-[#0a0612] overflow-hidden">
          {/* Notch */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1.5 h-[22px] w-[100px] rounded-full bg-black z-10 flex items-center justify-end pr-3">
            <div className="w-2 h-2 rounded-full bg-[#1a1028] border border-[#2a1a3f]" />
          </div>
          {/* Status bar */}
          <div className="flex items-center justify-between text-[11px] font-mono text-lavender px-5 pt-2 pb-1">
            <span>14:32</span>
            <span className="flex items-center gap-1">
              <svg width="16" height="10" viewBox="0 0 16 10"><path d="M1 8 L3 8 L3 6 M5 8 L7 8 L7 4 M9 8 L11 8 L11 2 M13 8 L15 8 L15 0" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
              <svg width="14" height="10" viewBox="0 0 14 10"><path d="M7 9 C4 6 2 6 0 8 M7 9 C10 6 12 6 14 8 M7 9 C5.5 7.5 4.5 7.5 3 8.5 M7 9 C8.5 7.5 9.5 7.5 11 8.5" stroke="currentColor" strokeWidth="1" fill="none"/><circle cx="7" cy="9" r="0.8" fill="currentColor"/></svg>
              <svg width="22" height="10" viewBox="0 0 22 10"><rect x="0.5" y="1" width="17" height="8" rx="2" stroke="currentColor" fill="none"/><rect x="2" y="2.5" width="12" height="5" rx="0.5" fill="currentColor"/><rect x="18.5" y="3.5" width="1.5" height="3" fill="currentColor"/></svg>
            </span>
          </div>
          {/* Convo header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-ink-border/50">
            <span className="text-lavender-muted text-lg">‹</span>
            <div className="flex items-center gap-2 flex-1">
              <div className="w-8 h-8 rounded-full bg-ink-elev border border-ink-border flex items-center justify-center">
                <RainbowAvatar size={22} />
              </div>
              <div>
                <div className="text-[13px] font-semibold">Rainbow</div>
                <div className="text-[10px] text-lavender-dim">
                  {stateLabel ?? "en ligne · répond par écrit"}
                </div>
              </div>
            </div>
            <span className="text-lavender-muted">⋯</span>
          </div>
          {/* Chat area */}
          <div className="px-3 py-3 min-h-[360px] bg-gradient-to-b from-[#0A0612] to-[#0f0a18]">
            {children}
          </div>
          {/* Composer */}
          <div className="flex items-center gap-2 px-3 py-2 border-t border-ink-border/50">
            <div className="flex-1 flex items-center gap-2 bg-ink-elev rounded-full px-3 py-1.5 text-[12px] text-lavender-dim border border-ink-border/50">
              <span className="text-lavender-muted">+</span>
              <span>Écrire à Rainbow…</span>
            </div>
            <button
              className="w-8 h-8 rounded-full bg-accent text-ink flex items-center justify-center shadow-[0_0_20px_rgba(255,94,196,0.4)]"
              aria-label="Dicter"
            >
              <svg width="14" height="18" viewBox="0 0 16 20" fill="none">
                <rect x="5" y="1" width="6" height="11" rx="3" fill="currentColor" />
                <path
                  d="M2 10 a6 6 0 0 0 12 0 M8 16 v3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center py-1.5">
            <div className="w-24 h-1 rounded-full bg-lavender/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =====================================================================
   Scripted hero conversation — the marquee animated visual
   ===================================================================== */
type ScriptStep =
  | { delay: number; type: "voice"; side: BubbleSide; voice: { duration: string; seed: number; bars: number; played: number }; time: string }
  | { delay: number; type: "typing" }
  | { delay: number; type: "text"; side: BubbleSide; text: string; time: string };

const SCRIPT: ScriptStep[] = [
  { delay: 0, type: "voice", side: "user", voice: { duration: "0:14", seed: 11, bars: 38, played: 1 }, time: "14:18" },
  { delay: 1.1, type: "typing" },
  {
    delay: 2.4,
    type: "text",
    side: "rainbow",
    text: "Noté. Contact : Benoît (chef d'atelier) chez Moreau SA. Action : devis gamme 400. Relance programmée le mercredi 6 mai.",
    time: "14:18",
  },
  { delay: 4.8, type: "text", side: "user", text: "donne-moi mes relances de demain", time: "14:19" },
  { delay: 5.3, type: "typing" },
  {
    delay: 6.2,
    type: "text",
    side: "rainbow",
    text: "Demain, 3 relances : Moreau SA (Benoît · 10h), Ateliers Durand (Céline · 14h), Bouygues Énergies (Karim · 16h30). Je t'envoie les briefs ?",
    time: "14:19",
  },
];

export function HeroChat() {
  const [step, setStep] = useState(0);
  const started = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't auto-start until the hero is visible (perf + respect for reduced motion users).
    const el = containerRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      startReveal();
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !started.current) {
          started.current = true;
          startReveal();
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();

    function startReveal() {
      SCRIPT.forEach((s, i) => {
        setTimeout(() => setStep((x) => Math.max(x, i + 1)), s.delay * 1000);
      });
    }
  }, []);

  return (
    <div ref={containerRef}>
      <IPhoneFrame>
        {SCRIPT.slice(0, step).map((m, i) => {
          if (m.type === "typing") {
            // Hide typing once the next message (the reply) has appeared
            if (step > i + 1) return null;
            return <ChatTyping key={i} />;
          }
          if (m.type === "voice") {
            return (
              <ChatBubble
                key={i}
                kind="voice"
                side={m.side}
                voice={m.voice}
                time={m.time}
              />
            );
          }
          return (
            <ChatBubble
              key={i}
              kind="text"
              side={m.side}
              text={m.text}
              time={m.time}
              animateText={m.side === "rainbow" && i === step - 1}
            />
          );
        })}
      </IPhoneFrame>
    </div>
  );
}
