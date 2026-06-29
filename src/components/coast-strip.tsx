// The coast, in passing — recomposed as the inspo's "Explore our content" row:
// a split header (heading ← → muted note) over a clean four-card line. Each card
// is a rounded photo with a corner ↗ and an overlaid place + note.

import { Reveal } from "@/components/reveal";
import { SectionHeader, Accent } from "@/components/section-header";
import { IconButton } from "@/components/chrome";

type Frame = {
  src: string;
  alt: string;
  place: string;
  note: string;
};

const FRAMES: Frame[] = [
  {
    src: "/img/surfer.jpg",
    alt: "A lone surfer reading a gray-blue swell off the La Union coast at first light.",
    place: "Urbiztondo",
    note: "the break everyone knows",
  },
  {
    src: "/img/surf-shack.jpg",
    alt: "Longboards lined against a thatched surf shack under coconut palms on the sand.",
    place: "San Juan",
    note: "board sheds in the palms",
  },
  {
    src: "/img/cove.jpg",
    alt: "Clear turquoise water meeting a pebbled shore further up the coast.",
    place: "Up the coast",
    note: "where the crowds thin out",
  },
  {
    src: "/img/coast-dusk.jpg",
    alt: "Spent waves drawing back over black volcanic rock at dusk.",
    place: "Luna",
    note: "a shore of grey stones",
  },
];

function Card({ frame }: { frame: Frame }) {
  return (
    <figure className="group relative overflow-hidden rounded-3xl shadow-card">
      <img
        src={frame.src}
        alt={frame.alt}
        loading="lazy"
        className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
      />
      <IconButton
        href="#towns"
        label={`See ${frame.place} in the town index`}
        tone="cream"
        className="absolute right-3 top-3"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-4 text-cream">
        <span className="block font-display text-lg font-semibold tracking-tight">
          {frame.place}
        </span>
        <span className="font-body text-sm text-cream/80">{frame.note}</span>
      </figcaption>
    </figure>
  );
}

export function CoastStrip() {
  return (
    <section id="coast" className="px-gutter py-bay">
      <div className="mx-auto max-w-6xl">
        {/* split header: heading left, muted note right */}
        <div className="grid items-end gap-x-12 gap-y-6 md:grid-cols-12">
          <div className="md:col-span-12">
            <SectionHeader
              eyebrow="Top spots in La Union"
              title={
                <span className="whitespace-nowrap text-[clamp(2rem,7vw,4.75rem)]">
                  Find your <Accent>favorite</Accent>.
                </span>
              }
            />
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4">
            {FRAMES.map((frame) => (
              <Card key={frame.src} frame={frame} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
