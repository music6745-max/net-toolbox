import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";
import { AffiliateCTA } from "@/components/AffiliateCTA";

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
  return (
    <>
      {children}
      <div className="max-w-3xl mx-auto px-4 pb-10">
        <AffiliateCTA
          serviceName="保険マンモス（FP無料相談）"
          url="/go/hoken-mammoth"
          description="格安SIM乗り換えで通信費を月数千円下げたら、次は保険・住宅ローン・投資の見直しもまとめて。保険マンモスのFP無料相談なら、家計全体の固定費を見直して年間10万円以上の節約事例も。完全無料・自宅やオンラインで相談可能。"
          badge="FP無料相談"
          color="blue"
        />
      </div>
    </>
  );
}
