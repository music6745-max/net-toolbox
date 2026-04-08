import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "通信速度の用途適性チェッカー - Mbpsで動画/ゲーム/会議判定",
  description: "通信速度（Mbps）を入力するだけで動画視聴・オンラインゲーム・Web会議など用途別に必要十分か判定。光回線選びの目安に。",
  keywords: ["通信速度", "Mbps", "回線速度", "用途別", "判定"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/internet-speed-grade-checker",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
