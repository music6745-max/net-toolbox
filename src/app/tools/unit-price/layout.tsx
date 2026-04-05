import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "単価計算ツール - 無料オンライン単価計算",
  description: "商品の価格と量から単価を計算し、お買い得商品を比較。無料・登録不要でブラウザ上で完結。",
  keywords: ["単価","比較","お買い得"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/unit-price",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
