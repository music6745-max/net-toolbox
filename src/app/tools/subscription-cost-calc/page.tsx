"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [subs, setSubs] = useState([
    { name: "Netflix", cost: 1490 },
    { name: "Spotify", cost: 980 },
    { name: "Amazon Prime", cost: 600 },
    { name: "YouTube Premium", cost: 1280 },
    { name: "Apple iCloud", cost: 400 },
  ]);

  const total = subs.reduce((s, sub) => s + sub.cost, 0);
  const yearly = total * 12;

  const updateSub = (i: number, field: "name" | "cost", value: string) => {
    const next = [...subs];
    if (field === "cost") next[i] = { ...next[i], cost: parseInt(value) || 0 };
    else next[i] = { ...next[i], name: value };
    setSubs(next);
  };
  const addSub = () => setSubs([...subs, { name: "", cost: 0 }]);
  const removeSub = (i: number) => setSubs(subs.filter((_, idx) => idx !== i));

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>サブスク合計計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">サブスク月額合計計算ツール</h1>
      <p className="text-muted mb-8">契約中のサブスクリプションサービスの月額・年間合計を可視化。不要なサブスクの見直しに。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3">
        {subs.map((sub, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input type="text" value={sub.name} onChange={e => updateSub(i, "name", e.target.value)} placeholder="サービス名" className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm" />
            <input type="number" value={sub.cost} onChange={e => updateSub(i, "cost", e.target.value)} className="w-24 border border-card-border rounded-lg px-3 py-2 text-sm text-right" />
            <span className="text-xs text-muted">円/月</span>
            <button onClick={() => removeSub(i)} className="text-red-500 text-xs px-2">×</button>
          </div>
        ))}
        <button onClick={addSub} className="text-sm text-primary hover:underline">+ サービスを追加</button>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-card-border">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月額合計</div><div className="text-2xl font-bold text-primary">¥{total.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年間合計</div><div className="text-xl font-bold">¥{yearly.toLocaleString()}</div></div>
        </div>
      </div>
      <ToolFAQSection
        toolName="サブスク月額合計計算"
        howTo={[
          "契約中のサブスクサービス名と月額料金を入力",
          "「+ サービスを追加」で項目追加、「×」で削除",
          "月額・年間の合計が自動計算",
          "年1回の見直しで無駄なサブスクを発見",
        ]}
        faqs={[
          {
            question: "日本人の平均サブスク支出は？",
            answer: "20〜40代の平均月5,000〜10,000円、年6万〜12万円。動画（Netflix・Amazon Prime・U-NEXT・Disney+）、音楽（Spotify・Apple Music）、電子書籍（Kindle Unlimited・楽天マガジン）、クラウドストレージ（iCloud・Googleドライブ）、その他（Notion・Evernote）。見直しで月3,000〜5,000円の削減が可能です。",
          },
          {
            question: "サブスク見直しのコツは？",
            answer: "①過去3ヶ月使わなかったサービス解約②家族プランで共有（Spotify月1,680円で6人）③年払い選択（月払いより20%割引）④重複サービス整理（Netflix＋Disney+＋U-NEXTの3個は過剰）⑤無料トライアル活用。月5,000円削減→新NISAに回せば30年で550万円の資産差に。",
          },
          {
            question: "家族シェア可能なサブスクは？",
            answer: "①Spotify家族プラン（1,680円・最大6人）②Apple One（1,200円〜・5〜6人）③Netflix（プレミアム2,290円・4台同時視聴）④YouTube Premium家族（2,280円・最大5人）⑤Amazon Prime（年5,900円・家族アカウント1人）⑥Microsoft 365 Family（12,984円/年・6人）。家族で月5,000〜1万円の節約可能。",
          },
          {
            question: "解約忘れの対策は？",
            answer: "①クレカ明細を毎月チェック②サブスク管理アプリ（Truebill・Rocket Money）活用③スプレッドシートで一覧管理④カレンダー通知設定（無料期間終了日・年払い更新日）⑤メルペイ・PayPay等のサブスク管理機能利用。気付かない自動引落は年数万円の損、月1回のチェック習慣が鉄則です。",
          },
        ]}
      />
      <AffiliateSection slug="subscription-cost-calc" category="日常ツール" />
      <RelatedTools currentSlug="subscription-cost-calc" category="日常ツール" />
    </div>
  );
}
