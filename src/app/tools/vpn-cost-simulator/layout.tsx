import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VPN料金シミュレーター - 年間コスト比較",
  description: "契約年数・同時接続数から主要VPNの年間コストを比較試算。無料・登録不要でブラウザ上で完結。",
  keywords: ["VPN", "料金", "シミュレーター", "年間コスト"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/vpn-cost-simulator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
