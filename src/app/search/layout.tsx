import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: `サイト内検索 | ${siteConfig.name}`,
  description:
    "ネットツールボックスのサイト内検索。250以上の無料ツールと100以上の比較ガイドからキーワードで瞬時に検索できます。",
  alternates: {
    canonical: `${siteConfig.url}/search`,
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: `サイト内検索 | ${siteConfig.name}`,
    description: "ツールとガイド記事をまとめて検索できます。",
    url: `${siteConfig.url}/search`,
    type: "website",
  },
};

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
