import { tools, siteConfig } from "@/lib/tools";

export function ToolJsonLd({ slug }: { slug: string }) {
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return null;

  const toolUrl = `${siteConfig.url}/tools/${slug}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "トップ", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: tool.category, item: `${siteConfig.url}/category/${tool.category}` },
      { "@type": "ListItem", position: 3, name: tool.name, item: toolUrl },
    ],
  };

  const app = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    url: toolUrl,
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
    inLanguage: "ja",
    browserRequirements: "Requires JavaScript",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
    </>
  );
}
