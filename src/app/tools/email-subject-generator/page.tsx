"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [topic, setTopic] = useState("新商品のご案内");
  const [type, setType] = useState("business");

  const templates: Record<string, string[]> = {
    business: [
      `【ご案内】${topic}のお知らせ`,
      `${topic}について`,
      `【重要】${topic}に関するご連絡`,
      `${topic}のご確認をお願いいたします`,
      `【お知らせ】${topic}`,
    ],
    marketing: [
      `【限定】${topic}｜今だけ特別価格`,
      `${topic}で〇〇が変わる！`,
      `見逃し厳禁！${topic}`,
      `【無料】${topic}ウェビナー開催`,
      `${topic}の最新情報をお届け`,
    ],
    followup: [
      `先日の${topic}について`,
      `${topic}のフォローアップ`,
      `${topic}の進捗ご報告`,
      `【再送】${topic}のご確認`,
      `${topic}に関する追加情報`,
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>メール件名ジェネレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">ビジネスメール件名ジェネレーター</h1>
      <p className="text-muted mb-8">トピックと目的を入力すると、ビジネスメールの件名候補を自動生成。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">トピック・キーワード</label><input type="text" value={topic} onChange={e => setTopic(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">メールの目的</label>
          <select value={type} onChange={e => setType(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="business">ビジネス連絡</option>
            <option value="marketing">マーケティング</option>
            <option value="followup">フォローアップ</option>
          </select>
        </div>
        <div className="mt-4 space-y-2">
          {(templates[type] || []).map((t, i) => (
            <div key={i} className="flex items-center justify-between bg-background rounded-lg p-3 text-sm">
              <span>{t}</span>
              <button onClick={() => navigator.clipboard.writeText(t)} className="text-xs text-primary hover:underline ml-2">コピー</button>
            </div>
          ))}
        </div>
      </div>
      <AffiliateSection slug="email-subject-generator" category="テキストツール" />
      <RelatedTools currentSlug="email-subject-generator" category="テキストツール" />
    </div>
  );
}
