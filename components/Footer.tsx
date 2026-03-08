"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient divider */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.4), rgba(34,211,238,0.4), transparent)" }}
      />

      <div
        className="py-12 px-6"
        style={{ background: "rgba(255,255,255,0.01)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Logo & tagline */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2.5 group"
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                >
                  JI
                </div>
                <span
                  className="font-bold text-white/80 group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Jayani Immidi
                </span>
              </button>
              <p className="text-slate-600 text-xs text-center md:text-left max-w-[220px]">
                Building intelligent systems that push the boundaries of what&apos;s possible.
              </p>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Github size={17} />, href: "https://github.com/Jayani15/", label: "GitHub" },
                { icon: <Linkedin size={17} />, href: "https://www.linkedin.com/in/jayani-immidi-b18770310/", label: "LinkedIn" },
                { icon: <Mail size={17} />, href: "mailto:jayaniimmidi@gmail.com", label: "Email" },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-white transition-colors duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
                  whileHover={{ scale: 1.1, y: -2, borderColor: "rgba(168,85,247,0.4)", color: "#a855f7" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p className="text-slate-600 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Jayani Immidi. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs flex items-center gap-1">
              Designed & built with{" "}
              <Heart size={11} className="text-pink-500 fill-pink-500" />
              {" "}using Next.js, Tailwind & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
