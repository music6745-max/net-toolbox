import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】格安SIM比較おすすめ6選｜料金・速度・通話プランを徹底解説",
  description:
    "2026年最新の格安SIM・キャリアプランを徹底比較。楽天モバイル・ahamo・LINEMO・povo・UQモバイル・ワイモバイルの月額料金・データ容量・通信速度・通話プランを詳しく解説。乗り換えのポイントも紹介します。",
  keywords: [
    "格安SIM 比較",
    "格安SIM おすすめ",
    "格安SIM おすすめ 比較 2026",
    "スマホ 乗り換え",
    "ahamo 楽天 比較",
    "LINEMO 比較",
    "povo 比較",
    "UQモバイル 比較",
    "ワイモバイル 比較",
    "格安SIM 選び方",
    "スマホ料金 節約",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/sim-comparison`,
  },
  openGraph: {
    title: "【2026年最新】格安SIM比較おすすめ6選｜料金・速度・通話プランを徹底解説",
    description:
      "楽天モバイル・ahamo・LINEMO・povo・UQモバイル・ワイモバイルの料金・速度・通話を徹底比較。あなたに最適な格安SIMが見つかります。",
    url: `${siteConfig.url}/guide/sim-comparison`,
    type: "article",
  },
};

export default function SimComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
