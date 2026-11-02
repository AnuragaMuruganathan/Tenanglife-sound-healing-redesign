import { ArrowRight, ArrowUpRight, Leaf } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { Picture } from "../Picture";
import { Bars } from "./Icons";

/** Italic tagline led by a small sound-bars mark. */
export function Tagline({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <p className={`flex items-center gap-[0.35em] font-serif font-medium italic leading-none text-tan ${className}`} style={style}>
      <Bars className="w-[1.55em] shrink-0 text-[#2f7f86]" />
      <span>{children}</span>
    </p>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <li className="inline-flex items-center gap-[0.7em] rounded-full bg-chip px-[1.25em] py-[0.6em] leading-none text-[#2b2622]">
      <Leaf className="size-[1.15em] text-[#6d9a8b]" aria-hidden />
      {children}
    </li>
  );
}

export function IconCircle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-full bg-sage text-pine ${className}`}>{children}</span>
  );
}

type CardProps = {
  /** Therapy the card books, for the link's accessible name. */
  service: string;
  href: string;
  price: string;
  label: string;
  meta: string;
  icon: ReactNode;
  layout?: "stack" | "row" | "wide";
};

/** Booking card for a price tier, in the three arrangements used by the therapy screens. */
export function PriceCard({ service, href, price, label, meta, icon, layout = "stack" }: CardProps) {
  const name = `Book ${service}, ${label}, ${price}, ${meta} (opens in a new tab)`;
  const arrow = (big = false) => (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-pine text-white transition-transform duration-300 group-hover:rotate-45 ${
        big ? "size-[2.6em]" : "size-[1.85em]"
      }`}
    >
      {big ? <ArrowRight className="size-[1.1em]" aria-hidden /> : <ArrowUpRight className="size-[0.95em]" aria-hidden />}
    </span>
  );
  const shell =
    "group block h-full border border-[#efe2d3] bg-card shadow-[0_18px_40px_-30px_rgb(73_35_16/0.35)] transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-gold/60";

  if (layout === "wide") {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className={`${shell} flex items-center gap-[1.4em] rounded-[2.1em] px-[1.5em] py-[1.2em]`}>
        <IconCircle className="size-[4.4em] bg-chip/70">{icon}</IconCircle>
        <span className="h-[4.6em] w-px bg-ink/15" aria-hidden />
        <span className="flex-1">
          <span className="block font-display text-[1.75em] font-semibold leading-none text-pine">{price}</span>
          <span className="my-[0.6em] block h-px w-[11em] bg-ink/10" aria-hidden />
          <span className="block font-semibold text-[#2b1a10]">{label}</span>
          <span className="block text-[#4a4441]">{meta}</span>
        </span>
        {arrow(true)}
      </a>
    );
  }

  if (layout === "row") {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className={`${shell} rounded-[1.6em] px-[1.3em] py-[1em]`}>
        <span className="flex items-center gap-[0.8em]">
          <IconCircle className="size-[2.7em] bg-chip/70">{icon}</IconCircle>
          <span className="flex-1 font-display text-[1.5em] font-semibold leading-none text-pine">{price}</span>
          {arrow()}
        </span>
        <span className="my-[0.75em] block h-px bg-ink/10" aria-hidden />
        <span className="block font-semibold text-[#2b1a10]">{label}</span>
        <span className="block text-[#4a4441]">{meta}</span>
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className={`${shell} flex flex-col rounded-[1.6em] px-[1.3em] pb-[1.1em] pt-[0.8em]`}>
      {/* Phones: icon, price and arrow share one row so three cards stay compact. */}
      <span className="flex items-center gap-[0.8em] sm:items-start sm:justify-between">
        <IconCircle className="size-[2.7em] sm:size-[3.1em]">{icon}</IconCircle>
        <span className="flex-1 font-display text-[1.5em] font-semibold leading-none text-pine sm:hidden">{price}</span>
        <span className="sm:mt-[0.3em]">{arrow()}</span>
      </span>
      <span className="mt-[0.7em] hidden font-display text-[1.5em] font-semibold leading-none text-pine sm:block">{price}</span>
      <span className="my-[0.7em] block h-px bg-ink/10 sm:my-[0.8em]" aria-hidden />
      <span className="mt-auto block font-semibold leading-snug text-[#2b1a10]">{label}</span>
      <span className="block text-[#4a4441]">{meta}</span>
    </a>
  );
}

type DecoProps = {
  /** Image name from the optimised set, e.g. "deco/leaves-tl". */
  name: string;
  className?: string;
  style?: CSSProperties;
};

/** A decorative cut-out (leaves, flowers, bowls) that is hidden from assistive tech. */
export function Deco({ name, className = "", style }: DecoProps) {
  return <Picture name={name} alt="" className={className} style={style} />;
}
