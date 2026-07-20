"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // hide when scrolling down past the hero, resurface on any scroll up
      setHidden(y > 480 && y > lastY + 4);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.55, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "border-b border-n300/80 bg-n100/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between">
          <Link href="/" aria-label="Frontier One Technology — Home" className="relative z-10">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[0.9rem] font-medium tracking-tight transition-colors duration-300 ${
                  isActive(link.href) ? "text-ink" : "text-n600 hover:text-ink"
                }`}
              >
                <span className="roll">
                  <span>
                    <span>{link.label}</span>
                    <span aria-hidden className="text-bronze-deep">{link.label}</span>
                  </span>
                </span>
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-bronze"
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn btn-ink hidden !py-2.5 !px-5 text-sm lg:inline-flex">
              Schedule a Consultation
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="block h-[1.5px] w-6 bg-ink"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[1.5px] w-6 bg-ink"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="block h-[1.5px] w-6 bg-ink"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 bg-n100 lg:hidden"
          >
            <div className="container-x flex h-full flex-col justify-center">
              <nav aria-label="Mobile" className="space-y-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.06 * i + 0.1, ease: EASE }}
                  >
                    <Link
                      href={link.href}
                      className={`group flex items-baseline gap-4 border-b rule py-4 ${
                        isActive(link.href) ? "text-ink" : "text-n700"
                      }`}
                    >
                      <span className="font-mono text-xs text-bronze-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display text-3xl">{link.label}</span>
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
                <Link href="/contact" className="btn btn-ink w-full">
                  Schedule a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
