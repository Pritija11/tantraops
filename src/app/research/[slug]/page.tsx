import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { createMetadata } from "@/lib/seo";

type ResearchArticle = {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  introduction: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

const articles: ResearchArticle[] = [
  {
    slug: "ai-systems",
    number: "01",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Exploring the next generation of intelligent systems",
    description:
      "An exploration of how intelligent systems, AI agents, and automation are changing the way software can work with people and information.",
    readTime: "5 min read",
    introduction:
      "Artificial intelligence is moving beyond systems that simply generate responses. Modern AI systems are increasingly being designed to understand context, work with tools, interact with software, and support multi-step tasks.",
    sections: [
      {
        heading: "From models to systems",
        paragraphs: [
          "A language model or other AI model is only one component of an intelligent application. Useful systems also need data, interfaces, tools, application logic, evaluation, and appropriate security controls.",
          "This shift from isolated models toward complete systems creates new engineering questions around reliability, context, permissions, orchestration, and human interaction.",
        ],
      },
      {
        heading: "Agents introduce a different workflow",
        paragraphs: [
          "AI agents can be designed to reason through tasks, select tools, interact with external systems, and continue working through multiple steps.",
          "That creates opportunities for more autonomous workflows, but it also means system designers need to think carefully about what an agent is allowed to access and how its actions are validated.",
        ],
      },
      {
        heading: "Useful AI requires practical engineering",
        paragraphs: [
          "The most interesting AI capabilities are not necessarily the most useful ones. A successful system needs to solve a meaningful problem, fit the workflow, and perform reliably enough for the people using it.",
          "At TantraOps, our AI research focuses on understanding how intelligent capabilities can become practical software rather than remaining isolated technical experiments.",
        ],
      },
    ],
  },
  {
    slug: "cybersecurity",
    number: "02",
    category: "CYBERSECURITY",
    title: "Understanding evolving digital threats",
    description:
      "An exploration of how modern systems become exposed as applications, infrastructure, APIs, and digital services become increasingly connected.",
    readTime: "5 min read",
    introduction:
      "Digital environments continue to become more connected. Applications communicate with APIs, cloud services depend on identity systems, and businesses rely on third-party integrations and distributed infrastructure.",
    sections: [
      {
        heading: "Connected systems create connected risk",
        paragraphs: [
          "A security weakness rarely exists in complete isolation. A vulnerable application component can interact with a cloud configuration, identity boundary, exposed API, or external service to create a broader security problem.",
          "Understanding digital risk therefore requires examining relationships between systems rather than focusing only on individual vulnerabilities.",
        ],
      },
      {
        heading: "Attack techniques continue to adapt",
        paragraphs: [
          "Attackers can adapt their techniques as software architectures and defensive controls change. New technologies can create new opportunities for exploitation as well as new ways to defend systems.",
          "Security research helps organizations question established assumptions and understand how changing environments may affect their exposure.",
        ],
      },
      {
        heading: "Security needs continuous attention",
        paragraphs: [
          "A system that is secure today may not remain secure as its code, dependencies, users, infrastructure, and external services change.",
          "For TantraOps, cybersecurity research is part of understanding these changes and exploring practical ways to identify and reduce digital risk.",
        ],
      },
    ],
  },
  {
    slug: "emerging-technology",
    number: "03",
    category: "EMERGING TECHNOLOGY",
    title: "Questions worth investigating",
    description:
      "A look at the technical questions created by emerging AI, software, automation, and cybersecurity technologies.",
    readTime: "4 min read",
    introduction:
      "Emerging technologies often move faster than established engineering practices. New capabilities can create useful opportunities while also introducing assumptions that have not yet been tested in real-world environments.",
    sections: [
      {
        heading: "New capabilities create new assumptions",
        paragraphs: [
          "When a technology changes how software behaves, it can also change how users interact with systems, how data moves, and where security boundaries exist.",
          "Understanding those changes requires investigating the assumptions behind the technology rather than treating new capabilities as isolated features.",
        ],
      },
      {
        heading: "Research starts with a question",
        paragraphs: [
          "A useful investigation can begin with a small technical observation, an unusual behavior, a new system architecture, or a security question that does not have an obvious answer.",
          "The goal is to examine the problem carefully, test assumptions, and understand whether the finding has meaningful technical or practical implications.",
        ],
      },
      {
        heading: "What we learn should influence what we build",
        paragraphs: [
          "Research becomes more valuable when its findings can influence engineering decisions, security practices, product development, or future research.",
          "As an emerging AI and cybersecurity technology startup, TantraOps uses research as part of the process of learning what deserves to be built next.",
        ],
      },
    ],
  },
];

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return createMetadata({
      title: "Research | TantraOps",
      description:
        "Explore AI, cybersecurity, and emerging technology research from TantraOps.",
      path: "/research",
    });
  }

  return createMetadata({
    title: `${article.title} | TantraOps`,
    description: article.description,
    path: `/research/${article.slug}`,
  });
}

export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-[#0A0D0C] px-6 pb-20 pt-[150px]">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C7F36B]">
            Research
          </p>

          <h1 className="mt-5 font-[family-name:var(--font-syne)] text-5xl font-semibold tracking-[-0.05em] text-[#F1F4EF]">
            Research article not found.
          </h1>

          <Link
            href="/research"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#C7F36B]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to research
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#0A0D0C] pt-[76px]">
      {/* Article hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-150px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#C7F36B]/6 blur-3xl" />

          <div className="absolute bottom-[-180px] left-[-130px] h-[360px] w-[360px] rounded-full bg-[#7ED957]/5 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8C9690] transition-colors hover:text-[#C7F36B]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to research
          </Link>

          <div className="mt-12">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-mono text-[9px] tracking-[0.16em] text-[#59625D]">
                {article.number}
              </span>

              <span className="h-px w-8 bg-[#C7F36B]/50" />

              <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[#C7F36B]">
                {article.category}
              </span>
            </div>

            <h1 className="mt-7 font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.03] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
              {article.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#8C9690] md:text-xl">
              {article.description}
            </p>

            <div className="mt-8">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#59625D]">
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="bg-[#141917]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[180px_1fr]">
            {/* Aside */}
            <aside className="lg:sticky lg:top-32 lg:h-fit">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
                Research note
              </p>

              <div className="mt-5 h-px w-full bg-white/10" />

              <p className="mt-5 font-mono text-[9px] uppercase leading-6 tracking-[0.12em] text-[#59625D]">
                TANTRAOPS
                <br />
                AI + CYBERSECURITY
                <br />
                RESEARCH
              </p>
            </aside>

            {/* Content */}
            <div className="max-w-3xl">
              <p className="text-lg leading-9 text-[#F1F4EF]">
                {article.introduction}
              </p>

              <div className="mt-16">
                {article.sections.map((section, index) => (
                  <section
                    key={section.heading}
                    className={
                      index === 0
                        ? ""
                        : "mt-16 border-t border-white/10 pt-16"
                    }
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[9px] tracking-[0.16em] text-[#59625D]">
                        0{index + 1}
                      </span>

                      <span className="h-px w-8 bg-[#C7F36B]/40" />
                    </div>

                    <h2 className="mt-5 font-[family-name:var(--font-syne)] text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#F1F4EF] md:text-4xl">
                      {section.heading}
                    </h2>

                    <div className="mt-6 space-y-6">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-8 text-[#8C9690]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-20 border-t border-white/10 pt-8">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C7F36B] transition-colors hover:text-[#7ED957]"
                >
                  View all research
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#0A0D0C]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="relative overflow-hidden border border-white/10 bg-[#141917]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative p-8 md:p-12 lg:p-16">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                Keep exploring
              </p>

              <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl lg:text-6xl">
                The next useful idea can start with a question.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#8C9690]">
                Explore more research from TantraOps or talk to us about a
                technology problem you are trying to solve.
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
                Research · Learn · Build · Improve
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#C7F36B]">
                TANTRAOPS / RESEARCH
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}