import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-[#0A0D0C]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="relative overflow-hidden border border-white/10 bg-[#141917]">
          {/* Technical grid */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

          {/* Accent glow */}
          <div className="pointer-events-none absolute right-[-120px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#C7F36B]/7 blur-3xl" />

          <div className="relative grid gap-12 p-8 md:p-12 lg:grid-cols-[1fr_0.45fr] lg:items-end lg:p-16">
            {/* Content */}
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                Start a conversation
              </p>

              <h2 className="mt-5 max-w-4xl font-[family-name:var(--font-syne)] text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-[#F1F4EF] md:text-5xl lg:text-6xl">
                Have a problem worth solving?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#8C9690] md:text-lg">
                Tell us what you are building, what you are trying to
                automate, or what security challenge you want to understand.
                Let&apos;s explore what intelligent technology can do.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#C7F36B] px-6 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7ED957] hover:shadow-[0_0_28px_rgba(199,243,107,0.18)]"
                >
                  Talk to TantraOps
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-[#F1F4EF] transition-colors hover:border-[#C7F36B]/50 hover:text-[#C7F36B]"
                >
                  Explore solutions
                </Link>
              </div>
            </div>

            {/* Signal panel */}
            <div className="border border-white/10 bg-[#0A0D0C] p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#59625D]">
                  TANTRA / SIGNAL
                </span>

                <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#C7F36B]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C7F36B] shadow-[0_0_10px_rgba(199,243,107,0.45)]" />
                  READY
                </span>
              </div>

              <div className="mt-7 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[9px] text-[#59625D]">
                    intelligence
                  </span>

                  <span className="font-mono text-[9px] text-[#F1F4EF]">
                    ACTIVE
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[9px] text-[#59625D]">
                    automation
                  </span>

                  <span className="font-mono text-[9px] text-[#F1F4EF]">
                    READY
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-[9px] text-[#59625D]">
                    security
                  </span>

                  <span className="font-mono text-[9px] text-[#F1F4EF]">
                    ACTIVE
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-[9px] text-[#59625D]">
                    next_step
                  </span>

                  <span className="font-mono text-[9px] text-[#C7F36B]">
                    CONNECT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative flex flex-col gap-3 border-t border-white/10 bg-[#0A0D0C] px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#59625D]">
              AI · Automation · Security · Research
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#C7F36B]">
              TANTRAOPS / NEXT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}