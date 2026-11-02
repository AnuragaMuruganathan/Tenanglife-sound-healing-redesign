import { Mail } from "lucide-react";
import { mailto, workshop } from "@/content/site";
import { IconCircle } from "../comp/Bits";
import { Frame } from "../comp/Frame";
import { Bowl, Fork, Lotus, Meditate } from "../comp/Icons";
import { at } from "../comp/place";
import { EdgeContours, SeamWave, TealWaves } from "../comp/Waves";
import { Reveal } from "../Reveal";

const moduleIcons = [
  <Bowl key="bowl" className="w-[58%]" />,
  <Lotus key="lotus" className="w-[58%]" />,
  <Fork key="fork" className="w-[56%]" />,
  <Meditate key="meditate" className="w-[50%]" />,
];

export function Workshop() {
  return (
    <section id="workshop" aria-labelledby="workshop-title" className="comp">
      <div className="comp-inner">
        <SeamWave />
        <TealWaves className="h-[56px] xl:h-[calc(178*var(--u))]" />
        <EdgeContours side="right" w={460} h={330} />
        <div className="comp-stage shell">
          <Reveal
            as="h2"
            {...at({ x: 165, y: 42, w: 720, fs: 84 }, "text-[clamp(2.5rem,9vw,3.8rem)] font-semibold leading-[0.9] text-pine")}
          >
            <span id="workshop-title" className="block">
              <span className="block font-serif text-[0.78em] font-medium italic text-[#2a7680]">Workshop</span>
              <span className="mt-[0.1em] block">
                {workshop.title}
                <br />
                <span className="whitespace-nowrap">{workshop.titleEnd}</span>
              </span>
            </span>
          </Reveal>
          <Reveal delay={0.06} {...at({ x: 165, y: 300, w: 660, fs: 22.5 }, "leading-[1.45] text-[#2f2a27]")}>
            <p>{workshop.body}</p>
          </Reveal>

          <ul {...at({ x: 165, y: 392, w: 680, fs: 19 }, "grid gap-4 sm:grid-cols-2 xl:gap-x-[1.6em] xl:gap-y-[1.2em]")}>
            {workshop.modules.map((mod, i) => (
              <Reveal as="li" key={mod.title} delay={0.05 * i} className="flex items-start gap-[0.9em]">
                <IconCircle className="size-[2.9em]">{moduleIcons[i]}</IconCircle>
                <span>
                  <span className="block font-display text-[1.5em] font-semibold leading-none text-[#2b1a10]">{mod.title}</span>
                  <span className="mt-[0.3em] block leading-snug text-[#4a4441]">{mod.text}</span>
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal
            delay={0.12}
            {...at({ x: 165, y: 614, w: 690, fs: 19 }, "flex flex-wrap items-center justify-between gap-4 xl:gap-[1em]")}
          >
            <div className="border-l-[3px] border-[#e19f43] pl-[1em]">
              <p className="font-display text-[2.1em] font-semibold leading-none text-pine">{workshop.tier.price}</p>
              <p className="mt-[0.3em] text-[#4a4441]">
                {workshop.tier.label} · {workshop.tier.meta}
              </p>
            </div>
            <a
              href={mailto("Workshop: Healing Bowls for Self-Therapy")}
              className="inline-flex min-h-12 items-center justify-center gap-[0.6em] whitespace-nowrap rounded-full bg-pine-btn px-[1.5em] font-medium text-white transition-colors hover:bg-pine max-sm:w-full xl:min-h-[max(48px,3em)]"
            >
              <Mail className="size-[1.1em]" aria-hidden />
              Email us to enrol
            </a>
          </Reveal>

          {/* Photo and caption first on narrow screens, like the other sections. */}
          <Reveal {...at({ x: 880, y: 58, w: 694, h: 656 }, "relative mx-auto aspect-[1.07/1] w-[90%] max-w-lg max-xl:order-first xl:aspect-auto")}>
            <Frame
              name="workshop"
              alt="Dian Sonnerstedt teaching singing bowl techniques in a bamboo studio in Ubud"
              sizes="(min-width: 1280px) 42vw, 90vw"
              swoosh="none"
              ring={{ x: 0.5, y: -2.5 }}
              radius="48% 52% 50% 50% / 52% 50% 50% 48%"
              imgClassName="object-[62%_50%]"
              className="size-full"
            />
          </Reveal>
          <Reveal
            delay={0.2}
            {...at(
              { x: 898, y: 528, w: 280, h: 180, fs: 19 },
              "-mt-10 mx-auto flex max-w-xs flex-col items-center justify-center rounded-[46%_54%_40%_42%/58%_60%_40%_40%] bg-card px-6 py-4 text-center leading-snug text-[#2b1a10] shadow-[0_20px_40px_-26px_rgb(73_35_16/0.45)] max-xl:order-first max-xl:relative xl:mx-0 xl:mt-0 xl:max-w-none xl:px-[1.4em]",
            )}
          >
            <Lotus className="mb-[0.4em] w-[2em] text-[#c9963f]" />
            <span>
              Led by Dian Sonnerstedt,
              <br />
              <em className="font-serif text-[1.08em]">certified sound healing therapist</em>
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
