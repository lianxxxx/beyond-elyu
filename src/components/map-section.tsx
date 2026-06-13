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
import { TOWNS, COASTLINE, SEA, FOOTHILLS } from "@/lib/la-union";
import { SectionHeader, Accent } from "@/components/section-header";

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
    <section ref={sectionRef} id="map" className="px-gutter py-bay">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-sand p-7 shadow-soft sm:p-12 md:p-16">
        <div className="grid items-center gap-x-12 gap-y-12 md:grid-cols-2">
        {/* ── Left: the framing + a live readout that the map drives ── */}
        <div>
          <SectionHeader
            eyebrow="The map"
            title={
              <>
                Twenty towns, one <Accent>coast</Accent>.
              </>
            }
            lede="From the weaving towns in the north to the basilica in the south, La Union runs the whole length of the shore and climbs into the foothills. San Juan is a single dot on it."
            ledeClassName="max-w-[46ch]"
          />

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
      </div>
    </section>
  );
}
