"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

interface KeyInfo {
  key: string;
  code: string;
  keyCode: number;
  which: number;
  altKey: boolean;
  ctrlKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
}

export default function KeycodeCheckerPage() {
  const [keyInfo, setKeyInfo] = useState<KeyInfo | null>(null);
  const [history, setHistory] = useState<KeyInfo[]>([]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    e.preventDefault();
    const info: KeyInfo = {
      key: e.key,
      code: e.code,
      keyCode: e.keyCode,
      which: e.which,
      altKey: e.altKey,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
    };
    setKeyInfo(info);
    setHistory((prev) => [info, ...prev].slice(0, 10));
  }, []);

  const clearHistory = () => {
    setKeyInfo(null);
    setHistory([]);
  };

  const modifierLabel = (info: KeyInfo) => {
    const mods = [];
    if (info.ctrlKey) mods.push("Ctrl");
    if (info.altKey) mods.push("Alt");
    if (info.shiftKey) mods.push("Shift");
    if (info.metaKey) mods.push("Meta");
    return mods.length > 0 ? mods.join(" + ") : "なし";
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>キーコード確認</span>
      </nav>

      <h1 className="text-2xl font-bold mb-2">キーコード確認ツール</h1>
      <p className="text-muted mb-8">
        キーボードのキーを押すと、keyCode・key・code・whichなどの情報をリアルタイムで表示します。JavaScript開発のキーイベント確認に便利です。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <div
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="w-full border-2 border-dashed border-primary/40 rounded-xl p-8 text-center cursor-pointer focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors"
        >
          {keyInfo ? (
            <span className="text-3xl font-mono font-bold text-primary">
              {keyInfo.key === " " ? "Space" : keyInfo.key}
            </span>
          ) : (
            <span className="text-muted text-sm">
              ここをクリックしてフォーカスし、キーを押してください
            </span>
          )}
        </div>

        {keyInfo && (
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { label: "key", value: keyInfo.key === " " ? "Space" : keyInfo.key },
              { label: "code", value: keyInfo.code },
              { label: "keyCode", value: String(keyInfo.keyCode) },
              { label: "which", value: String(keyInfo.which) },
              { label: "修飾キー", value: modifierLabel(keyInfo) },
            ].map(({ label, value }) => (
              <div key={label} className="bg-background rounded-lg p-3">
                <p className="text-xs text-muted mb-1">{label}</p>
                <p className="text-sm font-mono font-semibold break-all">{value}</p>
              </div>
            ))}
          </div>
        )}

        {history.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">履歴（最新10件）</span>
              <button
                onClick={clearHistory}
                className="text-xs text-muted hover:text-primary"
              >
                クリア
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono">
                <thead>
                  <tr className="text-muted border-b border-card-border">
                    <th className="text-left pb-2 pr-4">key</th>
                    <th className="text-left pb-2 pr-4">code</th>
                    <th className="text-left pb-2 pr-4">keyCode</th>
                    <th className="text-left pb-2">which</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((h, i) => (
                    <tr key={i} className="border-b border-card-border/50">
                      <td className="py-1.5 pr-4">{h.key === " " ? "Space" : h.key}</td>
                      <td className="py-1.5 pr-4">{h.code}</td>
                      <td className="py-1.5 pr-4">{h.keyCode}</td>
                      <td className="py-1.5">{h.which}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">キーコード確認ツールの使い方</h2>
        <div className="text-sm text-muted leading-relaxed space-y-2">
          <p>1. 点線のエリアをクリックしてフォーカスします。</p>
          <p>2. キーボードのキーを押すと、そのキーの情報がリアルタイムで表示されます。</p>
          <p>key: キーの文字表現、code: 物理キー名（レイアウト非依存）、keyCode: 数値コード（非推奨だが参考値として表示）。</p>
          <p>最新10件の押下履歴も一覧で確認できます。JavaScript のキーイベント処理に活用してください。</p>
        </div>
      </section>


      <RelatedTools currentSlug="keycode-checker" category="開発ツール" />
    </div>
  );
}
