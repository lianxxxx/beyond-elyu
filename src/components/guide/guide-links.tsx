// Links into the topic guides, as plain crawlable anchors. GuideList is the
// card grid shared by /guides and the home page's "Plan your trip" row.

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { GUIDES } from "@/lib/guides";

export function GuideList() {
  return (
    <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      {GUIDES.map((guide) => (
        <li key={guide.href}>
          <Link
            href={guide.href}
            className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-ink/8 bg-card p-5 transition-colors hover:border-ink"
          >
            <span>
              <span className="block font-display text-base font-semibold tracking-tight text-ink">
                {guide.label}
              </span>
              <span className="mt-1 block font-body text-sm leading-relaxed text-ink-soft">
                {guide.summary}
              </span>
            </span>
            <FiArrowUpRight
              aria-hidden
              className="size-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function GuideLinks() {
  return (
    <section aria-labelledby="guides-heading" className="px-gutter pb-bay">
      <div className="mx-auto max-w-6xl">
        <h2
          id="guides-heading"
          className="font-display text-headline font-semibold tracking-tight text-ink"
        >
          Plan your trip
        </h2>
        <GuideList />
      </div>
    </section>
  );
}
