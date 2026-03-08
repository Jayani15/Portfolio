"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Layers, CheckCircle2, ArrowUpRight, FolderGit2, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const categoryFilters = ["All", "AI/ML", "Blockchain", "Web", "DevOps", "Education"] as const;

function ProjectCard({
  project,
  onClick,
  index,
}: {
  project: Project;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      className="gradient-border-card group cursor-pointer overflow-hidden"
      style={{ background: "rgba(255,255,255,0.025)" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      whileHover={{ y: -6 }}
    >
      {/* Accent top stripe */}
      <div
        className="h-1 w-full rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${project.gradientFrom}, ${project.gradientTo})` }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: `linear-gradient(135deg, ${project.gradientFrom}20, ${project.gradientTo}20)`, border: `1px solid ${project.accentColor}30` }}
            >
              {project.icon}
            </div>
            <div>
              <span
                className="text-xs font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
                style={{
                  background: `${project.accentColor}15`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}30`,
                }}
              >
                {project.category}
              </span>
            </div>
          </div>
          <motion.div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <ArrowUpRight size={15} />
          </motion.div>
        </div>

        {/* Title */}
        <h3
          className="font-bold text-white text-lg mb-1 group-hover:text-white transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
        >
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm font-medium mb-3" style={{ color: project.accentColor + "cc" }}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full font-medium text-slate-300"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="text-xs px-2.5 py-1 rounded-full font-medium text-slate-500"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              +{project.tech.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom CTA bar */}
      <div
        className="px-6 py-3.5 flex items-center justify-between border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <span className="text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors flex items-center gap-1.5">
          <FolderGit2 size={14} />
          View Details
        </span>
        <div
          className="w-6 h-px transition-all duration-300 group-hover:w-14"
          style={{ background: `linear-gradient(90deg, ${project.gradientFrom}, ${project.gradientTo})` }}
        />
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      <motion.div
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto modal-scroll rounded-2xl"
        style={{ background: "#0b0b22", border: "1px solid rgba(255,255,255,0.1)" }}
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient header */}
        <div
          className="h-2 w-full rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, ${project.gradientFrom}, ${project.gradientTo})` }}
        />

        <div className="p-8">
          {/* Close */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: `linear-gradient(135deg, ${project.gradientFrom}25, ${project.gradientTo}25)`, border: `1px solid ${project.accentColor}35` }}
              >
                {project.icon}
              </div>
              <div>
                <h2
                  className="font-bold text-white text-2xl mb-0.5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
                >
                  {project.title}
                </h2>
                <p className="text-slate-400 text-sm" style={{ color: project.accentColor + "bb" }}>
                  {project.subtitle}
                </p>
              </div>
            </div>
            <motion.button
              onClick={onClose}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={16} />
            </motion.button>
          </div>

          {/* Category badge */}
          <span
            className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-5"
            style={{ background: `${project.accentColor}18`, color: project.accentColor, border: `1px solid ${project.accentColor}35` }}
          >
            {project.category}
          </span>

          {/* Long Description */}
          <div
            className="rounded-xl p-5 mb-6"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-slate-300 text-sm leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-white font-semibold text-sm mb-3 uppercase tracking-widest">
              <CheckCircle2 size={14} className="text-emerald-400" />
              Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-2.5 p-3 rounded-lg text-sm text-slate-300"
                  style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: project.accentColor }} />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="flex items-center gap-2 text-white font-semibold text-sm mb-3 uppercase tracking-widest">
              <Layers size={14} className="text-purple-400" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm px-3.5 py-1.5 rounded-full font-medium text-slate-200"
                  style={{
                    background: `${project.accentColor}12`,
                    border: `1px solid ${project.accentColor}30`,
                    color: project.accentColor + "ee",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub Link */}
          {project.github && (
            <div className="mt-6 pt-5 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
                style={{ background: `${project.accentColor}18`, border: `1px solid ${project.accentColor}35`, color: project.accentColor }}
              >
                <ExternalLink size={14} />
                View on GitHub
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <section id="projects" ref={ref} className="relative py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#020210]" />
        <div className="absolute inset-0 line-grid" />
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)" }}
        />

        {/* Orbs */}
        <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)" }}
        />
        <div className="absolute left-0 bottom-1/3 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2
              className="section-heading mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
              A selection of projects that showcase my ability to build intelligent, impactful systems
              from concept to deployment.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {categoryFilters.map((cat) => {
              const isActive = cat === activeFilter;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    isActive
                      ? "bg-purple-500/20 border-purple-500/50 text-purple-300"
                      : "bg-white/4 border-white/10 text-slate-400 hover:text-slate-300 hover:border-white/20"
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {cat}
                  {isActive && (
                    <span className="ml-1.5 text-xs text-purple-400">
                      ({filtered.length})
                    </span>
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
