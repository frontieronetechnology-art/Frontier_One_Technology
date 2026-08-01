"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis inertia scrolling — the silk-smooth scroll feel.
 *
 * Desktop-tuned and honors reduced motion. Lenis's touch sync (`syncTouch`,
 * `touchMultiplier`) is the classic source of lag/tearing on phones and
 * tablets, so on coarse-pointer devices we bail out entirely and let the
 * browser's native scroll take over — that's what actually feels "buttery"
 * on a touch screen, and it frees the main thread for the pinned sections.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Touch devices scroll natively — no Lenis.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // anchor links glide instead of jump
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"], a[href*="/#"]');
      if (!a) return;
      const hash = a.hash;
      if (!hash) return;
      const el = document.querySelector(hash);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -88 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
