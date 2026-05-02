const ROLES = [
  {
    icon: "🧹",
    title: "Clean-Up Crew",
    body: "Beach zone waste collection teams. The front-line heroes who make the numbers move.",
  },
  {
    icon: "📊",
    title: "Data Recorder",
    body: "Weigh and log collected waste by type. Your data tells the story that drives policy.",
  },
  {
    icon: "📸",
    title: "Media Volunteer",
    body: "Photo, video, and social media live coverage. Show the world what Bangladesh did.",
  },
  {
    icon: "🧭",
    title: "Zone Coordinator",
    body: "Lead a team of 10–15 volunteers. For students and youth with leadership experience.",
  },
];

const PROVIDES = [
  "Equipment & tools",
  "Biodegradable gloves & bags",
  "Volunteer T-shirt",
  "Breakfast & water",
  "Zone assignment",
  "Certificate of participation",
];

export default function Volunteer() {
  return (
    <section id="volunteer" className="bg-teal py-20 md:py-28 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-sand mb-4">
          Join the Clean-Up
        </p>

        {/* Headline */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          One day. One beach.{" "}
          <span className="text-sand">A memory you&apos;ll carry forever.</span>
        </h2>

        <p className="text-white/70 text-lg max-w-2xl mb-4 leading-relaxed">
          We need 500+ volunteers across designated beach zones on June 5, 2026.
          No experience required — just the will to show up and make a
          difference.
        </p>

        {/* What we provide */}
        <div className="flex flex-wrap gap-2 mb-16">
          {PROVIDES.map((item) => (
            <span
              key={item}
              className="bg-white/10 border border-white/20 text-white/80 rounded-full px-4 py-1.5 text-sm"
            >
              ✓ {item}
            </span>
          ))}
        </div>

        {/* Roles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {ROLES.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white/10 border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-heading font-bold text-white mb-2">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Form area */}
        <div className="bg-white rounded-2xl p-8 md:p-10">
          <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">
            Register as a Volunteer
          </h3>
          <p className="text-charcoal/60 text-sm mb-8">
            Takes 2 minutes. Confirmation email within 3 days. Briefing pack 1
            week before the event.
          </p>

          {/* Tally / Google Form embed placeholder */}
          {/* Replace the div below with: <iframe src="YOUR_TALLY_OR_GOOGLE_FORM_URL" width="100%" height="600" frameBorder="0" /> */}
          <div className="w-full bg-offwhite rounded-xl border-2 border-dashed border-teal/20 flex flex-col items-center justify-center py-16 px-8 text-center">
            <span className="text-4xl mb-4">📋</span>
            <p className="text-charcoal/60 text-sm mb-4">
              Volunteer registration form goes here.
            </p>
            <p className="text-charcoal/40 text-xs max-w-sm">
              Replace this block with a Tally.so or Google Form iframe embed —
              or replace the button href below with the form URL.
            </p>
            {/* Replace href with real Tally / Google Form URL */}
            <a
              href="#"
              className="mt-6 bg-coral text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-coral-dark transition-colors"
            >
              → Register as Volunteer
            </a>
          </div>

          {/* Notes */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm text-charcoal/60">
            <span>📩 Confirmation within 3 days of registration</span>
            <span>📋 Briefing pack shared 1 week before the event</span>
            {/* Replace number below with real WhatsApp number */}
            <a href="https://wa.me/880XXXXXXXXXX" className="hover:text-teal transition-colors">
              💬 WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
