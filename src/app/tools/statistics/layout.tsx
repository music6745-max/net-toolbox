import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "統計計算ツール - 平均・中央値・標準偏差を計算",
  description:
    "数値データから平均・中央値・最頻値・標準偏差・分散・最大値・最小値・合計などを一括計算する無料オンライン統計ツール。",
  keywords: ["統計計算", "平均", "中央値", "標準偏差", "分散", "最頻値", "数学", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/statistics",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
