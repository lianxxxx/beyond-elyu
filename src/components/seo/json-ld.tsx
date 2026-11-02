import { homeJsonLd } from "@/lib/structured-data";

// Renders a JSON-LD graph. Server component — the script ships in the initial
// HTML so crawlers and answer engines read it without running JS. Input is
// static, author-controlled data, so dangerouslySetInnerHTML is safe.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HomeJsonLd() {
  return <JsonLd data={homeJsonLd()} />;
}
