import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ふりがなHTML生成 - rubyタグジェネレーター",
  description:
    "漢字にふりがなを付けるHTMLのrubyタグを自動生成。Webコンテンツのルビ振りに便利な無料オンラインツール。登録不要でブラウザ上で完結。",
  keywords: ["ふりがな", "ルビ", "ruby タグ", "HTML", "ふりがな変換"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
