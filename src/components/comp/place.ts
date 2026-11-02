import type { CSSProperties } from "react";

type Box = { x?: number; y?: number; w?: number; h?: number; fs?: number };

/**
 * Position and size an element in design pixels of the 1672 x 841 section layout.
 * Only takes effect from the lg breakpoint; below it elements flow normally.
 */
export function at(box: Box, className = "") {
  const style: Record<string, number> = {};
  const cls = [className];
  if (box.x !== undefined && box.y !== undefined) {
    style["--x"] = box.x;
    style["--y"] = box.y;
    cls.push("at");
  }
  if (box.w !== undefined) {
    style["--w"] = box.w;
    cls.push("at-w");
  }
  if (box.h !== undefined) {
    style["--h"] = box.h;
    cls.push("at-h");
  }
  if (box.fs !== undefined) {
    style["--fs"] = box.fs;
    cls.push("fs");
  }
  return { className: cls.join(" ").trim(), style: style as CSSProperties };
}

/** A length in design pixels, for inline styles inside a composition. */
export const u = (n: number) => `calc(${n} * var(--u))`;
