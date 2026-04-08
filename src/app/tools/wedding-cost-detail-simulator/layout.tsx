import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "結婚式費用詳細シミュレーター - 招待人数・地域・スタイル別に内訳試算",
  description: "招待人数・地域・挙式スタイルから結婚式の総費用・内訳・自己負担額を詳細に試算。無料・登録不要。",
  keywords: ["結婚式", "費用", "シミュレーター", "見積もり", "ウェディング"],
  alternates: { canonical: "https://net-toolbox.jp/tools/wedding-cost-detail-simulator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
