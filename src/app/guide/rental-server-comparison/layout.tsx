import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";
import { AffiliateCTA } from "@/components/AffiliateCTA";

export const metadata: Metadata = {
  title:
    "【2026年最新】レンタルサーバー比較おすすめ5選｜料金・速度・WordPress対応を徹底解説",
  description:
    "2026年最新のレンタルサーバーを徹底比較。ConoHa WING・エックスサーバー・ロリポップ・mixhost・シンレンタルサーバーの料金・表示速度・WordPress対応・SSL対応を詳しく解説。初心者にもわかりやすくおすすめサーバーを紹介します。",
  keywords: [
    "レンタルサーバー 比較",
    "レンタルサーバー おすすめ",
    "レンタルサーバー おすすめ 比較 2026",
    "WordPress サーバー",
    "WordPress おすすめ サーバー",
    "ConoHa WING",
    "エックスサーバー",
    "ロリポップ",
    "mixhost",
    "シンレンタルサーバー",
    "レンタルサーバー 初心者",
    "レンタルサーバー 安い",
    "レンタルサーバー 速い",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/rental-server-comparison`,
  },
  openGraph: {
    title:
      "【2026年最新】レンタルサーバー比較おすすめ5選｜料金・速度・WordPress対応を徹底解説",
    description:
      "ConoHa WING・エックスサーバー・ロリポップ・mixhost・シンレンタルサーバーの料金・速度・WordPress対応を徹底比較。あなたに最適なサーバーが見つかります。",
    url: `${siteConfig.url}/guide/rental-server-comparison`,
    type: "article",
  },
};

export default function RentalServerComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="max-w-3xl mx-auto px-4 pb-10">
        <AffiliateCTA
          serviceName="KAGOYA（カゴヤ・ジャパン）"
          url="/go/kagoya-rental-server"
          description="1983年設立・約58,000アカウントの実績を誇る老舗ホスティング企業。クラウド・VPS・専用サーバー・WordPress専用サーバーまで法人利用に強いラインナップ。安定性とサポート品質を重視する方、長期運用を見据える方に。"
          badge="法人実績多数"
          color="indigo"
        />
      </div>
    </>
  );
}
