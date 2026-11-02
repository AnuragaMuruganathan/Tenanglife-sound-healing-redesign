type P = { className?: string; style?: React.CSSProperties };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Lotus({ className = "" }: P) {
  return (
    <svg aria-hidden viewBox="0 0 32 24" className={className} {...stroke}>
      <path d="M16 3c-3 3-4.5 6.5-4.5 10S13 19.5 16 21c3-1.5 4.5-4.5 4.5-8S19 6 16 3z" />
      <path d="M11.6 9.5C8.6 8.8 5.6 9.4 3.5 10.6c.8 5.6 6.2 9.8 12.5 10.4" />
      <path d="M20.4 9.5c3-.7 6-.1 8.1 1.1-.8 5.6-6.2 9.8-12.5 10.4" />
      <path d="M8 21h16" />
    </svg>
  );
}

export function Bowl({ className = "" }: P) {
  return (
    <svg aria-hidden viewBox="0 0 32 24" className={className} {...stroke}>
      <path d="M4 10h24c0 6-5 10-12 10S4 16 4 10z" />
      <path d="M12 20.5h8" />
      <path d="M21 4l6-2.5" />
      <path d="M9 7c2-1 4-1 6 0s4 1 6 0" opacity="0.7" />
    </svg>
  );
}

export function Fork({ className = "" }: P) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className={className} {...stroke}>
      <path d="M13 4v10a3 3 0 0 0 6 0V4" />
      <path d="M16 17v11" />
      <circle cx="16" cy="29" r="1.4" />
      <path d="M8 9c-1.5 1.8-1.5 5.2 0 7M24 9c1.5 1.8 1.5 5.2 0 7M5 7c-2.6 3-2.6 8 0 11M27 7c2.6 3 2.6 8 0 11" />
    </svg>
  );
}

export function Meditate({ className = "" }: P) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className={className}>
      <circle cx="16" cy="6.5" r="3.2" fill="currentColor" />
      <path
        d="M16 11c-2.6 0-4 1.6-4.4 4l-.9 5.2-4.6 2.4c-1 .5-.7 2 .4 2H26.5c1.1 0 1.4-1.5.4-2l-4.6-2.4-.9-5.2c-.4-2.4-1.8-4-4.4-4z"
        fill="currentColor"
      />
      <path d="M5 27.5h22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Symmetric sound bars used beside taglines. */
export function Bars({ className = "" }: P) {
  const h = [6, 12, 9, 20, 30, 20, 12, 26, 14, 8, 4];
  return (
    <svg aria-hidden viewBox="0 0 66 34" className={className}>
      {h.map((v, i) => (
        <line
          key={i}
          x1={4 + i * 5.8}
          x2={4 + i * 5.8}
          y1={17 - v / 2}
          y2={17 + v / 2}
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity={i === 0 || i === h.length - 1 ? 0.5 : 1}
        />
      ))}
    </svg>
  );
}

export function Sparkle({ className = "", style }: P) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className={className} style={style}>
      <path d="M16 1c1.6 9.2 5.8 13.4 15 15-9.2 1.6-13.4 5.8-15 15-1.6-9.2-5.8-13.4-15-15 9.2-1.6 13.4-5.8 15-15z" fill="currentColor" />
    </svg>
  );
}
