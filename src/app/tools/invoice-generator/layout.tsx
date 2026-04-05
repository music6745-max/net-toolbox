import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "請求書作成ツール - 無料オンラインツール",
  description: "請求書を作成して印刷・PDF保存できます。登録不要・無料でブラウザ上で使えます。",
  alternates: {
    canonical: "https://net-toolbox.jp/tools/invoice-generator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
