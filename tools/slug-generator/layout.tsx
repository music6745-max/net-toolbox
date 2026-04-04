import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "スラッグ生成ツール - URL用スラッグを作成",
  description: "テキストを入力してURL用のスラッグを生成します。スペースをハイフンに変換し、特殊文字を除去します。",
};

export default function SlugGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
