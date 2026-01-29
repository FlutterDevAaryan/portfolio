import { motion } from "framer-motion";

export const AboutAndSkills = () => {
  return (
    <section
      id="about"
      className="section-padding border-y border-slate-800/60 bg-slate-950/50"
    >
      <div className="container-page grid gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
            About
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
            I turn ideas into reliable mobile experiences.
          </h2>
          <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
            I specialize in building{" "}
            <span className="font-semibold text-slate-100">
              Flutter applications
            </span>{" "}
            and{" "}
            <span className="font-semibold text-slate-100">
              scalable backend services
            </span>
            . From designing UI and animations to implementing backend services
            and authentication, I enjoy owning features end-to-end.
          </p>
          <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
            My focus is on writing clean, maintainable code with clear
            architecture, while always keeping the end user in mind. I am
            comfortable working in product teams, collaborating with designers,
            and iterating quickly based on feedback.
          </p>
        </motion.div>

        <motion.div
          id="skills"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="glass-panel p-5"
        >
          <h3 className="mb-3 text-sm font-semibold text-slate-50">
            Key Skills
          </h3>
          <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-200">
            <div className="space-y-1">
              <p className="text-[11px] font-semibold text-slate-300">
                Flutter & Mobile
              </p>
              <ul className="space-y-1 text-[11px] text-slate-400">
                <li>Flutter, Dart</li>
                <li>State management (BLoC / GetX / Provider )</li>
                <li>Animations & custom widgets</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-semibold text-slate-300">
                Backend & APIs
              </p>
              <ul className="space-y-1 text-[11px] text-slate-400">
                <li>Node.js, Express</li>
                <li>REST, WebSocket</li>
                <li>MongoDB / Firebase</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-semibold text-slate-300">
                Architecture
              </p>
              <ul className="space-y-1 text-[11px] text-slate-400">
                <li>Clean architecture</li>
                <li>Modular codebases</li>
                <li>Testing & CDCI pipeline</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-semibold text-slate-300">
                Ways of working
              </p>
              <ul className="space-y-1 text-[11px] text-slate-400">
                <li>Git & GitHub</li>
                <li>Code reviews</li>
                <li>Agile / sprint-based work</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

