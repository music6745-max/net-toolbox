import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "インスタフォント変換 - おしゃれ特殊文字に変換",
  description:
    "通常テキストをインスタグラム用のおしゃれな特殊文字・フォントに無料変換。プロフィールや投稿に使える装飾文字を簡単作成。登録不要でブラウザ上で完結。",
  keywords: ["インスタ フォント", "特殊文字", "おしゃれ文字", "インスタグラム", "フォント変換"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/instagram-font",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
