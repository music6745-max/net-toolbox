import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "電卓ツール - オンライン計算機",
  description:
    "四則演算・パーセント計算に対応したオンライン電卓。スマートフォンでも使いやすいシンプルなデザインです。",
  keywords: ["電卓", "計算機", "オンライン", "四則演算", "パーセント", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
