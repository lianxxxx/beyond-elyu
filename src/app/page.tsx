import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { MapSection } from "@/components/map-section";
import { TownsSection } from "@/components/towns-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <MapSection />
      <TownsSection />
    </main>
  );
}
