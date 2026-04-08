import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "今日のラッキーカラー診断 - 無料・生年月日から判定",
  description: "生年月日と今日の日付からあなたの今日のラッキーカラーを診断。意味や開運アドバイス付き。SNSシェアで友達と盛り上がろう。無料・登録不要。",
  keywords: ["ラッキーカラー", "今日の運勢", "診断", "色", "開運"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/lucky-color-of-day",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
