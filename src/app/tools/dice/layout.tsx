import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サイコロツール - オンラインダイスロール",
  description:
    "4面・6面・8面・10面・12面・20面サイコロを1〜10個振れるオンラインダイスツール。合計値も表示。ボードゲームやTRPGに最適。",
  keywords: ["サイコロ", "ダイス", "ダイスロール", "D6", "D20", "TRPG", "ボードゲーム", "無料"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
