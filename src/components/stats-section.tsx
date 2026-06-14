// By the numbers — beyond-elyu, a new section in the Binar idiom.
// The inspo leans on big confident figures ("120k members"); ours make the
// page's argument numerically — one province is a lot more than one beach.
// Honest counts only: the figures come straight from the town data.

import { Reveal } from "@/components/reveal";
import { SectionHeader, Accent } from "@/components/section-header";
import { Meta } from "@/components/chrome";

const STATS = [
  { value: "1", label: "Capital city", note: "San Fernando" },
  { value: "19", label: "Towns", note: "coast to foothills" },
  { value: "~50km", label: "Of open coast", note: "north to south" },
  { value: "1850", label: "Made one province", note: "stitched together" },
];

export function StatsSection() {
  return (
    <section id="numbers" className="px-gutter py-bay">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="By the numbers"
          title={
            <>
              The math doesn&apos;t fit one <Accent>beach</Accent>.
            </>
          }
          lede="Add it up and the weekend version starts to look small. One coastline runs the whole length of the province, and the surf town is a single stop on it."
          ledeClassName="max-w-[48ch]"
        />

        <Reveal delay={160}>
          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 md:mt-16 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-t border-ink/12 pt-5">
                <dd className="font-display text-[clamp(2.75rem,1.8rem+3vw,4.25rem)] font-semibold leading-none tracking-tight text-ink">
                  {stat.value}
                </dd>
                <dt className="mt-3">
                  <Meta className="block">{stat.label}</Meta>
                  <span className="mt-1 block font-body text-sm text-ink-soft">
                    {stat.note}
                  </span>
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
