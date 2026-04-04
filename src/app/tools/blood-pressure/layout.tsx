import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "血圧判定ツール - 無料オンライン血圧判定",
  description: "収縮期・拡張期の血圧値から血圧レベルを判定。WHO基準に基づく分類。無料・登録不要でブラウザ上で完結。",
  keywords: ["血圧","高血圧","健康"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
