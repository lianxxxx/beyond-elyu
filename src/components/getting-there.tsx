import Image from "next/image";
import {
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiNavigation,
} from "react-icons/fi";

import { Reveal } from "@/components/reveal";
import { Accent } from "@/components/section-header";

const OPTIONS = [
  {
    title: "Take a direct bus",
    detail:
      "Partas and Viron run north from Metro Manila to San Fernando and San Juan.",
    meta: "Allow roughly 5–7 hours",
    href: "https://www.geckoroutes.com/philippines/manila-to-la-union/",
    icon: FiClock,
    iconClassName: "size-4",
  },
  {
    title: "Check live schedules",
    detail:
      "Compare current departures and fares before heading to the terminal.",
    meta: "Book ahead for weekends",
    href: "https://launionbus.ph/",
    icon: FiCalendar,
    iconClassName: "size-4",
  },
  {
    title: "Reserve a seat",
    detail:
      "Pre-book selected Partas trips from Pasay, PITX, or Cubao.",
    meta: "San Fernando or San Juan",
    href: "https://www.klook.com/en-PH/activity/25707-bus-transfer-manila-la-union/",
    icon: FiMapPin,
    iconClassName: "size-4",
  },
  {
    title: "Drive or go private",
    detail:
      "Compare driving, private transfer, and other routes from Manila.",
    meta: "Travel time follows traffic",
    href: "https://www.rome2rio.com/s/Manila/La-Union-Philippines",
    icon: FiNavigation,
    iconClassName: "size-4 stroke-[2.5]",
  },
] as const;

export function GettingThere() {
  return (
    <section id="getting-there" className="px-gutter py-bay">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-x-12 gap-y-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-body text-eyebrow font-medium uppercase text-ink-soft">
                Getting there
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 max-w-[12ch] font-display text-headline font-semibold tracking-tight text-ink">
                The way <Accent>north</Accent>.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={120} className="md:col-span-5 md:pb-2">
            <p className="max-w-[44ch] font-body text-base leading-relaxed text-ink-soft">
              Most trips begin in Metro Manila and head north by bus or car.
              Leave room for traffic, and confirm your schedule before you go.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid items-stretch gap-4 md:mt-16 md:grid-cols-12">
          <Reveal delay={160} className="md:order-2 md:col-span-5">
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/img/bued-bridge.jpg"
                alt="The La Union welcome arch over Bued Bridge at the provincial boundary in Rosario."
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent"
              />

              <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3.5 py-1.5 font-body text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink backdrop-blur-md">
                Bued Bridge · Rosario
              </span>

              <a
                href="https://www.rome2rio.com/s/Manila/La-Union-Philippines"
                target="_blank"
                rel="noreferrer"
                aria-label="Compare routes from Manila to La Union"
                className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-card/90 text-ink backdrop-blur-md transition-colors hover:bg-ink hover:text-cream"
              >
                <FiArrowUpRight aria-hidden className="size-5" />
              </a>

              <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-6 text-cream sm:inset-x-7 sm:bottom-7">
                <p className="max-w-[18ch] font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  Cross the bridge and La Union begins.
                </p>
                <span className="shrink-0 font-body text-sm text-cream/75">
                  5–7 hrs
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 md:order-1 md:col-span-7">
            {OPTIONS.map((option, index) => {
              const Icon = option.icon;
              return (
                <Reveal key={option.title} delay={200 + index * 60}>
                  <a
                    href={option.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full min-h-48 flex-col rounded-2xl border border-ink/8 bg-card p-5 transition-colors hover:border-sea/25 hover:bg-sea-mist/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sea focus-visible:ring-offset-2"
                  >
                    <span className="flex items-start justify-between gap-4">
                      <span className="inline-flex size-9 items-center justify-center rounded-full bg-sea-mist/55 text-sea transition-colors group-hover:bg-sea group-hover:text-cream">
                        <Icon aria-hidden className={option.iconClassName} />
                      </span>
                      <FiArrowUpRight
                        aria-hidden
                        className="size-4 text-ink-soft transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                      />
                    </span>

                    <span className="mt-auto pt-8">
                      <span className="block font-display text-base font-semibold tracking-tight text-ink">
                        {option.title}
                      </span>
                      <span className="mt-2 block font-body text-sm leading-relaxed text-ink-soft">
                        {option.detail}
                      </span>
                      <span className="mt-3 block font-body text-xs font-medium text-sea">
                        {option.meta}
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>

        <p className="mt-4 font-body text-xs leading-relaxed text-ink-soft">
          Schedules, travel times, and fares change. Confirm directly with the
          operator before departure.
        </p>
      </div>
    </section>
  );
}
