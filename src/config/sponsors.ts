/**
 * SPONSORS CONFIG
 * ───────────────
 * To add or update a sponsor:
 *   1. Add an entry to the SPONSORS array below.
 *   2. Set `logo` to the file path in /public/sponsors/ (e.g. "/sponsors/acme.png").
 *      Recommended logo size: 300×120 px, transparent PNG, on white or transparent bg.
 *      Leave as null to display the sponsor name as styled text instead.
 *   3. Set `demo: false` once the sponsor is confirmed.
 *
 * Tier order (displayed top-to-bottom, large-to-small):
 *   platinum → gold → silver → inkind
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
  /** Short tagline shown under the logo */
  tagline?: string;
  /** true = demo placeholder. Set to false once sponsor is confirmed & paid. */
  demo: boolean;
};

export const SPONSORS: Sponsor[] = [
  // ── PLATINUM ──────────────────────────────────────────────────────────────
  {
    id: "demo-platinum-1",
    name: "[Looking for Platinum Sponsor]",
    tier: "platinum",
    logo: null,                     // → "/sponsors/ecogreen.png" when ready
    url: "#xyz",
    tagline: "Be the Hero Kuakata Needs — Become Our Platinum Guardian!",
    demo: true,
  },

  // ── GOLD ──────────────────────────────────────────────────────────────────
  {
    id: "demo-gold-1",
    name: "[Looking for Gold Sponsor]",
    tier: "gold",
    logo: null,                     // → "/sponsors/baytech.png" when ready
    url: "#",
    tagline: "Be the Hero Kuakata Needs — Become Our Gold Guardian!",
    demo: true,
  },
  {
    id: "demo-gold-2",
    name: "[Looking for Gold Sponsor]",
    tier: "gold",
    logo: null,                     // → "/sponsors/bluetech.png" when ready
    url: "#",
    tagline: "Be the Hero Kuakata Needs — Become Our Gold Guardian!",
    demo: true,
  },

  // ── SILVER ────────────────────────────────────────────────────────────────
  {
    id: "demo-silver-1",
    name: "[Looking for Silver Sponsor]",
    tier: "silver",
    logo: null,                     // → "/sponsors/kuakata-resorts.png" when ready
    url: "#",
    tagline: "Be the Hero Kuakata Needs — Become Our Silver Guardian!",
    demo: true,
  },
  {
    id: "demo-silver-2",
    name: "[Looking for Silver Sponsor]",
    tier: "silver",
    logo: null,                     // → "/sponsors/ptb.png" when ready
    url: "#",
    tagline: "Be the Hero Kuakata Needs — Become Our Silver Guardian!",
    demo: true,
  },

  // ── IN-KIND ───────────────────────────────────────────────────────────────
  {
    id: "demo-inkind-1",
    name: "[Looking for In-Kind Sponsor]",
    tier: "inkind",
    logo: null,                     // → "/sponsors/aquapure.png" when ready
    url: "#",
    tagline: "Be the Hero Kuakata Needs — Become Our In-Kind Guardian!",
    demo: true,
  },
];

export const TIER_META: Record<SponsorTier, { label: string; color: string; accentHex: string; bgHex: string }> = {
  platinum: {
    label: "Platinum Guardian",
    color: "text-[#D4A017]",
    accentHex: "#D4A017",
    bgHex: "#fdf8ec",
  },
  gold: {
    label: "Ocean Guardian",
    color: "text-teal",
    accentHex: "#0B6E4F",
    bgHex: "#f0faf5",
  },
  silver: {
    label: "Shoreline Supporter",
    color: "text-coral",
    accentHex: "#D84040",
    bgHex: "#fef5f5",
  },
  inkind: {
    label: "Supply Partner",
    color: "text-charcoal/50",
    accentHex: "#6B7280",
    bgHex: "#f9fafb",
  },
};
