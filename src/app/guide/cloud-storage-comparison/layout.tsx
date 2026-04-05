import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】クラウドストレージ比較おすすめ5選｜容量・料金・セキュリティを徹底解説",
  description:
    "2026年最新のクラウドストレージを徹底比較。Google Drive/One・iCloud+・OneDrive・Dropbox・Amazon Driveの無料容量・有料プラン料金・共有機能・セキュリティを詳しく解説。",
  keywords: [
    "クラウドストレージ 比較",
    "クラウドストレージ おすすめ",
    "クラウドストレージ 比較 2026",
    "Google Drive 比較",
    "iCloud 比較",
    "OneDrive 比較",
    "Dropbox 比較",
    "オンラインストレージ おすすめ",
    "クラウド 料金 比較",
    "データ保存 クラウド",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/cloud-storage-comparison`,
  },
  openGraph: {
    title: "【2026年最新】クラウドストレージ比較おすすめ5選｜容量・料金・セキュリティを徹底解説",
    description:
      "Google Drive・iCloud+・OneDrive・Dropbox・Amazon Driveの容量・料金・セキュリティを徹底比較。あなたに最適なクラウドストレージが見つかります。",
    url: `${siteConfig.url}/guide/cloud-storage-comparison`,
    type: "article",
  },
};

export default function CloudStorageComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
