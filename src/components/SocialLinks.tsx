import { SOCIAL } from "@/config/social";

type SocialCard = {
  label: string;
  sub: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
};

const FacebookIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export default function SocialLinks() {
  const cards: SocialCard[] = [
    {
      label: "Follow on Facebook",
      sub: SOCIAL.facebook.handle,
      href: SOCIAL.facebook.page,
      icon: <FacebookIcon />,
      color: "text-[#1877F2]",
      bg: "bg-[#1877F2]/8 hover:bg-[#1877F2]/15",
    },
    {
      label: "RSVP to Facebook Event",
      sub: "June 5, 2026 · Plastic-Free Kuakata",
      href: SOCIAL.facebook.event,
      icon: <CalendarIcon />,
      color: "text-[#1877F2]",
      bg: "bg-[#1877F2]/8 hover:bg-[#1877F2]/15",
    },
    {
      label: "Follow on Instagram",
      sub: SOCIAL.instagram.handle,
      href: SOCIAL.instagram.page,
      icon: <InstagramIcon />,
      color: "text-[#E1306C]",
      bg: "bg-[#E1306C]/8 hover:bg-[#E1306C]/15",
    },
    {
      label: "Message on WhatsApp",
      sub: SOCIAL.whatsapp.label,
      href: SOCIAL.whatsapp.chatUrl,
      icon: <WhatsAppIcon />,
      color: "text-[#25D366]",
      bg: "bg-[#25D366]/8 hover:bg-[#25D366]/15",
    },
  ];

  return (
    <section id="connect" className="bg-offwhite py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-teal mb-3 text-center">
          Stay Connected
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal text-center mb-2">
          Follow the movement.
        </h2>
        <p className="text-charcoal/50 text-sm text-center mb-10">
          Updates, stories, and event news — across every platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map(({ label, sub, href, icon, color, bg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 rounded-2xl px-6 py-5 border border-charcoal/8 transition-colors ${bg}`}
            >
              <span className={color}>{icon}</span>
              <div className="min-w-0">
                <p className="font-semibold text-charcoal text-sm leading-snug">{label}</p>
                <p className="text-charcoal/45 text-xs truncate mt-0.5">{sub}</p>
              </div>
              <svg className="w-4 h-4 text-charcoal/25 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2">
          {["#PlasticFreeKuakata", "#CleanKuakata", "#SaveKuakata", "#NowForClimate"].map((tag) => (
            <span key={tag} className="text-teal/60 text-sm font-medium hover:text-teal transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
