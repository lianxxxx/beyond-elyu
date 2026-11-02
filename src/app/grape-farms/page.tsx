// /grape-farms: targets "grape farm la union", "la union grapes farm",
// "gapuz grape farm". No prices or harvest months on purpose: published figures
// disagree and go stale, so the page tells readers to confirm with the farm.

import Link from "next/link";
import { GuidePage } from "@/components/guide/guide-page";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/shared/section-header";
import { pageMetadata } from "@/lib/metadata";
import { guideJsonLd } from "@/lib/structured-data";

const TITLE = "Grape Farms in La Union: Where to Pick Grapes";
const DESCRIPTION =
  "Where to find grape farms in La Union, from Gapuz and Lomboy in Bauang to farms in Caba, plus how to get there and what to check before you go.";

const FAQ = [
  {
    q: "Where are the grape farms in La Union?",
    a: "Most are in Bauang, especially around Barangay Urayong. There are also grape farms in neighboring Caba.",
  },
  {
    q: "Can you pick grapes in La Union all year?",
    a: "No. Grape picking depends on the harvest, so message the farm first to confirm there is fruit to pick.",
  },
  {
    q: "How do you get to the grape farms in La Union?",
    a: "Take a bus to Bauang, then hire a tricycle to the farm. If you drive, confirm the farm's location before you set out.",
  },
] as const;

export const metadata = pageMetadata({
  path: "/grape-farms",
  title: TITLE,
  description: DESCRIPTION,
});

export default function GrapeFarmsPage() {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          path: "/grape-farms",
          title: TITLE,
          description: DESCRIPTION,
          faq: FAQ,
        })}
      />
      <GuidePage
        eyebrow="Bauang"
        title={
          <>
            Grape farms in <Accent>La Union</Accent>.
          </>
        }
        lede="Yes, the Philippines grows grapes, and much of the story starts in Bauang, La Union. Most farms sit around Barangay Urayong, and you can pick from the vines when the fruit is in season."
        photo={{
          src: "/img/town-bauang-gapuz-grape-farm.webp",
          alt: "Rows of vines heavy with grapes at Gapuz Grape Farm in Bauang.",
          credit: "Gapuz Grapes Farm",
          creditHref: "https://www.facebook.com/GapuzGrapesFarm/",
        }}
        faq={FAQ}
        next={{ href: "/tourist-spots", label: "Next: La Union tourist spots" }}
      >
        <h2>Where to go</h2>
        <ul>
          <li>
            <strong>Lomboy Farm, Bauang:</strong> the town government credits it
            as the pioneering vineyard, from 1972.
          </li>
          <li>
            <strong>Gapuz Grapes Farm, Bauang:</strong> one of the best-known
            names.{" "}
            <a
              href="https://www.facebook.com/GapuzGrapesFarm/"
              target="_blank"
              rel="noreferrer"
            >
              Message them on Facebook
            </a>{" "}
            to check for fruit.
          </li>
          <li>
            <strong>Caba:</strong> the next town south also has grape farms open
            to visitors.
          </li>
        </ul>

        <h2>Before you go</h2>
        <ul>
          <li>Confirm there is fruit to pick, since it depends on the harvest.</li>
          <li>Ask about the price per kilo, as it varies by farm and season.</li>
          <li>Check if you need an appointment and what the opening hours are.</li>
        </ul>

        <h2>How to get there</h2>
        <p>
          Take a bus to Bauang, then hire a tricycle to the farm. Coming from
          the city? Start with our{" "}
          <Link href="/manila-to-la-union">Manila to La Union guide</Link>.
        </p>

        <h2>Make a day of it</h2>
        <p>
          Bauang also has a long shore of beach resorts, so a farm stop pairs
          easily with an afternoon on one of the{" "}
          <Link href="/beaches">beaches in La Union</Link>.
        </p>
      </GuidePage>
    </>
  );
}
