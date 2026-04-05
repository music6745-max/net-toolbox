import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ショートカットキー一覧 - Windows/Macのキーボードショートカット",
  description:
    "WindowsとMacのよく使うキーボードショートカットを一覧で確認・検索できる無料ツール。一般操作・ブラウザ・テキスト編集・開発者ツールのショートカットをまとめています。",
  keywords: ["ショートカットキー", "キーボードショートカット", "Windows", "Mac", "一覧", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/keyboard-shortcuts",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
