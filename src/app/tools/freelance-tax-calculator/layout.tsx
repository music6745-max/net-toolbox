import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "フリーランス税金計算ツール - 所得税・住民税・国保・年金を試算",
  description: "フリーランスの年収・経費から所得税・住民税・国民健康保険・国民年金の概算を一括試算。手取り額もすぐ分かる無料ツール。",
  keywords: ["フリーランス", "税金", "所得税", "住民税", "国民健康保険", "手取り"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/freelance-tax-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
