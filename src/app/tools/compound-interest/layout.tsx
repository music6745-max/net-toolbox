import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "複利計算ツール - 複利で増える金額を計算",
  description:
    "元本・年利・期間・複利頻度を入力して最終金額と利息を計算。複利の力を視覚的に確認できます。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["複利計算", "複利", "利息計算", "資産運用", "投資", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
