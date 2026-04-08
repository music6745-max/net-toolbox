import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISBN書籍情報検索ツール - ISBNから書籍を検索",
  description:
    "ISBN番号（10桁・13桁対応）から書籍のタイトル・著者・出版社・表紙画像・説明文をGoogle Books APIで検索できる無料ツール。",
  keywords: ["ISBN", "書籍検索", "本", "Google Books", "書誌情報", "無料"],
  alternates: { canonical: "https://net-toolbox.jp/tools/isbn-lookup" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
