"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function RentSplitPage() {
  const [total, setTotal] = useState(10000);
  const [people, setPeople] = useState(3);

  const perPerson = Math.ceil(total / people);
  const remainder = total - perPerson * (people - 1);
  const lastPerson = total - perPerson * (people - 1);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>割り勘計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">割り勘計算ツール</h1>
      <p className="text-muted mb-8">金額と人数で均等割り。端数の処理も自動で行います。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">合計金額（円）</label>
            <input type="number" value={total} onChange={(e) => setTotal(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">人数</label>
            <input type="number" min={1} value={people} onChange={(e) => setPeople(Math.max(1, Number(e.target.value)))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">¥{perPerson.toLocaleString()}</div>
            <div className="text-xs text-muted mt-1">1人あたり</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">¥{(total % people === 0 ? 0 : perPerson * people - total).toLocaleString()}</div>
            <div className="text-xs text-muted mt-1">端数（多く集まる額）</div>
          </div>
          <div className="bg-background rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">¥{total.toLocaleString()}</div>
            <div className="text-xs text-muted mt-1">合計金額</div>
          </div>
        </div>
        {total % people !== 0 && (
          <p className="text-sm text-muted text-center">※ 割り切れないため、{people - 1}人が¥{perPerson.toLocaleString()}、1人が¥{lastPerson.toLocaleString()}を支払うと丁度になります。</p>
        )}
      </div>
      <ToolFAQSection
        toolName="割り勘計算"
        howTo={[
          "合計金額を入力",
          "人数を入力",
          "1人あたりの金額が自動計算",
          "端数は最後の1人が調整、指示も自動表示",
        ]}
        faqs={[
          {
            question: "端数の分担方法は？",
            answer: "端数は幹事が多く払う、全員で1円単位で割り勘、四捨五入で100円単位等の方法あり。このツールは「端数を1人が多く払う」方式。公平性重視なら全員100円単位で切り上げ、手軽さ重視ならPayPay等のキャッシュレス決済で1円単位送金、最近のスタンダード方法になっています。",
          },
          {
            question: "キャッシュレス割り勘のコツは？",
            answer: "PayPay送る：手数料無料、即時送金、QRコード読取で簡単。LINE Pay：LINEユーザー同士で送金、手数料無料。ゆうちょペイ：銀行振込より安い。PayPay「かんたん送金」「集金機能」は幹事がまとめて集金する便利機能、飲み会・送別会の支払いは全てキャッシュレスが主流に。",
          },
          {
            question: "幹事は自分多めに払うべき？",
            answer: "完全平等でも問題ないが、幹事の労力（予約・出欠確認・店の選定・会計）に対する感謝として、他メンバーが100〜500円ずつ多めに払う習慣もあり。逆に幹事が「端数丸めて全員同額にする」のも好印象。事前に集金方式（割り勘・定額・多め負担）を決めておくのがスムーズ運営のコツです。",
          },
          {
            question: "割り勘アプリのおすすめは？",
            answer: "PayPay（キャッシュレス＋送金）、Splitwise（多人数グループでの精算記録）、LINE Pay、Kyash、paymo by AnyPay（2026年時点対応）。旅行・合宿の複数回立替は精算アプリが便利、最終日にまとめて1回送金で完結、誰がいくら立て替えたかを全員で共有できます。",
          },
        ]}
      />
      <AffiliateSection slug="rent-split" category="日常ツール" />
      <RelatedTools currentSlug="rent-split" category="日常ツール" />
    </div>
  );
}
