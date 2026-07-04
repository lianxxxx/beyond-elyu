// Intro — beyond-elyu. The "where is it" section: a live Google map of La Union
// on the left, with the placing-the-province argument on the right.

import { Reveal } from "@/components/shared/reveal";
import { MapEmbed } from "@/components/sections/map-embed";
import { Accent, SectionHeader } from "@/components/shared/section-header";

export function Intro() {
  return (
    <section id="look-closer" className="px-gutter py-bay-lead">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-x-12 gap-y-10 md:grid-cols-12">
        {/* Left: La Union on a live Google map */}
        <Reveal delay={120} className="md:col-span-5">
          <MapEmbed />
        </Reveal>

        {/* Right: placing the province */}
        <div className="md:col-span-7 md:pl-4">
          <SectionHeader
            eyebrow="The place"
            title={
              <>
                La Union, on the <Accent>map</Accent>.
              </>
            }
            lede="A thin strip on Luzon’s northwest coast, La Union runs from the West Philippine Sea up into the Cordillera foothills, about four hours from Manila and far more than San Juan. One city and nineteen towns stretch from northern weaving communities to Agoo’s basilica, then inland to grape farms, rivers, and waterfalls."
            ledeClassName="max-w-[58ch] text-base!"
          />

          <Reveal delay={200}>
            <p className="mt-6 max-w-[54ch] font-body text-base font-semibold italic text-ink">
              The beach was never the whole story.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
