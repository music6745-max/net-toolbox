import type { Metadata } from "next";
import { siteConfig } from "@/lib/tools";

export const metadata: Metadata = {
  title: "【2026年最新】プロジェクト管理ツール比較おすすめ5選｜機能・料金・チーム規模別に徹底解説",
  description:
    "2026年最新のプロジェクト管理ツールを徹底比較。Notion・Asana・Trello・Backlog・Jira の機能・料金・使いやすさを詳しく解説。個人からチームまで最適なツールが見つかります。",
  keywords: [
    "プロジェクト管理ツール 比較",
    "タスク管理 おすすめ",
    "プロジェクト管理 無料",
    "Notion 比較",
    "Asana 比較",
    "Trello 比較",
    "Backlog 比較",
    "チーム管理ツール おすすめ 2026",
  ],
  alternates: {
    canonical: `${siteConfig.url}/guide/project-management-comparison`,
  },
  openGraph: {
    title: "【2026年最新】プロジェクト管理ツール比較おすすめ5選｜機能・料金・チーム規模別に徹底解説",
    description:
      "Notion・Asana・Trello・Backlog・Jiraの機能・料金を徹底比較。あなたに最適なプロジェクト管理ツールが見つかります。",
    url: `${siteConfig.url}/guide/project-management-comparison`,
    type: "article",
  },
};

export default function ProjectManagementComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
