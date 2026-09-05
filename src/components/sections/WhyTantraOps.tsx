import {
  BrainCircuit,
  ShieldCheck,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const principles = [
  {
    number: "01",
    icon: BrainCircuit,
    label: "INTELLIGENCE",
    title: "Build with intelligence at the center.",
    description:
      "We explore how artificial intelligence can help businesses understand information, automate work, and create more capable digital systems.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    label: "SECURITY",
    title: "Design for security from the beginning.",
    description:
      "Security is part of the technology we build, helping organizations identify risk, strengthen systems, and operate with greater confidence.",
  },
  {
    number: "03",
    icon: Layers3,
    label: "ENGINEERING",
    title: "Turn emerging ideas into useful systems.",
    description:
      "We focus on practical engineering, combining research, experimentation, and software development to move ideas toward real-world applications.",
  },
];

export default function WhyTantraOps() {
  return (
    <section className="border-b border-white/10 bg-[#0A0D0C]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              Why TantraOps
            </p>

            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl lg:text-6xl">
              Building technology with intelligence and security in balance.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#8C9690] lg:justify-self-end">
            TantraOps is an emerging AI and cybersecurity technology startup
            exploring how intelligent systems and strong security practices can
            work together to solve modern technology challenges.
          </p>
        </div>

        {/* Principles */}
        <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <div
                key={principle.number}
                className="group bg-[#141917] p-7 transition-colors hover:bg-[#111512] lg:p-9"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-[#0A0D0C] text-[#C7F36B] transition-colors group-hover:border-[#C7F36B]/30">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="font-mono text-[9px] tracking-[0.16em] text-[#59625D]">
                    {principle.number}
                  </span>
                </div>

                <p className="mt-8 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8C9690]">
                  {principle.label}
                </p>

                <h3 className="mt-3 font-[family-name:var(--font-syne)] text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#F1F4EF]">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#8C9690]">
                  {principle.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#59625D] transition-colors group-hover:text-[#C7F36B]">
                  <span>TantraOps</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-7 text-[#59625D]">
              Artificial intelligence expands what systems can do. Security
              helps ensure those systems can be trusted.
            </p>

            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#C7F36B]">
              AI / SECURITY / ENGINEERING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}