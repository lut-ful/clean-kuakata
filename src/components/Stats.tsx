const STATS = [
  { value: "18 km", label: "Kuakata's original beach length" },
  { value: "60,000+", label: "Weekly tourists at peak season" },
  { value: "8 km", label: "Beach lost to erosion & neglect" },
  { value: "8M tons", label: "Plastic enters oceans every year" },
  { value: "June 5", label: "Our deadline. Our promise." },
];

export default function Stats() {
  return (
    <section className="bg-teal py-10 md:py-12">
      {/* gap-px + bg-white/10 creates hairline dividers that work in any grid layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/15 rounded-xl overflow-hidden">
          {STATS.map(({ value, label }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4 py-6 bg-teal col-span-1
                last:col-span-2 last:md:col-span-1"
            >
              <span className="text-sand font-heading text-3xl md:text-4xl font-bold leading-none mb-2">
                {value}
              </span>
              <span className="text-white/70 text-xs md:text-sm leading-snug max-w-32.5">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
