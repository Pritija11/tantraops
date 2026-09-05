import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms of Use | TantraOps",
  description:
    "Review the terms governing use of the TantraOps website and its content.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="bg-[#0A0D0C] pt-[76px]">
      {/* Header */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C7F36B]">
            Legal
          </p>

          <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-syne)] text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#F1F4EF] md:text-6xl lg:text-7xl">
            Terms of Use
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#8C9690]">
            These terms describe the general conditions for using the TantraOps
            website and accessing its content.
          </p>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#59625D]">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Terms */}
      <section className="bg-[#141917]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="space-y-16">
            {/* 01 */}
            <section>
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#C7F36B]">
                01
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                Acceptance of terms
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#8C9690]">
                <p>
                  By accessing or using the TantraOps website, you agree to use
                  the website in accordance with these Terms of Use and
                  applicable laws and regulations.
                </p>

                <p>
                  If you do not agree with these terms, please do not use the
                  website.
                </p>
              </div>
            </section>

            {/* 02 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#C7F36B]">
                02
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                Website content
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#8C9690]">
                <p>
                  The content published on this website is provided for general
                  informational purposes about TantraOps, its technology focus,
                  research interests, and potential services.
                </p>

                <p>
                  We make reasonable efforts to keep the information accurate
                  and current, but we do not guarantee that all content will
                  always be complete, accurate, or up to date.
                </p>
              </div>
            </section>

            {/* 03 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#C7F36B]">
                03
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                Intellectual property
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#8C9690]">
                <p>
                  Unless otherwise stated, the content, branding, visual
                  elements, text, graphics, and other materials on this website
                  belong to TantraOps or are used with appropriate permission.
                </p>

                <p>
                  You may view and use the website for personal or legitimate
                  business purposes, but you may not reproduce, distribute,
                  modify, publish, or commercially exploit website content
                  without appropriate authorization.
                </p>
              </div>
            </section>

            {/* 04 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#C7F36B]">
                04
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                Acceptable use
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#8C9690]">
                <p>
                  You agree not to use the website in a way that could damage,
                  disable, overburden, or interfere with its operation or
                  security.
                </p>

                <p>
                  You must not attempt to gain unauthorized access to the
                  website, its systems, infrastructure, accounts, or data, or
                  use the website for unlawful activity.
                </p>
              </div>
            </section>

            {/* 05 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#C7F36B]">
                05
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                External links
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#8C9690]">
                <p>
                  The website may contain links to external websites or
                  third-party services for convenience or reference.
                </p>

                <p>
                  TantraOps does not control those external services and is not
                  responsible for their content, availability, security, or
                  privacy practices.
                </p>
              </div>
            </section>

            {/* 06 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#C7F36B]">
                06
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                No professional advice
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#8C9690]">
                <p>
                  Information published on the TantraOps website is not
                  intended to replace professional, legal, financial,
                  cybersecurity, technical, or other specialist advice.
                </p>

                <p>
                  Any decisions made based on website content should be
                  evaluated according to your own circumstances and, where
                  appropriate, with qualified professional advice.
                </p>
              </div>
            </section>

            {/* 07 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#C7F36B]">
                07
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                Availability
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#8C9690]">
                <p>
                  We may change, suspend, update, or discontinue parts of the
                  website at any time without prior notice.
                </p>

                <p>
                  We do not guarantee that the website will always be available,
                  uninterrupted, or free from errors.
                </p>
              </div>
            </section>

            {/* 08 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#C7F36B]">
                08
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                Limitation of liability
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#8C9690]">
                <p>
                  To the extent permitted by applicable law, TantraOps will not
                  be responsible for losses, damages, interruptions, or other
                  consequences arising from the use of, or inability to use,
                  the website or its content.
                </p>

                <p>
                  Nothing in these terms is intended to exclude or limit
                  liability where such exclusion or limitation is not permitted
                  by law.
                </p>
              </div>
            </section>

            {/* 09 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#C7F36B]">
                09
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                Changes to these terms
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#8C9690]">
                <p>
                  TantraOps may update these Terms of Use from time to time to
                  reflect changes to the website, our practices, or applicable
                  requirements.
                </p>

                <p>
                  Updated terms will be published on this page along with a
                  revised update date.
                </p>
              </div>
            </section>

            {/* 10 */}
            <section className="border-t border-white/10 pt-16">
              <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#C7F36B]">
                10
              </p>

              <h2 className="mt-4 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.04em] text-[#F1F4EF]">
                Contact
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-[#8C9690]">
                <p>
                  Questions about these terms can be directed to:
                </p>

                <a
                  href="mailto:contact@tantraops.com"
                  className="inline-block text-[#C7F36B] transition-colors hover:text-[#7ED957]"
                >
                  contact@tantraops.com
                </a>
              </div>
            </section>

            {/* Contact panel */}
            <section className="border-t border-white/10 pt-16">
              <div className="border border-white/10 bg-[#0A0D0C] p-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C7F36B]">
                  TantraOps
                </p>

                <h2 className="mt-4 font-[family-name:var(--font-syne)] text-2xl font-semibold text-[#F1F4EF]">
                  Need clarification?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#8C9690]">
                  Reach out to our team for questions regarding these Terms of
                  Use or the TantraOps website.
                </p>

                <a
                  href="mailto:contact@tantraops.com"
                  className="mt-6 inline-block font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#C7F36B] hover:text-[#7ED957]"
                >
                  Contact TantraOps
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}