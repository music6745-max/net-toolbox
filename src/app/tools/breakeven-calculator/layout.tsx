import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "損益分岐点計算ツール - 損益分岐点を計算",
  description:
    "固定費・変動費・販売価格を入力して損益分岐点（販売数量・売上額）を計算。事業計画や価格設定に役立ちます。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["損益分岐点", "BEP計算", "損益分岐点計算", "固定費", "変動費", "ビジネス", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
