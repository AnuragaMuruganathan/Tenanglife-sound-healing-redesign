import { Activity, CalendarDays, Feather, Mail, Moon, ShieldCheck } from "lucide-react";
import { events, links, mailto } from "@/content/site";
import { Deco, IconCircle } from "../comp/Bits";
import { Frame } from "../comp/Frame";
import { Bars, Lotus } from "../comp/Icons";
import { at, u } from "../comp/place";
import { SeamWave, TealWaves } from "../comp/Waves";
import { Reveal } from "../Reveal";
import { WhatsAppIcon } from "../WhatsAppIcon";

const icons = {
  stress: <Lotus className="w-[56%]" />,
  sleep: <Moon className="size-[46%]" strokeWidth={1.6} aria-hidden />,
  pain: <Feather className="size-[46%]" strokeWidth={1.6} aria-hidden />,
  flow: <Activity className="size-[46%]" strokeWidth={1.6} aria-hidden />,
  immunity: <ShieldCheck className="size-[46%]" strokeWidth={1.6} aria-hidden />,
} as const;

const secondary =
  "inline-flex min-h-11 items-center justify-center gap-[0.6em] whitespace-nowrap rounded-full border border-pine/40 px-[1.35em] font-medium text-pine transition-colors hover:bg-sage";

export function Events() {
  return (
    <section id="events" aria-labelledby="events-title" className="comp">
      <div className="comp-inner">
        <SeamWave />
        <Deco name="deco/leaves-tr" className="absolute right-0 top-0 hidden xl:block" style={{ width: u(170) }} />
        <TealWaves className="h-[56px] xl:h-[calc(178*var(--u))]" />
        <div className="comp-stage shell">
          <Reveal {...at({ x: 80, y: 40, w: 640, h: 640 }, "relative mx-auto aspect-square w-[86%] max-w-md xl:aspect-auto")}>
            <div aria-hidden className="absolute -inset-[4.5%] rounded-full bg-[#f6e9da]/80" />
            <div aria-hidden className="absolute -inset-[6.5%] rounded-full border border-white/80" />
            <Frame
              name="events"
              alt="Group sound healing session in an open-air pavilion surrounded by jungle"
              sizes="(min-width: 1280px) 40vw, 86vw"
              swoosh="none"
              ring={{ x: 0, y: 0 }}
              className="size-full"
            />
          </Reveal>

          <Reveal
            as="h2"
            {...at({ x: 826, y: 40, w: 780, fs: 114 }, "text-[clamp(2.6rem,9.5vw,4rem)] font-semibold leading-[0.86] text-pine")}
          >
            <span id="events-title">
              Event, Home
              <br />
              Service <span className="font-serif font-medium italic text-[#2b1408]">&amp; Retreat</span>
            </span>
          </Reveal>
          <Reveal delay={0.06} {...at({ x: 826, y: 252, w: 700, fs: 22 }, "flex items-center gap-[0.9em] leading-[1.4] text-[#2f2a27]")}>
            <Bars className="w-[2.6em] shrink-0 text-pine" />
            <p>{events.body}</p>
          </Reveal>

          <ul {...at({ x: 826, y: 340, w: 762, fs: 19 }, "grid gap-3 sm:grid-cols-2 xl:gap-x-[1.1em] xl:gap-y-[0.9em]")}>
            {events.benefits.map((b, i) => (
              <Reveal
                as="li"
                key={b.key}
                delay={0.05 * i}
                className="flex items-center gap-[0.8em] rounded-full bg-[#fbefe1] py-[0.5em] pl-[0.5em] pr-[1.3em] shadow-[0_12px_28px_-24px_rgb(73_35_16/0.45)]"
              >
                <IconCircle className="size-[2.9em]">{icons[b.key as keyof typeof icons]}</IconCircle>
                <span className="leading-tight">
                  <span className="block font-display text-[1.5em] leading-none text-[#2b1a10]">{b.title}</span>
                  <span className="mt-[0.2em] block text-[#4a4441]">{b.text}</span>
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2} {...at({ x: 826, y: 622, w: 762, fs: 19 }, "flex flex-wrap gap-3 xl:gap-[0.7em]")}>
            <a
              href={mailto("Event, Home Service & Retreat")}
              className="inline-flex min-h-11 items-center justify-center gap-[0.6em] whitespace-nowrap rounded-full bg-pine-btn px-[1.35em] font-medium text-white transition-colors hover:bg-pine"
            >
              <Mail className="size-[1.1em]" aria-hidden />
              Email us
            </a>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={secondary}>
              <WhatsAppIcon className="size-[1.1em]" />
              WhatsApp
            </a>
            <a href={links.retreatDeck} target="_blank" rel="noopener noreferrer" className={secondary}>
              <CalendarDays className="size-[1.1em]" aria-hidden />
              Retreat deck
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
