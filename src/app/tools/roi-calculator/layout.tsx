import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI計算ツール - 投資収益率を計算",
  description:
    "投資額とリターンを入力してROI（投資収益率）を計算。投資対効果の評価に役立ちます。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["ROI計算", "投資収益率", "投資対効果", "ROI", "リターン", "ビジネス", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
