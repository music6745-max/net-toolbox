import type { Metadata } from "next";
export const metadata: Metadata = { title: "年齢計算ツール - 生年月日から年齢を計算", description: "生年月日から現在の年齢・生まれてからの日数・次の誕生日までの日数を計算する無料ツール。", keywords: ["年齢計算", "年齢", "生年月日", "誕生日", "計算", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/age-calculator" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
