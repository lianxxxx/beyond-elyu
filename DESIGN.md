---
name: beyond elyu
description: La Union is not overrated. Look closer. A coastal-editorial single-page argument.
colors:
  sand: "#F5F0E6"
  sand-deep: "#ECE4D3"
  sea: "#1F4A43"
  sea-deep: "#193D37"
  terracotta: "#C0623D"
  terracotta-soft: "#CC7250"
  ink: "#2A2622"
  ink-soft: "#6F6B66"
typography:
  display:
    fontFamily: "Clash Display, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1rem + 5vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Clash Display, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.4rem + 5vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.9rem + 0.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "0.24em"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.625rem"
  xl: "0.875rem"
  pill: "9999px"
spacing:
  gutter: "clamp(1.5rem, 1rem + 4vw, 5.5rem)"
  bay: "clamp(4rem, 2rem + 8vw, 11rem)"
components:
  button-primary:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.375rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.sand}"
  button-on-light:
    backgroundColor: "{colors.sea}"
    textColor: "{colors.sand}"
    rounded: "{rounded.pill}"
    padding: "0.625rem 1.5rem"
  button-on-light-hover:
    backgroundColor: "{colors.sea-deep}"
    textColor: "{colors.sand}"
  chip-capsule:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sand}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  chip-on-light:
    backgroundColor: "{colors.sand-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
---

# Design System: beyond elyu

## 1. Overview

**Creative North Star: "The Second Look"**

The entire site exists to overturn one sentence: *"La Union is overrated."* The
design is built to reward a longer gaze the way the place rewards a longer
visit. Nothing arrives all at once. Meaning emerges on a second read, detail
emerges on scroll, and the argument lands on reflection. This is warm coastal
editorial, El Niño afternoon light on an off-white page, not the cream-and-gold
luxury-travel template and not a SaaS landing page wearing a magazine costume.

Density is generous and unhurried. Big fluid display type sets the claims;
calm humanist body type carries the evidence. The page reads as a single
continuous argument, hero to footer, with deliberate pacing between beats
(the `bay` rhythm). Color is restrained on light surfaces and committed when a
section wants to become its own world: a sea-green panel, a photo drenched
edge to edge. Terracotta is the one warm spark, used rarely and never as
filler.

Motion is choreographed but quiet. Sections reveal as they enter the viewport,
text staggers in, the map assembles itself. Easing is always exponential
ease-out; there is no bounce, no elastic, nothing that competes with the place
for attention. If an animation calls attention to itself rather than to La
Union, it is wrong.

**Key Characteristics:**
- Warm off-white (`sand`) as the default ground, never stark white.
- Fluid display type with tight negative tracking; calm 1.65 body leading.
- Restrained on light, committed in hero/feature moments (sea panels, drenched photos).
- Terracotta as a ≤10% accent, never body text.
- Scroll-revealed, ease-out motion. The reveal is the concept.

## 2. Colors

A warm coastal palette: an off-white page, a deep sea green, a single burnt-clay
accent, and a soft near-black for text. Authored in OKLCH (the canonical source
in `globals.css`); the hex values here are the 1:1 sRGB equivalents.

### Primary
- **Deep Sea Green** (`#1F4A43` / `oklch(0.3762 0.0495 181.43)`): The brand's
  voice color. Headlines on light, primary buttons, full-bleed feature panels,
  links. Scores ~8.7:1 on `sand` (AAA) so it is safe at any text size.
  **Sea Deep** (`#193D37`) is its hover/pressed state.

### Secondary
- **Burnt Terracotta** (`#C0623D` / `oklch(0.6006 0.1311 41.47)`): The single
  warm spark. Accent borders, an underline, a hover wash, the one word worth
  emphasizing. **Terracotta Soft** (`#CC7250`) for hovers. Scores only ~3.7:1
  on `sand`: large text and UI accents only, never body copy.

### Neutral
- **Warm Sand** (`#F5F0E6` / `oklch(0.9563 0.0143 84.58)`): The default page
  ground. Warm off-white, never `#fff`.
- **Sand Deep** (`#ECE4D3`): Quiet panels, chips on light, section banding and
  subtle separation without borders.
- **Ink** (`#2A2622` / `oklch(0.2715 0.0094 67.42)`): All body and heading text
  on light. ~15:1 on `sand` (AAA).
- **Ink Soft** (`#6F6B66`, i.e. ink at 62% over sand): Secondary text, captions,
  metadata. ~4.1:1 on `sand`: fine for large or secondary text, not for small
  print. When in doubt, use full `ink`.

### Named Rules
**The One Spark Rule.** Terracotta appears on ≤10% of any screen. Its rarity is
the emphasis. The moment two terracotta things compete, neither reads as the
accent.

**The Contrast Gate Rule.** Terracotta and ink-soft never carry small body text
on `sand` (both fall below 4.5:1). Body copy is `ink` on `sand`, or `sand` on
`sea`. Test before shipping: if it's text smaller than the lede and it isn't
ink-on-sand or sand-on-sea, it's wrong.

**The No Stark White Rule.** Never `#fff` and never `#000`. Every neutral is
tinted warm toward the sand hue. Pure white on this page reads as a bug.

## 3. Typography

**Display Font:** Clash Display (self-hosted variable woff2, with `ui-sans-serif, system-ui` fallback)
**Body Font:** Geist (self-hosted via the `geist` package, with `ui-sans-serif, system-ui` fallback)

**Character:** Clash Display is a contemporary geometric-humanist display face
with confident, slightly editorial cuts; it carries the claims. Geist is a
clean, calm, highly legible humanist sans; it carries the evidence. The pairing
is deliberately not a serif-display + sans shape, to dodge the editorial-magazine
reflex. Display does the talking; body gets out of the way.

### Hierarchy
- **Display** (Clash Display 600, `clamp(2.75rem, 1rem + 5vw, 5.5rem)`, lh 0.94,
  tracking -0.025em): Hero headline and the single biggest statements only.
- **Headline** (Clash Display 600, `clamp(2.75rem, 1.4rem + 5vw, 6rem)`, lh 0.96,
  tracking -0.02em): Section openers. The largest reaches per beat.
- **Lede** (Geist 400, `clamp(1.0625rem, 0.9rem + 0.6vw, 1.375rem)`, lh 1.55):
  The paragraph directly under a headline. Sets the section's argument.
- **Body** (Geist 400, 1rem, lh 1.65): Running copy: town histories, the
  persuasive close. Cap measure at 65–75ch.
- **Label** (Geist 500, 0.8125rem, tracking 0.24em, uppercase): Eyebrows, small
  metadata, "known for" tags. Used sparingly, never above every heading.

### Named Rules
**The Weight Ladder Rule.** Only three weights ship: Geist 400 (body), 500
(UI/labels/nav), Clash 600 (display/headline). No 300 hairlines, no 700+ on
display; the type was tuned at these weights.

**The Tight-Top Rule.** Display and headline run tight (lh ≤ 0.96, negative
tracking). Body and lede run open (lh ≥ 1.55). The contrast between tight
headers and airy body is the editorial rhythm; never flatten both to the middle.

**The Repeated-Kicker Ban.** A track-spaced uppercase label above *every*
section is AI scaffolding. One strong kicker where it earns its place, not as
section grammar.

## 4. Elevation

This is a flat, tonal system. On light surfaces, depth comes from warm tonal
layering (`sand` → `sand-deep` → `sea` panels), not from shadows. The only
"lifted" objects in the system are the hero's translucent capsules, and those
float over a *photo*, where the depth is the image and a backdrop blur, not a
drop shadow on a flat card. If a surface on the light page needs a shadow to
separate from its background, the band color is wrong; change the tone instead.

### Shadow Vocabulary
- **Photo-float** (`backdrop-filter: blur(12px)` + `background: ink/20–35%`):
  The only elevation token. Used exclusively for glass capsules over imagery
  (nav, spot chips). Never on the flat light page.

### Named Rules
**The Flat-By-Default Rule.** Light-page surfaces are flat. Separation is tonal
(sand vs sand-deep vs sea), never a drop shadow. Glass + blur is reserved for
over-photo elements and is never a decorative default.

## 5. Components

### Buttons
- **Shape:** Full pill (`9999px`). Every button and chip in the system is a pill;
  it is a load-bearing brand signal.
- **Primary (over photo):** `sand` background, `ink` text, pill, padding
  `0.375rem 1.25rem`. The hero "Plan a trip" button.
- **Primary (on light page):** `sea` background, `sand` text, padding
  `0.625rem 1.5rem`. The light-section equivalent (sand-on-sea ≈ 8.7:1).
- **Hover / Focus:** Primary-over-photo washes to `terracotta` with `sand` text.
  On-light washes to `sea-deep`. Transitions are color only (`transition-colors`),
  ~200ms ease-out. Focus shows a visible `sea` ring; never remove the outline.

### Chips / Capsules
- **Over photo (`chip-capsule`):** Translucent `ink/20` with `sand/25` border and
  backdrop blur, `sand` text. The hero spot capsules. Hover lifts border and
  background opacity, never adds a shadow.
- **On light (`chip-on-light`):** Solid `sand-deep` background, `ink` text, no
  border. Hover deepens the background or adds a 1px full `ink/15` border.
- **State:** Filter chips show selection with a `sea` fill + `sand` text, not a
  side stripe.

### Cards / Containers
- **Corner Style:** `xl` (`0.875rem`) for content panels; pills for interactive
  capsules. Avoid card grids; prefer tonal bands and asymmetric layout.
- **Background:** `sand-deep` on a `sand` page, or `sea` for a committed feature
  panel. Never a bordered white box.
- **Shadow Strategy:** None. Tonal separation only (see Elevation).
- **Border:** Optional 1px full `ink/12`. Never a colored side-stripe.
- **Internal Padding:** Generous; scale with `gutter`. Vary padding for rhythm.

### Navigation
- **Style:** A floating pill capsule, centered, translucent over the hero photo:
  `ink/35` fill, `sand/15` border, backdrop blur. Wordmark "elyu" is a solid
  `sand` pill (lowercase, Clash 500). Links are `sand/85`, hover fills `sand/10`
  and brightens to `sand`. The CTA is the primary-over-photo button.
- **Mobile:** Nav links collapse (`hidden md:flex`); wordmark + CTA persist.
  When the page scrolls past the hero onto light ground, the capsule should
  re-theme to a light treatment (sea text on sand) rather than stay glass.

### Signature: The Reveal
Not a visual component but the system's defining behavior. Sections enter with a
choreographed reveal: a short upward translate (12–24px) + opacity, headline and
lede staggered ~80ms apart, triggered once when the section crosses into view.
Easing is ease-out-quint/expo. This is "The Second Look" made literal; it is the
project's signature and should be consistent across every section.

## 6. Do's and Don'ts

### Do:
- **Do** ground every page on warm `sand` (`#F5F0E6`); tint all neutrals toward
  the brand hue.
- **Do** put body text as `ink` on `sand` or `sand` on `sea`; both clear AAA.
- **Do** keep terracotta to ≤10% of any screen, accents and large text only.
- **Do** separate light-page surfaces tonally (sand / sand-deep / sea), flat,
  no shadows.
- **Do** make every button and chip a full pill; it is a brand signal.
- **Do** reveal sections on scroll with a small translate + fade, staggered,
  ease-out, no bounce. The reveal is the concept ("The Second Look").
- **Do** ship real La Union imagery; this is a travel brief, zero images is a bug.

### Don't:
- **Don't** use `#fff` or `#000` anywhere. Pure white on this page is a bug.
- **Don't** put small body text in terracotta or ink-soft on `sand` (both below
  4.5:1). Run the Contrast Gate before shipping any colored text.
- **Don't** reach for the cream-and-gold luxury-travel template or a
  serif-italic-drop-cap editorial-magazine costume. The palette and type are
  their own coastal system.
- **Don't** default to display serifs (Playfair / Cormorant / Fraunces). Type is
  Clash Display + Geist, chosen, not defaulted.
- **Don't** build the page as identical icon-heading-text card grids or a
  centered icon-title-subtitle stack. No SaaS hero-metric template.
- **Don't** turn the site into a "Top 10 things to do" checklist; that is the
  day-tripper energy the whole site argues against.
- **Don't** use `border-left`/`border-right` greater than 1px as a colored
  accent stripe. Use full borders, tonal bands, or leading numbers instead.
- **Don't** apply glassmorphism as a default. Glass + blur is for over-photo
  elements only.
- **Don't** animate layout properties or use bounce/elastic easing. Transform
  and opacity only, ease-out.
