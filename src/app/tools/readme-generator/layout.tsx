import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "README生成ツール - README.mdテンプレートを作成",
  description:
    "プロジェクト名・説明・インストール手順・使い方などを入力するだけでREADME.mdテンプレートを自動生成できる無料ツール。GitHubリポジトリのREADME作成に最適。",
  keywords: ["README", "README.md", "Markdown", "GitHub", "テンプレート", "生成", "開発ツール"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/readme-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
