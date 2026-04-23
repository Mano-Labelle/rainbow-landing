import QRCode from "qrcode";
import { IOS_APP_URL } from "@/content/app-urls";

interface AppleQRProps {
  size?: number;
  /** Override what the QR encodes (defaults to the iOS App Store URL). */
  url?: string;
}

/**
 * Real, scannable QR code pointing at the iOS App Store by default.
 * Generated server-side at build time — zero client JS. Uses error-
 * correction level H (30%) so we can overlay the Rainbow arc badge
 * in the center without breaking scannability.
 */
export async function AppleQR({ size = 180, url = IOS_APP_URL }: AppleQRProps) {
  // qrcode returns an <svg>…</svg> string. We inject it with
  // dangerouslySetInnerHTML and overlay the arc logo.
  const svg = await QRCode.toString(url, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 1,
    color: {
      dark: "#0A0612", // --color-ink
      light: "#F4EFFF00", // transparent so our lavender background shows
    },
  });

  // qrcode outputs its own <svg> wrapper; strip and re-emit into our SVG
  // to control sizing/aspect cleanly.
  const inner = svg
    .replace(/<\?xml[^>]+>/g, "")
    .replace(/<!DOCTYPE[^>]+>/g, "")
    .trim();

  return (
    <div
      className="relative inline-block rounded-2xl bg-lavender p-4 text-ink"
      style={{ width: size, height: size }}
      aria-label="QR code — télécharger Rainbow sur iOS"
    >
      <div
        className="[&>svg]:w-full [&>svg]:h-full [&>svg]:block"
        dangerouslySetInnerHTML={{ __html: inner }}
      />

      {/* Arc logo badge over the QR center — ECC level H absorbs the overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="rounded-full bg-lavender flex items-center justify-center"
          style={{ width: size * 0.22, height: size * 0.22 }}
        >
          <svg
            viewBox="0 0 100 60"
            width={size * 0.18}
            height={size * 0.11}
            aria-hidden
          >
            <path d="M 8 52 A 42 42 0 0 1 92 52" fill="none" stroke="#FF5EC4" strokeWidth="6" strokeLinecap="round" />
            <path d="M 14 52 A 36 36 0 0 1 86 52" fill="none" stroke="#FFA060" strokeWidth="6" strokeLinecap="round" />
            <path d="M 20 52 A 30 30 0 0 1 80 52" fill="none" stroke="#6BE9B0" strokeWidth="6" strokeLinecap="round" />
            <path d="M 26 52 A 24 24 0 0 1 74 52" fill="none" stroke="#5BB8FF" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
