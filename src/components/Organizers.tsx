import Image from "next/image";
import { ORGANIZERS, COLLABORATORS } from "@/config/organizers";

export default function Organizers() {
  const activeOrgs = ORGANIZERS.filter((o) => o.active);
  const activeCollabs = COLLABORATORS.filter((c) => c.active);

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.25em] uppercase font-semibold text-teal mb-4">
          Organized By
        </p>

        {/* Org cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {activeOrgs.map((org) => {
            const card = (
              <div className="bg-offwhite rounded-2xl p-8 border border-charcoal/5 h-full">
                <div className="flex items-center gap-3 mb-4">
                  {org.logo ? (
                    <Image
                      src={org.logo}
                      alt={org.name}
                      width={56}
                      height={56}
                      className="object-contain rounded-xl"
                    />
                  ) : (
                    <span className="text-4xl">{org.icon}</span>
                  )}
                  <div>
                    <h3 className="font-heading text-xl font-bold text-charcoal">
                      {org.name}
                    </h3>
                    <p className="text-teal text-sm font-medium">{org.tagline}</p>
                  </div>
                </div>
                <p className="text-charcoal/65 text-sm leading-relaxed">{org.bio}</p>
              </div>
            );

            return org.url ? (
              <a key={org.id} href={org.url} target="_blank" rel="noopener noreferrer" className="block">
                {card}
              </a>
            ) : (
              <div key={org.id}>{card}</div>
            );
          })}
        </div>

        {/* Collaborators strip */}
        {activeCollabs.length > 0 && (
          <div className="border-t border-charcoal/8 pt-8">
            <p className="text-xs text-charcoal/40 uppercase tracking-wider mb-4">
              In Collaboration With
            </p>
            <div className="flex flex-wrap gap-3">
              {activeCollabs.map((collab) => {
                const chip = (
                  <span className="bg-offwhite border border-charcoal/10 rounded-full px-4 py-2 text-sm text-charcoal/60 flex items-center gap-2">
                    {collab.logo && (
                      <Image src={collab.logo} alt={collab.name} width={20} height={20} className="object-contain" />
                    )}
                    {collab.name}
                  </span>
                );
                return collab.url ? (
                  <a key={collab.id} href={collab.url} target="_blank" rel="noopener noreferrer">
                    {chip}
                  </a>
                ) : (
                  <div key={collab.id}>{chip}</div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
