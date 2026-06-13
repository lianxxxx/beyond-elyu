// Intro — beyond-elyu, section 2. The framing beat under the hero.
// Picks up the hero's argument ("you mistook one town for the whole of it")
// and turns it into the page's thesis on light `sand`, with the first reveal.

import { Reveal } from "@/components/reveal";

export function Intro() {
  return (
    <section
      id="look-closer"
      className="px-gutter py-bay"
      style={{
        // The hero's warm light lands here: open on sand-deep (matching the
        // hero's bridge) and settle into the page's sand as the reader scrolls
        // down. Makes the photo and the argument read as one continuous surface.
        background:
          "linear-gradient(to bottom, var(--color-sand-deep) 0%, transparent 42%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-body text-eyebrow font-medium uppercase text-sea">
            The second look
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-5 max-w-[15ch] font-display text-headline font-semibold tracking-tight text-ink">
            A weekend is not a{" "}
            <span className="text-terracotta">verdict</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-8 md:mt-16 md:grid-cols-12">
          <Reveal delay={160} className="md:col-span-5">
            <p className="font-body text-lede text-ink">
              Overrated, they say, meaning the breaks were crowded and the
              cafés were full. Fair enough. But that was one town on a coast of
              twenty, and the judgment was filed before the province even
              started.
            </p>
          </Reveal>

          <Reveal delay={240} className="md:col-span-6 md:col-start-7">
            <div className="max-w-[68ch] space-y-5 font-body text-base leading-relaxed text-ink">
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

        <Reveal delay={120}>
          <p className="mt-16 max-w-[34ch] font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl md:mt-20">
            <span className="text-sea">One</span> city.{" "}
            <span className="text-sea">Nineteen</span> towns. One coastline most
            people reduce to a single beach.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
