export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Arqene",
    url: "https://arqene.com",
    description:
      "Timeless luxury furniture crafted with architectural precision.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://arqene.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}