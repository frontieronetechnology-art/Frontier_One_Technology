"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icons";

const EASE = [0.16, 1, 0.3, 1];
const ENDPOINT = process.env.NEXT_PUBLIC_CAREERS_FORM_ENDPOINT || "";

/** Careers application form — resume upload (PDF/DOC/DOCX), validation, SRS §5.11.4. */
export default function ApplicationForm({ role = "" }) {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("");

  const validate = (data) => {
    const e = {};
    if (!data.get("name")?.trim()) e.name = "Full name is required.";
    const email = data.get("email")?.trim() || "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email address.";
    const phone = data.get("phone")?.trim() || "";
    if (!/^[+\d][\d\s\-().]{6,}$/.test(phone)) e.phone = "Enter a valid phone number.";
    const file = data.get("resume");
    if (!file || !file.name) {
      e.resume = "Attach your resume (PDF, DOC, or DOCX).";
    } else if (!/\.(pdf|docx?)$/i.test(file.name)) {
      e.resume = "Resume must be a PDF, DOC, or DOCX file.";
    }
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
          <h3 className="display mt-6 text-2xl">Application <em>received.</em></h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-n700">
            Thank you for your interest in Frontier One Technology. Our recruitment team
            reviews every application and will be in touch.
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
          {role && <input type="hidden" name="role" value={role} />}
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Full Name" name="name" type="text" placeholder="Your full name" error={errors.name} />
            <Field label="Email Address" name="email" type="email" placeholder="you@example.com" error={errors.email} />
          </div>
          <Field label="Phone Number" name="phone" type="tel" placeholder="+1 (555) 000-0000" error={errors.phone} />
          <div>
            <label className="field-label" htmlFor="af-message">Brief Description / Cover Message</label>
            <textarea
              id="af-message"
              name="message"
              rows={4}
              placeholder="A few lines about your experience and what you're looking for…"
              className="field resize-none"
            />
          </div>
          <div>
            <label className="field-label" htmlFor="af-resume">Resume Upload</label>
            <label
              htmlFor="af-resume"
              className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border border-dashed border-n400 bg-white px-6 py-8 text-center transition-colors hover:border-ink"
            >
              <span className="text-n600"><Icon name="upload" /></span>
              <span className="text-sm text-n700">
                {fileName || "Attach resume — PDF, DOC, or DOCX"}
              </span>
            </label>
            <input
              id="af-resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              className="sr-only"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            />
            {errors.resume && <p className="mt-2 text-xs font-medium text-error">{errors.resume}</p>}
          </div>
          <button type="submit" disabled={status === "sending"} className="btn btn-ink w-full disabled:opacity-60">
            {status === "sending" ? "Submitting…" : "Submit Application"}
            <Icon name="arrow" />
          </button>
          {status === "error" && (
            <p className="text-xs font-medium text-error">
              Something went wrong — please try again or email your resume directly.
            </p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({ label, name, type, placeholder, error }) {
  const id = `af-${name}`;
  return (
    <div>
      <label className="field-label" htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} placeholder={placeholder} className="field" />
      {error && <p className="mt-2 text-xs font-medium text-error">{error}</p>}
    </div>
  );
}
