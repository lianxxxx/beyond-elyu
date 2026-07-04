import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Open to everyone — including AI crawlers (GPTBot, PerplexityBot, Google-Extended,
// etc.). That's deliberate: being cited by answer/generative engines is a goal
// here (the GEO tier), so we don't block them.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
