"use client";

import { useRef } from "react";
import type { CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

type FloatingShape = { size: number; top: string; color: string; delay: number; left?: string; right?: string };

const floatingShapes: FloatingShape[] = [
  { size: 8, top: "15%", left: "8%", color: "#a855f7", delay: 0 },
  { size: 12, top: "70%", left: "5%", color: "#22d3ee", delay: 1.2 },
  { size: 6, top: "30%", right: "6%", color: "#f472b6", delay: 0.6 },
  { size: 10, top: "75%", right: "8%", color: "#818cf8", delay: 1.8 },
  { size: 7, top: "50%", left: "15%", color: "#34d399", delay: 2.4 },
  { size: 9, top: "20%", right: "20%", color: "#fbbf24", delay: 0.9 },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Background Layer ── */}
      <div className="absolute inset-0">
        {/* Base */}
        <div className="absolute inset-0 bg-[#020210]" />
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-60" />

        {/* Large gradient orbs */}
        <motion.div
          className="absolute -top-32 -left-48 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-48 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Radial vignette */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(2,2,16,0.6) 100%)" }}
        />
      </div>

      {/* ── Floating Geometric Shapes ── */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            background: shape.color,
            boxShadow: `0 0 ${shape.size * 3}px ${shape.color}60`,
          } as CSSProperties}
          animate={{ y: [0, -14, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay: shape.delay, ease: "easeInOut" }}
        />
      ))}



      {/* ── Main Content ── */}
      <motion.div
        className="relative z-10 px-6 max-w-6xl mx-auto w-full"
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6 flex justify-center lg:justify-start">
              <span className="section-badge">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Available for exciting opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg mb-2 font-mono tracking-widest"
            >
              &lt; Hello World /&gt;
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-white/90 font-bold block" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                I&apos;m{" "}
              </span>
              <span
                className="font-extrabold block gradient-text"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.04em" }}
              >
                Jayani Immidi
              </span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              variants={itemVariants}
              className="mb-6 h-12 flex items-center justify-center lg:justify-start"
            >
              <span className="text-purple-400/80 text-xl font-mono mr-2">~/</span>
              <TypeAnimation
                sequence={[
                  "AI Developer", 2200,
                  "ML Engineer", 2200,
                  "Computer Vision Engineer", 2200,
                  "Full Stack Developer", 2200,
                  "LLM Systems Builder", 2200,
                ]}
                wrapper="span"
                speed={55}
                deletionSpeed={75}
                repeat={Infinity}
                className="text-xl md:text-2xl font-semibold"
                style={{ color: "#e2e8f0" }}
              />
              <span className="w-[2px] h-7 bg-purple-400 ml-1 animate-pulse" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-base max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Building{" "}
              <span className="highlight">intelligent systems</span> that push the boundaries of what&apos;s possible —
              from{" "}
              <span className="highlight-cyan">LLM agents</span> to{" "}
              <span className="highlight">distributed backends</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-4"
            >
              <motion.button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary px-8 py-3.5 rounded-full font-semibold text-white flex items-center gap-2 text-[0.95rem]"
                whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(168,85,247,0.5)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Explore My Work</span>
                <ExternalLink size={16} />
              </motion.button>

              <motion.button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 rounded-full font-semibold text-slate-200 flex items-center gap-2 text-[0.95rem] transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
                whileHover={{
                  scale: 1.04,
                  borderColor: "rgba(168,85,247,0.5)",
                  backgroundColor: "rgba(168,85,247,0.08)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={16} />
                <span>Get in Touch</span>
              </motion.button>
            </motion.div>

            {/* Resume Download */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-10">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-purple-400 transition-colors duration-200 group"
                whileHover={{ y: -1 }}
              >
                <span className="w-5 h-px bg-slate-600 group-hover:bg-purple-400 transition-colors" />
                <span>Download Resume</span>
                <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
                <span className="w-5 h-px bg-slate-600 group-hover:bg-purple-400 transition-colors" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-5">
              {[
                { icon: <Github size={20} />, href: "https://github.com/Jayani15/", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/jayani-immidi-b18770310/", label: "LinkedIn" },
                { icon: <Mail size={20} />, href: "mailto:jayaniimmidi@gmail.com", label: "Email" },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-slate-400 transition-all duration-300 group"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="group-hover:text-purple-400 transition-colors">{icon}</span>
                </motion.a>
              ))}

              <div className="w-px h-6 bg-white/10 mx-1" />
              <span className="text-slate-500 text-sm font-mono">@jayani-immidi</span>
            </motion.div>
          </div>

          {/* RIGHT: Photos */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[460px] h-[500px] flex items-center justify-center">
              {/* Outer orbit ring */}
              <motion.div
                className="absolute w-[440px] h-[440px] rounded-full"
                style={{ border: "1px solid rgba(168,85,247,0.22)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner orbit ring */}
              <motion.div
                className="absolute w-[510px] h-[510px] rounded-full"
                style={{ border: "1px solid rgba(34,211,238,0.12)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow behind main photo */}
              <div
                className="absolute w-[360px] h-[360px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)" }}
              />

              {/* Main photo */}
              <div
                className="relative w-[320px] h-[320px] rounded-full overflow-hidden"
                style={{
                  border: "2px solid rgba(168,85,247,0.45)",
                  boxShadow: "0 0 50px rgba(168,85,247,0.25), 0 0 100px rgba(168,85,247,0.08)",
                }}
              >
                <img
                  src="/photo1.jpeg"
                  alt="Jayani Immidi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Second accent photo */}
              <motion.div
                className="absolute bottom-2 -right-4 w-[145px] h-[145px] rounded-2xl overflow-hidden"
                style={{
                  border: "2px solid rgba(34,211,238,0.4)",
                  boxShadow: "0 0 24px rgba(34,211,238,0.2)",
                }}
                initial={{ rotate: 6 }}
                animate={{ y: [0, -8, 0], rotate: 6 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/photo2.jpeg"
                  alt="Jayani Immidi"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative pulse dots */}
              <motion.div
                className="absolute top-6 -left-1 w-3 h-3 rounded-full bg-purple-400"
                style={{ boxShadow: "0 0 10px rgba(168,85,247,0.9)" }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-16 -left-5 w-2 h-2 rounded-full bg-cyan-400"
                style={{ boxShadow: "0 0 8px rgba(34,211,238,0.9)" }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-400 transition-colors group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-xs tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div
          className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center pt-2"
          whileHover={{ borderColor: "rgba(168,85,247,0.5)" }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-purple-500"
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-purple-500/60" />
        </motion.div>
      </motion.button>
    </section>
  );
}
