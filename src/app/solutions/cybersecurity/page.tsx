import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Cybersecurity | TantraOps",
  description:
    "TantraOps approaches cybersecurity through application security, infrastructure protection, security intelligence, and resilient system design.",
  path: "/solutions/cybersecurity",
});

const areas = [
  {
    number: "01",
    title: "Application Security",
    description:
      "Identify and address security weaknesses across modern applications.",
  },
  {
    number: "02",
    title: "API Security",
    description:
      "Protect the interfaces connecting applications, services, and data.",
  },
  {
    number: "03",
    title: "Infrastructure Security",
    description:
      "Improve the security posture of cloud and infrastructure environments.",
  },
  {
    number: "04",
    title: "Security Intelligence",
    description:
      "Turn security signals and technical information into actionable insight.",
  },
];

export default function CybersecurityPage() {
  return (
    <main className="bg-[#0A0D0C] pt-[76px]">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
            Solution / Cybersecurity
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
            Build digital systems that are designed to be secure.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690]">
            Cybersecurity at TantraOps focuses on building security into
            applications, APIs, infrastructure, and the systems connecting
            them.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
              Security is part of the system.
            </h2>

            <p className="text-base leading-8 text-[#8C9690]">
              Modern applications depend on APIs, cloud services, identity
              systems, databases, and third-party integrations. Security needs
              to consider how those components interact rather than examining
              each one in isolation.
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
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C7F36B]">
              Security engineering
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF] md:text-5xl">
              Security should evolve with the technology.
            </h2>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#C7F36B] px-7 py-3.5 text-sm font-semibold text-[#0A0D0C] hover:bg-[#7ED957]"
            >
              Discuss security
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}