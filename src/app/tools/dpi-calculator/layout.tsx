import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DPI計算ツール - 画像の印刷品質を判定",
  description: "画像のピクセル数と印刷サイズからDPIを計算し印刷品質を判定。無料・登録不要でブラウザ上で完結。",
  keywords: ["DPI", "DPI計算", "印刷品質", "解像度", "dpi 計算"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/dpi-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
