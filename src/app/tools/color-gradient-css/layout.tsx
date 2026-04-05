import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSSグラデーション生成ツール - 無料オンラインツール",
  description: "方向・色を選んでCSSグラデーションコードを生成。プレビュー付き。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/color-gradient-css",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
