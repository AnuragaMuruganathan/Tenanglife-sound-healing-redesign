import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Contact } from "@/components/sections/Contact";
import { Events } from "@/components/sections/Events";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Testimonials } from "@/components/sections/Testimonials";
import { Therapies } from "@/components/sections/Therapies";
import { Workshop } from "@/components/sections/Workshop";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-brand px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Therapies />
        <Workshop />
        <Events />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
