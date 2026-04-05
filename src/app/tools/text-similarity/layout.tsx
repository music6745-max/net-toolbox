import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テキスト類似度計算ツール - 2つの文章の類似度を判定",
  description:
    "2つのテキストの類似度をパーセントで表示する無料オンラインツール。文字ベースの比較でどれだけ似ているかを判定します。",
  keywords: ["テキスト類似度", "文章比較", "類似度", "比較", "テキスト", "オンライン", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/text-similarity",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
