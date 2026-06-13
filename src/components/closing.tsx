// Closing — beyond-elyu, section 6. The turn.
// After the white of the argument, the page commits to one drenched sea panel
// and rests its case: overrated was only ever under-looked. It bookends the
// hero, photograph plus a deep wash, so the scroll opens and closes on the
// water. Emphasis comes from scale, not colour (terracotta on sea is illegible).

import { Reveal } from "@/components/reveal";

export function Closing() {
  return (
    <section
      id="plan"
      className="relative isolate overflow-hidden px-gutter py-bay text-sand"
    >
      {/* Photograph of the break, sunk under a deep sea wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-sea-deep bg-cover bg-center"
        style={{ backgroundImage: "url('/img/surfer.jpg')" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: [
            "linear-gradient(color-mix(in oklab, var(--color-sea) 84%, transparent), color-mix(in oklab, var(--color-sea) 92%, transparent))",
            // deepen toward the foot so it hands off cleanly to the ink footer
            "linear-gradient(to bottom, transparent 55%, color-mix(in oklab, var(--color-ink) 45%, transparent) 100%)",
          ].join(", "),
        }}
      />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-body text-eyebrow font-medium uppercase tracking-[0.2em] text-sand/60">
            Look closer
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 max-w-[16ch] font-display text-display font-semibold tracking-tight text-sand">
            Overrated is just under-looked.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-[54ch] font-body text-lede text-sand/90">
            You came for a weekend and left with a verdict. The province is
            still here, one city and nineteen towns deep, in no hurry to prove
            anything. Come back when you can stay longer than the swell.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#top"
              className="rounded-full bg-sand px-6 py-2.5 font-body text-sm font-medium text-ink transition-colors hover:bg-terracotta hover:text-sand"
            >
              Take it from the top
            </a>
            <a
              href="#towns"
              className="font-body text-sm font-medium text-sand/85 underline decoration-sand/30 underline-offset-4 transition-colors hover:text-sand hover:decoration-sand"
            >
              Wander the towns again
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
