import React from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Hammer, Leaf, CircuitBoard, Github, Linkedin } from "lucide-react";

const moss = "#2F3B2F";
const copper = "#B86B36";
const bark = "#3F2F25";
const parchment = "#F3EFE8";

const floatingOrbs = [
  {
    className:
      "left-[-10%] top-[-12%] h-72 w-72 bg-[radial-gradient(circle,rgba(184,107,54,0.35)_0%,rgba(184,107,54,0)_70%)]"
  },
  {
    className:
      "right-[-8%] top-[18%] hidden h-64 w-64 md:block bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_70%)]"
  },
  {
    className:
      "left-[12%] bottom-[-20%] h-96 w-96 bg-[radial-gradient(circle,rgba(89,119,89,0.32)_0%,rgba(89,119,89,0)_65%)]"
  }
];

const heroHighlights = [
  { label: "Average handoff time", value: "48 hrs" },
  { label: "Production uptime", value: "99.97%" },
  { label: "Systems shipped", value: "140+" }
];

const apps = [
  {
    title: "Burrow Ledger",
    description:
      "A mindful ledger for indie studios. Surface profit health, cash runway, and team loads in one place."
  },
  {
    title: "Moss Signals",
    description:
      "Operational analytics that stay out of your way. Drop in tracking, get the story, and stay focused."
  },
  {
    title: "Cabin Dispatch",
    description:
      "Field service routing for teams that care about customer experience as much as the job."
  }
];

const featureBlocks = [
  {
    icon: <Hammer className="h-5 w-5" />,
    title: "Made for change",
    desc: "Composable systems that welcome iteration and scale."
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Types first",
    desc: "Readable TypeScript, tidy dependencies, and tight feedback loops."
  },
  {
    icon: <CircuitBoard className="h-5 w-5" />,
    title: "Edge aware",
    desc: "Serverless and edge-native deployments that stay maintainable."
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    title: "Sustainability",
    desc: "Lean, maintainable software with small footprints."
  }
];

const principles = [
  "Design for clarity. Communicate intent in code and UI.",
  "Prefer small pieces, well-fitted. Compose instead of accrete.",
  "Measure, observe, and iterate. Leave a map for others.",
  "Accessibility by default. Performance with humility."
];

const timeline = [
  {
    year: "2018",
    title: "Studio founded",
    detail: "Two product engineers and a designer leave big tech to focus on small, enduring systems."
  },
  {
    year: "2020",
    title: "Edge-first pivot",
    detail: "Adopted edge-native deployments to keep experiences responsive across continents."
  },
  {
    year: "2023",
    title: "Design systems practice",
    detail: "Launched shared component libraries for fast, consistent multi-product delivery."
  }
];

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.span
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-[var(--copper)] via-amber-200 to-emerald-200"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function Logo({ className = "h-10 w-10" }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="55" stroke={copper} strokeWidth="10" />
      <path
        d="M30 68c0-22 13-40 30-40s30 18 30 40"
        stroke={copper}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M45 78c6 0 6 0 0 0M60 86c8 0 8 0 0 0M75 78c6 0 6 0 0 0"
        stroke={copper}
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const Section = ({ id, children, className = "", delay = 0 }) => (
  <motion.section
    id={id}
    className={`relative py-20 md:py-28 ${className}`}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.7, ease: "easeOut", delay }}
  >
    <div className="absolute inset-0 -z-10 opacity-40 blur-3xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,107,54,0.18),transparent_55%)]" />
    </div>
    {children}
  </motion.section>
);

const Wrapper = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>
);

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[var(--moss)] text-[var(--parchment)]"
      style={{
        ["--moss"]: moss,
        ["--copper"]: copper,
        ["--bark"]: bark,
        ["--parchment"]: parchment
      }}
    >
      <ScrollProgressBar />

      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
        {floatingOrbs.map((orb, index) => (
          <motion.span
            key={index}
            className={`absolute rounded-full blur-3xl ${orb.className}`}
            animate={{ y: [0, 25, -20, 0], scale: [1, 1.05, 0.97, 1] }}
            transition={{ duration: 18 + index * 4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-[0.08]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--moss)]/70 backdrop-blur">
        <Wrapper className="flex items-center justify-between py-4">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Logo className="h-9 w-9" />
            <span className="font-semibold tracking-wide">The Burrow Co.</span>
          </motion.div>
          <nav className="hidden items-center gap-10 text-sm md:flex">
            {[
              { label: "Apps", href: "#apps" },
              { label: "Features", href: "#features" },
              { label: "About", href: "#about" }
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative transition-colors hover:text-[var(--copper)]"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <motion.span
                  className="absolute left-0 top-full block h-px w-full bg-gradient-to-r from-transparent via-[var(--copper)] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            ))}
            <Button variant="glow" className="rounded-2xl px-5 py-2 text-xs uppercase tracking-[0.2em]">
              Start a project
            </Button>
          </nav>
        </Wrapper>
      </header>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 35%, rgba(184,107,54,0.18) 0%, rgba(47,59,47,0) 70%), radial-gradient(40% 40% at 80% 10%, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0) 70%)"
          }}
        />
        <Wrapper>
          <div className="grid items-center gap-12 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 shadow-lg shadow-black/20"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(0,0,0,0.15)",
                    "0 20px 60px rgba(0,0,0,0.35)",
                    "0 0 0 rgba(0,0,0,0.15)"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Leaf className="h-4 w-4 text-[var(--copper)]" />
                Crafted for calm
              </motion.span>
              <div className="max-w-xl space-y-6">
                <motion.h1
                  className="text-4xl font-extrabold leading-tight md:text-6xl"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, #F3EFE8 0%, #F3EFE8 45%, rgba(184,107,54,0.85) 50%, #F3EFE8 55%, #F3EFE8 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                  Nature's Designs
                  <span className="text-[var(--copper)]"> Crafted with Code.</span>
                </motion.h1>
                <p className="text-lg text-white/80">
                  We are a small team crafting resilient applications with the patience of hand
                  tools and the precision of modern engineering disciplines.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#apps">
                  <Button variant="glow" className="rounded-2xl px-6 py-3 text-sm">
                    Explore our work
                  </Button>
                </a>
                <a href="#features">
                  <Button variant="outline" className="rounded-2xl px-6 py-3 text-sm">
                    See our approach
                  </Button>
                </a>
              </div>
              <motion.div
                className="grid gap-4 rounded-3xl border border-white/5 bg-black/20 p-6 backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Vitals</p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {heroHighlights.map((highlight) => (
                    <motion.div
                      key={highlight.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    >
                      <p className="text-sm text-white/60">{highlight.label}</p>
                      <p className="mt-2 text-xl font-semibold text-white">{highlight.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[var(--bark)]/60 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            >
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_65%)] opacity-70"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative grid gap-6">
                <div className="space-y-2">
                  <motion.h2
                    className="text-2xl font-semibold text-white"
                    whileHover={{ letterSpacing: "0.02em" }}
                  >
                    Small teams, deep focus
                  </motion.h2>
                  <p className="text-sm text-white/75">
                    Each engagement pairs you with senior practitioners who stay close to the work.
                    No hand-offs, no mystery layers.
                  </p>
                </div>
                <div className="grid gap-4">
                  {[Code2, Hammer, CircuitBoard].map((Icon, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 220, damping: 16 }}
                    >
                      <Icon className="h-6 w-6 text-[var(--copper)]" />
                      <span className="text-sm text-white/80">
                        {index === 0 && "Product engineering with instrumentation"}
                        {index === 1 && "Design systems crafted for cohesion"}
                        {index === 2 && "Edge-native infrastructure ready for scale"}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 p-5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.45em] text-white/60">Collaboration</p>
                    <p className="text-sm text-white/80">Linear . Figma . GitHub . Notion</p>
                  </div>
                  <Button variant="ghost" className="rounded-2xl px-5 py-2 text-xs uppercase tracking-wide">
                    Let's talk
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </div>

      <Section id="apps" className="bg-[#243024]">
        <Wrapper>
          <motion.div
            className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold md:text-4xl">Living product experiments</h2>
              <p className="max-w-xl text-white/80">
                The Burrow Co. builds purposeful apps that favor clarity over clutter. Everything ships
                with observability, generous docs, and the polish your team deserves.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Button variant="outline" className="flex items-center gap-2 rounded-2xl px-5">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <Button variant="glow" className="flex items-center gap-2 rounded-2xl px-5">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {apps.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <motion.div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-[var(--copper)]/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Card className="bg-[var(--bark)]/55 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{item.title}</CardTitle>
                      <motion.span
                        className="h-2 w-2 rounded-full bg-[var(--copper)]"
                        animate={{ scale: [1, 1.6, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.25 }}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="text-white/80">{item.description}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </Section>

      <Section id="features">
        <Wrapper className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold md:text-4xl">How we build</h2>
              <p className="max-w-prose text-white/80">
                Our approach pairs considered design with reliable engineering. We build with people,
                not for them. Everything runs lean, observable, and inclusive from the first sprint.
              </p>
            </motion.div>
            <div className="grid gap-4 md:grid-cols-2">
              {featureBlocks.map((item) => (
                <motion.div
                  key={item.title}
                  className="h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 240, damping: 20 }}
                >
                  <Card className="h-full bg-[var(--bark)]/55">
                    <CardHeader className="flex-row items-center gap-3">
                      <span className="text-[var(--copper)]">{item.icon}</span>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-white/80">{item.desc}</CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="rounded-3xl border border-white/10 bg-[var(--bark)]/55 p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold">Principles we live by</h3>
            <ul className="mt-6 grid gap-4 text-sm text-white/85">
              {principles.map((principle, index) => (
                <motion.li
                  key={principle}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--copper)]" />
                  <span>{principle}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </Wrapper>
      </Section>

      <Section id="about" className="bg-[#243024]">
        <Wrapper>
          <div className="grid gap-12 md:grid-cols-5 md:items-start">
            <motion.div
              className="space-y-6 md:col-span-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold md:text-4xl">About The Burrow Co.</h2>
              <p className="max-w-prose text-white/80">
                We are a small, senior team that enjoys the quiet work of making good software: the
                kind you can maintain, extend, and trust. Our process stays hands-on and transparent
                so you always know where your product stands.
              </p>
              <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-xs text-white/75 sm:grid-cols-2">
                {[
                  "TypeScript",
                  "React",
                  "Node",
                  "Python",
                  "Edge + Serverless",
                  "Design Systems",
                  "Accessibility",
                  "Observability"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="space-y-6 rounded-3xl border border-white/10 bg-[var(--bark)]/55 p-6 md:col-span-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold">Why "Burrow"?</h3>
              <p className="text-sm text-white/80">
                We like the underground work: the tunnels, the foundations, the parts you do not see
                but rely on. We build from the ground in, with care and with maps for the teams that
                come after us.
              </p>
              <div className="space-y-5">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative rounded-2xl border border-white/10 bg-black/25 p-4"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>{item.year}</span>
                      <span className="h-1 w-16 rounded-full bg-[var(--copper)]/60" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-xs text-white/70">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Logo className="h-10 w-10" />
                <p className="text-sm text-white/70">Small bits. Deep builds.</p>
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </Section>

      <footer className="border-t border-white/10 bg-[var(--bark)]/40 backdrop-blur">
        <Wrapper className="grid gap-6 py-10 text-sm text-white/70 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <div>
              <p className="font-semibold text-white">The Burrow Co.</p>
              <p>Handcrafted software</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <a href="#apps" className="hover:text-[var(--copper)]">
              Apps
            </a>
            <a href="#features" className="hover:text-[var(--copper)]">
              Features
            </a>
            <a href="#about" className="hover:text-[var(--copper)]">
              About
            </a>
          </div>
          <div className="md:text-right">
            &copy; {currentYear} The Burrow Co. All rights reserved.
          </div>
        </Wrapper>
      </footer>
    </div>
  );
}
