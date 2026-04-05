import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OGPプレビューツール - SNSシェア時の表示を確認",
  description:
    "OGP（Open Graph Protocol）のタイトル・説明・画像URLを入力して、FacebookやLINEでシェアされた際のプレビューを確認できる無料ツール。",
  keywords: ["OGP", "OGPプレビュー", "SNSシェア", "Open Graph", "Facebook", "LINE", "メタタグ"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/og-preview",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
