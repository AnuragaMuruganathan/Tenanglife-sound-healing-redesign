import { HandHeart, MonitorPlay, PlayCircle } from "lucide-react";
import { instruments } from "@/content/site";
import { Deco } from "../comp/Bits";
import { Picture } from "../Picture";
import { Bars, Sparkle } from "../comp/Icons";
import { at, u } from "../comp/place";
import { Swash } from "../comp/Swash";
import { FlowingText } from "../FlowingText";
import { Reveal } from "../Reveal";

const formats = [
  { icon: HandHeart, label: "In person, Ubud" },
  { icon: MonitorPlay, label: "Live online" },
  { icon: PlayCircle, label: "Video recordings" },
];

// Centre line of the teal ribbon, in the 2172 x 320 ribbon box.
const RIBBON = "M-80 100C300 80 700 200 1030 232S1760 110 2260 70";
const RIBBON_NARROW = "M-80 104C300 74 700 128 1480 80";

export function Intro() {
  return (
    <section aria-labelledby="intro-title" className="comp banner">
      <div className="comp-inner">
        <Picture
          name="flower"
          alt=""
          className="absolute hidden -rotate-[78deg] opacity-30 xl:block"
          style={{ left: u(-70), top: u(160), width: u(250) }}
        />

        {/* Pale aqua water with fine lines, behind the ribbon */}
        <svg
          aria-hidden
          viewBox="0 0 2172 524"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden xl:block"
          style={{ height: u(524) }}
        >
          <path d="M1250 524C1560 400 1880 190 2172 10V524Z" fill="#d7e9e6" fillOpacity="0.75" />
          <g fill="none" stroke="#fff" strokeOpacity="0.75" strokeWidth="1" vectorEffect="non-scaling-stroke">
            {Array.from({ length: 14 }, (_, i) => (
              <path key={i} d={`M${1270 + i * 14} 524C${1580 + i * 10} ${400 + i * 4} ${1890 + i * 6} ${195 + i * 9} 2172 ${18 + i * 12}`} />
            ))}
          </g>
          <path d="M0 290C320 318 620 412 920 432S1520 392 2172 322V524H0Z" fill="#dcebe8" fillOpacity="0.8" />
          <g fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="1" vectorEffect="non-scaling-stroke">
            {Array.from({ length: 10 }, (_, i) => (
              <path key={i} d={`M0 ${300 + i * 9}C320 ${328 + i * 9} 620 ${422 + i * 8} 920 ${442 + i * 7}S1520 ${402 + i * 7} 2172 ${332 + i * 8}`} />
            ))}
          </g>
          <path d="M0 432C400 402 800 472 1200 456S1800 420 2172 440V524H0Z" fill="#bcd9d6" fillOpacity="0.85" />
          <path d="M0 484C500 466 1000 506 1500 490S1950 470 2172 482V524H0Z" fill="#9ccbca" />
        </svg>

        <div className="comp-stage shell">
          <Reveal
            as="h2"
            {...at({ x: 208, y: 108, w: 960, fs: 113 }, "text-[clamp(2.3rem,8vw,3.4rem)] font-medium leading-[0.92] text-[#246e86]")}
          >
            <span id="intro-title">
              Don&rsquo;t let stress and
              <br />
              busyness drain your <span className="font-serif text-[0.94em] font-medium italic text-tan">peace.</span>
            </span>
          </Reveal>
          <Swash {...at({ x: 828, y: 318, w: 252 }, "hidden text-tan xl:block")} />

          <div aria-hidden {...at({ x: 1166, y: 136, w: 24, h: 196 }, "hidden xl:block")}>
            <span className="absolute inset-y-0 left-1/2 w-px bg-[#7c8f93]/60" />
            <Sparkle className="absolute left-0 top-1/2 w-full -translate-y-1/2 text-[#3f7d86]" />
          </div>

          <Reveal delay={0.08} {...at({ x: 1393, y: 92, w: 366, fs: 19 }, "hidden items-center gap-[1.4em] xl:flex")}>
            <span aria-hidden className="h-px flex-1 bg-[#7c8f93]/50" />
            <Bars className="w-[4.6em] text-[#3f7d86]" />
            <span aria-hidden className="h-px flex-1 bg-[#7c8f93]/50" />
          </Reveal>
          <Reveal delay={0.1} {...at({ x: 1238, y: 160, w: 740, fs: 29 }, "text-[1.1rem] leading-[1.45] text-[#2f2a27]")}>
            <p>Create harmony within yourself through sound waves and vibration, for a more balanced and healthy life.</p>
          </Reveal>
          <Reveal as="ul" delay={0.14} {...at({ x: 1218, y: 268, w: 900, fs: 25 }, "flex flex-wrap gap-2 text-[0.95rem] xl:gap-[1.1em]")}>
            {formats.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-[0.65em] rounded-full border border-[#cfc5b8] bg-white/40 px-[1.45em] py-[0.8em] leading-none text-[#2b1a10]"
              >
                <Icon className="size-[1.2em] text-[#2f7c84]" strokeWidth={1.7} aria-hidden />
                {label}
              </li>
            ))}
          </Reveal>

          <div
            role="img"
            aria-label={`Instruments: ${instruments.join(", ")}`}
            {...at({ x: 0, y: 330, w: 2172, h: 320 }, "-mx-[var(--gutter)] xl:mx-0")}
          >
            {/* Narrow screens: a flatter ribbon that fills its box, so no empty bands. */}
            <FlowingText
              words={instruments}
              viewBox="0 0 1400 180"
              path={RIBBON_NARROW}
              ribbon
              preserveAspectRatio="xMidYMid slice"
              textClassName="fill-[#fdf2e1] font-display text-[62px]"
              separator="    ~    "
              className="block h-[92px] w-full sm:h-[120px] xl:hidden"
            />
            <FlowingText
              words={instruments}
              viewBox="0 0 2172 320"
              path={RIBBON}
              ribbon
              preserveAspectRatio="xMidYMid slice"
              textClassName="fill-[#fdf2e1] font-display text-[62px]"
              separator="    ~    "
              className="hidden size-full xl:block"
            />
          </div>
          <Deco name="deco/bowl-intro" {...at({ x: 1716, y: 527, w: 440 }, "hidden drop-shadow-[0_16px_18px_rgb(73_35_16/0.2)] xl:block")} />
        </div>
      </div>
    </section>
  );
}
