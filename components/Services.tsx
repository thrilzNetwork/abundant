const services = [
  {
    icon: "🏛️",
    title: "Decorative Concrete",
    description:
      "Elevate any surface with artistic concrete finishes. Our decorative techniques transform plain concrete into stunning design elements that complement any architectural style.",
    features: ["Custom staining", "Acid etching", "Engraving", "Exposed aggregate"],
  },
  {
    icon: "🌿",
    title: "Stamped Concrete",
    description:
      "Achieve the look of natural stone, brick, or wood at a fraction of the cost. Our stamped concrete solutions deliver breathtaking results for patios, walkways, and driveways.",
    features: ["Cobblestone patterns", "Slate textures", "Brick designs", "Custom patterns"],
  },
  {
    icon: "🔄",
    title: "Concrete Overlays",
    description:
      "Breathe new life into worn or damaged concrete without the cost of full replacement. Our micro-topping and overlay systems create a fresh, modern surface over existing concrete.",
    features: ["Micro-toppings", "Self-leveling", "Skim coats", "Resurfacing"],
  },
  {
    icon: "✨",
    title: "Epoxy Flooring",
    description:
      "Our professional-grade epoxy coatings create durable, high-gloss floors that resist chemicals, stains, and heavy traffic. Perfect for garages, commercial spaces, and showrooms.",
    features: ["Metallic epoxy", "Flake systems", "Solid color coats", "Anti-slip finishes"],
  },
  {
    icon: "🚗",
    title: "Concrete Driveways",
    description:
      "Make a lasting first impression with a beautifully crafted concrete driveway. We design and install driveways built to withstand Florida's climate while enhancing your curb appeal.",
    features: ["Decorative borders", "Exposed aggregate", "Colored concrete", "Stamped designs"],
  },
  {
    icon: "☀️",
    title: "Patios & Outdoor Living",
    description:
      "Create the backyard oasis you've always dreamed of. Our patio installations combine functionality with beauty, using premium materials suited for South Florida's outdoor lifestyle.",
    features: ["Custom shapes", "Built-in seating", "Fire pit surrounds", "Outdoor kitchens"],
  },
  {
    icon: "🏊",
    title: "Pool Decks",
    description:
      "Surround your pool with a safe, slip-resistant, and stunning deck surface. We specialize in cool-to-the-touch finishes designed specifically for Florida's intense sunshine.",
    features: ["Cool-deck coatings", "Kool Deck systems", "Textured finishes", "Non-slip surfaces"],
  },
  {
    icon: "🍽️",
    title: "Concrete Countertops",
    description:
      "Custom concrete countertops bring a one-of-a-kind, artisan quality to kitchens, bathrooms, and outdoor bars. Each countertop is individually crafted to your exact specifications.",
    features: ["Custom colors", "Integral sinks", "Embedded objects", "Sealing & polishing"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            Our Concrete Services
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From decorative designs to functional foundations, we offer a full range of
            professional concrete services for residential and commercial properties across South Florida.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-zinc-800 rounded-2xl p-6 border border-zinc-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-orange-400 transition-colors duration-200">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-zinc-400 text-xs">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3.5 h-3.5 text-orange-500 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-zinc-400 mb-6">
            Not sure which service is right for you? We&apos;re happy to help you choose.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-orange-500/30 hover:scale-105"
          >
            Request a Free Consultation
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
