import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "児童手当受給額シミュレーター - 年齢・子供数・所得から試算",
  description: "子供の年齢・人数・世帯所得から児童手当の月額・年額・総受給額を試算。2024年10月拡充後の最新ルールに対応。",
  keywords: ["児童手当", "シミュレーター", "子育て", "給付"],
  alternates: { canonical: "https://net-toolbox.jp/tools/child-allowance-simulator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
