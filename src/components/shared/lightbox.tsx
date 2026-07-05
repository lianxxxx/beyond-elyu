"use client";

// A single, app-wide image lightbox. Any photo can call `useLightbox().open`
// to show the *whole* image (object-contain) over a dark backdrop on the same
// page — no new tab. Close with ✕, a backdrop tap, or Escape.
//
// When opened with more than one item it becomes a gallery. Instead of custom
// swipe math (which the browser kept swallowing on touch), the images live in a
// native horizontal scroll-snap strip — the same mechanism as the section
// carousels — so a finger swipe just works. The ‹ › arrows and ← → keys scroll
// the strip; a counter tracks the position. Mounted once by LightboxProvider in
// the root layout; the shared Photo component and the hero's ZoomButton are the
// triggers.

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
  const [pos, setPos] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  const open = useCallback(
    (items: LightboxItem[], index = 0) => setView({ items, index }),
    [],
  );
  const close = useCallback(() => setShown(false), []);

  // Scroll the strip by one slide from wherever it currently sits (read live so
  // rapid taps/keys stay in sync).
  const step = useCallback((dir: number) => {
    const el = scrollerRef.current;
    if (!el || !el.clientWidth) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    const next = i + dir;
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
  }, []);

  // On open: fade in and jump the strip to the tapped image before paint.
  useEffect(() => {
    if (!view) return;
    const id = requestAnimationFrame(() => {
      const el = scrollerRef.current;
      if (el) el.scrollLeft = view.index * el.clientWidth;
      setPos(view.index);
      setShown(true);
    });
    return () => cancelAnimationFrame(id);
  }, [view]);

  // While open: lock body scroll, wire keys (Esc / ← / →), and focus ✕.
  useEffect(() => {
    if (!view) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [view, close, step]);

  const handleScroll = () => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      ticking.current = false;
      const el = scrollerRef.current;
      if (!el || !el.clientWidth) return;
      setPos(Math.round(el.scrollLeft / el.clientWidth));
    });
  };

  const many = view ? view.items.length > 1 : false;

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {view && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={
            many ? "Image gallery" : `Full image: ${view.items[0].alt}`
          }
          onClick={close}
          onTransitionEnd={(e) => {
            // Unmount only after the backdrop's own fade-out finishes.
            if (e.target === e.currentTarget && !shown) setView(null);
          }}
          className={`fixed inset-0 z-[120] bg-ink/90 backdrop-blur-sm transition-opacity duration-200 ease-out ${
            shown ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Native scroll-snap strip: the browser owns the swipe. */}
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overscroll-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {view.items.map((item, i) => (
              <div
                key={item.src + i}
                className="flex h-full w-full shrink-0 snap-center items-center justify-center p-4 sm:p-10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-full max-w-full select-none rounded-xl object-contain shadow-2xl"
                />
              </div>
            ))}
          </div>

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
                  step(-1);
                }}
                className="absolute left-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-cream backdrop-blur-md transition-colors hover:bg-ink/60 sm:left-6"
              >
                <FiChevronLeft aria-hidden className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-cream backdrop-blur-md transition-colors hover:bg-ink/60 sm:right-6"
              >
                <FiChevronRight aria-hidden className="size-5" />
              </button>

              <span className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-ink/40 px-3.5 py-1.5 font-display text-xs font-semibold tabular-nums text-cream backdrop-blur-md">
                {String(pos + 1).padStart(2, "0")} /{" "}
                {String(view.items.length).padStart(2, "0")}
              </span>
            </>
          )}
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
