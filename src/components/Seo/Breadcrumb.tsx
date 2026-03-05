export default function BreadcrumbSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Products",
        item: "https://arqene.com/products",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Factory",
        item: "https://arqene.com/karkhana",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Process",
        item: "https://arqene.com/process",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}