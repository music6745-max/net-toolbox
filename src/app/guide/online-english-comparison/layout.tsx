import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】オンライン英会話比較おすすめ5選｜料金・講師・特徴を徹底解説",
  description:
    "2026年最新のオンライン英会話サービスを徹底比較。DMM英会話・NativeCamp・QQEnglish・Kimini英会話・AQUESの料金・講師・レッスン内容・無料体験を詳しく解説。初心者からビジネス英語、TOEIC対策まで目的別おすすめも紹介します。",
  keywords: [
    "オンライン英会話 比較",
    "オンライン英会話 おすすめ",
    "オンライン英会話 おすすめ 比較 2026",
    "英会話 安い",
    "英会話 初心者",
    "DMM英会話",
    "NativeCamp",
    "QQEnglish",
    "Kimini英会話",
    "AQUES",
    "オンライン英会話 無料体験",
    "オンライン英会話 ビジネス",
    "オンライン英会話 TOEIC",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/online-english-comparison`,
  },
  openGraph: {
    title: "【2026年最新】オンライン英会話比較おすすめ5選｜料金・講師・特徴を徹底解説",
    description:
      "DMM英会話・NativeCamp・QQEnglish・Kimini英会話・AQUESの料金・講師・特徴を徹底比較。あなたに最適なオンライン英会話が見つかります。",
    url: `${siteConfig.url}/guide/online-english-comparison`,
    type: "article",
  },
};

export default function OnlineEnglishComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
