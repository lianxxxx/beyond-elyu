import type { Metadata } from "next";
import { SITE } from "./site";

// Metadata for a child page. Next replaces the layout's openGraph and twitter
// objects instead of merging them, so each page sets its own full set here.
// Otherwise every shared link would show the home page's URL and title.
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: path,
      siteName: SITE.name,
      title: fullTitle,
      description,
      // Replacing openGraph also drops the root opengraph-image, so set it here.
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/twitter-image"],
    },
  };
}
