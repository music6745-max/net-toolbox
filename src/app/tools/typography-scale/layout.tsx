import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "タイポグラフィスケール生成 - フォントサイズ比率計算",
  description:
    "ベースフォントサイズと比率からタイポグラフィスケールを自動生成する無料ツール。Webデザインの文字サイズ設計に。",
  keywords: ["タイポグラフィ", "フォントサイズ", "スケール", "比率", "デザイン", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/typography-scale",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
