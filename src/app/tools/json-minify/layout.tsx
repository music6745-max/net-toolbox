import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON圧縮ツール - JSONを最小化して容量を削減",
  description:
    "JSONデータを圧縮（ミニファイ）して不要なスペース・改行を除去し、ファイルサイズを削減する無料オンラインツール。バリデーション機能付き。",
  keywords: ["JSON圧縮", "JSONミニファイ", "JSON最小化", "JSON minify", "JSON", "開発ツール", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/json-minify",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
