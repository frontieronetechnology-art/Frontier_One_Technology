/* Hand-drawn icon set — 24×24 grid, ink-inherit. Every domain mark is drawn
   as a technical plate: the subject at 1.5px, plus faint construction guides
   (centre lines, dashed setting-out, dimension ticks) at 0.7px. That second
   layer is what keeps these from reading like stock library glyphs. */

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/* faint drafting layer — construction lines, never the subject itself */
const guide = {
  stroke: "currentColor",
  strokeWidth: 0.7,
  strokeLinecap: "round",
  opacity: 0.38,
};

export const ICONS = {
  cloud: (
    <svg {...base}>
      <g {...guide}>
        <path d="M2.5 20.5h19" strokeDasharray="1 2.5" />
        <path d="M12 2v2M7 20.5v1.5M12 20.5v1.5M17 20.5v1.5" />
      </g>
      <path d="M6.5 17.5a4.2 4.2 0 0 1-.4-8.38A6 6 0 0 1 17.8 9.7a3.9 3.9 0 0 1-.3 7.8h-11Z" />
      <path d="M9.5 12.8 11.2 14l2.4-2.6" />
    </svg>
  ),
  code: (
    <svg {...base}>
      <g {...guide}>
        <path d="M2.5 4.5v15" strokeDasharray="1 2.5" />
        <path d="M2.5 7.5h1.6M2.5 12h1.6M2.5 16.5h1.6" />
      </g>
      <path d="m9 8.5-4 3.5 4 3.5M16 8.5l4 3.5-4 3.5" />
      <path d="m13.6 6-3.2 12" />
    </svg>
  ),
  shield: (
    <svg {...base}>
      <g {...guide}>
        <path d="M12 2.2v19.6" strokeDasharray="1 2.5" />
        <path d="M12 5.4 7 7.4v4c0 3.3 2.1 6 5 7.4" strokeDasharray="1.5 2" />
      </g>
      <path d="M12 3 5 5.8v5.4c0 4.4 3 8 7 9.8 4-1.8 7-5.4 7-9.8V5.8L12 3Z" />
      <path d="m9.2 11.6 2 2 3.6-4" />
    </svg>
  ),
  chart: (
    <svg {...base}>
      <g {...guide}>
        <path d="M4 8h16M4 12h16M4 16h16" strokeDasharray="1 2.5" />
      </g>
      <path d="M4 3.5V20h16" />
      <path d="M8 16.5v-3.5M12 16.5V9M16 16.5v-6" />
      <path d="m6.8 8.4 3.7-2.7 3.5 1.6 4.2-3.1" />
      <circle cx="18.2" cy="4.2" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  pipeline: (
    <svg {...base}>
      <g {...guide}>
        <path d="M6 8.6v6.8M18 3v6.4M18 14.4V21" strokeDasharray="1 2.5" />
      </g>
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="18" cy="12" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <path d="M8.4 6H13a3 3 0 0 1 3 3v.6M15.6 12H11a3 3 0 0 0-3 3v.6" />
      <path d="M13.6 10.2 15.6 12l-2 1.8" />
    </svg>
  ),
  sparks: (
    <svg {...base}>
      <g {...guide}>
        <circle cx="12" cy="10" r="8" strokeDasharray="1.5 3" />
      </g>
      <path d="M12 4c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6Z" />
      <path d="M19 15.5c.25 1.5 1 2.25 2.5 2.5-1.5.25-2.25 1-2.5 2.5-.25-1.5-1-2.25-2.5-2.5 1.5-.25 2.25-1 2.5-2.5ZM5.5 3c.2 1.2.8 1.8 2 2-1.2.2-1.8.8-2 2-.2-1.2-.8-1.8-2-2 1.2-.2 1.8-.8 2-2Z" />
    </svg>
  ),
  compass: (
    <svg {...base}>
      <g {...guide}>
        <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
        <circle cx="12" cy="12" r="6" strokeDasharray="1.5 3" />
      </g>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4 5.4-2.2Z" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  layers: (
    <svg {...base}>
      <g {...guide}>
        <path d="M12 3.5v17" strokeDasharray="1 2.5" />
        <path d="M2.6 7.5 12 2.4l9.4 5.1" strokeDasharray="1.5 2.5" />
      </g>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12.5 8.5 4.5 8.5-4.5M3.5 17 12 21.5 20.5 17" />
    </svg>
  ),
  handshake: (
    <svg {...base}>
      <g {...guide}>
        <path d="M12 3.5c3.6 1.6 5.8 4 6.6 7" strokeDasharray="1.5 2.5" />
        <path d="M12 3.5C8.4 5.1 6.2 7.5 5.4 10.5" strokeDasharray="1.5 2.5" />
      </g>
      <path d="M3 7.5 7 6l5 2 4.5-2L21 7.5v7L16.5 19l-3-2.5" />
      <path d="m12 8-3.5 3.5a1.6 1.6 0 0 0 2.2 2.2L13 11.5l4.5 4" />
      <path d="M3 14.5 7.5 18l1.5-1" />
    </svg>
  ),
  trend: (
    <svg {...base}>
      <g {...guide}>
        <path d="M3 20.5h18" strokeDasharray="1 2.5" />
        <path d="M9 11v9.5M13 14.5v6M21 6v14.5" strokeDasharray="1 2.5" />
      </g>
      <path d="M3 17.5 9 11l4 3.5L21 6" />
      <path d="M15.5 6H21v5.5" />
      <circle cx="9" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="13" cy="14.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  bank: (
    <svg {...base}>
      <g {...guide}>
        <path d="M12 2.6v5.4" strokeDasharray="1 2.5" />
        <path d="M3.5 22h17" />
      </g>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 10v7M9.5 10v7M14.5 10v7M19 10v7" />
      <path d="M3.5 20h17M4.5 17h15" />
    </svg>
  ),
  pulse: (
    <svg {...base}>
      <g {...guide}>
        <path d="M3 12h18" strokeDasharray="1 2.5" />
        <path d="M6 9.5v5M12 7v10M18 9.5v5" strokeDasharray="1 2.5" />
      </g>
      <path d="M3 12h3.6l2-5 3.6 9.4L14.4 9l1.6 3H21" />
      <circle cx="12.2" cy="16.4" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  cart: (
    <svg {...base}>
      <g {...guide}>
        <path d="M8.2 15.5h10.6" strokeDasharray="1 2.5" />
        <path d="M10.5 8v7M14 8v7" strokeDasharray="1 2.5" />
      </g>
      <path d="M3.5 4.5H6l2.2 11h10.6l2.2-8H7" />
      <circle cx="9.5" cy="19.5" r="1.4" />
      <circle cx="17" cy="19.5" r="1.4" />
    </svg>
  ),
  factory: (
    <svg {...base}>
      <g {...guide}>
        <path d="M17 5V2.5M17.5 3.5c1 .6 1 1.6 0 2.2" strokeDasharray="1.5 2" />
        <path d="M3.5 20.5h17" />
      </g>
      <path d="M4 20V9l5.5 3.5V9L15 12.5V6h5v14H4Z" />
      <path d="M7.5 16.5h2M12.5 16.5h2M17 16.5h1.5" />
    </svg>
  ),
  cpu: (
    <svg {...base}>
      <g {...guide}>
        <path d="M12 6v3.5M12 14.5V18M6 12h3.5M14.5 12H18" strokeDasharray="1 2" />
      </g>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </svg>
  ),
  book: (
    <svg {...base}>
      <g {...guide}>
        <path d="M6.5 8.5h3.5M6.5 11.5h3.5M14 8.5h3.5M14 11.5h3.5" strokeDasharray="1 2" />
      </g>
      <path d="M12 6.5C10 4.8 7.3 4.5 4 4.5v14c3.3 0 6 .3 8 2 2-1.7 4.7-2 8-2v-14c-3.3 0-6 .3-8 2Z" />
      <path d="M12 6.5v14" />
    </svg>
  ),
  briefcase: (
    <svg {...base}>
      <g {...guide}>
        <path d="M3.5 16h17" strokeDasharray="1 2.5" />
      </g>
      <rect x="3.5" y="7.5" width="17" height="12" rx="1.5" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 12.5h17" />
      <path d="M10.8 12.5h2.4" strokeWidth="2" />
    </svg>
  ),
  truck: (
    <svg {...base}>
      <g {...guide}>
        <path d="M1 9h3M1 12h2.5" strokeDasharray="1 2" />
        <path d="M2.5 20.5h19" strokeDasharray="1 2.5" />
      </g>
      <path d="M4.5 6h9v10h-9zM13.5 9.5H18l3.5 3.5v3h-8" />
      <circle cx="8" cy="17.5" r="1.6" />
      <circle cx="17.5" cy="17.5" r="1.6" />
    </svg>
  ),
  arrow: (
    <svg {...base} width={16} height={16}>
      <path d="M4 12h15M13.5 5.5 20 12l-6.5 6.5" />
    </svg>
  ),
  arrowUpRight: (
    <svg {...base} width={16} height={16}>
      <path d="M6 18 18 6M9 6h9v9" />
    </svg>
  ),
  check: (
    <svg {...base} width={15} height={15}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  ),
  plus: (
    <svg {...base} width={16} height={16}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  pin: (
    <svg {...base} width={18} height={18}>
      <path d="M12 21s-6.5-5.7-6.5-10.3a6.5 6.5 0 0 1 13 0C18.5 15.3 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </svg>
  ),
  mail: (
    <svg {...base} width={18} height={18}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  ),
  phone: (
    <svg {...base} width={18} height={18}>
      <path d="M6.8 3.5c.6 0 2 2.6 2 3.3 0 1-1.5 1.6-1.5 2.5 0 1.4 2 4 3.4 4 .9 0 1.5-1.5 2.5-1.5.7 0 3.3 1.4 3.3 2 0 1.9-1.7 3.2-3.3 3.2-4.6 0-9.7-5.1-9.7-9.7 0-1.6 1.3-3.3 3.3-3.3Z" />
    </svg>
  ),
  chat: (
    <svg {...base} width={20} height={20}>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5.4A8 8 0 1 1 21 12Z" />
      <path d="M8.5 11h.01M12 11h.01M15.5 11h.01" />
    </svg>
  ),
  close: (
    <svg {...base} width={16} height={16}>
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  ),
  send: (
    <svg {...base} width={16} height={16}>
      <path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z" />
    </svg>
  ),
  upload: (
    <svg {...base} width={18} height={18}>
      <path d="M12 16V4m0 0L7 9m5-5 5 5" />
      <path d="M4 17v2a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 19v-2" />
    </svg>
  ),
};

export default function Icon({ name, className }) {
  const node = ICONS[name];
  if (!node) return null;
  return <span className={className}>{node}</span>;
}
