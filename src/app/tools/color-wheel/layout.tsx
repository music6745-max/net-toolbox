import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "カラーホイールツール - 無料オンラインカラーホイール",
  description: "色相環から補色・類似色・トライアドなどの配色パターンを生成。無料・登録不要でブラウザ上で完結。",
  keywords: ["カラーホイール","色相環","配色"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/color-wheel",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
