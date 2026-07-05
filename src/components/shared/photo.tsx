"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { useLightbox } from "./lightbox";

// next/image with a shimmer skeleton shown until the image actually loads.
// Tied to onLoad, so on a fast connection it resolves instantly and nothing
// flashes. Assumes the parent is `relative` (all our photo figures are) so the
// absolutely-positioned skeleton fills it.
//
// Tapping the photo opens it in the app-wide lightbox (the whole image, same
// page). Set `zoomable={false}` to opt a decorative image out. Overlays that
// sit on top of the image (gradients, captions, badges) must be
// `pointer-events-none` so the tap reaches it; real links stay above.
export function Photo({
  className = "",
  onLoad,
  zoomable = true,
  ...props
}: ImageProps & { zoomable?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const { open } = useLightbox();

  const canZoom = zoomable && typeof props.src === "string";
  const alt = typeof props.alt === "string" ? props.alt : "";
  const zoom = () => open({ src: props.src as string, alt });

  return (
    <>
      {!loaded && (
        <span aria-hidden className="skeleton absolute inset-0 z-0" />
      )}
      <Image
        {...props}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onClick={canZoom ? zoom : undefined}
        onKeyDown={
          canZoom
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  zoom();
                }
              }
            : undefined
        }
        role={canZoom ? "button" : undefined}
        tabIndex={canZoom ? 0 : undefined}
        aria-label={canZoom ? `View full image: ${alt}` : undefined}
        className={`${className} ${
          canZoom ? "cursor-zoom-in" : ""
        } transition-opacity duration-700 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
