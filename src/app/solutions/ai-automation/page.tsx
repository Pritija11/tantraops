import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "AI Automation | TantraOps",
  description:
    "TantraOps builds intelligent automation systems that connect AI, workflows, data, and business processes.",
  path: "/solutions/ai-automation",
});

const capabilities = [
  {
    number: "01",
    title: "Workflow Automation",
    description:
      "Automate repetitive and multi-step business processes using intelligent systems.",
  },
  {
    number: "02",
    title: "AI-Powered Operations",
    description:
      "Introduce AI into operational workflows to improve speed, consistency, and decision-making.",
  },
  {
    number: "03",
    title: "Process Intelligence",
    description:
      "Identify opportunities where intelligent automation can reduce unnecessary manual work.",
  },
  {
    number: "04",
    title: "System Integration",
    description:
      "Connect automation with existing applications, APIs, databases, and cloud systems.",
  },
];

const process = [
  "Understand the workflow",
  "Identify automation opportunities",
  "Design the system",
  "Integrate and deploy",
  "Measure and improve",
];

export default function AIAutomationPage() {
  return (
    <main className="bg-[#0A0D0C] pt-[76px]">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
            Solution / AI Automation
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
            Automate work with intelligence built in.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690]">
            TantraOps designs intelligent automation systems that connect AI,
            workflows, business processes, and existing technology.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
                Automation
              </p>

              <h2 className="mt-5 max-w-xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F1F4EF]">
                Move beyond repetitive processes.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#8C9690]">
              <p>
                Intelligent automation combines software workflows with AI to
                handle processes that would otherwise require continuous manual
                effort.
              </p>

              <p>
                The goal is not simply to automate everything. It is to
                understand where automation creates meaningful improvements and
                build systems that remain reliable as requirements change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
              Capabilities
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
              What we automate
            </h2>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="border-b border-r border-white/10 p-8 lg:p-10"
              >
                <span className="font-mono text-xs text-[#C7F36B]">
                  {item.number}
                </span>

                <h3 className="mt-8 font-[family-name:var(--font-syne)] text-2xl font-semibold text-[#F1F4EF]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#8C9690]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
                Process
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                From workflow to system.
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-6 py-5"
                >
                  <span className="font-mono text-xs text-[#C7F36B]">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-[#F1F4EF]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="border border-[#C7F36B]/20 bg-[#141917] p-8 lg:p-14">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
              Start with the process
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF] md:text-5xl">
              Find the work that should run itself.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#8C9690]">
              Tell us where manual work is slowing your systems down and
              explore where intelligent automation could help.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#C7F36B] px-7 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all hover:-translate-y-0.5 hover:bg-[#7ED957]"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}