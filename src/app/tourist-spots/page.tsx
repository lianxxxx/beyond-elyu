// /tourist-spots: targets "la union tourist spots" and its variants.
// Every place here already appears on the home page (towns + coast strip).

import Link from "next/link";
import { GuidePage } from "@/components/guide/guide-page";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/shared/section-header";
import { pageMetadata } from "@/lib/metadata";
import { guideJsonLd } from "@/lib/structured-data";

const TITLE = "La Union Tourist Spots: Where to Go, Town by Town";
const DESCRIPTION =
  "The best tourist spots in La Union, from Urbiztondo Beach and Tangadan Falls to Immuki Island, Ma-Cho Temple, and the Baluarte watchtower in Luna.";

const FAQ = [
  {
    q: "What is the most famous tourist spot in La Union?",
    a: "Urbiztondo Beach in San Juan is the best known, thanks to its surf. Tangadan Falls in San Gabriel and Immuki Island in Balaoan are also among the province's most popular stops.",
  },
  {
    q: "What can you do in La Union besides surfing?",
    a: "You can swim at Tangadan Falls, visit the Ma-Cho Temple in San Fernando, see the Baluarte watchtower in Luna, pick grapes in Bauang, or buy inabel cloth in Bangar.",
  },
  {
    q: "Are the tourist spots in La Union close together?",
    a: "The coastal stops line up north to south, while the waterfalls sit inland in towns like San Gabriel and Bagulin. Group your stops by area instead of crossing the province in one day.",
  },
] as const;

export const metadata = pageMetadata({
  path: "/tourist-spots",
  title: TITLE,
  description: DESCRIPTION,
});

export default function TouristSpotsPage() {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          path: "/tourist-spots",
          title: TITLE,
          description: DESCRIPTION,
          faq: FAQ,
        })}
      />
      <GuidePage
        eyebrow="Where to go"
        title={
          <>
            La Union <Accent>tourist spots</Accent>.
          </>
        }
        lede="La Union's tourist spots run far past the surf in San Juan. Here is where to go, grouped by area so you can plan your days."
        photo={{
          src: "/img/coast-immuki-island.webp",
          alt: "An aerial view of the turquoise tidal rock pools and bamboo rafts at Immuki Island in Balaoan.",
          credit: "Jhumeal (Facebook)",
          creditHref:
            "https://www.facebook.com/61573138859977/posts/the-world-is-too-beautiful-to-stay-in-one-place-immuki-island-paraoir-balaoan-la/122114503202771295/",
        }}
        faq={FAQ}
        next={{ href: "/beaches", label: "Next: beaches in La Union" }}
      >
        <h2>North coast: Bangar, Luna, and Balaoan</h2>
        <ul>
          <li>
            <strong>Inabel weaving, Bangar:</strong> cloth still made on wooden
            pedal looms.
          </li>
          <li>
            <strong>Baluarte watchtower, Luna:</strong> a Spanish-era tower on
            the shore.
          </li>
          <li>
            <strong>Pebble Beach, Luna:</strong> smooth grey stones instead of
            sand.
          </li>
          <li>
            <strong>Bahay na Bato, Luna:</strong> a stone art house and garden.
          </li>
          <li>
            <strong>Immuki Island, Balaoan:</strong> turquoise tidal rock pools.
          </li>
          <li>
            <strong>Man-made Forest, Balaoan:</strong> a road under a green
            canopy of trees.
          </li>
        </ul>

        <h2>Central coast: San Juan, San Fernando, and Bacnotan</h2>
        <ul>
          <li>
            <strong>Urbiztondo Beach, San Juan:</strong> the surf that made the
            town famous.
          </li>
          <li>
            <strong>Ma-Cho Temple, San Fernando:</strong> a colorful temple at
            the heart of the province&apos;s Chinese-Filipino community.
          </li>
          <li>
            <strong>Poro Point, San Fernando:</strong> a headland and lighthouse
            with wide views of the West Philippine Sea.
          </li>
          <li>
            <strong>Pindangan ruins, San Fernando:</strong> the remains of an
            older church.
          </li>
          <li>
            <strong>La Union Bee Farm, Bacnotan:</strong> in the town known as
            the Honey Capital of the North.
          </li>
        </ul>

        <h2>South: Bauang, Agoo, and Pugo</h2>
        <ul>
          <li>
            <strong>
              <Link href="/grape-farms">Grape farms, Bauang</Link>:
            </strong>{" "}
            vines you can pick from in season.
          </li>
          <li>
            <strong>Basilica of Our Lady of Charity, Agoo:</strong> a pilgrimage
            site, busiest during Holy Week.
          </li>
          <li>
            <strong>Agoo Eco Park:</strong> a quiet grove of agoho pines.
          </li>
          <li>
            <strong>Lakay Ago Nature&apos;s Park, Agoo:</strong> a storybook
            cottage and flower garden.
          </li>
          <li>
            <strong>PUGAD Pugo Adventure, Pugo:</strong> zip lines and outdoor
            activities in the hills.
          </li>
        </ul>

        <h2>Inland: waterfalls and mountain roads</h2>
        <ul>
          <li>
            <strong>
              <Link href="/tangadan-falls">Tangadan Falls, San Gabriel</Link>:
            </strong>{" "}
            the province&apos;s best-known waterfall.
          </li>
          <li>
            <strong>Dupagan Falls, San Gabriel:</strong> a narrow cascade in a
            turquoise gorge.
          </li>
          <li>
            <strong>Bulalakaw Falls, Bagulin:</strong> a waterfall between high
            rock walls.
          </li>
          <li>
            <strong>Balay Anito Falls, Santol:</strong> a deep green swimming
            pool.
          </li>
          <li>
            <strong>Bilagan Road, Sudipen:</strong> a winding road over green
            ridges.
          </li>
        </ul>

        <p>
          Coming from the city? Start with{" "}
          <Link href="/manila-to-la-union">how to get from Manila</Link>.
        </p>
      </GuidePage>
    </>
  );
}
