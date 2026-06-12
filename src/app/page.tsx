import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { MapSection } from "@/components/map-section";
import { TownsSection } from "@/components/towns-section";
import { Closing } from "@/components/closing";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <MapSection />
      <TownsSection />
      <Closing />
      <SiteFooter />
    </main>
  );
}
