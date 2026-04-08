import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "主要食品カロリー早見表 - 50品目以上を検索で素早く確認",
  description: "ご飯・パン・麺・肉・魚・野菜・お菓子など主要50品目以上のカロリーを検索ボックスで素早く確認。ダイエット・食事管理の目安に。無料・登録不要。",
  keywords: ["カロリー", "食品", "一覧", "ダイエット", "早見表"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/food-calorie-quick-lookup",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
