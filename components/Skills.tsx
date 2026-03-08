"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { skills, skillCategories, type SkillCategory } from "@/data/skills";

const categoryColors: Record<SkillCategory, { pill: string; pillActive: string; dot: string }> = {
  All: {
    pill: "bg-white/5 border-white/10 text-slate-400",
    pillActive: "bg-purple-500/20 border-purple-500/40 text-purple-300",
    dot: "#a855f7",
  },
  "AI/ML": {
    pill: "bg-purple-500/5 border-purple-500/15 text-slate-400",
    pillActive: "bg-purple-500/20 border-purple-500/50 text-purple-200",
    dot: "#a855f7",
  },
  Backend: {
    pill: "bg-cyan-500/5 border-cyan-500/15 text-slate-400",
    pillActive: "bg-cyan-500/20 border-cyan-500/50 text-cyan-200",
    dot: "#22d3ee",
  },
  Frontend: {
    pill: "bg-pink-500/5 border-pink-500/15 text-slate-400",
    pillActive: "bg-pink-500/20 border-pink-500/50 text-pink-200",
    dot: "#f472b6",
  },
  Tools: {
    pill: "bg-amber-500/5 border-amber-500/15 text-slate-400",
    pillActive: "bg-amber-500/20 border-amber-500/50 text-amber-200",
    dot: "#fbbf24",
  },
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const filtered =
    activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" ref={ref} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030318]" />
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)" }}
      />

      {/* Orbs */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="mb-4 flex justify-center">
            <span className="section-badge">
              <Sparkles size={12} />
              Tech Stack
            </span>
          </div>

          <h2
            className="section-heading text-center mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skillCategories.map((cat) => {
            const isActive = cat === activeCategory;
            const colors = categoryColors[cat];
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-250 relative overflow-hidden ${
                  isActive ? colors.pillActive : colors.pill
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="skill-filter-bg"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "rgba(168,85,247,0.12)" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: colors.dot }}
                    />
                  )}
                  {cat}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filtered.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                layout
                className={`
                  relative group flex flex-col items-center gap-2.5 p-4 rounded-xl cursor-default
                  transition-all duration-250 text-center
                  bg-gradient-to-br border ${skill.color}
                `}
                whileHover={{
                  scale: 1.06,
                  y: -4,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                  <div
                    className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }}
                  />
                </div>

                {/* Icon */}
                <span
                  className="text-2xl filter drop-shadow-sm transition-transform duration-200 group-hover:scale-110"
                  role="img"
                  aria-label={skill.name}
                >
                  {skill.icon}
                </span>

                {/* Name */}
                <span className="text-slate-300 font-medium text-xs leading-tight group-hover:text-white transition-colors">
                  {skill.name}
                </span>

                {/* Category dot on hover */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] text-slate-500 font-mono">{skill.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom count */}
        <motion.p
          className="text-center text-slate-600 text-sm mt-8 font-mono"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          showing{" "}
          <span className="text-purple-400">{filtered.length}</span>
          {" "}of{" "}
          <span className="text-purple-400">{skills.length}</span>
          {" "}technologies
        </motion.p>
      </div>
    </section>
  );
}
