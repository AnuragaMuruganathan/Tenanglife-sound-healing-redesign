"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { links, nav } from "@/content/site";
import { Picture } from "./Picture";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section that crosses the middle band of the viewport.
  useEffect(() => {
    const sections = nav
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -54% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    const clearAtTop = () => {
      if (window.scrollY < window.innerHeight * 0.5) setActive("");
    };
    window.addEventListener("scroll", clearAtTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", clearAtTop);
    };
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Lock scroll, close on Escape and keep focus inside the open menu.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>("a,button");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const raised = solid || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[var(--header-h)] transition-[background-color,border-color,box-shadow] duration-500 ease-calm ${
        raised
          ? "border-b border-[#efe3d5] bg-cream-bg shadow-[0_10px_30px_-26px_rgb(73_35_16/0.35)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-full items-center justify-between gap-6 lg:grid lg:max-w-none lg:grid-cols-[1fr_auto_1fr] xl:pl-[10vw] xl:pr-[15vw]">
        <a href="#top" className="block shrink-0" aria-label="TenangLife, back to top">
          <Picture name="logo-blue" alt="" sizes="84px" eager className="h-[calc(var(--header-h)-12px)] w-auto" />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center xl:gap-3">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative inline-flex min-h-11 items-center px-2.5 font-serif text-[1.3rem] italic text-deep transition-opacity duration-300 xl:px-4 xl:text-[1.45rem] ${
                      isActive ? "opacity-100" : "opacity-90 hover:opacity-100"
                    }`}
                  >
                    {item.label}
                    {isActive && raised && (
                      <motion.span
                        layoutId="nav-mark"
                        aria-hidden
                        className="absolute inset-x-3 bottom-0 flex items-center"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      >
                        <span className="h-px flex-1 bg-deep/60" />
                        <span className="mx-1 size-1.5 rounded-full bg-deep" />
                        <span className="h-px flex-1 bg-deep/60" />
                      </motion.span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 lg:justify-self-end">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[54px] items-center gap-3 whitespace-nowrap rounded-full bg-deep px-6 font-serif text-[1.15rem] font-medium text-white transition-colors duration-300 hover:bg-[#083b52] sm:inline-flex xl:px-9 xl:text-[1.25rem]"
          >
            <WhatsAppIcon className="size-[1.1em]" />
            Book a session
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => (open ? close() : setOpen(true))}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full text-deep transition-colors hover:bg-brand-mist lg:hidden"
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grain fixed inset-x-0 bottom-0 top-[var(--header-h)] flex flex-col overflow-y-auto bg-paper lg:hidden"
          >
            <ul className="shell flex flex-1 flex-col justify-center gap-1 py-8">
              {nav.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`block py-2 font-display text-[clamp(2.6rem,11vw,3.6rem)] leading-none ${
                      active === item.id ? "text-brand" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="shell pb-[max(2rem,env(safe-area-inset-bottom))]">
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                <WhatsAppIcon className="size-4" />
                Book a session on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
