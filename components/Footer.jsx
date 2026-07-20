import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icons";
import { NAV_LINKS, SERVICES } from "@/lib/data";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "X (Twitter)", href: "https://x.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-n100">
      <div className="container-x pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Logo invert />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-n400">
              Engineering Smarter Solutions for Tomorrow.
            </p>
            <div className="mt-8 space-y-3 font-mono text-[0.8rem] text-n400">
              <p className="flex items-center gap-3">
                <Icon name="phone" className="text-bronze" />
                <span>+1 (000) 000-0000</span>
              </p>
              <p className="flex items-center gap-3">
                <Icon name="mail" className="text-bronze" />
                <a href="mailto:info@frontieronetechnology.com" className="transition-colors hover:text-n100">
                  info@frontieronetechnology.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Icon name="pin" className="text-bronze" />
                <span>United States</span>
              </p>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-n500">Company</p>
              <ul className="mt-5 space-y-3">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-n300 transition-colors duration-300 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-n500">Services</p>
              <ul className="mt-5 space-y-3">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="text-sm text-n300 transition-colors duration-300 hover:text-white">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-n500">Connect</p>
              <ul className="mt-5 space-y-3">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-n300 transition-colors duration-300 hover:text-white"
                    >
                      {s.label}
                      <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Icon name="arrowUpRight" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Oversized wordmark — letters wave on hover */}
        <div className="mt-20 select-none overflow-hidden border-t border-n800 pt-10" aria-hidden>
          <p className="display whitespace-nowrap text-[11.5vw] leading-none text-n800/60 xl:text-[10rem]">
            {"Frontier".split("").map((ch, i) => (
              <span key={`f-${i}`} className="wave-letter">{ch}</span>
            ))}
            <span className="inline-block w-[0.22em]" />
            {"One".split("").map((ch, i) => (
              <em key={`o-${i}`} className="wave-letter text-n800/40">{ch}</em>
            ))}
          </p>
        </div>

        {/* Legal bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-n800 pt-7 text-[0.78rem] text-n500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Frontier One Technology. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-n300">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-n300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
