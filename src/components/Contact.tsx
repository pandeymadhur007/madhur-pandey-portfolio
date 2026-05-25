import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { SectionHeader } from "./SectionHeader";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const info = [
  { label: "Email", value: "pandeymadhur007@gmail.com", href: "mailto:pandeymadhur007@gmail.com" },
  { label: "GitHub", value: "github.com/pandeymadhur007", href: "https://github.com/pandeymadhur007" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/madhur-pandey",
    href: "https://linkedin.com/in/madhur-pandey-642b9230b",
  },
  { label: "Location", value: "Pune, India", href: null },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setError(null);
    const subject = encodeURIComponent(`Portfolio inquiry from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:pandeymadhur007@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Contact"
          title="Let's talk"
          italicWord="talk"
          subtitle="Have a project, role, or idea? Drop a message and I'll get back within a day or two."
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl border border-stroke bg-surface/40 backdrop-blur-md p-6 md:p-8 space-y-4"
          >
            <div>
              <label htmlFor="name" className="text-[11px] uppercase tracking-[0.2em] text-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="mt-2 w-full bg-bg border border-stroke rounded-full px-5 py-3 text-sm text-text-primary focus:outline-none focus:border-text-primary/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-[11px] uppercase tracking-[0.2em] text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="mt-2 w-full bg-bg border border-stroke rounded-full px-5 py-3 text-sm text-text-primary focus:outline-none focus:border-text-primary/40"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-[11px] uppercase tracking-[0.2em] text-muted">
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                className="mt-2 w-full bg-bg border border-stroke rounded-3xl px-5 py-3 text-sm text-text-primary focus:outline-none focus:border-text-primary/40 resize-none"
                placeholder="Tell me about your project or role…"
              />
            </div>
            {error && <p className="text-xs text-red-400">{error}</p>}
            {sent && !error && <p className="text-xs text-green-400">Opening your email client…</p>}
            <button
              type="submit"
              className="group relative rounded-full inline-block"
            >
              <span className="absolute -inset-[2px] rounded-full accent-gradient-animated opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative inline-block bg-text-primary text-bg rounded-full text-sm px-7 py-3.5">
                Send message ↗
              </span>
            </button>
          </motion.form>

          <div className="lg:col-span-2 space-y-3">
            {info.map((i, idx) => (
              <motion.a
                key={i.label}
                href={i.href ?? "#"}
                target={i.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                onClick={(e) => !i.href && e.preventDefault()}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="block rounded-2xl border border-stroke bg-surface/40 hover:bg-surface/70 p-5 transition-colors"
              >
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted mb-1">
                  {i.label}
                </div>
                <div className="text-sm md:text-base text-text-primary truncate">{i.value}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
