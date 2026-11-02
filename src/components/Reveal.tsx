import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Fraction of the entry range to wait before fading in, for gentle staggering. */
  delay?: number;
  as?: "div" | "li" | "p" | "h2" | "ul";
  style?: CSSProperties;
};

/**
 * Fades its content in as it scrolls into view, using a CSS scroll timeline
 * (see .reveal in globals.css). Content is always visible without JavaScript.
 */
export function Reveal({ children, className = "", style, delay = 0, as: Tag = "div" }: Props) {
  return (
    <Tag className={`reveal ${className}`} style={delay ? ({ ...style, "--d": delay } as CSSProperties) : style}>
      {children}
    </Tag>
  );
}
