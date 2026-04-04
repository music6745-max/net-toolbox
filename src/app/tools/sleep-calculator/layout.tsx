import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "睡眠時間計算ツール - 理想の就寝・起床時刻を計算",
  description:
    "起床時刻を入力すると90分の睡眠サイクルに基づいた理想の就寝時刻を計算します。5〜6サイクルの睡眠でスッキリ目覚めるための時刻を提案します。",
  keywords: ["睡眠計算", "就寝時刻", "起床時刻", "睡眠サイクル", "90分", "睡眠時間"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
