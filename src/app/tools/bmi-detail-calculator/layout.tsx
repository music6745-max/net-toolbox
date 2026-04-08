import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMI詳細計算ツール - 体脂肪率・基礎代謝・必要カロリーまで",
  description:
    "BMIに加えて体脂肪率（推定）・基礎代謝量・1日の必要カロリーをまとめて計算。年齢・性別・活動レベルにも対応した詳細版BMI計算ツールです。",
  keywords: ["BMI", "体脂肪率", "基礎代謝", "必要カロリー", "TDEE", "ダイエット", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/bmi-detail-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
