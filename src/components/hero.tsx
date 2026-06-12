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
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden text-sand">
      {/* ── Full-bleed cover photo ── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-sea-deep bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.webp')" }}
      />
      {/* Legibility scrim — darkens top (for nav) and lower-left (for the headline) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--color-ink) 38%, transparent) 0%, transparent 26%), linear-gradient(to top, color-mix(in oklab, var(--color-ink) 72%, transparent) 0%, transparent 60%), linear-gradient(to right, color-mix(in oklab, var(--color-ink) 40%, transparent) 0%, transparent 55%)",
        }}
      />

      {/* ── Floating pill navigation — translucent capsule over the photo ── */}
      <header className="flex justify-center px-gutter pt-[clamp(1.25rem,2.5vw,2rem)]">
        <div className="flex items-center gap-8 rounded-full border border-sand/15 bg-ink/35 px-2.5 py-2 backdrop-blur-md">
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
                className="rounded-full px-5 py-1.5 text-sand/85 transition-colors hover:bg-sand/10 hover:text-sand"
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

      {/* ── Lower content: location chip, headline, short lede, spot capsules ── */}
      <div className="mt-auto max-w-3xl px-gutter pb-[clamp(2.5rem,5vw,4.5rem)]">
        

        <h1 className="mt-5 font-display text-display font-semibold tracking-tight">
          La Union
        </h1>

        <p className="mt-3 max-w-[50ch] text-base font-body leading-relaxed text-sand/80 md:text-xl">
          Overrated is what you call a place when you mistook one town for the
          whole of it. San Juan was the part you saw. This is the part you
          didn&apos;t.
        </p>

        {/* Spot capsules — translucent glass over the photo */}
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {SPOTS.map((spot) => (
            <li key={spot}>
              <a
                href="#guide"
                className="inline-flex items-center rounded-full border border-sand/25 bg-ink/20 px-4 py-2 text-sm font-medium text-sand/90 backdrop-blur-md transition-colors hover:border-sand/40 hover:bg-sand/15 hover:text-sand"
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
