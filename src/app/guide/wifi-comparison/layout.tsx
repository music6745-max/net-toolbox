import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】ポケットWiFi・ホームルーター比較おすすめ5選｜料金・速度・エリアを徹底解説",
  description:
    "2026年最新のポケットWiFi・ホームルーターを徹底比較。WiMAX（GMOとくとくBB）・楽天モバイル・ドコモhome5G・ソフトバンクAir・モバレコAirの月額料金・データ容量・通信速度・対応エリアを詳しく解説。",
  keywords: [
    "ポケットWiFi 比較",
    "ホームルーター 比較",
    "ポケットWiFi おすすめ 2026",
    "WiMAX 比較",
    "ドコモ home5G",
    "ソフトバンクAir",
    "モバレコAir",
    "楽天WiFi",
    "WiFi 料金 比較",
    "ホームルーター おすすめ",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/wifi-comparison`,
  },
  openGraph: {
    title: "【2026年最新】ポケットWiFi・ホームルーター比較おすすめ5選｜料金・速度・エリアを徹底解説",
    description:
      "WiMAX・楽天モバイル・ドコモhome5G・ソフトバンクAir・モバレコAirの料金・速度・エリアを徹底比較。あなたに最適なWiFiが見つかります。",
    url: `${siteConfig.url}/guide/wifi-comparison`,
    type: "article",
  },
};

export default function WifiComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
