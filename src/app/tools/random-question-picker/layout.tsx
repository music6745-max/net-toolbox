import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ランダム質問ピッカー - アイスブレイク・学習に",
  description:
    "チームミーティング用のアイスブレイク質問や学習用質問をランダムに提示。カテゴリ選択・自作質問の追加にも対応した無料ツール。",
  keywords: ["質問", "アイスブレイク", "ランダム", "ミーティング", "学習", "無料"],
  alternates: { canonical: "https://net-toolbox.jp/tools/random-question-picker" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
