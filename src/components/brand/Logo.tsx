import Image from "next/image";

interface LogoProps {
  size?: number;
  showWord?: boolean;
}

export function Logo({ size = 28, showWord = true }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Rainbow"
        width={size * 1.6}
        height={size * 1.2}
        priority
        className="object-contain select-none"
        style={{ width: size * 1.6, height: "auto" }}
      />
      {showWord && (
        <span className="font-serif text-[1.1em] tracking-tight text-lavender">
          Rainbow
        </span>
      )}
    </span>
  );
}
