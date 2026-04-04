"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface LSEntry {
  key: string;
  value: string;
}

export default function LocalStorageViewerPage() {
  const [entries, setEntries] = useState<LSEntry[]>([]);
  const [filter, setFilter] = useState("");
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");
  const [editKey, setEditKey] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [msg, setMsg] = useState("");

  const load = () => {
    if (typeof window === "undefined") return;
    const items: LSEntry[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k !== null) items.push({ key: k, value: localStorage.getItem(k) ?? "" });
    }
    items.sort((a, b) => a.key.localeCompare(b.key));
    setEntries(items);
  };

  useEffect(() => { load(); }, []);

  const showMsg = (text: string) => {
    setMsg(text);
    setTimeout(() => setMsg(""), 2000);
  };

  const addEntry = () => {
    if (!newKey.trim()) { showMsg("キーを入力してください"); return; }
    localStorage.setItem(newKey.trim(), newValue);
    showMsg(`"${newKey.trim()}" を保存しました`);
    setNewKey("");
    setNewValue("");
    load();
  };

  const deleteEntry = (key: string) => {
    localStorage.removeItem(key);
    showMsg(`"${key}" を削除しました`);
    load();
  };

  const startEdit = (entry: LSEntry) => {
    setEditKey(entry.key);
    setEditValue(entry.value);
  };

  const saveEdit = () => {
    if (editKey === null) return;
    localStorage.setItem(editKey, editValue);
    showMsg(`"${editKey}" を更新しました`);
    setEditKey(null);
    load();
  };

  const clearAll = () => {
    if (!window.confirm("LocalStorageのすべての項目を削除しますか？")) return;
    localStorage.clear();
    showMsg("すべて削除しました");
    load();
  };

  const filtered = filter
    ? entries.filter((e) => e.key.toLowerCase().includes(filter.toLowerCase()) || e.value.toLowerCase().includes(filter.toLowerCase()))
    : entries;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>LocalStorage確認</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">LocalStorage確認ツール</h1>
      <p className="text-muted mb-8">
        ブラウザのlocalStorageに保存されているデータを確認・追加・編集・削除できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div className="flex items-center gap-3">
          <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)}
            placeholder="キーまたは値で絞り込み..."
            className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          <button onClick={load}
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors whitespace-nowrap">
            再読み込み
          </button>
          {entries.length > 0 && (
            <button onClick={clearAll}
              className="border border-red-300 text-red-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors whitespace-nowrap">
              全削除
            </button>
          )}
        </div>

        {msg && <p className="text-green-600 text-sm">{msg}</p>}

        {filtered.length === 0 ? (
          <div className="bg-background rounded-lg p-6 text-center text-muted text-sm">
            {entries.length === 0
              ? "localStorageにデータがありません。下のフォームで追加できます。"
              : "絞り込み条件に一致する項目がありません。"}
          </div>
        ) : (
          <div className="bg-background rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-card-border">
                  <th className="py-2 px-4 text-left text-xs font-medium text-muted w-1/3">キー</th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-muted">値</th>
                  <th className="py-2 px-4 text-left text-xs font-medium text-muted w-24">操作</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((e) => (
                  <tr key={e.key} className="border-b border-card-border last:border-0 hover:bg-card-bg/50 transition-colors">
                    <td className="py-2.5 px-4 font-mono font-medium break-all align-top">{e.key}</td>
                    <td className="py-2.5 px-4 align-top">
                      {editKey === e.key ? (
                        <div className="flex gap-2">
                          <input type="text" value={editValue} onChange={(ev) => setEditValue(ev.target.value)}
                            className="flex-1 border border-card-border rounded px-2 py-1 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
                          <button onClick={saveEdit} className="text-primary text-xs font-medium hover:text-primary-hover">保存</button>
                          <button onClick={() => setEditKey(null)} className="text-muted text-xs hover:text-foreground">×</button>
                        </div>
                      ) : (
                        <span className="font-mono text-muted break-all">{e.value || <span className="italic">（空）</span>}</span>
                      )}
                    </td>
                    <td className="py-2.5 px-4 align-top">
                      <div className="flex gap-2">
                        <button onClick={() => startEdit(e)} className="text-primary text-xs font-medium hover:text-primary-hover">編集</button>
                        <button onClick={() => deleteEntry(e.key)} className="text-red-500 text-xs font-medium hover:text-red-700">削除</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="text-xs text-muted">合計: {entries.length}件 / 表示: {filtered.length}件</p>

        <div className="border-t border-card-border pt-5">
          <h3 className="text-sm font-semibold mb-3">新しい項目を追加</h3>
          <div className="flex gap-2 flex-wrap">
            <input type="text" value={newKey} onChange={(e) => setNewKey(e.target.value)}
              placeholder="キー"
              className="flex-1 min-w-24 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            <input type="text" value={newValue} onChange={(e) => setNewValue(e.target.value)}
              placeholder="値"
              className="flex-1 min-w-24 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            <button onClick={addEntry}
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
              追加
            </button>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. ページを開くと自動でlocalStorageのデータを読み込み、テーブル表示します。</p>
          <p>2. 「編集」ボタンで値をインライン編集、「削除」ボタンで項目を削除できます。</p>
          <p>3. 下部のフォームで新しいキーと値を入力して追加できます。</p>
          <p>4. 「全削除」ボタンでlocalStorageのすべてのデータを一括削除します。</p>
        </div>
      </section>
    </div>
  );
}
