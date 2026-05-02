"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "The Crisis", href: "#crisis" },
  { label: "Event", href: "#event" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Activities", href: "#activities" },
  { label: "SocialLinks", href: "#connect" }
];

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
            <span className="text-sand/80 text-[12px] leading-tight tracking-wide hidden sm:block">
              Plastic-Free Kuakata 2026
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-white/85 hover:text-sand text-[15px] font-medium transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* CTA — short on mobile, full on sm+ */}
            <a
              href="#volunteer"
              className="bg-coral text-white rounded-full font-semibold hover:bg-coral-dark transition-colors whitespace-nowrap px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm"
            >
              <span className="sm:hidden">Join →</span>
              <span className="hidden sm:inline">Join the Movement →</span>
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden text-white p-1"
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden pb-4 pt-1 flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-white/90 hover:text-sand hover:bg-white/5 text-[15px] font-medium transition-colors px-3 py-3 rounded-lg"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
