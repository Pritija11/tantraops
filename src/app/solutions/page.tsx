import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "AI & Cybersecurity Solutions | TantraOps",
  description:
    "Explore TantraOps solutions across artificial intelligence, automation, generative AI, AI agents, cybersecurity, application security, cloud security, and security intelligence.",
  path: "/solutions",
});

const aiSolutions = [
  {
    number: "01",
    title: "AI Applications",
    description:
      "Build useful software applications powered by artificial intelligence.",
    href: "/solutions/ai-applications",
  },
  {
    number: "02",
    title: "AI Automation",
    description:
      "Connect AI with workflows and business processes to reduce repetitive work.",
    href: "/solutions/ai-automation",
  },
  {
    number: "03",
    title: "Generative AI",
    description:
      "Integrate generative models into applications, knowledge systems, and workflows.",
    href: "/solutions/generative-ai",
  },
  {
    number: "04",
    title: "AI Agents",
    description:
      "Design intelligent systems that can reason, use tools, and perform useful tasks.",
    href: "/solutions/ai-agents",
  },
];

const securitySolutions = [
  {
    number: "05",
    title: "Cybersecurity",
    description:
      "Build stronger security across applications, infrastructure, and connected systems.",
    href: "/solutions/cybersecurity",
  },
  {
    number: "06",
    title: "Application & API Security",
    description:
      "Protect applications, APIs, integrations, authentication flows, and data.",
    href: "/solutions/application-api-security",
  },
  {
    number: "07",
    title: "Cloud & Infrastructure Security",
    description:
      "Strengthen cloud infrastructure, identities, access, and supporting services.",
    href: "/solutions/cloud-infrastructure-security",
  },
  {
    number: "08",
    title: "Security Intelligence",
    description:
      "Turn security signals and technical information into useful intelligence.",
    href: "/solutions/security-intelligence",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#0A0D0C] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-5xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              Solutions / AI + Cybersecurity
            </p>

            <h1 className="mt-6 font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
              Intelligent technology. Stronger digital systems.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690]">
              TantraOps brings artificial intelligence and cybersecurity
              together to help businesses build useful, connected, and secure
              digital systems.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
                Two disciplines
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-syne)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F1F4EF]">
                One technology mindset.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-[#8C9690]">
              <p>
                Artificial intelligence expands what software can do.
                Cybersecurity helps ensure that those systems can be trusted.
              </p>

              <p>
                Our solutions bring these disciplines together around real
                technical problems, from intelligent applications and
                automation to application security and infrastructure
                protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
                01 / AI Technology
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                Artificial intelligence
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#8C9690]">
              Intelligent applications, automation, generative systems, and
              AI agents designed around practical use cases.
            </p>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {aiSolutions.map((solution) => (
              <Link
                key={solution.href}
                href={solution.href}
                className="group border-b border-r border-white/10 p-8 transition-colors hover:bg-[#141917] lg:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-xs text-[#C7F36B]">
                    {solution.number}
                  </span>

                  <span className="text-xl text-[#59625D] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#C7F36B]">
                    →
                  </span>
                </div>

                <h3 className="mt-10 font-[family-name:var(--font-syne)] text-2xl font-semibold text-[#F1F4EF]">
                  {solution.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#8C9690]">
                  {solution.description}
                </p>

                <span className="mt-8 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#59625D] transition-colors group-hover:text-[#C7F36B]">
                  Explore capability
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity */}
      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
                02 / Cybersecurity
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                Cybersecurity
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#8C9690]">
              Security engineering across applications, APIs, infrastructure,
              cloud systems, and security intelligence.
            </p>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {securitySolutions.map((solution) => (
              <Link
                key={solution.href}
                href={solution.href}
                className="group border-b border-r border-white/10 p-8 transition-colors hover:bg-[#0A0D0C] lg:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-xs text-[#C7F36B]">
                    {solution.number}
                  </span>

                  <span className="text-xl text-[#59625D] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#C7F36B]">
                    →
                  </span>
                </div>

                <h3 className="mt-10 font-[family-name:var(--font-syne)] text-2xl font-semibold text-[#F1F4EF]">
                  {solution.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#8C9690]">
                  {solution.description}
                </p>

                <span className="mt-8 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#59625D] transition-colors group-hover:text-[#C7F36B]">
                  Explore capability
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
                Technology with purpose
              </p>

              <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F1F4EF] md:text-5xl">
                Start with the problem. Build around the need.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#8C9690]">
                Every system starts with understanding the problem it needs to
                solve. We combine intelligence, engineering, and security to
                build around that need.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex h-fit rounded-full bg-[#C7F36B] px-7 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all hover:-translate-y-0.5 hover:bg-[#7ED957] hover:shadow-[0_0_24px_rgba(199,243,107,0.18)]"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}