"use client";

// Town by town — beyond-elyu, section 4. The evidence.
// A master-detail roll call of all twenty LGUs: pick a town, read its short
// history and what it is known for. "The Second Look" again, this time as
// reading. No card grid; the page argues against the checklist.

import { useState } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import {
  TOWNS,
  COAST_TOWNS,
  INLAND_TOWNS,
  type Town,
} from "@/lib/la-union";
import { Reveal } from "@/components/reveal";
import { Accent } from "@/components/section-header";

// Numbering follows the on-page order: the alphabetical coast list, then the
// foothills — so the entries read 01–20 straight down rather than by geography.
const ORDERED_TOWNS = [...COAST_TOWNS, ...INLAND_TOWNS];
const numberOf = (town: Town) =>
  String(ORDERED_TOWNS.findIndex((t) => t.name === town.name) + 1).padStart(
    2,
    "0",
  );

const SAMPLE_LINKS = [
  {
    source: "Tripadvisor",
    title: "Agoo travel guide",
    href: "https://www.tripadvisor.com/Tourism-g6524044-Agoo_La_Union_Province_Ilocos_Region_Luzon-Vacations.html",
  },
  {
    source: "Philstar",
    title: "Pick your own grapes and discover more La Union gems",
    href: "https://www.philstar.com/lifestyle/travel-and-tourism/2024/03/26/2343491/lakbay-norte-pick-your-own-grapes-la-union-vineyard-other-hidden-gems-discover",
  },
] as const;

function Detail({
  town,
  hideTitle = false,
}: {
  town: Town;
  hideTitle?: boolean;
}) {
  return (
    <div aria-live="polite">
      <h3
        className={
          hideTitle
            ? "sr-only"
            : "font-display text-4xl font-semibold leading-none tracking-tight text-ink sm:text-5xl"
        }
      >
        {town.name}
      </h3>

      <p
        className={`${hideTitle ? "mt-1 text-lg" : "mt-3 text-xl"} font-display font-semibold leading-tight tracking-tight text-ink/50`}
      >
        {town.knownFor}
      </p>

      <p className="mt-6 max-w-[52ch] font-body text-[0.95rem] leading-[1.75] text-ink-soft">
        {town.history}
      </p>

      <figure className="mt-8">
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-sea-mist">
          <Image
            src="/img/town-card-placeholder.jpg"
            alt="A surfer riding a wave at Urbiztondo Beach in San Juan, La Union"
            fill
            sizes="(min-width: 768px) 42vw, 100vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-card/85 px-3.5 py-1.5 font-body text-[0.78rem] font-medium tracking-tight text-ink backdrop-blur-md">
            Photo preview
          </span>
        </div>
        <figcaption className="mt-2 font-body text-xs text-ink-soft">
          Photo: {" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Surf%E2%80%99s_up.jpg"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-ink/20 underline-offset-2 hover:text-ink"
          >
            Psalm91st / Wikimedia Commons
          </a>{" "}
          · {" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-ink/20 underline-offset-2 hover:text-ink"
          >
            CC BY-SA 4.0
          </a>
        </figcaption>
      </figure>

      <nav className="mt-7" aria-label={`Useful links for ${town.name}`}>
        <p className="font-body text-eyebrow font-medium uppercase tracking-[0.18em] text-sea">
          Read more
        </p>
        <ul className="mt-2 border-b border-ink/10">
          {SAMPLE_LINKS.map((link) => (
            <li key={link.href} className="border-t border-ink/10">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-5 py-3.5"
              >
                <span className="min-w-0">
                  <span className="block font-body text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
                    {link.source}
                  </span>
                  <span className="mt-1 block font-display text-base font-semibold leading-snug tracking-tight text-ink">
                    {link.title}
                  </span>
                </span>
                <FiArrowUpRight
                  aria-hidden
                  className="size-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
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
                className="group flex w-full items-baseline justify-between gap-4 border-t border-ink/10 py-4 text-left outline-none focus-visible:bg-ink/[0.04]"
              >
                <span className="flex items-baseline gap-3.5">
                  <span className="font-display text-sm font-semibold tabular-nums text-sea-mist">
                    {numberOf(t)}
                  </span>
                  <span
                    className={`font-display text-xl font-semibold tracking-tight transition-colors ${
                      isActive ? "text-ink" : "text-ink/50 group-hover:text-ink"
                    }`}
                  >
                    {t.name}
                  </span>
                </span>
                <span className="hidden shrink-0 font-body text-sm text-ink-soft sm:block">
                  {t.knownFor}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// One group of towns inside the mobile burger panel.
function MenuGroup({
  title,
  towns,
  active,
  onPick,
  className = "",
}: {
  title: string;
  towns: Town[];
  active: string;
  onPick: (name: string) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="px-3 pb-1 pt-2 font-body text-eyebrow font-medium uppercase tracking-[0.2em] text-ink-soft">
        {title}
      </p>
      <ul>
        {towns.map((t) => {
          const isActive = active === t.name;
          return (
            <li key={t.name}>
              <button
                type="button"
                onClick={() => onPick(t.name)}
                className={`flex w-full items-baseline gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                  isActive ? "bg-ink/[0.06]" : "active:bg-ink/[0.04]"
                }`}
              >
                <span className="font-display text-xs font-semibold tabular-nums text-sea-mist">
                  {numberOf(t)}
                </span>
                <span
                  className={`font-display text-base font-semibold tracking-tight ${
                    isActive ? "text-ink" : "text-ink/60"
                  }`}
                >
                  {t.name}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Mobile-only burger: the twenty-town list is too long to scroll on a phone,
// so it collapses behind this picker. Tapping a town selects it and closes.
function TownMenu({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (name: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const pick = (name: string) => {
    onSelect(name);
    setOpen(false);
  };

  return (
    <div className="relative z-30">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="relative z-10 flex w-full items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-card px-4 py-3.5 shadow-card"
      >
        <span className="flex items-center gap-2.5">
          {open ? (
            <FiX aria-hidden className="size-4 text-ink" />
          ) : (
            <FiMenu aria-hidden className="size-4 text-ink" />
          )}
          <span className="font-body text-sm font-medium text-ink">
            Browse towns
          </span>
          <span className="font-body text-sm text-ink-soft">
            ({TOWNS.length})
          </span>
        </span>
        <FiChevronDown
          aria-hidden
          className={`size-4 text-ink-soft transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <>
          {/* Click-away catcher behind the panel. */}
          <button
            type="button"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-0 cursor-default"
          />
          {/* Floats over the detail card below instead of pushing it down. */}
          <div className="absolute inset-x-0 top-full z-20 mt-2 max-h-[60vh] overflow-y-auto rounded-2xl border border-ink/10 bg-card p-2 shadow-card">
            <MenuGroup
              title="The coast"
              towns={COAST_TOWNS}
              active={active}
              onPick={pick}
            />
            <MenuGroup
              title="The foothills"
              towns={INLAND_TOWNS}
              active={active}
              onPick={pick}
              className="mt-1"
            />
          </div>
        </>
      )}
    </div>
  );
}

export function TownsSection() {
  const [active, setActive] = useState("San Juan");
  const activeTown = TOWNS.find((t) => t.name === active) ?? TOWNS[0];

  return (
    <section id="towns" className="px-gutter py-bay">
      <div className="mx-auto max-w-6xl">
        <header>
          <div className="max-w-3xl">
            <Reveal>
              <p className="font-body text-eyebrow font-medium uppercase text-ink-soft">
                Town by town
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display text-headline font-semibold tracking-tight text-ink">
                The <Accent>spots</Accent>.
              </h2>
            </Reveal>
          </div>
        </header>

        {/* Mobile: the list collapses behind a burger; the active town's
            detail sits below in its own card. */}
        <div className="mt-12 md:hidden">
          <Reveal delay={120} className="relative z-30">
            <TownMenu active={active} onSelect={setActive} />
          </Reveal>
          <div className="relative mt-6 rounded-3xl border border-ink/8 bg-card p-6 shadow-card">
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(
                `${activeTown.name}, La Union`,
              )}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${activeTown.name} on Google Maps`}
              className="absolute right-5 top-5 inline-flex size-10 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors active:bg-ink active:text-cream"
            >
              <FiArrowUpRight aria-hidden className="size-5" />
            </a>
            <Detail town={activeTown} />
          </div>
        </div>

        <div className="mt-12 hidden gap-x-16 gap-y-10 md:mt-16 md:grid md:grid-cols-2">
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
            <div className="sticky top-24 rounded-3xl border border-ink/8 bg-card p-8 shadow-card lg:p-10">
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(
                  `${activeTown.name}, La Union`,
                )}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${activeTown.name} on Google Maps`}
                className="absolute right-6 top-6 inline-flex size-11 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:bg-ink hover:text-cream lg:right-8 lg:top-8"
              >
                <FiArrowUpRight aria-hidden className="size-5" />
              </a>
              <Detail town={activeTown} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
