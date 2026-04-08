import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "都市ガス料金シミュレーター - 月額・年間コスト試算",
  description: "地域・使用量から都市ガスの月額・年間料金を試算。新ガス会社への切り替えで節約できる金額もわかる無料ツール。",
  keywords: ["都市ガス", "ガス料金", "シミュレーター", "ガス会社比較"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/gas-fee-simulator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
