import type { Metadata } from "next";
import Link from "next/link";
import {
  BrainCircuit,
  ShieldCheck,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About TantraOps | AI & Cybersecurity Technology Startup",
  description:
    "Learn about TantraOps, an emerging AI and cybersecurity technology startup building intelligent systems, automation, and secure digital solutions for modern businesses.",
  path: "/about",
});

const principles = [
  {
    number: "01",
    icon: BrainCircuit,
    label: "INTELLIGENCE",
    title: "Build technology that can think with the workflow.",
    description:
      "We explore artificial intelligence that can understand information, assist with complex tasks, and create more capable digital systems.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    label: "SECURITY",
    title: "Make security part of the system.",
    description:
      "We approach security as part of technology design, helping identify weaknesses, reduce exposure, and build stronger digital environments.",
  },
  {
    number: "03",
    icon: Code2,
    label: "ENGINEERING",
    title: "Turn ideas into useful software.",
    description:
      "We combine research, experimentation, and software engineering to move emerging technology toward practical applications.",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Artificial Intelligence",
    description:
      "We explore intelligent applications, generative AI, AI agents, automation, and emerging AI technologies.",
  },
  {
    number: "02",
    title: "Cybersecurity",
    description:
      "We work across security assessment, application security, infrastructure security, and security intelligence.",
  },
  {
    number: "03",
    title: "Technology Research",
    description:
      "We investigate emerging technical ideas and security challenges to understand what could become useful next.",
  },
];

export default function AboutPage() {
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
              About TantraOps
            </p>

            <h1 className="mt-6 font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
              Building intelligent technology for a changing digital world.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690] md:text-xl">
              TantraOps is an emerging AI and cybersecurity technology startup
              building intelligent systems, automation, and secure digital
              solutions for modern businesses.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-[#C7F36B] px-6 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7ED957] hover:shadow-[0_0_28px_rgba(199,243,107,0.18)]"
              >
                Explore our solutions
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-[#F1F4EF] transition-colors hover:border-[#C7F36B]/50 hover:text-[#C7F36B]"
              >
                Talk to TantraOps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                Who we are
              </p>

              <h2 className="mt-4 max-w-lg font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#F1F4EF] md:text-5xl">
                Two disciplines. One technology mindset.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#8C9690]">
              <p>
                TantraOps sits at the intersection of artificial intelligence
                and cybersecurity. We are interested in both sides of modern
                technology: what intelligent systems can do and how those
                systems can remain secure.
              </p>

              <p>
                As an emerging AI and cybersecurity technology startup, we are
                exploring practical ways to build software that can help
                businesses work more intelligently while improving their
                digital security.
              </p>

              <p>
                Our work spans AI applications, automation, generative AI,
                AI agents, cybersecurity, application security,
                infrastructure security, and security intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="border-b border-white/10 bg-[#0A0D0C]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              What we focus on
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl">
              Technology worth building.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#8C9690]">
              Our focus is broad enough to explore emerging technology but
              practical enough to stay connected to real business problems.
            </p>
          </div>

          <div className="mt-14 border-t border-white/10">
            {focusAreas.map((area) => (
              <div
                key={area.number}
                className="grid gap-6 border-b border-white/10 py-9 md:grid-cols-[70px_280px_1fr] md:items-start"
              >
                <span className="font-mono text-[9px] tracking-[0.16em] text-[#59625D]">
                  {area.number}
                </span>

                <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-[#F1F4EF]">
                  {area.title}
                </h3>

                <p className="max-w-2xl text-sm leading-7 text-[#8C9690]">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              Our principles
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl">
              How we think about technology.
            </h2>
          </div>

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div
                  key={principle.number}
                  className="group bg-[#141917] p-7 transition-colors hover:bg-[#111512] lg:p-9"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-[#0A0D0C] text-[#C7F36B] transition-colors group-hover:border-[#C7F36B]/30">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-mono text-[9px] tracking-[0.16em] text-[#59625D]">
                      {principle.number}
                    </span>
                  </div>

                  <p className="mt-8 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8C9690]">
                    {principle.label}
                  </p>

                  <h3 className="mt-3 font-[family-name:var(--font-syne)] text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#F1F4EF]">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#8C9690]">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="border-b border-white/10 bg-[#0A0D0C]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                Based in Kathmandu
              </p>

              <h2 className="mt-4 max-w-xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl">
                Building from Nepal for a changing digital world.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-8 text-[#8C9690]">
                TantraOps is based in New Baneshwor, Kathmandu, Nepal, and is
                developing its capabilities around the changing needs of modern
                businesses and digital systems.
              </p>

              <p className="text-base leading-8 text-[#8C9690]">
                As an early-stage startup, we are focused on learning,
                researching, experimenting, and turning useful ideas into
                practical technology.
              </p>

              <div className="border-l border-[#C7F36B]/40 pl-5 font-mono text-[9px] uppercase leading-6 tracking-[0.16em] text-[#C7F36B]">
                Kathmandu / Nepal
                <br />
                AI + CYBERSECURITY TECHNOLOGY
              </div>
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
                Work with TantraOps
              </p>

              <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl lg:text-6xl">
                Explore what intelligent and secure technology could make
                possible.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#8C9690]">
                Explore our solutions or start a conversation about a problem
                you are trying to solve.
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
                Intelligence · Security · Engineering · Research
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#C7F36B]">
                TANTRAOPS / ABOUT
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}