import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "空白除去ツール - 余分な空白・空行を削除",
  description:
    "テキストの余分な空白・改行・空行を一括削除できる無料ツール。行頭行末のトリム、連続空白の正規化など複数のクリーンアップオプション付き。",
  keywords: ["空白", "削除", "トリム", "改行", "空行", "テキスト整形"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
