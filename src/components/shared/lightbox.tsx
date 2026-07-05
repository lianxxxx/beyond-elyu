"use client";

// A single, app-wide image lightbox. Any photo can call `useLightbox().open`
// to show the *whole* image (object-contain) over a dark backdrop on the same
// page — no new tab. Close with ✕, a backdrop tap, or Escape. Mounted once by
// LightboxProvider in the root layout; the shared Photo component and the
// hero's ZoomButton are the triggers.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { FiX } from "react-icons/fi";

type LightboxItem = { src: string; alt: string };
type LightboxApi = { open: (item: LightboxItem) => void };

const LightboxContext = createContext<LightboxApi>({ open: () => {} });

export function useLightbox() {
  return useContext(LightboxContext);
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [item, setItem] = useState<LightboxItem | null>(null);
  const [shown, setShown] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = useCallback((next: LightboxItem) => setItem(next), []);
  const close = useCallback(() => setShown(false), []);

  // Fade/scale in on the frame after mount so the transition actually runs.
  useEffect(() => {
    if (!item) return;
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, [item]);

  // While open: lock body scroll, close on Escape, and move focus to ✕.
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [item, close]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {item && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Full image: ${item.alt}`}
          onClick={close}
          onTransitionEnd={() => {
            // Unmount only after the fade-out finishes.
            if (!shown) setItem(null);
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

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.alt}
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
      onClick={() => open({ src, alt })}
      className={`absolute inset-0 cursor-zoom-in ${className}`}
    />
  );
}
