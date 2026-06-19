// Intro — beyond-elyu. The "where is it" section: a live Google map of La Union
// on the left, the placing-the-province argument on the right.

import { FiArrowUpRight } from "react-icons/fi";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

export function Intro() {
  return (
    <section id="look-closer" className="px-gutter py-bay">
      <div className="mx-auto grid max-w-6xl items-center gap-x-12 gap-y-10 md:grid-cols-12">
        {/* Left: La Union on a live Google map */}
        <Reveal delay={120} className="md:col-span-5">
          <figure className="group relative overflow-hidden rounded-[2rem] shadow-soft">
            <iframe
              title="Map of La Union, Philippines"
              src="https://www.google.com/maps?q=La+Union,+Philippines&z=10&t=k&output=embed"
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

            {/* corner ↗ — open the full map */}
            <a
              href="https://www.google.com/maps?q=La+Union,+Philippines"
              target="_blank"
              rel="noreferrer"
              aria-label="Open La Union in Google Maps"
              className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-card/85 text-ink backdrop-blur-md transition-colors hover:bg-ink/50 hover:text-cream"
            >
              <FiArrowUpRight aria-hidden className="size-5" />
            </a>
          </figure>
        </Reveal>

        {/* Right: placing the province */}
        <div className="md:col-span-7 md:pl-4">
          <SectionHeader
            eyebrow="The place"
            title={
              <>
                La Union, <span className="text-ink/50">on the map.</span>
              </>
            }
            lede="A thin ribbon of a province on the northwest coast of Luzon — about four hours up the expressway from Manila, pinned between the West Philippine Sea and the Cordillera foothills."
            ledeClassName="max-w-[54ch]"
          />

          <Reveal delay={200}>
            <div className="mt-8 max-w-[58ch] space-y-5 font-body text-base leading-relaxed text-ink">
              <p>
                One city and nineteen towns line the shore — weaving towns in
                the north, a century-old basilica in the south, San Juan just
                one stretch. The coast is only the doorway. Past it, the province
                climbs into valleys, wineries, and waterfalls.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
