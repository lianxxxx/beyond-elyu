// Marquee landmark-strip — the inspo's "✦ EVER ✦ GREEN ✦ NATURE ✦" band,
// retuned to La Union as a roll-call of the province: one signature landmark for
// every municipality and the city, scrolling on a soft sage tint. Each item
// carries its town so the whole province is named as it passes. Pure CSS; the
// track holds the list twice so the loop is seamless.

type Landmark = { place: string; town: string };

// All 20 LGUs (city + 19 towns), coast north→south then the foothills.
const LANDMARKS: Landmark[] = [
  { place: "Inabel looms", town: "Bangar" },
  { place: "Pebble Beach", town: "Luna" },
  { place: "Baluarte watchtowers", town: "Luna" },
  { place: "Namacpacan Church", town: "Luna" },
  { place: "Riverside quiet", town: "Balaoan" },
  { place: "The bee farm", town: "Bacnotan" },
  { place: "Urbiztondo surf", town: "San Juan" },
  { place: "Ma-Cho Temple", town: "San Fernando" },
  { place: "Pindangan Ruins", town: "San Fernando" },
  { place: "Grape farms", town: "Bauang" },
  { place: "Windswept points", town: "Caba" },
  { place: "River meets sea", town: "Aringay" },
  { place: "Agoo Basilica", town: "Agoo" },
  { place: "Southern shore", town: "Santo Tomas" },
  { place: "Southern gateway", town: "Rosario" },
  { place: "Amburayan river", town: "Sudipen" },
  { place: "Cold river pools", town: "Santol" },
  { place: "Tangadan Falls", town: "San Gabriel" },
  { place: "Dupagan Falls", town: "San Gabriel" },
  { place: "Naguilian basi", town: "Naguilian" },
  { place: "Highland trails", town: "Bagulin" },
  { place: "Cool uplands", town: "Burgos" },
  { place: "Inland farms", town: "Tubao" },
  { place: "Pugo zip lines", town: "Pugo" },
];

function Run({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex items-center gap-[clamp(1.5rem,4vw,3.5rem)]"
    >
      {LANDMARKS.map((item, i) => (
        <span
          key={`${item.town}-${item.place}-${i}`}
          className="flex items-center gap-[clamp(1.5rem,4vw,3.5rem)]"
        >
          <span className="flex items-baseline gap-2.5 whitespace-nowrap">
            <span className="font-display text-[clamp(1.25rem,1rem+1.6vw,2rem)] font-medium tracking-tight text-ink">
              {item.place}
            </span>
            <span className="font-body text-[0.62em] font-medium uppercase tracking-[0.18em] text-ink-soft">
              {item.town}
            </span>
          </span>
          <span aria-hidden className="text-sea/70" style={{ fontSize: "0.7em" }}>
            ✦
          </span>
        </span>
      ))}
    </div>
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
        <Run ariaHidden />
      </div>
    </section>
  );
}
