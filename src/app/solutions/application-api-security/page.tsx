import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Application & API Security | TantraOps",
  description:
    "TantraOps focuses on application and API security across modern software systems and connected services.",
  path: "/solutions/application-api-security",
});

const focusAreas = [
  {
    number: "01",
    title: "Secure Architecture",
    description:
      "Identify security considerations early in application and system design.",
  },
  {
    number: "02",
    title: "API Protection",
    description:
      "Assess interfaces, authentication, authorization, and data exposure.",
  },
  {
    number: "03",
    title: "Application Hardening",
    description:
      "Strengthen applications against common security weaknesses and misuse.",
  },
  {
    number: "04",
    title: "Security Testing",
    description:
      "Use structured testing and review to identify weaknesses before they become incidents.",
  },
];

export default function ApplicationApiSecurityPage() {
  return (
    <main className="bg-[#0A0D0C] pt-[76px]">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
            Solution / Application & API Security
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
            Protect the software that connects your business.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690]">
            Applications and APIs are central to modern digital systems. Their
            security needs to be considered from architecture through
            deployment and ongoing development.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
              Secure the connections, not just the code.
            </h2>

            <p className="text-base leading-8 text-[#8C9690]">
              An application can be well protected while still exposing
              weaknesses through APIs, integrations, authentication flows, or
              unexpected data access. We look at the broader system around the
              application.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {focusAreas.map((area) => (
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
          <h2 className="max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF] md:text-5xl">
            Make security part of the development lifecycle.
          </h2>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#C7F36B] px-7 py-3.5 text-sm font-semibold text-[#0A0D0C] hover:bg-[#7ED957]"
          >
            Discuss your application
          </a>
        </div>
      </section>
    </main>
  );
}