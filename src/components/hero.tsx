// Hero — beyond-elyu, following the Binar shot closely.
// Top: a three-zone bar (wordmark · nav · outlined CTA).
// Left: a small uppercase intro line, outlined tags, an avatar + big stat, and
// the oversized headline with a round inline photo (the inspo's signature move).
// Right: the coast photo as a tall rounded card with a floating white note card,
// place chips, and a corner ↗.

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
        {/* ── Three-zone top bar ── */}
        <header className="flex items-center justify-between">
          <a
            href="#top"
            aria-label="elyu — home"
            className="font-display text-2xl font-semibold lowercase tracking-tight text-ink"
          >
            elyu
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#plan"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 py-2 text-sm font-medium text-ink transition-colors hover:border-black hover:bg-black hover:text-cream"
          >
            Plan a trip
            <FiArrowUpRight aria-hidden className="size-4" />
          </a>
        </header>

        {/* ── The split ── */}
        <div className="mt-[clamp(2.5rem,5vw,4.5rem)] grid gap-x-10 gap-y-12 md:grid-cols-12">
          {/* Left column */}
          <div className="flex flex-col md:col-span-6">
            <p className="max-w-[34ch] font-body text-[0.8125rem] font-medium uppercase leading-relaxed tracking-[0.18em] text-ink-soft">
              An editorial field guide to the coast everyone thinks they have
              already seen.
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

            {/* avatar + big stat */}
            <div className="mt-9 flex items-center gap-4">
              <img
                src="/img/surfer.jpg"
                alt=""
                aria-hidden
                className="size-12 rounded-full object-cover"
                loading="lazy"
              />
              <div className="leading-none">
                <span className="font-display text-4xl font-semibold tracking-tight text-ink">
                  20
                </span>
                <span className="ml-2 font-body text-sm text-ink-soft">
                  towns, one coast
                </span>
              </div>
            </div>

            {/* the oversized headline, pinned to the bottom of the column */}
            <h1 className="mt-auto pt-12 font-display text-[clamp(3rem,1rem+8vw,6.5rem)] font-semibold leading-[0.92] tracking-tight text-ink">
              La Union, the <Accent>long way</Accent> round.
            </h1>
          </div>

          {/* Right column — photo as a tall rounded card */}
          <div className="md:col-span-6">
            <figure className="group relative isolate overflow-hidden rounded-[2rem] shadow-soft">
              <div
                aria-hidden
                className="aspect-[4/5] w-full bg-sea-deep bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                style={{ backgroundImage: "url('/hero.webp')" }}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent"
              />

              {/* corner ↗ */}
              <a
                href="#look-closer"
                aria-label="Look closer"
                className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-card/85 text-ink backdrop-blur-md transition-colors hover:bg-card"
              >
                <FiArrowUpRight aria-hidden className="size-5" />
              </a>

              {/* place chips */}
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-card/85 px-3.5 py-1.5 font-body text-[0.78rem] font-medium tracking-tight text-ink backdrop-blur-md">
                  Urbiztondo
                </span>
                <span className="rounded-full bg-card/85 px-3.5 py-1.5 font-body text-[0.78rem] font-medium tracking-tight text-ink backdrop-blur-md">
                  Up the coast
                </span>
              </div>

              {/* floating white note card */}
              <figcaption className="absolute inset-x-4 bottom-4">
                <div className="flex items-center gap-3 rounded-2xl bg-card/90 p-3 shadow-card backdrop-blur-md">
                  <img
                    src="/img/surf-shack.jpg"
                    alt=""
                    aria-hidden
                    className="size-14 shrink-0 rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold leading-snug tracking-tight text-ink">
                      The surf is the doorway, not the room.
                    </p>
                    <p className="mt-0.5 font-body text-xs text-ink-soft">
                      San Juan is one of twenty.
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
