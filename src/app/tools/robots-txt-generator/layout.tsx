import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "robots.txt生成ツール - robots.txtを作成",
  description:
    "クローラーの許可・禁止設定を選択してrobots.txtを自動生成できる無料ツール。クロール禁止パスの指定やSitemapのURL設定も可能です。",
  keywords: ["robots.txt", "robots", "クローラー", "SEO", "robots.txt生成", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
