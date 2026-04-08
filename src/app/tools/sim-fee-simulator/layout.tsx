import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "格安SIM料金シミュレーター - 月額コストを試算",
  description: "データ容量・通話オプション・家族回線数から格安SIMの月額料金を試算。無料・登録不要でブラウザ上で完結。",
  keywords: ["格安SIM", "料金", "シミュレーター", "MVNO"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/sim-fee-simulator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
