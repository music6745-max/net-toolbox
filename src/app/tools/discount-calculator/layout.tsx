import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "割引計算ツール - 割引額・割引率を計算",
  description:
    "元の価格と割引率から割引後の価格を計算。また2つの価格から割引率を逆算することもできます。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["割引計算", "割引率", "割引額", "セール", "値引き", "パーセント", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
