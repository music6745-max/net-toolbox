import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テキスト行ソートツール - 行を並べ替え",
  description:
    "複数行テキストの各行をアルファベット順・数値順・昇順・降順に並べ替え。大文字小文字の区別も設定可能。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["テキストソート", "行ソート", "並べ替え", "ソート", "アルファベット順", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
