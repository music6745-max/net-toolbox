import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "文字数カウントツール - リアルタイムで文字数を計測",
  description:
    "テキストの文字数・単語数・行数をリアルタイムでカウントする無料オンラインツール。レポートやSNS投稿の文字数チェックに最適。",
  keywords: ["文字数カウント", "文字数", "単語数", "行数", "テキスト", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
