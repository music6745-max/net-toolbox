import type { Metadata } from "next";
export const metadata: Metadata = { title: "干支計算ツール - 生まれ年の干支を調べる", description: "生まれ年を入力して干支（十二支）を調べる無料ツール。子丑寅卯辰巳午未申酉戌亥に対応。", keywords: ["干支", "十二支", "生まれ年", "えと", "年齢", "干支計算", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/zodiac-calculator" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
