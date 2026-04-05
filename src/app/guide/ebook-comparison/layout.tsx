import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】電子書籍サービス比較おすすめ5選｜品揃え・料金・使いやすさを徹底解説",
  description:
    "2026年最新の電子書籍サービスを徹底比較。Kindle・楽天Kobo・BookLive!・ebookjapan・DMMブックスの品揃え・料金・キャンペーン・読み放題プラン・対応デバイスを詳しく解説。",
  keywords: [
    "電子書籍 比較",
    "電子書籍 おすすめ",
    "電子書籍 おすすめ 2026",
    "Kindle 比較",
    "楽天Kobo 比較",
    "BookLive 比較",
    "ebookjapan 比較",
    "DMMブックス 比較",
    "電子書籍 安い",
    "電子書籍 読み放題",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/ebook-comparison`,
  },
  openGraph: {
    title: "【2026年最新】電子書籍サービス比較おすすめ5選｜品揃え・料金・使いやすさを徹底解説",
    description:
      "Kindle・楽天Kobo・BookLive!・ebookjapan・DMMブックスの品揃え・料金・使いやすさを徹底比較。あなたに最適な電子書籍サービスが見つかります。",
    url: `${siteConfig.url}/guide/ebook-comparison`,
    type: "article",
  },
};

export default function EbookComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
