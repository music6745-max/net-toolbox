import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "副業バレない収入シミュレーター - 住民税・確定申告判定",
  description: "副業の年間所得から確定申告の要否・住民税の追加額・会社にバレないための対策をシミュレーション。20万円ルールにも対応。",
  keywords: ["副業", "確定申告", "住民税", "副業バレない", "20万円"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/side-business-tax-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
