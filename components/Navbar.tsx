"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);

      // Determine active section
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[900] flex items-center justify-between px-6 lg:px-12"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ height: 72 }}
      >
        {/* Navbar background blur */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? "bg-[#020210]/80 backdrop-blur-xl border-b border-white/[0.06]"
              : "bg-transparent"
          }`}
        />

        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] transition-all duration-100"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #7c3aed, #a855f7, #22d3ee)",
            opacity: scrollProgress > 2 ? 1 : 0,
          }}
        />

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative z-10 flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #06b6d4, #7c3aed)" }}
            />
            <span className="relative text-white font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>JI</span>
          </div>
          <span
            className="font-semibold text-white/90 hidden sm:block group-hover:text-white transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.01em" }}
          >
            Jayani Immidi
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="relative z-10 hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group"
                style={{ color: isActive ? "#a855f7" : "rgba(241,245,249,0.7)" }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors">
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(168,85,247,0.1)" }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-3/4 transition-all duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, #a855f7, transparent)" }}
                />
              </button>
            );
          })}

          <motion.button
            onClick={() => scrollTo("#contact")}
            className="ml-4 px-5 py-2 text-sm font-semibold rounded-full text-white relative overflow-hidden group"
            style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #06b6d4, #7c3aed)" }}
            />
            <span className="relative z-10">Hire Me</span>
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 md:hidden p-2 rounded-lg text-slate-400 hover:text-white transition-colors"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[800] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[#020210]/95 backdrop-blur-2xl" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute top-[72px] left-0 right-0 p-6 flex flex-col gap-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-5 py-4 rounded-xl text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollTo("#contact")}
                className="mt-2 px-5 py-4 rounded-xl text-lg font-semibold text-white text-left"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                Hire Me →
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
