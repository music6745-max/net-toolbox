import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約生成ツール - サイトの利用規約テンプレートを作成",
  description:
    "サイト名を入力するだけで利用規約テンプレートを自動生成。日本語対応、無料でご利用いただけます。",
  keywords: ["利用規約", "利用規約生成", "テンプレート", "サイト", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
