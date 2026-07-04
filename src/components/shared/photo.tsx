"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

// next/image with a shimmer skeleton shown until the image actually loads.
// Tied to onLoad, so on a fast connection it resolves instantly and nothing
// flashes. Assumes the parent is `relative` (all our photo figures are) so the
// absolutely-positioned skeleton fills it.
export function Photo({ className = "", onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

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
        className={`${className} transition-opacity duration-700 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
