import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSS Gridプレイグラウンド - Gridレイアウトを視覚的に確認",
  description:
    "CSS Gridのテンプレート列・行・gap などのプロパティを設定し、グリッドレイアウトをリアルタイム確認できる無料ツール。CSSコードも生成します。",
  keywords: ["CSS Grid", "grid", "レイアウト", "CSS生成", "開発ツール", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/css-grid",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
