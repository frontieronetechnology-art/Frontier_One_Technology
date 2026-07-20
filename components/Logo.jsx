/**
 * Frontier One wordmark + mark.
 * Mark: three forward-stepping bars — an abstract "F" in motion,
 * with a bronze keystone dot. Placeholder until final brand logo
 * files are dropped into /public/logos (see IMAGE-PROMPTS.md).
 */
export default function Logo({ invert = false, className = "" }) {
  const ink = invert ? "#F4F6FA" : "#1B2333";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="4" y="5" width="17" height="3.2" rx="0.6" fill={ink} />
        <rect x="4" y="14.4" width="12" height="3.2" rx="0.6" fill={ink} />
        <rect x="4" y="23.8" width="6.5" height="3.2" rx="0.6" fill={ink} />
        <circle cx="25.5" cy="25.4" r="2.6" fill="#B8873A" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="text-[1.05rem] font-semibold tracking-tight"
          style={{ color: ink }}
        >
          Frontier One
        </span>
        <span
          className={`mt-1 font-mono text-[0.55rem] uppercase tracking-[0.34em] ${
            invert ? "text-n500" : "text-n600"
          }`}
        >
          Technology
        </span>
      </span>
    </span>
  );
}
