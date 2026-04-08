import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "集中タイマー（ポモドーロ拡張版）- 長休憩・統計表示付き",
  description:
    "ポモドーロ・テクニックを拡張した集中タイマー。4セッションごとの長休憩、累計集中時間・完了セッション数の統計表示、作業時間カスタマイズに対応。",
  keywords: ["ポモドーロ", "集中タイマー", "フォーカスタイマー", "作業効率", "リモートワーク", "無料"],
  alternates: { canonical: "https://net-toolbox.jp/tools/focus-timer-extended" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
