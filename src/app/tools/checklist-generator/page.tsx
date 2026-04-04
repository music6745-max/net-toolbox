"use client";
import { useState } from "react";
import Link from "next/link";

export default function ChecklistGeneratorPage() {
  const [input, setInput] = useState("タスク1\nタスク2\nタスク3");
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [copied, setCopied] = useState(false);

  const items = input.split("\n").map((s) => s.trim()).filter(Boolean);

  const toggle = (i: number) => setChecked((prev) => ({ ...prev, [i]: !prev[i] }));

  const copyMarkdown = () => {
    const md = items.map((item, i) => `- [${checked[i] ? "x" : " "}] ${item}`).join("\n");
    navigator.clipboard.writeText(md).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  const printChecklist = () => {
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>チェックリスト</title><style>body{font-family:sans-serif;padding:2rem;}ul{list-style:none;padding:0;}li{display:flex;align-items:center;gap:.75rem;padding:.5rem 0;border-bottom:1px solid #eee;font-size:1rem;}input[type=checkbox]{width:1.25rem;height:1.25rem;}</style></head><body><h1>チェックリスト</h1><ul>${items.map((item, i) => `<li><input type="checkbox" ${checked[i] ? "checked" : ""}/><span>${item}</span></li>`).join("")}</ul></body></html>`;
    const w = window.open("", "_blank");
    if (w) { w.document.write(html); w.document.close(); w.print(); }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>チェックリスト生成</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">チェックリスト生成ツール</h1>
      <p className="text-muted mb-8">1行に1項目でテキストを入力すると、チェックリストを自動生成します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">項目を入力（1行に1項目）</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={6}
            className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
            placeholder="タスク1&#10;タスク2&#10;タスク3"
          />
        </div>
        {items.length > 0 && (
          <div className="bg-background rounded-lg p-4 space-y-2">
            <p className="text-sm font-medium mb-3">チェックリスト（{items.length}項目）</p>
            {items.map((item, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={!!checked[i]}
                  onChange={() => toggle(i)}
                  className="w-5 h-5 rounded accent-primary"
                />
                <span className={`text-sm ${checked[i] ? "line-through text-muted" : ""}`}>{item}</span>
              </label>
            ))}
          </div>
        )}
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={copyMarkdown}
            className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {copied ? "コピーしました！" : "Markdownでコピー"}
          </button>
          <button
            onClick={printChecklist}
            className="border border-card-border hover:bg-background px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            印刷用に開く
          </button>
          <button
            onClick={() => setChecked({})}
            className="border border-card-border hover:bg-background px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            チェックをリセット
          </button>
        </div>
      </div>
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキストエリアに項目を1行ずつ入力すると、下にチェックリストが生成されます。</p>
          <p>「Markdownでコピー」ボタンでチェック状態を含むMarkdown形式のテキストをクリップボードにコピーできます。</p>
          <p>「印刷用に開く」ボタンで印刷ダイアログを開き、チェックリストを印刷できます。</p>
        </div>
      </section>
    </div>
  );
}
