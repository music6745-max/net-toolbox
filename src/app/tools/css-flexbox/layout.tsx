import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSS Flexboxプレイグラウンド - Flexboxレイアウトを視覚的に確認",
  description:
    "Flexboxのコンテナプロパティ（direction, wrap, justify-content, align-items）をインタラクティブに設定し、レイアウトをリアルタイム確認できる無料ツール。",
  keywords: ["CSS Flexbox", "flexbox", "レイアウト", "CSS生成", "開発ツール", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/css-flexbox",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
