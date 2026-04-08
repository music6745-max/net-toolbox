import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL短縮サービス比較ツール - Bitly・TinyURL・JPNIC等を解説",
  description:
    "代表的なURL短縮サービス（Bitly・TinyURL・is.gd・JPNIC等）の特徴と使い方を比較。短縮先URLを生成するための公式リンクと手動コピー機能付き。",
  keywords: ["URL短縮", "Bitly", "TinyURL", "is.gd", "短縮URL", "比較"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/url-shortener-info",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
