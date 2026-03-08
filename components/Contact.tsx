"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MessageSquare, Send, Github, Linkedin, CheckCircle2, MapPin } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const socialLinks = [
  {
    icon: <Github size={20} />,
    label: "GitHub",
    handle: "@Jayani15",
    href: "https://github.com/Jayani15/",
    color: "#e2e8f0",
    hoverColor: "rgba(226,232,240,0.1)",
    borderHover: "rgba(226,232,240,0.2)",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    handle: "Jayani Immidi",
    href: "https://www.linkedin.com/in/jayani-immidi-b18770310/",
    color: "#60a5fa",
    hoverColor: "rgba(96,165,250,0.08)",
    borderHover: "rgba(96,165,250,0.3)",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    handle: "jayaniimmidi@gmail.com",
    href: "mailto:jayanimmidii@gmail.com",
    color: "#a855f7",
    hoverColor: "rgba(168,85,247,0.08)",
    borderHover: "rgba(168,85,247,0.3)",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
    toast.success("Message sent! I'll get back to you soon. 🚀");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const containerVars = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
  const itemVars = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0f0f2a",
            color: "#f1f5f9",
            border: "1px solid rgba(168,85,247,0.3)",
            borderRadius: "12px",
          },
        }}
      />

      <section id="contact" ref={ref} className="relative py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#020210]" />
        <div className="absolute inset-0 line-grid" />
        <div
          className="absolute top-0 left-0 w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)" }}
        />

        {/* Orbs */}
        <div className="absolute left-0 top-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)" }}
        />
        <div className="absolute right-0 bottom-1/4 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Header */}
            <motion.div variants={itemVars} className="text-center mb-14">
              <div className="mb-4 flex justify-center">
                <span className="section-badge">
                  <MessageSquare size={12} />
                  Contact
                </span>
              </div>
              <h2
                className="section-heading mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Let&apos;s Build Something{" "}
                <span className="gradient-text">Together</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
                Whether you&apos;re looking to collaborate on an AI project, discuss opportunities, or just want to talk tech — I&apos;m all ears.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-10 items-start">

              {/* LEFT — Info & Socials */}
              <motion.div variants={itemVars} className="lg:col-span-2 space-y-6">

                {/* Availability card */}
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-sm font-semibold">Available for opportunities</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    I&apos;m currently open to freelance projects, internships, and full-time AI/software engineering roles. If you have something exciting, let&apos;s talk.
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin size={14} className="text-purple-400" />
                    <span>India · Remote-Friendly</span>
                  </div>
                </div>

                {/* Social links */}
                <div className="space-y-3">
                  <p className="text-slate-600 text-xs font-mono uppercase tracking-widest mb-3">Connect with me</p>
                  {socialLinks.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target={s.label !== "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-250 group"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                      whileHover={{
                        background: s.hoverColor,
                        borderColor: s.borderHover,
                        x: 4,
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                        style={{ background: `${s.color}12`, color: s.color, border: `1px solid ${s.color}25` }}
                      >
                        {s.icon}
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{s.label}</p>
                        <p className="text-slate-500 text-xs font-mono">{s.handle}</p>
                      </div>
                      <div className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors">→</div>
                    </motion.a>
                  ))}
                </div>

                {/* Response time */}
                <div
                  className="rounded-xl p-4 flex items-center gap-3"
                  style={{ background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.15)" }}
                >
                  <span className="text-xl">⚡</span>
                  <div>
                    <p className="text-white/80 text-sm font-medium">Fast Response</p>
                    <p className="text-slate-500 text-xs">Typically replies within 12 hours</p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT — Contact Form */}
              <motion.div variants={itemVars} className="lg:col-span-3">
                <div
                  className="rounded-2xl p-8"
                  style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <h3
                    className="font-bold text-white text-xl mb-6"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Send me a message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-400 text-xs font-medium uppercase tracking-widest block mb-2">
                          Name <span className="text-purple-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="input-field"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-xs font-medium uppercase tracking-widest block mb-2">
                          Email <span className="text-purple-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="input-field"
                          required
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="text-slate-400 text-xs font-medium uppercase tracking-widest block mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="input-field"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-slate-400 text-xs font-medium uppercase tracking-widest block mb-2">
                        Message <span className="text-purple-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        rows={5}
                        className="input-field resize-none"
                        required
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={sending || sent}
                      className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2.5 transition-all duration-300 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                      whileHover={!sending && !sent ? { scale: 1.01, boxShadow: "0 0 30px rgba(168,85,247,0.4)" } : {}}
                      whileTap={!sending && !sent ? { scale: 0.99 } : {}}
                    >
                      {/* Shimmer overlay */}
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                        style={{ background: "linear-gradient(135deg, #06b6d4, #7c3aed)" }}
                      />

                      <span className="relative z-10 flex items-center gap-2.5">
                        {sent ? (
                          <>
                            <CheckCircle2 size={18} />
                            Message Sent!
                          </>
                        ) : sending ? (
                          <>
                            <motion.div
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            Send Message
                          </>
                        )}
                      </span>
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
