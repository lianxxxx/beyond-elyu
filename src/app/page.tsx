import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { MapSection } from "@/components/map-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <MapSection />
    </main>
  );
}
