"use client";

// The phone-only nav: a burger that sits beside "Plan a trip" and drops the
// section links in a small card. Desktop shows the inline <nav> instead, so
// this whole control is md:hidden. Mirrors the towns burger pattern
// (FiMenu/FiX toggle + click-away catcher + absolute panel).

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

type NavItem = { label: string; href: string };

export function HeroMobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative z-[60] inline-flex size-10 items-center justify-center text-ink transition-opacity hover:opacity-70"
      >
        {open ? (
          <FiX aria-hidden className="size-5" />
        ) : (
          <FiMenu aria-hidden className="size-5" />
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background px-gutter">
          <nav className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-start gap-1 pt-[22vh]">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg border-b border-ink/10 py-5 font-display text-3xl font-semibold tracking-tight text-ink transition-colors hover:bg-ink/5"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
