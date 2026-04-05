import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "階乗計算ツール - 階乗・順列・組み合わせを計算",
  description:
    "整数nを入力してn!（階乗）を計算します。順列P(n,r)と組み合わせC(n,r)も同時に計算できます。",
  keywords: ["階乗", "順列", "組み合わせ", "factorial", "permutation", "combination", "数学"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/factorial",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
