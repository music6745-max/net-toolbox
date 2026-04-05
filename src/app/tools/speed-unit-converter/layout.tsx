import type { Metadata } from "next";
export const metadata: Metadata = { title: "速度単位変換ツール - km/h・mph・m/sを変換", description: "km/h・mph・m/s・ノット・ft/sを相互変換する無料ツール。速度の単位変換に便利です。", keywords: ["速度変換", "km/h", "mph", "m/s", "ノット", "単位変換", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/speed-unit-converter" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
