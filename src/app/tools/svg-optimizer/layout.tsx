import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVG最適化ツール - 無料オンラインツール",
  description: "SVGコードから不要な要素を除去してファイルサイズを削減します。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/svg-optimizer",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
