const PRESS_PROVIDES = [
  "Official event access and dedicated media zone",
  "Pre-event briefing and statistics pack",
  "Interview access to organizers, UNDP representatives, and local community leaders",
  "High-resolution event photos (post-event)",
  "Full impact data and post-event report",
];

export default function Media() {
  return (
    <section className="bg-offwhite py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-teal mb-4">
          For the Press
        </p>

        {/* Headline */}
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-8 leading-tight">
          Cover the story Bangladesh needs to tell.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-charcoal/70 text-base leading-relaxed mb-6">
              Plastic-Free Kuakata is a nationally significant environmental
              event aligned with the United Nations World Environment Day 2026.
              We welcome journalists, photographers, documentary filmmakers, and
              bloggers.
            </p>
            <p className="text-charcoal/70 text-sm font-semibold mb-3">
              Press accreditation provides:
            </p>
            <ul className="space-y-2">
              {PRESS_PROVIDES.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-charcoal/65 leading-relaxed"
                >
                  <span className="text-teal shrink-0">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 justify-start">
            <a
              href="#"
              className="bg-charcoal text-white px-6 py-4 rounded-xl font-semibold text-sm hover:bg-charcoal/85 transition-colors text-center"
            >
              → Download Press Kit (PDF)
            </a>
            <a
              href="mailto:media@plasticfreekuakata.com"
              className="bg-teal text-white px-6 py-4 rounded-xl font-semibold text-sm hover:bg-teal-dark transition-colors text-center"
            >
              → Request Press Accreditation
            </a>
            <div className="bg-white border border-charcoal/8 rounded-xl p-5">
              <p className="text-xs text-charcoal/50 uppercase tracking-wider mb-2">
                Media contact
              </p>
              <a
                href="mailto:media@plasticfreekuakata.com"
                className="text-teal font-medium hover:underline"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
