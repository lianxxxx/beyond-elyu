// /manila-to-la-union: targets "manila to la union", "manila to la union bus",
// "how to get to la union from manila". No fares on purpose: they change, and
// the page sends readers to the live booking sources the home page already uses.

import Link from "next/link";
import { GuidePage } from "@/components/guide/guide-page";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/shared/section-header";
import { pageMetadata } from "@/lib/metadata";
import { guideJsonLd } from "@/lib/structured-data";

const TITLE = "Manila to La Union: Bus, Terminals & Driving Guide";
const DESCRIPTION =
  "How to get from Manila to La Union by bus or car: which operators to take, where to board in Pasay, PITX, or Cubao, and how long the trip takes.";

const FAQ = [
  {
    q: "How long is the trip from Manila to La Union?",
    a: "Direct buses take roughly 5 to 7 hours. Travel time depends on traffic, the time of day, and whether you get off in San Fernando or San Juan.",
  },
  {
    q: "What bus goes from Manila to La Union?",
    a: "Partas and Viron both run direct buses from Metro Manila to the City of San Fernando and San Juan.",
  },
  {
    q: "Where do you board the bus to La Union?",
    a: "Selected Partas trips can be booked from Pasay, PITX, or Cubao. Check your ticket for the exact terminal before you leave.",
  },
  {
    q: "Should you book your La Union bus ahead?",
    a: "Yes, especially for weekends. Compare current departures and fares first, because schedules change.",
  },
] as const;

export const metadata = pageMetadata({
  path: "/manila-to-la-union",
  title: TITLE,
  description: DESCRIPTION,
});

export default function ManilaToLaUnionPage() {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          path: "/manila-to-la-union",
          title: TITLE,
          description: DESCRIPTION,
          faq: FAQ,
        })}
      />
      <GuidePage
        eyebrow="Getting there"
        title={
          <>
            Manila to <Accent>La Union</Accent>.
          </>
        }
        lede="The easiest way from Manila to La Union is a direct bus to the City of San Fernando or San Juan, which takes roughly 5 to 7 hours. You can also drive or book a private transfer."
        photo={{
          src: "/img/bued-bridge.webp",
          alt: "The La Union welcome arch over Bued Bridge at the provincial boundary in Rosario.",
          credit: "Wikipedia, Rosario, La Union",
          creditHref: "https://en.wikipedia.org/wiki/Rosario,_La_Union",
        }}
        faq={FAQ}
        next={{
          href: "/tourist-spots",
          label: "Next: La Union tourist spots",
        }}
      >
        <h2>By bus</h2>
        <p>
          Partas and Viron run north from Metro Manila to San Fernando and San
          Juan. Selected Partas trips can be reserved from Pasay, PITX, or
          Cubao.
        </p>
        <ul>
          <li>
            <a
              href="https://launionbus.ph/"
              target="_blank"
              rel="noreferrer"
            >
              Check live schedules and fares
            </a>
          </li>
          <li>
            <a
              href="https://www.klook.com/en-PH/activity/25707-bus-transfer-manila-la-union/"
              target="_blank"
              rel="noreferrer"
            >
              Reserve a Partas seat
            </a>
          </li>
          <li>
            <a
              href="https://www.geckoroutes.com/philippines/manila-to-la-union/"
              target="_blank"
              rel="noreferrer"
            >
              Compare bus routes
            </a>
          </li>
        </ul>

        <h2>By car</h2>
        <p>
          Driving gives you the most freedom once you arrive, especially for
          inland stops like La Union&apos;s waterfalls. Take NLEX, SCTEX, and TPLEX north, leave the expressway at
          Rosario, then follow the coast road up through the province. Travel
          time follows traffic, so leave early on weekends.
        </p>
        <p>
          <a
            href="https://www.rome2rio.com/s/Manila/La-Union-Philippines"
            target="_blank"
            rel="noreferrer"
          >
            Compare driving and private transfers
          </a>
        </p>

        <h2>Where to get off</h2>
        <p>
          Go to San Juan if you are here for the surf at Urbiztondo. Go to the
          City of San Fernando, the provincial capital, for the Ma-Cho Temple
          and Poro Point. Not sure yet? Browse{" "}
          <Link href="/#towns">the towns</Link> first.
        </p>
      </GuidePage>
    </>
  );
}
