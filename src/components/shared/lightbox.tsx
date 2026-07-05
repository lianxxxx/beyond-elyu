"use client";

// A single, app-wide image lightbox. Any photo can call `useLightbox().open`
// to show the *whole* image (object-contain) over a dark backdrop on the same
// page — no new tab. Close with ✕, a backdrop tap, or Escape.
//
// When opened with more than one item it becomes a gallery: prev/next arrows,
// ← → keys, swipe on touch, and a counter let you browse every photo in the
// group (used by the coast "Top spots" strip and the town-by-town section).
// Mounted once by LightboxProvider in the root layout; the shared Photo
// component and the hero's ZoomButton are the triggers.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export type LightboxItem = { src: string; alt: string };
type LightboxApi = { open: (items: LightboxItem[], index?: number) => void };

const LightboxContext = createContext<LightboxApi>({ open: () => {} });

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<{
    items: LightboxItem[];
    index: number;
  } | null>(null);
  const [shown, setShown] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const suppressClick = useRef(false);

  const open = useCallback(
    (items: LightboxItem[], index = 0) => setView({ items, index }),
    [],
  );
  const close = useCallback(() => setShown(false), []);

  // Wrap-around navigation; safe no-op when nothing is open.
  const go = useCallback((dir: number) => {
    setView((v) =>
      v
        ? { ...v, index: (v.index + dir + v.items.length) % v.items.length }
        : v,
    );
  }, []);

  // Fade/scale in on the frame after mount so the transition actually runs.
  useEffect(() => {
    if (!view) return;
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, [view]);

  // While open: lock body scroll, wire keys (Esc / ← / →), and focus ✕.
  useEffect(() => {
    if (!view) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [view, close, go]);

  const current = view ? view.items[view.index] : null;
  const many = view ? view.items.length > 1 : false;

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {view && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Full image: ${current.alt}`}
          onClick={() => {
            // A swipe ends in a synthetic click — don't let it close.
            if (suppressClick.current) {
              suppressClick.current = false;
              return;
            }
            close();
          }}
          onTouchStart={(e) => {
            touchX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null || !many) return;
            const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 40) {
              suppressClick.current = true;
              go(dx < 0 ? 1 : -1);
            }
          }}
          onTransitionEnd={() => {
            // Unmount only after the fade-out finishes.
            if (!shown) setView(null);
          }}
          className={`fixed inset-0 z-[120] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm transition-opacity duration-200 ease-out sm:p-8 ${
            shown ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Close full image"
            onClick={close}
            className="absolute right-4 top-4 z-10 inline-flex size-11 items-center justify-center rounded-full bg-card/90 text-ink backdrop-blur-md transition-colors hover:bg-cream sm:right-6 sm:top-6"
          >
            <FiX aria-hidden className="size-5" />
          </button>

          {many && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                className="absolute left-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-ink backdrop-blur-md transition-colors hover:bg-cream sm:left-6"
              >
                <FiChevronLeft aria-hidden className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                className="absolute right-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 text-ink backdrop-blur-md transition-colors hover:bg-cream sm:right-6"
              >
                <FiChevronRight aria-hidden className="size-5" />
              </button>

              <span className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-card/90 px-3.5 py-1.5 font-display text-xs font-semibold tabular-nums text-ink backdrop-blur-md">
                {String(view.index + 1).padStart(2, "0")} /{" "}
                {String(view.items.length).padStart(2, "0")}
              </span>
            </>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={view.index}
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className={`max-h-full max-w-full rounded-xl object-contain shadow-2xl transition-transform duration-200 ease-out ${
              shown ? "scale-100" : "scale-95"
            }`}
          />
        </div>
      )}
    </LightboxContext.Provider>
  );
}

// Trigger for images that aren't rendered through <Photo> (e.g. the hero's CSS
// background). Sits as a full-cover layer; keep real links above it with a
// higher z-index.
export function ZoomButton({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const { open } = useLightbox();
  return (
    <button
      type="button"
      aria-label={`View full image: ${alt}`}
      onClick={() => open([{ src, alt }])}
      className={`absolute inset-0 cursor-zoom-in ${className}`}
    />
  );
}
