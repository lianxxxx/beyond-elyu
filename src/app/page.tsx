import { SiteNav } from "@/components/layout/site-nav";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Intro } from "@/components/sections/intro";
import { GettingThere } from "@/components/sections/getting-there";
import { FieldNotes } from "@/components/sections/field-notes";
import { CoastStrip } from "@/components/sections/coast-strip";
import { TownsSection } from "@/components/sections/towns-section";
import { Closing } from "@/components/sections/closing";
import { SiteFooter } from "@/components/layout/site-footer";

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <Marquee />
      <Intro />
      <GettingThere />
      <TownsSection />
      <FieldNotes />
      <CoastStrip />
      <Closing />
      <SiteFooter />
    </main>
  );
}
