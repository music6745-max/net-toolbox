import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dockerfileテンプレート生成ツール - Dockerfileを作成",
  description:
    "ベースイメージ・ポート・作業ディレクトリなどを選択してDockerfileテンプレートを自動生成。Node.js・Python・Nginx・Goなどに対応。",
  keywords: ["Dockerfile", "Docker", "テンプレート", "コンテナ", "Node.js", "Python", "nginx", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
