"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Icon from "./Icons";

const EASE = [0.16, 1, 0.3, 1];

/* Wire to the production endpoint (email + Google Sheets relay)
   before launch — SRS §6.5. Until then submissions confirm locally. */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

const STEPS = [
  {
    name: "company",
    label: "Company Name",
    question: "Who are we speaking with?",
    hint: "Your company or organisation name.",
    type: "text",
    autoComplete: "organization",
    placeholder: "Acme Industries",
    validate: (v) => (v.trim() ? null : "Company name is required."),
  },
  {
    name: "email",
    label: "Email Address",
    question: "Where should we reply?",
    hint: "We answer every inquiry within one business day.",
    type: "email",
    autoComplete: "email",
    placeholder: "you@company.com",
    validate: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? null : "Enter a valid email address.",
  },
  {
    name: "phone",
    label: "Phone Number",
    question: "And a number, if we need it?",
    hint: "Include your country code.",
    type: "tel",
    autoComplete: "tel",
    placeholder: "+1 555 000 0000",
    validate: (v) =>
      /^[+\d][\d\s\-().]{6,}$/.test(v.trim()) ? null : "Enter a valid phone number.",
  },
  {
    name: "message",
    label: "Project Details",
    question: "What are you building?",
    hint: "A sentence or two is plenty — we'll take it from there.",
    textarea: true,
    placeholder: "We're modernising a legacy platform and need help with…",
    validate: (v) => (v.trim() ? null : "Tell us a little about your project."),
  },
];

/* ── drawn confirmation mark ─────────────────────────────────────────── */
function SuccessMark() {
  return (
    <svg viewBox="0 0 52 52" fill="none" className="h-14 w-14">
      <motion.circle
        cx="26"
        cy="26"
        r="24"
        stroke="var(--color-success)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
      />
      <motion.path
        d="M15 26.5 22.5 34 37 19"
        stroke="var(--color-success)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
      />
    </svg>
  );
}

/**
 * Contact form as a guided sequence — one question at a time, advanced by
 * Enter or the button, with a live progress rail and a review of everything
 * captured before it sends. All four fields stay in one <form>, so keyboard
 * and autofill behave exactly like a normal form.
 */
export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [values, setValues] = useState({ company: "", email: "", phone: "", message: "" });
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");
  const inputRef = useRef(null);
  const skipFirst = useRef(true);
  const reduce = useReducedMotion();

  const last = step === STEPS.length - 1;
  const current = STEPS[step];

  useEffect(() => {
    if (skipFirst.current) {
      skipFirst.current = false;
      return;
    }
    if (status === "idle") inputRef.current?.focus({ preventScroll: true });
  }, [step, status]);

  const set = (v) => {
    setValues((p) => ({ ...p, [current.name]: v }));
    if (error) setError(null);
  };

  const advance = () => {
    const msg = current.validate(values[current.name]);
    if (msg) {
      setError(msg);
      return;
    }
    setDir(1);
    setStep((s) => s + 1);
  };

  const back = () => {
    setError(null);
    setDir(-1);
    setStep((s) => Math.max(0, s - 1));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    // validate the whole set, not just the visible step
    for (let i = 0; i < STEPS.length; i++) {
      const msg = STEPS[i].validate(values[STEPS[i].name]);
      if (msg) {
        setDir(i < step ? -1 : 1);
        setStep(i);
        setError(msg);
        return;
      }
    }
    setStatus("sending");
    try {
      if (ENDPOINT) {
        const body = new FormData();
        Object.entries(values).forEach(([k, v]) => body.append(k, v));
        await fetch(ENDPOINT, { method: "POST", body });
      } else {
        await new Promise((r) => setTimeout(r, 900));
      }
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const onKeyDown = (ev) => {
    if (ev.key !== "Enter") return;
    if (current.textarea && !(ev.metaKey || ev.ctrlKey)) return; // let the textarea breathe
    ev.preventDefault();
    if (last) onSubmit(ev);
    else advance();
  };

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="rounded-xl border border-n300 bg-white p-10 text-center"
      >
        <span className="mx-auto flex justify-center">
          <SuccessMark />
        </span>
        <h3 className="display mt-6 text-2xl">
          Message <em>received.</em>
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-n700">
          Thank you for reaching out. Our team reviews every inquiry and will respond within one
          business day.
        </p>
      </motion.div>
    );
  }

  const slide = {
    enter: (d) => (reduce ? {} : { opacity: 0, y: d * 28 }),
    center: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
    exit: (d) => (reduce ? {} : { opacity: 0, y: d * -28, transition: { duration: 0.35, ease: EASE } }),
  };

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-xl border border-n300 bg-white p-7 sm:p-9">
      {/* progress rail */}
      <div className="flex items-center gap-4">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-bronze-deep">
          {String(step + 1).padStart(2, "0")}
          <span className="text-n500"> / {String(STEPS.length).padStart(2, "0")}</span>
        </span>
        <span className="relative h-px flex-1 overflow-hidden bg-n300">
          <motion.span
            className="absolute inset-y-0 left-0 bg-bronze"
            initial={false}
            animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
          />
        </span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-n500">
          {current.label}
        </span>
      </div>

      {/* the live question */}
      <div className="relative mt-9 min-h-[13rem]">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={current.name}
            custom={dir}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <label htmlFor={`cf-${current.name}`} className="display block text-2xl sm:text-[1.75rem]">
              {current.question}
            </label>
            <p className="mt-2 text-[0.85rem] text-n600">{current.hint}</p>

            {current.textarea ? (
              <textarea
                ref={inputRef}
                id={`cf-${current.name}`}
                name={current.name}
                rows={4}
                value={values[current.name]}
                onChange={(e) => set(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder={current.placeholder}
                aria-invalid={!!error}
                className="mt-6 w-full resize-none border-0 border-b border-n300 bg-transparent px-0 py-3 text-lg text-ink outline-none transition-colors duration-300 placeholder:text-n400 focus:border-bronze"
              />
            ) : (
              <input
                ref={inputRef}
                id={`cf-${current.name}`}
                name={current.name}
                type={current.type}
                autoComplete={current.autoComplete}
                value={values[current.name]}
                onChange={(e) => set(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder={current.placeholder}
                aria-invalid={!!error}
                className="mt-6 w-full border-0 border-b border-n300 bg-transparent px-0 py-3 text-xl text-ink outline-none transition-colors duration-300 placeholder:text-n400 focus:border-bronze"
              />
            )}

            <p aria-live="polite" className="mt-3 min-h-[1.25rem] text-xs font-medium text-error">
              {error}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* review of what's already captured */}
      {step > 0 && (
        <ul className="mb-7 flex flex-wrap gap-2 border-t rule pt-5">
          {STEPS.slice(0, step).map((s, i) => (
            <li key={s.name}>
              <button
                type="button"
                onClick={() => {
                  setDir(-1);
                  setError(null);
                  setStep(i);
                }}
                className="max-w-[16rem] truncate rounded-full border border-n300 px-3.5 py-1.5 text-[0.72rem] text-n600 transition-colors duration-300 hover:border-ink hover:text-ink"
              >
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-bronze-deep">
                  {s.label}:{" "}
                </span>
                {values[s.name]}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* controls */}
      <div className="flex items-center gap-3">
        {step > 0 && (
          <button
            type="button"
            onClick={back}
            className="btn btn-ghost !px-5 !py-3 text-sm"
          >
            Back
          </button>
        )}
        {last ? (
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn btn-ink flex-1 disabled:opacity-60"
          >
            <span className="flex items-center gap-2.5">
              {status === "sending" ? "Sending…" : "Send Message"}
              <Icon name="arrow" />
            </span>
          </button>
        ) : (
          <button type="button" onClick={advance} className="btn btn-ink flex-1">
            <span className="flex items-center gap-2.5">
              Continue <Icon name="arrow" />
            </span>
          </button>
        )}
      </div>

      {status === "error" && (
        <p className="mt-4 text-xs font-medium text-error">
          Something went wrong — please try again or email us directly.
        </p>
      )}

      <p className="mt-5 text-center font-mono text-[0.62rem] uppercase tracking-[0.14em] text-n500">
        Press Enter to continue · We respond to every inquiry
      </p>
    </form>
  );
}
