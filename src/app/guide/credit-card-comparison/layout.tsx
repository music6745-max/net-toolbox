import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】クレジットカード比較おすすめ5選｜年会費無料・ポイント還元率を徹底解説",
  description:
    "2026年最新のクレジットカードを徹底比較。楽天カード・三井住友カード(NL)・JCBカードW・PayPayカード・dカードの年会費・ポイント還元率・特典・付帯保険を詳しく解説。",
  keywords: [
    "クレジットカード 比較",
    "クレジットカード おすすめ",
    "クレジットカード おすすめ 2026",
    "年会費無料 クレジットカード",
    "ポイント還元率 比較",
    "楽天カード 比較",
    "三井住友カード 比較",
    "JCBカードW",
    "PayPayカード",
    "dカード",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/credit-card-comparison`,
  },
  openGraph: {
    title: "【2026年最新】クレジットカード比較おすすめ5選｜年会費無料・ポイント還元率を徹底解説",
    description:
      "楽天カード・三井住友カード(NL)・JCBカードW・PayPayカード・dカードの年会費・還元率・特典を徹底比較。あなたに最適な1枚が見つかります。",
    url: `${siteConfig.url}/guide/credit-card-comparison`,
    type: "article",
  },
};

export default function CreditCardComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
