"use client";

// Home FAQ: the same questions as the home page's FAQ schema, shown on the page.
// Laid out like "The spots": questions on the left, the picked answer in a
// sticky card on the right. On phones it folds into an accordion. Every answer
// stays in the HTML (inactive ones are only hidden) so the schema still matches
// text on the page.

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Reveal } from "@/components/shared/reveal";
import { Accent } from "@/components/shared/section-header";
import { FAQ } from "@/lib/structured-data";

const numberOf = (i: number) => String(i + 1).padStart(2, "0");

export function HomeFaq() {
  const [active, setActive] = useState(0);
  // Mobile accordion: null means every answer is closed.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="px-gutter pb-bay"
    >
      <div className="mx-auto max-w-6xl">
        <header>
          <Reveal>
            <p className="font-body text-eyebrow font-medium uppercase text-ink-soft">
              Good to know
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="faq-heading"
              className="mt-5 font-display text-headline font-semibold tracking-tight text-ink"
            >
              <span className="whitespace-nowrap text-[clamp(2rem,7vw,4.75rem)]">
                Asked and <Accent>answered</Accent>.
              </span>
            </h2>
          </Reveal>
        </header>

        {/* Mobile: a numbered accordion. */}
        <Reveal delay={120} className="mt-12 md:hidden">
          <ul className="border-b border-ink/10">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="border-t border-ink/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-m-${i}`}
                    className="flex w-full items-baseline justify-between gap-4 py-4 text-left"
                  >
                    <span className="flex items-baseline gap-3.5">
                      <span className="font-display text-sm font-semibold tabular-nums text-sea-mist">
                        {numberOf(i)}
                      </span>
                      <span
                        className={`font-display text-lg font-semibold leading-snug tracking-tight ${
                          isOpen ? "text-ink" : "text-ink/60"
                        }`}
                      >
                        {item.q}
                      </span>
                    </span>
                    <FiChevronDown
                      aria-hidden
                      className={`size-4 shrink-0 translate-y-0.5 text-ink-soft transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <p
                    id={`faq-m-${i}`}
                    hidden={!isOpen}
                    className="pb-5 pl-[2.1rem] font-body text-[0.95rem] leading-[1.75] text-ink-soft"
                  >
                    {item.a}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Desktop: questions left, the picked answer in a sticky card right. */}
        <div className="mt-16 hidden gap-x-12 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
          <Reveal delay={120}>
            <ul className="border-b border-ink/10">
              {FAQ.map((item, i) => {
                const isActive = active === i;
                return (
                  <li key={item.q}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                      aria-controls={`faq-d-${i}`}
                      className="group flex w-full items-baseline gap-3.5 border-t border-ink/10 py-4 text-left outline-none focus-visible:bg-ink/[0.04]"
                    >
                      <span className="font-display text-sm font-semibold tabular-nums text-sea-mist">
                        {numberOf(i)}
                      </span>
                      <span
                        className={`font-display text-xl font-semibold leading-snug tracking-tight transition-colors ${
                          isActive
                            ? "text-ink"
                            : "text-ink/50 group-hover:text-ink"
                        }`}
                      >
                        {item.q}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <div>
            <div className="sticky top-24 rounded-3xl border border-ink/8 bg-card p-8 lg:p-10">
              {FAQ.map((item, i) => (
                <div
                  key={item.q}
                  id={`faq-d-${i}`}
                  hidden={active !== i}
                  aria-live="polite"
                >
                  <p className="font-display text-sm font-semibold tabular-nums text-sea-mist">
                    {numberOf(i)}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink">
                    {item.q}
                  </h3>
                  <p className="mt-6 max-w-[52ch] font-body text-[0.95rem] leading-[1.75] text-ink-soft">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
