import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ホワイトノイズ生成 - 無料オンラインツール",
  description: "ホワイトノイズ・ピンクノイズ・ブラウンノイズを生成します。集中や睡眠に。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/noise-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
