"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icons";

const EASE = [0.16, 1, 0.3, 1];

const GREETING =
  "Hello! I'm the Frontier One assistant. Ask me about our services, industries, or open roles — or I can connect you with our team.";

const FALLBACK =
  "I want to make sure you get the right answer — let me connect you with our team. Would you like to share your email or schedule a consultation?";

/* Lightweight scripted knowledge base; swap for a hosted AI
   chatbot platform at launch (SRS §5.9). */
const RESPONSES = [
  {
    match: /service|offer|cloud|software|cyber|security|data|devops|ai|artificial/i,
    reply:
      "We provide end-to-end technology solutions: Cloud Solutions, Software Engineering, Cybersecurity, Data & Analytics, DevOps & Automation, and Artificial Intelligence. Every solution is tailored to your business goals. You can explore each one under Services — or I can point you to the team.",
  },
  {
    match: /industr|healthcare|finance|financial|retail|manufactur|education|logistic/i,
    reply:
      "We support eight industries: Financial Services, Healthcare, Retail & E-Commerce, Manufacturing, Technology, Education, Professional Services, and Logistics. The Industries page covers how we help each one.",
  },
  {
    match: /job|career|role|hire|hiring|position|apply|resume|work with you/i,
    reply:
      "We're hiring across engineering, cloud, security, data, AI, and support roles. Visit the Career page to see all open positions and apply — or join our talent network for future openings.",
  },
  {
    match: /price|pricing|cost|quote|estimate|budget/i,
    reply:
      "Every engagement is scoped around your specific objectives, so pricing depends on the solution. The fastest way to get an accurate estimate is a short consultation with our team — no obligation.",
  },
  {
    match: /process|approach|how do you work|methodology|steps/i,
    reply:
      "Every project follows our 8-step delivery framework: Discover, Assess, Strategize, Design, Develop, Validate, Deploy, and Support & Evolve. The Process page walks through each phase.",
  },
  {
    match: /support|maintenance|after|ongoing/i,
    reply:
      "Absolutely — our relationship doesn't end at launch. We offer continuous monitoring, maintenance, optimization, and 24/7 technical support as your business evolves.",
  },
  {
    match: /contact|talk|human|team|call|email|phone|consult/i,
    reply:
      "You can reach our team directly through the Contact page — we respond to every inquiry. Would you like me to take you there?",
    escalate: true,
  },
  {
    match: /hi|hello|hey|namaste/i,
    reply: "Hello! How can I help — services, industries, careers, or connecting with the team?",
  },
];

const QUICK_CHIPS = ["Our services", "Industries", "Open roles", "Talk to the team"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: GREETING }]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing, open]);

  const send = (text) => {
    const clean = text.trim();
    if (!clean) return;
    setMessages((m) => [...m, { from: "user", text: clean }]);
    setInput("");
    setTyping(true);
    const hit = RESPONSES.find((r) => r.match.test(clean));
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        { from: "bot", text: hit ? hit.reply : FALLBACK, escalate: hit ? hit.escalate : true },
      ]);
    }, 900);
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Chat with us"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.7, ease: EASE }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-dark text-n100 shadow-[0_16px_40px_-12px_rgba(45,34,24,0.5)] transition-transform duration-500 hover:scale-105 sm:bottom-7 sm:right-7"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "chat"}
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 30 }}
            transition={{ duration: 0.25 }}
          >
            <Icon name={open ? "close" : "chat"} />
          </motion.span>
        </AnimatePresence>
        {!open && (
          <span className="absolute right-0.5 top-0.5 h-2.5 w-2.5 rounded-full bg-bronze pulse-dot" />
        )}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed bottom-[5.5rem] right-4 z-50 flex h-[30rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-xl border border-n300 bg-white shadow-[0_32px_80px_-24px_rgba(45,34,24,0.4)] sm:bottom-24 sm:right-7"
            role="dialog"
            aria-label="Frontier One assistant"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b rule bg-dark px-5 py-4">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-n800 text-n100">
                <Icon name="sparks" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-bronze pulse-dot" />
              </span>
              <div>
                <p className="text-sm font-semibold text-n100">Frontier One Assistant</p>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-n500">
                  Typically replies instantly
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-n100 p-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-2.5 text-[0.85rem] leading-relaxed ${
                      m.from === "user"
                        ? "bg-dark text-n100"
                        : "border border-n300 bg-white text-n700"
                    }`}
                  >
                    {m.text}
                    {m.escalate && (
                      <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="mt-2 flex items-center gap-1.5 text-[0.8rem] font-medium text-bronze-deep"
                      >
                        Go to Contact <Icon name="arrow" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1.5 rounded-lg border border-n300 bg-white px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-n500 pulse-dot"
                        style={{ animationDelay: `${d * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_CHIPS.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => send(chip)}
                      className="rounded-full border border-n300 bg-white px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-n700 transition-colors hover:border-ink hover:text-ink"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t rule bg-white p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                aria-label="Type your question"
                className="flex-1 rounded-md border border-n300 px-3.5 py-2.5 text-sm text-ink placeholder:text-n500 focus:border-ink focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-dark text-n100 transition-transform hover:scale-105"
              >
                <Icon name="send" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
