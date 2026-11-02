import { Mail, MapPin } from "lucide-react";
import { contact, links } from "@/content/site";
import { ContactForm } from "../ContactForm";
import { Deco } from "../comp/Bits";
import { at, u } from "../comp/place";
import { SeamWave, TealWaves } from "../comp/Waves";
import { Reveal } from "../Reveal";
import { WhatsAppIcon } from "../WhatsAppIcon";

const details = [
  { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { icon: WhatsAppIcon, label: contact.phoneDisplay, href: links.whatsapp, external: true },
  { icon: MapPin, label: contact.location },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="comp comp-last !pb-8 xl:!pb-0">
      <div className="comp-inner">
        <SeamWave />
        <Deco name="deco/leaves-tl" className="absolute left-0 top-0 hidden xl:block" style={{ width: u(122) }} />
        <TealWaves footer className="hidden xl:block xl:h-[calc(200*var(--u))]" />
        <div className="comp-stage shell">
          <Reveal
            as="h2"
            {...at({ x: 136, y: 102, w: 660, fs: 106 }, "text-[clamp(2.6rem,10vw,4rem)] font-semibold leading-none text-pine")}
          >
            <span id="contact-title">
              Let&rsquo;s get in <span className="font-serif font-medium italic text-tan">touch</span>
            </span>
          </Reveal>
          <Reveal delay={0.06} {...at({ x: 138, y: 250, w: 580, fs: 23 }, "leading-[1.45] text-[#2f2a27]")}>
            <p>Tell us what you need and we&rsquo;ll help you find the right programme for your transformation.</p>
          </Reveal>

          <ul {...at({ x: 138, y: 345, w: 520, fs: 23 }, "grid gap-2 xl:gap-[0.6em]")}>
            {details.map(({ icon: Icon, label, href, external }) => {
              const inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-chip text-pine xl:size-[2.3em]">
                    <Icon className="size-[0.95em]" aria-hidden />
                  </span>
                  <span className="text-[#2b1a10]">{label}</span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex min-h-12 items-center gap-[1.2em] transition-colors hover:text-pine"
                    >
                      {inner}
                    </a>
                  ) : (
                    <span className="flex min-h-12 items-center gap-[1.2em]">{inner}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <Deco name="deco/bowl-contact" {...at({ x: 90, y: 528, w: 387 }, "hidden drop-shadow-[0_16px_18px_rgb(73_35_16/0.2)] xl:block")} />

          <div aria-hidden {...at({ x: 1150, y: 46, w: 448, h: 520 }, "hidden xl:block")}>
            <div className="absolute inset-0 rounded-full bg-[linear-gradient(200deg,rgb(110_175_178/0.55),rgb(194_218_215/0.25)_45%,transparent_72%)]" />
            <div className="absolute -inset-[2%] translate-x-[1%] rounded-full border-[1.5px] border-gold/80" />
          </div>
          <Reveal
            delay={0.1}
            {...at(
              { x: 745, y: 110, w: 795, h: 535, fs: 20.5 },
              "relative rounded-[2.4rem] bg-[#fffcf8] p-7 shadow-[0_40px_80px_-46px_rgb(73_35_16/0.45)] sm:p-10 xl:rounded-[calc(110*var(--u))] xl:pb-0 xl:pl-[calc(92*var(--u))] xl:pr-[calc(66*var(--u))] xl:pt-[calc(72*var(--u))]",
            )}
          >
            <ContactForm />
          </Reveal>

        </div>
      </div>
    </section>
  );
}
