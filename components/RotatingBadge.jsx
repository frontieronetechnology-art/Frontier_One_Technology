import Icon from "./Icons";

/** Rotating circular-text badge — the classic craft signature. */
export default function RotatingBadge({
  text = "FRONTIER ONE • LET'S TALK • FRONTIER ONE • LET'S TALK • ",
  className = "",
  invert = false,
}) {
  return (
    <div className={`relative h-28 w-28 sm:h-32 sm:w-32 ${className}`} aria-hidden>
      <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full" style={{ animationDuration: "18s" }}>
        <defs>
          <path id="badge-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text
          className="font-mono"
          fontSize="8.2"
          letterSpacing="1.5"
          fill={invert ? "#9EA4AF" : "#737A87"}
        >
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span
        className={`absolute inset-0 m-auto flex h-10 w-10 items-center justify-center rounded-full ${
          invert ? "bg-n100 text-ink" : "bg-ink text-n100"
        }`}
      >
        <Icon name="arrowUpRight" />
      </span>
    </div>
  );
}
