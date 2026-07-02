"use client";

// The coast, in passing — recomposed as the inspo's "Explore our content" row:
// a split header (heading ← → muted note) over a photo line. Each card is a
// rounded photo with a corner ↗, an overlaid place + note, and a credit line
// reused from the town-by-town section so the citation stays honest.
// Desktop shows the whole grid; phones get a one-at-a-time swipe carousel with
// a dot + counter indicator, mirroring the town-by-town section.

import { useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeader, Accent } from "@/components/section-header";
import { IconButton } from "@/components/chrome";

type Frame = {
  src: string;
  alt: string;
  place: string;
  note: string;
  // Reused verbatim from TOWN_MEDIA in towns-section so the same photo carries
  // the same credit here.
  photo: {
    sourceName: string;
    sourceUrl: string;
    licenseName?: string;
    licenseUrl?: string;
  };
};

// The four picks, drawn from the town-by-town roll call.
const FRAMES: Frame[] = [
  {
    src: "/img/coast-immuki-island.jpg",
    alt: "An aerial view of the turquoise tidal rock pools and bamboo rafts at Immuki Island in Balaoan.",
    place: "Immuki Island",
    note: "Balaoan's tidal rock pools",
    photo: {
      sourceName: "Jhumeal (Facebook)",
      sourceUrl:
        "https://www.facebook.com/61573138859977/posts/the-world-is-too-beautiful-to-stay-in-one-place-immuki-island-paraoir-balaoan-la/122114503202771295/",
    },
  },
  {
    src: "/img/town-luna.jpg",
    alt: "The Spanish-era Baluarte watchtower on Luna's pebble shore.",
    place: "Baluarte",
    note: "Luna's coast sentinel",
    photo: {
      sourceName: "Maestromac25 / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Baluarte_Watch_Tower,_Luna,_La_Union.jpg",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
  },
  {
    src: "/img/town-san-gabriel-tangadan-falls.jpg",
    alt: "The wide sloping cascade of Tangadan Falls tumbling into its green pool in San Gabriel.",
    place: "Tangadan Falls",
    note: "San Gabriel's famous cascade",
    photo: {
      sourceName: "The Quaint Traveler",
      sourceUrl:
        "https://thequainttraveler.blogspot.com/2016/05/Tangadan-falls-San-Gabriel-La-Union.html",
    },
  },
  {
    src: "/img/coast-san-juan-surf.jpg",
    alt: "A surfer riding a wave off Urbiztondo Beach in San Juan, La Union.",
    place: "Urbiztondo",
    note: "San Juan's famous break",
    photo: {
      sourceName: "Legendary Surf Camps",
      sourceUrl: "https://legendarysurfcamps.com/destinations/surfing-in-la-union/",
    },
  },
  {
    src: "/img/town-san-gabriel-dupagan-falls.jpg",
    alt: "The narrow cascade and turquoise gorge pool of Dupagan Falls in San Gabriel.",
    place: "Dupagan Falls",
    note: "San Gabriel's hidden gorge",
    photo: {
      sourceName: "Allevents.in",
      sourceUrl:
        "https://allevents.in/baguio/mt-mugong-dayhike-%7C-dupagan-falls/200028119602059",
    },
  },
  {
    src: "/img/coast-agoo-eco-park.jpg",
    alt: "Rows of tall agoho pines lining the grove at Agoo Eco Park.",
    place: "Eco Park",
    note: "Agoo's peaceful pines",
    photo: {
      sourceName: "Wheree",
      sourceUrl: "https://agoo-eco-park.wheree.com/",
    },
  },
  {
    src: "/img/town-san-fernando-ma-cho-temple.jpg",
    alt: "The colorful facade and entrance steps of Ma-Cho Temple in San Fernando.",
    place: "Ma-Cho Temple",
    note: "San Fernando's hilltop shrine",
    photo: {
      sourceName: "Jay Exiomo",
      sourceUrl:
        "https://jayexiomo.com/2023/11/06/extended-weekend-in-la-union-side-tours-to-ma-cho-temple-and-baluarte-watchtower/",
    },
  },
  {
    src: "/img/coast-lakay-ago.jpg",
    alt: "A stone storybook cottage with a round door and flower garden at Lakay Ago Nature's Park in Agoo.",
    place: "Lakay Ago",
    note: "Agoo's storybook garden",
    photo: {
      sourceName: "Lakay Ago Nature's Park (Facebook)",
      sourceUrl:
        "https://www.facebook.com/lakay.ago.2024/posts/who-says-you-cant-have-it-all-lakay-ago-natures-park-offers-more-than-just-a-mea/507166231928301/",
    },
  },
  {
    src: "/img/coast-luna-pebble-beach.jpg",
    alt: "A bamboo hut and stone boats on the grey pebble shore of Luna's Pebble Beach.",
    place: "Pebble Beach",
    note: "Luna's grey-stone shore",
    photo: {
      sourceName: "fieldslaunion (Instagram)",
      sourceUrl: "https://www.instagram.com/p/C6diq8jPbAh/?img_index=2",
    },
  },
  {
    src: "/img/coast-luna-bahay-na-bato.jpg",
    alt: "An aerial view of the red-roofed stone art house and garden of Bahay na Bato in Luna.",
    place: "Bahay na Bato",
    note: "Luna's stone art house",
    photo: {
      sourceName: "Wheree",
      sourceUrl:
        "https://bahay-na-bato-open-art-gallery-and-staycation.wheree.com/",
    },
  },
  {
    src: "/img/coast-balaoan-manmade-forest.jpg",
    alt: "A road curving through a green canopy of arching trees at the Balaoan Man-made Forest.",
    place: "Man-made Forest",
    note: "Balaoan's green tunnel",
    photo: {
      sourceName: "kris11 / Waivio",
      sourceUrl:
        "https://www.waivio.com/@kris11/from-day-tour-to-night-life-at-la-union",
    },
  },
  {
    src: "/img/town-bauang-gapuz-grape-farm.jpg",
    alt: "Rows of vines heavy with grapes at Gapuz Grape Farm in Bauang.",
    place: "Grape Farm",
    note: "Bauang's vineyard rows",
    photo: {
      sourceName: "Gapuz Grapes Farm",
      sourceUrl: "https://www.facebook.com/GapuzGrapesFarm/",
    },
  },
];

function Card({ frame }: { frame: Frame }) {
  return (
    <figure className="group flex flex-col">
      <div className="relative overflow-hidden rounded-3xl shadow-card">
        <img
          src={frame.src}
          alt={frame.alt}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
        />
        <IconButton
          href="#towns"
          label={`See ${frame.place} in the town index`}
          tone="cream"
          className="absolute right-3 top-3"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-4 text-cream">
          <span className="block font-display text-lg font-semibold tracking-tight">
            {frame.place}
          </span>
          <span className="font-body text-sm text-cream/80">{frame.note}</span>
        </figcaption>
      </div>
      <p className="mt-2 font-body text-xs text-ink-soft">
        Photo:{" "}
        <a
          href={frame.photo.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-ink/20 underline-offset-2 hover:text-ink"
        >
          {frame.photo.sourceName}
        </a>
        {frame.photo.licenseName && frame.photo.licenseUrl && (
          <>
            {" · "}
            <a
              href={frame.photo.licenseUrl}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-ink/20 underline-offset-2 hover:text-ink"
            >
              {frame.photo.licenseName}
            </a>
          </>
        )}
      </p>
    </figure>
  );
}

export function CoastStrip() {
  // Mobile carousel: swipe position drives the active index, dots, and counter.
  const scrollerRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (tickingRef.current) return;
    tickingRef.current = true;
    requestAnimationFrame(() => {
      tickingRef.current = false;
      const el = scrollerRef.current;
      if (!el || el.clientWidth === 0) return;
      const i = Math.round(el.scrollLeft / el.clientWidth);
      if (i !== activeIndex) setActiveIndex(i);
    });
  };

  // A small sliding window of dots keeps twelve cards compact.
  const DOT_COUNT = 5;
  const dotStart = Math.max(
    0,
    Math.min(activeIndex - 2, FRAMES.length - DOT_COUNT),
  );
  const dotIndexes = Array.from(
    { length: Math.min(DOT_COUNT, FRAMES.length) },
    (_, k) => dotStart + k,
  );

  return (
    <section id="coast" className="px-gutter py-bay">
      <div className="mx-auto max-w-6xl">
        {/* split header: heading left, muted note right */}
        <div className="grid grid-cols-1 items-end gap-x-12 gap-y-6 md:grid-cols-12">
          <div className="md:col-span-12">
            <SectionHeader
              eyebrow="Top spots in La Union"
              title={
                <span className="whitespace-nowrap text-[clamp(2rem,7vw,4.75rem)]">
                  Find your <Accent>favorite</Accent>.
                </span>
              }
            />
          </div>
        </div>

        {/* Mobile: one card at a time, swipeable, with a dot + counter below. */}
        <div className="mt-10 md:hidden">
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            aria-label="Top spots — swipe to browse"
            className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {FRAMES.map((frame) => (
              <div key={frame.src} className="shrink-0 basis-full snap-start px-2">
                <Card frame={frame} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3.5">
            <div className="flex items-center gap-1.5">
              {dotIndexes.map((i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Go to ${FRAMES[i].place}`}
                    aria-current={isActive}
                    className={`h-1.5 rounded-full transition-all ${
                      isActive ? "w-4 bg-sea-mist" : "w-1.5 bg-ink/20"
                    }`}
                  />
                );
              })}
            </div>
            <span className="font-display text-xs font-semibold tabular-nums text-ink-soft">
              {String(activeIndex + 1).padStart(2, "0")} / {FRAMES.length}
            </span>
          </div>
        </div>

        {/* Desktop: the full grid. */}
        <Reveal delay={200} className="hidden md:block">
          <div className="mt-16 grid grid-cols-4 gap-4">
            {FRAMES.map((frame) => (
              <Card key={frame.src} frame={frame} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
