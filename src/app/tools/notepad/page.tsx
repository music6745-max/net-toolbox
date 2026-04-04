"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

const STORAGE_KEY = "toolbox_notepad_content";
const SAVE_DELAY = 800;

export default function NotepadPage() {
  const [content, setContent] = useState("");
  const [saved, setSaved] = useState(true);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setContent(stored);
      setLastSaved(new Date());
    }
  }, []);

  const saveNow = useCallback((text: string) => {
    localStorage.setItem(STORAGE_KEY, text);
    setSaved(true);
    setLastSaved(new Date());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setContent(val);
    setSaved(false);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      saveNow(val);
    }, SAVE_DELAY);
  };

  const handleClear = () => {
    if (!confirm("メモの内容をすべて削除しますか？")) return;
    setContent("");
    saveNow("");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "memo.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const lines = content.split("\n").length;
  const chars = content.length;
  const charsNoSpace = content.replace(/\s/g, "").length;

  const formatTime = (d: Date) => {
    return d.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>メモ帳</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">メモ帳ツール</h1>
      <p className="text-muted mb-8">
        ブラウザ上で使えるシンプルなメモ帳です。内容は自動的に保存されます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl overflow-hidden">
        {/* ツールバー */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-card-border flex-wrap">
          <button
            onClick={handleCopy}
            className="text-sm text-muted hover:text-primary px-2 py-1 rounded transition-colors"
          >
            {copied ? "コピー済み" : "コピー"}
          </button>
          <button
            onClick={handleDownload}
            className="text-sm text-muted hover:text-primary px-2 py-1 rounded transition-colors"
          >
            ダウンロード
          </button>
          <button
            onClick={handleClear}
            className="text-sm text-muted hover:text-red-500 px-2 py-1 rounded transition-colors"
          >
            クリア
          </button>
          <div className="ml-auto flex items-center gap-2">
            <span className={`text-xs ${saved ? "text-green-500" : "text-yellow-500"}`}>
              {saved ? (lastSaved ? `保存済み ${formatTime(lastSaved)}` : "保存済み") : "保存中..."}
            </span>
          </div>
        </div>

        {/* テキストエリア */}
        <textarea
          value={content}
          onChange={handleChange}
          className="w-full min-h-96 p-4 text-sm font-mono leading-relaxed resize-none focus:outline-none bg-background"
          placeholder="ここにメモを入力してください。入力内容は自動的に保存されます。"
          spellCheck={false}
        />

        {/* ステータスバー */}
        <div className="flex items-center gap-4 px-4 py-2 border-t border-card-border text-xs text-muted flex-wrap">
          <span>{chars}文字</span>
          <span>（空白除く: {charsNoSpace}文字）</span>
          <span>{lines}行</span>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">メモ帳ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. テキストエリアにメモを入力します。入力後しばらくすると自動的に保存されます。</p>
          <p>2. ページを再読み込みしてもメモの内容は消えません（localStorageに保存）。</p>
          <p>3. 「コピー」でクリップボードにコピー、「ダウンロード」でテキストファイルとして保存できます。</p>
          <p>4. 「クリア」ですべての内容を削除できます（確認ダイアログあり）。</p>
          <p>文字数・行数はリアルタイムでステータスバーに表示されます。</p>
        </div>
      </section>


      <AffiliateSection slug="notepad" category="日常ツール" />
      <RelatedTools currentSlug="notepad" category="日常ツール" />
    </div>
  );
}
