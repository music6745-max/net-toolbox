import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JavaScript圧縮ツール - 無料オンラインツール",
  description: "JavaScriptコードを圧縮（minify）してファイルサイズを削減します。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/js-minifier",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
