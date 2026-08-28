"use client";

import Link from "next/link";
import { useRef } from "react";
import Logo from "./Logo";
import Icon from "./Icons";
import Magnetic from "./Magnetic";
import Scramble from "./Scramble";
import RotatingBadge from "./RotatingBadge";
import { RevealGroup, RevealItem } from "./Reveal";
import { FOOTER_LINKS, SERVICES } from "@/lib/data";
import { sortedPosts } from "@/lib/blog";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

const LATEST_POSTS = sortedPosts().slice(0, 3);

/** Column link — magnetic pull toward the cursor, arrow reveals on hover.
    Same interaction language as the rest of the site (Magnetic on CTA
    buttons, the arrow-reveal already used on the social row); every
    footer link now carries it, not just one column. */
function FooterLink({ href, external, block, children }) {
  const className = `link-underline group/link inline-flex items-center gap-2 text-[0.95rem] text-n300 transition-colors duration-300 hover:text-white ${block ? "w-full" : ""}`;
  return (
    <Magnetic strength={0.2}>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          <span>{children}</span>
          <span className="opacity-0 transition-opacity duration-300 group-hover/link:opacity-100">
            <Icon name="arrowUpRight" />
          </span>
        </a>
      ) : (
        <Link href={href} className={className}>
          <span>{children}</span>
          <span className="opacity-0 transition-opacity duration-300 group-hover/link:opacity-100">
            <Icon name="arrowUpRight" />
          </span>
        </Link>
      )}
    </Magnetic>
  );
}

/** Category label — decodes into place the first time it scrolls into view. */
function ColumnLabel({ text }) {
  return (
    <Scramble
      text={text}
      className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-n500"
    />
  );
}

export default function Footer() {
  const groundRef = useRef(null);

  // Cursor-tracked spotlight — same bronze glow used on cards throughout
  // the site (see .spotlight / SpotlightCard), scaled up to the whole
  // footer instead of a single card. Written by hand rather than reusing
  // the .spotlight class directly, since that class's `> *` z-index rule
  // would fight the layered background divs below.
  const onMove = (e) => {
    const el = groundRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <footer
      ref={groundRef}
      onMouseMove={onMove}
      className="group/glow relative overflow-hidden bg-dark text-n100"
    >
      {/* Hairline seam + faint drafting grid — the quiet base. The CTA panel
          just above already lands the page's one big static moment, so
          nothing here competes with it on scale. Instead the footer earns
          its "next level" feel through craft and motion: a cursor-lit glow,
          a rotating signature badge, decode-in labels, magnetic links. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-bronze-light/25 to-transparent"
        aria-hidden
      />
      <div className="grid-paper-invert pointer-events-none absolute inset-0 z-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover/glow:opacity-100"
        style={{
          background:
            "radial-gradient(640px circle at var(--mx,50%) var(--my,50%), rgba(182,132,77,0.12), rgba(61,47,36,0.03) 45%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-x relative z-10 pb-14 pt-20">
        <RevealGroup className="grid gap-14 lg:grid-cols-12">
          {/* Brand column */}
          <RevealItem className="lg:col-span-5">
            <div className="flex items-start justify-between gap-6">
              <Logo invert />
              {/* Rotating craft signature — the same badge used on the
                  pre-footer CTA, reused here as a small seal rather than
                  another giant logo treatment. Lives in the brand column's
                  own flow (not floated over the whole footer) so it can
                  never collide with the link grid at any viewport width. */}
              <div className="pointer-events-none hidden shrink-0 sm:block">
                <RotatingBadge invert className="!h-20 !w-20" />
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-n400">
              Engineering Smarter Solutions for Tomorrow.
            </p>
            <div className="mt-8 space-y-3 font-mono text-[0.8rem] text-n400">
              <p className="flex items-center gap-3">
                <Icon name="phone" className="text-bronze-light" />
                <span>+1 (000) 000-0000</span>
              </p>
              <p className="flex items-center gap-3">
                <Icon name="mail" className="text-bronze-light" />
                <a href="mailto:info@frontieronetechnology.com" className="transition-colors hover:text-n100">
                  info@frontieronetechnology.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Icon name="pin" className="text-bronze-light" />
                <span>United States</span>
              </p>
            </div>
          </RevealItem>

          {/* Link columns */}
          <RevealItem className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-7">
            <div>
              <ColumnLabel text="Company" />
              <ul className="mt-6 space-y-4">
                {FOOTER_LINKS.map((l) => (
                  <li key={l.href}>
                    <FooterLink href={l.href}>{l.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ColumnLabel text="Services" />
              <ul className="mt-6 space-y-4">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <FooterLink href={`/services/${s.slug}`}>{s.title}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ColumnLabel text="Insights" />
              <ul className="mt-6 space-y-4">
                {LATEST_POSTS.map((p) => (
                  <li key={p.slug}>
                    <FooterLink href={`/blog/${p.slug}`} block>
                      <span className="leading-snug">{p.title}</span>
                    </FooterLink>
                  </li>
                ))}
                <li>
                  <FooterLink href="/blog">
                    <span className="text-bronze-light">All articles</span>
                  </FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <ColumnLabel text="Connect" />
              <ul className="mt-6 space-y-4">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <FooterLink href={s.href} external>
                      {s.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        </RevealGroup>

        {/* Legal bar — the mark appears here, small and quiet, next to the
            copyright line like a hallmark stamped into metal. */}
        <div className="mt-14 flex flex-col gap-4 border-t border-n800 pt-7 text-[0.78rem] text-n500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span
              className="block h-[0.9em] w-[0.9em] shrink-0 opacity-40"
              style={{
                WebkitMaskImage: "url(/logos/logo-mark.webp)",
                maskImage: "url(/logos/logo-mark.webp)",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                background: "currentColor",
              }}
              aria-hidden
            />
            <p>© 2020 Frontier One Technology. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-n300">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-n300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
