"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020210] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Background orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[120px] animate-pulse-orb" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-cyan-600/10 blur-[100px] animate-pulse-orb" style={{ animationDelay: "1s" }} />

      {/* Spinner ring */}
      <div className="relative w-24 h-24 mb-8">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent animate-spin-ring"
          style={{
            background: "linear-gradient(#020210, #020210) padding-box, linear-gradient(135deg, #a855f7, #22d3ee, #818cf8) border-box",
          }}
        />
        {/* Inner pulsing dot ring */}
        <div className="absolute inset-3 rounded-full border border-purple-500/20 animate-pulse" />
        {/* Center initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="gradient-text font-bold text-xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          >
            JI
          </motion.span>
        </div>
      </div>

      {/* Name reveal */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h1
          className="gradient-text text-2xl font-bold tracking-wide mb-1"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Jayani Immidi
        </h1>
        <p className="text-slate-500 text-sm tracking-[0.2em] uppercase">
          Loading Portfolio...
        </p>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        className="absolute bottom-12 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #a855f7, #22d3ee)" }}
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
}
