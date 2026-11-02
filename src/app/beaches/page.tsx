// /beaches: targets "beaches in la union", "la union beach",
// "san juan la union beach", "urbiztondo beach".

import Link from "next/link";
import { GuidePage } from "@/components/guide/guide-page";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/shared/section-header";
import { pageMetadata } from "@/lib/metadata";
import { guideJsonLd } from "@/lib/structured-data";

const TITLE = "Beaches in La Union: Surf, Pebbles, and Quiet Shores";
const DESCRIPTION =
  "A guide to the beaches of La Union: Urbiztondo in San Juan, Pebble Beach in Luna, the Bauang shore, Immuki Island's rock pools, and quiet southern camps.";

const FAQ = [
  {
    q: "What is the best beach in La Union for surfing?",
    a: "Urbiztondo Beach in San Juan is the main surf beach and the reason the town is called the surfing capital of the northern Philippines.",
  },
  {
    q: "Which beach in La Union is quiet?",
    a: "Head away from San Juan. Luna's pebble shore, Caba, and the southern coast in Santo Tomas and Rosario are all much calmer.",
  },
  {
    q: "Does La Union have white sand beaches?",
    a: "La Union is better known for surf and character than for white sand. Luna's shore, for example, is covered in smooth grey pebbles.",
  },
] as const;

export const metadata = pageMetadata({
  path: "/beaches",
  title: TITLE,
  description: DESCRIPTION,
});

export default function BeachesPage() {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          path: "/beaches",
          title: TITLE,
          description: DESCRIPTION,
          faq: FAQ,
        })}
      />
      <GuidePage
        eyebrow="The coast"
        title={
          <>
            Beaches in <Accent>La Union</Accent>.
          </>
        }
        lede="Pick your beach by what you want: surf in San Juan, grey pebbles in Luna, rock pools in Balaoan, or a quiet camp on the southern coast."
        photo={{
          src: "/img/coast-luna-pebble-beach.webp",
          alt: "A bamboo hut and stone boats on the grey pebble shore of Luna's Pebble Beach.",
          credit: "fieldslaunion (Instagram)",
          creditHref: "https://www.instagram.com/p/C6diq8jPbAh/?img_index=2",
        }}
        faq={FAQ}
        next={{ href: "/tangadan-falls", label: "Next: Tangadan Falls" }}
      >
        <h2>Urbiztondo Beach, San Juan</h2>
        <p>
          This is the famous one. Urbiztondo is the break that made San Juan the
          surfing capital of the northern Philippines, and it is where most
          first-time visitors stay. Expect the biggest crowds in the province
          here.
        </p>

        <h2>Pebble Beach, Luna</h2>
        <p>
          Luna&apos;s shore is smooth grey stones instead of sand, with the
          Spanish-era Baluarte watchtower standing over it. Come for the view
          and the photos.
        </p>

        <h2>Immuki Island, Balaoan</h2>
        <p>
          Not a beach in the usual sense: Immuki is known for its turquoise
          tidal rock pools and bamboo rafts.
        </p>

        <h2>Bauang</h2>
        <p>
          Bauang spent decades as La Union&apos;s resort strip, with a long
          shore of old beach houses. It pairs well with a trip to the{" "}
          <Link href="/grape-farms">grape farms</Link> inland.
        </p>

        <h2>Caba, Santo Tomas, and Rosario</h2>
        <p>
          The southern coast is the quiet side. Caba has windswept points and
          beach camping, Santo Tomas has the Damortis shoreline, and Bani in
          Rosario has seaside camping.
        </p>

        <p>
          Want more than the shore? See every{" "}
          <Link href="/tourist-spots">tourist spot in La Union</Link>.
        </p>
      </GuidePage>
    </>
  );
}
