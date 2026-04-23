// Central source of truth for app destinations.
// When Android ships, flip ANDROID_AVAILABLE and set ANDROID_APP_URL.
//
// Keep every CTA in the codebase importing from here — one edit when
// Android lands, done.

export const IOS_APP_URL =
  "https://apps.apple.com/fr/app/rainbow-ai/id6758268983";

export const WEB_APP_URL = "https://app.askrainbow.ai";

export const ANDROID_AVAILABLE = false;

/** Only used once ANDROID_AVAILABLE flips to true. */
export const ANDROID_APP_URL = "";
