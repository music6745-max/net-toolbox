import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サイトマップ生成ツール - XML Sitemapを作成",
  description:
    "URLを入力してXML形式のサイトマップを自動生成できる無料ツール。changefreqやpriorityの設定も可能。生成したXMLをコピーまたはダウンロードできます。",
  keywords: ["サイトマップ", "sitemap", "XML sitemap", "サイトマップ生成", "SEO", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
