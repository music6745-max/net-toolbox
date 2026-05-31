import type { MetadataRoute } from "next";
import { tools, siteConfig } from "@/lib/tools";
import { kaigoSupplementalTools } from "@/lib/kaigoSupplementalTools";
import { categories } from "@/lib/categories";
import { getIndexableGuides } from "@/lib/retiredGuides";
import { guides } from "./guide/guides.data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const toolPages = [...kaigoSupplementalTools, ...tools].map((tool) => ({
    url: `${siteConfig.url}/tools/${tool.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryPages = categories.map((cat) => ({
    url: `${siteConfig.url}/category/${encodeURIComponent(cat.slug)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const guidePages = getIndexableGuides(guides).map((g) => ({
    url: `${siteConfig.url}/guide/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticPages = [
    { url: siteConfig.url, priority: 1, changeFrequency: "weekly" as const },
    { url: `${siteConfig.url}/guide`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${siteConfig.url}/rankings`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${siteConfig.url}/about`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${siteConfig.url}/author`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${siteConfig.url}/contact`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${siteConfig.url}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${siteConfig.url}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ].map((p) => ({ ...p, lastModified: now }));

  return [...staticPages, ...guidePages, ...categoryPages, ...toolPages];
}
