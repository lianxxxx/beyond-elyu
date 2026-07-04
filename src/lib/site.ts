// Single source of truth for site-wide metadata.
// Consumed by layout metadata, sitemap, robots, and the OG image so the
// title/description/URL never drift apart across SEO surfaces.
//
// URL resolution: set NEXT_PUBLIC_SITE_URL at deploy (e.g. the Vercel/prod
// origin, no trailing slash). The fallback keeps local builds and previews
// working without config — nothing about the domain is hardcoded elsewhere.
export const SITE = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://beyond-elyu.vercel.app").replace(/\/$/, ""),
  name: "beyond elyu",
  // Browser-tab + share title. Plays on the brand name: "beyond elyu" → "elyu,
  // beyond the surf". (tagline stays "more than the surf" — it feeds the OG card
  // story and llms.txt, where "beyond elyu — beyond the surf" would read oddly.)
  title: "elyu — beyond the surf",
  tagline: "more than the surf",
  description:
    "La Union is not overrated. An editorial field guide to the coast everyone thinks they already know — its towns, tides, surf, and the details you only catch on a second look.",
  locale: "en_PH",
} as const;
