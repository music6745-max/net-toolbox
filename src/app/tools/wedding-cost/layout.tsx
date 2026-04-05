import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "結婚式費用計算 - 無料オンラインツール",
  description: "人数や条件から結婚式の概算費用を見積もります。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/wedding-cost",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
