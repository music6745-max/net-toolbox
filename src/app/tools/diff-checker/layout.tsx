import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テキスト差分比較（高機能） - 無料オンラインツール",
  description: "2つのテキストを行単位で比較し、差分を色付きで表示します。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/diff-checker",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
