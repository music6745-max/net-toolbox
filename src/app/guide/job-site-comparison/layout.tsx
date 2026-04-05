import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】転職サイト比較おすすめ5選｜求人数・サポート・年齢層別に徹底解説",
  description:
    "2026年最新の転職サイト・転職エージェントを徹底比較。doda・リクルートエージェント・マイナビ転職・ビズリーチ・エン転職の求人数・サポート体制・対象年齢層を詳しく解説。20代・30代・40代の年代別おすすめも紹介します。",
  keywords: [
    "転職サイト 比較",
    "転職サイト おすすめ",
    "転職エージェント",
    "求人サイト",
    "転職サイト おすすめ 2026",
    "転職サイト 比較 おすすめ 2026",
    "doda",
    "リクルートエージェント",
    "マイナビ転職",
    "ビズリーチ",
    "エン転職",
    "転職 20代",
    "転職 30代",
    "転職 40代",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/job-site-comparison`,
  },
  openGraph: {
    title: "【2026年最新】転職サイト比較おすすめ5選｜求人数・サポート・年齢層別に徹底解説",
    description:
      "doda・リクルートエージェント・マイナビ転職・ビズリーチ・エン転職の求人数・サポート体制を徹底比較。あなたに最適な転職サイトが見つかります。",
    url: `${siteConfig.url}/guide/job-site-comparison`,
    type: "article",
  },
};

export default function JobSiteComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
