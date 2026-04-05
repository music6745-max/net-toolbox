import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ローン比較計算ツール - 無料オンラインツール",
  description: "2つのローン条件を入力して、月々の返済額・総支払額・利息総額を比較できます。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/loan-comparison",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
