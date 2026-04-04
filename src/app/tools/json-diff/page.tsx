"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type DiffResult = {
  key: string;
  type: "added" | "removed" | "changed" | "unchanged";
  leftVal?: string;
  rightVal?: string;
};

function diffJSON(left: unknown, right: unknown, prefix = ""): DiffResult[] {
  const results: DiffResult[] = [];
  const leftObj = (typeof left === "object" && left !== null ? left : {}) as Record<string, unknown>;
  const rightObj = (typeof right === "object" && right !== null ? right : {}) as Record<string, unknown>;
  const allKeys = new Set([...Object.keys(leftObj), ...Object.keys(rightObj)]);

  for (const key of Array.from(allKeys).sort()) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const hasLeft = Object.prototype.hasOwnProperty.call(leftObj, key);
    const hasRight = Object.prototype.hasOwnProperty.call(rightObj, key);

    if (!hasLeft) {
      results.push({ key: fullKey, type: "added", rightVal: JSON.stringify(rightObj[key]) });
    } else if (!hasRight) {
      results.push({ key: fullKey, type: "removed", leftVal: JSON.stringify(leftObj[key]) });
    } else if (
      typeof leftObj[key] === "object" &&
      leftObj[key] !== null &&
      typeof rightObj[key] === "object" &&
      rightObj[key] !== null &&
      !Array.isArray(leftObj[key]) &&
      !Array.isArray(rightObj[key])
    ) {
      results.push(...diffJSON(leftObj[key], rightObj[key], fullKey));
    } else {
      const lv = JSON.stringify(leftObj[key]);
      const rv = JSON.stringify(rightObj[key]);
      if (lv !== rv) {
        results.push({ key: fullKey, type: "changed", leftVal: lv, rightVal: rv });
      } else {
        results.push({ key: fullKey, type: "unchanged", leftVal: lv, rightVal: rv });
      }
    }
  }
  return results;
}

export default function JsonDiffPage() {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [results, setResults] = useState<DiffResult[] | null>(null);
  const [error, setError] = useState("");
  const [showUnchanged, setShowUnchanged] = useState(false);

  const compare = () => {
    try {
      const left = JSON.parse(leftText || "{}");
      const right = JSON.parse(rightText || "{}");
      setResults(diffJSON(left, right));
      setError("");
    } catch {
      setError("JSONの解析に失敗しました。正しいJSON形式で入力してください。");
      setResults(null);
    }
  };

  const typeLabel = (type: DiffResult["type"]) => {
    switch (type) {
      case "added": return { label: "追加", cls: "bg-green-100 text-green-800 border-l-4 border-green-500" };
      case "removed": return { label: "削除", cls: "bg-red-100 text-red-800 border-l-4 border-red-500" };
      case "changed": return { label: "変更", cls: "bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500" };
      default: return { label: "変更なし", cls: "bg-background text-muted border-l-4 border-gray-200" };
    }
  };

  const filtered = results ? (showUnchanged ? results : results.filter(r => r.type !== "unchanged")) : null;
  const stats = results ? {
    added: results.filter(r => r.type === "added").length,
    removed: results.filter(r => r.type === "removed").length,
    changed: results.filter(r => r.type === "changed").length,
    unchanged: results.filter(r => r.type === "unchanged").length,
  } : null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>JSON差分比較</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">JSON差分比較ツール</h1>
      <p className="text-muted mb-8">
        2つのJSONオブジェクトを比較し、追加・削除・変更されたキーをハイライト表示します。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-card-bg border border-card-border rounded-xl p-4">
          <label className="block text-sm font-medium mb-2">JSON A（変更前）</label>
          <textarea
            value={leftText}
            onChange={(e) => setLeftText(e.target.value)}
            placeholder={'{\n  "name": "Alice",\n  "age": 30\n}'}
            className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={10}
          />
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-4">
          <label className="block text-sm font-medium mb-2">JSON B（変更後）</label>
          <textarea
            value={rightText}
            onChange={(e) => setRightText(e.target.value)}
            placeholder={'{\n  "name": "Bob",\n  "age": 30,\n  "email": "bob@example.com"\n}'}
            className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={10}
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <button
        onClick={compare}
        className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors mb-6"
      >
        差分を比較する
      </button>

      {stats && (
        <div className="flex flex-wrap gap-3 mb-4 text-sm">
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-800">追加: {stats.added}</span>
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-800">削除: {stats.removed}</span>
          <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800">変更: {stats.changed}</span>
          <span className="px-3 py-1 rounded-full bg-background text-muted">変更なし: {stats.unchanged}</span>
          <label className="flex items-center gap-2 ml-auto cursor-pointer">
            <input
              type="checkbox"
              checked={showUnchanged}
              onChange={(e) => setShowUnchanged(e.target.checked)}
              className="rounded"
            />
            変更なしも表示
          </label>
        </div>
      )}

      {filtered && filtered.length === 0 && (
        <div className="bg-card-bg border border-card-border rounded-xl p-6 text-center text-muted">
          {showUnchanged ? "キーが見つかりません" : "差分はありません（2つのJSONは同一です）"}
        </div>
      )}

      {filtered && filtered.length > 0 && (
        <div className="space-y-2">
          {filtered.map((r, i) => {
            const { label, cls } = typeLabel(r.type);
            return (
              <div key={i} className={`${cls} rounded-lg px-4 py-3 text-sm font-mono`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wide opacity-70">{label}</span>
                  <span className="font-bold">{r.key}</span>
                </div>
                {r.type === "changed" && (
                  <div className="space-y-1">
                    <div className="opacity-70"><span className="line-through">{r.leftVal}</span></div>
                    <div>→ {r.rightVal}</div>
                  </div>
                )}
                {r.type === "added" && <div>{r.rightVal}</div>}
                {r.type === "removed" && <div className="opacity-70">{r.leftVal}</div>}
                {r.type === "unchanged" && <div className="opacity-60">{r.leftVal}</div>}
              </div>
            );
          })}
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>JSON AとJSON Bにそれぞれ比較したいJSONを貼り付けて「差分を比較する」ボタンをクリックします。</p>
          <p>緑は追加されたキー、赤は削除されたキー、黄色は値が変更されたキーを示します。</p>
          <p>ネストされたオブジェクトも再帰的に比較します（配列は値全体で比較します）。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="json-diff" category="開発ツール" />
    </div>
  );
}
