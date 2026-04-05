import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "出産予定日計算ツール - 無料オンライン出産予定日計算",
  description: "最終月経日から出産予定日を計算。妊娠週数・月数も表示。無料・登録不要でブラウザ上で完結。",
  keywords: ["出産予定日","妊娠","妊娠週数"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/pregnancy-due-date",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
