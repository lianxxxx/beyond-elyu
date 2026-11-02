import { SITE } from "./site";

// JSON-LD graph for the home page. Every claim here is lifted from the site's
// own visible copy (intro, getting-there, and the town data in la-union.ts) —
// nothing invented — so the structured data and the page always agree. This is
// the AEO lever: it's what lets answer engines (Google AI Overviews, voice,
// snippets) quote the page with a source and a rich result.

const ATTRACTIONS = [
  {
    name: "Urbiztondo Beach",
    town: "San Juan",
    desc: "The break that made San Juan the surfing capital of the northern Philippines.",
  },
  {
    name: "Basilica of Our Lady of Charity",
    town: "Agoo",
    desc: "A pilgrimage basilica that draws thousands, heaviest through Holy Week.",
  },
  {
    name: "Ma-Cho Temple",
    town: "City of San Fernando",
    desc: "A seaside temple at the province's Chinese-Filipino heart.",
  },
  {
    name: "Tangadan Falls",
    town: "San Gabriel",
    desc: "The best-known waterfall on the trail into La Union's highlands.",
  },
  {
    name: "Poro Point",
    town: "City of San Fernando",
    desc: "A headland and lighthouse with wide views over the West Philippine Sea.",
  },
] as const;

// Also rendered on the home page by HomeFaq, so keep this as readable copy.
export const FAQ = [
  {
    q: "Is La Union overrated?",
    a: "No. La Union is often reduced to the surf town of San Juan, but the province is one city and nineteen towns, from the inabel weaving communities of Bangar and the Basilica of Our Lady of Charity in Agoo to inland grape farms, rivers, and waterfalls. The beach was never the whole story.",
  },
  {
    q: "Where is La Union?",
    a: "La Union is a thin province on Luzon's northwest coast in the Ilocos Region of the Philippines. It runs from the West Philippine Sea up into the Cordillera foothills and sits roughly five to seven hours by bus from Manila.",
  },
  {
    q: "How do you get to La Union from Manila?",
    a: "Direct buses run north from Metro Manila to the City of San Fernando and San Juan in roughly 5–7 hours, with operators such as Partas and Viron. You can also drive or arrange a private transfer. Schedules and fares change, so confirm with the operator before departure.",
  },
  {
    q: "What is La Union known for?",
    a: "San Juan is the surfing capital of the northern Philippines, but La Union is also known for Bangar's inabel weaving, the Basilica of Our Lady of Charity in Agoo, Naguilian's basi sugarcane wine, Bacnotan's honey, and inland waterfalls such as Tangadan Falls in San Gabriel.",
  },
  {
    q: "How many towns are in La Union?",
    a: "La Union is made up of one city (the City of San Fernando, the provincial capital) and nineteen municipalities, stretching from the northern coast down to Rosario and inland into the Cordillera foothills.",
  },
] as const;

// JSON-LD for a guide page: the article itself plus its visible FAQ. Pass the
// same FAQ the page renders, so the markup and the page never disagree.
export function guideJsonLd({
  path,
  title,
  description,
  faq,
}: {
  path: string;
  title: string;
  description: string;
  faq: readonly { q: string; a: string }[];
}) {
  const url = `${SITE.url}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: title,
        description,
        url,
        inLanguage: "en",
        about: { "@id": `${SITE.url}/#destination` },
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en",
      },
      {
        "@type": "TouristDestination",
        "@id": `${SITE.url}/#destination`,
        name: "La Union",
        alternateName: "Elyu",
        description:
          "La Union is a thin coastal province on Luzon's northwest coast in the Ilocos Region of the Philippines, running from the West Philippine Sea up into the Cordillera foothills, roughly five to seven hours by bus from Manila. It is made up of one city and nineteen towns.",
        url: SITE.url,
        geo: {
          "@type": "GeoCoordinates",
          latitude: 16.6159,
          longitude: 120.3166,
        },
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Ilocos Region, Philippines",
        },
        includesAttraction: ATTRACTIONS.map((a) => ({
          "@type": "TouristAttraction",
          name: a.name,
          description: a.desc,
          address: {
            "@type": "PostalAddress",
            addressLocality: a.town,
            addressRegion: "La Union",
            addressCountry: "PH",
          },
        })),
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
