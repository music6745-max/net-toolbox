import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利益率計算ツール - 売上から利益率を計算",
  description:
    "売上と原価を入力して利益・利益率（粗利率）を計算。ビジネスの収益性を素早く確認できます。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["利益率計算", "粗利計算", "利益計算", "利益率", "粗利率", "ビジネス", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
