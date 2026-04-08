import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "神経衰弱メモリーゲーム - 4×4 / 6×6カードマッチ脳トレ",
  description:
    "無料でプレイできる神経衰弱ゲーム。4×4 / 6×6からサイズを選べる、ターン数・タイム計測付き。脳トレ・暇つぶし・記憶力トレーニングに最適。",
  keywords: ["神経衰弱", "メモリーゲーム", "カードマッチ", "脳トレ", "記憶力", "無料ゲーム"],
  alternates: { canonical: "https://net-toolbox.jp/tools/memory-card-game" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
