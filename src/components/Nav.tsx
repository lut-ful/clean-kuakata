"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SPONSORS, getSponsorLabel } from "@/config/sponsors";
import CoalsLogo from "@/components/CoalsLogo";

type NavLink = { label: string; href: string; page?: boolean };

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Crisis", href: "#crisis" },
  { label: "Event", href: "#event" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Activities", href: "#activities" },
  { label: "COALS", href: "/coals", page: true },
];

const titleSponsor = SPONSORS.find((s) => !s.demo && s.tier === "platinum") ?? null;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-teal shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <a href="#" className="flex flex-col justify-center shrink-0">
            <span className="text-white text-[20px] font-heading font-bold leading-tight">
              🌊 CleanKuakata
            </span>
            <span className="text-sand/80 text-[11px] leading-tight tracking-wide hidden sm:block">
              Plastic-Free Kuakata 2026
            </span>
          </a>

          {/* Desktop nav links — xl+ only */}
          <div className="hidden xl:flex items-center gap-5">
            {NAV_LINKS.map(({ label, href, page }) =>
              page ? (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-1.5 text-sand/80 hover:text-sand text-[14px] font-semibold transition-colors whitespace-nowrap border-b border-sand/30 hover:border-sand/70 pb-0.5"
                >
                  <CoalsLogo variant="icon" primaryColor="#F7CE89" secondaryColor="#A89050" iconSize={16} />
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  className="text-white/85 hover:text-sand text-[14px] font-medium transition-colors whitespace-nowrap"
                >
                  {label}
                </a>
              )
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Platinum sponsor badge — xl+ only */}
            {titleSponsor && (
              <a
                href={titleSponsor.url && titleSponsor.url !== "#" ? titleSponsor.url : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-2 border-l border-white/20 pl-4"
              >
                <span className="text-white/70 text-[10px] uppercase tracking-widest font-semibold whitespace-nowrap">
                  {getSponsorLabel(titleSponsor)}
                </span>
                {titleSponsor.logo ? (
                  <Image
                    src={titleSponsor.logo}
                    alt={titleSponsor.name}
                    width={68}
                    height={20}
                    className="object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <span className="text-sand/80 font-heading font-bold text-sm hover:text-sand transition-colors whitespace-nowrap">
                    {titleSponsor.name}
                  </span>
                )}
              </a>
            )}

            {/* CTA */}
            <a
              href="#volunteer"
              className="bg-coral text-white rounded-full font-semibold hover:bg-coral-dark transition-colors whitespace-nowrap px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
            >
              <span className="xl:hidden">Join →</span>
              <span className="hidden xl:inline">Join the Movement →</span>
            </a>

            {/* Hamburger — below xl */}
            <button
              className="xl:hidden text-white p-1"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile / tablet menu */}
        {menuOpen && (
          <div className="xl:hidden pb-4 pt-1 flex flex-col">
            {NAV_LINKS.map(({ label, href, page }) =>
              page ? (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-sand/90 hover:text-sand hover:bg-white/5 text-[15px] font-semibold transition-colors px-3 py-3 rounded-lg"
                >
                  <CoalsLogo variant="icon" primaryColor="#F7CE89" secondaryColor="#A89050" iconSize={18} />
                  {label} ↗
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/90 hover:text-sand hover:bg-white/5 text-[15px] font-medium transition-colors px-3 py-3 rounded-lg"
                >
                  {label}
                </a>
              )
            )}
            {/* Platinum sponsor in mobile menu */}
            {titleSponsor && (
              <div className="mt-2 pt-3 border-t border-white/10 px-3 flex items-center gap-2">
                <span className="text-white/65 text-[10px] uppercase tracking-widest font-semibold">
                  {getSponsorLabel(titleSponsor)}
                </span>
                {titleSponsor.logo ? (
                  <Image
                    src={titleSponsor.logo}
                    alt={titleSponsor.name}
                    width={64}
                    height={20}
                    className="object-contain brightness-0 invert opacity-60"
                  />
                ) : (
                  <span className="text-sand/70 font-heading font-bold text-sm">
                    {titleSponsor.name}
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
