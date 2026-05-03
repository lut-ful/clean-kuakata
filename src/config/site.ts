/**
 * SITE CONFIG
 * ───────────
 * Update these values to change contact info and form links across the whole site.
 */

export const SITE = {
  name: "CleanKuakata",
  event: "Plastic-Free Kuakata 2026",
  date: "June 5, 2026",
  location: "Kuakata Beach, Zero Point, Patuakhali",

  // ── Form links — replace with real Tally / Google Form URLs ──────────────
  forms: {
    volunteer: "https://forms.gle/fk289fV2hkGnPEG79",
    sponsor:   "https://forms.gle/uKAV96XrHnjysvxV7",
    media:     "https://forms.gle/1Y3maL1LN66bHf7G6",
    contact:   "https://forms.gle/vUsJMWiW9dfmbiFd8",
  },
} as const;
