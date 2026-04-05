import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSSグラデーション生成ツール - グラデーションCSSを生成",
  description:
    "linear-gradientやradial-gradientのCSSコードを簡単に生成できる無料ツール。カラーピッカーで色を選んでリアルタイムプレビュー。",
  keywords: ["CSSグラデーション", "linear-gradient", "radial-gradient", "CSS生成", "開発ツール", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/css-gradient",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
