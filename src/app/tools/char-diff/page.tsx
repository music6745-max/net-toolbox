"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

type DiffOp = { type: "equal" | "insert" | "delete"; text: string };

// Myers diff algorithm (character-level)
function charDiff(a: string, b: string): DiffOp[] {
  const m = a.length;
  const n = b.length;
  const max = m + n;
  if (max === 0) return [];

  const v: number[] = new Array(2 * max + 1).fill(0);
  const trace: number[][] = [];

  outer: for (let d = 0; d <= max; d++) {
    trace.push([...v]);
    for (let k = -d; k <= d; k += 2) {
      let x: number;
      const ki = k + max;
      if (k === -d || (k !== d && v[ki - 1] < v[ki + 1])) {
        x = v[ki + 1];
      } else {
        x = v[ki - 1] + 1;
      }
      let y = x - k;
      while (x < m && y < n && a[x] === b[y]) {
        x++;
        y++;
      }
      v[ki] = x;
      if (x >= m && y >= n) break outer;
    }
  }

  const ops: DiffOp[] = [];
  let x = m;
  let y = n;

  for (let d = trace.length - 1; d >= 0; d--) {
    const vd = trace[d];
    const k = x - y;
    const ki = k + max;
    let prevK: number;
    if (k === -d || (k !== d && vd[ki - 1] < vd[ki + 1])) {
      prevK = k + 1;
    } else {
      prevK = k - 1;
    }
    const prevX = vd[prevK + max];
    const prevY = prevX - prevK;

    while (x > prevX && y > prevY) {
      ops.unshift({ type: "equal", text: a[x - 1] });
      x--;
      y--;
    }
    if (d > 0) {
      if (x === prevX) {
        ops.unshift({ type: "insert", text: b[y - 1] });
        y--;
      } else {
        ops.unshift({ type: "delete", text: a[x - 1] });
        x--;
      }
    }
  }
  return ops;
}

function mergeDiff(ops: DiffOp[]): DiffOp[] {
  const result: DiffOp[] = [];
  for (const op of ops) {
    if (result.length > 0 && result[result.length - 1].type === op.type) {
      result[result.length - 1].text += op.text;
    } else {
      result.push({ ...op });
    }
  }
  return result;
}

export default function CharDiffPage() {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [mode, setMode] = useState<"char" | "word">("char");

  const diff = useMemo(() => {
    const a = leftText;
    const b = rightText;
    if (!a && !b) return null;
    if (mode === "char") {
      return mergeDiff(charDiff(a, b));
    } else {
      // Word-level: split on whitespace boundaries, diff tokens
      const tokenize = (s: string) => s.match(/\S+|\s+/g) ?? [];
      const at = tokenize(a);
      const bt = tokenize(b);
      const aStr = at.join("\x00");
      const bStr = bt.join("\x00");
      const raw = charDiff(aStr, bStr);
      // Rebuild splitting on \x00
      const merged = mergeDiff(raw);
      return merged.map(op => ({ ...op, text: op.text.replace(/\x00/g, " ") }));
    }
  }, [leftText, rightText, mode]);

  const stats = useMemo(() => {
    if (!diff) return null;
    let added = 0, removed = 0;
    for (const op of diff) {
      if (op.type === "insert") added += op.text.length;
      else if (op.type === "delete") removed += op.text.length;
    }
    return { added, removed };
  }, [diff]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>文字レベル差分</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">文字レベル差分ツール</h1>
      <p className="text-muted mb-8">
        2つのテキストを文字単位・単語単位で比較し、変更箇所をハイライト表示します。
      </p>

      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setMode("char")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "char" ? "bg-primary text-white" : "bg-card-bg border border-card-border text-muted hover:text-primary"
          }`}
        >
          文字単位
        </button>
        <button
          onClick={() => setMode("word")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            mode === "word" ? "bg-primary text-white" : "bg-card-bg border border-card-border text-muted hover:text-primary"
          }`}
        >
          単語単位
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-card-bg border border-card-border rounded-xl p-4">
          <label className="block text-sm font-medium mb-2">テキスト A（変更前）</label>
          <textarea
            value={leftText}
            onChange={(e) => setLeftText(e.target.value)}
            placeholder="変更前のテキストを入力..."
            className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={8}
          />
        </div>
        <div className="bg-card-bg border border-card-border rounded-xl p-4">
          <label className="block text-sm font-medium mb-2">テキスト B（変更後）</label>
          <textarea
            value={rightText}
            onChange={(e) => setRightText(e.target.value)}
            placeholder="変更後のテキストを入力..."
            className="w-full border border-card-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
            rows={8}
          />
        </div>
      </div>

      {stats && (
        <div className="flex gap-4 text-sm mb-4">
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-800">追加: {stats.added}文字</span>
          <span className="px-3 py-1 rounded-full bg-red-100 text-red-800">削除: {stats.removed}文字</span>
        </div>
      )}

      {diff && (
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <h2 className="font-bold text-sm mb-4">差分結果</h2>
          <div className="bg-background rounded-lg p-4 text-sm font-mono leading-relaxed break-all whitespace-pre-wrap">
            {diff.map((op, i) => {
              if (op.type === "equal") {
                return <span key={i}>{op.text}</span>;
              } else if (op.type === "insert") {
                return (
                  <span key={i} className="bg-green-200 text-green-900 rounded px-0.5" title="追加">
                    {op.text}
                  </span>
                );
              } else {
                return (
                  <span key={i} className="bg-red-200 text-red-900 line-through rounded px-0.5" title="削除">
                    {op.text}
                  </span>
                );
              }
            })}
          </div>
          <div className="flex gap-4 mt-4 text-xs text-muted">
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded bg-green-200"></span> 追加（緑）
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 rounded bg-red-200"></span> 削除（赤・取り消し線）
            </span>
          </div>
        </div>
      )}

      {!diff && (
        <div className="bg-card-bg border border-card-border rounded-xl p-8 text-center text-muted text-sm">
          テキスト A と B を入力すると差分がリアルタイムで表示されます
        </div>
      )}

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>テキスト Aに変更前、テキスト Bに変更後の文章を貼り付けると、自動的に差分が表示されます。</p>
          <p>「文字単位」モードでは1文字ずつ比較し、「単語単位」モードでは単語・空白のまとまりで比較します。</p>
          <p>緑のハイライトはBで追加された部分、赤の取り消し線はAにあってBから削除された部分を示します。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <RelatedTools currentSlug="char-diff" category="テキスト" />
    </div>
  );
}
