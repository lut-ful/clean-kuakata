const PROBLEMS = [
  {
    icon: "🪸",
    title: "Coastal erosion",
    body: "Kilometers of beach consumed — high tide now blocks full access to the shore.",
  },
  {
    icon: "🛢️",
    title: "Plastic accumulation",
    body: "Tourism, fishing, and poor waste infrastructure coat the shoreline in plastic year-round.",
  },
  {
    icon: "🐬",
    title: "Marine biodiversity loss",
    body: "Irrawaddy dolphins, red crabs, and migratory birds on the East Asian–Australasian Flyway are vanishing.",
  },
  {
    icon: "🎣",
    title: "Fishermen's livelihoods",
    body: "Ghost fishing nets kill fish stock for decades. Thousands of fishing families face shrinking incomes.",
  },
  {
    icon: "🏨",
    title: "Tourism collapse",
    body: "Visitors leave disappointed — some swear never to return. Hotel occupancy and local revenue are falling.",
  },
  {
    icon: "🌧️",
    title: "No coordinated waste system",
    body: "Seasonal flooding washes garbage back into the Bay of Bengal. The problem resets every monsoon.",
  },
];

export default function Crisis() {
  return (
    <section id="crisis" className="bg-white py-20 md:py-28 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-teal mb-4">
          Why It Matters
        </p>

        {/* Headline */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-16 leading-tight">
          Kuakata is in crisis.{" "}
          <span className="text-coral">The data is undeniable.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Problem list */}
          <div className="space-y-6">
            {PROBLEMS.map(({ icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <span className="text-2xl shrink-0 mt-0.5">{icon}</span>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">{title}</h3>
                  <p className="text-charcoal/65 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Quote card + callout */}
          <div className="flex flex-col gap-6">
            {/* Pull quote */}
            <div className="bg-charcoal rounded-2xl p-8 border-l-4 border-teal flex-1">
              <blockquote className="font-heading text-xl md:text-2xl text-white/90 italic leading-relaxed mb-6">
                &ldquo;The beauty of Kuakata is fading under the weight of
                pollution and mismanagement. Tourists leave disillusioned.
                Locals are worried.&rdquo;
              </blockquote>
              <p className="text-white/50 text-sm">
                — bdnews24.com field report, October 2025
              </p>
            </div>

            {/* Climate injustice callout */}
            <div className="bg-teal/5 border border-teal/20 rounded-2xl p-6">
              <p className="text-teal font-semibold text-sm mb-2">
                Bangladesh&apos;s Climate Reality
              </p>
              <p className="text-charcoal/75 text-sm leading-relaxed">
                Bangladesh emits less than 0.5% of global CO₂ — yet ranks
                among the world&apos;s top 10 most climate-vulnerable nations.
                Kuakata&apos;s crisis is not a local failure. It is climate
                injustice made visible.
              </p>
            </div>
          </div>
        </div>

        {/* UNEP callout box */}
        <div className="mt-16 bg-teal/8 border border-teal/20 rounded-2xl p-8 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <span className="text-4xl shrink-0">🌐</span>
          <div>
            <p className="font-heading text-lg font-bold text-charcoal mb-1">
              Aligned with the United Nations
            </p>
            <p className="text-charcoal/70 text-sm leading-relaxed">
              World Environment Day 2026 calls on the world to act{" "}
              <strong>#NowForClimate</strong>. As nations negotiate the
              world&apos;s first binding Global Plastics Treaty, Plastic-Free
              Kuakata is Bangladesh&apos;s contribution to that global
              moment — registered on{" "}
              <span className="text-teal font-medium">
                worldenvironmentday.global
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
