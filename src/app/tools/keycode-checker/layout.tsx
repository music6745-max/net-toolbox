import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "キーコード確認ツール - キーボードのキーコードを確認",
  description:
    "キーボードのキーを押すとkeyCode、key、code、whichをリアルタイムで表示する無料ツール。JavaScript開発者向けキーコード確認ツール。",
  keywords: ["キーコード", "keyCode", "キーボード", "JavaScript", "key event", "開発ツール", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
