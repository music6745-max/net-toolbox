import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】メモ・ノートアプリ比較おすすめ5選｜機能・料金・同期・整理術を徹底解説",
  description:
    "2026年最新のメモ・ノートアプリを徹底比較。Notion・Obsidian・Evernote・Apple Notes・Google Keep の機能・料金・同期・整理術を詳しく解説。あなたに最適なアプリが見つかります。",
  keywords: [
    "メモアプリ 比較",
    "ノートアプリ おすすめ",
    "Notion 比較",
    "Obsidian 比較",
    "Evernote 代替",
    "メモ帳 おすすめ 2026",
    "ナレッジ管理 アプリ",
    "ノート整理 アプリ",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/note-taking-app-comparison`,
  },
  openGraph: {
    title: "【2026年最新】メモ・ノートアプリ比較おすすめ5選｜機能・料金・同期・整理術を徹底解説",
    description:
      "Notion・Obsidian・Evernote・Apple Notes・Google Keepの機能・料金を徹底比較。あなたに最適なメモアプリが見つかります。",
    url: `${siteConfig.url}/guide/note-taking-app-comparison`,
    type: "article",
  },
};

export default function NoteTakingAppComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
