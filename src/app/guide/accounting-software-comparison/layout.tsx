import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title:
    "【2026年最新】確定申告ソフト比較おすすめ3選｜freee・弥生・マネーフォワード徹底解説",
  description:
    "2026年最新の確定申告・クラウド会計ソフトを徹底比較。freee・弥生会計・マネーフォワード クラウドの料金・機能・使いやすさ・e-Tax対応を詳しく解説。個人事業主・フリーランス・副業の確定申告に最適なソフトが見つかります。",
  keywords: [
    "確定申告ソフト 比較",
    "クラウド会計 おすすめ",
    "freee 弥生 比較",
    "個人事業主 会計ソフト",
    "確定申告ソフト 比較 おすすめ 2026",
    "クラウド会計 比較",
    "青色申告 ソフト",
    "白色申告 ソフト",
    "フリーランス 確定申告",
    "副業 確定申告ソフト",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/accounting-software-comparison`,
  },
  openGraph: {
    title:
      "【2026年最新】確定申告ソフト比較おすすめ3選｜freee・弥生・マネーフォワード",
    description:
      "freee・弥生会計・マネーフォワード クラウドの料金・機能・使いやすさを徹底比較。個人事業主・フリーランスの確定申告に最適なソフトが見つかります。",
    url: `${siteConfig.url}/guide/accounting-software-comparison`,
    type: "article",
  },
};

export default function AccountingSoftwareComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
