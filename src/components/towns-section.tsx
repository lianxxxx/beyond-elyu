"use client";

// Town by town — beyond-elyu, section 4. The evidence.
// A master-detail roll call of all twenty LGUs: pick a town, read its short
// history and what it is known for. "The Second Look" again, this time as
// reading. No card grid; the page argues against the checklist.

import { useEffect, useRef, useState } from "react";
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

// Per-town media for the roll-call detail card: the photo, its badge + credit,
// and one to three "read more" links. Keyed by town name. Towns missing here
// (or with image: null) fall back to a tasteful placeholder. Populated from
// research; only the content changes, never the layout.
type TownMedia = {
  /** filename in /public/img, or null to use the placeholder */
  image: string | null;
  /** describes what the photo shows */
  alt: string;
  /** short badge overlaid on the photo */
  badge: string;
  photo: {
    sourceName: string;
    /** link for the credit; omit for owner-supplied photos so it renders as plain text */
    sourceUrl?: string;
    licenseName?: string;
    licenseUrl?: string;
  };
  links: { source: string; title: string; href: string }[];
};

// The stand-in for towns without a free landmark photo: the coast surfer,
// honestly credited and badged "Photo preview" so it reads as a placeholder
// rather than a claim about that town. Their read-more links are still real.
const PLACEHOLDER_PHOTO = {
  sourceName: "Psalm91st / Wikimedia Commons",
  sourceUrl: "https://commons.wikimedia.org/wiki/File:Surf%E2%80%99s_up.jpg",
  licenseName: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
};

const placeholder = (links: TownMedia["links"]): TownMedia => ({
  image: null,
  alt: "A surfer on the La Union coast",
  badge: "Photo preview",
  photo: PLACEHOLDER_PHOTO,
  links,
});

const PLACEHOLDER_MEDIA: TownMedia = {
  ...placeholder([
    {
      source: "Tripadvisor",
      title: "La Union travel guide",
      href: "https://www.tripadvisor.com/Tourism-g2301534-La_Union_Province_Ilocos_Region_Luzon-Vacations.html",
    },
  ]),
  image: "town-card-placeholder.jpg",
};

const TOWN_MEDIA: Record<string, TownMedia> = {
  // ── The coast ──
  Bangar: {
    image: "town-bangar-inabel-loom.jpg",
    alt: "A Bangar artisan weaving inabel cloth on a traditional wooden loom",
    badge: "Inabel weaving, Bangar",
    photo: {
      sourceName: "AXN Asia",
      sourceUrl:
        "https://axn-asia.com/myhometownisgoat/whats-new/must-buy-products-and-souvenirs-in-the-north-philippines",
    },
    links: [
      {
        source: "Rappler",
        title:
          "La Union's traditional weaving town attracts shoppers, young artisans",
        href: "https://www.rappler.com/people/human-interest/la-union-bangar-traditional-weaving-town/",
      },
      {
        source: "Province of La Union",
        title: "North Circuit — Bangar",
        href: "https://launion.gov.ph/la-union-circuits/northern-circuit/north-circuit-bangar-la-union/",
      },
    ],
  },
  Luna: {
    image: "town-luna.jpg",
    alt: "The Spanish-era Baluarte watchtower on Luna's pebble shore",
    badge: "Baluarte watchtower, Luna",
    photo: {
      sourceName: "Maestromac25 / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Baluarte_Watch_Tower,_Luna,_La_Union.jpg",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    links: [
      {
        source: "Pinoy Travelogue",
        title: "Luna's Baluarte Watchtower and pebble beach",
        href: "https://www.pinoytravelogue.com/2019/07/luna-baluarte-pebble-beach-la-union.html",
      },
      {
        source: "Guide to the Philippines",
        title: "Best La Union tourist spots aside from surfing",
        href: "https://guidetothephilippines.ph/articles/what-to-experience/top-la-union-tourist-spots",
      },
    ],
  },
  Balaoan: {
    image: "town-balaoan-immuki-island.jpg",
    alt: "Turquoise rock pools opening toward the sea at Immuki Island in Balaoan",
    badge: "Immuki Island, Balaoan",
    photo: {
      sourceName: "Wanderera",
      sourceUrl: "https://wanderera.com/immuki-island-la-union/",
    },
    links: [
      {
        source: "Trip.com",
        title: "Balaoan travel guide: top attractions & things to do",
        href: "https://www.trip.com/travel-guide/destination/balaoan-1475081/",
      },
      {
        source: "Guide to the Philippines",
        title: "Best La Union tourist spots aside from surfing",
        href: "https://guidetothephilippines.ph/articles/what-to-experience/top-la-union-tourist-spots",
      },
    ],
  },
  Bacnotan: {
    image: "town-bacnotan-bee-farm.jpg",
    alt: "Honey bees on hive frames at La Union Bee Farm in Bacnotan",
    badge: "La Union Bee Farm, Bacnotan",
    photo: {
      sourceName: "Traveloka",
      sourceUrl:
        "https://ik.imagekit.io/tvlk/blog/2016/12/Learn-about-bees-at-La-Union-Bee-Farm.jpg?tr=q-70,c-at_max,w-1000,h-600",
    },
    links: [
      {
        source: "Provincial Government of La Union",
        title: "La Union Honey Bee Center and Bee Farm",
        href: "https://launion.gov.ph/la-union-circuits/central-circuit/central-circuit-bacnotan-la-union/",
      },
      {
        source: "Guide to the Philippines",
        title: "Best La Union tourist spots aside from surfing",
        href: "https://guidetothephilippines.ph/articles/what-to-experience/top-la-union-tourist-spots",
      },
    ],
  },
  "San Juan": {
    image: "town-san-juan-surf.jpg",
    alt: "A surfer at Urbiztondo Beach in San Juan, La Union",
    badge: "Urbiztondo surf, San Juan",
    photo: {
      sourceName: "Psalm91st / Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Surf%E2%80%99s_up.jpg",
      licenseName: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    },
    links: [
      {
        source: "The Poor Traveler",
        title: "25 La Union tourist spots & things to do",
        href: "https://www.thepoortraveler.net/la-union-tourist-spots/",
      },
      {
        source: "Guide to the Philippines",
        title: "Best La Union tourist spots aside from surfing",
        href: "https://guidetothephilippines.ph/articles/what-to-experience/top-la-union-tourist-spots",
      },
    ],
  },
  "City of San Fernando": {
    image: "town-san-fernando-ma-cho-temple.jpg",
    alt: "The colorful facade and entrance steps of Ma-Cho Temple in San Fernando",
    badge: "Ma-Cho Temple, San Fernando",
    photo: {
      sourceName: "Jay Exiomo",
      sourceUrl:
        "https://jayexiomo.com/2023/11/06/extended-weekend-in-la-union-side-tours-to-ma-cho-temple-and-baluarte-watchtower/",
    },
    links: [
      {
        source: "Ma-Cho Temple",
        title: "The Ma-Cho Temple — San Fernando City, La Union",
        href: "https://machotemple.org/",
      },
    ],
  },
  Bauang: {
    image: "town-bauang-gapuz-grape-farm.jpg",
    alt: "Rows of vines heavy with grapes at Gapuz Grape Farm in Bauang",
    badge: "Gapuz Grape Farm, Bauang",
    photo: {
      sourceName: "Gapuz Grapes Farm",
      sourceUrl: "https://www.facebook.com/GapuzGrapesFarm/",
    },
    links: [],
  },
  Caba: {
    image: "town-caba-beach-camp.jpg",
    alt: "Tents pitched by the shore at Beach Camp by LOC in Caba",
    badge: "Beach Camp by LOC, Caba",
    photo: {
      sourceName: "Beach Camp by LOC (Facebook)",
      sourceUrl: "https://www.facebook.com/KuboSaCaba/",
    },
    links: [
      {
        source: "National Historical Commission",
        title: "Diego Silang historical marker",
        href: "https://philhistoricsites.nhcp.gov.ph/registry_database/diego-silang-1730-1763/",
      },
    ],
  },
  Aringay: {
    image: "town-aringay-rice-terraces.jpg",
    alt: "Aerial view of the Gallano Rice Terraces on the hillsides of Aringay",
    badge: "Gallano Rice Terraces, Aringay",
    photo: {
      sourceName: "Chester Masiglat · Sabsabali a La Union (Facebook)",
      sourceUrl: "https://www.facebook.com/groups/sabsabali.a.launion/",
    },
    links: [],
  },
  Agoo: {
    image: "town-agoo-basilica.jpg",
    alt: "The facade and bell towers of Agoo Basilica",
    badge: "Agoo Basilica",
    photo: {
      sourceName: "Tripadvisor",
      sourceUrl:
        "https://www.tripadvisor.com/Attraction_Review-g6524044-d7797020-Reviews-Basilica_Minore_of_Our_Lady_of_Charity-Agoo_La_Union_Province_Ilocos_Region_Luzo.html",
    },
    links: [],
  },
  "Santo Tomas": {
    image: "town-santo-tomas.jpg",
    alt: "The Damortis shoreline in Santo Tomas",
    badge: "Damortis shoreline, Santo Tomas",
    photo: {
      sourceName: "Judgefloro / Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:6664Damortis,_Santo_Tomas,_La_Union_22.jpg",
      licenseName: "CC0 1.0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    },
    links: [
      {
        source: "LGU Santo Tomas",
        title: "Tourist spots — Municipality of Santo Tomas",
        href: "https://santotomaslaunion.gov.ph/tourist-spot/",
      },
      {
        source: "Province of La Union",
        title: "Municipality of Santo Tomas",
        href: "https://launion.gov.ph/municipality-of-santo-tomas/",
      },
    ],
  },
  Rosario: {
    image: "town-rosario-bani-seaside-camping.jpg",
    alt: "Tents pitched along the shore for seaside camping at Bani in Rosario",
    badge: "Seaside Camping, Bani, Rosario",
    photo: {
      sourceName: "Sabsabali a La Union (Facebook)",
      sourceUrl:
        "https://www.facebook.com/groups/sabsabali.a.launion/posts/1282203943152204/",
    },
    links: [
      {
        source: "Municipality of Rosario",
        title: "Tourist attractions — Rosario, La Union",
        href: "http://rosario-lu.gov.ph/tourist-attraction/",
      },
      {
        source: "Province of La Union",
        title: "Rosario, La Union",
        href: "https://launion.gov.ph/city-and-municipalities/rosario-la-union/",
      },
    ],
  },
  // ── The foothills ──
  Sudipen: {
    image: "town-sudipen-ridge-road.jpg",
    alt: "A winding road crossing the green mountain ridges of Sudipen",
    badge: "Bilagan Road, Sudipen",
    photo: {
      sourceName: "Bombo Radyo La Union",
      sourceUrl:
        "https://launion.bomboradyo.com/rinibo-a-local-tourists-simmarungkar-iti-bilagan-road-idiay-ili-ti-santol-la-union",
    },
    links: [
      {
        source: "Province of La Union",
        title: "North Circuit — Sudipen",
        href: "https://launion.gov.ph/la-union-circuits/northern-circuit/north-circuit-sudipen-la-union/",
      },
    ],
  },
  Santol: {
    image: "town-santol-balay-anito-falls.jpg",
    alt: "Balay Anito Falls flowing into a deep green swimming pool in Santol",
    badge: "Balay Anito Falls, Santol",
    photo: {
      sourceName: "Jeffrel Langbay Valmonte · ELYUcano (Facebook)",
      sourceUrl:
        "https://www.facebook.com/100044471587945/posts/balay-anito-falls-santol-la-union-jeffrel-langbay-valmonte/797891277634561/",
    },
    links: [
      {
        source: "Province of La Union",
        title: "North Circuit — Santol",
        href: "https://launion.gov.ph/la-union-circuits/northern-circuit/north-circuit-santol-la-union/",
      },
      {
        source: "GMA News",
        title: "The 'Great Road of Santol' and other La Union attractions",
        href: "https://www.gmanetwork.com/lifestyle/travel/87392/check-out-the-great-road-of-santol-and-other-la-union-attractions/story",
      },
    ],
  },
  "San Gabriel": {
    image: "town-san-gabriel-dupagan-falls.jpg",
    alt: "The turquoise rock pools and narrow cascade of Dupagan Falls in San Gabriel",
    badge: "Dupagan Falls, San Gabriel",
    photo: {
      sourceName: "Philippine Information Agency",
      sourceUrl:
        "https://pia.gov.ph/features/dupagan-falls-lifeblood-heartthrob-of-la-unions-highlands/",
    },
    links: [
      {
        source: "The Poor Traveler",
        title: "La Union tourist spots & things to do — Tangadan Falls",
        href: "https://www.thepoortraveler.net/la-union-tourist-spots/",
      },
      {
        source: "Province of La Union",
        title: "Fall in love with falls in the North",
        href: "https://launion.gov.ph/la-union-tourist-spots-fall-in-love-with-falls/",
      },
    ],
  },
  Naguilian: {
    image: "town-naguilian.jpg",
    alt: "Rock formations along the Balili River in Naguilian",
    badge: "Balili River rock formation, Naguilian",
    photo: {
      sourceName: "Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Balili_River_Rock_Formation.jpg",
      licenseName: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    },
    links: [
      {
        source: "Province of La Union",
        title: "Municipality of Naguilian",
        href: "https://launion.gov.ph/municipality-of-naguilian/",
      },
      {
        source: "Naguilian Tourism",
        title: "Naguilian: home of the original basi",
        href: "http://naguiliantourism.blogspot.com/2014/11/naguilian-home-of-original-basi.html",
      },
    ],
  },
  Bagulin: {
    image: "town-bagulin-bulalakaw-falls.jpg",
    alt: "Bulalakaw Falls descending between high rock walls into a turquoise pool in Bagulin",
    badge: "Bulalakaw Falls, Bagulin",
    photo: {
      sourceName: "CGV The Explorer (Facebook)",
      sourceUrl:
        "https://www.facebook.com/CGVTheExplorer/posts/bulalakaw-falls-of-bagulin-la-union-/841905416284263/",
    },
    links: [
      {
        source: "Provincial Government of La Union",
        title: "Municipality of Bagulin",
        href: "https://launion.gov.ph/municipality-of-bagulin/",
      },
      {
        source: "Danny Tariman",
        title: "A trek to Bulalakaw Falls",
        href: "https://dtariman.wordpress.com/2022/01/08/a-trek-to-bulalakaw-falls/",
      },
    ],
  },
  Burgos: {
    image: "town-burgos-libtong-lake.jpg",
    alt: "A bamboo raft shelter floating on Libtong Lake in Burgos",
    badge: "Libtong Lake, Burgos",
    photo: {
      sourceName: "Municipality of Burgos",
      sourceUrl: "https://burgoslaunion.gov.ph/index.php/tourism/",
    },
    links: [
      {
        source: "Municipality of Burgos",
        title: "Tourism — Burgos, La Union",
        href: "https://burgoslaunion.gov.ph/index.php/tourism/",
      },
    ],
  },
  Tubao: {
    image: "town-tubao-lang-ay-falls.jpg",
    alt: "The sloping rock cascades and forest pools of Lang-ay Falls in Tubao",
    badge: "Lang-ay Falls, Tubao",
    photo: {
      sourceName: "Edmar Cañas Gagucas · Sabsabali a La Union (Facebook)",
      sourceUrl: "https://www.facebook.com/groups/sabsabali.a.launion/",
    },
    links: [
      {
        source: "Province of La Union",
        title: "Tubao, La Union",
        href: "https://launion.gov.ph/city-and-municipalities/tubao-la-union/",
      },
    ],
  },
  Pugo: {
    image: "town-pugo-pugad.jpg",
    alt: "The hillside PUGAD sign at Pugo Adventure",
    badge: "PUGAD, Pugo Adventure",
    photo: {
      sourceName: "RJD Explorer",
      sourceUrl: "https://www.rjdexplorer.com/pugad-extreme-adventure-zone-up-north/",
    },
    links: [
      {
        source: "Provincial Government of La Union",
        title: "Pugo, La Union",
        href: "https://launion.gov.ph/city-and-municipalities/pugo-la-union/",
      },
      {
        source: "Philippine Primer",
        title: "Pugad Pugo Adventure: zip lines, ATV and more",
        href: "https://primer.com.ph/travel/2017/11/07/pugad-pugo-adventure-in-la-union-zip-lines-atv-and-more/",
      },
    ],
  },
};

const mediaFor = (town: Town): TownMedia =>
  TOWN_MEDIA[town.name] ?? PLACEHOLDER_MEDIA;

function Detail({
  town,
  hideTitle = false,
}: {
  town: Town;
  hideTitle?: boolean;
}) {
  const media = mediaFor(town);
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
            src={`/img/${media.image ?? PLACEHOLDER_MEDIA.image}`}
            alt={media.alt}
            fill
            sizes="(min-width: 768px) 42vw, 100vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-card/85 px-3.5 py-1.5 font-body text-[0.78rem] font-medium tracking-tight text-ink backdrop-blur-md">
            {media.badge}
          </span>
        </div>
        <figcaption className="mt-2 font-body text-xs text-ink-soft">
          Photo: {" "}
          {media.photo.sourceUrl ? (
            <a
              href={media.photo.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-ink/20 underline-offset-2 hover:text-ink"
            >
              {media.photo.sourceName}
            </a>
          ) : (
            media.photo.sourceName
          )}
          {media.photo.licenseName && media.photo.licenseUrl && (
            <>
              {" "}
              · {" "}
              <a
                href={media.photo.licenseUrl}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-ink/20 underline-offset-2 hover:text-ink"
              >
                {media.photo.licenseName}
              </a>
            </>
          )}
        </figcaption>
      </figure>

      <nav className="mt-7" aria-label={`Useful links for ${town.name}`}>
        <p className="font-body text-eyebrow font-medium uppercase tracking-[0.18em] text-sea">
          Read more
        </p>
        <ul className="mt-2 border-b border-ink/10">
          {media.links.map((link) => (
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

// One full-width slide in the mobile carousel.
function TownCard({ town }: { town: Town }) {
  return (
    <div className="relative shrink-0 basis-full snap-start rounded-3xl border border-ink/8 bg-card p-6 shadow-card">
      <a
        href={`https://www.google.com/maps/search/${encodeURIComponent(
          `${town.name}, La Union`,
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${town.name} on Google Maps`}
        className="absolute right-5 top-5 inline-flex size-10 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors active:bg-ink active:text-cream"
      >
        <FiArrowUpRight aria-hidden className="size-5" />
      </a>
      <Detail town={town} />
    </div>
  );
}

export function TownsSection() {
  const [active, setActive] = useState("San Juan");
  const activeTown = TOWNS.find((t) => t.name === active) ?? TOWNS[0];

  // Mobile carousel: the burger, the swipe position, and the dot indicator are
  // all driven by the single `active` town.
  const mobileScrollerRef = useRef<HTMLDivElement>(null);
  const scrollTickingRef = useRef(false);
  const activeIndex = Math.max(
    0,
    ORDERED_TOWNS.findIndex((t) => t.name === active),
  );

  const scrollToIndex = (index: number, smooth: boolean) => {
    const el = mobileScrollerRef.current;
    if (!el) return;
    el.scrollTo({
      left: index * el.clientWidth,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  // Swiping updates the active town from whichever card is centered.
  const handleCarouselScroll = () => {
    if (scrollTickingRef.current) return;
    scrollTickingRef.current = true;
    requestAnimationFrame(() => {
      scrollTickingRef.current = false;
      const el = mobileScrollerRef.current;
      if (!el || el.clientWidth === 0) return;
      const town = ORDERED_TOWNS[Math.round(el.scrollLeft / el.clientWidth)];
      if (town && town.name !== active) setActive(town.name);
    });
  };

  // Burger and dot taps select a town and bring its card into view.
  const handleMobileSelect = (name: string) => {
    setActive(name);
    const index = ORDERED_TOWNS.findIndex((t) => t.name === name);
    if (index >= 0) scrollToIndex(index, true);
  };

  // Align the carousel to the active town once it has laid out (mobile only).
  useEffect(() => {
    scrollToIndex(activeIndex, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // A small sliding window of dots keeps twenty towns compact.
  const DOT_COUNT = 5;
  const dotStart = Math.max(
    0,
    Math.min(activeIndex - 2, ORDERED_TOWNS.length - DOT_COUNT),
  );
  const dotIndexes = Array.from(
    { length: Math.min(DOT_COUNT, ORDERED_TOWNS.length) },
    (_, k) => dotStart + k,
  );

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

        {/* Mobile: a burger to jump + a swipeable carousel of every town,
            with a windowed dot + counter indicator below. */}
        <div className="mt-12 md:hidden">
          <Reveal delay={120} className="relative z-30">
            <TownMenu active={active} onSelect={handleMobileSelect} />
          </Reveal>

          <div
            ref={mobileScrollerRef}
            onScroll={handleCarouselScroll}
            aria-label="Towns — swipe to browse"
            className="mt-6 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {ORDERED_TOWNS.map((t) => (
              <TownCard key={t.name} town={t} />
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
                    onClick={() => handleMobileSelect(ORDERED_TOWNS[i].name)}
                    aria-label={`Go to ${ORDERED_TOWNS[i].name}`}
                    aria-current={isActive}
                    className={`h-1.5 rounded-full transition-all ${
                      isActive ? "w-4 bg-sea-mist" : "w-1.5 bg-ink/20"
                    }`}
                  />
                );
              })}
            </div>
            <span className="font-display text-xs font-semibold tabular-nums text-ink-soft">
              {String(activeIndex + 1).padStart(2, "0")} / {ORDERED_TOWNS.length}
            </span>
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
