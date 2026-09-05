import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Generative AI | TantraOps",
  description:
    "TantraOps explores and builds generative AI systems for content, knowledge, software, and intelligent applications.",
  path: "/solutions/generative-ai",
});

const areas = [
  {
    number: "01",
    title: "AI Content Systems",
    description:
      "Build systems that generate, transform, summarize, and organize useful content.",
  },
  {
    number: "02",
    title: "Knowledge Interfaces",
    description:
      "Create interfaces that allow people to interact naturally with organizational knowledge.",
  },
  {
    number: "03",
    title: "AI-Assisted Software",
    description:
      "Integrate generative models into applications where they can extend existing functionality.",
  },
  {
    number: "04",
    title: "Model Integration",
    description:
      "Connect language and generative models with real application data, tools, and workflows.",
  },
];

export default function GenerativeAIPage() {
  return (
    <main className="bg-[#0A0D0C] pt-[76px]">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
            Solution / Generative AI
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
            Build useful systems with generative AI.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690]">
            Generative AI can become more than a chatbot. We explore how
            models can become part of real software, workflows, and knowledge
            systems.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C7F36B]">
                Approach
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                Models are powerful. Systems make them useful.
              </h2>
            </div>

            <p className="text-base leading-8 text-[#8C9690]">
              Generative AI works best when it is connected to the right data,
              application logic, tools, and user experience. We focus on
              building the surrounding system rather than treating the model
              as the entire product.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {areas.map((area) => (
              <div
                key={area.number}
                className="border-b border-r border-white/10 p-8 lg:p-10"
              >
                <span className="font-mono text-xs text-[#C7F36B]">
                  {area.number}
                </span>

                <h3 className="mt-8 font-[family-name:var(--font-syne)] text-2xl font-semibold text-[#F1F4EF]">
                  {area.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#8C9690]">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
              Build with us
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF] md:text-5xl">
              Turn generative AI into a working system.
            </h2>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#C7F36B] px-7 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all hover:-translate-y-0.5 hover:bg-[#7ED957]"
            >
              Discuss your idea
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}