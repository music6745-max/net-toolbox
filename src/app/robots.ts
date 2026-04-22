import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/tools";

export default function robots(): MetadataRoute.Robots {
  // /go/* はアフィリエイトリダイレクタなのでクロール対象外
  const common = { allow: "/", disallow: "/go/" };
  return {
    rules: [
      { userAgent: "*", ...common },
      { userAgent: "Googlebot", ...common },
      { userAgent: "Bingbot", ...common },
      { userAgent: "Google-Extended", ...common },
      { userAgent: "GPTBot", ...common },
      { userAgent: "ChatGPT-User", ...common },
      { userAgent: "OAI-SearchBot", ...common },
      { userAgent: "ClaudeBot", ...common },
      { userAgent: "Claude-Web", ...common },
      { userAgent: "anthropic-ai", ...common },
      { userAgent: "PerplexityBot", ...common },
      { userAgent: "Applebot-Extended", ...common },
      { userAgent: "CCBot", ...common },
      { userAgent: "Bytespider", ...common },
      { userAgent: "FacebookBot", ...common },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
