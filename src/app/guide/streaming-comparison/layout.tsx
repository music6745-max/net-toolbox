import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】動画配信サービス比較おすすめ6選｜料金・作品数・画質を徹底解説",
  description:
    "2026年最新の動画配信サービスを徹底比較。Amazon Prime Video・Netflix・U-NEXT・Disney+・Hulu・ABEMAプレミアムの月額料金・作品数・画質・特徴を詳しく解説。あなたに最適なサービスの選び方も紹介します。",
  keywords: [
    "動画配信サービス 比較",
    "動画配信 おすすめ",
    "動画配信サービス おすすめ 2026",
    "VOD 比較",
    "Netflix 比較",
    "Amazon Prime Video 比較",
    "U-NEXT 比較",
    "Disney+ 比較",
    "Hulu 比較",
    "ABEMA 比較",
    "サブスク 動画",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/streaming-comparison`,
  },
  openGraph: {
    title: "【2026年最新】動画配信サービス比較おすすめ6選｜料金・作品数・画質を徹底解説",
    description:
      "Amazon Prime Video・Netflix・U-NEXT・Disney+・Hulu・ABEMAプレミアムの料金・作品数・画質を徹底比較。あなたに最適な動画配信サービスが見つかります。",
    url: `${siteConfig.url}/guide/streaming-comparison`,
    type: "article",
  },
};

export default function StreamingComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
