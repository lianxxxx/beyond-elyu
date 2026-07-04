import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Two static routes today: the single-page guide and the /note page.
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
      url: `${SITE.url}/note`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
