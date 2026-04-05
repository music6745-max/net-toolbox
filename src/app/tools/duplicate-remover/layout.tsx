import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "重複行削除ツール - テキストの重複行を除去",
  description:
    "テキストの重複している行を削除して一意の行だけを残します。大文字小文字の区別・前後の空白除去にも対応。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["重複削除", "重複行", "ユニーク", "テキスト整理", "行削除", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/duplicate-remover",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
