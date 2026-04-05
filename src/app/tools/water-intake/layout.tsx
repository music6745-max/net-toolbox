import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "水分摂取量計算ツール - 1日に必要な水分量を計算",
  description:
    "体重と活動レベルを入力して1日に必要な水分摂取量を計算。健康的な水分補給の目安を確認できます。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["水分摂取量", "水分補給", "必要水分量", "水分計算", "健康", "熱中症対策", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/water-intake",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
