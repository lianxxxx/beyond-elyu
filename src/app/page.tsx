import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Intro } from "@/components/intro";
import { StatsSection } from "@/components/stats-section";
import { MapSection } from "@/components/map-section";
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
      <StatsSection />
      <MapSection />
      <CoastStrip />
      <TownsSection />
      <Closing />
      <SiteFooter />
    </main>
  );
}
