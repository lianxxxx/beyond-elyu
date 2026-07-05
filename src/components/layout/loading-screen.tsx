"use client";

import { useEffect, useState } from "react";

// Opening splash shown on a full page load. Fades out once the window has
// finished loading (min 700ms so it doesn't flicker, capped at 2.5s so it can
// never hang). Client-side navigations don't remount the layout, so it only
// appears on a real open. No-JS users skip it entirely (the <noscript> style).
export function LoadingScreen() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let hidden = false;
    const hide = () => {
      if (hidden) return;
      hidden = true;
      setFading(true);
      setTimeout(() => setGone(true), 500);
    };

    const min = setTimeout(() => {
      if (document.readyState === "complete") hide();
      else window.addEventListener("load", hide, { once: true });
    }, 700);
    const max = setTimeout(hide, 2500);

    return () => {
      clearTimeout(min);
      clearTimeout(max);
      window.removeEventListener("load", hide);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`loading-screen fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <noscript>
        <style>{`.loading-screen{display:none!important}`}</style>
      </noscript>

      <span className="font-display text-5xl font-semibold lowercase tracking-tight text-ink">
        elyu
      </span>

      <span className="mt-3 font-body text-xs font-medium uppercase tracking-[0.28em] text-ink-soft">
        beyond the waves
      </span>

      <span className="mt-9 block h-[3px] w-40 overflow-hidden rounded-full bg-ink/10">
        <span className="loader-bar block h-full w-1/2 rounded-full bg-ink" />
      </span>
    </div>
  );
}
