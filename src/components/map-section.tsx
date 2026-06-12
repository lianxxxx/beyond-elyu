"use client";

// The Map — beyond-elyu, section 3. The territory.
// "The Second Look" made into interaction: San Juan is one dot among twenty,
// and you have to look closer (hover / tap) to learn what each town holds.
// On scroll-in, the coastline draws itself, then the towns stagger up.
//
// The map is stylized, not survey-grade: sea to the west (left), foothills to
// the east (right), towns in their real north-to-south order. Coordinates are
// hand-placed for legibility, not GPS.

import { useEffect, useRef, useState } from "react";

type Town = {
  name: string;
  x: number;
  y: number;
  kind: "coast" | "inland";
  blurb: string;
  anchor?: boolean;
};

const TOWNS: Town[] = [
  // Coast, north → south
  { name: "Bangar", x: 250, y: 90, kind: "coast", blurb: "Inabel cloth, woven on wooden looms" },
  { name: "Luna", x: 222, y: 150, kind: "coast", blurb: "Pebble beach and the old Baluarte watchtower" },
  { name: "Balaoan", x: 240, y: 205, kind: "coast", blurb: "Quiet river town opening to the sea" },
  { name: "Bacnotan", x: 232, y: 262, kind: "coast", blurb: "Sea urchin season and the state university" },
  { name: "San Juan", x: 248, y: 322, kind: "coast", anchor: true, blurb: "The surf town everyone mistakes for the whole" },
  { name: "City of San Fernando", x: 242, y: 388, kind: "coast", anchor: true, blurb: "The capital: Ma-Cho Temple, Pindangan ruins" },
  { name: "Bauang", x: 256, y: 448, kind: "coast", blurb: "Grape rows and a long shore of resorts" },
  { name: "Caba", x: 272, y: 505, kind: "coast", blurb: "Windswept points and small fishing barangays" },
  { name: "Aringay", x: 280, y: 555, kind: "coast", blurb: "Where the river finally meets the sea" },
  { name: "Agoo", x: 290, y: 612, kind: "coast", anchor: true, blurb: "The Basilica of Our Lady of Charity" },
  { name: "Santo Tomas", x: 305, y: 665, kind: "coast", blurb: "The southern shoreline, near Pangasinan" },
  { name: "Rosario", x: 330, y: 715, kind: "coast", blurb: "The gateway in from the south" },
  // Foothills, north → south
  { name: "Sudipen", x: 420, y: 95, kind: "inland", blurb: "Foothills along the Amburayan river" },
  { name: "Santol", x: 462, y: 172, kind: "inland", blurb: "A mountain town of cold river pools" },
  { name: "San Gabriel", x: 410, y: 268, kind: "inland", blurb: "The trail to Tangadan Falls" },
  { name: "Naguilian", x: 400, y: 358, kind: "inland", blurb: "The basi capital: sugarcane wine in clay" },
  { name: "Bagulin", x: 492, y: 420, kind: "inland", blurb: "Highland trails above the valley" },
  { name: "Burgos", x: 458, y: 498, kind: "inland", blurb: "Cool uplands, far from the surf" },
  { name: "Tubao", x: 425, y: 602, kind: "inland", blurb: "Inland farms and slow afternoons" },
  { name: "Pugo", x: 475, y: 658, kind: "inland", blurb: "Eco-adventure parks in the hills" },
];

const COASTLINE =
  "M 205 55 C 175 150, 225 215, 200 300 C 178 380, 235 450, 232 520 C 230 590, 285 650, 300 720 L 312 770";
const SEA = `${COASTLINE} L 0 770 L 0 55 Z`;
const FOOTHILLS =
  "M 520 60 C 545 180, 515 300, 535 420 C 550 540, 520 660, 540 760";

const EASE_EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";
const EASE_QUINT = "cubic-bezier(0.22, 1, 0.36, 1)";

export function MapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimate(false);
      setEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setEntered(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeTown = TOWNS.find((t) => t.name === active) ?? null;
  const clear = (name: string) =>
    setActive((cur) => (cur === name ? null : cur));

  return (
    <section
      ref={sectionRef}
      id="map"
      className="border-t border-ink/10 bg-sand-deep/30 px-gutter py-bay"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-x-12 gap-y-12 md:grid-cols-2">
        {/* ── Left: the framing + a live readout that the map drives ── */}
        <div>
          <p className="font-body text-eyebrow font-medium uppercase text-sea">
            The map
          </p>
          <h2 className="mt-5 max-w-[14ch] font-display text-headline font-semibold tracking-tight text-ink">
            Twenty towns, one coast.
          </h2>
          <p className="mt-6 max-w-[46ch] font-body text-lede text-ink">
            From the weaving towns in the north to the basilica in the south, La
            Union runs the whole length of the shore and climbs into the
            foothills. San Juan is a single dot on it.
          </p>

          <div
            aria-live="polite"
            className="mt-10 min-h-[5.5rem] border-t border-ink/12 pt-6"
          >
            {activeTown ? (
              <>
                <p className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {activeTown.name}
                </p>
                <p className="mt-1.5 font-body text-base text-ink-soft">
                  {activeTown.blurb}
                </p>
              </>
            ) : (
              <p className="max-w-[36ch] font-body text-base text-ink-soft">
                Trace the coast. Hover or tap a town to see what it is known
                for.
              </p>
            )}
          </div>

          <div className="mt-6 flex items-center gap-6 font-body text-sm text-ink-soft">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block size-2.5 rounded-full bg-sea" />
              Coast
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-block size-2.5 rounded-full border border-sea bg-sand" />
              Foothills
            </span>
          </div>
        </div>

        {/* ── Right: the stylized map ── */}
        <div className="relative">
          <svg
            viewBox="0 0 560 800"
            role="img"
            aria-label="A stylized map of La Union: the sea to the west, foothills to the east, and its city and nineteen towns in north-to-south order."
            className="h-auto w-full"
          >
            {/* Sea */}
            <path d={SEA} fill="var(--color-sea)" opacity={0.07} />
            {/* Coastline (draws in) */}
            <path
              d={COASTLINE}
              fill="none"
              stroke="var(--color-sea)"
              strokeWidth={2}
              strokeLinecap="round"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: entered ? 0 : 1,
                transition: animate
                  ? `stroke-dashoffset 1500ms ${EASE_EXPO}`
                  : "none",
              }}
            />
            {/* Foothills boundary (dotted, fades in behind the coast) */}
            <path
              d={FOOTHILLS}
              fill="none"
              stroke="var(--color-ink)"
              strokeWidth={1}
              strokeDasharray="2 7"
              strokeLinecap="round"
              style={{
                opacity: entered ? 0.25 : 0,
                transition: animate
                  ? `opacity 900ms ${EASE_QUINT} 400ms`
                  : "none",
              }}
            />

            {/* Compass */}
            <g
              opacity={0.4}
              style={{
                opacity: entered ? 0.4 : 0,
                transition: animate ? `opacity 600ms ${EASE_QUINT}` : "none",
              }}
            >
              <line x1={70} y1={70} x2={70} y2={44} stroke="var(--color-ink)" strokeWidth={1} />
              <path d="M 70 40 l 4 9 l -4 -3 l -4 3 Z" fill="var(--color-ink)" />
              <text x={70} y={88} textAnchor="middle" fontSize={11} fill="var(--color-ink)" className="font-body">
                N
              </text>
            </g>

            {/* Faint place labels for the waters and hills */}
            <text
              x={62}
              y={430}
              fontSize={12}
              letterSpacing={3}
              fill="var(--color-sea)"
              opacity={0.45}
              transform="rotate(-90 62 430)"
              className="font-body uppercase"
            >
              West Philippine Sea
            </text>
            <text
              x={548}
              y={300}
              fontSize={11}
              letterSpacing={2}
              fill="var(--color-ink)"
              opacity={0.3}
              transform="rotate(90 548 300)"
              className="font-body uppercase"
            >
              The foothills
            </text>

            {/* Towns */}
            {TOWNS.map((t, i) => {
              const isActive = active === t.name;
              const showLabel = t.anchor || isActive;
              const r = t.anchor ? 6 : isActive ? 6 : 4;
              const labelAnchor = t.kind === "coast" ? "end" : "start";
              const labelX = t.kind === "coast" ? t.x - 12 : t.x + 12;
              const fill = t.anchor
                ? "var(--color-terracotta)"
                : t.kind === "coast"
                  ? "var(--color-sea)"
                  : "var(--color-sand)";
              return (
                <g
                  key={t.name}
                  role="button"
                  tabIndex={0}
                  aria-label={`${t.name}: ${t.blurb}`}
                  onMouseEnter={() => setActive(t.name)}
                  onMouseLeave={() => clear(t.name)}
                  onFocus={() => setActive(t.name)}
                  onBlur={() => clear(t.name)}
                  className="cursor-pointer [outline:none]"
                  style={{
                    opacity: entered ? 1 : 0,
                    transition: animate
                      ? `opacity 500ms ${EASE_QUINT} ${300 + i * 55}ms`
                      : "none",
                  }}
                >
                  {/* halo on active */}
                  <circle
                    cx={t.x}
                    cy={t.y}
                    r={isActive ? 13 : 0}
                    fill="var(--color-sea)"
                    opacity={isActive ? 0.14 : 0}
                    style={{ transition: `r 220ms ${EASE_QUINT}, opacity 220ms ${EASE_QUINT}` }}
                  />
                  <circle
                    cx={t.x}
                    cy={t.y}
                    r={r}
                    fill={fill}
                    stroke="var(--color-sea)"
                    strokeWidth={t.kind === "inland" && !t.anchor ? 1.5 : 0}
                    style={{ transition: `r 220ms ${EASE_QUINT}` }}
                  />
                  {showLabel && (
                    <text
                      x={labelX}
                      y={t.y + 4}
                      textAnchor={labelAnchor}
                      fontSize={t.anchor ? 13 : 12.5}
                      fontWeight={t.anchor ? 600 : 500}
                      fill="var(--color-ink)"
                      className="font-body"
                    >
                      {t.name}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
