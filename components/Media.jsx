"use client";

import { useState } from "react";

/**
 * Universal image primitive for the site.
 *
 * Every photographic asset on Frontier One goes through here so the §17
 * colour-grade direction (warm white balance, −10-20% saturation, lifted
 * shadows, never crushed to black) is enforced in code rather than trusted
 * to whoever exported the file.
 *
 * If the asset is not present yet, the slot renders a deliberate warm
 * drafting-plate placeholder with its own path printed on it — so a missing
 * image reads as an unfinished plate, never as a broken page.
 *
 * @param src      path under /public/images, e.g. "home/hero-city.webp"
 * @param fill     absolutely fill the nearest positioned ancestor
 * @param ratio    tailwind aspect class when not filling
 * @param grade    "light" | "dark" | "none"  — §17.1 colour grade
 * @param position object-position override
 */
export default function Media({
  src,
  alt = "",
  fill = false,
  ratio = "aspect-[4/3]",
  grade = "light",
  position = "center",
  priority = false,
  className = "",
  imgClassName = "",
}) {
  const [missing, setMissing] = useState(false);

  const gradeClass =
    grade === "dark" ? "img-grade-dark" : grade === "none" ? "" : "img-grade";

  const wrapper = fill
    ? `absolute inset-0 overflow-hidden ${className}`
    : `relative overflow-hidden ${ratio} ${className}`;

  return (
    <div className={wrapper} aria-hidden={alt ? undefined : true}>
      {!missing ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={`/images/${src}`}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          onError={() => setMissing(true)}
          style={{ objectPosition: position }}
          className={`h-full w-full object-cover ${gradeClass} ${imgClassName}`}
        />
      ) : (
        <div
          className={`absolute inset-0 grid-paper ${
            grade === "dark" ? "bg-dark-surface" : "bg-n200"
          }`}
        >
          <span
            className={`absolute bottom-3 left-4 font-mono text-[0.58rem] uppercase tracking-[0.18em] ${
              grade === "dark" ? "text-n500" : "text-n500"
            }`}
          >
            {src}
          </span>
        </div>
      )}
    </div>
  );
}
