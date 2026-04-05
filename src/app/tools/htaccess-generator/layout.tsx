import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ".htaccessリダイレクト生成ツール - .htaccessを生成",
  description:
    ".htaccessファイルのコードを自動生成する無料ツール。HTTPS強制・リダイレクト・アクセス制限・カスタム404ページなどに対応。",
  keywords: [".htaccess", "htaccess生成", "リダイレクト", "HTTPS強制", "Apache", "開発ツール", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/htaccess-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
