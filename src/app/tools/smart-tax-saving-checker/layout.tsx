import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "節税チェックリスト - 所得控除を網羅的にチェック",
  description: "ふるさと納税・iDeCo・医療費控除など、見落としがちな所得控除を網羅的にチェック。節税できる金額の概算も表示。",
  keywords: ["節税", "所得控除", "ふるさと納税", "iDeCo", "医療費控除"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/smart-tax-saving-checker",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
