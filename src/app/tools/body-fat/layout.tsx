import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "体脂肪率計算ツール - 無料オンライン体脂肪率計算",
  description: "身長・体重・年齢・性別からBMI法で体脂肪率を推定。健康管理に。無料・登録不要でブラウザ上で完結。",
  keywords: ["体脂肪率","BMI","健康"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
