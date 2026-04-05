import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アスペクト比計算機 - 幅と高さから比率を計算",
  description:
    "幅と高さからアスペクト比を計算。リサイズ時の寸法も自動計算できる無料オンラインツール。画像・動画の比率確認に。登録不要でブラウザ上で完結。",
  keywords: ["アスペクト比", "アスペクト比 計算", "画面比率", "リサイズ", "画像サイズ"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
