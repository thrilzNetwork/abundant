const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Licensed & Insured",
    description:
      "Fully licensed, bonded, and insured in the state of Florida. Your property and investment are protected on every job.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "15+ Years Experience",
    description:
      "Over a decade and a half perfecting decorative concrete across South Florida. We've seen every project type — and delivered every time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Premium Materials Only",
    description:
      "We source commercial-grade concrete, sealers, and epoxy coatings that outlast and outperform budget alternatives by years.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
      </svg>
    ),
    title: "Free Estimates",
    description:
      "No pressure, no obligation. Get a detailed written estimate at zero cost. We'll come to your property and assess the job personally.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Local South Florida Team",
    description:
      "Our crews live and work here — Tampa to Miami. We understand Florida's climate, soil conditions, and what it takes to build concrete that endures.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    title: "Residential & Commercial",
    description:
      "From backyard patios to commercial warehouse floors, we scale our operations to match your project size without cutting corners.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            The Abundant Difference
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Not all concrete contractors are created equal. Here&apos;s why thousands of South Florida
            homeowners and businesses trust us with their concrete projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8 hover:border-orange-500/50 hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-orange-500/15 rounded-xl flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-500/25 transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{reason.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="tel:8138538134"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 text-lg"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.13 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
            </svg>
            Call Now: 813-853-8134
          </a>
        </div>
      </div>
    </section>
  );
}
