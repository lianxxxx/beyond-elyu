// SectionHeader — the one hierarchy rule every light section follows.
//
// The rhythm, identical across sections, so the page reads as one system:
//   eyebrow            sea, uppercase, text-eyebrow
//   ↓ mt-5
//   title              Clash display headline, ink, with ONE word in terracotta
//   ↓ mt-6
//   lede               Geist, ink-soft (the muted "description" tone)
//
// Pieces reveal in the signature stagger (0 / 80 / 160ms). Wrap the accent
// word in <Accent>; pass a maxWidth on the lede only when a section needs it.
// Section spacing lives in the section itself: `px-gutter py-bay`, a
// `max-w-6xl` container, and `mt-12 md:mt-16` before the section's content.

import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

// The Binar "marker" move: a soft swipe of color behind one key word, ink text
// riding on top. Ours is terracotta — the single accent we kept. box-decoration
// keeps the wash intact if the word wraps. Use on exactly one word per heading.
export function Accent({ children }: { children: ReactNode }) {
  return (
    <span className="box-decoration-clone rounded-[0.18em] bg-sea-mist/70 px-[0.16em] py-[0.02em] text-ink">
      {children}
    </span>
  );
}

// The inspo's literal highlighter — a sage swipe in our brand green, ink text on
// top. Use for quieter emphasis in ledes/body, where terracotta would be too loud.
export function Mark({ children }: { children: ReactNode }) {
  return (
    <span className="box-decoration-clone rounded-[0.18em] bg-sea-mist/60 px-[0.16em] py-[0.02em] text-ink">
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  ledeClassName = "max-w-[50ch]",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  ledeClassName?: string;
}) {
  return (
    <header className="max-w-3xl">
      <Reveal>
        <p className="font-body text-eyebrow font-medium uppercase text-ink-soft">
          {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-5 font-display text-headline font-semibold tracking-tight text-ink">
          {title}
        </h2>
      </Reveal>

      {lede ? (
        <Reveal delay={160}>
          <p className={`mt-6 font-body text-lede text-ink-soft ${ledeClassName}`}>
            {lede}
          </p>
        </Reveal>
      ) : null}
    </header>
  );
}
