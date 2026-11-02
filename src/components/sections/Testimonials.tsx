"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { useReducedMotion } from "motion/react";
import { testimonials } from "@/content/site";
import { Lotus } from "../comp/Icons";
import { at } from "../comp/place";
import { SeamWave, TealWaves } from "../comp/Waves";

/** Time on each story: long enough to read it, so longer quotes stay longer. */
const readingTime = (quote: string) => 4000 + quote.length * 35;

function QuoteMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 60 46" className={className}>
      <g fill="currentColor">
        <path d="M24 4C12 8 4 17 4 29c0 8 5 13 11 13 6 0 10-4 10-10s-4-10-9-10h-2c1-6 5-10 12-13z" />
        <path d="M54 4C42 8 34 17 34 29c0 8 5 13 11 13 6 0 10-4 10-10s-4-10-9-10h-2c1-6 5-10 12-13z" />
      </g>
    </svg>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  // Paused while the visitor hovers, focuses or touches the stories.
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const swipeX = useRef<number | null>(null);
  const count = testimonials.length;

  const go = useCallback((next: number) => setIndex((next + count) % count), [count]);

  // Only rotate while the section is on screen; leaving it also clears a touch pause.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (!entry.isIntersecting) setPaused(false);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || reduce || !inView) return;
    const id = window.setTimeout(() => go(index + 1), readingTime(testimonials[index].quote));
    return () => window.clearTimeout(id);
  }, [index, paused, reduce, inView, go]);

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, number> = { ArrowDown: index + 1, ArrowRight: index + 1, ArrowUp: index - 1, ArrowLeft: index - 1, Home: 0, End: count - 1 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const next = (keys[e.key] + count) % count;
    go(next);
    tabsRef.current[next]?.focus();
  };

  const onSwipeStart = (e: PointerEvent) => {
    swipeX.current = e.clientX;
  };
  const onSwipeEnd = (e: PointerEvent) => {
    if (swipeX.current === null) return;
    const dx = e.clientX - swipeX.current;
    swipeX.current = null;
    if (Math.abs(dx) > 48) go(index + (dx < 0 ? 1 : -1));
  };

  const t = testimonials[index];

  return (
    <section
      ref={sectionRef}
      id="stories"
      aria-labelledby="stories-title"
      aria-roledescription="carousel"
      className="comp"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={() => setPaused(true)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="comp-inner">
        <SeamWave />
        <TealWaves className="h-[56px] xl:h-[calc(178*var(--u))]" />
        <div className="comp-stage shell">
          <h2
            id="stories-title"
            {...at({ x: 132, y: 88, w: 420, fs: 98 }, "text-[clamp(2.6rem,10vw,4rem)] font-semibold leading-[0.88] text-pine")}
          >
            Felt, not
            <br />
            just <span className="font-serif font-medium italic text-tan">heard</span>
          </h2>

          <div role="tablist" aria-label="Choose a story" aria-orientation="vertical" {...at({ x: 124, y: 316, w: 376, fs: 29 }, "hidden xl:block")}>
            {testimonials.map((item, i) => {
              const active = i === index;
              return (
                <button
                  key={item.name}
                  ref={(el) => {
                    tabsRef.current[i] = el;
                  }}
                  id={`story-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="story-panel"
                  tabIndex={active ? 0 : -1}
                  onClick={() => go(i)}
                  onKeyDown={onTabKey}
                  className={`flex min-h-11 w-full items-center justify-between border-b px-[0.33em] py-[0.2em] text-left transition-colors ${
                    active
                      ? "rounded-[0.32em] border-transparent border-l-[3px] border-l-pine bg-[#e8eee9] text-pine"
                      : "border-ink/10 text-[#2b1a10] hover:text-pine"
                  }`}
                >
                  <span className="font-display leading-none">{item.name}</span>
                  <span className="text-[0.66em] text-[#4a4441]">{item.place}</span>
                </button>
              );
            })}
          </div>

          {/* Teal arc and gold ring peeking out behind the card */}
          <div aria-hidden {...at({ x: 1062, y: 24, w: 484, h: 470 }, "hidden xl:block")}>
            <div className="absolute inset-0 rounded-full bg-[linear-gradient(200deg,rgb(110_175_178/0.55),rgb(194_218_215/0.25)_45%,transparent_70%)]" />
            <div className="absolute -inset-[2%] translate-x-[1.5%] rounded-full border-[1.5px] border-gold/80" />
          </div>

          <div
            id="story-panel"
            role="tabpanel"
            aria-roledescription="slide"
            aria-labelledby={`story-tab-${index}`}
            onPointerDown={onSwipeStart}
            onPointerUp={onSwipeEnd}
            onPointerCancel={() => (swipeX.current = null)}
            {...at(
              { x: 580, y: 90, w: 920, h: 547, fs: 46 },
              "relative touch-pan-y rounded-[2.5rem] bg-[#fdfaf6] p-7 text-[1.6rem] shadow-[0_40px_80px_-46px_rgb(73_35_16/0.45)] sm:p-10 xl:rounded-[calc(100*var(--u))] xl:px-[calc(90*var(--u))] xl:pb-0 xl:pt-[calc(56*var(--u))]",
            )}
          >
            <QuoteMark className="w-[1.25em] text-[#8fb3a8]" />
            {/* Every story sits in the same grid cell, so the card keeps the height of the longest one. */}
            <div className="grid">
              {testimonials.map((item, i) => {
                const active = i === index;
                return (
                  <figure
                    key={item.name}
                    aria-hidden={!active}
                    inert={!active}
                    className={`[grid-area:1/1] transition-[opacity,visibility] duration-500 ease-calm ${
                      active ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                  >
                    <blockquote className="mt-[0.4em] font-serif text-[0.74em] italic leading-[1.32] text-[#3d1d0e] xl:max-w-[calc(740*var(--u))]">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-[0.7em]">
                      <span aria-hidden className="flex w-[5.2em] items-center gap-[0.35em] text-pine">
                        <span className="h-px flex-1 bg-pine/60" />
                        <Lotus className="w-[1.1em] text-[#3f8a7c]" />
                        <span className="h-px flex-1 bg-pine/60" />
                      </span>
                      <span className="mt-[0.45em] flex items-baseline gap-[0.4em] text-[0.7em]">
                        <span className="font-display text-pine" translate="no">
                          {item.name}
                        </span>
                        <span className="font-body text-[0.8em] text-[#3f3a37]">· {item.place}</span>
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>

          {/* Small screens hide the name list, so the dots choose stories there. Each dot has a 44px hit area. */}
          <div className="-mt-2 flex items-center justify-center xl:hidden">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show story from ${item.name}`}
                aria-current={i === index ? "true" : undefined}
                className="group grid size-11 place-items-center"
              >
                <span
                  className={`block h-2 rounded-full transition-[width,background-color] duration-500 ${
                    i === index ? "w-7 bg-pine" : "w-2 bg-ink/25 group-hover:bg-ink/45"
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live={paused ? "polite" : "off"}>
            Story from {t.name}, {t.place}
          </p>
        </div>
      </div>
    </section>
  );
}
