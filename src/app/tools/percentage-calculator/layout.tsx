import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "パーセント計算ツール - 割合・百分率を計算",
  description:
    "「AはBの何%？」「Aの何%はいくつ？」「増加・減少後の値は？」の3モードで割合・百分率を素早く計算。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["パーセント", "割合", "百分率", "計算", "増加率", "減少率", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/percentage-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
