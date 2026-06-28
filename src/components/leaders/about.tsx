"use client";

import ScrollReveal from "./scroll-reveal";
import CountUp from "./count-up";
import { Target, Rocket, Clock, CheckCircle2 } from "lucide-react";

const values = [
  { label: "Efficiency", icon: Rocket },
  { label: "Proficiency", icon: Target },
  { label: "Timeliness", icon: Clock },
];

const edgeItems = [
  { value: 200, suffix: "+", label: "Skilled & Well-Trained Employees" },
  { value: 14, suffix: "+", label: "Running Government Projects" },
  { value: 5, suffix: "+", label: "Technology Partners" },
  { value: 13, suffix: "+", label: "Government Clients Served" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E2A78]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00E0C6]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-[#1E2A78] font-mono text-sm tracking-widest uppercase mb-4 bg-[#1E2A78]/10 px-4 py-2 rounded-full">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E] mb-6">
            Who We Are
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <div className="space-y-10">
            {/* Vision */}
            <ScrollReveal>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E2A78]/10 flex items-center justify-center shrink-0 mt-1">
                  <Target className="text-[#1E2A78]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
                    Our Vision
                  </h3>
                  <p className="text-[#7C8AA5] leading-relaxed">
                    Become a full-service consultant and contractor to our
                    clients, delivering quality digital transformation products
                    and providing technical support and training in an effective
                    and efficient manner.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal delay={0.1}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00E0C6]/10 flex items-center justify-center shrink-0 mt-1">
                  <Rocket className="text-[#00E0C6]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
                    Our Mission
                  </h3>
                  <p className="text-[#7C8AA5] leading-relaxed">
                    Assist our clients in the Government, Private, and NGO
                    sectors by providing regulatory and technical services,
                    consultation, and solutions to bring their services to the
                    better performance edge.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Values */}
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-5">
                  Our Core Values
                </h3>
                <div className="flex flex-wrap gap-4">
                  {values.map((v) => {
                    const VIcon = v.icon;
                    return (
                      <div
                        key={v.label}
                        className="flex items-center gap-3 bg-[#F5F7FF] border border-[#1E2A78]/10 rounded-xl px-5 py-3 hover:border-[#00E0C6]/30 hover:shadow-md transition-all duration-300"
                      >
                        <VIcon
                          size={20}
                          className="text-[#00E0C6]"
                        />
                        <span className="font-semibold text-[#1A1A2E]">
                          {v.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* What we do */}
            <ScrollReveal delay={0.3}>
              <div className="bg-[#F5F7FF] rounded-2xl p-6 border border-[#1E2A78]/5">
                <h4 className="font-bold text-[#1A1A2E] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-[#00E0C6]" size={20} />
                  Our Business in Document Management
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#1E2A78] mb-1">
                      Implementation
                    </p>
                    <p className="text-sm text-[#7C8AA5]">
                      Enabling organization objectives by integrating the latest
                      solutions and implementing through our staff in a safe
                      operation environment.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1E2A78] mb-1">
                      Migration
                    </p>
                    <p className="text-sm text-[#7C8AA5]">
                      Smooth handover from outdated systems to the latest
                      technology in the market, ensuring zero downtime and data
                      integrity.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Stats / Infographic */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-[#0D1117] rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#1E2A78]/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00E0C6]/10 rounded-full blur-[60px]" />

              <div className="relative z-10">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Our Edge
                </h3>
                <p className="text-white/40 text-sm mb-8 font-mono tracking-wide">
                  KEY PERFORMANCE INDICATORS
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {edgeItems.map((item) => (
                    <div
                      key={item.label}
                      className="glass rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="stat-value text-3xl sm:text-4xl mb-2">
                        <CountUp
                          end={item.value}
                          suffix={item.suffix}
                        />
                      </div>
                      <p className="text-white/50 text-xs sm:text-sm leading-tight">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Partners note */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs font-mono tracking-wider uppercase mb-3">
                    Technology Providers
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Fujitsu", "Xerox", "Kodak", "Dell", "HP"].map(
                      (p) => (
                        <span
                          key={p}
                          className="text-xs text-white/60 bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
                        >
                          {p}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}