import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitterカードプレビュー - 無料オンラインツール",
  description: "Twitterカードの表示をプレビューできます。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/twitter-card-preview",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
