"use client";

import { useState } from "react";

const services = [
  "Decorative Concrete",
  "Stamped Concrete",
  "Concrete Overlays",
  "Epoxy Flooring",
  "Concrete Driveway",
  "Patio / Outdoor Living",
  "Pool Deck",
  "Concrete Countertops",
  "Other / Not Sure",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Send failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly at 813-853-8134.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-800 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      {/* Background glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to Transform Your Property?
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Whether you have a clear vision or just a vague idea, we&apos;re here to help. Tell us
              about your project and we&apos;ll schedule a free on-site consultation and estimate —
              no pressure, no obligation.
            </p>

            {/* Contact methods */}
            <div className="space-y-6 mb-10">
              <a
                href="tel:8138538134"
                className="group flex items-center gap-4 p-5 bg-zinc-900 border border-zinc-700 rounded-2xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.13 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-400 text-sm mb-0.5">Call or Text Anytime</p>
                  <p className="text-white font-bold text-xl group-hover:text-orange-400 transition-colors duration-200">
                    813-853-8134
                  </p>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 ml-auto transition-colors duration-300">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <div className="flex items-center gap-4 p-5 bg-zinc-900 border border-zinc-700 rounded-2xl">
                <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-orange-400">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-400 text-sm mb-0.5">Service Area</p>
                  <p className="text-white font-semibold">All of South Florida</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-zinc-900 border border-zinc-700 rounded-2xl">
                <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-orange-400">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-zinc-400 text-sm mb-0.5">Business Hours</p>
                  <p className="text-white font-semibold">Mon–Sat: 7am – 6pm</p>
                  <p className="text-zinc-500 text-sm">Emergency calls accepted 7 days</p>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3">
              {["Licensed & Insured", "Free Estimates", "15+ Years", "5-Star Rated"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/30">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Thank you, {form.name.split(" ")[0]}! We&apos;ll review your request and reach out
                  within one business day — usually much sooner.
                </p>
                <a
                  href="tel:8138538134"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-8 py-3 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  Or Call Us Now: 813-853-8134
                </a>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Estimate</h3>
                <p className="text-zinc-500 text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-zinc-400 text-sm font-medium mb-2">
                        Full Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 text-sm font-medium mb-2">
                        Phone Number <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="(813) 555-0100"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2">
                      Service Interested In <span className="text-orange-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200 text-sm appearance-none cursor-pointer"
                    >
                      <option value="" className="text-zinc-600">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-zinc-800">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-400 text-sm font-medium mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your project — size, current conditions, timeline, any specific ideas or requirements..."
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors duration-200 text-sm resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] text-lg flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Request My Free Estimate
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-zinc-600 text-xs text-center">
                    We respect your privacy. Your information is never shared or sold.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
