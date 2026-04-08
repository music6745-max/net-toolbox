import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ワークライフバランス診断 - 無料スコア判定ツール",
  description: "労働時間・残業・休日数・通勤時間からワークライフバランスを100点満点でスコア診断。改善アドバイス付き。無料・登録不要。",
  keywords: ["ワークライフバランス", "診断", "労働時間", "残業", "働き方"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/work-life-balance-checker",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
