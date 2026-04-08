"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const CATEGORIES = [
  {
    title: "事前準備",
    items: [
      "企業の公式サイト・採用ページを熟読",
      "事業内容・ビジネスモデルの理解",
      "競合他社との違いを把握",
      "最新ニュース・プレスリリース確認",
      "職務経歴書を見返して答えを準備",
    ],
  },
  {
    title: "想定質問への回答",
    items: [
      "自己紹介（1分・3分バージョン）",
      "志望動機（企業固有の理由）",
      "転職理由（前向きな表現で）",
      "強み・弱み（弱みは改善策付き）",
      "キャリアビジョン（5年後・10年後）",
      "なぜ弊社なのか",
    ],
  },
  {
    title: "逆質問の準備",
    items: [
      "入社後の1日の業務の流れ",
      "評価制度・昇進ルート",
      "チーム構成・組織の雰囲気",
      "入社後の最初のミッション",
      "現場で活躍している人の特徴",
    ],
  },
  {
    title: "当日の持ち物・身だしなみ",
    items: [
      "履歴書・職務経歴書のコピー",
      "筆記用具・メモ帳",
      "スーツ・靴のメンテナンス",
      "会場までの経路確認",
      "時計の着用",
    ],
  },
];

export default function Page() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const allItems = CATEGORIES.flatMap((c) => c.items);
  const doneCount = allItems.filter((i) => checked[i]).length;
  const progress = Math.round((doneCount / allItems.length) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>面接準備チェックリスト</span></nav>
      <h1 className="text-2xl font-bold mb-2">面接準備チェックリスト</h1>
      <p className="text-muted mb-8">転職面接で慌てないための準備項目をカテゴリ別に整理。当日までに順番に潰していきましょう。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-6">
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2"><span>全体の準備状況</span><span className="font-bold">{doneCount} / {allItems.length}</span></div>
          <div className="w-full bg-background h-2 rounded-full overflow-hidden">
            <div className="bg-primary h-full transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="space-y-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <h3 className="font-bold text-sm mb-2">{cat.title}</h3>
              <div className="space-y-2">
                {cat.items.map((item) => (
                  <label key={item} className="flex items-start gap-3 p-3 border border-card-border rounded-lg hover:bg-background cursor-pointer">
                    <input type="checkbox" checked={!!checked[item]} onChange={() => setChecked((s) => ({ ...s, [item]: !s[item] }))} className="mt-1" />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>面接日までに、各項目をチェックして準備漏れを防ぎましょう。特に逆質問は評価を大きく左右するので、3〜5個は用意しておくのがおすすめです。</p></div></section>

      <section className="mt-10 mb-6">
        <Link href="/guide/executive-job-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">管理職・エグゼクティブ転職ガイドを読む</div>
          <p className="text-xs text-muted">ハイクラス面接のコツも網羅 →</p>
        </Link>
      </section>

      <AffiliateSection slug="interview-prep-checklist" category="日常ツール" />
      <RelatedTools currentSlug="interview-prep-checklist" category="日常ツール" />
    </div>
  );
}
