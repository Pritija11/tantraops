import type { Metadata } from "next";

const siteName = "TantraOps";
const siteUrl = "https://tantraops.com";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical: `${siteUrl}${path}`,
    },

    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName,
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}