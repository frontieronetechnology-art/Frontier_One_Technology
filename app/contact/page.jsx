import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icons";

import { breadcrumbs } from "@/lib/seo";

export const metadata = {
  title: "Contact Us",
  description:
    "Schedule a consultation or reach the Frontier One Technology team. We respond to every inquiry.",
  alternates: { canonical: "/contact" },
};

/* Placeholder contact values — pending client input
   (Content Doc §1.2 / Requirements & Open Items). */
const DETAILS = [
  { icon: "phone", label: "Phone", value: "+1 (000) 000-0000", href: "tel:+10000000000" },
  { icon: "mail", label: "Email", value: "info@frontieronetechnology.com", href: "mailto:info@frontieronetechnology.com" },
  { icon: "pin", label: "Location", value: "United States", href: null },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "X (Twitter)", href: "https://x.com/" },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbs([
              { name: "Home", path: "" },
              { name: "Contact", path: "/contact/" },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="Contact"
        watermark="Contact"
        image="contact/hero.webp"
        position="center 45%"
        title={[
          { text: "Let's Talk About " },
          { text: "What's Next", serif: true },
        ]}
        lede="Tell us what you're building, modernizing, or securing. We respond to every inquiry — usually within one business day."
      />

      <section className="container-x pb-24 pt-8 sm:pb-28">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Details rail — ink panel, no boxed cards */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-dark p-8 sm:p-9">
                <div className="mesh-glow mesh-glow-invert" aria-hidden />
                <p className="eyebrow eyebrow-invert relative">
                  <span className="text-bronze-deep">→</span> Reach Us Directly
                </p>
                <div className="relative mt-8 divide-y divide-n800">
                  {DETAILS.map((d) => (
                    <div key={d.label} className="flex items-center gap-4 py-5 first:pt-0 last:pb-0">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-n800 text-bronze-light">
                        <Icon name={d.icon} />
                      </span>
                      <div>
                        <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-n500">
                          {d.label}
                        </p>
                        {d.href ? (
                          <a href={d.href} className="mt-1 block text-[0.95rem] font-semibold tracking-tight text-n100 transition-colors hover:text-bronze-light">
                            {d.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-[0.95rem] font-semibold tracking-tight text-n100">{d.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative mt-8 border-t border-n800 pt-6">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-n500">Follow</p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {SOCIALS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 rounded-full border border-n800 px-4 py-1.5 text-[0.8rem] font-medium text-n300 transition-colors hover:border-bronze-light hover:text-n100"
                      >
                        {s.label}
                        <Icon name="arrowUpRight" className="text-n500 transition-colors group-hover:text-bronze-light" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.1}>
              <div className="card p-8 sm:p-10">
                <p className="eyebrow">
                  Send a Message
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── MAP ──────────────────────────────────────────────── */}
      <section className="container-x pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border rule">
            {/* Swap `q=United+States` for the confirmed office address (SRS §6.7) */}
            <iframe
              title="Frontier One Technology office location"
              src="https://www.google.com/maps?q=United+States&output=embed"
              className="h-[26rem] w-full grayscale transition-all duration-700 hover:grayscale-0 sm:h-[30rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href="https://www.google.com/maps/dir//United+States"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink absolute bottom-5 left-5 !py-2.5 !px-5 text-sm"
            >
              Get Directions <Icon name="arrowUpRight" />
            </a>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
