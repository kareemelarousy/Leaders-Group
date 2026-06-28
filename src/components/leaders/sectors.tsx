"use client";

import ScrollReveal from "./scroll-reveal";
import { Landmark, Building2, Store, HeartPulse } from "lucide-react";

const sectors = [
  {
    name: "Government",
    icon: Landmark,
    color: "#1E2A78",
    desc: "Delivering large-scale digital transformation projects for government ministries and authorities across Egypt, Saudi Arabia, and UAE.",
    details: [
      "Ministry-wide document digitization",
      "Compliance-ready ERP systems",
      "National-scale data management",
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    color: "#00B89E",
    desc: "Empowering large private organizations with enterprise-grade solutions for operations, HR, and business intelligence.",
    details: [
      "End-to-end process automation",
      "Custom ERP implementations",
      "Advanced analytics platforms",
    ],
  },
  {
    name: "SME",
    icon: Store,
    color: "#1E2A78",
    desc: "Providing affordable, scalable digital solutions tailored for growing businesses that need efficiency without complexity.",
    details: [
      "Cost-effective DMS solutions",
      "Cloud-based operations tools",
      "Growth-ready infrastructure",
    ],
  },
  {
    name: "Medical & Pharmacy",
    icon: HeartPulse,
    color: "#00B89E",
    desc: "Specialized systems for clinics, pharmacies, and healthcare providers with regulatory compliance and patient data security.",
    details: [
      "Clinic management software",
      "Pharmacy inventory systems",
      "HIPAA-compliant data handling",
    ],
  },
];

export default function Sectors() {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F7FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-[#00E0C6] font-mono text-sm tracking-widest uppercase mb-4 bg-[#00E0C6]/10 px-4 py-2 rounded-full">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E] mb-6">
            Sectors We Serve
          </h2>
          <p className="text-[#7C8AA5] text-lg max-w-2xl mx-auto">
            From government ministries to healthcare providers, we deliver
            specialized solutions tailored to each sector&apos;s unique requirements.
          </p>
        </ScrollReveal>

        {/* Sector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <ScrollReveal key={sector.name} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-[#1E2A78]/8 border border-transparent hover:border-[#00E0C6]/20 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${sector.color}08` }}
                  >
                    <Icon
                      size={32}
                      style={{ color: sector.color }}
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">
                    {sector.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#7C8AA5] text-sm leading-relaxed mb-5 flex-grow">
                    {sector.desc}
                  </p>

                  {/* Detail items */}
                  <ul className="space-y-2">
                    {sector.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-[#7C8AA5]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00E0C6] mt-1.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}