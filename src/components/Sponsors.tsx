const TIERS = [
  {
    name: "Platinum Guardian",
    badge: "Title Sponsor — 1 slot only",
    price: "৳ 3,00,000 – 5,00,000",
    accent: "#D4A017",
    accentBg: "#fdf8ec",
    perks: [
      '"Presented by [Your Brand]" on every piece of event communication',
      "Exclusive title naming rights",
      "Logo: website hero, all banners, T-shirts (chest print), stage backdrop",
      "Named co-organizer in ALL press releases & media coverage",
      "2-minute brand video at closing ceremony",
      "Dedicated feature post (Facebook + Instagram, 30,000+ reach)",
      "Logo in UNEP event registration — international visibility",
      "Co-branded post-event impact report for your CSR team",
      "10 branded volunteer T-shirts",
      "Framed Certificate of Environmental Partnership",
    ],
  },
  {
    name: "Ocean Guardian",
    badge: "Impact Partner — 3 slots",
    price: "৳ 1,00,000 – 2,00,000",
    accent: "#0B6E4F",
    accentBg: "#f0faf5",
    perks: [
      "Logo on all banners, T-shirts (back print), and digital materials",
      "Named in all press releases as supporting partner",
      "1 dedicated social media post (Facebook + Instagram)",
      "Logo on event website — prominent placement",
      "Product/supply category exclusivity (e.g., Official Water Partner)",
      "5 branded volunteer T-shirts",
      "Co-branded post-event impact report mention",
      "Certificate of Environmental Partnership",
    ],
  },
  {
    name: "Shoreline Supporter",
    badge: "Community Partner — open slots",
    price: "৳ 25,000 – 75,000",
    accent: "#D84040",
    accentBg: "#fef5f5",
    perks: [
      "Logo on event website and digital materials",
      "Social media mention (tag + story)",
      "Logo on event day backdrop / signage",
      "Certificate of Environmental Support",
      "Ideal for: local hotels, restaurants, travel agencies, tourism operators",
    ],
  },
  {
    name: "Supply Partner",
    badge: "In-Kind Sponsor — open",
    price: "Donate goods, not money",
    accent: "#6B7280",
    accentBg: "#f9fafb",
    perks: [
      "Drinking water (1,000+ bottles)",
      "Biodegradable collection bags & gloves",
      "Volunteer caps / hats",
      "First aid supplies",
      "Transportation for waste logistics",
      "Snacks & refreshments",
      "Photography / videography services",
    ],
    supplyNote:
      "In exchange: logo on supplied items, social mention, certificate, and full event-day media credit.",
  },
];

const PARTNER_LOGOS = [
  "BRAC Bank",
  "Grameenphone",
  "Aarong",
  "Shanta Holdings",
  "UNDP",
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-offwhite py-20 md:py-28 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-teal mb-4">
          Become a Sponsor
        </p>

        {/* Headline */}
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
          Your brand. Bangladesh&apos;s coastline.{" "}
          <span className="text-teal">A legacy worth having.</span>
        </h2>

        <p className="text-charcoal/70 text-lg max-w-2xl mb-6 leading-relaxed">
          Corporate partners are not just sponsors — they are co-authors of this
          movement. Your support powers every biodegradable bag, every
          volunteer&apos;s breakfast, every kilogram of plastic removed from the
          Bay of Bengal.
        </p>
        <p className="text-charcoal/70 text-base max-w-2xl mb-16 leading-relaxed">
          And your visibility? National press. Social media reach. A
          UN-registered event. Bangladesh&apos;s most environmentally conscious
          consumers.
        </p>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">
          {TIERS.map(({ name, badge, price, accent, accentBg, perks, supplyNote }) => (
            <div
              key={name}
              className="rounded-2xl overflow-hidden border shadow-sm flex flex-col"
              style={{ borderColor: accent + "33", backgroundColor: accentBg }}
            >
              {/* Tier header */}
              <div
                className="px-6 py-5 border-b"
                style={{ borderColor: accent + "33" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: accent }}
                >
                  {badge}
                </p>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-1">
                  {name}
                </h3>
                <p className="font-semibold text-sm" style={{ color: accent }}>
                  {price}
                </p>
              </div>

              {/* Perks */}
              <div className="px-6 py-5 flex-1">
                <ul className="space-y-2">
                  {perks.map((perk, i) => (
                    <li key={i} className="flex gap-2 text-sm text-charcoal/70 leading-snug">
                      <span className="shrink-0" style={{ color: accent }}>
                        ✦
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
                {supplyNote && (
                  <p className="mt-4 text-xs text-charcoal/60 italic border-t border-charcoal/10 pt-4">
                    {supplyNote}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA box */}
        <div className="bg-teal rounded-2xl p-8 md:p-10 mb-16">
          <h3 className="font-heading text-2xl font-bold text-white mb-2">
            Ready to partner?
          </h3>
          <p className="text-white/70 text-sm mb-6">
            We respond within 48 hours. Sponsorship proposal PDF available on
            request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Sponsor form link — replace href with real Tally / Google Form URL */}
            <a
              href="#"
              className="bg-sand text-charcoal px-6 py-3 rounded-full font-semibold text-sm hover:bg-sand/90 transition-colors text-center"
            >
              → Submit Sponsorship Interest Form
            </a>
            <a
              href="mailto:hello@plasticfreekuakata.com"
              className="border-2 border-white/50 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors text-center"
            >
              📧 General enquiries
            </a>
          </div>
        </div>

        {/* Partner logo strip — commented out until partners are confirmed
        <div>
          <p className="text-xs tracking-widest uppercase text-charcoal/40 mb-6 text-center">
            Our Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {PARTNER_LOGOS.map((name) => (
              <div
                key={name}
                className="bg-white rounded-lg px-6 py-3 text-charcoal/40 font-semibold text-sm border border-charcoal/8 hover:text-charcoal/60 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
