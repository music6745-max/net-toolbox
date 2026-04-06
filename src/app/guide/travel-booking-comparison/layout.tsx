import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】旅行予約サイトおすすめ比較｜お得に宿泊するコツ",
  description:
    "2026年最新の旅行予約サイトを徹底比較。じゃらんnet・JTB・一休.com・Yahoo!トラベル・アソビュー!の特徴・ポイント還元・お得な使い方を詳しく解説。旅行をお得に楽しむコツも紹介します。",
  keywords: [
    "旅行予約サイト 比較",
    "旅行予約 おすすめ",
    "旅行予約サイト おすすめ 2026",
    "宿泊予約 比較",
    "じゃらん 比較",
    "JTB 比較",
    "一休 比較",
    "Yahoo!トラベル 比較",
    "アソビュー 比較",
    "ホテル予約 お得",
    "旅行 安く予約",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/travel-booking-comparison`,
  },
  openGraph: {
    title: "【2026年最新】旅行予約サイトおすすめ比較｜お得に宿泊するコツ",
    description:
      "じゃらんnet・JTB・一休.com・Yahoo!トラベル・アソビュー!の特徴・ポイント還元を徹底比較。あなたに最適な旅行予約サイトが見つかります。",
    url: `${siteConfig.url}/guide/travel-booking-comparison`,
    type: "article",
  },
};

export default function TravelBookingComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
