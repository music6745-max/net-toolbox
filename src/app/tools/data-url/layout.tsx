import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "データURL変換ツール - テキストをデータURIに変換",
  description:
    "テキスト・HTMLをデータURL（Data URI）に変換、またはデータURLをテキストに戻せる無料オンラインツール。",
  keywords: ["データURL", "Data URI", "Base64", "テキスト変換", "HTML", "無料", "オンラインツール"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/data-url",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
