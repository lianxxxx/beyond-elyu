"use client";

// The Second Look — the site's signature reveal.
// A section enters with a short upward translate + fade, once, when it crosses
// into view. Transform/opacity only (never layout), ease-out-quint, no bounce.
//
// Safe by construction:
// - No JS / SSR  → phase stays "initial", content renders fully visible.
// - Already in view on load → jumps straight to "shown" (no hide-flash).
// - prefers-reduced-motion → the transition is removed; content just appears.

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** ms delay before this element reveals — use to stagger siblings (~80ms steps). */
  delay?: number;
  className?: string;
};

type Phase = "initial" | "hidden" | "shown";

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("initial");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If it's already on screen at mount, reveal without first hiding it.
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      setPhase("shown");
      return;
    }

    setPhase("hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setPhase("shown");
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = phase === "hidden";

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={[
        "transition-[opacity,transform] duration-[640ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100",
        hidden ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
