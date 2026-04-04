import type { Metadata } from "next";
export const metadata: Metadata = { title: "HTMLエスケープ/アンエスケープツール - 特殊文字を変換", description: "HTMLの特殊文字（<>&\"'）をエスケープ・アンエスケープする無料ツール。XSS対策やブログ記事作成に。", keywords: ["HTMLエスケープ", "HTML", "エスケープ", "アンエスケープ", "特殊文字", "無料"] };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
