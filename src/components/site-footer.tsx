// Footer — beyond-elyu, the sign-off.
// Closes the page deep on ink: a brand statement, a small wander-back nav, a
// quiet meta line, and one oversize "La Union" wordmark spanning the foot.

import { FiArrowUpRight, FiArrowUp } from "react-icons/fi";

const LINKS = [
  { label: "The map", href: "#map" },
  { label: "Along the shore", href: "#coast" },
  { label: "Town by town", href: "#towns" },
  { label: "Look closer", href: "#plan" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink px-gutter pb-[clamp(1.5rem,3vw,2.5rem)] pt-[clamp(4rem,2rem+6vw,7rem)] text-sand">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-12">
          {/* Brand statement */}
          <div className="md:col-span-7">
            <p className="max-w-[18ch] font-display text-3xl font-semibold leading-[1.05] tracking-tight text-sand sm:text-4xl">
              La Union is not overrated.{" "}
              <span className="text-sand/45">Look closer.</span>
            </p>
            <p className="mt-5 max-w-[46ch] font-body text-sm leading-relaxed text-sand/55">
              A small love letter to the coast everyone thinks they have already
              seen. One city, nineteen towns, and the long way round.
            </p>
          </div>

          {/* Wander-back navigation */}
          <nav className="md:col-span-5 md:justify-self-end">
            <p className="font-body text-eyebrow font-medium uppercase tracking-[0.2em] text-sand/40">
              Wander back
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-display text-xl font-medium tracking-tight text-sand/80 transition-colors hover:text-sand"
                  >
                    {link.label}
                    <FiArrowUpRight
                      aria-hidden
                      className="size-4 text-sand/35 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sand"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Meta line */}
        <div className="mt-16 flex flex-col gap-3 border-t border-sand/12 pt-6 font-body text-xs text-sand/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Made along the El Niño coast, 2026. A passion project, not a brochure.</p>
          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 text-sand/55 transition-colors hover:text-sand"
          >
            Back to top
            <FiArrowUp
              aria-hidden
              className="size-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      {/* The sign-off — an oversize wordmark of the place itself, spanning the
         foot of the page. Clipped a touch at the baseline so it reads as a
         grand closing line, not a heading. */}
      <p
        aria-hidden
        className="mt-[clamp(2.5rem,6vw,5rem)] mb-[-0.08em] select-none whitespace-nowrap text-center font-display text-[clamp(3.25rem,20.5vw,19rem)] font-semibold leading-[0.78] tracking-[-0.035em] text-sand/15"
      >
        La&nbsp;Union
      </p>
    </footer>
  );
}
