/**
 * ORGANIZERS CONFIG
 * ─────────────────
 * COALS Global Foundation is the lead organizer.
 * Active Mind and QualFix are Founding Community Partners.
 *
 * To show an organizer: set `active: true`.
 * To add a logo: set `logo` to the path in /public/organizers/ (200×200px transparent PNG).
 */

export type Organizer = {
  id: string;
  name: string;
  tagline: string;
  bio: string;
  logo: string | null;
  url: string | null;
  icon: string;
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
    id: "coals",
    name: "COALS Global Foundation",
    tagline: "Circular Oceanic And Land Systems",
    bio: "COALS — Circular Oceanic And Land Systems — is a global environmental foundation being established through the act of Plastic-Free Kuakata 2026. Born from the collaboration of Bangladesh's youth leaders and technology innovators, COALS exists to convert one-day environmental events into permanent circular systems. This event is its founding initiative.",
    logo: null,                       // → "/organizers/coals.png" when ready
    url: "https://coals.global",
    icon: "🌊",
    active: true,
  },
];

export const COLLABORATORS: Collaborator[] = [
  {
    id: "active-mind",
    name: "Active Mind",
    role: "Founding Community Partner",
    logo: null,                       // → "/organizers/active-mind.png" when ready
    url: null,
    active: true,
  },
  {
    id: "qualfix",
    name: "QualFix",
    role: "Founding Community Partner",
    logo: null,                       // → "/organizers/qualfix.png" when ready
    url: null,
    active: true,
  },
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
