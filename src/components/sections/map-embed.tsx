"use client";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

// The La Union Google Maps embed, with a shimmer skeleton until the iframe
// loads. The map is the slowest thing on the page, so this is where a skeleton
// matters most; on a fast connection it barely shows.
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="group relative overflow-hidden rounded-[2rem]">
      {!loaded && (
        <span aria-hidden className="skeleton absolute inset-0 z-0" />
      )}
      <iframe
        title="Map of La Union, Philippines"
        src="https://www.google.com/maps?q=La+Union,+Philippines&z=10&t=k&output=embed"
        onLoad={() => setLoaded(true)}
        className={`aspect-[4/5] w-full transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {/* corner ↗ — open the full map */}
      <a
        href="https://www.google.com/maps?q=La+Union,+Philippines"
        target="_blank"
        rel="noreferrer"
        aria-label="Open La Union in Google Maps"
        className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-card/85 text-ink backdrop-blur-md transition-colors hover:bg-ink hover:text-cream"
      >
        <FiArrowUpRight aria-hidden className="size-5" />
      </a>
    </figure>
  );
}
