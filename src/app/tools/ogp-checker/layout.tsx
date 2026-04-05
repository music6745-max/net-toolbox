import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OGPチェッカーツール - 無料オンラインOGPチェッカー",
  description: "URLを入力してOGPメタタグの設定状況を確認。SNSシェア時の表示を検証。無料・登録不要でブラウザ上で完結。",
  keywords: ["OGP","メタタグ","SNS"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/ogp-checker",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
