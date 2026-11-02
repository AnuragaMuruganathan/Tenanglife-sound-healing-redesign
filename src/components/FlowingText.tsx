"use client";

import { useEffect, useId, useRef } from "react";
import { useReducedMotion } from "motion/react";

type Props = {
  words: string[];
  className?: string;
  viewBox?: string;
  /** Path the words travel along. */
  path?: string;
  /** Lay the words on a teal ribbon with fine gold edges. */
  ribbon?: boolean;
  textClassName?: string;
  preserveAspectRatio?: string;
  separator?: string;
};

/** Words drifting along a curved path, looping seamlessly. */
export function FlowingText({
  words,
  className = "",
  viewBox = "0 0 1440 170",
  path = "M-40 110C140 30 320 30 500 90S860 160 1040 90S1340 20 1480 80",
  ribbon = false,
  textClassName = "fill-current font-display text-[50px]",
  preserveAspectRatio = "xMidYMid slice",
  separator = "   ~   ",
}: Props) {
  const id = useId();
  const pathRef = useRef<SVGTextPathElement>(null);
  const reduce = useReducedMotion();
  const set = words.join(separator) + separator;

  useEffect(() => {
    const el = pathRef.current;
    const svg = el?.ownerSVGElement;
    if (!el || !svg || reduce) return;
    let setLength = 0;
    let offset = 0;
    let last = 0;
    let frame = 0;
    const tick = (now: number) => {
      offset -= (now - last) * 0.045;
      last = now;
      if (offset <= -setLength) offset += setLength;
      el.setAttribute("startOffset", String(offset));
      frame = requestAnimationFrame(tick);
    };
    // Only move while the ribbon is on screen.
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      if (!entry.isIntersecting) return;
      // Length of one copy of the phrase, so the loop restarts without a jump.
      setLength ||= el.getSubStringLength(0, set.length);
      last = performance.now();
      frame = requestAnimationFrame(tick);
    });
    io.observe(svg);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [reduce, set]);

  return (
    <svg viewBox={viewBox} preserveAspectRatio={preserveAspectRatio} className={className}>
      <defs>
        <path id={id} d={path} />
      </defs>
      {ribbon ? (
        <>
          <defs>
            <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#1f6f74" />
              <stop offset="0.45" stopColor="#2a8486" />
              <stop offset="1" stopColor="#1d6c72" />
            </linearGradient>
          </defs>
          <use href={`#${id}`} fill="none" stroke="#d9b46a" strokeWidth="128" strokeOpacity="0.9" />
          <use href={`#${id}`} fill="none" stroke={`url(#${id}-g)`} strokeWidth="121" />
          <use href={`#${id}`} fill="none" stroke="#fff" strokeOpacity="0.06" strokeWidth="60" transform="translate(0 -24)" />
        </>
      ) : (
        <use href={`#${id}`} fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" transform="translate(0 22)" />
      )}
      <text className={textClassName} dominantBaseline={ribbon ? "central" : undefined} style={{ whiteSpace: "pre" }}>
        <textPath ref={pathRef} href={`#${id}`} startOffset="0">
          {set.repeat(3)}
        </textPath>
      </text>
    </svg>
  );
}
