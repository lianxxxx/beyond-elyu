// /guides: the hub for every topic guide, linked from the navbar and footer.
// Add new guides in src/lib/guides.ts and they appear here automatically.

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { GuideList } from "@/components/guide/guide-links";
import { Accent } from "@/components/shared/section-header";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/guides",
  title: "La Union Travel Guides",
  description:
    "Every La Union guide in one place: tourist spots, beaches, Tangadan Falls, grape farms, and how to get there from Manila.",
});

export default function GuidesPage() {
  return (
    <main className="px-gutter py-bay">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 font-body text-sm font-medium text-ink-soft transition-colors hover:text-ink"
        >
          <FiArrowLeft
            aria-hidden
            className="size-4 transition-transform group-hover:-translate-x-0.5"
          />
          Back home
        </Link>

        <p className="mt-14 font-body text-eyebrow font-medium uppercase tracking-[0.18em] text-ink-soft">
          Guides
        </p>
        <h1 className="mt-5 font-display text-display font-semibold leading-[0.95] tracking-tight text-ink">
          La Union travel <Accent>guides</Accent>.
        </h1>
        <p className="mt-8 max-w-[60ch] font-body text-lg leading-relaxed text-ink">
          Everything you need to plan a trip to La Union, from where to go to
          how to get there.
        </p>

        <GuideList />
      </div>
    </main>
  );
}
