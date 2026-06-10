const areas = [
  { city: "Tampa", desc: "Hillsborough County & surrounding areas" },
  { city: "Miami", desc: "Miami-Dade County" },
  { city: "Fort Lauderdale", desc: "Broward County" },
  { city: "West Palm Beach", desc: "Palm Beach County" },
  { city: "Orlando", desc: "Orange County & Central Florida" },
  { city: "Boca Raton", desc: "South Palm Beach County" },
  { city: "Naples", desc: "Collier County" },
  { city: "Sarasota", desc: "Sarasota & Manatee Counties" },
  { city: "Clearwater", desc: "Pinellas County" },
  { city: "St. Petersburg", desc: "Pinellas County" },
  { city: "Lakeland", desc: "Polk County" },
  { city: "Port Charlotte", desc: "Charlotte County" },
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Where We Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Serving All of South Florida
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Based in the Tampa Bay area, Abundant Concrete Design travels throughout Florida to
              deliver our signature craftsmanship. No project is too far — we bring the same quality
              to every job, from the Gulf Coast to the Atlantic.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-orange-400">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <p className="text-zinc-300">Free estimates for all locations across our service area</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-orange-400">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <p className="text-zinc-300">Travel crews available for larger commercial projects statewide</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-orange-400">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <p className="text-zinc-300">Don&apos;t see your city? Call us — we likely serve your area</p>
              </div>
            </div>
            <a
              href="tel:8138538134"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.13 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              Call 813-853-8134
            </a>
          </div>

          {/* Right: Cities grid */}
          <div className="grid grid-cols-2 gap-4">
            {areas.map((area) => (
              <div
                key={area.city}
                className="bg-zinc-800/60 border border-zinc-700/50 rounded-xl p-5 hover:border-orange-500/40 hover:bg-zinc-800 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-orange-500 flex-shrink-0">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <span className="text-white font-bold">{area.city}</span>
                </div>
                <p className="text-zinc-500 text-xs pl-6">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
