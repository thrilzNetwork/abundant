const services = [
  "Stamped Concrete",
  "Epoxy Floor Coating",
  "Concrete Overlays",
  "Pool Deck Resurfacing",
  "Concrete Driveways",
  "Decorative Patios",
  "Concrete Countertops",
  "Commercial Flooring",
];

const areas = [
  "Tampa", "Miami", "Fort Lauderdale", "West Palm Beach",
  "Orlando", "Boca Raton", "Naples", "Sarasota",
  "Clearwater", "St. Petersburg", "Lakeland", "Port Charlotte",
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/30">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-lg tracking-tight">Abundant</span>
                <span className="text-orange-500 font-semibold text-sm tracking-widest uppercase">Concrete Design</span>
              </div>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              South Florida&apos;s trusted concrete specialists. Quality craftsmanship, fair pricing, and
              results that last a lifetime.
            </p>
            <a
              href="tel:8138538134"
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold text-xl transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.13 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              813-853-8134
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-zinc-500 hover:text-orange-400 text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-orange-500 rounded-full" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Service Areas</h3>
            <ul className="flex flex-col gap-3">
              {areas.map((a) => (
                <li key={a}>
                  <a href="#service-areas" className="text-zinc-500 hover:text-orange-400 text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-orange-500 rounded-full" />
                    {a}, FL
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                { label: "Home", href: "#" },
                { label: "Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Our Work", href: "#gallery" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Service Areas", href: "#service-areas" },
                { label: "Get a Free Estimate", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-zinc-500 hover:text-orange-400 text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-orange-500 rounded-full" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
              <p className="text-orange-400 font-bold text-sm mb-1">Free Estimates</p>
              <p className="text-zinc-500 text-xs">Call or fill out our form — we&apos;ll come to you</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Abundant Concrete Design. All rights reserved. Licensed &
            Insured in Florida.
          </p>
          <p className="text-zinc-700 text-xs">
            Serving Tampa · Miami · Fort Lauderdale · Orlando · West Palm Beach & All of South Florida
          </p>
        </div>
      </div>
    </footer>
  );
}
