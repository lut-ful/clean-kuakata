import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import { SPONSORS, TIER_META, getSponsorLabel, type Sponsor } from "@/config/sponsors";

const confirmed = SPONSORS.filter((s) => !s.demo);
const platinum = confirmed.filter((s) => s.tier === "platinum");
const gold     = confirmed.filter((s) => s.tier === "gold");
const bottom   = confirmed.filter((s) => s.tier === "silver" || s.tier === "inkind");

function SponsorName({ sponsor, className = "" }: { sponsor: Sponsor; className?: string }) {
  const accent = TIER_META[sponsor.tier].accentHex;
  if (sponsor.logo) {
    return (
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={96}
        height={28}
        className={`object-contain brightness-0 invert ${className}`}
      />
    );
  }
  return (
    <span className={`font-heading font-bold ${className}`} style={{ color: accent }}>
      {sponsor.name}
    </span>
  );
}

function SponsorLink({ sponsor, children }: { sponsor: Sponsor; children: React.ReactNode }) {
  return sponsor.url && sponsor.url !== "#" ? (
    <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
      {children}
    </a>
  ) : <span>{children}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #04120c 0%, #061e13 15%, #0a3322 35%, #0B6E4F 60%, #1a7a58 75%, #c8762a 90%, #e8c97a 100%)",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/40" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 pb-16 w-full">

        {/* WED badge */}
        <div className="inline-flex flex-wrap justify-center items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-xs sm:text-sm font-medium mb-6">
          <span>🌍</span>
          <span className="hidden sm:inline">World Environment Day 2026 · June 5 · Bangladesh</span>
          <span className="sm:hidden">World Environment Day 2026</span>
          <span className="sm:hidden">· June 5 · Bangladesh</span>
        </div>

        {/* ── ZONE 1: PLATINUM ─────────────────────────────────────────────────── */}
        {/* Between badge and headline — title card position, most prominent */}
        {platinum.length > 0 && (
          <div className="mb-8">
            {platinum.map((s) => (
              <SponsorLink key={s.id} sponsor={s}>
                <div className="inline-flex items-center gap-3 bg-[#D4A017]/10 border border-[#D4A017]/25 backdrop-blur-sm rounded-full px-5 py-2.5">
                  <span className="text-[#D4A017]/70 text-[10px] uppercase tracking-[0.2em] font-semibold whitespace-nowrap">
                    {getSponsorLabel(s)}
                  </span>
                  <span className="w-px h-3 bg-[#D4A017]/30" />
                  <SponsorName sponsor={s} className="text-base opacity-90" />
                </div>
              </SponsorLink>
            ))}
          </div>
        )}

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

        {/* ── ZONE 2: GOLD ─────────────────────────────────────────────────────── */}
        {/* Below CTAs — secondary prominence, clearly branded */}
        {gold.length > 0 && (
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
              Co-sponsored by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {gold.map((s) => (
                <SponsorLink key={s.id} sponsor={s}>
                  <div className="flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity">
                    {s.presenterLabel && (
                      <span className="text-white/30 text-[9px] uppercase tracking-widest font-semibold">
                        {s.presenterLabel}
                      </span>
                    )}
                    <SponsorName sponsor={s} className="text-sm opacity-90" />
                  </div>
                </SponsorLink>
              ))}
            </div>
          </div>
        )}

        {/* ── ZONE 3: SILVER + IN-KIND ─────────────────────────────────────────── */}
        {/* Thin credits line at very bottom — like a film credit roll */}
        {bottom.length > 0 && (
          <div className={`${gold.length > 0 ? "mt-5" : "mt-10 pt-8 border-t border-white/10"}`}>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              {bottom.map((s, i) => (
                <span key={s.id} className="flex items-center gap-2 text-white/30 text-xs">
                  {i > 0 && <span className="text-white/15">·</span>}
                  <span className="text-white/20 text-[9px] uppercase tracking-widest font-semibold">
                    {getSponsorLabel(s)}
                  </span>
                  <SponsorName sponsor={s} className="text-xs opacity-60" />
                </span>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20 fill-teal">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce-arrow">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
