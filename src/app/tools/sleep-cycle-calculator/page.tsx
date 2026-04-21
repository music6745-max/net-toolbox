"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [wakeTime, setWakeTime] = useState("07:00");

  const cycles = [3, 4, 5, 6];
  const calc = () => {
    const [h, m] = wakeTime.split(":").map(Number);
    if (isNaN(h) || isNaN(m)) return [];
    return cycles.map(c => {
      let total = h * 60 + m - c * 90 - 14; // 14 min to fall asleep
      while (total < 0) total += 24 * 60;
      const hh = Math.floor(total / 60) % 24;
      const mm = total % 60;
      return { c, time: `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}` };
    });
  };
  const result = calc();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>睡眠サイクル計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">睡眠サイクル計算ツール</h1>
      <p className="text-muted mb-8">起床時刻から逆算して、睡眠サイクル(90分)に合わせた最適な就寝時刻を提示。すっきり目覚めるための1本。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <label className="block text-sm font-medium mb-2">起床時刻</label>
        <input type="time" value={wakeTime} onChange={e => setWakeTime(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" />
        <div className="mt-6 space-y-2">
          {result.map(r => (
            <div key={r.c} className="flex justify-between bg-background rounded-lg p-3 text-sm">
              <span>{r.c}サイクル ({r.c * 1.5}時間睡眠)</span>
              <span className="font-bold text-primary">{r.time} 就寝</span>
            </div>
          ))}
        </div>
      </div>
      <ToolFAQSection
        toolName="睡眠サイクル計算"
        howTo={[
          "起床したい時刻を入力",
          "睡眠サイクル（90分）に合わせた最適な就寝時刻が4つ提示される",
          "スマホアラーム等でその時刻に就寝",
          "浅い眠りの時に起きることで、すっきり目覚められる",
        ]}
        faqs={[
          {
            question: "なぜ90分サイクルなの？",
            answer: "人間の睡眠は90分周期で浅い眠り（レム睡眠）と深い眠り（ノンレム睡眠）を繰り返す生理現象。90分の倍数で起床すると、浅い眠りの段階で覚醒するため自然に目覚められる。ノンレム睡眠中に目覚めると、日中の眠気・倦怠感が強くなるため、90分単位の睡眠時間設計が合理的です。",
          },
          {
            question: "何サイクルが理想？",
            answer: "成人は5〜6サイクル（7.5〜9時間）が理想。年齢別目安：新生児16〜18時間、幼児10〜13時間、小学生9〜11時間、中高生8〜10時間、成人7〜9時間、高齢者6〜8時間。6時間以下の慢性不足は、糖尿病・うつ・認知症リスク30%以上増加のリスクあります。",
          },
          {
            question: "入眠時間の14分は必要？",
            answer: "健康な成人は平均14〜20分で入眠。ストレス・カフェイン・スマホ使用後は30分以上かかる場合も。就寝前2時間のブルーライトカット、カフェイン午後3時以降避ける、就寝前の軽いストレッチで入眠時間短縮できます。",
          },
          {
            question: "質の良い睡眠のコツは？",
            answer: "①就寝・起床時刻を毎日同じに（体内時計安定）②寝室温度18〜22℃・湿度50〜60%③就寝1時間前から照明暗く④スマホ・PC使用停止（ブルーライト）⑤カフェイン午後3時以降避ける⑥有酸素運動30分/日⑦寝具投資（マットレス・枕）。これで睡眠の質が劇的に向上します。",
          },
        ]}
      />
      <AffiliateSection slug="sleep-cycle-calculator" category="日常ツール" />
      <RelatedTools currentSlug="sleep-cycle-calculator" category="日常ツール" />
    </div>
  );
}
