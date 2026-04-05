import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "犬の年齢計算ツール - 犬の年齢を人間に換算",
  description:
    "犬の年齢を人間の年齢に換算します。最初の2年は1年あたり10.5歳、それ以降は1年あたり4歳として計算します。",
  keywords: ["犬の年齢", "犬齢換算", "犬 人間年齢", "ペット", "年齢計算"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/dog-age-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
