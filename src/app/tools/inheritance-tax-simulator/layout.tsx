import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "相続税シミュレーター - 資産総額と相続人数で概算試算",
  description: "資産総額・法定相続人数から、相続税の基礎控除額と概算税額をシミュレーション。無料・登録不要。",
  keywords: ["相続税","基礎控除","シミュレーター","遺産"],
  alternates: { canonical: "https://net-toolbox.jp/tools/inheritance-tax-simulator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
