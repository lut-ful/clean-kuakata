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

  // ── Emails ──────────────────────────────────────────────
  emails: {
    general: "hello@plasticfreekuakata.com",
    media: "media@plasticfreekuakata.com",
  },

  // ── Form links — replace "#" with real Tally / Google Form URL ──
  forms: {
    volunteer: "https://forms.gle/fk289fV2hkGnPEG79",   // e.g. "https://tally.so/r/XXXXXX"
    sponsor: "https://forms.gle/uKAV96XrHnjysvxV7",     // e.g. "https://tally.so/r/YYYYYY"
    media: "https://forms.gle/1Y3maL1LN66bHf7G6",       // e.g. "https://tally.so/r/ZZZZZZ"
    contact: "https://forms.gle/vUsJMWiW9dfmbiFd8", // e.g. "https://tally.so/r/AAAAAA"
  },
} as const;
