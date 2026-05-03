/**
 * SOCIAL MEDIA CONFIG
 * ───────────────────
 * Update any link here and it updates across the entire site.
 * Set a value to null to hide that platform from the UI.
 */

export const SOCIAL = {
  /** Plastic-Free Kuakata 2026 event accounts */
  facebook: {
    page:   "https://facebook.com/PlasticFreeKuakata",
    event:  "https://facebook.com/events/XXXXXXXXX",  // replace with real event link
    handle: "@PlasticFreeKuakata",
  },

  instagram: {
    page:   "https://instagram.com/PlasticFreeKuakata",
    event:  null as string | null,
    handle: "@PlasticFreeKuakata",
  },

  /** COALS Global Foundation organizer accounts */
  coals: {
    facebook:  "https://facebook.com/COALSglobal",
    instagram: "https://instagram.com/COALSglobal",
    handle:    "@COALSglobal",
    website:   "https://coals.global",
  },

  whatsapp: {
    number: "8801571337605",
    get chatUrl() {
      return `https://wa.me/${this.number}`;
    },
    label: "+880 1571 337605",
  },

  youtube: null as { page: string; handle: string } | null,
} as const;

/** Canonical hashtags used across all platforms and posts */
export const HASHTAGS = [
  "#PlasticFreeKuakata",
  "#COALSglobal",
  "#CleanKuakata",
  "#SaveKuakata",
  "#NowForClimate",
] as const;
