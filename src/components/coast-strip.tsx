// The coast, in passing — beyond-elyu, a photographic interlude.
// Between the map and the town roll-call: three frames of the shore so the
// argument is carried by the place itself, not only by type. An asymmetric
// collage (deliberately not an even grid) with quiet, overlaid locations.

import { Reveal } from "@/components/reveal";
import { SectionHeader, Accent } from "@/components/section-header";

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
];

function Frame({ frame, className = "" }: { frame: Frame; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden rounded-3xl shadow-card ${className}`}>
      <img
        src={frame.src}
        alt={frame.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sand">
        <span className="block font-display text-lg font-semibold tracking-tight">
          {frame.place}
        </span>
        <span className="font-body text-sm text-sand/80">{frame.note}</span>
      </figcaption>
    </figure>
  );
}

export function CoastStrip() {
  return (
    <section id="coast" className="px-gutter py-bay">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Along the shore"
          title={
            <>
              The <Accent>long way</Accent> round.
            </>
          }
          lede="Past the famous beach, the shore keeps going: rock pools and board sheds, water that turns from gray swell to glass the further north you walk."
          ledeClassName="max-w-[52ch]"
        />

        <Reveal delay={200}>
          <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-12 md:[grid-template-rows:1fr_1fr]">
            <Frame
              frame={FRAMES[0]}
              className="aspect-[4/5] md:col-span-5 md:row-span-2 md:aspect-auto"
            />
            <Frame frame={FRAMES[1]} className="aspect-[16/10] md:col-span-7" />
            <Frame frame={FRAMES[2]} className="aspect-[16/10] md:col-span-7" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
