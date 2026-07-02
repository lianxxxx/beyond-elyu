// Field notes — beyond-elyu, the page's one dark beat, in the inspo's "stories"
// shape: a near-black card with a headline, then a few dated dispatch rows on
// the left, and a big rounded photo on the right. The single dark block
// gives the white page the contrast rhythm the shot has.

import Image from "next/image";
import { FiArrowUpRight, FiMessageCircle } from "react-icons/fi";
import { Reveal } from "@/components/reveal";
import { Accent, SectionHeader } from "@/components/section-header";

const NOTES = [
  {
    title: "Breathtaking — a must visit",
    place: "Ilavayou · Tripadvisor",
    date: "Jan 2026",
    note: "Fresh, cold water and a patient local guide made Tangadan Falls worth the climb.",
    href: "https://www.tripadvisor.com/Attraction_Review-g9798037-d9792156-Reviews-Tangadan_Falls-Bagulin_La_Union_Province_Ilocos_Region_Luzon.html",
  },
  {
    title: "Worth the drive",
    place: "Ayesha O · Google",
    date: "Oct 2025",
    note: "The road is remote, but the breathtaking sea view from Poro Point rewards the trip.",
    href: "https://wanderlog.com/place/details/284527/poro-point",
  },
  {
    title: "We should have stayed longer",
    place: "vansky · Tripadvisor",
    date: "Dec 2024",
    note: "Beach views, sunset verandas, and friendly service turned a trial stay into a return plan.",
    href: "https://www.tripadvisor.com/Hotel_Review-g656268-d6425824-Reviews-Awesome_Hotel-San_Juan_La_Union_Province_Ilocos_Region_Luzon.html",
  },
  {
    title: "A quiet escape from the city",
    place: "Ace Ronald A · Tripadvisor",
    date: "Mar 2024",
    note: "Sea breeze, clean shores, good food, and courteous staff made Sunset Bay worth returning to.",
    href: "https://www.tripadvisor.com/Hotel_Review-g655794-d1235548-Reviews-Sunset_Bay_Beach_Resort-La_Union_Province_Ilocos_Region_Luzon.html",
  },
];

export function FieldNotes() {
  return (
    <section id="notes" className="px-gutter py-bay">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="What people say"
          title={
            <span className="whitespace-nowrap text-[clamp(2rem,7vw,4.75rem)]">
              They <Accent>come back</Accent>.
            </span>
          }
        />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-x-12 gap-y-10 md:mt-16 md:grid-cols-12">
          {/* Left: the dark card + dispatch rows */}
          <div className="flex flex-col md:col-span-6">
            <Reveal delay={120}>
              <div className="rounded-[1.75rem] bg-ink p-7 text-cream shadow-soft sm:p-9">
                <FiMessageCircle aria-hidden className="size-5 text-cream/50" />
                <p className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                  “As I dipped my toes in the sand and watched yet another glorious
                  sunset, <span className="text-cream/45">I began to wonder why I had never been here before.”</span>
                </p>
                <a
                  href="https://www.thepoortraveler.net/2016/07/la-union-beach-san-juan-surf-resort-itinerary-expenses/"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 flex items-center justify-between gap-4 border-t border-cream/15 pt-4"
                >
                  <span className="font-body text-sm leading-relaxed text-cream/70">
                    Yosh Dimen · The Poor Traveler
                  </span>
                  <FiArrowUpRight
                    aria-hidden
                    className="size-5 shrink-0 text-cream/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream"
                  />
                </a>
              </div>
            </Reveal>

            <ul className="mt-4">
              {NOTES.map((n) => (
                <li key={n.title}>
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noreferrer"
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
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/img/visitor-notes-lakbaypinas.jpg"
                alt="Visitors by the shore near Poro Point in the City of San Fernando, La Union."
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent"
              />

              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-card/85 px-3.5 py-1.5 font-body text-[0.78rem] font-medium tracking-tight text-ink backdrop-blur-md">
                  Poro Point Lighthouse
                </span>
                <span className="rounded-full bg-card/85 px-3.5 py-1.5 font-body text-[0.78rem] font-medium tracking-tight text-ink backdrop-blur-md">
                  San Fernando
                </span>
              </div>

              <a
                href="https://lakbaypinas.com/wp-content/uploads/2025/09/snapins-ai_2236020728088282455.jpg"
                target="_blank"
                rel="noreferrer"
                aria-label="Open the Visitor Notes photo source"
                className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-card/90 text-ink backdrop-blur-md transition-colors hover:bg-ink hover:text-cream"
              >
                <FiArrowUpRight aria-hidden className="size-5" />
              </a>

              <figcaption className="absolute inset-x-5 bottom-5 text-cream sm:inset-x-7 sm:bottom-7">
                <p className="whitespace-nowrap font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  Once is never enough.
                </p>
                <span className="mt-1 block font-body text-sm text-cream/75">
                  They always come back.
                </span>
              </figcaption>
            </figure>
            <p className="mt-2 font-body text-xs text-ink-soft">
              Photo:{" "}
              <a
                href="https://lakbaypinas.com/top-10-must-visit-la-union-beach-2025-travel-guide/"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-ink/20 underline-offset-2 hover:text-ink"
              >
                Lakbay Pinas
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
