import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "読了時間計算ツール - 文章の読了時間を推定",
  description:
    "テキストを貼り付けるだけで読了時間・音読時間・文字数・単語数を自動計算。ブログ記事やレポートの目安時間を無料で確認できます。",
  keywords: ["読了時間", "文字数", "単語数", "読書速度", "計算", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
