const projects = [
  { label: "Stamped Concrete Patio", location: "Tampa, FL", color: "from-stone-700 to-stone-600" },
  { label: "Epoxy Garage Floor", location: "Miami, FL", color: "from-slate-700 to-slate-600" },
  { label: "Pool Deck Overlay", location: "Fort Lauderdale, FL", color: "from-zinc-700 to-zinc-600" },
  { label: "Concrete Driveway", location: "Orlando, FL", color: "from-stone-800 to-stone-700" },
  { label: "Decorative Countertops", location: "West Palm Beach, FL", color: "from-neutral-700 to-neutral-600" },
  { label: "Commercial Warehouse Floor", location: "Tampa, FL", color: "from-slate-800 to-slate-700" },
  { label: "Stained Concrete Interior", location: "Boca Raton, FL", color: "from-zinc-800 to-zinc-700" },
  { label: "Outdoor Kitchen & Patio", location: "Naples, FL", color: "from-stone-700 to-stone-500" },
  { label: "Stamped Walkway", location: "Sarasota, FL", color: "from-neutral-800 to-neutral-600" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Recent Projects
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Every project is a reflection of our craftsmanship. Browse a sample of our work across
            South Florida.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.label}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              {/* Placeholder concrete texture */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-105`}
              >
                {/* Texture lines */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 10px)",
                  }}
                />
              </div>

              {/* Concrete icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="w-16 h-16 text-white/20 group-hover:text-orange-500/30 transition-colors duration-300"
                >
                  <rect x="2" y="2" width="20" height="20" rx="2" />
                  <path d="M2 8h20M2 14h20M8 2v20M14 2v20" />
                </svg>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-zinc-900/90 backdrop-blur rounded-xl p-4 border border-zinc-700/50">
                  <p className="text-white font-bold text-sm">{project.label}</p>
                  <p className="text-orange-400 text-xs mt-1 flex items-center gap-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-500 text-sm">
            Photography coming soon — contact us to see our full portfolio
          </p>
        </div>
      </div>
    </section>
  );
}
