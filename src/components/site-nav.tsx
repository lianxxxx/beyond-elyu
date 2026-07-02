"use client";

// Scroll-reveal sticky nav. The hero has its own header at the very top; this
// bar stays hidden there and only appears once you've scrolled down and then
// start scrolling back up — the standard "hide on scroll down, show on scroll
// up" pattern. Two deliberate choices keep the mobile menu's `fixed inset-0`
// overlay filling the whole screen: it animates via `top` (not transform), and
// the bar uses a solid background (not backdrop-blur). Either a transform or a
// backdrop-filter on an ancestor establishes a containing block that would trap
// the fixed overlay to the bar's box.

import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { NAV } from "@/lib/nav";
import { HeroMobileNav } from "@/components/hero-mobile-nav";

// How far down the page you must be before the bar is allowed to show — past
// the hero's own header, so the two never overlap.
const REVEAL_AFTER = 320;

export function SiteNav() {
  const [show, setShow] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < REVEAL_AFTER) {
        setShow(false); // near the top: the hero header is doing the job
      } else if (y < lastY.current) {
        setShow(true); // scrolling up
      } else if (y > lastY.current) {
        setShow(false); // scrolling down
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 z-50 transition-[top] duration-300 ease-out ${
        show ? "top-0" : "-top-24"
      }`}
    >
      <div className="border-b border-ink/8 bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-gutter py-3">
          <a
            href="#top"
            aria-label="elyu — home"
            className="relative z-[60] font-display text-xl font-semibold lowercase tracking-tight text-ink"
          >
            elyu
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#getting-there"
              className="relative z-[60] inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-5 py-2 text-sm font-medium text-ink transition-colors hover:border-black hover:bg-black hover:text-cream"
            >
              Plan a trip
              <FiArrowUpRight aria-hidden className="size-4" />
            </a>
            <HeroMobileNav items={NAV} />
          </div>
        </div>
      </div>
    </div>
  );
}
