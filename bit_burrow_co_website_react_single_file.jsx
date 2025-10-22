import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Hammer, Leaf, CircuitBoard, Github, Linkedin } from "lucide-react";

// ---------------------------------------------
// Bit Burrow Co — Single-file React website
// Handcrafted aesthetic with Tailwind
// ---------------------------------------------

const moss = "#2F3B2F"; // deep moss
const copper = "#B86B36"; // warm copper
const bark = "#3F2F25"; // bark brown
const parchment = "#F3EFE8"; // soft off-white

function Logo({ className = "h-10 w-10" }) {
  // Roundel with a tunneled "burrow" shape + subtle bit marks
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="55" stroke={copper} strokeWidth="10" />
      {/* Burrow arch */}
      <path
        d="M30 68c0-22 13-40 30-40s30 18 30 40"
        stroke={copper}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Tunnel floor marks ("bits") */}
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
  <section id={id} className={`py-20 md:py-28 ${className}`}>{children}</section>
);

const Wrapper = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>
);

export default function BitBurrowSite() {
  return (
    <div
      className="min-h-screen bg-[var(--moss)] text-[var(--parchment)]"
      style={{
        ["--moss"]: moss,
        ["--copper"]: copper,
        ["--bark"]: bark,
        ["--parchment"]: parchment,
      }}
    >
      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#2F3B2FCC] border-b border-white/10">
        <Wrapper className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-9" />
            <span className="font-semibold tracking-wide">Bit Burrow Co</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#apps" className="hover:text-[var(--copper)] transition">
              Apps
            </a>
            <a href="#features" className="hover:text-[var(--copper)] transition">
              Features
            </a>
            <a href="#about" className="hover:text-[var(--copper)] transition">
              About
            </a>
          </nav>
        </Wrapper>
      </header>

      {/* Hero */}
      <div className="relative">
        {/* Mossy paper texture look via layered gradients */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 35%, rgba(184,107,54,0.16) 0%, rgba(47,59,47,0) 65%), radial-gradient(40% 40% at 80% 10%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <Wrapper>
          <div className="grid md:grid-cols-2 gap-10 items-center py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 text-[var(--copper)]">
                <Leaf className="h-5 w-5" />
                <span className="uppercase tracking-widest text-xs">
                  Handcrafted software
                </span>
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
                Quiet code.
                <span className="text-[var(--copper)]"> Crafted deep.</span>
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-xl">
                We design and build small, robust software systems — shaped with the
                patience of hand tools and the precision of modern engineering.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#apps">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5 rounded-2xl px-6"
                  >
                    Explore our apps
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="justify-self-center md:justify-self-end"
            >
              <div className="bg-[var(--bark)]/60 border border-white/10 rounded-3xl p-6 shadow-xl w-full max-w-md">
                <div className="flex items-center gap-3">
                  <Logo className="h-12 w-12" />
                  <div>
                    <p className="text-sm text-white/70">Bit Burrow Co</p>
                    <p className="font-semibold">Small bits. Deep builds.</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl bg-black/20 p-4">
                    <Code2 className="mx-auto h-5 w-5 text-[var(--copper)]" />
                    <p className="mt-2 text-sm">Web Apps</p>
                  </div>
                  <div className="rounded-xl bg-black/20 p-4">
                    <CircuitBoard className="mx-auto h-5 w-5 text-[var(--copper)]" />
                    <p className="mt-2 text-sm">Tools</p>
                  </div>
                  <div className="rounded-xl bg-black/20 p-4">
                    <Hammer className="mx-auto h-5 w-5 text-[var(--copper)]" />
                    <p className="mt-2 text-sm">Libraries</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </div>

      {/* Apps / Projects */}
      <Section id="apps" className="bg-[#243024]">
        <Wrapper>
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-bold">Our Apps</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-[var(--moss)] border-white/10 rounded-2xl overflow-hidden cursor-default select-none" data-placeholder="app-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--copper)]/15 text-[var(--copper)]">
                      {i}
                    </span>
                    App {i} — Internal Project
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-white/80">
                  <p>
                    In‑house tool focused on reliability and clarity. Small
                    footprint, well‑documented, and tuned for long‑term
                    maintainability.
                  </p>
                  <ul className="mt-3 list-disc pl-4 space-y-1 text-white/70">
                    <li>Typesafe API + robust telemetry</li>
                    <li>Accessible UI with clean semantics</li>
                    <li>Deployment blueprints and docs</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Wrapper>
      </Section>

      {/* Features */}
      <Section id="features">
        <Wrapper>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">What’s inside our apps</h2>
              <p className="mt-4 text-white/80 max-w-prose">
                We build and ship our own software. Each app is engineered for
                clarity, small footprints, and long‑term care — thoughtful
                architecture, accessible interfaces, and thorough docs.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Code2 className="h-5 w-5" />,
                    title: "Product Engineering",
                    desc: "Design systems, apps, and services built to last.",
                  },
                  {
                    icon: <CircuitBoard className="h-5 w-5" />,
                    title: "Systems Design",
                    desc: "APIs, data flows, observability, and reliability.",
                  },
                  {
                    icon: <Hammer className="h-5 w-5" />,
                    title: "Prototypes",
                    desc: "Prove ideas quickly — then harden them responsibly.",
                  },
                  {
                    icon: <Leaf className="h-5 w-5" />,
                    title: "Sustainability",
                    desc: "Lean, maintainable software with small footprints.",
                  },
                ].map((s) => (
                  <Card key={s.title} className="bg-[var(--moss)] border-white/10 rounded-2xl">
                    <CardHeader className="flex-row gap-3 items-center">
                      <span className="text-[var(--copper)]">{s.icon}</span>
                      <CardTitle className="text-lg">{s.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-white/80">{s.desc}</CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="bg-[var(--bark)]/50 rounded-3xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold">Principles we work by</h3>
              <ul className="mt-4 grid gap-3 text-sm text-white/85">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--copper)]" />
                  <span>Design for clarity. Communicate intent in code and UI.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--copper)]" />
                  <span>Prefer small pieces, well-fitted. Compose instead of accrete.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--copper)]" />
                  <span>Measure, observe, and iterate. Leave a map for others.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--copper)]" />
                  <span>Accessibility by default. Performance with humility.</span>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </Section>

      {/* About */}
      <Section id="about" className="bg-[#243024]">
        <Wrapper>
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold">About Bit Burrow Co</h2>
              <p className="mt-4 text-white/80 max-w-prose">
                We’re a small, senior team that enjoys the quiet work of making
                good software: the kind you can maintain, extend, and trust. Our
                process is hands-on and transparent. We build carefully toward
                where you need to go.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">TypeScript</span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">React</span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">Node</span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">Python</span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">Edge + Serverless</span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">Design Systems</span>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1">Accessibility</span>
              </div>
            </div>
            <div className="md:col-span-2 bg-[var(--bark)]/50 rounded-3xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold">Why “Burrow”?</h3>
              <p className="mt-2 text-white/80 text-sm">
                We like the underground work: the tunnels, the foundations, the
                parts you don’t see but rely on. We build from the ground in,
                with care.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Logo className="h-10 w-10" />
                <p className="text-sm text-white/70">Small bits. Deep builds.</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <Wrapper className="py-10 grid md:grid-cols-3 gap-6 text-sm text-white/70">
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
            © {new Date().getFullYear()} Bit Burrow Co. All rights reserved.
          </div>
        </Wrapper>
      </footer>
    </div>
  );
}
