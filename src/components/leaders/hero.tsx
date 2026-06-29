"use client";

import LeadersLogo from "./logo";
import NetworkCanvas from "./network-canvas";
import CountUp from "./count-up";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const stats = [
  { value: 200, suffix: "+", label: "Skilled Employees" },
  { value: 14, suffix: "+", label: "Running Projects" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D1117]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <NetworkCanvas />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117] via-transparent to-[#0D1117]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1117] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0D1117] to-transparent" />
        {/* Decorative glow orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#1E2A78]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00E0C6]/10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
        <div className="max-w-4xl">
          {/* Logo */}
          <div className="mb-8 fade-in-up">
            <LeadersLogo className="h-16 sm:h-20 w-60 sm:w-80" light />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 fade-in-up">
            Leading{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0C6] to-[#33FFE6]">
              Digital Innovation
            </span>
            <br />
            Across the Gulf
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed fade-in-up">
            We help governments, enterprises, and businesses in Saudi Arabia &
            UAE transform digitally — faster, smarter, and more securely.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
            <Button
              size="lg"
              onClick={() => scrollTo("#services")}
              className="bg-[#00E0C6] text-[#0D1117] font-bold hover:bg-[#00B89E] transition-all duration-300 rounded-xl px-8 py-6 text-base shadow-xl shadow-[#00E0C6]/25 hover:shadow-[#00E0C6]/40 hover:scale-[1.02] group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#clients")}
              className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-[#00E0C6]/50 hover:text-[#00E0C6] transition-all duration-300 rounded-xl px-8 py-6 text-base group"
            >
              <Play className="mr-2 w-4 h-4" />
              View Our Work
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 fade-in-up">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="stat-value text-3xl sm:text-4xl md:text-5xl mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/50 text-sm sm:text-base font-medium tracking-wide uppercase font-mono">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase font-mono">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}