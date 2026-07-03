// Shared Binar-style chrome — the small repeating parts that give the page its
// look: outlined pill tags, the little circular ↗ / → corner buttons, and a
// small uppercase metadata label. Kept colorless on purpose; color lives in the
// photography and in the single terracotta accent word.

import type { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

/* Outlined category pill — "Reforestation / Vegetation" in the inspo. */
export function PillTag({
  children,
  as = "span",
  href,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  as?: "span" | "a";
  href?: string;
  tone?: "ink" | "cream";
  className?: string;
}) {
  const tones = {
    ink: "border-ink/15 text-ink-soft hover:border-ink/35 hover:text-ink",
    cream: "border-cream/30 text-cream/90 hover:border-cream/55 hover:text-cream",
  };
  const cls = `inline-flex items-center rounded-full border px-3.5 py-1.5 font-body text-[0.78rem] font-medium tracking-tight transition-colors ${tones[tone]} ${className}`;
  return as === "a" ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <span className={cls}>{children}</span>
  );
}

/* The circular corner button that sits on cards in the inspo. */
export function IconButton({
  href,
  label,
  tone = "ink",
  icon,
  className = "",
}: {
  href: string;
  label: string;
  tone?: "ink" | "cream" | "sea";
  icon?: ReactNode;
  className?: string;
}) {
  const tones = {
    ink: "border border-ink/12 bg-card text-ink hover:bg-ink hover:text-cream hover:border-ink",
    cream: "bg-cream text-ink hover:bg-ink hover:text-cream",
    sea: "bg-sea text-cream hover:bg-sea-deep",
  };
  return (
    <a
      href={href}
      aria-label={label}
      className={`group/icon inline-flex size-10 items-center justify-center rounded-full transition-colors ${tones[tone]} ${className}`}
    >
      <span className="transition-transform duration-300 ease-out group-hover/icon:translate-x-0.5 group-hover/icon:-translate-y-0.5">
        {icon ?? <FiArrowUpRight aria-hidden className="size-4" />}
      </span>
    </a>
  );
}

/* Small uppercase metadata label — dates, roles, counts. */
export function Meta({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-body text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink-soft ${className}`}
    >
      {children}
    </span>
  );
}
