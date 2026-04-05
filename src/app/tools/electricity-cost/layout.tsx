import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "電気料金計算ツール - 無料オンラインツール",
  description: "家電の消費電力から電気料金を計算します。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/electricity-cost",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
