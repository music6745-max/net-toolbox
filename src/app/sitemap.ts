import type { MetadataRoute } from "next";
import { tools, siteConfig } from "@/lib/tools";
import { categories } from "@/lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools.map((tool) => ({
    url: `${siteConfig.url}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryPages = categories.map((cat) => ({
    url: `${siteConfig.url}/category/${encodeURIComponent(cat.slug)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const guidePages = [
    "qr-code-howto",
    "password-security",
    "web-tools-for-work",
    "developer-tools-guide",
    "best-rental-servers",
    "tax-software-comparison",
    "best-vpn-services",
    "vpn-comparison",
    "rental-server-comparison",
    "side-business-tools",
    "remote-work-tools",
    "accounting-software-comparison",
  ].map((slug) => ({
    url: `${siteConfig.url}/guide/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/guide`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...guidePages,
    ...categoryPages,
    ...toolPages,
  ];
}
