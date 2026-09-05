import Link from "next/link";
import {
  BrainCircuit,
  ShieldCheck,
  Network,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

const technologyLayers = [
  {
    number: "01",
    icon: BrainCircuit,
    label: "AI SYSTEMS",
    title: "Intelligent systems",
    description:
      "We explore AI systems that can understand information, assist with complex tasks, and support more capable digital products.",
    tags: ["AI", "LLMs", "Intelligence"],
  },
  {
    number: "02",
    icon: Cpu,
    label: "AUTOMATION",
    title: "Adaptive automation",
    description:
      "We design automation that can connect workflows, reduce repetitive work, and help businesses operate more efficiently.",
    tags: ["Agents", "Workflows", "Automation"],
  },
  {
    number: "03",
    icon: ShieldCheck,
    label: "SECURITY",
    title: "Security engineering",
    description:
      "We apply security thinking across applications, infrastructure, and digital systems to identify weaknesses and reduce exposure.",
    tags: ["Security", "Applications", "Infrastructure"],
  },
  {
    number: "04",
    icon: Network,
    label: "CONNECTED SYSTEMS",
    title: "Systems that work together",
    description:
      "Modern technology rarely operates in isolation. We focus on connecting intelligent capabilities with the systems businesses already depend on.",
    tags: ["APIs", "Cloud", "Integration"],
  },
];

export default function Technology() {
  return (
    <section className="border-b border-white/10 bg-[#141917]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              Technology
            </p>

            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl lg:text-6xl">
              Where intelligence meets engineering.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#8C9690] lg:justify-self-end">
            TantraOps combines artificial intelligence, automation, software
            engineering, and cybersecurity to explore how modern systems can
            become more capable, useful, and secure.
          </p>
        </div>

        {/* Main technology area */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Architecture visual */}
          <div className="relative min-h-[520px] overflow-hidden border border-white/10 bg-[#0A0D0C]">
            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

            {/* Label */}
            <div className="absolute left-6 top-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#59625D]">
                TANTRA / SYSTEM ARCHITECTURE
              </p>
            </div>

            {/* Central core */}
            <div className="absolute left-1/2 top-1/2 w-[200px] -translate-x-1/2 -translate-y-1/2 border border-[#C7F36B]/30 bg-[#141917]">
              <div className="border-b border-white/10 px-5 py-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8C9690]">
                    TANTRA / CORE
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-[#C7F36B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C7F36B] shadow-[0_0_12px_rgba(199,243,107,0.45)]" />
                    ACTIVE
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="font-[family-name:var(--font-syne)] text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#F1F4EF]">
                  Intelligent
                  <br />
                  Core
                </p>

                <p className="mt-3 text-xs leading-6 text-[#8C9690]">
                  AI + automation + security
                </p>

                <div className="mt-6 h-px bg-white/10" />

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] text-[#59625D]">
                      intelligence
                    </span>

                    <span className="font-mono text-[8px] text-[#C7F36B]">
                      ON
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] text-[#59625D]">
                      security
                    </span>

                    <span className="font-mono text-[8px] text-[#C7F36B]">
                      ON
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top node */}
            <div className="absolute left-1/2 top-[11%] w-[165px] -translate-x-1/2 border border-white/10 bg-[#141917] p-4">
              <div className="flex items-center justify-between">
                <BrainCircuit className="h-4 w-4 text-[#C7F36B]" />

                <span className="font-mono text-[8px] tracking-[0.14em] text-[#59625D]">
                  01
                </span>
              </div>

              <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-[#59625D]">
                Intelligence
              </p>

              <p className="mt-1 text-sm font-semibold text-[#F1F4EF]">
                AI Systems
              </p>
            </div>

            {/* Left node */}
            <div className="absolute left-[7%] top-1/2 w-[165px] -translate-y-1/2 border border-white/10 bg-[#141917] p-4">
              <div className="flex items-center justify-between">
                <Network className="h-4 w-4 text-[#7ED957]" />

                <span className="font-mono text-[8px] tracking-[0.14em] text-[#59625D]">
                  02
                </span>
              </div>

              <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-[#59625D]">
                Infrastructure
              </p>

              <p className="mt-1 text-sm font-semibold text-[#F1F4EF]">
                Connected Systems
              </p>
            </div>

            {/* Right node */}
            <div className="absolute right-[7%] top-1/2 w-[165px] -translate-y-1/2 border border-white/10 bg-[#141917] p-4">
              <div className="flex items-center justify-between">
                <ShieldCheck className="h-4 w-4 text-[#C7F36B]" />

                <span className="font-mono text-[8px] tracking-[0.14em] text-[#59625D]">
                  03
                </span>
              </div>

              <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-[#59625D]">
                Protection
              </p>

              <p className="mt-1 text-sm font-semibold text-[#F1F4EF]">
                Security
              </p>
            </div>

            {/* Bottom node */}
            <div className="absolute bottom-[11%] left-1/2 w-[165px] -translate-x-1/2 border border-white/10 bg-[#141917] p-4">
              <div className="flex items-center justify-between">
                <Cpu className="h-4 w-4 text-[#7ED957]" />

                <span className="font-mono text-[8px] tracking-[0.14em] text-[#59625D]">
                  04
                </span>
              </div>

              <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-[#59625D]">
                Execution
              </p>

              <p className="mt-1 text-sm font-semibold text-[#F1F4EF]">
                Automation
              </p>
            </div>

            {/* Connecting lines */}
            <div className="absolute left-1/2 top-[27%] h-[23%] w-px -translate-x-1/2 bg-gradient-to-b from-[#C7F36B]/45 to-transparent" />

            <div className="absolute bottom-[27%] left-1/2 h-[23%] w-px -translate-x-1/2 bg-gradient-to-t from-[#7ED957]/45 to-transparent" />

            <div className="absolute left-[32%] top-1/2 h-px w-[18%] bg-gradient-to-r from-transparent to-[#7ED957]/35" />

            <div className="absolute right-[32%] top-1/2 h-px w-[18%] bg-gradient-to-l from-transparent to-[#C7F36B]/35" />
          </div>

          {/* Technology layers */}
          <div className="border-t border-white/10">
            {technologyLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <div
                  key={layer.number}
                  className="group border-b border-white/10 py-7 transition-colors hover:bg-[#0A0D0C]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-[#0A0D0C] text-[#C7F36B] transition-colors group-hover:border-[#C7F36B]/30">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-[9px] tracking-[0.16em] text-[#59625D]">
                            {layer.number}
                          </span>

                          <span className="font-mono text-[9px] font-semibold tracking-[0.16em] text-[#8C9690]">
                            {layer.label}
                          </span>
                        </div>

                        <h3 className="mt-2 font-[family-name:var(--font-syne)] text-xl font-semibold tracking-[-0.02em] text-[#F1F4EF]">
                          {layer.title}
                        </h3>
                      </div>
                    </div>

                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#59625D] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C7F36B]" />
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#8C9690]">
                    {layer.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {layer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-[#59625D]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom link */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-7 text-[#59625D]">
              We continuously explore new ways to combine intelligent
              technology with secure engineering.
            </p>

            <Link
              href="/technology"
              className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C7F36B] transition-colors hover:text-[#7ED957]"
            >
              Explore our technology
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}