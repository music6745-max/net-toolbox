import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTTPヘッダー確認 - 無料オンラインツール",
  description: "よく使われるHTTPヘッダーのリファレンス一覧です。クリックでコピーできます。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/http-header-viewer",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
