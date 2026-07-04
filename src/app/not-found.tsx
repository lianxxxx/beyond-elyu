import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Accent } from "@/components/shared/section-header";

export const metadata = {
  title: "Off the map",
  description: "The page you're looking for isn't on this coast.",
};

// Custom 404 — no loud "404" slab, left-aligned, just the site's editorial
// voice with a wink at its own "look closer" thesis (nothing to *see* here).
export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] items-center px-gutter">
      <div className="mx-auto w-full max-w-6xl py-24">
        <div className="max-w-2xl">
        <p className="font-body text-eyebrow font-medium uppercase tracking-[0.18em] text-ink-soft">
          Off the map
        </p>

        <h1 className="mt-6 font-display text-[clamp(2.5rem,1rem+6vw,4.5rem)] font-semibold leading-[0.98] tracking-tight text-ink">
          There&rsquo;s nothing to <Accent>see</Accent> here.
        </h1>

        <p className="mt-6 max-w-[46ch] font-body text-base leading-relaxed text-ink-soft">
          Whatever you&rsquo;re looking for isn&rsquo;t here. It might be out
          catching waves, hiding in the falls, or it never existed at all. Or,
          let&rsquo;s be honest, you probably typed something wrong.
        </p>

        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-2.5 font-body text-sm font-medium text-ink transition-colors hover:border-black hover:bg-black hover:text-cream"
        >
          <FiArrowLeft
            aria-hidden
            className="size-4 transition-transform group-hover:-translate-x-0.5"
          />
          Back to La Union
        </Link>
        </div>
      </div>
    </main>
  );
}
