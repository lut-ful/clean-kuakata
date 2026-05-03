import Link from "next/link";
import { COLLABORATORS } from "@/config/organizers";
import CoalsLogo from "@/components/CoalsLogo";

const PILLARS = [
  {
    icon: "♻️",
    color: "#EFA031",
    bg: "#FDF4E6",
    title: "Circular",
    body: "We don't just clean — we close the loop. Waste becomes feedstock, data becomes policy, and a one-day event becomes a permanent system.",
  },
  {
    icon: "🌊",
    color: "#478BE7",
    bg: "#E9F2FC",
    title: "Oceanic",
    body: "The Bay of Bengal is one of the world's most plastic-polluted seas. COALS starts here — at the water's edge — and works inland.",
  },
  {
    icon: "🌱",
    color: "#28A770",
    bg: "#E8F8EE",
    title: "Land Systems",
    body: "Plastic pollution begins on land. The solution must too. COALS addresses the full pipeline — from source to sea.",
  },
];

const foundingPartners = COLLABORATORS.filter(
  (c) => c.active && c.role === "Founding Community Partner"
);

export default function CoalsSection() {
  return (
    <section
      id="coals"
      className="py-20 md:py-28 scroll-mt-16"
      style={{ background: "linear-gradient(160deg, #071e15 0%, #0a1f35 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-green-light/60 mb-6">
          The Organizer
        </p>

        {/* Logo + tagline */}
        <div className="mb-10">
          <CoalsLogo
            variant="compact"
            primaryColor="#9EE0BD"
            secondaryColor="#7A9E7E"
            textColor="#9EE0BD"
            iconSize={56}
            className="mb-4"
          />
          <p className="text-blue-light/50 text-sm tracking-wide mt-2">
            Circular Oceanic And Land Systems
          </p>
        </div>

        {/* Mission */}
        <div className="max-w-3xl mb-14">
          <p className="text-white/65 text-base md:text-lg leading-relaxed mb-4">
            COALS is a global environmental foundation being{" "}
            <span className="text-white/90 font-medium">established through the act</span>{" "}
            of Plastic-Free Kuakata 2026. Most organizations are formed in boardrooms.
            COALS is being formed on a beach.
          </p>
          <p className="text-white/50 text-base leading-relaxed">
            Its mission: convert one-day environmental events into permanent circular
            systems — where waste becomes resource, cleanup becomes industry, and
            activism becomes institution.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {PILLARS.map(({ icon, color, bg, title, body }) => (
            <div
              key={title}
              className="rounded-2xl p-7 border border-white/8"
              style={{ backgroundColor: bg + "12" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: bg + "20" }}
              >
                {icon}
              </div>
              <h3
                className="font-heading text-xl font-bold mb-2"
                style={{ color }}
              >
                {title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Founding act callout */}
        <div
          className="rounded-2xl p-7 md:p-10 mb-12 border border-gold/20"
          style={{ backgroundColor: "#EFA03112" }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-2">
                Founding Initiative
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                Plastic-Free Kuakata 2026 is COALS&apos;s founding act.
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                On June 5, 2026, the foundation will be formally established — not
                with paperwork, but with 500 volunteers, 10 km of cleaned coastline,
                and a model that will be replicated across Bangladesh and beyond.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <div className="text-center bg-white/5 rounded-xl px-8 py-4 border border-white/10">
                <p className="text-gold font-heading text-3xl font-bold">June 5</p>
                <p className="text-white/40 text-xs mt-1">Founding Date</p>
              </div>
              <div className="text-center bg-white/5 rounded-xl px-8 py-4 border border-white/10">
                <p className="text-green-light font-heading text-3xl font-bold">2026</p>
                <p className="text-white/40 text-xs mt-1">World Environment Day</p>
              </div>
            </div>
          </div>
        </div>

        {/* Founding partners + CTA row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {foundingPartners.length > 0 && (
            <div>
              <p className="text-white/25 text-[10px] uppercase tracking-widest font-semibold mb-3">
                Founding Community Partners
              </p>
              <div className="flex flex-wrap gap-3">
                {foundingPartners.map((p) => (
                  <span
                    key={p.id}
                    className="bg-white/8 border border-white/12 text-white/60 rounded-full px-4 py-2 text-sm font-medium"
                  >
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Link
            href="/coals"
            className="inline-flex items-center gap-2 bg-green text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-green-dark transition-colors shrink-0"
          >
            Learn the full COALS story →
          </Link>
        </div>

      </div>
    </section>
  );
}
