"use client";

import ScrollReveal from "./scroll-reveal";

const partners = [
  { name: "Fujitsu", svg: (
    <svg viewBox="0 0 200 60" className="w-28 h-10">
      <text x="10" y="40" fontFamily="'Sora', sans-serif" fontWeight="700" fontSize="28" fill="currentColor">FUJITSU</text>
    </svg>
  )},
  { name: "Xerox", svg: (
    <svg viewBox="0 0 160 60" className="w-24 h-10">
      <text x="10" y="42" fontFamily="'Sora', sans-serif" fontWeight="800" fontSize="38" fill="currentColor">XEROX</text>
    </svg>
  )},
  { name: "Kodak", svg: (
    <svg viewBox="0 0 180 60" className="w-28 h-10">
      <text x="10" y="42" fontFamily="'Sora', sans-serif" fontWeight="700" fontSize="38" fill="currentColor">Kodak</text>
    </svg>
  )},
  { name: "Dell", svg: (
    <svg viewBox="0 0 120 60" className="w-20 h-10">
      <text x="10" y="42" fontFamily="'Sora', sans-serif" fontWeight="700" fontSize="38" fill="currentColor">DELL</text>
    </svg>
  )},
  { name: "HP", svg: (
    <svg viewBox="0 0 100 60" className="w-16 h-10">
      <text x="10" y="44" fontFamily="'Sora', sans-serif" fontWeight="800" fontSize="42" fill="currentColor">hp</text>
    </svg>
  )},
  { name: "Cisco", svg: (
    <svg viewBox="0 0 140 60" className="w-24 h-10">
      <text x="10" y="42" fontFamily="'Sora', sans-serif" fontWeight="600" fontSize="36" fill="currentColor">Cisco</text>
    </svg>
  )},
];

export default function Partners() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14 sm:mb-16">
          <span className="inline-block text-[#1E2A78] font-mono text-sm tracking-widest uppercase mb-4 bg-[#1E2A78]/10 px-4 py-2 rounded-full">
            Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E] mb-6">
            Technology Partners
          </h2>
          <p className="text-[#7C8AA5] text-lg max-w-2xl mx-auto">
            We partner with world-leading technology providers to deliver
            best-in-class solutions to our clients.
          </p>
        </ScrollReveal>
      </div>

      {/* Auto-scrolling Logo Strip */}
      <ScrollReveal>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll-left">
            {/* Double the items for seamless loop */}
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex items-center justify-center px-8 sm:px-14 shrink-0 partner-logo"
              >
                {partner.svg}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}