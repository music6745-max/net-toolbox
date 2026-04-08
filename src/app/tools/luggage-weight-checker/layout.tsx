import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "荷物重量計算ツール - 航空会社別の超過料金を予測",
  description:
    "ANA・JAL・LCC各社の荷物制限を基準に、預け入れ・機内持込の重量超過料金を予測。旅行前のパッキングチェックに。",
  keywords: ["荷物重量", "超過料金", "手荷物制限", "LCC手荷物", "預け入れ荷物"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/luggage-weight-checker",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
