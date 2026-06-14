// Hero — beyond-elyu, rebuilt in the Binar split layout.
// Left: a floating pill nav, an eyebrow, category tags, a stat, and the big
// headline with the terracotta marker. Right: the coast photo as a tall rounded
// card with floating white chips and a corner ↗. Color lives in the photo; the
// chrome stays cream + ink.

import { FiArrowUpRight } from "react-icons/fi";
import { Accent } from "@/components/section-header";
import { PillTag } from "@/components/chrome";

const NAV = [
  { label: "The Map", href: "#map" },
  { label: "The Coast", href: "#coast" },
  { label: "Town by Town", href: "#towns" },
];

const TAGS = ["Surf", "Heritage", "Waterfalls"];

export function Hero() {
  return (
    <section id="top" className="px-gutter pb-bay pt-[clamp(1.25rem,2.5vw,2rem)]">
      <div className="mx-auto max-w-6xl">
        {/* ── Floating pill navigation ── */}
        <header className="flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-ink/10 bg-card/80 p-2 shadow-card backdrop-blur-lg sm:gap-8">
            <a
              href="#top"
              aria-label="elyu — home"
              className="rounded-full bg-ink px-4 py-1.5 font-display text-base font-medium lowercase tracking-tight text-cream"
            >
              elyu
            </a>

            <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-4 py-1.5 text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#plan"
              className="inline-flex items-center gap-1.5 rounded-full bg-sea px-5 py-1.5 text-sm font-medium text-cream transition-colors hover:bg-sea-deep"
            >
              Plan a trip
              <FiArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>
        </header>

        {/* ── The split ── */}
        <div className="mt-[clamp(2.5rem,6vw,5rem)] grid items-end gap-x-12 gap-y-12 md:grid-cols-12">
          {/* Left column */}
          <div className="md:col-span-6 lg:col-span-5">
            <p className="flex items-center gap-2.5 font-body text-eyebrow font-medium uppercase tracking-[0.22em] text-ink-soft">
              <span aria-hidden className="inline-block size-1.5 rounded-full bg-sea" />
              One coast, the long way
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <li key={tag}>
                  <PillTag as="a" href="#towns">
                    {tag}
                  </PillTag>
                </li>
              ))}
            </ul>

            {/* Stat block, à la Binar's "120k members" */}
            <div className="mt-9 flex items-center gap-4">
              <span className="font-display text-5xl font-semibold tracking-tight text-ink">
                20
              </span>
              <span className="max-w-[14ch] font-body text-sm leading-snug text-ink-soft">
                towns on one coastline most people reduce to a single beach.
              </span>
            </div>

            <h1 className="mt-9 font-display text-display font-semibold leading-[0.95] tracking-tight text-ink">
              La Union, <Accent>the long</Accent> way round.
            </h1>

            <p className="mt-6 max-w-[46ch] font-body text-lede leading-relaxed text-ink-soft">
              Overrated is what you call a place when you mistook one town for
              the whole of it. San Juan was the part you saw. This is the part
              you didn&apos;t.
            </p>
          </div>

          {/* Right column — the photo as a tall rounded card */}
          <div className="md:col-span-6 md:col-start-7">
            <figure className="group relative isolate overflow-hidden rounded-[2rem] shadow-soft">
              <div
                aria-hidden
                className="aspect-[4/5] w-full bg-sea-deep bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] sm:aspect-[4/4.4]"
                style={{ backgroundImage: "url('/hero.webp')" }}
              />
              {/* gentle bottom scrim for chip legibility */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"
              />

              {/* corner ↗ */}
              <a
                href="#look-closer"
                aria-label="Look closer"
                className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-card/85 text-ink backdrop-blur-md transition-colors hover:bg-card"
              >
                <FiArrowUpRight aria-hidden className="size-5" />
              </a>

              {/* floating label chips */}
              <span className="absolute left-4 top-4 rounded-full bg-card/85 px-3.5 py-1.5 font-body text-[0.78rem] font-medium tracking-tight text-ink backdrop-blur-md">
                Urbiztondo, San Juan
              </span>

              <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                <span className="rounded-2xl bg-card/85 px-4 py-3 font-body text-sm leading-snug text-ink backdrop-blur-md">
                  <span className="block font-display text-base font-semibold tracking-tight">
                    The doorway, not the room
                  </span>
                  <span className="text-ink-soft">The surf is only the start of it.</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
