import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL構築ツールツール - 無料オンラインURL構築ツール",
  description: "URLのパス・クエリパラメータ・フラグメントを視覚的に組み立て。UTMパラメータにも対応。無料・登録不要でブラウザ上で完結。",
  keywords: ["URL","クエリパラメータ","UTM"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/url-builder",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
