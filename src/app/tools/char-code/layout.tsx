import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "文字コード確認ツール - 文字のUnicode・コードを確認",
  description:
    "文字を入力するとUnicodeコードポイント・UTF-8の16進数・10進数を確認できる無料オンラインツール。",
  keywords: ["文字コード", "Unicode", "UTF-8", "コードポイント", "16進数", "オンライン", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
