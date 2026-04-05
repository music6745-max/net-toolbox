import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "血液型予測ツール - 無料オンラインツール",
  description: "両親の血液型から、子供の血液型の確率を計算します。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/blood-type-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
