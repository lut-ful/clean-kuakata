const PILLARS = [
  {
    icon: "🧹",
    title: "The Clean-Up",
    body: "Organized teams across designated beach zones collecting, sorting, and recycling plastic and marine waste. Every kilogram measured. Every zone mapped.",
  },
  {
    icon: "📢",
    title: "The Awareness",
    body: "School outreach, national media coverage, social media campaigns, and community workshops — building lasting behavior change beyond one day.",
  },
  {
    icon: "🤝",
    title: "The Partnership",
    body: "Youth, corporations, NGOs, government bodies, and international organizations united under one mission — Bangladesh's most coordinated environmental action.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-offwhite py-20 md:py-28 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-teal mb-4">
          What Is This
        </p>

        {/* Headline */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal max-w-2xl mb-8 leading-tight">
          Bangladesh&apos;s Biggest Beach Clean-Up.{" "}
          <span className="text-teal">Not just an event — a movement.</span>
        </h2>

        {/* Body */}
        <div className="max-w-3xl space-y-4 text-charcoal/75 text-base md:text-lg leading-relaxed mb-16">
          <p>
            The Plastic-Free Kuakata Initiative is a national-scale,
            community-powered environmental action organized by{" "}
            <strong className="text-charcoal">Active Mind</strong> and{" "}
            <strong className="text-charcoal">QualFix</strong> on World
            Environment Day, June 5, 2026.
          </p>
          <p>
            Kuakata — locally known as{" "}
            <em>&ldquo;Shagor Konna&rdquo;</em> (Daughter of the Sea) — is one
            of the rarest beaches on Earth: the only place in Bangladesh where
            visitors witness both sunrise and sunset from the same shore. It
            sits beside the Gangamati and Fatra Reserved Mangrove Forests, home
            to rare dolphins, migratory birds, and the endangered red crab.
          </p>
          <p>
            But today, plastic bottles, ghost fishing nets, polythene bags, and
            construction debris choke its shoreline. Tourist numbers are
            falling. Fishermen&apos;s livelihoods are shrinking. The ecosystem
            is under threat.
          </p>
          <p className="font-semibold text-charcoal">This is our answer.</p>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
                {title}
              </h3>
              <p className="text-charcoal/65 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
