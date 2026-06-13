import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { MapSection } from "@/components/map-section";
import { CoastStrip } from "@/components/coast-strip";
import { TownsSection } from "@/components/towns-section";
import { Closing } from "@/components/closing";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <MapSection />
      <CoastStrip />
      <TownsSection />
      <Closing />
      <SiteFooter />
    </main>
  );
}
