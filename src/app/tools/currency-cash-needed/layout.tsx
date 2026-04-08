import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "旅行用現金額計算ツール - 国・滞在日数で必要現金を試算",
  description:
    "渡航先・滞在日数・スタイルに応じて持参すべき現金額を日本円・現地通貨で試算。カード併用の目安も確認できます。",
  keywords: ["旅行現金", "両替額", "海外旅行現金", "現地通貨", "旅行準備"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/currency-cash-needed",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
