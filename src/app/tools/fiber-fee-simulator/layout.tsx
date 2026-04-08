import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "光回線料金シミュレーター - 月額コストを試算",
  description: "通信速度プラン・家族人数・スマホキャリア割引から光回線の月額料金を試算。無料・登録不要でブラウザ上で完結。",
  keywords: ["光回線", "料金", "シミュレーター", "セット割"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/fiber-fee-simulator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
