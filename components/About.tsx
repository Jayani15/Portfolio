"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Code2, Cpu, Eye, Terminal, Zap } from "lucide-react";

const stats = [
  { value: "+", label: "Projects Built", icon: <Brain size={18} /> },
  { value: "15+", label: "Technologies", icon: <Cpu size={18} /> },
  { value: "1.5+", label: "Years Coding", icon: <Code2 size={18} /> },
  { value: "∞", label: "Curiosity", icon: <Zap size={18} /> },
];

const focusAreas = [
  { icon: <Brain size={15} />, label: "AI Agents" },
  { icon: <Cpu size={15} />, label: "Machine Learning" },
  { icon: <Eye size={15} />, label: "Computer Vision" },
  { icon: <Code2 size={15} />, label: "Full Stack Dev" },
  { icon: <Terminal size={15} />, label: "Backend Engineering" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#020210]" />
      <div className="absolute inset-0 line-grid" />
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)" }}
      />
      <div
        className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute left-0 bottom-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-4 flex justify-center">
            <span className="section-badge">
              <Code2 size={12} />
              About Me
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="section-heading text-center mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            AI Developer.{" "}
            <span className="gradient-text">Problem Solver.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-center max-w-xl mx-auto mb-14 text-base leading-relaxed"
          >
            Turning complex real-world problems into intelligent, working systems.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-10 items-start">

            <motion.div variants={itemVariants} className="space-y-5">
              <div
                className="rounded-2xl p-7 space-y-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-slate-500 text-xs font-mono">about.md</span>
                </div>

                <p className="text-slate-300 leading-relaxed text-[0.97rem]">
                  I&apos;m <span className="highlight">Jayani Immidi</span>, an AI + Software Developer passionate about building{" "}
                  <span className="highlight-cyan">intelligent systems</span> that think, learn, and adapt. My work spans machine learning,
                  computer vision, and full-stack engineering — always focused on solving problems that actually matter.
                </p>

                <p className="text-slate-300 leading-relaxed text-[0.97rem]">
                  From <span className="highlight">real-time facial expression detection</span> to{" "}
                  <span className="highlight-cyan">customer churn prediction</span> and{" "}
                  <span className="highlight">autonomous DevOps agents</span> — I build end-to-end systems with a strong foundation
                  in Python, deep learning, and modern web technologies.
                </p>
              </div>

              <div>
                <p className="text-slate-500 text-xs font-mono mb-3 uppercase tracking-widest">What I work on</p>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <motion.span
                      key={area.label}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-300 transition-all duration-200"
                      style={{
                        background: "rgba(168,85,247,0.08)",
                        border: "1px solid rgba(168,85,247,0.2)",
                      }}
                      whileHover={{
                        background: "rgba(168,85,247,0.16)",
                        borderColor: "rgba(168,85,247,0.4)",
                        color: "#e2e8f0",
                      }}
                    >
                      <span className="text-purple-400">{area.icon}</span>
                      {area.label}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-2xl p-5 text-center group cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{
                      background: "rgba(168,85,247,0.07)",
                      borderColor: "rgba(168,85,247,0.25)",
                      y: -3,
                    }}
                  >
                    <div className="flex items-center justify-center gap-1.5 text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                      {stat.icon}
                    </div>
                    <div
                      className="gradient-text font-extrabold mb-1"
                      style={{ fontSize: "2rem", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div
                className="rounded-2xl p-6 font-mono text-sm"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Terminal size={14} className="text-purple-400" />
                  <span className="text-slate-500 text-xs">profile.json</span>
                </div>
                <div className="space-y-1.5 text-[0.83rem]">
                  <div><span className="text-purple-400">name: </span><span className="text-emerald-400">&quot;Jayani Immidi&quot;</span></div>
                  <div><span className="text-purple-400">role: </span><span className="text-cyan-400">&quot;AI + Software Developer&quot;</span></div>
                  <div><span className="text-purple-400">focus: </span><span className="text-yellow-400">[&quot;ML&quot;, &quot;Computer Vision&quot;, &quot;AI Agents&quot;]</span></div>
                  <div><span className="text-purple-400">languages: </span><span className="text-orange-400">[&quot;Python&quot;, &quot;Java&quot;, &quot;JavaScript&quot;]</span></div>
                  <div>
                    <span className="text-purple-400">status: </span>
                    <span className="text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block mr-1.5" />
                      &quot;Open to Opportunities&quot;
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
