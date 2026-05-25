"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [name, setName] = useState("");
  const totalStrokes = () => {
    if (!name) return 0;
    // Simplified stroke count estimation based on character complexity
    let total = 0;
    for (const ch of name) {
      const code = ch.charCodeAt(0);
      if (code >= 0x4E00 && code <= 0x9FFF) {
        // CJK characters - estimate based on code range
        total += 5 + (code % 10); // simplified deterministic estimate
      } else if (code >= 0x3040 && code <= 0x309F) {
        total += 3; // hiragana
      } else if (code >= 0x30A0 && code <= 0x30FF) {
        total += 3; // katakana
      } else {
        total += 1;
      }
    }
    return total;
  };
  const strokes = totalStrokes();
  const luck = strokes > 0 ? ["大吉", "吉", "中吉", "小吉", "末吉"][strokes % 5] : "";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>名前画数チェック</span></nav>
      <h1 className="text-2xl font-bold mb-2">名前の画数チェック（姓名判断風）</h1>
      <p className="text-muted mb-8">名前を入力すると推定画数と運勢を表示。※エンタメ目的で正確な画数計算ではありません。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">名前（漢字）</label><input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="山田太郎" className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        {name && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">推定総画数</div><div className="text-2xl font-bold">{strokes}画</div></div>
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">運勢</div><div className="text-2xl font-bold text-primary">{luck}</div></div>
          </div>
        )}
        <p className="text-xs text-muted mt-2">※ エンタメ目的の簡易版です。正確な姓名判断は専門サイトをご利用ください。</p>
      </div>
      <ToolFAQSection
        toolName="名前画数チェック"
        howTo={[
          "名前を入力（漢字・ひらがな・カタカナ可）",
          "推定総画数と運勢（大吉〜末吉）が表示",
          "飲み会・コミュニケーションの話題作りに",
          "本格的な姓名判断は専門家に依頼を",
        ]}
        faqs={[
          {
            question: "姓名判断の5大格とは？",
            answer: "天格（姓）・人格（姓の下＋名の上）・地格（名）・外格（姓の上＋名の下）・総格（全画数）の5つ。それぞれ人生の異なる面を表す、総格は晩年運・人格は主運として重視。画数は吉数（5・7・8・11・15・16・17・21・24・31・32・33・35・37・39・41・47・48画）、凶数は4・9・10・12・14・19・20・22等があります。",
          },
          {
            question: "赤ちゃん命名の姓名判断は？",
            answer: "命名サイト（赤ちゃん命名辞典・パパママ命名）で無料診断可能。姓との相性・音・漢字の意味・画数のすべてを考慮、名前候補10〜20個リストアップ→姓名判断で絞り込むのが定石。ただし姓名判断結果だけで決めず、読みやすさ・呼びやすさ・書きやすさも大切です。",
          },
          {
            question: "結婚・改名で運勢変わる？",
            answer: "姓名判断上は変わる（姓が変わるため総格が変化）。結婚後の姓で再度姓名判断、改善されていれば運気UP期待。改名は戸籍上のハードル高いため、通称使用・芸名活用も選択肢。姓名判断を重視するなら、結婚前の相性診断も重要な要素として検討されることがあります。",
          },
          {
            question: "姓名判断は本当に当たる？",
            answer: "統計的・科学的根拠はない。ただし「自分の名前」への意識が行動・自己暗示を通じて人生に影響する可能性はある。ビジネスで使う名前（会社名・屋号・芸名）は姓名判断で良い画数を選ぶことで自己暗示効果＋覚えやすさを確保、マーケティング視点でも一定の意味を持ちます。",
          },
        ]}
      />
      <AffiliateSection slug="name-counter" category="日常ツール" />
      <RelatedTools currentSlug="name-counter" category="日常ツール" />
    </div>
  );
}
