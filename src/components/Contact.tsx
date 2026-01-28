import { motion } from "framer-motion";
import { personalInfo } from "../data";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding container-page flex flex-col gap-8 md:flex-row md:items-start md:justify-between"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md space-y-4"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
          Contact
        </p>
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-2xl">
          Let’s talk about how I can help your team.
        </h2>
        <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
          I am open to full-time roles, internships, and freelance
          opportunities. If you are hiring for Flutter, backend, or full-stack
          positions, I would be happy to share more details and discuss how I
          can contribute.
        </p>
        <div className="space-y-2 text-xs text-slate-300">
          <p>
            <span className="font-semibold text-slate-100">Email: </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-accent-300 hover:text-accent-100"
            >
              {personalInfo.email}
            </a>
          </p>
          <p>
            <span className="font-semibold text-slate-100">GitHub: </span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-accent-300 hover:text-accent-100"
            >
              {personalInfo.github}
            </a>
          </p>
          <p>
            <span className="font-semibold text-slate-100">LinkedIn: </span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-accent-300 hover:text-accent-100"
            >
              {personalInfo.linkedin}
            </a>
          </p>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel w-full max-w-md space-y-4 p-5 text-xs"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget as HTMLFormElement;
          const formData = new FormData(form);
          const subject = encodeURIComponent(
            `[Portfolio] ${formData.get("subject") || "New opportunity"}`
          );
          const body = encodeURIComponent(
            `Name: ${formData.get("name")}\nEmail: ${formData.get(
              "fromEmail"
            )}\n\nMessage:\n${formData.get("message")}`
          );
          window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
          form.reset();
        }}
      >
        <h3 className="text-sm font-semibold text-slate-50">
          Quick contact form
        </h3>
        <p className="text-[11px] text-slate-400">
          This will open your email client with a pre-filled message so you can
          reach out quickly.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-[11px] text-slate-300" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-accent-500/30 placeholder:text-slate-500 focus:ring-2"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-1">
            <label
              className="text-[11px] text-slate-300"
              htmlFor="fromEmail"
            >
              Email
            </label>
            <input
              id="fromEmail"
              name="fromEmail"
              type="email"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-accent-500/30 placeholder:text-slate-500 focus:ring-2"
              placeholder="you@company.com"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-[11px] text-slate-300" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-accent-500/30 placeholder:text-slate-500 focus:ring-2"
            placeholder="Flutter / backend opportunity"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[11px] text-slate-300" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-accent-500/30 placeholder:text-slate-500 focus:ring-2"
            placeholder="Share a bit about the role, team, and how I can help."
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="w-full rounded-full bg-accent-500 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-accent-500/40 hover:bg-accent-600"
        >
          Send email
        </motion.button>
      </motion.form>
    </section>
  );
};

