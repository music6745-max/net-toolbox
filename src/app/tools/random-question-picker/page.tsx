"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const PRESET: Record<string, string[]> = {
  "アイスブレイク": [
    "もし1週間休みが取れたら何をしますか？",
    "子供の頃の夢は何でしたか？",
    "最近ハマっていることを教えてください。",
    "最後に感動した出来事は？",
    "好きな季節とその理由は？",
    "宝くじで1億円当たったら最初に何をしますか？",
    "無人島に1つだけ持っていけるとしたら？",
    "今までで一番美味しかった食べ物は？",
    "タイムマシンで行くなら過去か未来か？",
    "自分を動物にたとえると何？",
  ],
  "チームミーティング": [
    "今週一番うまくいったことは何ですか？",
    "今抱えている一番の課題は？",
    "チームに改善してほしい点を1つ挙げるなら？",
    "最近学んだ新しいことは？",
    "次週の目標を1つ教えてください。",
    "助けが必要なことはありますか？",
    "今週褒めたいメンバーとその理由は？",
    "モチベーションを上げる方法は？",
  ],
  "学習・自己啓発": [
    "今年一番読んで良かった本は？",
    "最近身につけたいスキルは？",
    "尊敬する人とその理由は？",
    "失敗から学んだ一番大きな教訓は？",
    "1年後の自分に何をしていてほしい？",
    "毎日続けている習慣はありますか？",
    "人生で一番大切にしている価値観は？",
    "学生時代にやっておけばよかったことは？",
  ],
  "雑談・面白系": [
    "朝ごはんは何を食べましたか？",
    "好きな映画ベスト3は？",
    "一番笑った出来事は？",
    "もし超能力が1つ手に入るなら何？",
    "最後に買った贅沢品は？",
    "行ってみたい国はどこ？",
    "マイブームは？",
    "好きなお菓子ベスト3は？",
  ],
};

export default function Page() {
  const [category, setCategory] = useState<string>("アイスブレイク");
  const [customInput, setCustomInput] = useState("");
  const [customList, setCustomList] = useState<string[]>([]);
  const [useCustom, setUseCustom] = useState(false);
  const [current, setCurrent] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  const pool = useMemo(() => {
    if (useCustom && customList.length > 0) return customList;
    return PRESET[category] || [];
  }, [category, useCustom, customList]);

  const pick = () => {
    if (pool.length === 0) return;
    let next = pool[Math.floor(Math.random() * pool.length)];
    if (pool.length > 1 && next === current) {
      // avoid immediate repeat
      next = pool[(pool.indexOf(next) + 1) % pool.length];
    }
    setCurrent(next);
    setHistory((h) => [next, ...h].slice(0, 10));
  };

  const addCustom = () => {
    const q = customInput.trim();
    if (!q) return;
    setCustomList((l) => [...l, q]);
    setCustomInput("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>ランダム質問ピッカー</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">ランダム質問ピッカー</h1>
      <p className="text-muted mb-8">
        チームミーティングのアイスブレイクや学習用に、ランダムで質問を選んでくれるツールです。
      </p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">カテゴリ</label>
          <div className="flex gap-2 flex-wrap">
            {Object.keys(PRESET).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setUseCustom(false);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  !useCustom && category === cat
                    ? "bg-primary text-white border-primary"
                    : "border-card-border text-muted hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
            <button
              onClick={() => setUseCustom(true)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                useCustom
                  ? "bg-primary text-white border-primary"
                  : "border-card-border text-muted hover:border-primary"
              }`}
            >
              自作リスト({customList.length})
            </button>
          </div>
        </div>

        {useCustom && (
          <div className="bg-background rounded-lg p-4 space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addCustom()}
                placeholder="質問を入力してEnter"
                className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                onClick={addCustom}
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                追加
              </button>
            </div>
            {customList.length > 0 && (
              <ul className="text-sm space-y-1 max-h-40 overflow-y-auto">
                {customList.map((q, i) => (
                  <li key={i} className="flex justify-between gap-2">
                    <span>・{q}</span>
                    <button
                      onClick={() => setCustomList((l) => l.filter((_, idx) => idx !== i))}
                      className="text-xs text-red-500 hover:underline"
                    >
                      削除
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="bg-background rounded-xl p-8 text-center min-h-[120px] flex items-center justify-center">
          {current ? (
            <p className="text-xl font-bold leading-relaxed">{current}</p>
          ) : (
            <p className="text-muted text-sm">「質問を引く」ボタンを押してください</p>
          )}
        </div>

        <button
          onClick={pick}
          disabled={pool.length === 0}
          className="w-full bg-primary text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-primary-hover transition-colors disabled:opacity-50"
        >
          🎲 質問を引く
        </button>

        {history.length > 1 && (
          <div>
            <p className="text-xs text-muted mb-2">履歴（最新10件）</p>
            <ul className="text-sm text-muted space-y-1">
              {history.slice(1).map((q, i) => (
                <li key={i}>・{q}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>カテゴリを選択して「質問を引く」ボタンを押すと、ランダムに質問が表示されます。</p>
          <p>「自作リスト」タブで独自の質問を追加すれば、チームや授業の目的にあわせた質問集が作れます。</p>
        </div>
      </section>

      <AffiliateSection slug="random-question-picker" category="日常ツール" />
      <RelatedTools currentSlug="random-question-picker" category="日常ツール" />
    </div>
  );
}
