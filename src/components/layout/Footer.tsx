import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { navigationLinks } from "@/data/navigation";

const solutionLinks = [
  {
    label: "AI Applications",
    href: "/solutions/ai-applications",
  },
  {
    label: "AI Automation",
    href: "/solutions/ai-automation",
  },
  {
    label: "Generative AI",
    href: "/solutions/generative-ai",
  },
  {
    label: "AI Agents",
    href: "/solutions/ai-agents",
  },
  {
    label: "Cybersecurity",
    href: "/solutions/cybersecurity",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0D0C]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="TantraOps"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#8C9690]">
              An emerging AI and cybersecurity technology startup building
              intelligent systems, automation, and secure digital solutions
              for modern businesses.
            </p>

            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[#59625D]">
              AI + Cybersecurity Technology
              <br />
              Kathmandu / Nepal
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#F1F4EF]">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8C9690] transition-colors hover:text-[#F1F4EF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-[#F1F4EF]">
              Solutions
            </h3>

            <ul className="mt-5 space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8C9690] transition-colors hover:text-[#F1F4EF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#F1F4EF]">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:contact@tantraops.com"
                className="flex items-center gap-3 text-sm text-[#8C9690] transition-colors hover:text-[#F1F4EF]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#C7F36B]" />
                <span>contact@tantraops.com</span>
              </a>

              <a
                href="tel:+9779800000000"
                className="flex items-center gap-3 text-sm text-[#8C9690] transition-colors hover:text-[#F1F4EF]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#C7F36B]" />
                <span>977 1 4123456</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-[#8C9690]">
                <MapPin className="h-4 w-4 shrink-0 text-[#C7F36B]" />
                <span>New Baneshwor, Kathmandu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TantraOps on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#8C9690] transition-all hover:border-[#C7F36B] hover:text-[#C7F36B]"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TantraOps on X"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#8C9690] transition-all hover:border-[#C7F36B] hover:text-[#C7F36B]"
            >
              <FaXTwitter className="h-4 w-4" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TantraOps on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#8C9690] transition-all hover:border-[#C7F36B] hover:text-[#C7F36B]"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
          </div>

          {/* Legal */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-[#8C9690]">
            <span>© 2026 TantraOps</span>

            <Link
              href="/privacy"
              className="transition-colors hover:text-[#F1F4EF]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#F1F4EF]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}