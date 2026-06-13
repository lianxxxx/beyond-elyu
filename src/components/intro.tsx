// Intro — beyond-elyu, section 2. The framing beat under the hero.
// Picks up the hero's argument ("you mistook one town for the whole of it")
// and turns it into the page's thesis on the white page, paired with the first
// real photograph of the coast so the argument arrives with a place attached.

import { Reveal } from "@/components/reveal";
import { SectionHeader, Accent } from "@/components/section-header";

export function Intro() {
  return (
    <section id="look-closer" className="px-gutter py-bay">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="The second look"
          title={
            <>
              A weekend is not a <Accent>verdict</Accent>.
            </>
          }
        />

        <div className="mt-12 grid items-start gap-x-12 gap-y-12 md:mt-16 md:grid-cols-12">
          {/* Left: the argument */}
          <div className="md:col-span-6 lg:col-span-5">
            <Reveal delay={160}>
              <p className="font-body text-lede text-ink-soft">
                Overrated, they say, meaning the breaks were crowded and the
                cafés were full. Fair enough. But that was one town on a coast of
                twenty, and the judgment was filed before the province even
                started.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-6 max-w-[60ch] space-y-5 font-body text-base leading-relaxed text-ink">
                <p>
                  La Union is one city and nineteen towns stitched along the West
                  Philippine Sea. A capital with a century-old temple. A town that
                  still weaves on wooden looms. Waterfalls an hour off the
                  highway, basi wine fermenting in clay jars.
                </p>
                <p>
                  The surf is only the doorway. Most people mistake it for the
                  room.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: a framed photograph of the coast, set off the text column */}
          <Reveal delay={200} className="md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7">
            <figure>
              <div className="overflow-hidden rounded-3xl shadow-soft">
                <img
                  src="/img/coast-dusk.jpg"
                  alt="Spent waves drawing back over black volcanic rock at dusk, along the La Union shore."
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 font-body text-sm text-ink-soft">
                The shore past the breaks, where the day-trippers rarely look.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <p className="mt-16 max-w-[34ch] font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl md:mt-24">
            <span className="text-sea">One</span> city.{" "}
            <span className="text-sea">Nineteen</span> towns.{" "}
            <span className="text-sea">One</span> coastline most people reduce
            to a single beach.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
