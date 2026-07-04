import { homeJsonLd } from "@/lib/structured-data";

// Renders the home page's JSON-LD graph. Server component — the script ships in
// the initial HTML so crawlers and answer engines read it without running JS.
// Input is static, author-controlled data, so dangerouslySetInnerHTML is safe.
export function HomeJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd()) }}
    />
  );
}
