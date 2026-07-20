"use client";

import { useState } from "react";

/**
 * Image slot with graceful fallback.
 * Drop the generated asset at /public/images/<name>.webp and it
 * renders automatically (filenames + prompts: IMAGE-PROMPTS.md).
 * Until then an intentional drafting-grid placeholder shows.
 */
export default function ImageSlot({ name, alt, ratio = "aspect-[4/3]", className = "" }) {
  const [missing, setMissing] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-n300 bg-n200 ${ratio} ${className}`}
    >
      {!missing ? (
        <img
          src={`/images/${name}.webp`}
          alt={alt}
          loading="lazy"
          onError={() => setMissing(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="grid-paper absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 200 200" fill="none" className="h-2/3 w-2/3 opacity-40" aria-hidden>
            <circle cx="100" cy="100" r="70" stroke="#9EA4AF" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="70" ry="26" stroke="#9EA4AF" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="26" ry="70" stroke="#9EA4AF" strokeWidth="1" />
            <circle cx="100" cy="100" r="4" fill="#737A87" />
          </svg>
          <span className="absolute bottom-3 left-4 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-n500">
            {name}
          </span>
        </div>
      )}
    </div>
  );
}
