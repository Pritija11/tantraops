import type { Metadata } from "next";
import Link from "next/link";
import {
  BrainCircuit,
  Database,
  Workflow,
  Layers3,
  ArrowUpRight,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "AI Applications | TantraOps",
  description:
    "TantraOps builds intelligent AI applications that help businesses work with information, automate processes, and create more capable digital experiences.",
  path: "/solutions/ai-applications",
});

const applicationAreas = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "Intelligent Applications",
    description:
      "Design AI-powered applications that can understand information, assist users, and support complex business tasks.",
  },
  {
    icon: Database,
    number: "02",
    title: "Knowledge Systems",
    description:
      "Build systems that can work with business knowledge, documents, structured data, and internal information.",
  },
  {
    icon: Workflow,
    number: "03",
    title: "AI-Powered Workflows",
    description:
      "Connect AI capabilities with existing workflows to reduce manual effort and improve how teams handle repetitive tasks.",
  },
  {
    icon: Layers3,
    number: "04",
    title: "AI Product Integration",
    description:
      "Integrate intelligent capabilities into digital products, platforms, and business systems where AI can create practical value.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Define the problem, users, available information, and business context before choosing an AI approach.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Design the application architecture, AI capabilities, data flows, and user experience around the actual problem.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop and integrate the intelligent system with the software, data, and workflows it needs to operate.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Evaluate performance, identify limitations, and continuously improve the system as requirements evolve.",
  },
];

export default function AiApplicationsPage() {
  return (
    <main className="bg-[#0A0D0C] pt-[76px]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-150px] top-[-170px] h-[520px] w-[520px] rounded-full bg-[#C7F36B]/6 blur-3xl" />

          <div className="absolute bottom-[-180px] left-[-130px] h-[360px] w-[360px] rounded-full bg-[#7ED957]/5 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8C9690] transition-colors hover:text-[#C7F36B]"
          >
            ← Back to solutions
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              AI Applications
            </p>

            <h1 className="mt-6 font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
              Turn artificial intelligence into useful software.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690] md:text-xl">
              TantraOps builds intelligent applications that connect AI
              capabilities with real business problems, information, and
              workflows.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#C7F36B] px-6 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7ED957] hover:shadow-[0_0_28px_rgba(199,243,107,0.18)]"
              >
                Discuss an AI application
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-[#F1F4EF] transition-colors hover:border-[#C7F36B]/50 hover:text-[#C7F36B]"
              >
                View all solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI applications */}
      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                Why AI applications
              </p>

              <h2 className="mt-4 max-w-lg font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#F1F4EF] md:text-5xl">
                AI becomes valuable when it solves a real problem.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#8C9690]">
              <p>
                Artificial intelligence can process large amounts of
                information, generate useful outputs, and assist with tasks
                that previously required significant manual effort.
              </p>

              <p>
                But adding an AI model to a product does not automatically
                create a useful application. The surrounding software,
                workflows, data, user experience, and operational requirements
                matter just as much.
              </p>

              <p>
                TantraOps focuses on building complete intelligent systems
                around the problem rather than treating AI as an isolated
                feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application areas */}
      <section className="border-b border-white/10 bg-[#0A0D0C]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              Application areas
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl">
              Intelligent software built around the workflow.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#8C9690]">
              We focus on practical applications where AI can improve how
              people work with information, software, and business processes.
            </p>
          </div>

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
            {applicationAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.number}
                  className="group bg-[#141917] p-7 transition-colors hover:bg-[#111512] lg:p-9"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-[#0A0D0C] text-[#C7F36B] group-hover:border-[#C7F36B]/30">
                      <Icon className="h-4 w-4" />
                    </div>

                    <span className="font-mono text-[9px] tracking-[0.16em] text-[#59625D]">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-[family-name:var(--font-syne)] text-2xl font-semibold tracking-[-0.03em] text-[#F1F4EF]">
                    {area.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#8C9690]">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                Our process
              </p>

              <h2 className="mt-4 max-w-lg font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#F1F4EF] md:text-5xl">
                Start with the problem, not the model.
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-[#8C9690]">
                We start by understanding what needs to be solved and then
                design the AI system, software architecture, and workflow
                around that goal.
              </p>
            </div>

            <div className="border-t border-white/10">
              {process.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-b border-white/10 py-8 md:grid-cols-[70px_180px_1fr] md:items-start"
                >
                  <span className="font-mono text-[9px] tracking-[0.16em] text-[#59625D]">
                    {step.number}
                  </span>

                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-[#F1F4EF]">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-[#8C9690]">
                    {step.description}
                  </p>
                </div>
              ))}
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
                Build an intelligent application
              </p>

              <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl lg:text-6xl">
                Have an idea that could be made more intelligent?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#8C9690]">
                Tell us about the workflow, problem, or product you want to
                improve and we can explore an appropriate AI approach.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#C7F36B] px-6 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7ED957] hover:shadow-[0_0_28px_rgba(199,243,107,0.18)]"
              >
                Talk to TantraOps
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative flex flex-col gap-3 border-t border-white/10 bg-[#0A0D0C] px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#59625D]">
                Understand · Design · Build · Improve
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#C7F36B]">
                TANTRAOPS / AI
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}