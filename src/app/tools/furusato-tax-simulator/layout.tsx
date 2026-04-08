import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ふるさと納税限度額シミュレーター - 寄付上限額を無料試算",
  description: "年収・家族構成・社会保険料から、ふるさと納税の自己負担2,000円で済む寄付上限額の目安を試算。無料・登録不要。",
  keywords: ["ふるさと納税","限度額","寄付","控除","シミュレーター"],
  alternates: { canonical: "https://net-toolbox.jp/tools/furusato-tax-simulator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
