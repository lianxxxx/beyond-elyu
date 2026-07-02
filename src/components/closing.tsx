// Closing — beyond-elyu, the final persuade: a single left-aligned CTA block
// on the white ground (no card box), pushing the reader to come back.

import { FiArrowUpRight } from "react-icons/fi";
import { Reveal } from "@/components/reveal";
import { Accent } from "@/components/section-header";

export function Closing() {
  return (
    <section id="plan" className="px-gutter py-bay">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-body text-eyebrow font-medium uppercase text-ink-soft">
            What are you waiting for
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-5 max-w-[15ch] font-display text-display font-semibold leading-[0.95] tracking-tight text-ink">
            La Union is <Accent>calling</Accent> you.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-[52ch] font-body text-base text-ink-soft">
            Stop waiting for the perfect time. The emails can wait; the sunsets
            won't. File that vacation leave, pack light, and point yourself
            north. You deserve rest. You deserve La Union.
          </p>
        </Reveal>

        <Reveal delay={210}>
          <p className="mt-5 font-body text-base font-semibold italic text-ink">
            This is your sign. Book the trip and thank yourself later.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <a
            href="#getting-there"
            className="mt-10 inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 py-2 font-body text-sm font-medium text-ink transition-colors hover:border-black hover:bg-black hover:text-cream"
          >
            Answer the call
            <FiArrowUpRight aria-hidden className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
