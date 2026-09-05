import type { Metadata } from "next";
import Link from "next/link";
import {
  BrainCircuit,
  ShieldCheck,
  Code2,
  FlaskConical,
  ArrowUpRight,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";

const careerAreas = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Work on intelligent applications, AI agents, generative systems, automation, and emerging AI technologies.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Work across security assessment, application security, infrastructure security, vulnerability research, and security engineering.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Software Engineering",
    description:
      "Build the applications, platforms, APIs, and systems that turn emerging technology into dependable software.",
  },
  {
    number: "04",
    icon: FlaskConical,
    title: "Research",
    description:
      "Investigate technical questions across AI, cybersecurity, software systems, and emerging technologies.",
  },
];

const principles = [
  {
    number: "01",
    title: "Keep learning",
    description:
      "Technology changes quickly. We value curiosity, experimentation, and the willingness to learn continuously.",
  },
  {
    number: "02",
    title: "Think deeply",
    description:
      "Good engineering requires understanding the underlying problem rather than simply reaching for the newest tool.",
  },
  {
    number: "03",
    title: "Build responsibly",
    description:
      "AI and cybersecurity technologies can have significant impact, so we value thoughtful and responsible engineering.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Careers | TantraOps",
  description:
    "Explore careers at TantraOps, an emerging AI and cybersecurity technology startup building intelligent systems, automation, and secure digital solutions.",
  path: "/careers",
});

export default function CareersPage() {
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
              Careers at TantraOps
            </p>

            <h1 className="mt-6 font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
              Help build what comes next.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690] md:text-xl">
              TantraOps is an emerging AI and cybersecurity technology startup
              building intelligent systems and secure digital solutions. We
              are interested in people who want to learn, investigate, and
              build.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#C7F36B] px-6 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7ED957] hover:shadow-[0_0_28px_rgba(199,243,107,0.18)]"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-[#F1F4EF] transition-colors hover:border-[#C7F36B]/50 hover:text-[#C7F36B]"
              >
                Learn about TantraOps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why work here */}
      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                Why TantraOps
              </p>

              <h2 className="mt-4 max-w-lg font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl">
                A place to learn, experiment, and build.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#8C9690]">
              <p>
                We are building TantraOps at an early stage, which means there
                is room for people to contribute beyond narrow job
                descriptions.
              </p>

              <p>
                We value people who enjoy solving unfamiliar problems,
                understanding how systems work, and turning ideas into useful
                technology.
              </p>

              <p>
                Strong fundamentals, curiosity, thoughtful engineering, and
                continuous learning are important parts of how we want to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career areas */}
      <section className="border-b border-white/10 bg-[#0A0D0C]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              Areas of work
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl">
              Where you could contribute.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#8C9690]">
              Our work sits across AI, cybersecurity, software engineering,
              and research.
            </p>
          </div>

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {careerAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.number}
                  className="group bg-[#141917] p-7 transition-colors hover:bg-[#111512] lg:p-9"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-[#0A0D0C] text-[#C7F36B] transition-colors group-hover:border-[#C7F36B]/30">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-mono text-[9px] tracking-[0.16em] text-[#59625D]">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-[family-name:var(--font-syne)] text-2xl font-semibold tracking-[-0.03em] text-[#F1F4EF]">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#8C9690]">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                How we work
              </p>

              <h2 className="mt-4 max-w-lg font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl">
                The mindset matters.
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-[#8C9690]">
                We want to build an environment where technical curiosity,
                responsible engineering, and continuous improvement can grow
                together.
              </p>
            </div>

            <div className="border-t border-white/10">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="grid gap-5 border-b border-white/10 py-8 md:grid-cols-[70px_220px_1fr] md:items-start"
                >
                  <span className="font-mono text-[9px] tracking-[0.16em] text-[#59625D]">
                    {principle.number}
                  </span>

                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-[#F1F4EF]">
                    {principle.title}
                  </h3>

                  <p className="text-sm leading-7 text-[#8C9690]">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current opportunities */}
      <section className="border-b border-white/10 bg-[#0A0D0C]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                Current opportunities
              </p>

              <h2 className="mt-4 max-w-xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl">
                Growing the team thoughtfully.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#8C9690]">
                We may not always have formal positions listed. We are
                interested in hearing from people who want to contribute to
                AI, cybersecurity, software engineering, or research.
              </p>
            </div>

            <div className="border border-white/10 bg-[#141917]">
              <div className="border-b border-white/10 px-6 py-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#C7F36B]">
                    OPEN / GENERAL
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#C7F36B] shadow-[0_0_10px_rgba(199,243,107,0.4)]" />
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-[#F1F4EF]">
                  Future opportunities
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#8C9690]">
                  Introduce yourself, tell us what you are interested in, and
                  share what you would like to build or investigate with
                  TantraOps.
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C7F36B] transition-colors hover:text-[#7ED957]"
                >
                  Send an introduction
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
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
                Join TantraOps
              </p>

              <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl lg:text-6xl">
                Have something to build, investigate, or improve?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#8C9690]">
                Tell us about your background, what interests you, and where
                you think you could contribute.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#C7F36B] px-6 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7ED957] hover:shadow-[0_0_28px_rgba(199,243,107,0.18)]"
              >
                Contact TantraOps
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative flex flex-col gap-3 border-t border-white/10 bg-[#0A0D0C] px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#59625D]">
                Learn · Investigate · Build · Grow
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#C7F36B]">
                TANTRAOPS / CAREERS
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}