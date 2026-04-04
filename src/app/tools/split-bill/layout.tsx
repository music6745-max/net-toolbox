import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "割り勘計算ツール - 飲み会の割り勘を計算",
  description:
    "合計金額・人数・チップ率を入力して一人あたりの負担額を計算。飲み会や食事の割り勘に便利です。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["割り勘", "割り勘計算", "飲み会", "食事", "チップ計算", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
