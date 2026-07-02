// /note — a small "behind the project" page. beyond elyu is a frontend
// practice / side project, not a commercial travel brand; this page says so
// plainly and offers a takedown path for any credited photo.

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Accent } from "@/components/section-header";
import { ReachOut } from "@/components/reach-out";

export const metadata = {
  title: "A note — beyond elyu",
  description:
    "The developer behind beyond elyu — a frontend practice and side project.",
};

export default function AboutPage() {
  return (
    <main className="px-gutter py-bay">
      <div className="mx-auto max-w-3xl">
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
          A quick note
        </p>
        <h1 className="mt-5 font-display text-display font-semibold leading-[0.95] tracking-tight text-ink">
          Just <Accent>practicing</Accent>.
        </h1>

        <div className="mt-8 max-w-[60ch] space-y-5 font-body text-base leading-relaxed text-ink-soft">
          <p>
            Hi, I&apos;m the developer behind this site. This isn&apos;t a real
            travel brand or a commercial product. It&apos;s a personal,
            learning-based project. I&apos;m currently learning UI/UX, SEO, and
            parallel agentic coding, so this is where I practice frontend design
            and development, and apply what I learn into something real.
          </p>
          <p>
            Honestly, I built this purely as practice. Every photo here belongs
            to its respective owner and is credited to its source throughout.
            Nothing on this site is claimed as my own. I have zero intention of
            claiming anything as mine, so please, no copyright issues here.
          </p>
        </div>

        <ReachOut />

        <figure className="mt-12">
          <figcaption className="mb-2 font-body text-xs text-ink-soft">
            in my defense,
          </figcaption>
          <img
            src="/img/note-just-a-girl.jpg"
            alt="The 'im just a girl' sad hamster meme"
            className="w-36 rounded-2xl"
          />
        </figure>
      </div>
    </main>
  );
}
