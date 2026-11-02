// Shared layout for topic guides (/what-is-elyu, /manila-to-la-union, ...).
// Same frame as /note, plus a credited photo, a prose body, and a visible FAQ.
// The FAQ is passed in so the page and its JSON-LD read from the same data.

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { FaqList } from "@/components/guide/faq-list";

export function GuidePage({
  eyebrow,
  title,
  lede,
  photo,
  faq,
  next,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  photo: { src: string; alt: string; credit: string; creditHref: string };
  faq: readonly { q: string; a: string }[];
  next: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <main className="px-gutter py-bay">
      <article className="mx-auto max-w-3xl">
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
          {eyebrow}
        </p>
        <h1 className="mt-5 font-display text-display font-semibold leading-[0.95] tracking-tight text-ink">
          {title}
        </h1>
        <p className="mt-8 max-w-[60ch] font-body text-lg leading-relaxed text-ink">
          {lede}
        </p>

        <figure className="mt-10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 font-body text-xs text-ink-soft">
            Photo:{" "}
            <a
              href={photo.creditHref}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-ink/20 underline-offset-2 hover:text-ink"
            >
              {photo.credit}
            </a>
          </figcaption>
        </figure>

        <div className="mt-12 max-w-[60ch] space-y-5 font-body text-base leading-relaxed text-ink-soft [&_a]:font-medium [&_a]:text-sea [&_a]:underline [&_a]:decoration-sea/30 [&_a]:underline-offset-2 hover:[&_a]:text-ink [&_h2]:pt-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>

        <section className="mt-16 max-w-[60ch]">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Quick answers
          </h2>
          <FaqList faq={faq} className="mt-6 space-y-6" />
        </section>

        <Link
          href={next.href}
          className="mt-14 inline-block font-body text-sm font-medium text-sea underline decoration-sea/30 underline-offset-4 transition-colors hover:text-ink"
        >
          {next.label}
        </Link>
        <Link
          href="/guides"
          className="mt-3 block font-body text-sm font-medium text-ink-soft underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink"
        >
          See all guides
        </Link>
      </article>
    </main>
  );
}
