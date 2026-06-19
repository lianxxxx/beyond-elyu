// Intro — beyond-elyu. The "where is it" section: a live Google map of La Union
// on the left, the placing-the-province argument on the right.

import { Reveal } from "@/components/reveal";
import { SectionHeader, Accent } from "@/components/section-header";

export function Intro() {
  return (
    <section id="look-closer" className="px-gutter py-bay">
      <div className="mx-auto grid max-w-6xl items-center gap-x-12 gap-y-10 md:grid-cols-12">
        {/* Left: La Union on a live Google map */}
        <Reveal delay={120} className="md:col-span-5">
          <figure className="group relative overflow-hidden rounded-[2rem] shadow-soft">
            <iframe
              title="Map of La Union, Philippines"
              src="https://www.google.com/maps?q=La+Union,+Philippines&z=10&output=embed"
              className="aspect-[4/5] w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            {/* small label pill, like the inspo's INSIGHT pill */}
            <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-card px-3.5 py-1.5 font-body text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink shadow-card">
              La Union, PH
            </span>
          </figure>
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
            lede="A thin ribbon of a province on the northwest coast of Luzon — about four hours up the expressway from Manila, pinned between the West Philippine Sea and the Cordillera foothills."
            ledeClassName="max-w-[54ch]"
          />

          <Reveal delay={200}>
            <div className="mt-8 max-w-[58ch] space-y-5 font-body text-base leading-relaxed text-ink">
              <p>
                One city and nineteen towns run the length of the shore, from the
                weaving towns in the north to the century-old basilica in the
                south. San Juan — the surf town everyone names — is a single
                stretch of it.
              </p>
              <p>
                The coast is only the doorway. The province climbs from there
                into valleys, clay-jar wineries, and waterfalls an hour off the
                highway.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
