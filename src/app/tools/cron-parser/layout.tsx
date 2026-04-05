import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cron式解説ツール - Cronスケジュールを日本語で解説",
  description:
    "Cron式を日本語で分かりやすく解説し、次回実行時刻を表示する無料オンラインツール。5フィールドのCron式に対応。",
  keywords: ["Cron", "cron式", "スケジュール", "解説", "次回実行", "オンライン"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/cron-parser",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
