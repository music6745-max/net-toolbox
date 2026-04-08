import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "所得税ブラケット計算 - 年収から税率と税額を表示",
  description: "年収・控除額から課税所得・適用税率・所得税額・住民税額を計算。累進課税のブラケットを可視化。無料・登録不要。",
  keywords: ["所得税","税率","ブラケット","累進課税","年収"],
  alternates: { canonical: "https://net-toolbox.jp/tools/tax-bracket-calculator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
