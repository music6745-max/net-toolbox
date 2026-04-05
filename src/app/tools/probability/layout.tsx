import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "確率計算ツール - 順列・組み合わせ・確率を計算",
  description:
    "順列P(n,r)・組み合わせC(n,r)・事象の確率を計算できる無料オンラインツール。数学の確率・統計の学習に役立ちます。",
  keywords: ["確率計算", "順列", "組み合わせ", "P(n,r)", "C(n,r)", "数学", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/probability",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
