import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "16タイプ性格診断（簡易版） - 無料MBTI風タイプ判定",
  description: "8問の質問に答えるだけで16タイプの性格を簡易診断。内向/外向・直感/感覚・思考/感情・判断/知覚の4軸で分析。結果をSNSシェア可能。無料・登録不要。",
  keywords: ["性格診断", "MBTI", "16タイプ", "簡易", "自己分析"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/personality-quick-test",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
