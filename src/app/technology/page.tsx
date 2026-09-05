import type { Metadata } from "next";
import Link from "next/link";
import {
  BrainCircuit,
  Bot,
  ShieldCheck,
  Network,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Technology | TantraOps",
  description:
    "Explore the technology behind TantraOps, an emerging AI and cybersecurity technology startup building intelligent systems, automation, secure software, and connected digital solutions.",
  path: "/technology",
});

const technologyAreas = [
  {
    number: "01",
    icon: BrainCircuit,
    label: "ARTIFICIAL INTELLIGENCE",
    title: "Intelligent systems",
    description:
      "We explore AI systems that can understand information, assist with complex tasks, and support more capable digital products.",
    tags: ["AI", "LLMs", "Intelligence"],
  },
  {
    number: "02",
    icon: Bot,
    label: "AI AGENTS",
    title: "Systems that can act",
    description:
      "We investigate AI agents that can reason through tasks, interact with tools, and support more autonomous workflows.",
    tags: ["Agents", "Tools", "Reasoning"],
  },
  {
    number: "03",
    icon: ShieldCheck,
    label: "CYBERSECURITY",
    title: "Secure digital systems",
    description:
      "We apply security engineering across applications, infrastructure, APIs, and digital environments to identify and reduce risk.",
    tags: ["Security", "Applications", "Infrastructure"],
  },
  {
    number: "04",
    icon: Network,
    label: "CONNECTED TECHNOLOGY",
    title: "Systems that work together",
    description:
      "We connect AI capabilities, software, APIs, cloud infrastructure, and automation into systems designed around real workflows.",
    tags: ["APIs", "Cloud", "Integration"],
  },
];

const technologyPrinciples = [
  {
    number: "01",
    title: "Problem first",
    description:
      "Technology should begin with a clear problem, user need, or opportunity rather than a tool chosen simply because it is new.",
  },
  {
    number: "02",
    title: "Security by design",
    description:
      "Intelligent systems should be designed with appropriate security, privacy, and resilience considerations from the beginning.",
  },
  {
    number: "03",
    title: "Continuous experimentation",
    description:
      "Emerging technology needs experimentation and evaluation. We learn by building, testing, measuring, and improving.",
  },
];

export default function TechnologyPage() {
  return (
    <main className="bg-[#0A0D0C] pt-[76px]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-150px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#C7F36B]/6 blur-3xl" />

          <div className="absolute bottom-[-180px] left-[-130px] h-[360px] w-[360px] rounded-full bg-[#7ED957]/5 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-4xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              Technology
            </p>

            <h1 className="mt-6 font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
              Building systems where intelligence meets engineering.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690] md:text-xl">
              TantraOps explores artificial intelligence, automation,
              cybersecurity, and connected software systems to build technology
              around real-world problems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-[#C7F36B] px-6 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7ED957] hover:shadow-[0_0_28px_rgba(199,243,107,0.18)]"
              >
                Explore solutions
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/research"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-[#F1F4EF] transition-colors hover:border-[#C7F36B]/50 hover:text-[#C7F36B]"
              >
                Explore research
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology approach */}
      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                Our technology approach
              </p>

              <h2 className="mt-4 max-w-lg font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl">
                Emerging technology is useful when it solves something real.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#8C9690]">
              <p>
                Artificial intelligence, automation, and cybersecurity are
                evolving quickly. The challenge is not simply adopting new
                technology, but understanding where it can create meaningful
                value.
              </p>

              <p>
                TantraOps approaches technology through experimentation,
                engineering, research, and practical application. We explore
                how emerging capabilities can become dependable systems rather
                than isolated technical demonstrations.
              </p>

              <p>
                As an emerging AI and cybersecurity technology startup, we are
                continuously learning and evolving the systems we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology areas */}
      <section className="border-b border-white/10 bg-[#0A0D0C]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              Technology areas
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl">
              The systems behind the work.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#8C9690]">
              Our technical work spans intelligent systems, autonomous
              capabilities, cybersecurity, and the infrastructure that
              connects them.
            </p>
          </div>

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {technologyAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.number}
                  className="group bg-[#141917] p-7 transition-colors hover:bg-[#111512] lg:p-9"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-[#0A0D0C] text-[#C7F36B] transition-colors group-hover:border-[#C7F36B]/30">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-mono text-[9px] tracking-[0.16em] text-[#59625D]">
                      {area.number}
                    </span>
                  </div>

                  <p className="mt-8 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8C9690]">
                    {area.label}
                  </p>

                  <h3 className="mt-3 font-[family-name:var(--font-syne)] text-2xl font-semibold tracking-[-0.03em] text-[#F1F4EF]">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#8C9690]">
                    {area.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-[#59625D]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System architecture */}
      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                System thinking
              </p>

              <h2 className="mt-4 max-w-md font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl">
                Technology works as a system, not a collection of features.
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-[#8C9690]">
                Intelligent capabilities become more useful when they connect
                with data, software, infrastructure, security controls, and
                the people using them.
              </p>
            </div>

            <div className="relative min-h-[460px] overflow-hidden border border-white/10 bg-[#0A0D0C]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px]" />

              <div className="absolute left-1/2 top-1/2 w-[220px] -translate-x-1/2 -translate-y-1/2 border border-[#C7F36B]/30 bg-[#141917] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8C9690]">
                    TANTRA / CORE
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#C7F36B] shadow-[0_0_12px_rgba(199,243,107,0.45)]" />
                </div>

                <h3 className="mt-6 font-[family-name:var(--font-syne)] text-2xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                  Intelligent
                  <br />
                  Systems
                </h3>

                <p className="mt-3 text-xs leading-6 text-[#8C9690]">
                  AI + automation + security
                </p>

                <div className="mt-6 h-px bg-white/10" />

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#59625D]">
                    STATUS
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#C7F36B]">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Nodes */}
              <div className="absolute left-[6%] top-[12%] w-[150px] border border-white/10 bg-[#141917] p-4">
                <BrainCircuit className="h-4 w-4 text-[#C7F36B]" />

                <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-[#59625D]">
                  Input
                </p>

                <p className="mt-1 text-sm font-semibold text-[#F1F4EF]">
                  Intelligence
                </p>
              </div>

              <div className="absolute right-[6%] top-[12%] w-[150px] border border-white/10 bg-[#141917] p-4">
                <Cpu className="h-4 w-4 text-[#7ED957]" />

                <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-[#59625D]">
                  Process
                </p>

                <p className="mt-1 text-sm font-semibold text-[#F1F4EF]">
                  Automation
                </p>
              </div>

              <div className="absolute bottom-[12%] left-[6%] w-[150px] border border-white/10 bg-[#141917] p-4">
                <Network className="h-4 w-4 text-[#7ED957]" />

                <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-[#59625D]">
                  Connect
                </p>

                <p className="mt-1 text-sm font-semibold text-[#F1F4EF]">
                  Infrastructure
                </p>
              </div>

              <div className="absolute bottom-[12%] right-[6%] w-[150px] border border-white/10 bg-[#141917] p-4">
                <ShieldCheck className="h-4 w-4 text-[#C7F36B]" />

                <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-[#59625D]">
                  Protect
                </p>

                <p className="mt-1 text-sm font-semibold text-[#F1F4EF]">
                  Security
                </p>
              </div>

              {/* Connection lines */}
              <div className="absolute left-[36%] top-[24%] h-px w-[13%] bg-[#C7F36B]/30" />

              <div className="absolute right-[36%] top-[24%] h-px w-[13%] bg-[#7ED957]/30" />

              <div className="absolute bottom-[24%] left-[36%] h-px w-[13%] bg-[#7ED957]/30" />

              <div className="absolute bottom-[24%] right-[36%] h-px w-[13%] bg-[#C7F36B]/30" />

              <div className="absolute left-1/2 top-[28%] h-[20%] w-px -translate-x-1/2 bg-gradient-to-b from-[#C7F36B]/30 to-transparent" />

              <div className="absolute bottom-[28%] left-1/2 h-[20%] w-px -translate-x-1/2 bg-gradient-to-t from-[#7ED957]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-white/10 bg-[#0A0D0C]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              Engineering principles
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl">
              How we approach emerging technology.
            </h2>
          </div>

          <div className="mt-14 border-t border-white/10">
            {technologyPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="grid gap-6 border-b border-white/10 py-9 md:grid-cols-[70px_250px_1fr] md:items-start"
              >
                <span className="font-mono text-[9px] tracking-[0.16em] text-[#59625D]">
                  {principle.number}
                </span>

                <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-[#F1F4EF]">
                  {principle.title}
                </h3>

                <p className="max-w-2xl text-sm leading-7 text-[#8C9690]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research connection */}
      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                Research-driven
              </p>

              <h2 className="mt-4 max-w-xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl">
                What we learn influences what we build.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-[#8C9690]">
                New AI capabilities and security challenges create questions
                that cannot always be answered with existing assumptions.
                Research gives us a way to investigate those questions before
                turning useful insights into technology.
              </p>

              <Link
                href="/research"
                className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C7F36B] transition-colors hover:text-[#7ED957]"
              >
                Explore research
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0D0C]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="relative overflow-hidden border border-white/10 bg-[#141917]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative p-8 md:p-12 lg:p-16">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                Explore TantraOps
              </p>

              <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl lg:text-6xl">
                See how we turn emerging technology into useful systems.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#8C9690]">
                Explore our solutions, research, or start a conversation about
                a technology problem you are working on.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C7F36B] px-6 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7ED957] hover:shadow-[0_0_28px_rgba(199,243,107,0.18)]"
                >
                  Explore solutions
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-[#F1F4EF] transition-colors hover:border-[#C7F36B]/50 hover:text-[#C7F36B]"
                >
                  Contact TantraOps
                </Link>
              </div>
            </div>

            <div className="relative flex flex-col gap-3 border-t border-white/10 bg-[#0A0D0C] px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#59625D]">
                AI · Automation · Security · Engineering
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#C7F36B]">
                TANTRAOPS / TECHNOLOGY
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}