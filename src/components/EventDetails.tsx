const CARDS = [
  {
    icon: "📅",
    title: "Date & Time",
    lines: [
      "Friday, June 5, 2026",
      "Registration: 7:00 AM",
      "Clean-up: 8:00 AM – 12:00 PM",
      "Closing Ceremony: 12:30 PM",
    ],
  },
  {
    icon: "📍",
    title: "Location",
    lines: [
      "Kuakata Beach, Zero Point",
      "Kalapara Upazila, Patuakhali District",
      "~300 km from Dhaka via Padma Bridge",
    ],
  },
  {
    icon: "👥",
    title: "Who Can Join",
    lines: [
      "Students & youth volunteers",
      "Environmental activists & NGOs",
      "Corporate CSR teams",
      "Journalists & content creators",
      "Anyone who cares",
    ],
  },
  {
    icon: "🎯",
    title: "What We'll Do",
    lines: [
      "Plastic & ghost net collection",
      "Waste sorting by material type",
      "Packaging in biodegradable bags",
      "Handover to recycling partners",
      "Live impact data recording",
    ],
  },
];

const TIMELINE = [
  { time: "7:00 AM", label: "Registration & briefing" },
  { time: "8:00 AM", label: "Clean-up begins" },
  { time: "10:00 AM", label: "Midpoint checkpoint" },
  { time: "12:00 PM", label: "Wrap-up & weigh-in" },
  { time: "12:30 PM", label: "Closing ceremony" },
];

export default function EventDetails() {
  return (
    <section id="event" className="bg-offwhite py-20 md:py-28 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-teal mb-4">
          The Event
        </p>

        {/* Headline */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-16 leading-tight">
          June 5, 2026. Kuakata Beach.{" "}
          <span className="text-teal">Be there.</span>
        </h2>

        {/* 2×2 detail cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {CARDS.map(({ icon, title, lines }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-charcoal/5"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-heading font-bold text-charcoal mb-3">
                {title}
              </h3>
              <ul className="space-y-1">
                {lines.map((line) => (
                  <li key={line} className="text-sm text-charcoal/65 leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5 mb-8">
          <h3 className="font-heading font-bold text-charcoal mb-8 text-lg">
            Day Schedule
          </h3>
          {/* Desktop timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Line */}
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-teal/20" />
              <div className="flex justify-between relative">
                {TIMELINE.map(({ time, label }, i) => (
                  <div key={i} className="flex flex-col items-center text-center max-w-[120px]">
                    <div className="w-3 h-3 rounded-full bg-teal border-2 border-white shadow mb-3 relative z-10" />
                    <span className="text-teal font-bold text-sm">{time}</span>
                    <span className="text-charcoal/60 text-xs mt-1 leading-snug">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden space-y-4">
            {TIMELINE.map(({ time, label }, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-teal shrink-0 mt-1" />
                  {i < TIMELINE.length - 1 && (
                    <div className="w-0.5 h-6 bg-teal/20 mt-1" />
                  )}
                </div>
                <div>
                  <span className="text-teal font-bold text-sm">{time}</span>
                  <span className="text-charcoal/60 text-sm ml-2">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel tip */}
        <div className="bg-teal rounded-2xl p-6 flex gap-4 items-start">
          <span className="text-3xl shrink-0">🚌</span>
          <div>
            <p className="text-white font-semibold mb-1">Getting There</p>
            <p className="text-white/75 text-sm leading-relaxed">
              Kuakata is now easily accessible from Dhaka via the Padma Bridge
              in approximately 5–6 hours — no more ferry delays. Group transport
              coordination available for registered volunteer teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
