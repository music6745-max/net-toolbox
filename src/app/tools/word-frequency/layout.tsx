import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "単語頻度分析ツール - テキストの出現単語をランキング",
  description:
    "テキスト中の単語の出現頻度を集計してランキング表示する無料オンラインツール。棒グラフで視覚化。",
  keywords: ["単語頻度", "出現頻度", "単語分析", "テキスト分析", "ワード頻度", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/word-frequency",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
