import type { Metadata } from "next";
export const metadata: Metadata = { title: "基礎代謝計算ツール - 1日の消費カロリーを計算", description: "年齢・性別・身長・体重を入力してハリス・ベネディクト式で基礎代謝（BMR）と1日の消費カロリーを計算する無料ツール。", keywords: ["基礎代謝", "BMR", "カロリー計算", "消費カロリー", "ダイエット", "ハリスベネディクト", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/calorie-calculator" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
