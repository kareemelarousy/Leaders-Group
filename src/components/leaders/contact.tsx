"use client";

import { useState } from "react";
import ScrollReveal from "./scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
} from "lucide-react";

const serviceOptions = [
  "Digital Transformation Consulting",
  "AI Models & Automation",
  "Document Management Systems",
  "OCR & Document Scanning",
  "Data Analytics & BI",
  "Custom Software Development",
  "ERP & Accounting Systems",
  "Training & Technical Support",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silent fail for now
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#F5F7FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-[#00E0C6] font-mono text-sm tracking-widest uppercase mb-4 bg-[#00E0C6]/10 px-4 py-2 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E] mb-6">
            Start Your Digital Journey
          </h2>
          <p className="text-[#7C8AA5] text-lg max-w-2xl mx-auto">
            Ready to transform your organization? Get in touch with our team
            for a free consultation.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: Form */}
          <ScrollReveal className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#E2E8F0]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#00E0C6]/10 flex items-center justify-center mb-6 animate-pulse-glow">
                    <CheckCircle2 className="text-[#00E0C6]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-[#7C8AA5] max-w-sm mb-6">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="rounded-xl"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        name="name"
                        required
                        placeholder="Ahmed Mohamed"
                        className="rounded-xl border-[#E2E8F0] focus:border-[#1E2A78] h-12 bg-[#F5F7FF]/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                        Company
                      </label>
                      <Input
                        name="company"
                        placeholder="Your Organization"
                        className="rounded-xl border-[#E2E8F0] focus:border-[#1E2A78] h-12 bg-[#F5F7FF]/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        name="email"
                        type="email"
                        required
                        placeholder="ahmed@company.com"
                        className="rounded-xl border-[#E2E8F0] focus:border-[#1E2A78] h-12 bg-[#F5F7FF]/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                        Phone
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+20 1XX XXX XXXX"
                        className="rounded-xl border-[#E2E8F0] focus:border-[#1E2A78] h-12 bg-[#F5F7FF]/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                      Service Needed
                    </label>
                    <Select name="service">
                      <SelectTrigger className="rounded-xl border-[#E2E8F0] focus:border-[#1E2A78] h-12 bg-[#F5F7FF]/50">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A1A2E] mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="message"
                      required
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      className="rounded-xl border-[#E2E8F0] focus:border-[#1E2A78] bg-[#F5F7FF]/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#1E2A78] hover:bg-[#2A3A9C] text-white font-semibold rounded-xl py-6 text-base shadow-lg shadow-[#1E2A78]/20 hover:shadow-[#1E2A78]/40 transition-all duration-300 group"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Right: Contact Info */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Contact Cards */}
              {[
                {
                  icon: MapPin,
                  label: "Headquarters",
                  value: "Cairo, Egypt",
                  sub: "Serving KSA & UAE markets",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@leadersgroup.com",
                  sub: "We reply within 24 hours",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+20 2 XXXX XXXX",
                  sub: "Sunday - Thursday, 9AM - 6PM",
                },
                {
                  icon: Globe,
                  label: "Markets",
                  value: "Egypt · Saudi Arabia · UAE",
                  sub: "14+ active government projects",
                },
              ].map((item) => {
                const IIcon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-white rounded-2xl p-5 border border-[#E2E8F0] hover:border-[#00E0C6]/20 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#1E2A78]/5 flex items-center justify-center shrink-0 group-hover:bg-[#00E0C6]/10 transition-colors">
                        <IIcon
                          size={20}
                          className="text-[#1E2A78] group-hover:text-[#00E0C6] transition-colors"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-[#7C8AA5] tracking-wider uppercase mb-1">
                          {item.label}
                        </p>
                        <p className="font-semibold text-[#1A1A2E] text-sm">
                          {item.value}
                        </p>
                        <p className="text-xs text-[#7C8AA5] mt-0.5">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Map Placeholder */}
              <div className="bg-[#0D1117] rounded-2xl p-6 h-48 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg
                    viewBox="0 0 400 200"
                    className="w-full h-full"
                    fill="none"
                  >
                    {/* Simplified map grid */}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <line
                        key={`h-${i}`}
                        x1="0"
                        y1={i * 18}
                        x2="400"
                        y2={i * 18}
                        stroke="#1E2A78"
                        strokeWidth="0.5"
                      />
                    ))}
                    {Array.from({ length: 20 }).map((_, i) => (
                      <line
                        key={`v-${i}`}
                        x1={i * 22}
                        y1="0"
                        x2={i * 22}
                        y2="200"
                        stroke="#1E2A78"
                        strokeWidth="0.5"
                      />
                    ))}
                    {/* Location pin */}
                    <circle cx="200" cy="100" r="20" fill="#00E0C6" opacity="0.15" />
                    <circle cx="200" cy="100" r="8" fill="#00E0C6" opacity="0.4" />
                    <circle cx="200" cy="100" r="3" fill="#00E0C6" />
                  </svg>
                </div>
                <div className="relative z-10 text-center">
                  <MapPin className="text-[#00E0C6] mx-auto mb-2" size={24} />
                  <p className="text-white/60 text-sm font-mono">Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}