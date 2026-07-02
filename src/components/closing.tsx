// Closing — beyond-elyu, recomposed as the inspo's CTA band: the big marker
// headline on the left, a newsletter sign-up and quick links on the right.
// Sits on the white ground (no card box) the way the shot's closing does.

import { FiArrowUp, FiArrowRight } from "react-icons/fi";
import { Reveal } from "@/components/reveal";
import { Accent } from "@/components/section-header";

const LINKS = [
  { label: "Getting there", href: "#getting-there" },
  { label: "Top spots", href: "#coast" },
  { label: "Town by town", href: "#towns" },
];

export function Closing() {
  return (
    <section id="plan" className="px-gutter py-bay">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-x-12 gap-y-14 md:grid-cols-12">
        {/* Left: the turn */}
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-body text-eyebrow font-medium uppercase text-ink-soft">
              Look closer
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 max-w-[15ch] font-display text-display font-semibold leading-[0.95] tracking-tight text-ink">
              Overrated is just <Accent>under-looked</Accent>.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-[52ch] font-body text-lede text-ink-soft">
              You came for a weekend and left with a verdict. The province is
              still here, one city and nineteen towns deep, in no hurry to prove
              anything. Come back when you can stay longer than the swell.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#top"
                className="inline-flex items-center gap-1.5 rounded-full border border-black bg-black px-5 py-2 font-body text-sm font-medium text-cream transition-colors hover:bg-ink"
              >
                <FiArrowUp aria-hidden className="size-4" />
                Take it from the top
              </a>
              <a
                href="#towns"
                className="group inline-flex items-center gap-1.5 font-body text-sm font-medium text-sea underline decoration-sea/30 underline-offset-4 transition-colors hover:decoration-sea"
              >
                Wander the towns again
                <FiArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: newsletter + quick links */}
        <Reveal delay={200} className="md:col-span-5 md:justify-self-end">
          <div className="w-full max-w-sm">
            <p className="font-body text-eyebrow font-medium uppercase tracking-[0.18em] text-ink-soft">
              A letter from the coast
            </p>
            <p className="mt-3 max-w-[34ch] font-body text-sm leading-relaxed text-ink-soft">
              A note when we wander somewhere new along the shore. No schedule,
              no brochure.
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-full border border-ink/15 bg-card p-1.5 pl-5 shadow-card focus-within:border-ink/35">
              <input
                type="email"
                placeholder="you@somewhere.ph"
                aria-label="Your email"
                className="min-w-0 flex-1 bg-transparent font-body text-sm text-ink outline-none placeholder:text-ink-soft/70"
              />
              <button
                type="button"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 font-body text-sm font-medium text-cream transition-colors hover:bg-sea"
              >
                Send
                <FiArrowRight aria-hidden className="size-4" />
              </button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
