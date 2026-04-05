import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "給与手取り計算ツール - 年収から手取りを概算",
  description:
    "年収を入力して手取り額を概算計算。所得税・社会保険料を差し引いた月手取りの目安を確認できます。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["手取り計算", "給与計算", "年収", "所得税", "社会保険", "手取り", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/salary-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
