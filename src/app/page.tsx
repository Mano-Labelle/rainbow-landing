import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Journee } from "@/components/sections/Journee";
import { WebAdmin } from "@/components/sections/WebAdmin";
import { Flow } from "@/components/sections/Flow";
import { Features } from "@/components/sections/Features";
import { CSVExport } from "@/components/sections/CSVExport";
import { Portes } from "@/components/sections/Portes";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Resources } from "@/components/sections/Resources";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/brand/Reveal";
import { ENTITY, WHAT_IS } from "@/content/direction";

export default function Home() {
  return (
    <>
      {/* Entity declaration. Hidden visually; read by LLM crawlers. */}
      <div className="sr-only">
        <p>{ENTITY}</p>
        <p>{WHAT_IS}</p>
      </div>

      <Nav />
      <main>
        <Hero />
        <Reveal>
          <Journee />
        </Reveal>
        <Reveal>
          <Problem />
        </Reveal>
        <Reveal>
          <WebAdmin />
        </Reveal>
        <Reveal>
          <Flow />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <CSVExport />
        </Reveal>
        <Reveal>
          <Portes />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <Resources />
        </Reveal>
        <Reveal>
          <CTA />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
