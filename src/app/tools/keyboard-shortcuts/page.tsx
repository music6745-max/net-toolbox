"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

type Shortcut = {
  win: string;
  mac: string;
  description: string;
};

type Category = {
  name: string;
  shortcuts: Shortcut[];
};

const CATEGORIES: Category[] = [
  {
    name: "一般操作",
    shortcuts: [
      { win: "Ctrl + C", mac: "⌘ + C", description: "コピー" },
      { win: "Ctrl + X", mac: "⌘ + X", description: "切り取り" },
      { win: "Ctrl + V", mac: "⌘ + V", description: "貼り付け" },
      { win: "Ctrl + Z", mac: "⌘ + Z", description: "元に戻す" },
      { win: "Ctrl + Y", mac: "⌘ + Shift + Z", description: "やり直し" },
      { win: "Ctrl + A", mac: "⌘ + A", description: "すべて選択" },
      { win: "Ctrl + S", mac: "⌘ + S", description: "保存" },
      { win: "Ctrl + P", mac: "⌘ + P", description: "印刷" },
      { win: "Ctrl + F", mac: "⌘ + F", description: "検索" },
      { win: "Ctrl + H", mac: "⌘ + H", description: "置換" },
      { win: "Ctrl + N", mac: "⌘ + N", description: "新規作成" },
      { win: "Ctrl + O", mac: "⌘ + O", description: "ファイルを開く" },
      { win: "Ctrl + W", mac: "⌘ + W", description: "閉じる" },
      { win: "Alt + F4", mac: "⌘ + Q", description: "アプリを終了" },
      { win: "Alt + Tab", mac: "⌘ + Tab", description: "アプリを切り替え" },
      { win: "Win + D", mac: "⌘ + M", description: "デスクトップを表示" },
      { win: "Win + L", mac: "Ctrl + ⌘ + Q", description: "画面をロック" },
      { win: "PrintScreen", mac: "⌘ + Shift + 3", description: "スクリーンショット" },
    ],
  },
  {
    name: "ブラウザ",
    shortcuts: [
      { win: "Ctrl + T", mac: "⌘ + T", description: "新しいタブを開く" },
      { win: "Ctrl + W", mac: "⌘ + W", description: "タブを閉じる" },
      { win: "Ctrl + Shift + T", mac: "⌘ + Shift + T", description: "閉じたタブを再度開く" },
      { win: "Ctrl + Tab", mac: "⌘ + Option + →", description: "次のタブへ移動" },
      { win: "Ctrl + L", mac: "⌘ + L", description: "アドレスバーにフォーカス" },
      { win: "Ctrl + R / F5", mac: "⌘ + R", description: "ページを再読み込み" },
      { win: "Ctrl + Shift + R", mac: "⌘ + Shift + R", description: "キャッシュをクリアして再読み込み" },
      { win: "Ctrl + D", mac: "⌘ + D", description: "ブックマークに追加" },
      { win: "Ctrl + Shift + B", mac: "⌘ + Shift + B", description: "ブックマークバーを表示/非表示" },
      { win: "Ctrl + H", mac: "⌘ + Y", description: "閲覧履歴を開く" },
      { win: "Ctrl + J", mac: "⌘ + Shift + J", description: "ダウンロードを開く" },
      { win: "Ctrl + +", mac: "⌘ + +", description: "ズームイン" },
      { win: "Ctrl + -", mac: "⌘ + -", description: "ズームアウト" },
      { win: "Ctrl + 0", mac: "⌘ + 0", description: "ズームをリセット" },
      { win: "F11", mac: "⌘ + Shift + F", description: "全画面表示切り替え" },
    ],
  },
  {
    name: "テキスト編集",
    shortcuts: [
      { win: "Home", mac: "Fn + ←", description: "行の先頭へ移動" },
      { win: "End", mac: "Fn + →", description: "行の末尾へ移動" },
      { win: "Ctrl + Home", mac: "⌘ + ↑", description: "文書の先頭へ移動" },
      { win: "Ctrl + End", mac: "⌘ + ↓", description: "文書の末尾へ移動" },
      { win: "Ctrl + →", mac: "Option + →", description: "単語単位で右へ移動" },
      { win: "Ctrl + ←", mac: "Option + ←", description: "単語単位で左へ移動" },
      { win: "Shift + →", mac: "Shift + →", description: "右の文字を選択" },
      { win: "Ctrl + Shift + →", mac: "Option + Shift + →", description: "単語単位で右を選択" },
      { win: "Shift + Home", mac: "⌘ + Shift + ←", description: "行頭まで選択" },
      { win: "Shift + End", mac: "⌘ + Shift + →", description: "行末まで選択" },
      { win: "Delete", mac: "Fn + Backspace", description: "カーソル右の文字を削除" },
      { win: "Ctrl + Delete", mac: "Option + Delete", description: "右の単語を削除" },
      { win: "Ctrl + Backspace", mac: "Option + Backspace", description: "左の単語を削除" },
      { win: "Ctrl + B", mac: "⌘ + B", description: "太字" },
      { win: "Ctrl + I", mac: "⌘ + I", description: "斜体" },
      { win: "Ctrl + U", mac: "⌘ + U", description: "下線" },
    ],
  },
  {
    name: "開発者ツール",
    shortcuts: [
      { win: "F12", mac: "⌘ + Option + I", description: "開発者ツールを開く" },
      { win: "Ctrl + Shift + I", mac: "⌘ + Option + I", description: "開発者ツール（要素検証）" },
      { win: "Ctrl + Shift + J", mac: "⌘ + Option + J", description: "コンソールを開く" },
      { win: "Ctrl + Shift + C", mac: "⌘ + Option + C", description: "要素を選択して検証" },
      { win: "Ctrl + Shift + M", mac: "⌘ + Shift + M", description: "モバイルビューに切り替え" },
      { win: "Ctrl + Shift + P", mac: "⌘ + Shift + P", description: "コマンドパレット（DevTools）" },
      { win: "F8", mac: "F8", description: "デバッグ: 実行/一時停止" },
      { win: "F10", mac: "F10", description: "デバッグ: ステップオーバー" },
      { win: "F11", mac: "F11", description: "デバッグ: ステップイン" },
      { win: "Shift + F11", mac: "Shift + F11", description: "デバッグ: ステップアウト" },
      { win: "Ctrl + K", mac: "⌘ + K", description: "VS Code: コマンドパレット" },
      { win: "Ctrl + `", mac: "Ctrl + `", description: "VS Code: ターミナルを開く" },
      { win: "Ctrl + /", mac: "⌘ + /", description: "VS Code: コメントアウト" },
      { win: "Alt + Shift + F", mac: "Option + Shift + F", description: "VS Code: コードをフォーマット" },
    ],
  },
];

export default function KeyboardShortcutsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("すべて");
  const [os, setOs] = useState<"both" | "win" | "mac">("both");

  const categoryNames = ["すべて", ...CATEGORIES.map((c) => c.name)];

  const filtered = CATEGORIES.filter(
    (c) => activeCategory === "すべて" || c.name === activeCategory
  ).map((c) => ({
    ...c,
    shortcuts: c.shortcuts.filter((s) => {
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        s.description.toLowerCase().includes(q) ||
        s.win.toLowerCase().includes(q) ||
        s.mac.toLowerCase().includes(q)
      );
    }),
  })).filter((c) => c.shortcuts.length > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ショートカットキー一覧</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">ショートカットキー一覧</h1>
      <p className="text-muted mb-8">
        Windows/Macのよく使うキーボードショートカットを検索・確認できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="操作名・キーで検索..."
          className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
        <div className="flex flex-wrap gap-2 items-center">
          <div className="flex gap-1">
            {(["both", "win", "mac"] as const).map((o) => (
              <button
                key={o}
                onClick={() => setOs(o)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                  os === o
                    ? "bg-primary text-white border-primary"
                    : "bg-background text-muted hover:text-primary border-card-border"
                }`}
              >
                {o === "both" ? "両方" : o === "win" ? "Windows" : "Mac"}
              </button>
            ))}
          </div>
          <div className="w-px h-4 bg-card-border" />
          {categoryNames.map((name) => (
            <button
              key={name}
              onClick={() => setActiveCategory(name)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                activeCategory === name
                  ? "bg-primary text-white border-primary"
                  : "bg-background text-muted hover:text-primary border-card-border"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {filtered.map((cat) => (
          <div key={cat.name} className="bg-card-bg border border-card-border rounded-xl p-6">
            <h2 className="text-base font-bold mb-4">{cat.name}</h2>
            <div className="space-y-1">
              {cat.shortcuts.map((s) => (
                <div
                  key={s.description}
                  className="flex items-center gap-4 py-2.5 border-b border-card-border/50 last:border-0 text-sm"
                >
                  <div className="flex-1 text-muted">{s.description}</div>
                  {(os === "both" || os === "win") && (
                    <div className="flex gap-1 flex-wrap justify-end min-w-0">
                      {s.win.split(" + ").map((k, i, arr) => (
                        <span key={i} className="flex items-center gap-1">
                          <kbd className="px-2 py-0.5 bg-background border border-card-border rounded text-xs font-mono">
                            {k}
                          </kbd>
                          {i < arr.length - 1 && <span className="text-muted text-xs">+</span>}
                        </span>
                      ))}
                    </div>
                  )}
                  {os === "both" && <div className="text-muted text-xs">/</div>}
                  {(os === "both" || os === "mac") && (
                    <div className="flex gap-1 flex-wrap justify-end min-w-0">
                      {s.mac.split(" + ").map((k, i, arr) => (
                        <span key={i} className="flex items-center gap-1">
                          <kbd className="px-2 py-0.5 bg-background border border-card-border rounded text-xs font-mono">
                            {k}
                          </kbd>
                          {i < arr.length - 1 && <span className="text-muted text-xs">+</span>}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted py-8">該当するショートカットが見つかりませんでした。</p>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>検索ボックスに操作名やキー名を入力して絞り込み検索ができます。</p>
          <p>「Windows」「Mac」ボタンで表示するOSを切り替えられます。</p>
          <p>カテゴリボタンで一般操作・ブラウザ・テキスト編集・開発者ツールに絞り込めます。</p>
        </div>
      </section>


      <AffiliateSection slug="keyboard-shortcuts" category="開発ツール" />
      <RelatedTools currentSlug="keyboard-shortcuts" category="開発ツール" />
    </div>
  );
}
