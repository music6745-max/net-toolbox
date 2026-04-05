import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "名前候補生成 - 無料オンラインツール",
  description: "条件を選ぶと名前の候補を提案します。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/baby-name-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
