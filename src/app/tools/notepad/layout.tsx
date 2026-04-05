import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メモ帳ツール - ブラウザで使えるオンラインメモ帳",
  description:
    "ブラウザ上で使えるシンプルなメモ帳ツール。入力内容は自動的にlocalStorageに保存されるため、ページを再読み込みしても消えません。文字数カウント付き。",
  keywords: ["メモ帳", "オンラインメモ", "テキストエディタ", "ブラウザメモ", "自動保存", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/notepad",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
