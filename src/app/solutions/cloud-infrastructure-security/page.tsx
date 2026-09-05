import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Cloud & Infrastructure Security | TantraOps",
  description:
    "TantraOps helps address security across cloud infrastructure, services, access controls, and connected systems.",
  path: "/solutions/cloud-infrastructure-security",
});

const areas = [
  {
    number: "01",
    title: "Cloud Security",
    description:
      "Strengthen security across cloud environments, services, and deployment models.",
  },
  {
    number: "02",
    title: "Identity & Access",
    description:
      "Design stronger controls around identities, permissions, and system access.",
  },
  {
    number: "03",
    title: "Infrastructure Hardening",
    description:
      "Improve the security posture of infrastructure and supporting services.",
  },
  {
    number: "04",
    title: "Security Monitoring",
    description:
      "Improve visibility into infrastructure activity and potential security signals.",
  },
];

export default function CloudInfrastructureSecurityPage() {
  return (
    <main className="bg-[#0A0D0C] pt-[76px]">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
            Solution / Cloud & Infrastructure Security
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
            Secure the infrastructure behind digital systems.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690]">
            Modern infrastructure spans cloud platforms, services, identities,
            networks, and automated deployments. Security needs to account for
            all of them.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
              Infrastructure is part of the attack surface.
            </h2>

            <p className="text-base leading-8 text-[#8C9690]">
              Cloud infrastructure makes software more flexible and scalable,
              but it also creates new relationships between identities,
              services, data, and deployment systems. Strong security starts by
              understanding those relationships.
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
              Infrastructure
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF] md:text-5xl">
              Build infrastructure that can support secure growth.
            </h2>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#C7F36B] px-7 py-3.5 text-sm font-semibold text-[#0A0D0C] hover:bg-[#7ED957]"
            >
              Discuss infrastructure
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}