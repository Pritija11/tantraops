import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "AI Agents | TantraOps",
  description:
    "TantraOps builds AI agent systems that combine reasoning, tools, data, and workflows to perform useful tasks.",
  path: "/solutions/ai-agents",
});

const capabilities = [
  {
    number: "01",
    title: "Task Agents",
    description:
      "Agents designed to complete defined tasks using models, tools, and application logic.",
  },
  {
    number: "02",
    title: "Tool-Using Agents",
    description:
      "Connect agents to APIs, databases, software tools, and external systems.",
  },
  {
    number: "03",
    title: "Agent Workflows",
    description:
      "Design multi-step processes where agents can reason, act, and respond to changing conditions.",
  },
  {
    number: "04",
    title: "Human-in-the-Loop",
    description:
      "Keep people involved where approval, judgment, or oversight is important.",
  },
];

export default function AIAgentsPage() {
  return (
    <main className="bg-[#0A0D0C] pt-[76px]">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
            Solution / AI Agents
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
            Software that can reason, act, and adapt.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690]">
            TantraOps explores AI agents that combine intelligence with tools,
            data, workflows, and clear boundaries.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
              From prompts to actions.
            </h2>

            <p className="text-base leading-8 text-[#8C9690]">
              AI agents extend generative models by giving them the ability to
              interact with tools and systems. The engineering challenge is
              designing those interactions so that they remain observable,
              controlled, and useful.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
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

                <p className="mt-4 text-sm leading-7 text-[#8C9690]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="border border-white/10 bg-[#0A0D0C] p-8 lg:p-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C7F36B]">
              AI agents
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF] md:text-5xl">
              Build agents around real problems.
            </h2>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#C7F36B] px-7 py-3.5 text-sm font-semibold text-[#0A0D0C] hover:bg-[#7ED957]"
            >
              Explore an idea
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}