"use client";

/**
 * Wireframe globe — a slow, silent rotation behind the metrics band.
 *
 * Drawn as pure SVG geometry rather than an image: latitudes are static
 * ellipses, meridians are ellipses whose horizontal scale cycles through
 * ±1, which is what the eye reads as a sphere turning. Costs one paint,
 * no canvas, no library, and it degrades to a still wireframe under
 * prefers-reduced-motion.
 */
const R = 190;
const MERIDIANS = 10;
const LATITUDES = [0.34, 0.62, 0.84, 0.97];
const PERIOD = 42;

export default function GlobeLines({ className = "" }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden>
      <style>{`
        @keyframes f1-meridian {
          0%   { transform: scaleX(1); }
          50%  { transform: scaleX(-1); }
          100% { transform: scaleX(1); }
        }
        @keyframes f1-globe-drift {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        .f1-meridian {
          transform-box: fill-box;
          transform-origin: center;
          animation: f1-meridian ${PERIOD}s linear infinite;
        }
        .f1-globe { animation: f1-globe-drift 16s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .f1-meridian, .f1-globe { animation: none !important; }
        }
        /* phones & tablets get a still wireframe too — the meridian flip is
           decorative and its per-frame composite cost isn't worth it on the
           main thread of a mid-range phone */
        @media (pointer: coarse) {
          .f1-meridian, .f1-globe { animation: none !important; }
        }
      `}</style>

      <svg viewBox="-220 -220 440 440" className="h-full w-full f1-globe" fill="none">
        <defs>
          {/* fade the wireframe out at the rim so it dissolves into the panel
              instead of ending on a hard circle */}
          <radialGradient id="f1-globe-fade">
            <stop offset="35%" stopColor="#E7D3B5" stopOpacity="0.34" />
            <stop offset="72%" stopColor="#B6844D" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#B6844D" stopOpacity="0" />
          </radialGradient>
          <mask id="f1-globe-mask">
            <circle cx="0" cy="0" r={R + 6} fill="url(#f1-globe-fade)" />
          </mask>
        </defs>

        <g mask="url(#f1-globe-mask)" stroke="#E7D3B5" strokeWidth="1">
          {/* limb */}
          <circle cx="0" cy="0" r={R} strokeOpacity="0.55" />

          {/* latitudes */}
          {LATITUDES.map((f) => (
            <g key={f}>
              <ellipse cx="0" cy={-R * f * 0.72} rx={R * Math.sqrt(1 - f * f * 0.52)} ry={R * 0.11} strokeOpacity="0.3" />
              <ellipse cx="0" cy={R * f * 0.72} rx={R * Math.sqrt(1 - f * f * 0.52)} ry={R * 0.11} strokeOpacity="0.3" />
            </g>
          ))}
          <ellipse cx="0" cy="0" rx={R} ry={R * 0.12} strokeOpacity="0.4" />

          {/* meridians */}
          {Array.from({ length: MERIDIANS }).map((_, i) => (
            <ellipse
              key={i}
              className="f1-meridian"
              cx="0"
              cy="0"
              rx={R}
              ry={R}
              strokeOpacity="0.24"
              style={{ animationDelay: `${-(i / MERIDIANS) * PERIOD}s` }}
            />
          ))}

          {/* two quiet bronze nodes — the only non-linear marks, §08 restraint */}
          <circle cx={-R * 0.42} cy={-R * 0.3} r="2.5" fill="#B6844D" stroke="none" />
          <circle cx={R * 0.55} cy={R * 0.18} r="2" fill="#C89A61" stroke="none" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}
