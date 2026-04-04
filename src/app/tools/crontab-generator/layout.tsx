import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crontab生成ツール - cronスケジュールを視覚的に作成",
  description:
    "分・時・日・月・曜日をドロップダウンで選択してcron式を生成。スケジュールの内容を日本語で確認できます。ブラウザ内で完結するため安全です。",
  keywords: ["crontab", "cron", "cron式", "スケジューラ", "Linux", "定期実行", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
