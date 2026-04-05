import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "色混合ツールツール - 無料オンライン色混合ツール",
  description: "2つの色を混合して中間色を生成。混合比率も調整可能。無料・登録不要でブラウザ上で完結。",
  keywords: ["色混合","カラーミックス","中間色"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/color-mix",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
