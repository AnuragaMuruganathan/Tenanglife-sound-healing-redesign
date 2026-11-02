import type { CSSProperties, ReactNode } from "react";
import { Picture } from "../Picture";

type Props = {
  /** Image name from the optimised set, e.g. "workshop". */
  name: string;
  alt: string;
  sizes: string;
  /** Side the translucent teal swoosh shows on. */
  swoosh?: "left" | "right" | "none";
  /** Gold ring offset, in percent of the frame. */
  ring?: { x: number; y: number };
  /** Outline radius; defaults to an ellipse. */
  radius?: string;
  imgClassName?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/** Photograph in an organic oval with a fine gold ring and a soft teal swoosh behind it. */
export function Frame({
  name,
  alt,
  sizes,
  swoosh = "right",
  ring = { x: 1.5, y: -2 },
  radius = "50%",
  imgClassName = "",
  className = "",
  style,
  children,
}: Props) {
  return (
    <div className={`relative ${className}`} style={style}>
      {swoosh !== "none" && (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            borderRadius: radius,
            transform: `translateX(${swoosh === "right" ? 5 : -5}%) scale(1.04)`,
            background: `linear-gradient(${swoosh === "right" ? "90deg" : "270deg"}, transparent 52%, rgb(110 175 178 / 0.5) 82%, rgb(194 218 215 / 0.35))`,
          }}
        />
      )}
      <div
        aria-hidden
        className="absolute -inset-[2.5%] border-2 border-gold"
        style={{ borderRadius: radius, transform: `translate(${ring.x}%, ${ring.y}%)` }}
      />
      <div
        className="absolute inset-0 overflow-clip shadow-[0_30px_60px_-34px_rgb(73_35_16/0.45)] [transform:translateZ(0)]"
        style={{ borderRadius: radius }}
      >
        {/* A slow drift while scrolling, on large screens only (see .drift). */}
        <div className="drift absolute inset-x-0 -inset-y-[5%]">
          <Picture name={name} alt={alt} sizes={sizes} fill className={imgClassName} />
        </div>
      </div>
      {children}
    </div>
  );
}
