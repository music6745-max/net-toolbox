import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "割り勘計算ツール - 無料オンラインツール",
  description: "金額と人数で均等割り。端数の処理も自動で行います。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/rent-split",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
