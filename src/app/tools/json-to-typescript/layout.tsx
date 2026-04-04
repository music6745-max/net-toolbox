import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON→TypeScript型変換ツール - 無料オンラインJSON→TypeScript型変換",
  description: "JSONデータからTypeScriptのインターフェース定義を自動生成。無料・登録不要でブラウザ上で完結。",
  keywords: ["JSON","TypeScript","型","interface"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
