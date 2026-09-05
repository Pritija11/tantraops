import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  ShieldCheck,
  Terminal,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0D0C] pt-[76px]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[55%] top-[-220px] h-[620px] w-[620px] rounded-full bg-[#C7F36B]/6 blur-3xl" />

        <div className="absolute right-[-160px] bottom-[-160px] h-[420px] w-[420px] rounded-full bg-[#7ED957]/5 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0D0C_75%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid min-h-[calc(100vh-76px)] items-center gap-16 py-20 lg:grid-cols-[1fr_0.9fr] lg:py-28">
          {/* Content */}
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#C7F36B] shadow-[0_0_12px_rgba(199,243,107,0.5)]" />

              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                AI & Cybersecurity Technology Startup
              </p>
            </div>

            <h1 className="font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.01] tracking-[-0.06em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
              Intelligence for what&apos;s next.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690] md:text-xl">
              TantraOps is an emerging AI and cybersecurity technology startup
              building intelligent systems, automation, and secure digital
              solutions for modern businesses.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-[#C7F36B] px-6 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7ED957] hover:shadow-[0_0_28px_rgba(199,243,107,0.18)]"
              >
                Explore solutions
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-[#F1F4EF] transition-all duration-200 hover:border-[#C7F36B]/50 hover:text-[#C7F36B]"
              >
                Start a conversation
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#59625D]">
              <span>AI Systems</span>
              <span>•</span>
              <span>Automation</span>
              <span>•</span>
              <span>Cybersecurity</span>
              <span>•</span>
              <span>Research</span>
            </div>
          </div>

          {/* Technology Visual */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="relative aspect-square">
              {/* Outer frame */}
              <div className="absolute inset-[5%] border border-white/10" />

              <div className="absolute inset-[12%] border border-[#C7F36B]/15" />

              <div className="absolute inset-[20%] border border-white/10" />

              {/* Corner markers */}
              <span className="absolute left-[5%] top-[5%] h-3 w-3 border-l border-t border-[#C7F36B]" />
              <span className="absolute right-[5%] top-[5%] h-3 w-3 border-r border-t border-[#C7F36B]" />
              <span className="absolute bottom-[5%] left-[5%] h-3 w-3 border-b border-l border-[#C7F36B]" />
              <span className="absolute bottom-[5%] right-[5%] h-3 w-3 border-b border-r border-[#C7F36B]" />

              {/* Central system */}
              <div className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2 border border-[#C7F36B]/25 bg-[#141917]/90">
                <div className="border-b border-white/10 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8C9690]">
                      TANTRA / CORE
                    </span>

                    <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#C7F36B]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C7F36B]" />
                      ONLINE
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border border-white/10 bg-[#0A0D0C] p-4">
                      <BrainCircuit className="h-5 w-5 text-[#C7F36B]" />

                      <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[#8C9690]">
                        Intelligence
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#F1F4EF]">
                        AI Systems
                      </p>
                    </div>

                    <div className="border border-white/10 bg-[#0A0D0C] p-4">
                      <ShieldCheck className="h-5 w-5 text-[#7ED957]" />

                      <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[#8C9690]">
                        Protection
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#F1F4EF]">
                        Cybersecurity
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 border border-white/10 bg-[#0A0D0C] p-4">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-[#C7F36B]" />

                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#8C9690]">
                        SYSTEM STATUS
                      </span>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-[#59625D]">
                          intelligence.engine
                        </span>

                        <span className="font-mono text-[9px] text-[#C7F36B]">
                          ACTIVE
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-[#59625D]">
                          security.layer
                        </span>

                        <span className="font-mono text-[9px] text-[#C7F36B]">
                          ACTIVE
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-[#59625D]">
                          automation.core
                        </span>

                        <span className="font-mono text-[9px] text-[#C7F36B]">
                          READY
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating labels */}
              <div className="absolute left-[0%] top-[25%] border border-white/10 bg-[#141917] px-4 py-3">
                <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#59625D]">
                  Layer 01
                </p>

                <p className="mt-1 text-xs font-semibold text-[#F1F4EF]">
                  Intelligence
                </p>
              </div>

              <div className="absolute right-[0%] bottom-[24%] border border-white/10 bg-[#141917] px-4 py-3">
                <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#59625D]">
                  Layer 02
                </p>

                <p className="mt-1 text-xs font-semibold text-[#F1F4EF]">
                  Security
                </p>
              </div>

              {/* Connecting lines */}
              <div className="absolute left-[15%] top-1/2 h-px w-[18%] bg-gradient-to-r from-transparent to-[#C7F36B]/40" />

              <div className="absolute right-[15%] top-1/2 h-px w-[18%] bg-gradient-to-l from-transparent to-[#7ED957]/40" />

              <div className="absolute left-1/2 top-[5%] h-[20%] w-px -translate-x-1/2 bg-gradient-to-b from-[#C7F36B]/40 to-transparent" />

              <div className="absolute bottom-[5%] left-1/2 h-[20%] w-px -translate-x-1/2 bg-gradient-to-t from-[#7ED957]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}