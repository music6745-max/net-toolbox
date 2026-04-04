import type { Metadata } from "next";
export const metadata: Metadata = { title: "テキスト読み上げツール - ブラウザでテキストを音声再生", description: "テキストを入力するとブラウザのWeb Speech APIで音声読み上げ。声・速度・ピッチを変更できる無料ツール。", keywords: ["テキスト読み上げ", "音声合成", "TTS", "Web Speech API", "読み上げ", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
