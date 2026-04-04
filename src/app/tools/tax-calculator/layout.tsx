import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "消費税計算ツール - 税込・税抜価格を計算",
  description:
    "価格と税率（10%・8%軽減税率）を入力して消費税額・税込価格・税抜価格を計算。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["消費税", "消費税計算", "税込", "税抜", "軽減税率", "8%", "10%", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
