import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Globe } from "./Globe";


const roles = [
  "Computer Science Engineering Student",
  "Aspiring Software Developer",
  "Data Science Enthusiast",
];

const stats = [
  { value: "3+", label: "Projects" },
  { value: "8+", label: "Skills" },
  { value: "2024–28", label: "Learning Journey" },
];

export function About() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);

  // Typing effect
  useEffect(() => {
    const full = roles[roleIdx];
    let i = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!deleting) {
        i++;
        setTyped(full.slice(0, i));
        if (i === full.length) {
          deleting = true;
          timer = setTimeout(tick, 1400);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        i--;
        setTyped(full.slice(0, i));
        if (i === 0) {
          setRoleIdx((p) => (p + 1) % roles.length);
          return;
        }
        timer = setTimeout(tick, 30);
      }
    };
    timer = setTimeout(tick, 200);
    return () => clearTimeout(timer);
  }, [roleIdx]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.1,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={rootRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-28 pb-20 md:pt-32"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-bg" />
        <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] rounded-full bg-text-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 -right-32 w-[520px] h-[520px] rounded-full bg-text-primary/[0.04] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--text-primary)) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
        {/* Left content */}

        <div className="lg:col-span-3 space-y-7">
          <div className="about-reveal text-xs text-muted uppercase tracking-[0.3em]">
            About Me
          </div>

          <h1 className="about-reveal text-5xl md:text-7xl lg:text-8xl font-display italic leading-[0.95] tracking-tight text-text-primary">
            Madhur <span className="text-text-primary/70">Pandey</span>
          </h1>

          <div className="about-reveal text-base md:text-xl text-text-primary/90 min-h-[2em]">
            <span className="font-display italic">{typed}</span>
            <span className="inline-block w-[2px] h-5 md:h-6 bg-text-primary ml-1 align-middle animate-pulse" />
          </div>

          <div className="about-reveal space-y-4 text-sm md:text-base text-text-primary/75 leading-relaxed max-w-2xl">
            <p>
              I am a passionate Computer Science Engineering student with a strong interest in
              software development, data science, and problem-solving. I enjoy building projects,
              learning new technologies, and continuously improving my programming skills in{" "}
              <span className="text-text-primary">C++, Java, Python, MySQL</span>, and{" "}
              <span className="text-text-primary">Data Structures & Algorithms</span>.
            </p>
            <p className="text-muted">
              I love creating efficient solutions, exploring modern technologies, and applying
              logical thinking to real-world problems. Alongside tech, I actively work on
              communication, leadership, and public speaking.
            </p>
            <p className="text-muted">
              Currently focused on shipping impactful projects, sharpening problem-solving, and
              preparing for internship opportunities in software development and data-related
              domains.
            </p>
          </div>

          {/* CTAs */}
          <div className="about-reveal flex flex-wrap gap-3 md:gap-4 pt-2">
            <a href="#work" className="group relative rounded-full">
              <span className="absolute -inset-[2px] rounded-full accent-gradient-animated opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative inline-flex items-center gap-2 bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary rounded-full text-sm px-7 py-3.5 transition-colors">
                View Projects <ArrowDown size={14} />
              </span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-full"
            >
              <span className="absolute -inset-[2px] rounded-full accent-gradient-animated opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative inline-block border border-stroke bg-surface/60 backdrop-blur-md text-text-primary rounded-full text-sm px-7 py-3.5">
                Download Resume ↓
              </span>
            </a>
          </div>

          {/* Socials */}
          <div className="about-reveal flex items-center gap-3 pt-2">
            {[
              { Icon: Github, href: "https://github.com/pandeymadhur007", label: "GitHub" },
              {
                Icon: Linkedin,
                href: "https://linkedin.com/in/madhur-pandey-642b9230b",
                label: "LinkedIn",
              },
              { Icon: Mail, href: "mailto:pandeymadhur007@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-stroke bg-surface/40 backdrop-blur-md flex items-center justify-center text-text-primary/80 hover:text-text-primary hover:border-text-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: glass card with stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2 relative"
        >
          <div className="relative rounded-3xl border border-stroke bg-surface/30 backdrop-blur-2xl p-6 md:p-8 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-text-primary/5 blur-3xl" />
            <div className="relative">
              <div className="text-[11px] uppercase tracking-[0.25em] text-muted mb-5">
                At a glance
              </div>
              <div className="space-y-3">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                    className="group flex items-baseline justify-between rounded-2xl border border-stroke/70 bg-bg/40 px-5 py-4 hover:border-text-primary/30 hover:bg-bg/70 transition-all"
                  >
                    <span className="text-2xl md:text-3xl font-display italic text-text-primary">
                      {s.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-muted group-hover:text-text-primary/80 transition-colors">
                      {s.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-stroke/60 space-y-2 text-sm">
                <div className="flex justify-between text-muted">
                  <span>Degree</span>
                  <span className="text-text-primary">B.E. CSE · AI</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Institute</span>
                  <span className="text-text-primary">NMIET, Pune</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Status</span>
                  <span className="inline-flex items-center gap-2 text-text-primary">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Open to internships
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#work"
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group"
      >
        <span className="text-xs text-muted uppercase tracking-[0.2em] group-hover:text-text-primary transition-colors">
          Projects
        </span>
        <div className="w-px h-10 bg-stroke overflow-hidden relative">
          <div className="absolute inset-x-0 h-full accent-gradient animate-scroll-down" />
        </div>
      </a>
    </section>
  );
}
