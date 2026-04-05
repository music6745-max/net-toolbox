import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "積立計算ツール - 毎月の積立額から将来の資産を計算",
  description:
    "毎月の積立額・年利・積立期間を入力して、将来の総資産と利息を計算。積立投資のシミュレーションができます。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["積立計算", "積立投資", "複利", "資産形成", "iDeCo", "NISA", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/savings-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
