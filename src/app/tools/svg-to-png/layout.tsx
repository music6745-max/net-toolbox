import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVG→PNG変換ツール - SVGをPNG画像に変換してダウンロード",
  description:
    "SVGファイルやSVGコードをPNG画像に変換してダウンロードできる無料オンラインツール。サイズ指定・背景色設定にも対応。",
  keywords: ["SVG", "PNG", "変換", "画像変換", "ダウンロード", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/svg-to-png",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
