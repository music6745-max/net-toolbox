import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "為替換算ツール - 主要通貨を日本円に換算",
  description:
    "USD・EUR・GBP・CNY・KRWなどの主要通貨を日本円に換算。参考レートで素早く計算できます。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["為替換算", "為替計算", "外貨換算", "円換算", "ドル円", "ユーロ円", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/currency-converter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
