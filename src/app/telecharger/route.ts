import { IOS_APP_URL, ANDROID_APP_URL } from "@/content/app-urls";

// GET /telecharger — adaptive app link, used by email CTAs where we can't show buttons.
// iOS → App Store, Android → Play Store, desktop → home (where the QR + store buttons live).
export function GET(req: Request) {
  const ua = (req.headers.get("user-agent") || "").toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) return Response.redirect(IOS_APP_URL, 302);
  if (/android/.test(ua)) return Response.redirect(ANDROID_APP_URL, 302);
  return Response.redirect("https://askrainbow.ai", 302);
}
