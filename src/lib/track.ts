// Thin wrapper over PostHog (loaded via <Analytics />). Safe no-op if PostHog
// isn't present (SSR, ad-blocked, or key unset). Use for funnel events on top of
// the automatic pageview capture, e.g. track("lead_opt_in", { magnet }).
export function track(event: string, props?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const ph = (window as unknown as {
    posthog?: { capture?: (e: string, p?: Record<string, unknown>) => void };
  }).posthog;
  ph?.capture?.(event, props);
}
