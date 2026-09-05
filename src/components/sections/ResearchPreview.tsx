import Link from "next/link";
import { ArrowUpRight, FlaskConical, ShieldAlert, Sparkles } from "lucide-react";

const researchItems = [
  {
    number: "01",
    icon: Sparkles,
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Exploring the next generation of intelligent systems",
    description:
      "Research into emerging AI capabilities, intelligent agents, automation, and the systems that can make advanced technology more useful.",
    href: "/research/ai-systems",
  },
  {
    number: "02",
    icon: ShieldAlert,
    category: "CYBERSECURITY",
    title: "Understanding evolving digital threats",
    description:
      "Research into vulnerabilities, attack patterns, application security, and the changing challenges facing modern digital environments.",
    href: "/research/cybersecurity",
  },
  {
    number: "03",
    icon: FlaskConical,
    category: "EMERGING TECHNOLOGY",
    title: "Questions worth investigating",
    description:
      "Exploration of new technologies, security problems, and ideas that could shape the systems businesses use in the future.",
    href: "/research/emerging-technology",
  },
];

export default function ResearchPreview() {
  return (
    <section className="border-b border-white/10 bg-[#0A0D0C]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              Research & Intelligence
            </p>

            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl lg:text-6xl">
              We research what could change next.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-2xl text-base leading-8 text-[#8C9690]">
              Technology moves quickly. Our research helps us investigate
              emerging AI capabilities, cybersecurity challenges, and new
              technical ideas before turning useful insights into practical
              systems.
            </p>

            <Link
              href="/research"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C7F36B] transition-colors hover:text-[#7ED957]"
            >
              Explore all research
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Research list */}
        <div className="mt-16 border-t border-white/10">
          {researchItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.number}
                href={item.href}
                className="group grid gap-7 border-b border-white/10 py-10 transition-colors hover:bg-[#141917] lg:grid-cols-[70px_300px_1fr_50px] lg:items-start"
              >
                {/* Number */}
                <span className="font-mono text-[10px] tracking-[0.16em] text-[#59625D]">
                  {item.number}
                </span>

                {/* Category + title */}
                <div>
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-[#C7F36B]" />

                    <span className="font-mono text-[9px] font-semibold tracking-[0.16em] text-[#8C9690]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="mt-4 font-[family-name:var(--font-syne)] text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#F1F4EF]">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-2xl text-sm leading-7 text-[#8C9690]">
                  {item.description}
                </p>

                {/* Arrow */}
                <div className="hidden justify-end lg:flex">
                  <ArrowUpRight className="h-5 w-5 text-[#59625D] transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C7F36B]" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Research statement */}
        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#59625D]">
              TANTRAOPS / RESEARCH
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#8C9690]">
              Research is part of how we learn, challenge assumptions, and
              discover where AI and cybersecurity technology can create useful
              possibilities.
            </p>
          </div>

          <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#C7F36B]">
            AI / SECURITY / FUTURE
          </div>
        </div>
      </div>
    </section>
  );
}