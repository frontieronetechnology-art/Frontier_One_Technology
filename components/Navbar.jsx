"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import Icon from "./Icons";
import { NAV_LINKS } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Two-state glass navigation.
 *
 * At rest it is a full-bleed banner: one frosted pane spanning edge to edge,
 * with the logo, links and CTA sitting directly on it. Once the page scrolls
 * that pane dissolves and the same three groups re-form as detached glass
 * capsules floating over the content.
 *
 * The morph is done by cross-fading two backgrounds rather than animating
 * layout. The DOM never reflows, so the links cannot shift under the cursor
 * mid-transition — which is what happens if you try to animate a full-width
 * bar into a pill by changing width and radius.
 *
 * §13 forbids the logo sitting directly on a photograph. Both states put a
 * glass surface between the lockup and the hero, so the constraint holds
 * without a scrim hack.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const links = NAV_LINKS.filter((l) => l.href !== "/");

  /* Each group carries capsule glass only once detached. At rest it is
     transparent and reads as part of the single full-bleed banner. */
  const group = `transition-[background-color,border-color,box-shadow,border-radius] duration-[650ms] ${
    scrolled
      ? "glass-capsule rounded-full"
      : "rounded-2xl border border-transparent bg-transparent shadow-none"
  }`;

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        {/* ── full-bleed frosted banner — the resting state ───────
            `invisible` once scrolled: at opacity-0 the pane's backdrop
            blur would otherwise keep being re-sampled behind every
            scroll frame for nothing. visibility toggles instantly, the
            opacity fade carries the visual transition. */}
        <div
          aria-hidden
          className={`glass-pane absolute inset-0 border-b transition-[opacity,visibility] duration-[650ms] ${
            scrolled ? "invisible border-transparent opacity-0" : "border-n300/60 opacity-100"
          }`}
        />

        <div
          className={`container-x relative flex items-center justify-between gap-4 transition-[padding] duration-[650ms] ${
            scrolled ? "py-3" : "py-3.5 sm:py-4"
          }`}
        >
          {/* ── logo ─────────────────────────────────────────── */}
          <Link
            href="/"
            aria-label="Frontier One Technology — Home"
            className={`pointer-events-auto flex items-center transition-[padding] duration-[650ms] ${
              scrolled ? "px-4 py-2 sm:px-5 sm:py-2.5" : "px-0 py-1"
            } ${group}`}
          >
            <Logo />
          </Link>

          {/* ── links + CTA ──────────────────────────────────── */}
          <div className="pointer-events-auto flex items-center gap-2.5">
            <nav
              className={`hidden items-center gap-1 py-2 lg:flex ${
                scrolled ? "px-2.5" : "px-0"
              } ${group}`}
              aria-label="Primary"
            >
              {links.map((link) => {
                const on = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={on ? "page" : undefined}
                    className={`group relative rounded-full px-4 py-2 text-[0.875rem] font-medium tracking-tight transition-colors duration-300 ${
                      on ? "text-ink" : "text-n700 hover:text-ink"
                    }`}
                  >
                    {link.label}
                    {!on && (
                      <span className="pointer-events-none absolute inset-x-4 bottom-1 h-[2px] origin-center scale-x-0 rounded-full bg-bronze transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                    )}
                    {on && (
                      <motion.span
                        layoutId="nav-underline"
                        className="pointer-events-none absolute inset-x-4 bottom-1 h-[2px] rounded-full bg-bronze"
                        transition={{ duration: 0.5, ease: EASE }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className="btn btn-bronze hidden !rounded-full !px-6 !py-3 !text-[0.875rem] lg:inline-flex"
            >
              <span className="flex items-center gap-2">
                Schedule a Consultation
                <Icon name="arrowUpRight" />
              </span>
            </Link>

            {/* ── hamburger capsule ──────────────────────────── */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`flex h-[3.1rem] w-[3.1rem] flex-col items-center justify-center gap-[5px] lg:hidden ${group}`}
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="block h-[1.5px] w-5 bg-ink"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[1.5px] w-5 bg-ink"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="block h-[1.5px] w-5 bg-ink"
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── mobile overlay ─────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 bg-n100 lg:hidden"
          >
            <div className="grid-paper absolute inset-0 opacity-60" aria-hidden />
            <div className="container-x relative flex h-full flex-col justify-center">
              <nav aria-label="Mobile" className="space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.06 * i + 0.1, ease: EASE }}
                  >
                    <Link
                      href={link.href}
                      className={`group flex items-center justify-between border-b rule py-4 ${
                        isActive(link.href) ? "text-ink" : "text-n700"
                      }`}
                    >
                      <span className="display text-3xl">{link.label}</span>
                      <Icon
                        name="arrowUpRight"
                        className="text-n400 transition-colors group-hover:text-bronze-deep"
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
                className="mt-10"
              >
                <Link href="/contact" className="btn btn-bronze w-full !rounded-full">
                  <span className="flex items-center gap-2">
                    Schedule a Consultation <Icon name="arrow" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
