"use client";

// Town by town — beyond-elyu, section 4. The evidence.
// A master-detail roll call of all twenty LGUs: pick a town, read its short
// history and what it is known for. "The Second Look" again, this time as
// reading. No card grid; the page argues against the checklist.

import { useState } from "react";
import {
  TOWNS,
  COAST_TOWNS,
  INLAND_TOWNS,
  COASTLINE,
  FOOTHILLS,
  type Town,
} from "@/lib/la-union";
import { Reveal } from "@/components/reveal";
import { SectionHeader, Accent } from "@/components/section-header";

const numberOf = (town: Town) =>
  String(TOWNS.findIndex((t) => t.name === town.name) + 1).padStart(2, "0");

// A small reuse of the map: where this town sits along the coast.
function Locator({ town }: { town: Town }) {
  return (
    <svg
      viewBox="0 0 560 800"
      aria-hidden
      className="h-auto w-full max-w-[150px]"
    >
      <path
        d={COASTLINE}
        fill="none"
        stroke="var(--color-sea)"
        strokeWidth={2.5}
        strokeLinecap="round"
        opacity={0.5}
      />
      <path
        d={FOOTHILLS}
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth={1.5}
        strokeDasharray="3 9"
        strokeLinecap="round"
        opacity={0.2}
      />
      {TOWNS.map((t) => {
        const on = t.name === town.name;
        return (
          <circle
            key={t.name}
            cx={t.x}
            cy={t.y}
            r={on ? 22 : 6}
            fill={on ? "var(--color-terracotta)" : "var(--color-sea)"}
            opacity={on ? 1 : 0.28}
          />
        );
      })}
    </svg>
  );
}

function Detail({ town }: { town: Town }) {
  return (
    <div aria-live="polite">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-5xl font-semibold tabular-nums text-sea/35">
          {numberOf(town)}
        </span>
        <span className="font-body text-eyebrow font-medium uppercase tracking-[0.2em] text-ink-soft">
          {town.kind === "coast" ? "On the coast" : "In the foothills"}
        </span>
      </div>

      <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {town.name}
      </h3>

      <p className="mt-5 font-body text-eyebrow font-medium uppercase tracking-[0.18em] text-sea">
        Known for
      </p>
      <p className="mt-1 font-display text-xl font-semibold tracking-tight text-ink">
        {town.knownFor}
      </p>

      <p className="mt-5 max-w-[52ch] font-body text-base leading-relaxed text-ink">
        {town.history}
      </p>

      <div className="mt-8 flex items-end gap-4">
        <Locator town={town} />
        <span className="pb-2 font-body text-sm text-ink-soft">
          Where it sits, sea to the west.
        </span>
      </div>
    </div>
  );
}

function Group({
  title,
  towns,
  active,
  onSelect,
  className = "",
}: {
  title: string;
  towns: Town[];
  active: string;
  onSelect: (name: string) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="font-body text-eyebrow font-medium uppercase tracking-[0.2em] text-ink-soft">
        {title}
      </h3>
      <ul className="mt-2">
        {towns.map((t) => {
          const isActive = active === t.name;
          return (
            <li key={t.name}>
              <button
                type="button"
                onClick={() => onSelect(t.name)}
                aria-expanded={isActive}
                className="group flex w-full items-baseline justify-between gap-4 border-t border-ink/10 py-4 text-left outline-none focus-visible:bg-sand-deep/40"
              >
                <span className="flex items-baseline gap-3.5">
                  <span className="font-display text-sm font-semibold tabular-nums text-sea/40">
                    {numberOf(t)}
                  </span>
                  <span
                    className={`font-display text-xl font-semibold tracking-tight transition-colors ${
                      isActive ? "text-ink" : "text-ink/65 group-hover:text-ink"
                    }`}
                  >
                    {t.name}
                  </span>
                  <span
                    className="size-1.5 shrink-0 self-center rounded-full bg-terracotta transition-opacity"
                    style={{ opacity: isActive ? 1 : 0 }}
                  />
                </span>
                <span className="hidden shrink-0 font-body text-sm text-ink-soft sm:block">
                  {t.knownFor}
                </span>
              </button>

              {/* Mobile: the detail expands inline under the active row. */}
              {isActive && (
                <div className="pb-8 pt-1 md:hidden">
                  <Detail town={t} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function TownsSection() {
  const [active, setActive] = useState("San Juan");
  const activeTown = TOWNS.find((t) => t.name === active) ?? TOWNS[0];

  return (
    <section id="towns" className="px-gutter py-bay">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Town by town"
          title={
            <>
              The <Accent>evidence</Accent>, twenty entries.
            </>
          }
          lede="One city and nineteen towns, each with a history and a thing it is known for. Read down the coast, then into the hills. San Juan is entry five."
        />

        <div className="mt-12 grid gap-x-16 gap-y-10 md:mt-16 md:grid-cols-2">
          <Reveal delay={120}>
            <Group
              title="The coast"
              towns={COAST_TOWNS}
              active={active}
              onSelect={setActive}
            />
            <Group
              title="The foothills"
              towns={INLAND_TOWNS}
              active={active}
              onSelect={setActive}
              className="mt-14"
            />
          </Reveal>

          {/* Desktop: a single sticky detail card beside the list. */}
          <div className="hidden md:block">
            <div className="sticky top-24 rounded-3xl bg-sand p-8 shadow-card lg:p-10">
              <Detail town={activeTown} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
