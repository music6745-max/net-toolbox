import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "正規表現パターン集 - よく使う正規表現をコピー",
  description:
    "メール・電話番号・URL・IPアドレス・日付・郵便番号など、よく使う正規表現パターンをワンクリックでコピーできる無料ツール。",
  keywords: ["正規表現", "regex", "パターン", "メール", "電話番号", "URL", "IPアドレス"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
