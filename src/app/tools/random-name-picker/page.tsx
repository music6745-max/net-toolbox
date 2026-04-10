"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [names, setNames] = useState("田中\n佐藤\n鈴木\n高橋\n渡辺\n山田\n中村\n小林");
  const [picked, setPicked] = useState("");
  const [spinning, setSpinning] = useState(false);

  const pick = () => {
    const list = names.split("\n").map(n => n.trim()).filter(n => n);
    if (list.length === 0) return;
    setSpinning(true);
    let count = 0;
    const interval = setInterval(() => {
      setPicked(list[Math.floor(Math.random() * list.length)]);
      count++;
      if (count > 15) {
        clearInterval(interval);
        setPicked(list[Math.floor(Math.random() * list.length)]);
        setSpinning(false);
      }
    }, 100);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>ランダム名前選び</span></nav>
      <h1 className="text-2xl font-bold mb-2">ランダム名前ピッカー（あみだくじ代わり）</h1>
      <p className="text-muted mb-8">名前リストからランダムに1人を選出。順番決め・当番決め・プレゼント抽選に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">名前リスト（1行1名）</label>
          <textarea value={names} onChange={e => setNames(e.target.value)} rows={6} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm resize-y" />
        </div>
        <button onClick={pick} disabled={spinning} className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm disabled:opacity-50">{spinning ? '選出中...' : 'ランダムに選ぶ！'}</button>
        {picked && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-8 text-center">
            <div className="text-xs text-muted mb-2">選ばれたのは...</div>
            <div className="text-4xl font-bold text-orange-500">{picked}</div>
          </div>
        )}
      </div>
      <AffiliateSection slug="random-name-picker" category="日常ツール" />
      <RelatedTools currentSlug="random-name-picker" category="日常ツール" />
    </div>
  );
}
