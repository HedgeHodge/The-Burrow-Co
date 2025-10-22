import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Hammer, Leaf, CircuitBoard, Github, Linkedin } from "lucide-react";

const moss = "#2F3B2F";
const copper = "#B86B36";
const bark = "#3F2F25";
const parchment = "#F3EFE8";

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

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    {children}
  </section>
);

const Wrapper = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>
);

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="min-h-screen bg-[var(--moss)] text-[var(--parchment)]"
      style={{
        ["--moss"]: moss,
        ["--copper"]: copper,
        ["--bark"]: bark,
        ["--parchment"]: parchment
      }}
    >
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-[#2F3B2FCC]">
        <Wrapper className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-9" />
            <span className="font-semibold tracking-wide">Bit Burrow Co</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#apps" className="transition hover:text-[var(--copper)]">
              Apps
            </a>
            <a href="#features" className="transition hover:text-[var(--copper)]">
              Features
            </a>
            <a href="#about" className="transition hover:text-[var(--copper)]">
              About
            </a>
          </nav>
        </Wrapper>
      </header>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 35%, rgba(184,107,54,0.16) 0%, rgba(47,59,47,0) 65%), radial-gradient(40% 40% at 80% 10%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 70%)"
          }}
        />
        <Wrapper>
          <div className="grid items-center gap-10 py-24 md:grid-cols-2 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 text-[var(--copper)]">
                <Leaf className="h-5 w-5" />
                <span className="text-xs uppercase tracking-widest">Handcrafted software</span>
              </div>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
                Quiet code.
                <span className="text-[var(--copper)]"> Crafted deep.</span>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/80">
                We design and build small, robust software systems shaped with the patience of
                hand tools and the precision of modern engineering.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#apps">
                  <Button variant="outline" className="rounded-2xl px-6">
                    Explore our apps
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--bark)]/60 p-8 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="relative grid gap-6">
                <div>
                  <h2 className="text-2xl font-semibold text-white">Small teams, deep focus</h2>
                  <p className="mt-2 text-sm text-white/75">
                    Each engagement pairs you with senior practitioners who stay close to the work.
                    No hand-offs, no mystery layers.
                  </p>
                </div>
                <div className="grid gap-4">
                  {[
                    { icon: Code2, label: "Product engineering" },
                    { icon: Hammer, label: "Design systems" },
                    { icon: CircuitBoard, label: "Edge-native infrastructure" }
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 p-4">
                      <Icon className="h-6 w-6 text-[var(--copper)]" />
                      <span className="text-sm text-white/80">{label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60">Collaboration</p>
                    <p className="text-sm text-white/80">Slack, Linear, Figma, GitHub</p>
                  </div>
                  <Button className="rounded-2xl px-5 py-2 text-xs uppercase tracking-wide">
                    Start a project
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </div>

      <Section id="apps" className="bg-[#243024]">
        <Wrapper>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Living product experiments</h2>
              <p className="mt-2 max-w-xl text-white/80">
                Bit Burrow builds small, purposeful apps that favor clarity over clutter.
                Everything ships with real instrumentation, generous docs, and careful polish.
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
                <Button className="flex items-center gap-2 rounded-2xl px-5">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
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
            ].map((item) => (
              <Card key={item.title} className="bg-[var(--bark)]/50">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>{item.description}</CardContent>
              </Card>
            ))}
          </div>
        </Wrapper>
      </Section>

      <Section id="features">
        <Wrapper className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-6">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">How we build</h2>
              <p className="mt-4 max-w-prose text-white/80">
                Our approach pairs considered design with reliable engineering. We build with
                people, not for them. Everything runs lean, observable, and inclusive.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
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
              ].map((item) => (
                <Card key={item.title}>
                  <CardHeader className="flex-row items-center gap-3">
                    <span className="text-[var(--copper)]">{item.icon}</span>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-white/80">{item.desc}</CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[var(--bark)]/50 p-6">
            <h3 className="text-xl font-semibold">Principles we work by</h3>
            <ul className="mt-4 grid gap-3 text-sm text-white/85">
              {[
                "Design for clarity. Communicate intent in code and UI.",
                "Prefer small pieces, well-fitted. Compose instead of accrete.",
                "Measure, observe, and iterate. Leave a map for others.",
                "Accessibility by default. Performance with humility."
              ].map((principle) => (
                <li key={principle} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--copper)]" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </Wrapper>
      </Section>

      <Section id="about" className="bg-[#243024]">
        <Wrapper>
          <div className="grid gap-8 md:grid-cols-5 md:items-center">
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold md:text-4xl">About Bit Burrow Co</h2>
              <p className="mt-4 max-w-prose text-white/80">
                We&apos;re a small, senior team that enjoys the quiet work of making good software:
                the kind you can maintain, extend, and trust. Our process is hands-on and
                transparent. We build carefully toward where you need to go.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                {[
                  "TypeScript",
                  "React",
                  "Node",
                  "Python",
                  "Edge + Serverless",
                  "Design Systems",
                  "Accessibility"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 rounded-3xl border border-white/10 bg-[var(--bark)]/50 p-6">
              <h3 className="text-lg font-semibold">Why "Burrow"?</h3>
              <p className="mt-2 text-sm text-white/80">
                We like the underground work: the tunnels, the foundations, the parts you do not see
                but rely on. We build from the ground in, with care.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Logo className="h-10 w-10" />
                <p className="text-sm text-white/70">Small bits. Deep builds.</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>

      <footer className="border-t border-white/10">
        <Wrapper className="grid gap-6 py-10 text-sm text-white/70 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <div>
              <p className="font-semibold text-white">Bit Burrow Co</p>
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
            © {currentYear} Bit Burrow Co. All rights reserved.
          </div>
        </Wrapper>
      </footer>
    </div>
  );
}
