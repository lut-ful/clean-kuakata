import Link from "next/link";
import type { Metadata } from "next";
import { SOCIAL } from "@/config/social";
import { SITE } from "@/config/site";
import CoalsLogo from "@/components/CoalsLogo";

export const metadata: Metadata = {
  title: "COALS Global Foundation — Circular Oceanic And Land Systems",
  description:
    "COALS — Circular Oceanic And Land Systems — is a global environmental foundation established through Plastic-Free Kuakata 2026. Learn about our mission, model, and founding story.",
};

const NAME_PARTS = [
  {
    letter: "C",
    word: "Circular",
    icon: "♻️",
    color: "#EFA031",
    bg: "#FDF4E6",
    body: "Environmental action without circular thinking is just motion. COALS builds systems where waste becomes feedstock, cleanup data drives policy, and every initiative feeds the next. Nothing lost. Everything returned.",
  },
  {
    letter: "O",
    word: "Oceanic",
    icon: "🌊",
    color: "#478BE7",
    bg: "#E9F2FC",
    body: "The Bay of Bengal, the Sundarbans, the coastline of Kuakata — oceans are where the crisis is most visible and most urgent. COALS begins at the water's edge and works outward.",
  },
  {
    letter: "A",
    word: "And",
    icon: "🔗",
    color: "#8CBDF4",
    bg: "#E9F2FC",
    body: "The bridge between ocean and land. The link between a one-day cleanup and a permanent institution. And is the most important word in the name — it refuses to separate systems that are inseparable.",
  },
  {
    letter: "L",
    word: "Land Systems",
    icon: "🌱",
    color: "#28A770",
    bg: "#E8F8EE",
    body: "Plastic enters the ocean from land. Industrial waste, open landfills, river runoff — the source is terrestrial. COALS intervenes at origin, not just outcome, building waste management infrastructure inland.",
  },
  {
    letter: "S",
    word: "Systems",
    icon: "⚙️",
    color: "#15734B",
    bg: "#E8F8EE",
    body: "Events clean beaches. Systems keep them clean. COALS is not an event organizer — it is a systems builder. Every initiative we run is a prototype for scalable, replicable environmental infrastructure.",
  },
];

const SDG_GOALS = [
  {
    number: "14",
    title: "Life Below Water",
    color: "#2362A2",
    bg: "#E9F2FC",
    desc: "Conserve and sustainably use the oceans, seas, and marine resources.",
  },
  {
    number: "15",
    title: "Life on Land",
    color: "#15734B",
    bg: "#E8F8EE",
    desc: "Protect, restore, and promote sustainable use of terrestrial ecosystems.",
  },
  {
    number: "12",
    title: "Responsible Consumption",
    color: "#EFA031",
    bg: "#FDF4E6",
    desc: "Ensure sustainable consumption and production patterns.",
  },
];

const MODEL_STEPS = [
  {
    n: "01",
    title: "Mobilize",
    body: "Build a coalition of volunteers, community leaders, NGOs, and institutions around a shared goal.",
    color: "#2362A2",
  },
  {
    n: "02",
    title: "Measure",
    body: "Run a rigorous waste audit — weight, type, source. Data that drives real policy, not press releases.",
    color: "#478BE7",
  },
  {
    n: "03",
    title: "Circularize",
    body: "Establish sorting, recycling, and upcycling partnerships. Waste leaves as material, not landfill.",
    color: "#28A770",
  },
  {
    n: "04",
    title: "Advocate",
    body: "Submit findings to local government, UNEP, and national media. Turn cleanup into campaign.",
    color: "#15734B",
  },
  {
    n: "05",
    title: "Replicate",
    body: "The Kuakata model becomes a blueprint — for Cox's Bazar, Sundarbans, and coastlines beyond Bangladesh.",
    color: "#EFA031",
  },
];

const FUTURE = [
  { icon: "📅", title: "Annual Clean-Up", body: "Plastic-Free Kuakata becomes an annual tradition — growing in scale, depth, and impact each year." },
  { icon: "🗺️", title: "Coastal Expansion", body: "Cox's Bazar, the Sundarbans coastline, Chittagong — the COALS model rolls out across Bangladesh's 580 km coastline." },
  { icon: "🏭", title: "Waste Processing Hubs", body: "Permanent sorting and recycling stations at Kuakata, creating local livelihoods and circular waste infrastructure." },
  { icon: "🏫", title: "School Program", body: "Environmental curriculum across Patuakhali District — 10,000 students learning circular systems by 2027." },
  { icon: "📊", title: "Waste Monitoring Network", body: "Real-time marine debris tracking along the Bay of Bengal, reported to UNEP annually." },
  { icon: "🌐", title: "Global Replication", body: "The COALS model — mobilize, measure, circularize, advocate, replicate — shared with environmental orgs worldwide." },
];

export default function CoalsPage() {
  return (
    <div className="min-h-screen bg-offwhite">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <div
        className="pt-24 pb-20 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(150deg, #071e15 0%, #081628 60%, #0a1f35 100%)" }}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-light/50 hover:text-green-light text-sm transition-colors mb-10"
          >
            ← Back to event
          </Link>

          <div className="inline-flex items-center gap-2 bg-green/15 border border-green/25 rounded-full px-4 py-2 mb-6">
            <span className="text-green-light text-xs font-semibold uppercase tracking-widest">Being established · June 5, 2026</span>
          </div>

          <CoalsLogo
            variant="full"
            primaryColor="#9EE0BD"
            secondaryColor="#7A9E7E"
            textColor="#9EE0BD"
            iconSize={96}
            className="mb-8"
          />
          <p className="text-white/65 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Most organizations are formed in boardrooms.
            COALS is being formed on a beach — on June 5, 2026, on the shores of Kuakata,
            with 500 volunteers and a question:{" "}
            <em className="text-white/90">what if we made this permanent?</em>
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#volunteer"
              className="bg-coral text-white px-7 py-3.5 rounded-full font-semibold hover:bg-coral-dark transition-colors"
            >
              Join the Founding Event
            </Link>
            <a
              href={SOCIAL.coals.website}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-light/30 text-blue-light/70 hover:text-blue-light hover:border-blue-light/60 px-7 py-3.5 rounded-full font-semibold transition-colors"
            >
              coals.global →
            </a>
          </div>
        </div>
      </div>

      {/* ── THE NAME ─────────────────────────────────────────────────────────── */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-teal mb-3">The Name</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-12">
            Every word is a commitment.
          </h2>
          <div className="space-y-5">
            {NAME_PARTS.map(({ letter, word, icon, color, bg, body }) => (
              <div
                key={letter}
                className="flex gap-6 rounded-2xl p-6 border"
                style={{ backgroundColor: bg, borderColor: color + "30" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-heading text-2xl font-bold shrink-0"
                  style={{ backgroundColor: color + "20", color }}
                >
                  {letter}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{icon}</span>
                    <h3 className="font-heading text-xl font-bold text-charcoal">{word}</h3>
                  </div>
                  <p className="text-charcoal/65 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY COALS EXISTS ─────────────────────────────────────────────────── */}
      <div
        className="py-20 px-4"
        style={{ background: "linear-gradient(160deg, #071e15 0%, #0a1f35 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-green-light/60 mb-3">Why We Exist</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-10">
            Events clean beaches.<br />
            <span className="text-green-light">Systems keep them clean.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-gold text-3xl font-heading font-bold mb-1">3.1M</p>
              <p className="text-white/40 text-sm">tons of plastic waste Bangladesh generates annually</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-blue-light text-3xl font-heading font-bold mb-1">Top 10</p>
              <p className="text-white/40 text-sm">countries contributing to ocean plastic pollution</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-green-light text-3xl font-heading font-bold mb-1">580 km</p>
              <p className="text-white/40 text-sm">of Bangladeshi coastline at risk from plastic pollution</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <h3 className="font-heading text-lg font-bold text-white mb-3">The Gap</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Thousands of beach cleanup events happen every year globally.
                Most leave no lasting infrastructure. No waste sorting systems.
                No policy change. No community capacity. Just a cleaner beach
                for a few weeks — until the next tide brings more.
              </p>
            </div>
            <div className="bg-green/10 border border-green/20 rounded-2xl p-7">
              <h3 className="font-heading text-lg font-bold text-green-light mb-3">The COALS Answer</h3>
              <p className="text-white/55 text-sm leading-relaxed">
                COALS treats every cleanup event as a systems prototype.
                We collect data. We build recycling partnerships. We train
                local coordinators. We report to governments. We replicate.
                The goal is not a clean beach — it is a clean system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── THE FOUNDING EVENT ───────────────────────────────────────────────── */}
      <div className="py-20 px-4 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-teal mb-3">The Founding Event</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Plastic-Free Kuakata 2026.
          </h2>
          <p className="text-charcoal/65 text-lg max-w-2xl mb-10 leading-relaxed">
            Not a charity event. Not a PR stunt. A foundational act —
            the moment COALS proves its model works before asking the world to believe in it.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { value: "500+", label: "Volunteers" },
              { value: "10 km", label: "Coastline covered" },
              { value: "June 5", label: "World Environment Day" },
              { value: "UNEP", label: "Registered event" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 text-center border border-charcoal/5 shadow-sm">
                <p className="font-heading text-2xl md:text-3xl font-bold text-teal mb-1">{value}</p>
                <p className="text-charcoal/45 text-xs">{label}</p>
              </div>
            ))}
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-teal text-white px-7 py-3.5 rounded-full font-semibold hover:bg-teal-dark transition-colors"
          >
            ← See the full event site
          </Link>
        </div>
      </div>

      {/* ── THE MODEL ────────────────────────────────────────────────────────── */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-teal mb-3">How COALS Works</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-12">
            Five steps. Endlessly repeatable.
          </h2>
          <div className="space-y-4">
            {MODEL_STEPS.map(({ n, title, body, color }) => (
              <div key={n} className="flex gap-5 items-start p-6 rounded-2xl border border-charcoal/5 hover:shadow-sm transition-shadow">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-heading font-bold text-sm shrink-0 text-white"
                  style={{ backgroundColor: color }}
                >
                  {n}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-1">{title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SDG ALIGNMENT ────────────────────────────────────────────────────── */}
      <div className="py-20 px-4 bg-blue-faded">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-blue-dark mb-3">UN Alignment</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Built for the Global Goals.
          </h2>
          <p className="text-charcoal/60 mb-10 max-w-xl">
            COALS is registered under UNEP&apos;s World Environment Day global
            initiative and directly addresses three UN Sustainable Development Goals.
            The Global Plastics Treaty (2024) created the legal framework.
            COALS builds the local execution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SDG_GOALS.map(({ number, title, color, bg, desc }) => (
              <div
                key={number}
                className="rounded-2xl p-7 border"
                style={{ backgroundColor: bg, borderColor: color + "30" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-heading text-2xl font-bold mb-4 text-white"
                  style={{ backgroundColor: color }}
                >
                  {number}
                </div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">SDG {number}: {title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FUTURE VISION ────────────────────────────────────────────────────── */}
      <div className="py-20 px-4 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-teal mb-3">What Comes Next</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-12">
            June 5 is the beginning.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FUTURE.map(({ icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-charcoal/5 shadow-sm">
                <span className="text-3xl mb-3 block">{icon}</span>
                <h3 className="font-heading text-base font-bold text-charcoal mb-2">{title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOUNDING PARTNERS ────────────────────────────────────────────────── */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-teal mb-3">Founding Community Partners</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
            The people who built the first wave.
          </h2>
          <p className="text-charcoal/60 mb-10 max-w-xl">
            COALS was born from the collaboration of two Bangladesh-based organizations
            who believed a beach cleanup could be something more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-green-faded border border-green-light/40 rounded-2xl p-8">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-1">Active Mind</h3>
              <p className="text-teal text-sm font-medium mb-3">Youth-led. Community-powered.</p>
              <p className="text-charcoal/65 text-sm leading-relaxed">
                A youth-led organization dedicated to leadership development, community
                engagement, and social impact across Bangladesh. Active Mind brings the
                volunteer network, community relationships, and youth energy that make
                mass mobilization possible.
              </p>
            </div>
            <div className="bg-blue-faded border border-blue-light/40 rounded-2xl p-8">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-1">QualFix</h3>
              <p className="text-blue-dark text-sm font-medium mb-3">Technology for purpose-led change.</p>
              <p className="text-charcoal/65 text-sm leading-relaxed">
                A technology and innovation company supporting community-driven solutions
                for environmental and social challenges. QualFix provides the digital
                infrastructure, data systems, and creative strategy that turn a cleanup
                into a foundation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── GET INVOLVED CTA ─────────────────────────────────────────────────── */}
      <div
        className="py-20 px-4"
        style={{ background: "linear-gradient(160deg, #071e15 0%, #0a1f35 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.25em] uppercase font-semibold text-green-light/60 mb-4">
            Be Part of the Beginning
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            COALS is being built right now.
          </h2>
          <p className="text-white/55 text-base leading-relaxed mb-10">
            You can be one of the founding 500. Or a founding sponsor. Or a founding
            partner organization. The foundation has not yet been built — which means
            your name can be on the first stone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={SITE.forms.volunteer}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coral text-white px-7 py-4 rounded-full font-semibold hover:bg-coral-dark transition-colors text-center"
            >
              🙋 Join as a Founding Volunteer
            </Link>
            <Link
              href={SITE.forms.sponsor}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-white px-7 py-4 rounded-full font-semibold hover:bg-gold-dark transition-colors text-center"
            >
              🤝 Become a Founding Sponsor
            </Link>
            <a
              href={SOCIAL.coals.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-light/30 text-blue-light/70 hover:text-blue-light px-7 py-4 rounded-full font-semibold transition-colors text-center"
            >
              Follow @COALSglobal
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
