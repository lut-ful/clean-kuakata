/**
 * SOCIAL MEDIA CONFIG
 * ───────────────────
 * Update any link here and it updates across the entire site
 * (Footer, SocialLinks section, WhatsApp button, Nav CTA).
 *
 * Set a value to null to hide that platform from the UI.
 */

export const SOCIAL = {
  facebook: {
    /** The CleanKuakata Facebook page */
    page: "https://facebook.com/PlasticFreeKuakata",
    /** The Facebook Event for June 5 — replace with real event link */
    event: "https://facebook.com/events/XXXXXXXXX",
    handle: "@PlasticFreeKuakata",
  },

  instagram: {
    /** The CleanKuakata Instagram page */
    page: "https://instagram.com/PlasticFreeKuakata",
    /** Instagram event highlight or reel link — set to null if not needed */
    event: null as string | null,
    handle: "@PlasticFreeKuakata",
  },

  whatsapp: {
    /** Full number with country code, no spaces or dashes */
    number: "8801571337605",
    /** Direct chat link — auto-generated from number */
    get chatUrl() {
      return `https://wa.me/${this.number}`;
    },
    /** Label shown in the UI */
    label: "+880 1571 337605",
  },

  youtube: null as {
    page: string;
    handle: string;
  } | null,
  // Uncomment and fill in when YouTube channel is ready:
  // youtube: {
  //   page: "https://youtube.com/@CleanKuakata",
  //   handle: "@CleanKuakata",
  // },
} as const;
