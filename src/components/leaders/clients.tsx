"use client";

import ScrollReveal from "./scroll-reveal";
import { Building, Landmark, Database, Shield, FileCheck, Users } from "lucide-react";

const clients = [
  { name: "Ministry of Finance", icon: Landmark, abbr: "MOF" },
  { name: "Egyptian Customs Authority", icon: Shield, abbr: "Customs" },
  { name: "Egyptian Tax Authority", icon: FileCheck, abbr: "Taxes" },
  { name: "Ministry of Water Resources & Irrigation", icon: Database, abbr: "MWRI" },
  { name: "Port Said Governorate", icon: Building, abbr: "Port Said" },
  { name: "Sinai Development Authority", icon: Landmark, abbr: "Sinai Dev." },
  { name: "National Authority for Tunnels", icon: Database, abbr: "NAT" },
  { name: "Urban Planning Authority (UPA)", icon: Building, abbr: "UPA" },
  { name: "CAPMAS", icon: Database, abbr: "CAPMAS" },
  { name: "Arab Supply Association (ASA)", icon: Users, abbr: "ASA" },
  { name: "Ministry of State for Information Technology", icon: Database, abbr: "MSIT" },
  { name: "Ministry of Trade & Industry", icon: Building, abbr: "MTI" },
  { name: "Ministry of Labour", icon: Users, abbr: "Labour" },
  { name: "Martyrs Honoring Fund", icon: Shield, abbr: "MHF" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 sm:py-32 bg-[#0D1117] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#1E2A78]/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#00E0C6]/8 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-[#00E0C6] font-mono text-sm tracking-widest uppercase mb-4 bg-[#00E0C6]/10 px-4 py-2 rounded-full">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Trusted by Leading Organizations
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From federal ministries to national authorities, our solutions power
            critical operations across Egypt&apos;s government landscape.
          </p>
        </ScrollReveal>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {clients.map((client, i) => {
            const Icon = client.icon;
            return (
              <ScrollReveal key={client.name} delay={Math.min(i * 0.04, 0.6)}>
                <div className="group glass rounded-2xl p-5 sm:p-6 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#00E0C6]/10 transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-white/40 group-hover:text-[#00E0C6] transition-colors duration-300"
                    />
                  </div>
                  <p className="text-white/70 text-sm font-medium leading-tight group-hover:text-white transition-colors duration-300 min-h-[2.5rem] flex items-center justify-center">
                    {client.name}
                  </p>
                  <p className="text-[#00E0C6]/40 text-xs font-mono mt-2 tracking-wider">
                    {client.abbr}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom stat */}
        <ScrollReveal delay={0.3} className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-[#00E0C6] animate-pulse" />
            <span className="text-white/50 text-sm font-mono">
              Currently running <span className="text-[#00E0C6] font-semibold">14+</span> government projects
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}