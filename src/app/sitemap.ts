import type { MetadataRoute } from "next";
import { researchArticles } from "@/data/research";

const siteUrl = "https://tantraops.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/solutions",
    "/technology",
    "/research",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",

    "/solutions/ai-applications",
    "/solutions/ai-automation",
    "/solutions/generative-ai",
    "/solutions/ai-agents",
    "/solutions/cybersecurity",
    "/solutions/application-api-security",
    "/solutions/cloud-infrastructure-security",
    "/solutions/security-intelligence",
  ];

  const researchRoutes = researchArticles.map((article) => ({
    url: `${siteUrl}/research/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),

    ...researchRoutes,
  ];
}