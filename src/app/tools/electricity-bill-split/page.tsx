"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [total, setTotal] = useState("15000");
  const [people, setPeople] = useState("3");
  const [rooms, setRooms] = useState([
    { name: "部屋A", sqm: 8 },
    { name: "部屋B", sqm: 6 },
    { name: "部屋C", sqm: 5 },
  ]);

  const t = parseFloat(total) || 0;
  const totalSqm = rooms.reduce((s, r) => s + r.sqm, 0);
  const commonRatio = 0.4;
  const roomRatio = 0.6;
  const commonPerPerson = (t * commonRatio) / rooms.length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>光熱費按分計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">シェアハウス光熱費按分計算</h1>
      <p className="text-muted mb-8">光熱費を部屋の広さで按分計算。シェアハウス・ルームシェアの公平な負担額に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">光熱費合計(円)</label><input type="number" value={total} onChange={e => setTotal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="space-y-2">
          {rooms.map((r, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input type="text" value={r.name} onChange={e => { const n = [...rooms]; n[i] = {...n[i], name: e.target.value}; setRooms(n); }} className="flex-1 border border-card-border rounded-lg px-3 py-2 text-sm" />
              <input type="number" value={r.sqm} onChange={e => { const n = [...rooms]; n[i] = {...n[i], sqm: parseFloat(e.target.value)||0}; setRooms(n); }} className="w-20 border border-card-border rounded-lg px-3 py-2 text-sm text-right" />
              <span className="text-xs text-muted">畳</span>
            </div>
          ))}
          <button onClick={() => setRooms([...rooms, {name: `部屋${String.fromCharCode(65+rooms.length)}`, sqm: 6}])} className="text-sm text-primary hover:underline">+ 部屋を追加</button>
        </div>
        <div className="mt-4 space-y-2">
          {rooms.map(r => {
            const roomShare = totalSqm > 0 ? (t * roomRatio) * (r.sqm / totalSqm) : 0;
            const total = commonPerPerson + roomShare;
            return (
              <div key={r.name} className="flex justify-between bg-background rounded-lg p-3 text-sm">
                <span>{r.name} ({r.sqm}畳)</span>
                <span className="font-bold">¥{Math.round(total).toLocaleString()}</span>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-muted">※ 共用部分40% + 部屋面積比60%で按分</p>
      </div>
      <ToolFAQSection
        toolName="光熱費按分計算"
        howTo={[
          "光熱費合計（円）を入力",
          "各部屋の名前と面積（畳）を入力、追加・削除も可",
          "共用40%＋部屋面積60%の按分比で自動計算",
          "各部屋の公平な負担額が表示、シェアハウス・ルームシェアに活用",
        ]}
        faqs={[
          {
            question: "シェアハウスの光熱費按分ルールは？",
            answer: "一般的な方法：①完全均等割（人数割り、シンプル）②部屋面積比（大きい部屋が多く払う）③使用量ベース（各自メーター付き）④共用＋部屋面積比（本ツール方式、最も公平）。シェアハウス運営会社（オークハウス等）は共用込みの家賃一律が多く、個人運営は按分計算が必要です。",
          },
          {
            question: "電気代の相場は？",
            answer: "シェアハウス5人・100㎡で月2〜3万円（夏冬4〜5万円）、1人あたり4,000〜10,000円。エアコン・冷蔵庫・電子レンジ・洗濯機等の共用家電が大きな割合。節電意識（エアコン温度・待機電力）で年数万円削減可能、新電力乗換え（Looopでんき・楽天でんき）で10〜15%削減も現実的です。",
          },
          {
            question: "ガス代・水道代の按分は？",
            answer: "電気代と同じ考え方で按分可能。ガス代：料理頻度で差が出る（キッチン使用時間比で追加按分も可）。水道代：シャワー時間・洗濯頻度で差、単純な均等割りでも問題少なめ。月額料金の固定部分（基本料金）は均等割り、従量部分は使用量or面積比の按分が公平です。",
          },
          {
            question: "契約者は誰が良い？",
            answer: "シェアハウス代表者（家主・管理人）が契約、光熱費を集金する方式が一般的。代表者は責任と手間はあるが、基本料金の割引（家族料金プラン）適用可能。メンバー全員で契約者を交代する方式も、退去時の手続きも代表者の役割、明確な役割分担が重要です。",
          },
        ]}
      />
      <AffiliateSection slug="electricity-bill-split" category="日常ツール" />
      <RelatedTools currentSlug="electricity-bill-split" category="日常ツール" />
    </div>
  );
}
