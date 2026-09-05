export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "TantraOps",
    url: "https://tantraops.com",

    description:
      "TantraOps is an emerging AI and cybersecurity technology startup building intelligent systems, automation, and secure digital solutions for modern businesses.",

    email: "contact@tantraops.com",

    telephone: "977 1 4123456",

    address: {
      "@type": "PostalAddress",
      addressLocality: "New Baneshwor",
      addressRegion: "Kathmandu",
      addressCountry: "NP",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}