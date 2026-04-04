import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "数字フォーマットツール - 数値をカンマ区切り・漢数字に変換",
  description:
    "数値をカンマ区切り・日本語（万・億）・通貨（¥）・パーセント・指数表記など複数の形式に一括変換。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["数字フォーマット", "カンマ区切り", "万億変換", "漢数字", "通貨フォーマット", "数値変換", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
