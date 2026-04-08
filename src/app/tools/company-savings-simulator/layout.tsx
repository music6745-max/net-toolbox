import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "企業型DCシミュレーター - 確定拠出年金の将来資産を試算",
  description: "毎月の掛金・運用利回り・期間から、企業型確定拠出年金（DC）の将来資産と運用益を試算。無料・登録不要。",
  keywords: ["企業型DC","確定拠出年金","シミュレーター","老後資金","マッチング拠出"],
  alternates: { canonical: "https://net-toolbox.jp/tools/company-savings-simulator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
