export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wine Pairing Tool",
    url: "https://wine-pairing-tool.vercel.app",
    description: "Expert wine pairing recommendations for any dish",
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@wine-pairing-tool.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
