import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iDeCoシミュレーター - 節税額・将来資産を無料試算",
  description: "毎月の積立額・年収・職業区分から、iDeCoの年間節税額と運用後の将来資産をシミュレーション。無料・登録不要。",
  keywords: ["iDeCo","個人型確定拠出年金","節税","シミュレーター","老後資金"],
  alternates: { canonical: "https://net-toolbox.jp/tools/ideco-simulator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
