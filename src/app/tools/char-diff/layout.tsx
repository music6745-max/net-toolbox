import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "文字レベル差分ツール - 文字単位の差分をハイライト",
  description:
    "2つのテキストを文字単位で比較し、追加・削除された部分をハイライト表示する無料ツール。細かい変更も見逃しません。",
  keywords: ["差分", "diff", "文字比較", "テキスト比較", "ハイライト", "変更点"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/char-diff",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
