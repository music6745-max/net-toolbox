import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "チップ計算ツール - 無料オンラインチップ計算",
  description: "食事代からチップ額と合計を計算。割り勘にも対応。海外旅行に。無料・登録不要でブラウザ上で完結。",
  keywords: ["チップ","チップ計算","割り勘"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/tip-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
