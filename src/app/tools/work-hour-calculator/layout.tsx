import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "労働時間・残業代計算ツール - 時給/月給対応・割増率込み",
  description:
    "出退勤時間・休憩・時給または月給から労働時間・残業代を自動計算。法定割増率（25%・50%・35%）にも対応した無料ツールです。",
  keywords: ["労働時間", "残業代", "計算", "時給", "月給", "割増賃金", "深夜", "休日"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/work-hour-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
