import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Intro } from "@/components/intro";
import { SecondLook } from "@/components/second-look";
import { StatsSection } from "@/components/stats-section";
import { MapSection } from "@/components/map-section";
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
      <SecondLook />
      <StatsSection />
      <MapSection />
      <FieldNotes />
      <CoastStrip />
      <TownsSection />
      <Closing />
      <SiteFooter />
    </main>
  );
}
