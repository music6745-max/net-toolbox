import type { Metadata } from "next";
export const metadata: Metadata = { title: "音声ビットレート計算ツール - 音声ファイルの容量を見積もり", description: "ビットレートと再生時間から音声ファイルの容量を計算する無料ツール。MP3・FLAC・AACのプリセットにも対応。", keywords: ["音声ビットレート", "ファイルサイズ", "MP3", "FLAC", "AAC", "計算", "無料"], alternates: { canonical: "https://net-toolbox.jp/tools/audio-bitrate" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
