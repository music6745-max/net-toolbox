import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lorem Ipsum生成ツール - ダミーテキストを生成",
  description:
    "Lorem Ipsumのダミーテキストを段落数を指定して無料で生成。デザインや開発のプレースホルダーテキストとして活用できます。",
  keywords: ["Lorem Ipsum", "ダミーテキスト", "プレースホルダー", "テキスト生成", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
