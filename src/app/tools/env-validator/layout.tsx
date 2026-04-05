import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ".env検証 - 無料オンラインツール",
  description: ".envファイルの内容を検証します。重複キー、空の値、不正な形式を検出します。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/env-validator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
