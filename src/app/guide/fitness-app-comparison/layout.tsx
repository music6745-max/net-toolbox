import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】フィットネスアプリ比較おすすめ5選｜機能・料金・目的別に徹底解説",
  description:
    "2026年最新のフィットネスアプリを徹底比較。Nike Training Club・MyFitnessPal・FiNC・あすけん・Freeletics の機能・料金・ワークアウト内容・食事管理を詳しく解説。あなたに最適なアプリが見つかります。",
  keywords: [
    "フィットネスアプリ 比較",
    "フィットネスアプリ おすすめ",
    "筋トレアプリ 比較",
    "ダイエットアプリ おすすめ",
    "健康管理アプリ 比較 2026",
    "運動アプリ 無料",
    "食事管理アプリ 比較",
    "トレーニングアプリ おすすめ",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/fitness-app-comparison`,
  },
  openGraph: {
    title: "【2026年最新】フィットネスアプリ比較おすすめ5選｜機能・料金・目的別に徹底解説",
    description:
      "Nike Training Club・MyFitnessPal・FiNC・あすけん・Freeleticsの機能・料金を徹底比較。あなたに最適なフィットネスアプリが見つかります。",
    url: `${siteConfig.url}/guide/fitness-app-comparison`,
    type: "article",
  },
};

export default function FitnessAppComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
