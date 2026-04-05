import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アスペクト比計算ツール - 画面比率を計算",
  description:
    "幅と高さからアスペクト比を計算、またはアスペクト比と一辺から残りの寸法を算出します。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["アスペクト比", "縦横比", "解像度計算", "画面比率", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/aspect-ratio",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
