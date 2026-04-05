import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "用紙サイズ一覧ツール - 無料オンライン用紙サイズ一覧",
  description: "A判・B判・はがき等の用紙サイズをmm/inch/pxで一覧表示。印刷に便利。無料・登録不要でブラウザ上で完結。",
  keywords: ["用紙サイズ","A4","B5","印刷"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/paper-size",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
