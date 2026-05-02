/**
 * ORGANIZERS CONFIG
 * ─────────────────
 * To add or update an organizer or collaborator:
 *   1. Edit the ORGANIZERS or COLLABORATORS array below.
 *   2. Set `logo` to the file path in /public/organizers/ (e.g. "/organizers/active-mind.png").
 *      Recommended size: 200×200 px, transparent PNG.
 *      Leave as null to show the emoji `icon` instead.
 *   3. Set `active: true` to show the organizer in the Organizers section on the site.
 *      Set `active: false` to hide without deleting the data.
 */

export type Organizer = {
  id: string;
  name: string;
  tagline: string;
  bio: string;
  /** Path in /public/organizers/ — e.g. "/organizers/active-mind.png". null = show emoji icon. */
  logo: string | null;
  /** Website URL — null to disable link */
  url: string | null;
  /** Emoji shown when no logo is set */
  icon: string;
  /** Set false to hide from the public site without deleting */
  active: boolean;
};

export type Collaborator = {
  id: string;
  name: string;
  role?: string;
  logo: string | null;
  url: string | null;
  active: boolean;
};

export const ORGANIZERS: Organizer[] = [
  {
    id: "active-mind",
    name: "Active Mind",
    tagline: "Youth-led. Community-powered.",
    bio: "A youth-led organization dedicated to leadership development, community engagement, and social impact across Bangladesh. Active Mind believes that young people are not the leaders of tomorrow — they are the leaders of today.",
    logo: null,                       // → "/organizers/active-mind.png" when ready
    url: null,
    icon: "🌱",
    active: false,                    // set true when confirmed for public display
  },
  {
    id: "qualfix",
    name: "QualFix",
    tagline: "Technology for purpose-led change.",
    bio: "A technology and innovation company supporting community-driven solutions for environmental and social challenges. QualFix brings digital infrastructure, data systems, and creative strategy to purpose-led initiatives.",
    logo: null,                       // → "/organizers/qualfix.png" when ready
    url: null,
    icon: "⚡",
    active: false,                    // set true when confirmed for public display
  },
];

export const COLLABORATORS: Collaborator[] = [
  {
    id: "bd-clean",
    name: "BD Clean",
    role: "In collaboration with",
    logo: null,
    url: null,
    active: false,
  },
  {
    id: "kuakata-youth-club",
    name: "Kuakata Youth Club",
    role: "In collaboration with",
    logo: null,
    url: null,
    active: false,
  },
  {
    id: "sagar-konna-club",
    name: "Sagar Konna Club",
    role: "In collaboration with",
    logo: null,
    url: null,
    active: false,
  },
  {
    id: "bangladesh-tourism-board",
    name: "Bangladesh Tourism Board",
    role: "Coordination partner",
    logo: null,
    url: null,
    active: false,
  },
];
