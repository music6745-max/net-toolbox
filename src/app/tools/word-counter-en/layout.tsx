import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "英語ワードカウンターツール - 英文の単語数を計測",
  description:
    "英文の単語数・文字数・文章数・段落数・平均単語長・頻出単語Top5を無料で計測。英語ライティングの品質改善にご活用ください。",
  keywords: ["ワードカウント", "英語", "単語数", "文字数", "頻出単語", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
