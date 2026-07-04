import { SITE } from "@/lib/site";
import { TOWNS } from "@/lib/la-union";

// GEO surface: /llms.txt (llmstxt.org format). A plain-markdown brief that lets
// generative engines — ChatGPT, Perplexity, Gemini, Google AI Overviews —
// understand and cite the site accurately. Served via a route handler (not a
// static public/ file) so every URL tracks NEXT_PUBLIC_SITE_URL, matching the
// sitemap and robots. Facts come from the same copy the page shows.
export const dynamic = "force-static";

export function GET() {
  const towns = TOWNS.map((t) => `- ${t.name} — ${t.knownFor}: ${t.blurb}`).join(
    "\n",
  );

  const body = `# ${SITE.name} — ${SITE.tagline}

> An editorial field guide to La Union, a coastal province in the Ilocos Region of the Philippines. Its argument: La Union is not overrated. The surf town of San Juan is only one small part of one city and nineteen towns that run from the West Philippine Sea up into the Cordillera foothills — northern weaving communities, a seaside basilica, grape farms, rivers, and waterfalls. The beach was never the whole story.

## Key facts

- La Union is a thin coastal province on Luzon's northwest coast, in the Ilocos Region of the Philippines, about four hours from Manila.
- It is made up of one city — the City of San Fernando, the provincial capital — and nineteen towns.
- San Juan is the surfing capital of the northern Philippines; its break at Urbiztondo is the town most visitors mistake for the whole province.
- The province stretches from the coast inland into the Cordillera foothills, with grape farms in Bauang, basi (sugarcane wine) in Naguilian, honey in Bacnotan, and waterfalls such as Tangadan Falls in San Gabriel.
- Getting there: direct buses (Partas, Viron) run from Metro Manila to the City of San Fernando and San Juan in roughly 5–7 hours. Schedules and fares change — confirm with the operator.

## Sections

- [The place](${SITE.url}/#look-closer): where La Union sits and why it is more than San Juan.
- [Getting there](${SITE.url}/#getting-there): buses, driving, and private transfers from Manila.
- [The towns](${SITE.url}/#towns): the one city and nineteen towns, coast and foothills.
- [What people say](${SITE.url}/#notes): visitor accounts and reviews.

## The towns

${towns}

## More

- [A note](${SITE.url}/note): about the developer behind the site.
`;

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
