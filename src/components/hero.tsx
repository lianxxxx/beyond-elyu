// Hero — beyond-elyu. Composition inspired by the travel-hero reference,
// rebuilt in our Coastal Editorial system (no cream/gold, no borrowed type).
//
// IMAGE: `public/hero.webp` fills the whole hero as a cover background.
// If it's ever missing, it falls back to a warm deep-sea-green tint.

const NAV = [
  { label: "Guide", href: "#guide" },
  { label: "The Map", href: "#map" },
  { label: "Journal", href: "#journal" },
];

const SPOTS = [
  "Waterfalls",
  "Local food",
  "Heritage towns",
  "Sunset views",
  "Mountain trails",
];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-svh flex-col overflow-hidden text-sand">
      {/* ── Full-bleed cover photo ── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-sea-deep bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.webp')" }}
      />
      {/* Legibility scrim — tuned for a BRIGHT photo (blue sky up top, pale
         water + sand down low). Stronger than a normal scrim because the image
         fights light text on both bands. Warm-toward-ink so it reads as
         afternoon shadow, not a gray veil. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: [
            // top band — sits under the floating nav, over bright sky
            "linear-gradient(to bottom, color-mix(in oklab, var(--color-ink) 60%, transparent) 0%, transparent 22%)",
            // bottom band — the headline + lede, over the brightest water/sand
            "linear-gradient(to top, color-mix(in oklab, var(--color-ink) 86%, transparent) 0%, color-mix(in oklab, var(--color-ink) 34%, transparent) 30%, transparent 64%)",
            // left band — anchors the lower-left text column
            "linear-gradient(to right, color-mix(in oklab, var(--color-ink) 52%, transparent) 0%, transparent 54%)",
          ].join(", "),
        }}
      />
      {/* The bridge — the photo resolves into the page's sand ground so the
         hero lands on the sections instead of cutting to flat cream. This is the
         connective tissue between the immersive hero and the light page. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[16vh] bg-gradient-to-b from-transparent to-sand-deep"
      />

      {/* ── Floating pill navigation — translucent capsule over the photo ── */}
      <header className="flex justify-center px-gutter pt-[clamp(1.25rem,2.5vw,2rem)]">
        <div className="flex items-center gap-8 rounded-full border border-sand/25 bg-ink/55 px-2.5 py-2 backdrop-blur-lg">
          {/* wordmark */}
          <a
            href="#top"
            aria-label="elyu — home"
            className="rounded-full bg-sand px-4 py-1.5 font-display text-base font-medium lowercase tracking-tight text-ink"
          >
            elyu
          </a>

          <nav className="hidden items-center gap-3 text-sm font-medium md:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-5 py-1.5 text-sand transition-colors hover:bg-sand/15"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#plan"
            className="rounded-full bg-sand px-5 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-terracotta hover:text-sand"
          >
            Plan a trip
          </a>
        </div>
      </header>

      {/* ── Lower content: headline, short lede, spot capsules ──
         Bottom padding clears the sand bridge so the text and capsules stay
         over the darkened photo, never over the cream resolve. */}
      <div className="mt-auto max-w-3xl px-gutter pb-[clamp(3.5rem,9vh,6.5rem)] [text-shadow:0_2px_28px_color-mix(in_oklab,var(--color-ink)_45%,transparent)]">
        <h1 className="font-display text-display font-semibold tracking-tight text-sand">
          La Union
        </h1>

        <p className="mt-3 max-w-[50ch] text-base font-body leading-relaxed text-sand/95 md:text-xl">
          Overrated is what you call a place when you mistook one town for the
          whole of it. San Juan was the part you saw. This is the part you
          didn&apos;t.
        </p>

        {/* Spot capsules — translucent glass over the photo */}
        <ul className="mt-10 flex flex-wrap gap-2.5 [text-shadow:none]">
          {SPOTS.map((spot) => (
            <li key={spot}>
              <a
                href="#guide"
                className="inline-flex items-center rounded-full border border-sand/30 bg-ink/40 px-4 py-2 text-sm font-medium text-sand backdrop-blur-md transition-colors hover:border-sand/45 hover:bg-ink/55"
              >
                {spot}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
