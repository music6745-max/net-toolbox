import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSS単位変換ツール - px/rem/em/ptを相互変換",
  description:
    "CSSの単位（px、rem、em、pt、%）を相互変換する無料オンラインツール。基準フォントサイズを設定して正確に変換できます。",
  keywords: ["CSS単位変換", "px rem変換", "em変換", "pt変換", "CSS", "開発ツール", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/css-unit-converter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
