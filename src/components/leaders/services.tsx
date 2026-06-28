"use client";

import ScrollReveal from "./scroll-reveal";
import {
  Brain,
  FileText,
  ScanLine,
  BarChart3,
  Code2,
  Calculator,
  GraduationCap,
  ArrowRight,
  Cpu,
} from "lucide-react";

const pillars = [
  {
    title: "Digital Transformation",
    icon: Cpu,
    color: "#1E2A78",
    description: "Strategy, roadmap, and execution for complete digital transformation journeys.",
    services: [
      {
        icon: Brain,
        title: "Digital Transformation Consulting",
        desc: "We guide governments and enterprises through full digital transformation journeys — strategy, roadmap, and execution.",
      },
      {
        icon: Cpu,
        title: "AI Models & Automation",
        desc: "Custom AI tools, intelligent automation, and machine learning solutions built for your specific business needs.",
      },
    ],
  },
  {
    title: "Document & Data Management",
    icon: FileText,
    color: "#00B89E",
    description: "End-to-end document lifecycle management with full security and compliance.",
    services: [
      {
        icon: FileText,
        title: "Document Management Systems (DMS)",
        desc: "End-to-end document lifecycle management — capture, store, retrieve, and archive with full security and compliance.",
      },
      {
        icon: ScanLine,
        title: "OCR & Document Scanning",
        desc: "Convert physical documents into searchable digital assets using advanced OCR and high-speed scanning technology.",
      },
      {
        icon: BarChart3,
        title: "Data Analytics & Business Intelligence",
        desc: "Transform raw data into actionable insights with custom dashboards, reports, and BI solutions.",
      },
    ],
  },
  {
    title: "Software Development & Support",
    icon: Code2,
    color: "#1E2A78",
    description: "Tailor-made software solutions with dedicated training and 24/7 support.",
    services: [
      {
        icon: Code2,
        title: "Custom Software Development",
        desc: "Tailor-made systems for pharmacies, clinics, HR, operations — built to fit your workflow, not the other way around.",
      },
      {
        icon: Calculator,
        title: "ERP & Accounting Systems",
        desc: "Full ERP implementations and accounting platforms with ZATCA compliance for the Saudi market.",
      },
      {
        icon: GraduationCap,
        title: "Training & Technical Support",
        desc: "Onsite and remote training, 24/7 technical support, and dedicated account management.",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F5F7FF] relative">
      {/* Subtle top pattern */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E2A78] via-[#00E0C6] to-[#1E2A78]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-[#00E0C6] font-mono text-sm tracking-widest uppercase mb-4 bg-[#00E0C6]/10 px-4 py-2 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E] mb-6">
            What We Do
          </h2>
          <p className="text-[#7C8AA5] text-lg max-w-2xl mx-auto">
            Comprehensive solutions across three core pillars, delivering
            end-to-end digital transformation for your organization.
          </p>
        </ScrollReveal>

        {/* Pillars */}
        <div className="space-y-16 sm:space-y-20">
          {pillars.map((pillar, pIdx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} delay={pIdx * 0.1}>
                <div>
                  {/* Pillar Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${pillar.color}10` }}
                    >
                      <Icon
                        size={28}
                        style={{ color: pillar.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E]">
                        {pillar.title}
                      </h3>
                      <p className="text-[#7C8AA5] text-sm mt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Cards */}
                  <div
                    className={`grid gap-6 ${
                      pillar.services.length === 2
                        ? "grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1 md:grid-cols-3"
                    }`}
                  >
                    {pillar.services.map((service, sIdx) => {
                      const SIcon = service.icon;
                      return (
                        <div
                          key={service.title}
                          className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-[#1E2A78]/8 border border-transparent hover:border-[#00E0C6]/20 transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E2A78]/10 to-[#00E0C6]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                            <SIcon
                              size={24}
                              className="text-[#1E2A78] group-hover:text-[#00E0C6] transition-colors duration-300"
                            />
                          </div>
                          <h4 className="text-lg font-bold text-[#1A1A2E] mb-3">
                            {service.title}
                          </h4>
                          <p className="text-[#7C8AA5] text-sm leading-relaxed mb-5">
                            {service.desc}
                          </p>
                          <div className="flex items-center gap-2 text-[#00E0C6] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            Learn More
                            <ArrowRight size={14} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}