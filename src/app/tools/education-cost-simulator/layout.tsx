import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "教育費シミュレーター - 幼稚園～大学までの累積費用を試算",
  description: "公立・私立別に幼稚園・小学校・中学校・高校・大学の累積教育費を自動計算。子供一人あたりの教育資金計画に。",
  keywords: ["教育費", "シミュレーター", "公立", "私立", "学費"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/education-cost-simulator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
