// Closing — beyond-elyu, the turn.
// Rests the case on a calm sand card (same surface as the town-by-town detail
// card), on the white page rather than a drenched sea panel. Now that it sits
// on light, it follows the section rule: sea eyebrow, one terracotta accent,
// muted ink-soft lede.

import { FiArrowUp, FiArrowRight } from "react-icons/fi";
import { Reveal } from "@/components/reveal";
import { Accent } from "@/components/section-header";

export function Closing() {
  return (
    <section id="plan" className="px-gutter py-bay">
      <div className="mx-auto max-w-6xl rounded-3xl border border-ink/8 bg-card p-8 shadow-card sm:p-12 lg:p-16">
        <Reveal>
          <p className="flex items-center gap-2.5 font-body text-eyebrow font-medium uppercase text-ink-soft">
            <span aria-hidden className="inline-block size-1.5 rounded-full bg-sea" />
            Look closer
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-5 max-w-[16ch] font-display text-display font-semibold tracking-tight text-ink">
            Overrated is just <Accent>under-looked</Accent>.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-[54ch] font-body text-lede text-ink-soft">
            You came for a weekend and left with a verdict. The province is
            still here, one city and nineteen towns deep, in no hurry to prove
            anything. Come back when you can stay longer than the swell.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full bg-sea px-6 py-2.5 font-body text-sm font-medium text-sand transition-colors hover:bg-sea-deep"
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
    </section>
  );
}
