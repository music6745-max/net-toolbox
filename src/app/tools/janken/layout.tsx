import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "じゃんけんツール - コンピュータとじゃんけん",
  description:
    "コンピュータとじゃんけん対決。勝敗・引き分けの記録を表示します。グー・チョキ・パーを選んでじゃんけんを楽しもう。",
  keywords: ["じゃんけん", "グー", "チョキ", "パー", "ゲーム", "オンライン", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/janken",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
