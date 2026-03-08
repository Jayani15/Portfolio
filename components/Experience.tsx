"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Briefcase, GraduationCap, Star, Users } from "lucide-react";

const timelineEntries = [
  {
    type: "education",
    icon: <GraduationCap size={18} />,
    title: "B.Tech in Computer Science & Engineering",
    organization: "Amrita Vishwa Vidyapeetham, Amritapuri",
    period: "2024 – 2028",
    description:
      "Pursuing a bachelor's degree in CSE with a strong focus on AI, machine learning, and software engineering — building real-world systems alongside academic foundations.",
    tags: ["CSE", "AI/ML", "Software Engineering"],
    color: "#a855f7",
    gradient: "from-purple-600/20 to-purple-400/10",
    border: "border-purple-500/25",
  },
  {
    type: "club",
    icon: <Users size={18} />,
    title: "SIG AI — ACM Amritapuri",
    organization: "ACM Student Chapter, Amritapuri",
    period: "2024 – 2025",
    description:
      "Active member of the ACM Amritapuri student chapter's Special Interest Group in AI. Contributed to building AI projects, attended technical workshops, and helped organize and participate in hackathons.",
    tags: ["AI Projects", "Hackathons", "Community", "Research"],
    color: "#22d3ee",
    gradient: "from-cyan-600/20 to-cyan-400/10",
    border: "border-cyan-500/25",
  },
  {
    type: "internship",
    icon: <Briefcase size={18} />,
    title: "Software Engineering Intern",
    organization: "Coirei",
    period: "2026 – Present",
    description:
      "Currently interning at Coirei, applying skills in AI and software development to real-world engineering challenges in a professional environment.",
    tags: ["Internship", "AI", "Software Development"],
    color: "#34d399",
    gradient: "from-emerald-600/20 to-emerald-400/10",
    border: "border-emerald-500/25",
  },
];

const typeLabels: Record<string, { label: string; style: string }> = {
  education: { label: "Education", style: "bg-purple-500/15 text-purple-300 border-purple-500/30" },
  club: { label: "Club", style: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30" },
  internship: { label: "Internship", style: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
};

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030318]" />
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)" }}
      />

      {/* Orbs */}
      <div className="absolute left-1/3 top-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex justify-center">
            <span className="section-badge">
              <Award size={12} />
              Journey
            </span>
          </div>
          <h2
            className="section-heading mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Experience &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            A timeline of academic milestones, technical achievements, and key moments that define my growth as an AI developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "linear-gradient(180deg, transparent, rgba(168,85,247,0.5) 15%, rgba(34,211,238,0.5) 85%, transparent)" }}
          />

          <div className="space-y-8">
            {timelineEntries.map((entry, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Dot on timeline */}
                  <div
                    className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#030318] z-10 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${entry.color}, ${entry.color}88)`,
                      boxShadow: `0 0 12px ${entry.color}60`,
                      top: "24px",
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  </div>

                  {/* Card: alternating layout on desktop */}
                  <div
                    className={`ml-16 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${
                      isEven ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                    }`}
                  >
                    <motion.div
                      className={`rounded-2xl p-6 bg-gradient-to-br ${entry.gradient} border ${entry.border} transition-all duration-300`}
                      whileHover={{
                        y: -3,
                        boxShadow: `0 12px 40px ${entry.color}20`,
                        borderColor: `${entry.color}45`,
                      }}
                    >
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-start gap-3">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{
                              background: `${entry.color}20`,
                              border: `1px solid ${entry.color}35`,
                              color: entry.color,
                            }}
                          >
                            {entry.icon}
                          </div>
                          <div>
                            <h3
                              className="font-bold text-white text-base leading-snug"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              {entry.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                              <span className="text-slate-400 text-xs">{entry.organization}</span>
                              <span className="text-slate-600 text-xs">·</span>
                              <span className="text-slate-500 text-xs font-mono">{entry.period}</span>
                            </div>
                          </div>
                        </div>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border flex-shrink-0 ${typeLabels[entry.type].style}`}
                        >
                          {typeLabels[entry.type].label}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{entry.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {entry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                            style={{
                              background: `${entry.color}12`,
                              color: entry.color + "cc",
                              border: `1px solid ${entry.color}25`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{ background: "rgba(168,85,247,0.06)", border: "1px solid rgba(168,85,247,0.2)" }}
          >
            <span className="text-2xl">🚀</span>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">And the journey continues…</p>
              <p className="text-slate-400 text-xs mt-0.5">Building smarter systems every day</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
