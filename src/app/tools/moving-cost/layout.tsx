import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "引越し費用計算 - 無料オンラインツール",
  description: "距離・人数・時期から引越し費用の目安を計算します。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/moving-cost",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
