// Intro — beyond-elyu. The "where is it" section: a live Google map of La Union
// on the left, with the placing-the-province argument on the right.

import { FiArrowUpRight } from "react-icons/fi";
import { Reveal } from "@/components/reveal";
import { Accent, SectionHeader } from "@/components/section-header";

export function Intro() {
  return (
    <section id="look-closer" className="px-gutter py-bay">
      <div className="mx-auto grid max-w-6xl items-center gap-x-12 gap-y-10 md:grid-cols-12">
        {/* Left: La Union on a live Google map */}
        <Reveal delay={120} className="md:col-span-5">
          <figure className="group relative overflow-hidden rounded-[2rem]">
            <iframe
              title="Map of La Union, Philippines"
              src="https://www.google.com/maps?q=La+Union,+Philippines&z=10&t=k&output=embed"
              className="aspect-[4/5] w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            {/* corner ↗ — open the full map */}
            <a
              href="https://www.google.com/maps?q=La+Union,+Philippines"
              target="_blank"
              rel="noreferrer"
              aria-label="Open La Union in Google Maps"
              className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-card/85 text-ink backdrop-blur-md transition-colors hover:bg-ink hover:text-cream"
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
                La Union, on the <Accent>map</Accent>.
              </>
            }
            lede="On Luzon’s northwest edge, La Union sits between the West Philippine Sea and the Cordillera foothills—about four hours from Manila, with far more beyond San Juan."
            ledeClassName="max-w-[54ch]"
          />

          <Reveal delay={200}>
            <div className="mt-8 max-w-[58ch] space-y-5 font-body text-base leading-relaxed text-ink">
              <p>
                One city and nineteen towns stretch from northern weaving
                communities to Agoo’s basilica, then inland to grape farms,
                rivers, and waterfalls.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
