import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
        <div className="container-page flex items-center justify-between py-4">
          <a href="#hero" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-accent-500 text-sm font-semibold shadow-lg shadow-accent-500/40">
              {personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-400">
                {personalInfo.role}
              </span>
            </div>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
            <a href="#projects" className="hover:text-accent-400">
              Projects
            </a>
            <a href="#about" className="hover:text-accent-400">
              About
            </a>
            <a href="#skills" className="hover:text-accent-400">
              Skills
            </a>
            <a href="#contact" className="hover:text-accent-400">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hidden text-xs font-medium text-slate-300 hover:text-accent-400 sm:inline"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hidden text-xs font-medium text-slate-300 hover:text-accent-400 sm:inline"
            >
              LinkedIn
            </a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-accent-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-accent-500/40 hover:bg-accent-600"
            >
              Hire Me
            </motion.a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-800/80 py-6 text-xs text-slate-500">
        <div className="container-page flex flex-col items-center justify-between gap-3 md:flex-row">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
          <p className="flex gap-2">
            <span>Open to:</span>
            <span className="font-medium text-slate-300">
              Flutter, Backend, Full-Stack roles
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

