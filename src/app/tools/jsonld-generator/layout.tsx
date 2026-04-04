import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "構造化データ生成ツール - JSON-LDを作成",
  description:
    "Article・Product・FAQ・Breadcrumbなどの構造化データ（JSON-LD）を簡単に生成できる無料ツール。SEO対策に役立つschema.orgのマークアップをコピペで使えます。",
  keywords: ["構造化データ", "JSON-LD", "schema.org", "SEO", "Article", "Product", "FAQ", "リッチリザルト"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
