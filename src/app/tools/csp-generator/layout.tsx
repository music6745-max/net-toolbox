import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSPヘッダー生成ツール - 無料オンラインCSPヘッダー生成",
  description: "Content-Security-Policyヘッダーをビジュアルに設定・生成。無料・登録不要でブラウザ上で完結。",
  keywords: ["CSP","セキュリティ","ヘッダー"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/csp-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
