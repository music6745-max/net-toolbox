import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メタタグ生成ツール - SEO用メタタグを作成",
  description:
    "タイトル・説明・キーワードを入力してHTMLメタタグとOGP（Open Graph Protocol）タグを自動生成できる無料ツール。SEO対策に役立てください。",
  keywords: ["メタタグ", "meta tag", "OGP", "SEO", "メタタグ生成", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/meta-tag-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
