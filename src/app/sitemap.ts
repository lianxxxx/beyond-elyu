import type { MetadataRoute } from "next";
import { GUIDES } from "@/lib/guides";
import { SITE } from "@/lib/site";

// Static routes: the home guide, the topic guides, and the /note page.

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}/guides`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...GUIDES.map((guide) => ({
      url: `${SITE.url}${guide.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE.url}/note`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
