import Link from "next/link";
import {
  BrainCircuit,
  Workflow,
  Sparkles,
  Bot,
  ShieldCheck,
  Code2,
  Cloud,
  Radar,
  ArrowUpRight,
} from "lucide-react";

const solutionGroups = [
  {
    label: "AI TECHNOLOGY",
    description:
      "Intelligent systems designed to help businesses automate work, work with information, and build more capable digital products.",
    items: [
      {
        icon: BrainCircuit,
        number: "01",
        title: "AI Applications",
        description:
          "Build intelligent applications that connect AI capabilities with real business problems, information, and workflows.",
        href: "/solutions/ai-applications",
      },
      {
        icon: Workflow,
        number: "02",
        title: "AI Automation",
        description:
          "Use intelligent automation to reduce repetitive work, connect workflows, and improve operational efficiency.",
        href: "/solutions/ai-automation",
      },
      {
        icon: Sparkles,
        number: "03",
        title: "Generative AI",
        description:
          "Explore practical generative AI systems for content, knowledge, analysis, and business workflows.",
        href: "/solutions/generative-ai",
      },
      {
        icon: Bot,
        number: "04",
        title: "AI Agents",
        description:
          "Develop intelligent agents that can reason through tasks, interact with tools, and support more autonomous workflows.",
        href: "/solutions/ai-agents",
      },
    ],
  },
  {
    label: "CYBERSECURITY",
    description:
      "Security capabilities that help organizations understand exposure, reduce risk, and build stronger digital systems.",
    items: [
      {
        icon: ShieldCheck,
        number: "05",
        title: "Cybersecurity",
        description:
          "Assess digital environments, identify weaknesses, and help organizations strengthen their overall security posture.",
        href: "/solutions/cybersecurity",
      },
      {
        icon: Code2,
        number: "06",
        title: "Application & API Security",
        description:
          "Identify security weaknesses across applications, APIs, authentication, authorization, and exposed functionality.",
        href: "/solutions/application-api-security",
      },
      {
        icon: Cloud,
        number: "07",
        title: "Cloud & Infrastructure Security",
        description:
          "Examine cloud environments, infrastructure, configurations, permissions, and exposed services for security risks.",
        href: "/solutions/cloud-infrastructure-security",
      },
      {
        icon: Radar,
        number: "08",
        title: "Security Intelligence",
        description:
          "Research emerging threats, vulnerabilities, and security patterns to help organizations better understand digital risk.",
        href: "/solutions/security-intelligence",
      },
    ],
  },
];

export default function SolutionsOverview() {
  return (
    <section className="border-y border-white/10 bg-[#141917]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              What we build
            </p>

            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl lg:text-6xl">
              Intelligence and security, built for the real world.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#8C9690] lg:justify-self-end">
            TantraOps works across artificial intelligence and cybersecurity,
            combining intelligent systems, automation, security engineering,
            and research to solve modern technology challenges.
          </p>
        </div>

        {/* Solution groups */}
        <div className="mt-16 space-y-16">
          {solutionGroups.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8C9690]">
                  {group.label}
                </span>

                <span className="h-px flex-1 bg-white/10" />
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#59625D]">
                {group.description}
              </p>

              <div className="mt-5 grid border-t border-white/10 lg:grid-cols-2">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.number}
                      href={item.href}
                      className="group relative border-b border-white/10 p-6 transition-colors hover:bg-[#0A0D0C] lg:p-8"
                    >
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex items-start gap-4">
                          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-[#0A0D0C] text-[#C7F36B] transition-all duration-200 group-hover:border-[#C7F36B]/40 group-hover:bg-[#C7F36B]/5">
                            <Icon className="h-4 w-4" />
                          </div>

                          <div>
                            <p className="font-mono text-[9px] tracking-[0.16em] text-[#59625D]">
                              {item.number}
                            </p>

                            <h3 className="mt-2 font-[family-name:var(--font-syne)] text-xl font-semibold tracking-[-0.02em] text-[#F1F4EF]">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <ArrowUpRight className="h-5 w-5 shrink-0 text-[#59625D] transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C7F36B]" />
                      </div>

                      <p className="mt-5 max-w-xl text-sm leading-7 text-[#8C9690]">
                        {item.description}
                      </p>

                      <div className="mt-6 flex items-center gap-2">
                        <span className="h-px w-0 bg-[#C7F36B] transition-all duration-300 group-hover:w-8" />

                        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#59625D] transition-colors group-hover:text-[#C7F36B]">
                          Explore capability
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl font-mono text-[10px] uppercase leading-5 tracking-[0.14em] text-[#59625D]">
            AI systems / automation / intelligent agents / cybersecurity /
            research
          </p>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C7F36B] transition-colors hover:text-[#7ED957]"
          >
            View all capabilities
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}