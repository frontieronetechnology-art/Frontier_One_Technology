"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import HeroVisual from "./HeroVisual";
import Magnetic from "./Magnetic";
import Scramble from "./Scramble";
import SplitReveal from "./SplitReveal";
import Icon from "./Icons";

const EASE = [0.16, 1, 0.3, 1];
const TRUST_LINE = ["Cloud Engineering", "Software Development", "Cybersecurity", "Data & AI", "DevOps"];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  // scroll parallax — hero content drifts up + fades as you leave
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // mouse tilt on the orbital system
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 18 });
  const tiltY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 18 });

  const onMove = (e) => {
    if (reduce) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX / rect.width - 0.5);
    my.set(e.clientY / rect.height - 0.5);
  };

  return (
    <section ref={ref} onMouseMove={onMove} className="relative overflow-hidden">
      <div className="grid-paper grid-paper-fade absolute inset-0" aria-hidden />

      {/* giant ghost wordmark drifting behind everything */}
      <motion.p
        aria-hidden
        style={reduce ? undefined : { y: visualY }}
        className="text-stroke pointer-events-none absolute -bottom-6 left-0 z-0 select-none whitespace-nowrap font-sans text-[24vw] font-semibold leading-none tracking-tighter opacity-[0.35] lg:text-[19vw]"
      >
        FRONTIER
      </motion.p>

      <div className="container-x relative z-10 grid min-h-screen items-center gap-14 pb-24 pt-32 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-28">
        <motion.div style={reduce ? undefined : { y: contentY, opacity: fade }} className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="eyebrow"
          >
            <span className="idx">EST. 2026</span>
            <Scramble text="TECHNOLOGY CONSULTING & IT SERVICES" delay={0.35} />
          </motion.p>

          <SplitReveal
            onMount
            delay={0.3}
            segments={[
              { text: "Building Technology That Moves Businesses " },
              { text: "Forward", serif: true },
            ]}
            className="display mt-7 text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-[3.9rem] xl:text-[4.5rem]"
          />

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
            className="mt-7 max-w-xl text-base leading-relaxed text-n700 sm:text-lg"
          >
            Whether you&rsquo;re modernizing your infrastructure, strengthening security, or
            developing your next digital product, Frontier One Technology delivers practical
            technology solutions designed for long-term business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: EASE }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Magnetic>
              <Link href="/services/cloud-solutions" className="btn btn-ink">
                <span className="flex items-center gap-2.5">
                  Explore Our Services <Icon name="arrow" />
                </span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link href="/contact" className="btn btn-ghost">
                Schedule a Consultation
              </Link>
            </Magnetic>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="mt-11 flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            {TRUST_LINE.map((item, i) => (
              <li key={item} className="flex items-center gap-5">
                {i > 0 && <span className="h-1 w-1 rotate-45 bg-bronze/70" aria-hidden />}
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-n600">
                  {item}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* orbital system with mouse tilt + scroll parallax */}
        <motion.div
          style={reduce ? undefined : { y: visualY, opacity: fade }}
          className="hidden lg:col-span-5 lg:block"
        >
          <motion.div
            initial={{ opacity: 0, y: 44, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: EASE }}
          >
            <motion.div style={reduce ? undefined : { rotateX: tiltX, rotateY: tiltY, transformPerspective: 1100 }}>
              <HeroVisual />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        style={reduce ? undefined : { opacity: fade }}
        className="pointer-events-none absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        aria-hidden
      >
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.34em] text-n600">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-n300">
          <motion.span
            className="absolute left-0 top-0 h-1/2 w-px bg-bronze"
            animate={reduce ? {} : { y: ["-100%", "220%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
