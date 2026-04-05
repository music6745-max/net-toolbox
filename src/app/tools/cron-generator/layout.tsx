import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cron式ジェネレーター - スケジュールを視覚的に作成",
  description:
    "Cron式を視覚的に簡単作成。スケジュール実行の設定を日本語で表示。次回実行時刻の確認も可能。登録不要でブラウザ上で完結。",
  keywords: ["cron", "cron式", "crontab", "スケジュール", "ジェネレーター"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/cron-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
