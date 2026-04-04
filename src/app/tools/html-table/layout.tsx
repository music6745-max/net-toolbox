import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTMLテーブル生成ツール - HTML表を作成",
  description:
    "行数・列数を指定してデータを入力するだけでHTMLテーブルコードを自動生成。クラスやスタイルのオプションも設定できる無料ツール。",
  keywords: ["HTML", "テーブル", "table", "生成", "作成", "コード"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
