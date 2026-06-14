// Intro — beyond-elyu, recomposed in the inspo's "Get Information" shape:
// a rounded image card on the left (solid chip + date + corner ↗) and the big
// highlighted heading with supporting text on the right.

import { FiArrowUpRight } from "react-icons/fi";
import { Reveal } from "@/components/reveal";
import { SectionHeader, Accent } from "@/components/section-header";

export function Intro() {
  return (
    <section id="look-closer" className="px-gutter py-bay">
      <div className="mx-auto grid max-w-6xl items-center gap-x-12 gap-y-10 md:grid-cols-12">
        {/* Left: the framed photo as a card with overlaid chrome */}
        <Reveal delay={120} className="md:col-span-5">
          <figure className="group relative overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src="/img/coast-dusk.jpg"
              alt="Spent waves drawing back over black volcanic rock at dusk, along the La Union shore."
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
            />

            {/* solid chip + date, like the inspo's INSIGHT pill */}
            <div className="absolute inset-x-4 top-4 flex items-center justify-between">
              <span className="rounded-full bg-card px-3.5 py-1.5 font-body text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink">
                Field note
              </span>
              <span className="rounded-full bg-card/85 px-3 py-1.5 font-body text-xs font-medium text-ink backdrop-blur-md">
                The second look
              </span>
            </div>

            <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
              <p className="max-w-[22ch] font-display text-lg font-semibold leading-snug tracking-tight text-cream">
                The shore past the breaks, where the day-trippers rarely look.
              </p>
              <a
                href="#numbers"
                aria-label="Keep reading"
                className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-cream text-ink transition-colors hover:bg-sea hover:text-cream"
              >
                <FiArrowUpRight aria-hidden className="size-5" />
              </a>
            </figcaption>
          </figure>
        </Reveal>

        {/* Right: the argument */}
        <div className="md:col-span-7 md:pl-4">
          <SectionHeader
            eyebrow="The second look"
            title={
              <>
                A weekend is not a <Accent>verdict</Accent>.
              </>
            }
            lede="Overrated, they say, meaning the breaks were crowded and the cafés were full. Fair enough. But that was one town on a coast of twenty, and the judgment was filed before the province even started."
            ledeClassName="max-w-[54ch]"
          />

          <Reveal delay={200}>
            <div className="mt-8 max-w-[58ch] space-y-5 font-body text-base leading-relaxed text-ink">
              <p>
                La Union is one city and nineteen towns stitched along the West
                Philippine Sea. A capital with a century-old temple. A town that
                still weaves on wooden looms. Waterfalls an hour off the highway,
                basi wine fermenting in clay jars.
              </p>
              <p>
                The surf is only the doorway. Most people mistake it for the
                room.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
