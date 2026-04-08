import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マイル計算ツール - 航空会社・距離・座席クラスで算出",
  description:
    "ANA・JAL・デルタなど主要航空会社で距離・座席クラスから貯まるマイルを試算。フライトマイルの概算を素早く確認できます。",
  keywords: ["マイル計算", "フライトマイル", "ANAマイル", "JALマイル", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/flight-mile-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
