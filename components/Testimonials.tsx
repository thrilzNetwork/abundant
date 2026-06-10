const testimonials = [
  {
    name: "Carlos M.",
    location: "Miami, FL",
    rating: 5,
    text: "Abundant Concrete transformed our backyard completely. The stamped patio they installed looks like natural stone — neighbors keep asking who did the work. Professional crew, on time, and exactly on budget. Couldn't be happier.",
    project: "Stamped Concrete Patio",
  },
  {
    name: "Jennifer R.",
    location: "Tampa, FL",
    rating: 5,
    text: "We had three estimates for our epoxy garage floor and Abundant was the most knowledgeable by far. They explained every step of the process, didn't oversell us, and the finished floor looks incredible. Already recommending them to everyone.",
    project: "Epoxy Garage Floor",
  },
  {
    name: "David & Sharon K.",
    location: "Fort Lauderdale, FL",
    rating: 5,
    text: "Our pool deck was cracking and fading. Abundant came out, gave a fair estimate, and had it looking brand new within a week. The concrete overlay they used has an amazing texture that isn't slippery when wet. Fantastic work.",
    project: "Pool Deck Overlay",
  },
  {
    name: "Marcus T.",
    location: "West Palm Beach, FL",
    rating: 5,
    text: "Used them for a commercial warehouse floor — 8,000 sq ft. These guys are serious professionals. The floor was prepped, poured, and finished ahead of schedule with zero issues. We're hiring them again for our second location.",
    project: "Commercial Floor Coating",
  },
  {
    name: "Ana L.",
    location: "Orlando, FL",
    rating: 5,
    text: "I wanted a decorative concrete driveway that would stand out. Abundant delivered something beyond what I imagined. The detail work on the borders is stunning. Worth every penny and the crew was respectful and clean.",
    project: "Decorative Driveway",
  },
  {
    name: "Robert F.",
    location: "Naples, FL",
    rating: 5,
    text: "From the first call to the final walkthrough, everything was seamless. They showed up when they said they would, communicated throughout the job, and the outdoor kitchen countertops they poured are absolutely beautiful.",
    project: "Concrete Countertops",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            What Our Clients Say
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Real customers from across South Florida share their experience working with Abundant
            Concrete Design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-300 leading-relaxed flex-1 mb-6 italic">&ldquo;{t.text}&rdquo;</p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-zinc-500 text-sm flex items-center gap-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {t.location}
                  </p>
                </div>
                <span className="text-xs text-orange-400 font-medium bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                  {t.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
