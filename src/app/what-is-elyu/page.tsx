// /what-is-elyu: targets "elyu meaning", "where is elyu", "where is la union".
// Facts stay in line with the home page copy and src/lib/structured-data.ts.

import Link from "next/link";
import { GuidePage } from "@/components/guide/guide-page";
import { JsonLd } from "@/components/seo/json-ld";
import { Accent } from "@/components/shared/section-header";
import { pageMetadata } from "@/lib/metadata";
import { guideJsonLd } from "@/lib/structured-data";

const TITLE = "What Does Elyu Mean? And Where Is Elyu?";
const DESCRIPTION =
  "Elyu is the nickname for La Union, a coastal province in northern Luzon. Here is where the name comes from, where Elyu is, and how far it is from Manila.";

const FAQ = [
  {
    q: "What does Elyu mean?",
    a: "Elyu is a nickname for La Union. It comes from saying the province's initials, L.U., out loud: \"el-yu\".",
  },
  {
    q: "Where is Elyu?",
    a: "Elyu is La Union, a province on Luzon's northwest coast in the Ilocos Region of the Philippines. It runs from the West Philippine Sea up into the Cordillera foothills.",
  },
  {
    q: "Is Elyu the same as San Juan?",
    a: "Not quite. People often use Elyu to mean the surf town of San Juan, but San Juan is one town in La Union. The province has one city and nineteen towns.",
  },
  {
    q: "How far is Elyu from Manila?",
    a: "Direct buses from Metro Manila take roughly 5 to 7 hours to reach the City of San Fernando and San Juan. Schedules change, so confirm with the operator before you leave.",
  },
] as const;

export const metadata = pageMetadata({
  path: "/what-is-elyu",
  title: TITLE,
  description: DESCRIPTION,
});

export default function WhatIsElyuPage() {
  return (
    <>
      <JsonLd
        data={guideJsonLd({
          path: "/what-is-elyu",
          title: TITLE,
          description: DESCRIPTION,
          faq: FAQ,
        })}
      />
      <GuidePage
        eyebrow="The name"
        title={
          <>
            What does <Accent>Elyu</Accent> mean?
          </>
        }
        lede="Elyu is the nickname for La Union, a coastal province in northern Luzon. Say the initials L.U. out loud and you get it: el-yu."
        photo={{
          src: "/img/coast-san-juan-surf.webp",
          alt: "A surfer riding a wave off Urbiztondo Beach in San Juan, La Union.",
          credit: "Legendary Surf Camps",
          creditHref:
            "https://legendarysurfcamps.com/destinations/surfing-in-la-union/",
        }}
        faq={FAQ}
        next={{
          href: "/manila-to-la-union",
          label: "Next: how to get from Manila to La Union",
        }}
      >
        <h2>Where is Elyu?</h2>
        <p>
          Elyu is on Luzon&apos;s northwest coast, in the Ilocos Region of the
          Philippines. La Union is a thin province that runs from the West
          Philippine Sea up into the Cordillera foothills. Its capital is the
          City of San Fernando.
        </p>

        <h2>Why people think Elyu is just San Juan</h2>
        <p>
          San Juan is the surfing capital of the northern Philippines, and its
          break at Urbiztondo Beach is what most visitors come for. So the
          nickname got attached to one surf town. But La Union is one city and
          nineteen towns, and San Juan is only one of them.
        </p>

        <h2>What Elyu is known for, beyond the surf</h2>
        <ul>
          <li>Inabel weaving in Bangar</li>
          <li>The Basilica of Our Lady of Charity in Agoo</li>
          <li>Basi, a sugarcane wine, in Naguilian</li>
          <li>Honey in Bacnotan</li>
          <li>Grape farms in Bauang</li>
          <li>Tangadan Falls in San Gabriel</li>
        </ul>
        <p>
          See them all in <Link href="/#towns">the town by town guide</Link>.
        </p>
      </GuidePage>
    </>
  );
}
