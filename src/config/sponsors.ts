/**
 * SPONSORS CONFIG
 * ───────────────
 * To add or update a sponsor:
 *   1. Add an entry to the SPONSORS array below.
 *   2. Set `logo` to the file path in /public/sponsors/ (e.g. "/sponsors/acme.png").
 *      Recommended logo size: 300×120 px, transparent PNG, on white or transparent bg.
 *      Leave as null to display the sponsor name as styled text instead.
 *   3. Set `demo: false` once the sponsor is confirmed & paid.
 *   4. Optionally set `presenterLabel` to customize how they appear in the Hero and
 *      Footer strip (e.g. "Official Water Partner"). Defaults to the tier's standard
 *      label if not set.
 *
 * Tier order (displayed top-to-bottom, large-to-small):
 *   platinum → gold → silver → inkind
 *
 * Confirmed sponsors (demo: false) automatically appear in:
 *   • Hero credit strip  (all tiers)
 *   • Nav "Presented by" badge  (platinum only, first one)
 *   • SponsorsDisplay section
 *   • Footer sponsor strip
 */

export type SponsorTier = "platinum" | "gold" | "silver" | "inkind";

export type Sponsor = {
  id: string;
  name: string;
  tier: SponsorTier;
  /** Path in /public/sponsors/ — e.g. "/sponsors/acme.png". null = show name as text. */
  logo: string | null;
  /** Sponsor website — null to disable the link */
  url: string | null;
  /** Short tagline shown under the logo in the sponsors section */
  tagline?: string;
  /**
   * Label shown in the Hero credit strip and footer strip.
   * Defaults to TIER_META[tier].heroLabel if not set.
   * Override per-sponsor: "Official Water Partner", "Founding Community Partner", etc.
   */
  presenterLabel?: string;
  /** true = demo placeholder. Set to false once the sponsor is confirmed & paid. */
  demo: boolean;
};

export const SPONSORS: Sponsor[] = [
  // ── PLATINUM ──────────────────────────────────────────────────────────────
  {
    id: "demo-platinum-1",
    name: "[Looking for Platinum Sponsor]",
    tier: "platinum",
    logo: null,
    url: "#",
    tagline: "Be the title sponsor of Bangladesh's biggest beach clean-up.",
    demo: true,
  },

  // ── GOLD / OCEAN GUARDIAN ─────────────────────────────────────────────────
  {
    id: "active-mind",
    name: "Active Mind",
    tier: "gold",
    logo: null,                     // → "/sponsors/active-mind.png" when ready
    url: null,
    tagline: "Youth-led. Community-powered.",
    presenterLabel: "Founding Community Partner",
    demo: false,
  },
  {
    id: "qualfix",
    name: "QualFix",
    tier: "gold",
    logo: null,                     // → "/sponsors/qualfix.png" when ready
    url: null,
    tagline: "Technology for purpose-led change.",
    presenterLabel: "Founding Community Partner",
    demo: false,
  },
  {
    id: "demo-gold-1",
    name: "[Looking for Ocean Guardian]",
    tier: "gold",
    logo: null,
    url: "#",
    tagline: "3 Ocean Guardian slots available — national press & social reach.",
    demo: true,
  },
  {
    id: "demo-gold-2",
    name: "[Looking for Ocean Guardian]",
    tier: "gold",
    logo: null,
    url: "#",
    tagline: "3 Ocean Guardian slots available — national press & social reach.",
    demo: true,
  },

  // ── SILVER / SHORELINE SUPPORTER ──────────────────────────────────────────
  {
    id: "demo-silver-1",
    name: "[Looking for Shoreline Supporter]",
    tier: "silver",
    logo: null,
    url: "#",
    tagline: "Open slots — ideal for hotels, tourism operators, local brands.",
    demo: true,
  },
  {
    id: "demo-silver-2",
    name: "[Looking for Shoreline Supporter]",
    tier: "silver",
    logo: null,
    url: "#",
    tagline: "Open slots — ideal for hotels, tourism operators, local brands.",
    demo: true,
  },

  // ── IN-KIND / SUPPLY PARTNER ──────────────────────────────────────────────
  {
    id: "demo-inkind-1",
    name: "[Looking for Supply Partner]",
    tier: "inkind",
    logo: null,
    url: "#",
    tagline: "Donate water, bags, gloves, snacks, or logistics.",
    demo: true,
  },
];

export const TIER_META: Record<
  SponsorTier,
  { label: string; heroLabel: string; color: string; accentHex: string; bgHex: string }
> = {
  platinum: {
    label: "Platinum Guardian",
    heroLabel: "Presented by",
    color: "text-[#B57321]",
    accentHex: "#EFA031",           // Gold — the warmth of prestige
    bgHex: "#FDF4E6",
  },
  gold: {
    label: "Ocean Guardian",
    heroLabel: "Co-sponsored by",
    color: "text-blue-dark",
    accentHex: "#2362A2",           // Dark Blue — oceanic
    bgHex: "#E9F2FC",
  },
  silver: {
    label: "Shoreline Supporter",
    heroLabel: "Supported by",
    color: "text-teal",
    accentHex: "#15734B",           // Dark Green — land/shoreline
    bgHex: "#E8F8EE",
  },
  inkind: {
    label: "Supply Partner",
    heroLabel: "In partnership with",
    color: "text-charcoal/50",
    accentHex: "#6B7280",
    bgHex: "#F9FAFB",
  },
};

/** Returns the display label for a sponsor in hero/nav/footer contexts. */
export function getSponsorLabel(sponsor: Sponsor): string {
  return sponsor.presenterLabel ?? TIER_META[sponsor.tier].heroLabel;
}
