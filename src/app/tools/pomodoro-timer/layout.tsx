import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ポモドーロタイマー - 集中作業タイマー",
  description:
    "25分作業・5分休憩のポモドーロ・テクニックを実践できるタイマーです。視覚的なプログレスバーとセッションカウンターで作業効率を高めます。",
  keywords: ["ポモドーロ", "pomodoro", "集中", "作業タイマー", "休憩", "生産性"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
