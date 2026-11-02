// /tangadan-falls: targets "tangadan falls" and "tangadan falls la union".
// No fees or guide rates on purpose: they change, so the page points to the
// province and tour listings instead.

import Link from "next/link";
import { GuidePage } from "@/components/guide/guide-page";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/shared/section-header";
import { pageMetadata } from "@/lib/metadata";
import { guideJsonLd } from "@/lib/structured-data";

const TITLE = "Tangadan Falls, La Union: How to Get There";
const DESCRIPTION =
  "Tangadan Falls is a two-tier waterfall in San Gabriel, La Union. Here is how to get there, why you need a tour guide, and what to expect on the trek.";

const FAQ = [
  {
    q: "Where is Tangadan Falls?",
    a: "Tangadan Falls is in Barangay Amontoc, San Gabriel, an inland town in La Union.",
  },
  {
    q: "How tall is Tangadan Falls?",
    a: "Tangadan Falls has two tiers, and its main cascade is often described as about 50 feet high.",
  },
  {
    q: "How do you get to Tangadan Falls from Manila?",
    a: "Take a bus from Metro Manila to San Fernando, La Union, then continue to San Gabriel by tricycle or jeepney. Short on time? Book a tour that handles the transfer.",
  },
  {
    q: "Do you need a tour guide for Tangadan Falls?",
    a: "Yes. A tour guide is strictly required. There are personnel watching the area, and you will be stopped if you do not have one. The walk to the falls is also long, so you need the guide anyway.",
  },
  {
    q: "Is there another waterfall near Tangadan Falls?",
    a: "Yes. San Gabriel also has Dupagan Falls, a narrow cascade in a turquoise gorge.",
  },
] as const;

export const metadata = pageMetadata({
  path: "/tangadan-falls",
  title: TITLE,
  description: DESCRIPTION,
});

export default function TangadanFallsPage() {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          path: "/tangadan-falls",
          title: TITLE,
          description: DESCRIPTION,
          faq: FAQ,
        })}
      />
      <GuidePage
        eyebrow="San Gabriel"
        title={
          <>
            Tangadan <Accent>Falls</Accent>.
          </>
        }
        lede="Tangadan Falls is a two-tier waterfall in Barangay Amontoc, San Gabriel, and the best-known waterfall on the trail into La Union's highlands."
        photo={{
          src: "/img/town-san-gabriel-tangadan-falls.webp",
          alt: "The wide sloping cascade of Tangadan Falls tumbling into its green pool in San Gabriel.",
          credit: "The Quaint Traveler",
          creditHref:
            "https://thequainttraveler.blogspot.com/2016/05/Tangadan-falls-San-Gabriel-La-Union.html",
        }}
        faq={FAQ}
        next={{ href: "/grape-farms", label: "Next: grape farms in La Union" }}
      >
        <h2>You need a tour guide</h2>
        <p>
          A tour guide is strictly required for Tangadan Falls. There are
          personnel watching the area, and you will be stopped if you
          don&apos;t have one. You will want one anyway, because the walk to
          the falls is long.
        </p>

        <h2>What to expect</h2>
        <p>
          The falls drop about 50 feet into a wide green basin on the Baroro
          River. Getting there is part of the trip: you trek past rice fields
          and bamboo, and cross flowing rivers on the way in. Wear shoes that
          can get wet.
        </p>

        <h2>How to get there</h2>
        <ul>
          <li>
            <strong>Get to San Fernando:</strong> take a bus from Metro Manila.
            Our <Link href="/manila-to-la-union">Manila to La Union guide</Link>{" "}
            covers the options.
          </li>
          <li>
            <strong>Continue to San Gabriel:</strong> ride a tricycle or
            jeepney.
          </li>
          <li>
            <strong>Prefer it arranged?</strong>{" "}
            <a
              href="https://www.klook.com/en-PH/activity/159771-tangadan-falls-tour/"
              target="_blank"
              rel="noreferrer"
            >
              Book a Tangadan Falls tour
            </a>
            .
          </li>
        </ul>
        <p>
          Fees and access rules can change, so check with the{" "}
          <a
            href="https://launion.gov.ph/tangadan-falls-hidden-treasure-of-la-union/"
            target="_blank"
            rel="noreferrer"
          >
            Province of La Union
          </a>{" "}
          before you go.
        </p>

        <h2>Dupagan Falls and more waterfalls nearby</h2>
        <p>
          Tangadan isn&apos;t San Gabriel&apos;s only waterfall. There is also
          Dupagan Falls, a narrow cascade in a turquoise gorge, plus the
          cascades along the Arosip ecotrail. For more, see{" "}
          <Link href="/tourist-spots">La Union tourist spots</Link>.
        </p>
      </GuidePage>
    </>
  );
}
