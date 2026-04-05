import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "フォント組み合わせツール - 無料オンラインツール",
  description: "見出しと本文のフォント組み合わせをプレビューできます。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/font-pairing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
