export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Concrete texture overlay using gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
        {/* Orange glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            South Florida&apos;s Premier Concrete Specialists
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-none tracking-tight">
            Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
              Property
            </span>
            <br />
            With Concrete{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Artistry
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-zinc-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
            From stunning stamped patios to flawless epoxy garage floors — Abundant Concrete Design
            delivers craftsmanship that lasts a lifetime. Serving South Florida for{" "}
            <strong className="text-orange-400">15+ years</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 text-lg"
            >
              Get a Free Estimate
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="tel:8138538134"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-zinc-600 hover:border-orange-500 text-zinc-300 hover:text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 text-lg hover:bg-orange-500/10"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-orange-500">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.13 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              813-853-8134
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "2,500+", label: "Projects Completed" },
              { value: "10", label: "Cities Served" },
              { value: "100%", label: "Satisfaction Guarantee" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-zinc-800/60 backdrop-blur border border-zinc-700/50 rounded-2xl p-5 hover:border-orange-500/40 transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-orange-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-zinc-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs">
        <span>Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
