import CountdownTimer from "./CountdownTimer";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background — replace style with background-image url('/images/kuakata-hero.jpg') when photo is ready */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #04120c 0%, #061e13 15%, #0a3322 35%, #0B6E4F 60%, #1a7a58 75%, #c8762a 90%, #e8c97a 100%)",
        }}
      />
      {/* Atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 pb-16">
        {/* WED badge */}
        <div className="inline-flex flex-wrap justify-center items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-xs sm:text-sm font-medium mb-8">
          <span>🌍</span>
          <span className="hidden sm:inline">World Environment Day 2026 · June 5 · Bangladesh</span>
          <span className="sm:hidden">World Environment Day 2026</span>
          <span className="sm:hidden">· June 5 · Bangladesh</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-6">
          Save the Daughter of the Sea.
        </h1>

        {/* Subheadline */}
        <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Kuakata — one of the world&apos;s only beaches where you can watch both
          sunrise and sunset — is disappearing under plastic. On June 5, 2026,
          we fight back.
        </p>

        {/* Countdown */}
        <div className="mb-10">
          <CountdownTimer />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#volunteer"
            className="bg-coral hover:bg-coral-dark text-white px-8 py-4 rounded-full text-base font-semibold transition-colors shadow-lg"
          >
            🙋 Become a Volunteer
          </a>
          <a
            href="#sponsors"
            className="border-2 border-white/70 text-white hover:bg-white/10 px-8 py-4 rounded-full text-base font-semibold transition-colors"
          >
            🤝 Become a Sponsor
          </a>
        </div>
      </div>

      {/* Wave SVG transition to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20 fill-teal"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce-arrow">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
