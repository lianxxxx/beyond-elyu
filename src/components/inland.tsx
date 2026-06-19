// Inland — beyond-elyu. The thesis pays off: leave the shore and the province
// climbs into falls and foothills. Photo card on the left (mirroring the map
// section's layout), the copy on the right.

import { FiArrowUpRight } from "react-icons/fi";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";

export function Inland() {
  return (
    <section id="inland" className="px-gutter py-bay">
      <div className="mx-auto grid max-w-6xl items-center gap-x-12 gap-y-10 md:grid-cols-12">
        {/* Left: the falls as a framed photo card */}
        <Reveal delay={120} className="md:col-span-5">
          <figure className="group relative overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src="/img/tangadan-trek.webp"
              alt="Swimmers in the cold green plunge pool at the base of Tangadan Falls, ringed by sheer rock walls near San Gabriel."
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent"
            />

            {/* label pill */}
            <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-card px-3.5 py-1.5 font-body text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink shadow-card">
              Tangadan Falls
            </span>

            {/* corner ↗ */}
            <a
              href="#towns"
              aria-label="Find San Gabriel in the town index"
              className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-card/85 text-ink backdrop-blur-md transition-colors hover:bg-ink/50 hover:text-cream"
            >
              <FiArrowUpRight aria-hidden className="size-5" />
            </a>
          </figure>
        </Reveal>

        {/* Right: the climb */}
        <div className="md:col-span-7 md:pl-4">
          <SectionHeader
            eyebrow="Inland"
            title={
              <>
                Then the road goes <span className="text-ink/50">up.</span>
              </>
            }
            lede="Turn from the surf and within the hour the coast folds into foothills — cold rivers, cliff walls, and water pooling green where the falls come down."
            ledeClassName="max-w-[54ch]"
          />

          <Reveal delay={200}>
            <div className="mt-8 max-w-[58ch] space-y-5 font-body text-base leading-relaxed text-ink">
              <p>
                Out of San Gabriel, a short trek ends at Tangadan Falls, where the
                river gathers into a deep green basin under the rock. Keep climbing
                and the province opens into valleys and terraces that forget the
                beach entirely.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
