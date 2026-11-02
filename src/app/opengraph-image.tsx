import { ImageResponse } from "next/og";

// Branded 1200×630 share card. Rendered by next/og (satori) at build time.
// No custom font is loaded on purpose: next/og bundles Geist — the site's own
// body face — as its default, so this stays on-brand with zero font-loading
// risk (the Clash Display .woff2 is variable and unreliable through satori).
// satori supports only flexbox + a CSS subset; every container sets display.
export const alt =
  "beyond elyu — Elyu is beyond the surf. An editorial field guide to the coast everyone thinks they already know.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SEA = "#1F4A43";
const SEA_DEEP = "#16332e";
const TERRACOTTA = "#C0623D";
const SAND = "#F5F0E6";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 84px",
          backgroundColor: SEA,
          backgroundImage: `radial-gradient(circle at 82% 12%, ${SEA} 0%, ${SEA_DEEP} 72%)`,
          color: SAND,
          fontFamily: "Geist, sans-serif",
        }}
      >
        {/* eyebrow — sea dot + wordmark, mirrors the site's section eyebrows */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              backgroundColor: TERRACOTTA,
              display: "flex",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: 9,
              color: SAND,
              opacity: 0.82,
            }}
          >
            BEYOND ELYU
          </div>
        </div>

        {/* headline — three short lines; "beyond" carries the terracotta
            highlighter marker. Stacked (not inline) so nothing overflows the
            1200px width and the marker hugs the word. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            fontSize: 108,
            lineHeight: 1.04,
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex" }}>Elyu is</div>
          <div
            style={{
              display: "flex",
              backgroundColor: TERRACOTTA,
              color: SEA,
              padding: "2px 26px 14px",
              borderRadius: 16,
              margin: "8px 0",
            }}
          >
            beyond
          </div>
          <div style={{ display: "flex" }}>the surf</div>
        </div>

        {/* footer — the thesis, quotable for answer/generative engines */}
        <div style={{ display: "flex", fontSize: 31, lineHeight: 1.35, color: SAND, opacity: 0.8, maxWidth: 940 }}>
          La Union is not overrated. An editorial field guide to the coast
          everyone thinks they already know.
        </div>
      </div>
    ),
    { ...size },
  );
}
