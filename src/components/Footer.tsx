import { SOCIAL } from "@/config/social";
import { SITE } from "@/config/site";

const QUICK_LINKS = [
  { label: "About CleanKuakata", href: "#about" },
  { label: "The Crisis", href: "#crisis" },
  { label: "Event Details", href: "#event" },
  { label: "Become a Sponsor", href: SITE.forms.sponsor },
  { label: "Volunteer Sign-Up", href: SITE.forms.volunteer },
  { label: "Press & Media", href: "#media" },
  { label: "Recent Activities", href: "#activities" },
];

const HASHTAGS = ["#PlasticFreeKuakata", "#CleanKuakata", "#SaveKuakata", "#NowForClimate"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-heading text-xl font-bold mb-0.5">
              🌊 CleanKuakata
            </p>
            <p className="text-sand/70 text-xs mb-3 tracking-wide">
              Plastic-Free Kuakata 2026
            </p>
            <p className="text-white/40 text-sm mb-5 leading-relaxed">
              June 5 · Kuakata Beach · Bangladesh
              <br />
              Registered on worldenvironmentday.global
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {HASHTAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-teal text-xs font-medium hover:text-sand transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Social links */}
            <div className="flex flex-col gap-2">
              <a
                href={SOCIAL.facebook.page}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>📘</span> Facebook Page
                <span className="text-white/25 text-xs">{SOCIAL.facebook.handle}</span>
              </a>
              <a
                href={SOCIAL.facebook.event}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>📅</span> Facebook Event
              </a>
              <a
                href={SOCIAL.instagram.page}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>📷</span> Instagram
                <span className="text-white/25 text-xs">{SOCIAL.instagram.handle}</span>
              </a>
              <a
                href={SOCIAL.whatsapp.chatUrl}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>💬</span> WhatsApp
                <span className="text-white/25 text-xs">{SOCIAL.whatsapp.label}</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/40 text-xs uppercase tracking-wider mb-4">
              Contact
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-white/30 text-xs mb-1">General Enquiries</p>
                <a
                  href={`mailto:${SITE.emails.general}`}
                  className="text-white/60 hover:text-sand text-sm transition-colors"
                >
                  {SITE.emails.general}
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-1">Media & Press</p>
                <a
                  href={`mailto:${SITE.emails.media}`}
                  className="text-white/60 hover:text-sand text-sm transition-colors"
                >
                  {SITE.emails.media}
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-1">Volunteer Registration</p>
                <a
                  href={SITE.forms.volunteer}
                  className="text-teal hover:text-sand text-sm transition-colors"
                >
                  → Fill out the volunteer form
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-1">Sponsorship Enquiries</p>
                <a
                  href={SITE.forms.sponsor}
                  className="text-teal hover:text-sand text-sm transition-colors"
                >
                  → Fill out the sponsor form
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-white/30 text-xs">
          <p>© 2026 CleanKuakata · Plastic-Free Kuakata 2026</p>
          <p>A community-powered environmental initiative · All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
