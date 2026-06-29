import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Intro } from "@/components/intro";
import { GettingThere } from "@/components/getting-there";
import { FieldNotes } from "@/components/field-notes";
import { CoastStrip } from "@/components/coast-strip";
import { TownsSection } from "@/components/towns-section";
import { Closing } from "@/components/closing";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main>
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
