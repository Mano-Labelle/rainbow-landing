import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { ProductExplain } from "@/components/sections/ProductExplain";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { ENTITY, WHAT_IS } from "@/content/direction";

export default function Home() {
  return (
    <>
      {/* Entity declaration — hidden visually but read by LLM crawlers */}
      <div className="sr-only">
        <p>{ENTITY}</p>
        <p>{WHAT_IS}</p>
      </div>

      <Nav />
      <main>
        <Hero />
        <Problem />
        <ProductExplain />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
