import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "抽選ツール - ランダムに当選者を選出",
  description:
    "リストから当選者をランダムに選出できる無料の抽選ツール。当選人数の設定も可能。イベント・プレゼント企画・チーム分けに便利です。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["抽選ツール", "ランダム選出", "当選者選出", "くじ引き", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/lottery",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
