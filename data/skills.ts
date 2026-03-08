export interface Skill {
  name: string;
  category: "AI/ML" | "Backend" | "Frontend" | "Tools";
  icon: string;
  color: string;
}

export const skills: Skill[] = [
  // AI / ML
  { name: "Python", category: "AI/ML", icon: "🐍", color: "from-yellow-500/20 to-blue-500/20 border-yellow-500/30" },
  { name: "PyTorch", category: "AI/ML", icon: "🔥", color: "from-red-500/20 to-orange-500/20 border-red-500/30" },
  { name: "TensorFlow", category: "AI/ML", icon: "🔶", color: "from-orange-500/20 to-yellow-500/20 border-orange-500/30" },
  { name: "OpenCV", category: "AI/ML", icon: "👁️", color: "from-green-500/20 to-teal-500/20 border-green-500/30" },
  { name: "YOLO", category: "AI/ML", icon: "🎯", color: "from-red-500/20 to-orange-500/20 border-red-500/30" },
  { name: "LangChain", category: "AI/ML", icon: "⛓️", color: "from-green-500/20 to-emerald-500/20 border-green-500/30" },
  { name: "Scikit-learn", category: "AI/ML", icon: "📊", color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30" },

  // Backend
  { name: "FastAPI", category: "Backend", icon: "⚡", color: "from-teal-500/20 to-emerald-500/20 border-teal-500/30" },
  { name: "Node.js", category: "Backend", icon: "🟢", color: "from-green-600/20 to-green-400/20 border-green-500/30" },
  { name: "Java", category: "Backend", icon: "☕", color: "from-red-600/20 to-orange-600/20 border-red-600/30" },

  // Frontend
  { name: "React", category: "Frontend", icon: "⚛️", color: "from-cyan-400/20 to-blue-400/20 border-cyan-400/30" },
  { name: "Next.js", category: "Frontend", icon: "▲", color: "from-slate-400/20 to-gray-400/20 border-slate-400/30" },
  { name: "TypeScript", category: "Frontend", icon: "📘", color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30" },

  // Tools
  { name: "Git", category: "Tools", icon: "🌿", color: "from-orange-600/20 to-red-600/20 border-orange-600/30" },
  { name: "Docker", category: "Tools", icon: "🐳", color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30" },
];

export const skillCategories = ["All", "AI/ML", "Backend", "Frontend", "Tools"] as const;
export type SkillCategory = (typeof skillCategories)[number];
