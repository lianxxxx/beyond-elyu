// Footer — beyond-elyu, section 6. The sign-off.
// Closes the page deep, on ink, after the sea panel. Quiet, editorial, warm.

const LINKS = [
  { label: "The map", href: "#map" },
  { label: "Town by town", href: "#towns" },
  { label: "From the top", href: "#top" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink px-gutter pb-12 pt-[clamp(4rem,2rem+6vw,7rem)] text-sand">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <a
              href="#top"
              className="font-display text-3xl font-medium lowercase tracking-tight text-sand"
            >
              elyu
            </a>
            <p className="mt-4 font-display text-xl font-medium tracking-tight text-sand">
              La Union is not overrated. Look closer.
            </p>
            <p className="mt-3 max-w-[44ch] font-body text-sm leading-relaxed text-sand/60">
              A small love letter to the coast everyone thinks they have already
              seen. One city, nineteen towns, and the long way round.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-sand/75 transition-colors hover:text-sand"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-sand/15 pt-6 font-body text-xs text-sand/50 sm:flex-row sm:items-center sm:justify-between">
          <p>beyond elyu, 2026. A passion project, not a brochure.</p>
          <p>Made with warm light and too much coffee, along the El Niño coast.</p>
        </div>
      </div>
    </footer>
  );
}
