import Image from "next/image";

/**
 * Frontier One Technology — official lockup.
 *
 * Two approved variants only (Brand Colour System v3.0 §13.1):
 *   • Master Flat  — bronze mark + #3D2F24 wordmark, on ivory / white
 *   • Inverse      — bronze mark + #F7F2EC wordmark, on #2D2218
 *
 * The wordmark is never recoloured ad-hoc and the mark is never separated
 * from it except at ≤64px (favicon, avatar, watermark) — hence `markOnly`.
 */
export default function Logo({ invert = false, markOnly = false, className = "" }) {
  if (markOnly) {
    return (
      <Image
        src="/logos/logo-mark.webp"
        alt="Frontier One Technology"
        width={700}
        height={314}
        priority
        className={`h-8 w-auto ${className}`}
      />
    );
  }

  return (
    <Image
      src={invert ? "/logos/logo-lockup-inverse.webp" : "/logos/logo-lockup.webp"}
      alt="Frontier One Technology"
      width={640}
      height={172}
      priority
      sizes="(max-width: 640px) 150px, 190px"
      className={`h-[2.15rem] w-auto sm:h-[2.45rem] ${className}`}
    />
  );
}
