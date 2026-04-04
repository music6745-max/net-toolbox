"use client";

import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";

export default function UuidGeneratorPage() {
  const [count, setCount] = useState(1);
  const [uuids, setUuids] = useState<string[]>([]);
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generate = () => {
    const list: string[] = [];
    for (let i = 0; i < count; i++) {
      list.push(crypto.randomUUID());
    }
    setUuids(list);
    setCopiedAll(false);
    setCopiedIndex(null);
  };

  const copySingle = async (index: number) => {
    await navigator.clipboard.writeText(uuids[index]);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copyAll = async () => {
    await navigator.clipboard.writeText(uuids.join("\n"));
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>UUID生成</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">UUID生成ツール</h1>
      <p className="text-muted mb-8">
        UUID v4（ランダム）をブラウザ上で生成します。一度に最大100件まとめて生成できます。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="flex items-end gap-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">
              生成する件数: {count}件
            </label>
            <input
              type="range"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-muted mt-1">
              <span>1</span>
              <span>100</span>
            </div>
          </div>
          <input
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => {
              const v = Math.min(100, Math.max(1, Number(e.target.value) || 1));
              setCount(v);
            }}
            className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>

        <button
          onClick={generate}
          className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          UUIDを生成
        </button>

        {uuids.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{uuids.length}件のUUID</span>
              <button
                onClick={copyAll}
                className="text-sm text-primary hover:text-primary-hover font-medium"
              >
                {copiedAll ? "コピー済み" : "すべてコピー"}
              </button>
            </div>
            <div className="bg-background rounded-lg overflow-hidden divide-y divide-card-border max-h-96 overflow-y-auto">
              {uuids.map((uuid, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-2.5 gap-3">
                  <span className="font-mono text-sm">{uuid}</span>
                  <button
                    onClick={() => copySingle(i)}
                    className="shrink-0 text-xs text-primary hover:text-primary-hover font-medium"
                  >
                    {copiedIndex === i ? "済み" : "コピー"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">UUID生成ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. スライダーまたは入力欄で生成する件数（1〜100件）を設定します。</p>
          <p>2. 「UUIDを生成」ボタンをクリックすると、UUID v4がランダムに生成されます。</p>
          <p>3. 各UUIDの右の「コピー」ボタンで個別コピー、「すべてコピー」で改行区切りの一括コピーができます。</p>
          <p>UUID v4は128ビットのランダムな値で、重複する確率は天文学的に低く、一意なIDとして広く使用されます。</p>
          <p>すべての処理はブラウザ内で完結し、データが外部に送信されることはありません。</p>
        </div>
      </section>


      <AffiliateSection slug="uuid-generator" category="開発ツール" />
      <RelatedTools currentSlug="uuid-generator" category="開発ツール" />
    </div>
  );
}
