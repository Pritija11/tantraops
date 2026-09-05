"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    e.currentTarget.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="bg-[#0A0D0C] pt-[76px]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-150px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#C7F36B]/6 blur-3xl" />

          <div className="absolute bottom-[-180px] left-[-130px] h-[360px] w-[360px] rounded-full bg-[#7ED957]/5 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-4xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              Contact TantraOps
            </p>

            <h1 className="mt-6 font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
              Let&apos;s talk about what you&apos;re building.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#8C9690] md:text-xl">
              Tell us about an AI project, automation opportunity, software
              challenge, or cybersecurity problem you want to explore.
            </p>
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-28">
          {/* Contact Info */}
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              Get in touch
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF] md:text-4xl">
              Start with the problem.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#8C9690]">
              Whether you are exploring artificial intelligence, automation,
              software engineering, or cybersecurity, start with a
              conversation about what you need.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="mailto:contact@tantraops.com"
                className="flex items-center gap-4 border border-white/10 bg-[#141917] p-5 transition-colors hover:border-[#C7F36B]/50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C7F36B]/20 bg-[#C7F36B]/5 text-[#C7F36B]">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8C9690]">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#F1F4EF]">
                    contact@tantraops.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+97714123456"
                className="flex items-center gap-4 border border-white/10 bg-[#141917] p-5 transition-colors hover:border-[#C7F36B]/50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C7F36B]/20 bg-[#C7F36B]/5 text-[#C7F36B]">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8C9690]">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#F1F4EF]">
                    +977 1 4123456
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 border border-white/10 bg-[#141917] p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C7F36B]/20 bg-[#C7F36B]/5 text-[#C7F36B]">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8C9690]">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#F1F4EF]">
                    New Baneshwor, Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-l border-[#C7F36B]/40 pl-5">
              <p className="font-mono text-[9px] uppercase leading-6 tracking-[0.14em] text-[#59625D]">
                TANTRAOPS
                <br />
                AI + CYBERSECURITY TECHNOLOGY
                <br />
                KATHMANDU / NEPAL
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="border border-white/10 bg-[#141917] p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#C7F36B]">
                  Send a message
                </p>

                <h2 className="mt-2 font-[family-name:var(--font-syne)] text-2xl font-semibold text-[#F1F4EF]">
                  Tell us what you need.
                </h2>
              </div>

              <Sparkles className="hidden h-5 w-5 text-[#C7F36B] sm:block" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-[#F1F4EF]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full border border-white/10 bg-[#0A0D0C] px-4 py-3 text-sm text-[#F1F4EF] outline-none transition-colors placeholder:text-[#59625D] focus:border-[#C7F36B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[#F1F4EF]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-white/10 bg-[#0A0D0C] px-4 py-3 text-sm text-[#F1F4EF] outline-none transition-colors placeholder:text-[#59625D] focus:border-[#C7F36B]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-[#F1F4EF]"
                >
                  Company
                  <span className="ml-1 text-[#8C9690]">(optional)</span>
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  className="w-full border border-white/10 bg-[#0A0D0C] px-4 py-3 text-sm text-[#F1F4EF] outline-none transition-colors placeholder:text-[#59625D] focus:border-[#C7F36B]"
                />
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="mb-2 block text-sm font-medium text-[#F1F4EF]"
                >
                  What can we help with?
                </label>

                <select
                  id="topic"
                  name="topic"
                  required
                  defaultValue=""
                  className="w-full border border-white/10 bg-[#0A0D0C] px-4 py-3 text-sm text-[#F1F4EF] outline-none transition-colors focus:border-[#C7F36B]"
                >
                  <option value="" disabled>
                    Select a topic
                  </option>

                  <option value="ai-applications">
                    AI applications
                  </option>

                  <option value="ai-automation">
                    AI automation
                  </option>

                  <option value="generative-ai">
                    Generative AI
                  </option>

                  <option value="ai-agents">
                    AI agents
                  </option>

                  <option value="cybersecurity">
                    Cybersecurity
                  </option>

                  <option value="application-security">
                    Application & API security
                  </option>

                  <option value="cloud-security">
                    Cloud & infrastructure security
                  </option>

                  <option value="security-intelligence">
                    Security intelligence
                  </option>

                  <option value="research">
                    Research or collaboration
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#F1F4EF]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your project, challenge, or idea..."
                  className="w-full resize-none border border-white/10 bg-[#0A0D0C] px-4 py-3 text-sm leading-7 text-[#F1F4EF] outline-none transition-colors placeholder:text-[#59625D] focus:border-[#C7F36B]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#C7F36B] px-6 py-3.5 text-sm font-semibold text-[#0A0D0C] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7ED957] hover:shadow-[0_0_24px_rgba(199,243,107,0.18)]"
              >
                {submitted ? "Message sent!" : "Send message"}

                {!submitted && <ArrowRight className="h-4 w-4" />}
              </button>

              {submitted && (
                <div className="border border-[#C7F36B]/20 bg-[#C7F36B]/5 px-4 py-3">
                  <p className="text-sm font-medium text-[#C7F36B]">
                    Message sent successfully!
                  </p>
                </div>
              )}

              <p className="text-xs leading-6 text-[#59625D]">
                By submitting this form, you agree to be contacted regarding
                your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* What can we help with */}
      <section className="border-b border-white/10 bg-[#141917]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
              Start with a conversation
            </p>

            <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF] md:text-4xl">
              What can we work on?
            </h2>
          </div>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            <div className="bg-[#0A0D0C] p-7 lg:p-8">
              <BrainCircuit className="h-5 w-5 text-[#C7F36B]" />

              <h3 className="mt-6 font-[family-name:var(--font-syne)] text-xl font-semibold text-[#F1F4EF]">
                AI & Automation
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#8C9690]">
                Discuss intelligent applications, automation, generative AI,
                agents, and emerging AI opportunities.
              </p>
            </div>

            <div className="bg-[#0A0D0C] p-7 lg:p-8">
              <ShieldCheck className="h-5 w-5 text-[#C7F36B]" />

              <h3 className="mt-6 font-[family-name:var(--font-syne)] text-xl font-semibold text-[#F1F4EF]">
                Cybersecurity
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#8C9690]">
                Explore security assessments, application security, cloud
                security, infrastructure, and security intelligence.
              </p>
            </div>

            <div className="bg-[#0A0D0C] p-7 lg:p-8">
              <Sparkles className="h-5 w-5 text-[#C7F36B]" />

              <h3 className="mt-6 font-[family-name:var(--font-syne)] text-xl font-semibold text-[#F1F4EF]">
                Research & Collaboration
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#8C9690]">
                Connect with us around emerging technology, research ideas,
                partnerships, and technical collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0D0C]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="relative overflow-hidden border border-white/10 bg-[#141917]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative p-8 text-center md:p-12 lg:p-16">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
                TantraOps
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF] md:text-4xl lg:text-5xl">
                Let&apos;s turn a difficult problem into something worth
                building.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#8C9690]">
                Explore our solutions or learn more about the technology and
                research behind TantraOps.
              </p>

              <Link
                href="/solutions"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-[#F1F4EF] transition-all hover:border-[#C7F36B] hover:text-[#C7F36B]"
              >
                Explore our solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}