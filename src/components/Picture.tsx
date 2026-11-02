import type { CSSProperties } from "react";
import manifest from "@/content/image-manifest.json";

type Entry = { width: number; height: number; widths: number[] };
const images: Record<string, Entry> = manifest;

type Props = {
  /** Image name as built by scripts/optimize-images.mjs, e.g. "hero" or "deco/leaves-tl". */
  name: string;
  /** Empty for decoration, which is then also hidden from assistive tech. */
  alt: string;
  sizes?: string;
  /** The one above-the-fold image the page should fetch first. */
  priority?: boolean;
  /** Load straight away (above the fold) without raising fetch priority. */
  eager?: boolean;
  /** Cover the nearest positioned parent instead of using intrinsic size. */
  fill?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Responsive AVIF/WebP image built ahead of time, so next.config can keep
 * images.unoptimized and the Vercel Image Optimization service is never used.
 */
export function Picture({ name, alt, sizes, priority = false, eager = false, fill = false, className = "", style }: Props) {
  const img = images[name];
  if (!img) throw new Error(`Unknown image "${name}". Add it to scripts/optimize-images.mjs and run npm run images.`);
  const set = (ext: string) => img.widths.map((w) => `/images/${name}-${w}.${ext} ${w}w`).join(", ");
  const fit = sizes ?? `${img.width}px`;
  const decorative = alt === "";

  return (
    <picture className="contents">
      <source type="image/avif" srcSet={set("avif")} sizes={fit} />
      <source type="image/webp" srcSet={set("webp")} sizes={fit} />
      <img
        src={`/images/${name}-${img.width}.webp`}
        alt={alt}
        aria-hidden={decorative || undefined}
        width={img.width}
        height={img.height}
        loading={priority || eager ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding={priority ? "sync" : "async"}
        draggable={false}
        className={`${fill ? "absolute inset-0 size-full object-cover" : ""} ${decorative ? "pointer-events-none select-none" : ""} ${className}`}
        style={style}
      />
    </picture>
  );
}
