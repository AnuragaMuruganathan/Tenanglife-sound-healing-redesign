import { ArrowUp } from "lucide-react";
import { links } from "@/content/site";
import { Picture } from "./Picture";
import { Year } from "./Year";

/** Solid pine band under the contact waves; cream on pine keeps the text at about 8:1 contrast. */
export function Footer() {
  return (
    <footer className="on-dark bg-pine text-[0.875rem] text-cream sm:text-[0.95rem]">
      <div className="shell flex flex-wrap items-center justify-between gap-x-8 gap-y-1 py-1.5 xl:h-[var(--footer-h)] xl:py-0">
        <div className="flex items-center gap-4 sm:gap-5">
          <Picture name="logo-cream" alt="TenangLife" sizes="40px" className="h-10 w-auto" />
          <span aria-hidden className="h-7 w-px bg-cream/40" />
          <span>
            © <Year /> <span translate="no">TenangLife</span> · Sound Healing Therapy
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a href={links.bahasa} lang="id" className="inline-flex min-h-11 items-center underline-offset-4 hover:text-white hover:underline">
            Bahasa Indonesia
          </a>
          <span aria-hidden className="h-6 w-px bg-cream/40" />
          <a href="#top" className="inline-flex min-h-11 items-center gap-2 underline-offset-4 hover:text-white hover:underline">
            Back to top
            <ArrowUp className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
