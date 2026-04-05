import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMI計算ツール - 体格指数を計算",
  description:
    "身長と体重を入力してBMIを計算。やせ・普通・肥満などの判定も表示します。ブラウザ内で処理するためデータは外部に送信されません。",
  keywords: ["BMI", "BMI計算", "体格指数", "肥満度", "健康", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/bmi-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
