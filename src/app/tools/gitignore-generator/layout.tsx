import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ".gitignore生成ツール - .gitignoreファイルを作成",
  description:
    "言語・フレームワーク・IDEを選択して.gitignoreファイルを自動生成できる無料ツール。Node.js・Python・Java・Goなど多数のテンプレートに対応。",
  keywords: [".gitignore", "gitignore生成", "Git", "Node.js", "Python", "Java", "開発ツール"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
