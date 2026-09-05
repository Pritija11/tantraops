import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { researchArticles } from "@/data/research";

export const metadata: Metadata = createMetadata({
  title: "Research | TantraOps",
  description:
    "Explore TantraOps research across artificial intelligence, cybersecurity, and emerging technology.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <main className="bg-[#0A0D0C] pt-[76px]">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
            Research
          </p>

          <h1 className="mt-6 max-w-5xl font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
            Investigating what comes next.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690]">
            TantraOps explores artificial intelligence, cybersecurity, and
            emerging technologies to understand how new ideas can become useful
            and secure systems.
          </p>
        </div>
      </section>

      {/* Research Articles */}
      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
              Research areas
            </p>

            <h2 className="mt-5 font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
              Ideas worth investigating.
            </h2>
          </div>

          <div className="border-l border-t border-white/10">
            {researchArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/research/${article.slug}`}
                className="group block border-b border-r border-white/10 p-8 transition-colors hover:bg-[#0A0D0C] lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[80px_1fr_auto] lg:items-start">
                  {/* Number */}
                  <span className="font-mono text-xs text-[#C7F36B]">
                    {article.number}
                  </span>

                  {/* Content */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#59625D]">
                      {article.category}
                    </p>

                    <h3 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                      {article.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#8C9690]">
                      {article.excerpt}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[#59625D]">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <span className="text-xl text-[#59625D] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#C7F36B]">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Research Approach */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
                Research approach
              </p>

              <h2 className="mt-5 font-[family-name:var(--font-syne)] text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F1F4EF]">
                Observe. Investigate. Validate. Apply.
              </h2>
            </div>

            <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-4">
              {[
                "Observe",
                "Investigate",
                "Validate",
                "Apply",
              ].map((step, index) => (
                <div
                  key={step}
                  className="border-b border-r border-white/10 p-5 lg:p-6"
                >
                  <span className="font-mono text-[10px] text-[#C7F36B]">
                    0{index + 1}
                  </span>

                  <p className="mt-8 text-sm font-medium text-[#F1F4EF]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="border border-[#C7F36B]/20 bg-[#0A0D0C] p-8 lg:p-14">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
              Research & collaboration
            </p>

            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold tracking-[-0.04em] text-[#F1F4EF] md:text-5xl">
              Have a technology question worth exploring?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#8C9690]">
              Connect with TantraOps to discuss research, emerging
              technologies, AI systems, or cybersecurity.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[#C7F36B] px-7 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all hover:-translate-y-0.5 hover:bg-[#7ED957]"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}