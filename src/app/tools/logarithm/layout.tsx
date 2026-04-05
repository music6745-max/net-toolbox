import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "対数計算ツール - 常用対数・自然対数を計算",
  description:
    "常用対数（log10）・自然対数（ln）・二進対数（log2）・任意の底の対数を計算できる無料オンラインツール。",
  keywords: ["対数計算", "常用対数", "自然対数", "log", "ln", "log2", "数学", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/logarithm",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
