"use client";

import { useState, useEffect } from "react";
import LeadersLogo from "./logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1117]/90 backdrop-blur-md shadow-lg shadow-black/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="shrink-0"
        >
          <LeadersLogo
            className={`h-10 sm:h-12 transition-all duration-300 ${
              scrolled ? "w-40 sm:w-48" : "w-44 sm:w-52"
            }`}
            light
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-medium text-white/70 hover:text-[#00E0C6] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={() => handleNavClick("#contact")}
            className="bg-[#00E0C6] text-[#0D1117] font-semibold hover:bg-[#00B89E] transition-all duration-200 rounded-lg px-5 py-2.5 text-sm shadow-lg shadow-[#00E0C6]/20 hover:shadow-[#00E0C6]/40"
          >
            Get a Free Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 hover:text-[#00E0C6] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0D1117]/95 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block py-3 px-4 text-white/80 hover:text-[#00E0C6] hover:bg-white/5 rounded-lg transition-all text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="w-full bg-[#00E0C6] text-[#0D1117] font-semibold hover:bg-[#00B89E] transition-all rounded-lg py-3 text-sm"
            >
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}