import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TOML整形 - 無料オンラインツール",
  description: "TOMLテキストを整形・検証します。キーと値のスペースを統一し、セクションのフォーマットを整えます。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/toml-formatter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
