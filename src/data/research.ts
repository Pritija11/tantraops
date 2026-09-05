export type ResearchArticle = {
  slug: string;
  category: string;
  number: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export const researchArticles: ResearchArticle[] = [
  {
    slug: "ai-systems",
    category: "Artificial Intelligence",
    number: "01",
    title: "Designing useful AI systems",
    excerpt:
      "Exploring how artificial intelligence can be integrated into software, workflows, and connected systems.",
    date: "September 2026",
    readTime: "6 min read",
  },
  {
    slug: "cybersecurity",
    category: "Cybersecurity",
    number: "02",
    title: "Security for connected digital systems",
    excerpt:
      "Examining how applications, APIs, infrastructure, and intelligent systems change the modern security landscape.",
    date: "September 2026",
    readTime: "7 min read",
  },
  {
    slug: "emerging-technology",
    category: "Emerging Technology",
    number: "03",
    title: "What comes next in intelligent technology",
    excerpt:
      "Investigating emerging technologies and the engineering ideas that could shape future digital systems.",
    date: "September 2026",
    readTime: "5 min read",
  },
];

export function getResearchArticle(slug: string) {
  return researchArticles.find((article) => article.slug === slug);
}