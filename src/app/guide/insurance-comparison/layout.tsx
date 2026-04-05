import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】ネット保険比較おすすめ5選｜生命保険・医療保険・がん保険を徹底解説",
  description:
    "2026年最新のネット保険を徹底比較。ライフネット生命・SBI生命・アクサダイレクト生命・チューリッヒ生命・オリックス生命の保険料・保障内容・メリット・デメリットを詳しく解説。あなたに最適なネット保険の選び方も紹介します。",
  keywords: [
    "ネット保険 比較",
    "ネット保険 おすすめ",
    "ネット保険 おすすめ 比較 2026",
    "生命保険 比較",
    "医療保険 比較",
    "がん保険 比較",
    "ライフネット生命 口コミ",
    "SBI生命 比較",
    "アクサダイレクト生命 比較",
    "チューリッヒ生命 比較",
    "オリックス生命 比較",
    "保険料 安い",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/insurance-comparison`,
  },
  openGraph: {
    title: "【2026年最新】ネット保険比較おすすめ5選｜生命保険・医療保険・がん保険を徹底解説",
    description:
      "ライフネット生命・SBI生命・アクサダイレクト生命・チューリッヒ生命・オリックス生命の保険料・保障内容を徹底比較。あなたに最適なネット保険が見つかります。",
    url: `${siteConfig.url}/guide/insurance-comparison`,
    type: "article",
  },
};

export default function InsuranceComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
