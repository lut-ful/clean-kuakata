import Image from "next/image";
import { SPONSORS, TIER_META, type Sponsor, type SponsorTier } from "@/config/sponsors";

const TIER_ORDER: SponsorTier[] = ["platinum", "gold", "silver", "inkind"];

function SponsorCard({
  sponsor,
  size = "md",
}: {
  sponsor: Sponsor;
  size?: "lg" | "md" | "sm";
}) {
  const meta = TIER_META[sponsor.tier];

  const inner = (
    <div
      className={`relative rounded-2xl flex flex-col items-center justify-center gap-3 border transition-shadow hover:shadow-lg
        ${size === "lg" ? "px-16 py-10" : size === "md" ? "px-8 py-7" : "px-6 py-5"}
        ${sponsor.demo ? "border-dashed" : "border-solid"}`}
      style={{ borderColor: meta.accentHex + "44", backgroundColor: meta.bgHex }}
    >
      {/* Demo watermark */}
      {sponsor.demo && (
        <span className="absolute top-2 right-3 text-[10px] font-semibold uppercase tracking-widest opacity-30"
          style={{ color: meta.accentHex }}>
          demo
        </span>
      )}

      {/* Logo or name */}
      {sponsor.logo ? (
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={size === "lg" ? 240 : size === "md" ? 180 : 140}
          height={size === "lg" ? 80 : 60}
          className="object-contain"
        />
      ) : (
        <span
          className={`font-heading font-bold text-charcoal leading-tight text-center
            ${size === "lg" ? "text-2xl" : size === "md" ? "text-xl" : "text-base"}`}
        >
          {sponsor.name}
        </span>
      )}

      {sponsor.tagline && (
        <p className="text-xs text-center opacity-60 leading-snug max-w-50"
          style={{ color: meta.accentHex }}>
          {sponsor.tagline}
        </p>
      )}
    </div>
  );

  return sponsor.url && sponsor.url !== "#" ? (
    <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

export default function SponsorsDisplay() {
  const confirmed = SPONSORS.filter((s) => !s.demo);
  const all = SPONSORS;
  const hasAny = all.length > 0;
  const hasConfirmed = confirmed.length > 0;

  const byTier = (tier: SponsorTier) => all.filter((s) => s.tier === tier);

  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-sand mb-3 text-center">
          Our Sponsors
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-3">
          The organisations making this possible.
        </h2>
        {!hasConfirmed && (
          <p className="text-white/30 text-xs text-center mb-10">
            Showing demo layout — update{" "}
            {/* <code className="text-sand/50">src/config/sponsors.ts</code> to add confirmed sponsors. */}
            <code className="text-sand/50">confirmed sponsors  </code> will be added.
          </p>
        )}
        {!hasConfirmed && hasAny && <div className="mb-8" />}

        {hasAny ? (
          <div className="space-y-12">
            {TIER_ORDER.map((tier) => {
              const sponsors = byTier(tier);
              if (sponsors.length === 0) return null;
              const meta = TIER_META[tier];
              return (
                <div key={tier}>
                  <p className="text-xs uppercase tracking-widest text-center mb-6 font-semibold"
                    style={{ color: meta.accentHex }}>
                    {meta.label}
                  </p>
                  <div className={`flex flex-wrap justify-center gap-5
                    ${tier === "platinum" ? "gap-6" : ""}`}>
                    {sponsors.map((s) => (
                      <SponsorCard
                        key={s.id}
                        sponsor={s}
                        size={tier === "platinum" ? "lg" : tier === "gold" ? "md" : "sm"}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center max-w-xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl px-8 py-12">
              <p className="font-heading text-white text-xl font-bold mb-3">
                Be the first brand on this beach.
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Platinum Guardian, Ocean Guardian, Shoreline Supporter, and Supply Partner
                slots are available. National press. UN-registered event.
              </p>
              <a href="#sponsors" className="inline-block bg-sand text-charcoal px-6 py-3 rounded-full font-semibold text-sm hover:bg-sand/90 transition-colors">
                → View sponsorship packages
              </a>
            </div>
          </div>
        )}

        {/* Become a sponsor CTA */}
        <div className="mt-14 text-center">
          <a
            href="#sponsors"
            className="inline-flex items-center gap-2 border border-white/20 text-white/60 hover:text-white hover:border-white/40 px-5 py-2.5 rounded-full text-sm transition-colors"
          >
            View sponsorship packages →
          </a>
        </div>
      </div>
    </section>
  );
}
