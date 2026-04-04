import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSSフィルター生成ツール - 無料オンラインCSSフィルター生成",
  description: "blur・brightness・contrast等のCSSフィルターをプレビュー付きで設定。無料・登録不要でブラウザ上で完結。",
  keywords: ["CSS","filter","フィルター"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
