// Field notes — beyond-elyu, the page's one dark beat, in the inspo's "stories"
// shape: an avatar + a near-black card with a headline, then a few dated dispatch
// rows on the left, and a big rounded photo on the right. The single dark block
// gives the white page the contrast rhythm the shot has.

import { FiArrowUpRight, FiGlobe } from "react-icons/fi";
import { Reveal } from "@/components/reveal";

const NOTES = [
  {
    title: "Basi at the source",
    place: "Naguilian",
    date: "Dry season",
    note: "Sugarcane pressed and fermented into amber wine, still aged in clay.",
  },
  {
    title: "The long way north",
    place: "Bangar",
    date: "Year round",
    note: "Inabel cotton coming off wooden pedal looms in the barangays.",
  },
  {
    title: "Urchin by the road",
    place: "Bacnotan",
    date: "In season",
    note: "Sea urchin cracked open and eaten fresh where the catch lands.",
  },
];

export function FieldNotes() {
  return (
    <section id="notes" className="px-gutter py-bay">
      <div className="mx-auto grid max-w-6xl items-stretch gap-x-12 gap-y-10 md:grid-cols-12">
        {/* Left: the dark card + dispatch rows */}
        <div className="flex flex-col md:col-span-6">
          <div className="flex items-center gap-3">
            <img
              src="/img/cove.jpg"
              alt=""
              aria-hidden
              className="size-10 rounded-full object-cover"
              loading="lazy"
            />
            <span className="font-body text-eyebrow font-medium uppercase tracking-[0.18em] text-ink-soft">
              Field notes from the coast
            </span>
          </div>

          <Reveal delay={120}>
            <div className="mt-5 rounded-[1.75rem] bg-ink p-7 text-cream shadow-soft sm:p-9">
              <FiGlobe aria-hidden className="size-5 text-cream/50" />
              <p className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                The coast keeps a longer memory{" "}
                <span className="text-cream/45">than the weekend does.</span>
              </p>
              <p className="mt-4 max-w-[42ch] font-body text-sm leading-relaxed text-cream/70">
                Twenty towns, each with a thing it has never stopped doing — long
                before the surf, long after the swell drops.
              </p>
            </div>
          </Reveal>

          <ul className="mt-4">
            {NOTES.map((n) => (
              <li key={n.title}>
                <a
                  href="#towns"
                  className="group flex items-center justify-between gap-4 border-t border-ink/10 py-4"
                >
                  <span className="min-w-0">
                    <span className="flex items-baseline gap-2.5">
                      <span className="font-display text-lg font-semibold tracking-tight text-ink">
                        {n.title}
                      </span>
                      <span className="font-body text-xs uppercase tracking-[0.14em] text-ink-soft">
                        {n.place} · {n.date}
                      </span>
                    </span>
                    <span className="mt-0.5 block truncate font-body text-sm text-ink-soft">
                      {n.note}
                    </span>
                  </span>
                  <FiArrowUpRight
                    aria-hidden
                    className="size-5 shrink-0 text-ink-soft transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: the big photo */}
        <Reveal delay={160} className="md:col-span-6">
          <figure className="group h-full overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src="/img/surfer.jpg"
              alt="A lone surfer reading a gray-blue swell off the La Union coast at first light."
              className="h-full min-h-[22rem] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              loading="lazy"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
