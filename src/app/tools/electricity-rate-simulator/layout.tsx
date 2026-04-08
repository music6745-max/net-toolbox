import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "電気料金プラン比較シミュレーター - 昼夜別/オール電化対応",
  description: "従量電灯・時間帯別・オール電化プランで電気料金を比較試算。月間使用量から最適なプランを選べる無料ツール。",
  keywords: ["電気料金", "電力会社", "シミュレーター", "オール電化", "プラン比較"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/electricity-rate-simulator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
