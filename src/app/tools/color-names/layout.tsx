import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTMLカラー名一覧ツール - CSSカラー名とコードを検索",
  description:
    "HTML・CSSで使えるカラー名とHEXコードの一覧を検索できる無料オンラインツール。クリックでHEXコードをコピーできます。",
  keywords: ["HTMLカラー", "CSSカラー", "カラー名", "HEXコード", "色一覧", "色見本"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/color-names",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
