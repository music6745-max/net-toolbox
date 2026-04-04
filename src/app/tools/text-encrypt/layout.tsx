import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "テキスト暗号化ツール - 簡易暗号化・復号化",
  description:
    "ROT13・シーザー暗号・XOR暗号でテキストを簡単に暗号化・復号化。学習・ゲーム・ちょっとした秘密メッセージ作成に便利な教育用ツールです。",
  keywords: ["暗号化", "復号化", "ROT13", "シーザー暗号", "XOR", "テキスト変換", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
