import { useId } from "react";

type WavesProps = {
  /** A taller, deeper last layer that can carry the footer. */
  footer?: boolean;
  className?: string;
};

/** Watercolour teal waves along the bottom of a section, with fine flowing lines. */
export function TealWaves({ footer = false, className = "" }: WavesProps) {
  const id = useId();
  const lines = Array.from({ length: 9 }, (_, i) => i * 4);
  return (
    <svg
      aria-hidden
      viewBox={footer ? "0 0 1672 200" : "0 0 1672 160"}
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 bottom-0 w-full ${className}`}
    >
      <defs>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c9e1de" />
          <stop offset="0.5" stopColor="#b6d5d2" />
          <stop offset="1" stopColor="#cfe5e2" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7fbcbe" />
          <stop offset="0.55" stopColor="#97c9c8" />
          <stop offset="1" stopColor="#6fb3b6" />
        </linearGradient>
        <linearGradient id={`${id}-c`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5fa7ab" />
          <stop offset="1" stopColor="#4f9aa0" />
        </linearGradient>
      </defs>
      <path d="M0 66C260 6 540 112 840 62S1420 -4 1672 42V200H0Z" fill={`url(#${id}-a)`} fillOpacity="0.85" />
      <g fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="1" vectorEffect="non-scaling-stroke">
        {lines.map((o) => (
          <path key={o} d={`M0 ${74 + o}C260 ${14 + o} 540 ${120 + o} 840 ${70 + o}S1420 ${4 + o} 1672 ${50 + o}`} />
        ))}
      </g>
      <path d="M0 108C300 56 620 142 920 98S1460 44 1672 88V200H0Z" fill={`url(#${id}-b)`} />
      <path d="M0 136C260 106 560 160 860 132S1400 102 1672 124V200H0Z" fill={`url(#${id}-c)`} />
      {/* A thin wavy crest that hands over to the footer band below. */}
      {footer && <path d="M0 186C300 176 640 196 940 186S1450 176 1672 184V200H0Z" fill="var(--color-pine)" />}
    </svg>
  );
}

/**
 * Top edge of a section that follows a wave: the colour the previous section ended
 * on curls into this one, so the two meet without a hard horizontal line.
 */
export function SeamWave({ color = "#4f9aa0", className = "" }: { color?: string; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1672 40"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 top-0 h-[14px] w-full xl:h-[calc(30*var(--u))] ${className}`}
    >
      <path d="M0 0H1672V12C1420 34 1180 4 900 16S320 40 0 14Z" fill={color} />
    </svg>
  );
}

type ContourProps = {
  side: "left" | "right";
  className?: string;
  style?: React.CSSProperties;
};

/** Contour band pinned to the bottom corner of the screen, sized in design pixels. */
export function EdgeContours({ side, w, h }: { side: "left" | "right"; w: number; h: number }) {
  return (
    <Contours
      side={side}
      className={`bottom-0 hidden xl:block ${side === "right" ? "right-0" : "left-0"}`}
      style={{ width: `calc(${w} * var(--u))`, height: `calc(${h} * var(--u))` }}
    />
  );
}

/** A pale band of fine contour lines that rises from the bottom corner of a section. */
export function Contours({ side, className = "", style }: ContourProps) {
  const id = useId();
  const n = Array.from({ length: 16 }, (_, i) => i);
  return (
    <svg
      aria-hidden
      viewBox="0 0 520 360"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute ${className}`}
      style={{ ...style, transform: side === "right" ? "scaleX(-1)" : undefined }}
    >
      <defs>
        <linearGradient id={`${id}-f`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cfe4e1" stopOpacity="0.9" />
          <stop offset="1" stopColor="#a9d2d0" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path d="M0 40C120 60 240 150 330 240S470 340 520 360H0Z" fill={`url(#${id}-f)`} />
      <g fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="1" vectorEffect="non-scaling-stroke">
        {n.map((i) => (
          <path key={i} d={`M0 ${44 + i * 7}C${120 + i * 4} ${64 + i * 6} ${236 + i * 5} ${154 + i * 4} ${326 + i * 3} ${244 + i * 2}S${468 + i} ${342 + i} 520 360`} />
        ))}
      </g>
    </svg>
  );
}
