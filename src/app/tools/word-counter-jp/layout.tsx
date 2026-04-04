import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "日本語文字種カウンター - 漢字・ひらがな・カタカナの内訳",
  description:
    "日本語テキストの文字数を漢字・ひらがな・カタカナ・英数字・記号ごとに分類してカウントする無料ツール。",
  keywords: ["文字数", "カウント", "漢字", "ひらがな", "カタカナ", "日本語", "文字種"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
