// Every topic guide, in reading order. Feeds the sitemap, llms.txt, and the
// guide links on the home page, so a new guide only has to be added here.
export const GUIDES = [
  {
    href: "/tourist-spots",
    label: "La Union tourist spots",
    summary: "The best places to see, town by town.",
  },
  {
    href: "/beaches",
    label: "Beaches in La Union",
    summary: "Surf, pebble shores, rock pools, and quiet camps.",
  },
  {
    href: "/tangadan-falls",
    label: "Tangadan Falls",
    summary: "Where it is and how to get there.",
  },
  {
    href: "/grape-farms",
    label: "Grape farms in La Union",
    summary: "Where to pick grapes in Bauang and Caba.",
  },
  {
    href: "/manila-to-la-union",
    label: "Manila to La Union",
    summary: "Buses, terminals, and driving.",
  },
  {
    href: "/what-is-elyu",
    label: "What does Elyu mean?",
    summary: "Where the nickname comes from.",
  },
] as const;
