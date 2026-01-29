import { motion } from "framer-motion";
import { projects } from "../data";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-page space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
              Selected Work
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Projects that represent my work
            </h2>
          </div>
          <p className="max-w-md text-xs text-slate-400 md:text-sm">
            A curated selection of 8 Flutter apps and a Node.js backend,
            all available as open-source repositories on GitHub. Each project
            highlights clean architecture, robust engineering, and thoughtful
            UX.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={card}
              className="glass-panel group flex h-full flex-col justify-between p-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-slate-50 md:text-base">
                    {project.title}
                  </h3>
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-300">
                    {project.type}
                  </span>
                </div>
                <p className="text-xs text-slate-300 md:text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] text-slate-300">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-900/80 px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-2 space-y-1 text-xs text-slate-400">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-accent-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-accent-300 hover:text-accent-100"
                >
                  <span>View on GitHub</span>
                  <span className="text-[10px]">↗</span>
                </a>
                <span className="text-[10px] text-slate-400">
                  Open source • Code available
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

