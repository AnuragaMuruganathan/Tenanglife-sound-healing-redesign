import { Users, Video } from "lucide-react";
import type { ReactNode } from "react";
import { therapies, type Therapy } from "@/content/site";
import { Chip, Deco, PriceCard, Tagline } from "../comp/Bits";
import { Frame } from "../comp/Frame";
import { Fork, Lotus } from "../comp/Icons";
import { at, u } from "../comp/place";
import { EdgeContours, SeamWave, TealWaves } from "../comp/Waves";
import { Picture } from "../Picture";
import { Reveal } from "../Reveal";

const [sounditation, soundchronized, soundpuncture] = therapies;

const icon = {
  lotus: <Lotus className="w-[55%]" />,
  users: <Users className="size-[46%]" strokeWidth={1.6} aria-hidden />,
  video: <Video className="size-[46%]" strokeWidth={1.6} aria-hidden />,
  fork: <Fork className="w-[52%]" />,
};

export function Therapies() {
  return (
    <section id="therapies" aria-label="Therapies">
      <SounditationPanel />
      <SoundchronizedPanel />
      <SoundpuncturePanel />
    </section>
  );
}

/** Shared section shell: soft cream ground, branch shadow and waves. */
function Panel({
  therapy,
  children,
  decor,
  edges,
  seam,
}: {
  therapy: Therapy;
  children: ReactNode;
  decor?: ReactNode;
  edges?: ReactNode;
  seam: ReactNode;
}) {
  return (
    <article id={therapy.id} aria-labelledby={`${therapy.id}-title`} className="comp">
      <div className="comp-inner">
        {seam}
        <Picture
          name="branch-soft"
          alt=""
          sizes="34vw"
          className="absolute -right-[6%] -top-[8%] hidden w-[34%] opacity-25 mix-blend-multiply xl:block"
        />
        {decor}
        <TealWaves className="h-[56px] xl:h-[calc(178*var(--u))]" />
        {edges}
        <div className="comp-stage shell">{children}</div>
      </div>
    </article>
  );
}

function Heading({ id, children, box }: { id: string; children: ReactNode; box: Parameters<typeof at>[0] }) {
  return (
    <Reveal
      as="h2"
      {...at(box, "text-[clamp(2.7rem,10vw,4.2rem)] font-semibold leading-[0.86] tracking-[-0.005em] text-pine")}
    >
      <span id={id} translate="no">
        {children}
      </span>
    </Reveal>
  );
}

function Points({ therapy, box }: { therapy: Therapy; box: Parameters<typeof at>[0] }) {
  return (
    <Reveal as="ul" delay={0.1} {...at(box, "flex flex-wrap gap-x-[1.2em] gap-y-[0.6em] text-[0.95rem]")}>
      {therapy.points.map((p) => (
        <Chip key={p}>{p}</Chip>
      ))}
    </Reveal>
  );
}

function SounditationPanel() {
  const t = sounditation;
  const icons = [icon.lotus, icon.users, icon.video];
  return (
    <Panel
      therapy={t}
      seam={<SeamWave color="#9ccbca" className="hidden xl:block" />}
      edges={<EdgeContours side="left" w={520} h={380} />}
      decor={<Deco name="deco/leaves-tl" className="absolute left-0 top-0 hidden opacity-80 xl:block" style={{ width: u(150) }} />}
    >
      <Reveal {...at({ x: 142, y: 45, w: 570, h: 683 }, "relative mx-auto aspect-[5/6] w-[82%] max-w-sm xl:aspect-auto")}>
        <Frame name={t.image.name} alt={t.image.alt} sizes="(min-width: 1280px) 36vw, 82vw" swoosh="right" className="size-full" />
      </Reveal>
      <Deco name="deco/plumeria-a" {...at({ x: 100, y: 515, w: 274 }, "hidden xl:block")} />

      <Heading id={`${t.id}-title`} box={{ x: 816, y: 52, w: 760, fs: 130 }}>
        {t.name}
      </Heading>
      <Reveal delay={0.05} {...at({ x: 816, y: 196, w: 720, fs: 42 }, "text-[1.6rem]")}>
        <Tagline>{t.tagline}</Tagline>
      </Reveal>
      <Reveal delay={0.08} {...at({ x: 816, y: 258, w: 665, fs: 22.5 }, "leading-[1.45] text-[#3a3532]")}>
        <p>{t.body}</p>
      </Reveal>
      <Points therapy={t} box={{ x: 816, y: 376, w: 760, fs: 20 }} />
      <Reveal as="ul" delay={0.16} {...at({ x: 816, y: 488, w: 778, h: 212, fs: 20 }, "grid gap-3 text-[1rem] sm:grid-cols-3 xl:gap-[1.1em]")}>
        {t.tiers.map((tier, i) => (
          <li key={tier.label}>
            <PriceCard {...tier} service={t.name} icon={icons[i]} layout="stack" />
          </li>
        ))}
      </Reveal>
    </Panel>
  );
}

function SoundchronizedPanel() {
  const t = soundchronized;
  const icons = [icon.lotus, icon.users];
  const [first, ...rest] = t.name.split(" ");
  return (
    <Panel therapy={t} seam={<SeamWave />} edges={<EdgeContours side="right" w={500} h={400} />}>
      {/* Photo first on narrow screens, like the other panels. */}
      <Reveal {...at({ x: 885, y: 45, w: 640, h: 632 }, "relative mx-auto aspect-square w-[86%] max-w-md max-xl:order-first xl:aspect-auto")}>
        <Frame
          name={t.image.name}
          alt={t.image.alt}
          sizes="(min-width: 1280px) 40vw, 86vw"
          swoosh="none"
          ring={{ x: -1, y: -2 }}
          imgClassName={t.image.position}
          className="size-full"
        />
      </Reveal>

      <Heading id={`${t.id}-title`} box={{ x: 165, y: 48, w: 700, fs: 108 }}>
        {first}
        <br />
        {rest.join(" ")}
      </Heading>
      <Reveal delay={0.05} {...at({ x: 165, y: 270, w: 640, fs: 40 }, "text-[1.6rem]")}>
        <Tagline>{t.tagline}</Tagline>
      </Reveal>
      <Reveal delay={0.08} {...at({ x: 165, y: 326, w: 640, fs: 22 }, "leading-[1.45] text-[#3a3532]")}>
        <p>{t.body}</p>
      </Reveal>
      <Points therapy={t} box={{ x: 165, y: 436, w: 680, fs: 20 }} />
      <Reveal as="ul" delay={0.16} {...at({ x: 165, y: 552, w: 700, h: 150, fs: 20.5 }, "grid gap-3 text-[1rem] sm:grid-cols-2 xl:gap-[0.95em]")}>
        {t.tiers.map((tier, i) => (
          <li key={tier.label}>
            <PriceCard {...tier} service={t.name} icon={icons[i]} layout="row" />
          </li>
        ))}
      </Reveal>
    </Panel>
  );
}

function SoundpuncturePanel() {
  const t = soundpuncture;
  const [tier] = t.tiers;
  return (
    <Panel
      therapy={t}
      seam={<SeamWave />}
      edges={
        <>
          <EdgeContours side="left" w={560} h={390} />
          <EdgeContours side="right" w={420} h={370} />
        </>
      }
    >
      <Reveal {...at({ x: 108, y: 48, w: 622, h: 662 }, "relative mx-auto aspect-[15/16] w-[84%] max-w-sm xl:aspect-auto")}>
        <Frame name={t.image.name} alt={t.image.alt} sizes="(min-width: 1280px) 38vw, 84vw" swoosh="right" className="size-full" />
      </Reveal>
      <Deco name="deco/plumeria-b" {...at({ x: 108, y: 512, w: 275 }, "hidden xl:block")} />

      <Heading id={`${t.id}-title`} box={{ x: 790, y: 50, w: 760, fs: 124 }}>
        {t.name}
      </Heading>
      <Reveal delay={0.05} {...at({ x: 790, y: 196, w: 780, fs: 38 }, "text-[1.5rem]")}>
        <Tagline>{t.tagline}</Tagline>
      </Reveal>
      <Reveal delay={0.08} {...at({ x: 790, y: 256, w: 700, fs: 23 }, "leading-[1.5] text-[#3a3532]")}>
        <p>{t.body}</p>
      </Reveal>
      <Points therapy={t} box={{ x: 790, y: 344, w: 720, fs: 20.5 }} />
      <Reveal delay={0.16} {...at({ x: 790, y: 470, w: 520, h: 160, fs: 20.5 }, "text-[0.9rem] sm:text-[1rem]")}>
        <PriceCard {...tier} service={t.name} icon={icon.fork} layout="wide" />
      </Reveal>
    </Panel>
  );
}
