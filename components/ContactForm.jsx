"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icons";

const EASE = [0.16, 1, 0.3, 1];

/* Wire to the production endpoint (email + Google Sheets relay)
   before launch — SRS §6.5. Until then submissions confirm locally. */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const e = {};
    if (!data.get("company")?.trim()) e.company = "Company name is required.";
    const email = data.get("email")?.trim() || "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email address.";
    const phone = data.get("phone")?.trim() || "";
    if (!/^[+\d][\d\s\-().]{6,}$/.test(phone)) e.phone = "Enter a valid phone number.";
    if (!data.get("message")?.trim()) e.message = "Tell us a little about your project.";
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    try {
      if (ENDPOINT) {
        await fetch(ENDPOINT, { method: "POST", body: data });
      } else {
        await new Promise((r) => setTimeout(r, 900));
      }
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "done" ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="rounded-xl border border-n300 bg-white p-10 text-center"
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
            <Icon name="check" />
          </span>
          <h3 className="display mt-6 text-2xl">Message <em>received.</em></h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-n700">
            Thank you for reaching out. Our team reviews every inquiry and will respond
            within one business day.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          noValidate
          className="space-y-6"
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <Field label="Company Name" name="company" type="text" placeholder="Acme Corporation" error={errors.company} />
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Email Address" name="email" type="email" placeholder="you@company.com" error={errors.email} />
            <Field label="Phone Number" name="phone" type="tel" placeholder="+1 (555) 000-0000" error={errors.phone} />
          </div>
          <div>
            <label className="field-label" htmlFor="cf-message">Project Details</label>
            <textarea
              id="cf-message"
              name="message"
              rows={5}
              placeholder="Tell us what you're building, modernizing, or securing…"
              className="field resize-none"
            />
            {errors.message && <FieldError msg={errors.message} />}
          </div>
          <button type="submit" disabled={status === "sending"} className="btn btn-ink w-full disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send Message"}
            <Icon name="arrow" />
          </button>
          {status === "error" && (
            <FieldError msg="Something went wrong — please try again or email us directly." />
          )}
          <p className="text-center font-mono text-[0.65rem] uppercase tracking-[0.14em] text-n500">
            Protected by anti-spam verification · We respond to every inquiry
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({ label, name, type, placeholder, error }) {
  const id = `cf-${name}`;
  return (
    <div>
      <label className="field-label" htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} placeholder={placeholder} className="field" />
      {error && <FieldError msg={error} />}
    </div>
  );
}

function FieldError({ msg }) {
  return <p className="mt-2 text-xs font-medium text-error">{msg}</p>;
}
