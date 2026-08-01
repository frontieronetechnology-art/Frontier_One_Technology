"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const lenisRef = useRef(null);

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
    lenisRef.current = lenis;

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Same-page anchors glide instead of jump. Cross-page deep links
    // (`/contact#form`) have no target element here, so they fall through
    // to Next's router and are handled by the route-change effect below.
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"], a[href*="/#"]');
      if (!a) return;
      const hash = a.hash;
      if (!hash) return;
      const el =
        document.querySelector(hash) ||
        document.querySelector(`#contact-${hash.slice(1)}`);
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
      lenisRef.current = null;
    };
  }, []);

  // Next doesn't always reset the scroll position when Lenis is driving it,
  // so we land at the top on every route change (this keeps the contact page
  // opening on its hero, never mid-scroll). Honours deep links like
  // /contact#form that jump straight to a section.
  useEffect(() => {
    let cancelled = false;
    const t = setTimeout(() => {
      if (cancelled) return;
      const hash = window.location.hash.slice(1);
      const el = hash
        ? document.getElementById(hash) ||
          document.getElementById(`contact-${hash}`)
        : null;
      if (el) {
        if (lenisRef.current) lenisRef.current.scrollTo(el, { offset: -88 });
        else el.scrollIntoView({ block: "start" });
      } else if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }, 0);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
