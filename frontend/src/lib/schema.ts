const BASE_URL = "https://deciphi.com";

export function generateOrganizationSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Deciphi",
    url: `${BASE_URL}/${locale}`,
    logo: `${BASE_URL}/deciphi-logo.svg`,
    description:
      "Deciphi delivers cutting-edge cybersecurity solutions to protect your organisation from evolving threats.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "QA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@deciphi.com",
      telephone: "+97441499289",
      contactType: "customer support",
    },
    sameAs: [
      "https://www.linkedin.com/company/deciphi",
    ],
  };
}

export function generateWebPageSchema(
  title: string,
  description: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
