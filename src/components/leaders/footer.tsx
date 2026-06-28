import LeadersLogo from "./logo";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Digital Transformation",
  "Document Management",
  "AI & Automation",
  "Custom Software",
  "ERP Systems",
  "Technical Support",
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <LeadersLogo
              className="h-14 w-48 mb-5"
              light
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Leading digital innovation and document management solutions for
              government, enterprise, and medical sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#00E0C6] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/40 hover:text-[#00E0C6] text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Markets
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-sm font-medium">Egypt</p>
                <p className="text-white/30 text-xs">Headquarters</p>
              </div>
              <div>
                <p className="text-white/60 text-sm font-medium">
                  Saudi Arabia
                </p>
                <p className="text-white/30 text-xs">Active operations</p>
              </div>
              <div>
                <p className="text-white/60 text-sm font-medium">UAE</p>
                <p className="text-white/30 text-xs">Active operations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; 2025 Leaders Group. All Rights Reserved.
          </p>
          <p className="text-white/20 text-xs font-mono tracking-wider">
            CONNECTING DATA TO DECISIONS
          </p>
        </div>
      </div>
    </footer>
  );
}