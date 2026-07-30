"use client";

/**
 * Orbital linework field.
 *
 * This motif used to live *inside* each card in the "Why Businesses Choose
 * Us" panel, where it was cropped to a few hundred pixels and mostly lost.
 * Pulled out to section scale it does the job it was drawn for: it fills the
 * dead space around the cards so the band never reads as an empty ivory slab.
 *
 * Strictly linework in bronze — no fills, no glow (§17 "Never: glowing
 * networks"), and the single solid node is the only mass in it.
 */
export default function OrbitalField({ invert = false, className = "" }) {
  const line = invert ? "251,249,246" : "61,47,36";
  const bronze = "182,132,77";

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden>
      <svg viewBox="0 0 400 400" fill="none" className="animate-spin-slow h-full w-full">
        <circle cx="200" cy="200" r="176" stroke={`rgba(${bronze},0.28)`} />
        <circle
          cx="200"
          cy="200"
          r="132"
          stroke={`rgba(${line},0.16)`}
          strokeDasharray="2 8"
        />
        <ellipse cx="200" cy="200" rx="176" ry="62" stroke={`rgba(${line},0.14)`} />
        <ellipse cx="200" cy="200" rx="62" ry="176" stroke={`rgba(${line},0.14)`} />
        <ellipse
          cx="200"
          cy="200"
          rx="176"
          ry="120"
          stroke={`rgba(${bronze},0.14)`}
          transform="rotate(28 200 200)"
        />
        <circle cx="376" cy="200" r="3.5" fill={`rgb(${bronze})`} />
        <circle cx="200" cy="24" r="2.5" fill={`rgba(${line},0.5)`} />
      </svg>

      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="animate-spin-slower absolute inset-0 h-full w-full"
      >
        <circle
          cx="200"
          cy="200"
          r="196"
          stroke={`rgba(${line},0.13)`}
          strokeDasharray="14 12"
        />
        <circle
          cx="200"
          cy="200"
          r="96"
          stroke={`rgba(${bronze},0.16)`}
          strokeDasharray="1 10"
        />
      </svg>
    </div>
  );
}
