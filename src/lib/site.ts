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
  // beyond the surf". This is the one tagline everywhere — the OG card and
  // llms.txt read "beyond the surf" too, so every shared preview is one voice.
  title: "elyu — beyond the surf",
  description:
    "La Union is not overrated. An editorial field guide to the coast everyone thinks they already know — its towns, tides, surf, and the details you only catch on a second look.",
  // Search-result versions of the above. `title`/`description` stay the brand
  // voice for share cards; these carry the words people actually search for.
  seoTitle: "La Union Travel Guide: Beaches, Towns & Tourist Spots",
  seoDescription:
    "Where to go in La Union (Elyu): tourist spots, beaches, waterfalls and grape farms across all 20 towns, plus how to get there from Manila.",
  locale: "en_PH",
} as const;
