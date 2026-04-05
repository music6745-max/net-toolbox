import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TODOリストツール - ブラウザで使えるタスク管理",
  description:
    "ブラウザ上で使えるシンプルなTODOリストツール。タスクの追加・完了・削除ができ、localStorageに自動保存。全件・未完了・完了済みのフィルター機能付き。",
  keywords: ["TODOリスト", "タスク管理", "タスクリスト", "ブラウザTODO", "チェックリスト", "無料"],
  alternates: {
    canonical: "https://net-toolbox.jp/tools/todo-list",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
