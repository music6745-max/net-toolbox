import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "引越し費用詳細見積もりシミュレーター - 距離・荷物量・時期で試算",
  description: "引越し距離・荷物量（間取り）・時期から引越し費用の詳細見積もりを算出。繁忙期・通常期の料金差も確認できます。",
  keywords: ["引越し", "費用", "見積もり", "シミュレーター"],
  alternates: { canonical: "https://net-toolbox.jp/tools/moving-cost-detail-simulator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
