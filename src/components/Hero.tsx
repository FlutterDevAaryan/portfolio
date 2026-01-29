import { motion } from "framer-motion";
import { personalInfo } from "../data";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="section-padding container-page flex flex-col items-center gap-10 md:flex-row md:justify-between"
    >
      <motion.div
        className="max-w-xl space-y-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
          Flutter • Node.js
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
          Building high-quality{" "}
          <span className="bg-gradient-to-r from-accent-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
            mobile apps
          </span>{" "}
          and scalable backends.
        </h1>
        <p className="text-sm leading-relaxed text-slate-300 md:text-base">
          I am {personalInfo.name}, a{" "}
          <span className="font-semibold text-slate-100">
            {personalInfo.role}
          </span>{" "}
          with hands-on experience delivering production-ready Flutter
          applications and backend. I care deeply about clean
          architecture, performance, and user experience.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-accent-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-accent-500/40 hover:bg-accent-600"
          >
            View Projects
          </motion.a>
          <motion.a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-slate-700 px-5 py-2.5 text-xs font-semibold text-slate-100 hover:border-accent-400 hover:text-accent-200"
          >
            Download Resume
          </motion.a>
          <div className="flex flex-col text-xs text-slate-400">
            <span>Actively looking for opportunities</span>
            <span className="text-slate-300">
              Based in {personalInfo.location}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="glass-panel relative flex h-64 w-full max-w-xs items-center justify-center overflow-hidden md:h-72 md:max-w-sm"
        initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-slate-900 to-fuchsia-500/10" />
        <div className="relative flex flex-col items-center gap-3">
          <div className="relative h-28 w-28 overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/80 shadow-lg shadow-slate-900/80">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-500/40 via-slate-950 to-fuchsia-500/30 text-3xl font-bold text-white">
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
          </div>
          <div className="space-y-1 text-center">
            <p className="text-sm font-semibold text-slate-50">
              {personalInfo.name}
            </p>
            <p className="text-xs text-slate-400">{personalInfo.role}</p>
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-[10px] text-slate-300">
            <span className="rounded-full bg-slate-900/80 px-3 py-1">
              8+ Flutter apps
            </span>
            <span className="rounded-full bg-slate-900/80 px-3 py-1">
              Node.js backend
            </span>
            <span className="rounded-full bg-slate-900/80 px-3 py-1">
              Open source on GitHub
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

