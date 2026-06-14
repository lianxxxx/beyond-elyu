// Marquee word-strip — straight from the inspo's "✦ EVER ✦ GREEN ✦ NATURE ✦"
// band, retuned to La Union: the things the province is actually known for,
// scrolling on a soft sage tint. Pure CSS; the track holds the list twice so
// the loop is seamless.

const WORDS = [
  "Surf",
  "Inabel looms",
  "Basi wine",
  "Waterfalls",
  "Heritage towns",
  "Pilgrim trails",
  "Grape rows",
  "Sunset coast",
];

function Run() {
  return (
    <>
      {WORDS.map((word) => (
        <span key={word} className="flex items-center gap-[clamp(1.5rem,4vw,3.5rem)]">
          <span className="font-display text-[clamp(1.25rem,1rem+1.6vw,2rem)] font-medium tracking-tight text-ink">
            {word}
          </span>
          <span aria-hidden className="text-sea/70" style={{ fontSize: "0.7em" }}>
            ✦
          </span>
        </span>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <section
      aria-label="What La Union is known for"
      className="overflow-hidden border-y border-ink/8 bg-sea-mist/35 py-[clamp(0.9rem,1.6vw,1.4rem)]"
    >
      <div className="marquee-track flex w-max items-center gap-[clamp(1.5rem,4vw,3.5rem)] pl-[clamp(1.5rem,4vw,3.5rem)]">
        <Run />
        <Run />
      </div>
    </section>
  );
}
