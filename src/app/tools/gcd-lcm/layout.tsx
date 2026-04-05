import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "最大公約数・最小公倍数計算ツール - GCD/LCMを計算",
  description:
    "2つ以上の整数を入力して最大公約数（GCD）と最小公倍数（LCM）を計算します。計算過程もわかりやすく表示します。",
  keywords: ["最大公約数", "最小公倍数", "GCD", "LCM", "約数", "倍数", "数学"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/gcd-lcm",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
