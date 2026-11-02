import { ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { links } from "@/content/site";
import { Picture } from "../Picture";
import { WhatsAppIcon } from "../WhatsAppIcon";

/** A length in design pixels of the 1672 x 941 hero composition. */
const u = (n: number) => `calc(${n} * var(--u))`;
/** Delay for the CSS entrance (.rise in globals.css). */
const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" className="hero relative isolate overflow-clip">
      <div className="hero-inner">
        <Picture name="flower" alt="" className="hero-daisy absolute opacity-15" />
        <Picture
          name="branch-soft"
          alt=""
          sizes="34rem"
          className="absolute -left-24 top-[30%] hidden w-[34rem] opacity-30 mix-blend-multiply xl:block"
        />
        <Picture name="hero-vine" alt="" className="hero-vine vine-sway absolute right-0 z-10 xl:z-30" />

        <HeroCopy />

        <div className="hero-art">
          <div className="hero-stage">
            <HeroArt />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
    <div className="hero-copy shell relative z-20 pb-6 pt-[calc(var(--header-h)+2rem)] xl:pb-0 xl:pt-0">
      <h1 className="text-[clamp(3.4rem,11vw,5rem)] font-semibold leading-[0.82] tracking-[-0.005em] text-deep xl:text-[length:calc(132*var(--u))]">
        <span className="relative">
          <Curl className="absolute -left-[0.085em] -bottom-[0.015em] w-[0.18em]" />
          Sound Healing
        </span>
        <br />
        <span className="ml-[0.32em] whitespace-nowrap">
          Therapy
          <Flourish className="ml-[0.2em] inline-block w-[1.5em] align-[0.42em]" />
        </span>
      </h1>

      <figure
        className="rise mt-8 flex items-center gap-5 xl:mt-[calc(44*var(--u))] xl:gap-[calc(28*var(--u))]"
        style={delay(0.2)}
      >
        <Waveform className="w-16 shrink-0 text-[#a9bdc3] xl:w-[calc(86*var(--u))]" />
        <div>
          <blockquote className="font-serif text-[1.6rem] italic leading-tight text-[#2a1208] xl:text-[length:calc(31*var(--u))]">
            &ldquo;Sound is the medicine of the future.&rdquo;
          </blockquote>
          <figcaption className="mt-1 pl-1 font-serif text-[1rem] text-[#6d5f57] xl:mt-[calc(6*var(--u))] xl:text-[length:calc(19*var(--u))]">
            &mdash; Edgar Cayce
          </figcaption>
        </div>
      </figure>

      <p
        className="rise mt-6 max-w-[34rem] font-serif text-[1.15rem] leading-[1.45] text-[#594e4a] xl:mt-[calc(28*var(--u))] xl:max-w-[calc(575*var(--u))] xl:text-[length:calc(21*var(--u))]"
        style={delay(0.35)}
      >
        Singing bowls, gongs, drums, flutes and chimes to balance your energy and release anxiety. Private and group
        sessions in Ubud, Bali.
      </p>

      <div
        className="rise mt-7 grid gap-3 font-serif font-medium sm:flex sm:flex-wrap xl:mt-[calc(34*var(--u))] xl:gap-[calc(25*var(--u))]"
        style={delay(0.5)}
      >
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn inline-flex min-h-12 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-deep px-7 text-[1.1rem] text-white transition-colors duration-300 hover:bg-[#083b52]"
        >
          <WhatsAppIcon className="size-[1.15em]" />
          Book on WhatsApp
        </a>
        <a
          href="#therapies"
          className="hero-btn inline-flex min-h-12 items-center justify-center gap-3 whitespace-nowrap rounded-full border-[1.5px] border-deep/80 px-7 text-[1.1rem] text-deep transition-colors duration-300 hover:bg-deep hover:text-white"
        >
          Explore therapies
          <ArrowRight className="size-[1.05em]" aria-hidden />
        </a>
      </div>
    </div>
  );
}

function HeroArt() {
  return (
    <>
      {/* Outline ring and sparkle, behind everything else. */}
      <svg aria-hidden viewBox="0 0 1672 941" className="absolute inset-0 size-full overflow-visible">
        <path
          className="draw"
          d="M1440.6 236.2A332 332 0 1 0 1049.7 754.9"
          pathLength={1}
          fill="none"
          stroke="#0b4f6c"
          strokeWidth="1.6"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="twinkle"
          style={{ transformOrigin: "858px 425px" }}
          d="M858 407c1.8 10.5 6.2 15.6 16 18-9.8 2.4-14.2 7.5-16 18-1.8-10.5-6.2-15.6-16-18 9.8-2.4 14.2-7.5 16-18z"
          fill="#0b4f6c"
        />
      </svg>

      <div
        className="settle absolute overflow-clip rounded-full"
        style={{ left: u(882), top: u(145), width: u(616), height: u(616) }}
      >
        <Picture
          name="hero"
          alt="Hands holding a Tibetan bell above singing bowls during a sound healing session"
          sizes="(min-width: 1280px) 40vw, 80vw"
          priority
          fill
          className="object-[80%_45%]"
        />
      </div>

      <HeroWaves />

      <Picture
        name="hero-stilllife"
        alt=""
        className="absolute h-auto drop-shadow-[0_14px_18px_rgb(73_35_16/0.18)]"
        style={{ left: u(1180), top: u(684), width: u(412) }}
      />
    </>
  );
}

/** Layered watercolour waves; drawn wider than the stage so they always reach the left edge. */
function HeroWaves() {
  return (
    <svg
      aria-hidden
      viewBox="-1000 0 2672 941"
      preserveAspectRatio="none"
      className="absolute top-0"
      style={{ left: u(-1000), width: u(2672), height: u(941) }}
    >
      <defs>
        <linearGradient id="wv-light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e6edf0" />
          <stop offset="1" stopColor="#cfdde4" />
        </linearGradient>
        <linearGradient id="wv-mid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#bcd0da" />
          <stop offset="1" stopColor="#a9c2cf" />
        </linearGradient>
        <linearGradient id="wv-deep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7fa4b7" />
          <stop offset="1" stopColor="#93b3c3" />
        </linearGradient>
        <linearGradient id="wv-right" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e3ebef" />
          <stop offset="0.6" stopColor="#ccdbe3" />
          <stop offset="1" stopColor="#b2c8d4" />
        </linearGradient>
        <linearGradient id="wv-wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ecdfcf" />
          <stop offset="1" stopColor="#dccab3" />
        </linearGradient>
      </defs>

      {/* Bottom-left swell */}
      <path d="M-1000 730C-600 700-200 742 0 744C120 744 230 774 360 806C520 852 700 836 860 866C960 886 1040 907 1110 941H-1000Z" fill="url(#wv-light)" />
      <g fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="1.2" vectorEffect="non-scaling-stroke">
        <path d="M-1000 752C-600 722-200 764 0 766C120 766 230 794 360 826C520 868 700 856 860 886" />
        <path d="M-1000 772C-600 744-200 784 0 786C130 786 240 814 380 842C540 880 720 872 880 904" />
      </g>
      <path d="M-1000 790C-600 760-200 790 0 792C150 790 300 830 470 858C640 886 820 880 1000 941H-1000Z" fill="url(#wv-mid)" fillOpacity="0.85" />
      <path d="M-1000 868C-500 850-150 860 0 862C160 862 330 900 520 941H-1000Z" fill="url(#wv-deep)" />
      <path d="M-1000 915C-500 905-100 905 0 908C110 908 220 925 290 941H-1000Z" fill="#5f8fa4" />

      {/* Cream swoosh that sweeps up and trims the photograph */}
      <path d="M985 941C1100 858 1262 798 1396 710C1500 640 1590 545 1672 466V941Z" fill="#fbf3ec" />
      <path d="M1058 941C1172 874 1322 828 1447 744C1547 676 1622 592 1672 548V941Z" fill="url(#wv-right)" />
      <g fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="1.2" vectorEffect="non-scaling-stroke">
        <path d="M1090 941C1200 880 1345 840 1468 760C1560 700 1630 622 1672 586" />
        <path d="M1128 941C1235 888 1372 852 1492 778C1580 722 1640 652 1672 626" />
      </g>
      <path d="M990 941C1110 904 1258 884 1420 879C1522 876 1604 890 1672 906V941Z" fill="url(#wv-wood)" />
      <path d="M1372 941C1458 914 1560 872 1672 818V941Z" fill="url(#wv-mid)" />
      <path d="M1520 941C1580 924 1630 906 1672 894V941Z" fill="#7fa3b6" />

      {/* Soft sand edge that hands over to the next section */}
      <path d="M-1000 932C-400 922 400 946 900 934C1200 927 1450 937 1672 930V941H-1000Z" fill="#fbf1e8" />
    </svg>
  );
}

function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 132 50" className={className}>
      <path
        d="M20 33c-8 3-15-3-12-10 3-6 13-6 15 1 2 7-5 12-11 9M23 24c18 16 44 18 66 4 14-9 28-16 37-8 6 6 1 15-6 13-6-2-5-10 1-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Curl({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 30" className={className}>
      <path
        d="M22 27C11 30 2 24 3 15 4 9 12 7 14 13c1.6 4.6-4 7-6 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Waveform({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 86 50" className={className}>
      <path
        d="M0 25h12l3-6 3 12 3-20 3 28 3-34 3 40 3-30 3 22 3-14 3 8 3-4 3 2h3l3-8 3 16 3-24 3 30 3-22 3 14 3-6h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
