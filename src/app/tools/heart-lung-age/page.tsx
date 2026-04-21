"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function Page() {
  const [walks, setWalks] = useState("30");
  const [sleep, setSleep] = useState("7");
  const [exercise, setExercise] = useState("2");
  const [smoke, setSmoke] = useState("no");
  const [drink, setDrink] = useState("moderate");
  const [age, setAge] = useState("40");

  const a = parseFloat(age) || 0;
  let adjust = 0;
  if (parseFloat(walks) < 20) adjust += 3; else if (parseFloat(walks) > 40) adjust -= 3;
  if (parseFloat(sleep) < 6 || parseFloat(sleep) > 9) adjust += 2; else adjust -= 1;
  if (parseFloat(exercise) < 1) adjust += 3; else if (parseFloat(exercise) > 3) adjust -= 2;
  if (smoke === "yes") adjust += 5;
  if (drink === "heavy") adjust += 3; else if (drink === "none") adjust -= 1;
  const bodyAge = Math.max(18, Math.round(a + adjust));
  const diff = bodyAge - a;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>健康年齢診断</span></nav>
      <h1 className="text-2xl font-bold mb-2">健康年齢簡易診断ツール</h1>
      <p className="text-muted mb-8">生活習慣から「体年齢」を簡易診断。※参考値です。正確な健康診断は医療機関で。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">実年齢</label><input type="number" value={age} onChange={e => setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">1日の歩数(千歩)</label><input type="number" value={walks} onChange={e => setWalks(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">1日の睡眠時間</label><input type="number" step="0.5" value={sleep} onChange={e => setSleep(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">週の運動回数</label><input type="number" value={exercise} onChange={e => setExercise(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div><label className="block text-sm font-medium mb-2">喫煙</label>
          <select value={smoke} onChange={e => setSmoke(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="no">非喫煙</option>
            <option value="yes">喫煙</option>
          </select>
        </div>
        <div><label className="block text-sm font-medium mb-2">飲酒習慣</label>
          <select value={drink} onChange={e => setDrink(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="none">飲まない</option>
            <option value="moderate">適量(週3〜5日程度)</option>
            <option value="heavy">毎日多量</option>
          </select>
        </div>
        <div className="bg-primary/10 rounded-lg p-6 text-center mt-4">
          <div className="text-xs text-muted mb-1">推定体年齢</div>
          <div className="text-3xl font-bold text-primary">{bodyAge}歳</div>
          <div className="text-sm mt-2">実年齢より{diff >= 0 ? `+${diff}` : diff}歳</div>
        </div>
        <p className="text-xs text-muted mt-2">※ 本結果は娯楽目的の簡易診断です。医療的な判断は医師にご相談ください。</p>
      </div>
      <ToolFAQSection
        toolName="健康年齢簡易診断"
        howTo={[
          "実年齢・歩数・睡眠時間・運動回数・喫煙・飲酒習慣を入力",
          "簡易計算による推定体年齢を表示",
          "生活習慣改善のモチベーション参考に",
          "正確な健康年齢は人間ドック・内科で判定",
        ]}
        faqs={[
          {
            question: "体年齢を若返らせる方法は？",
            answer: "①毎日8000歩以上歩く（-3歳効果）②睡眠7〜8時間（-1歳）③週3回以上の運動（-2歳）④禁煙（-5歳）⑤節度ある飲酒（-1歳）⑥バランスの良い食事⑦ストレス管理。生活習慣の全面改善で体年齢-10歳も可能、3ヶ月で体調改善実感、1年で健康診断の数値改善が一般的です。",
          },
          {
            question: "歩数の目標は？",
            answer: "厚労省推奨：成人男性9,200歩・女性8,300歩/日。健康維持なら8,000歩（うち20分以上の早歩き）、生活習慣病予防なら10,000歩が目安。通勤・家事・散歩の合計、スマートウォッチ・スマホアプリで計測。毎日の継続が肝心、毎週末のまとめ歩きより平日コツコツが効果的です。",
          },
          {
            question: "健康寿命を延ばすには？",
            answer: "平均寿命（男81・女87歳）vs 健康寿命（男72・女75歳）で、要介護期間10年前後。健康寿命延伸の4大要因：①運動習慣②食生活③睡眠④社会参加（友人・趣味）。定期健診（年1回）＋予防接種＋適切な治療で、健康寿命+5〜10年の実績あり、人生の質大幅向上します。",
          },
          {
            question: "おすすめの健康アプリは？",
            answer: "①FiNC（歩数・食事・体重統合管理）②Apple Health・Google Fit（OS標準）③あすけん（食事管理・カロリー計算）④Sleep Cycle（睡眠計測）⑤Runkeeper（ランニング記録）。無料版で十分、プレミアム版は月500〜1,500円。複数組合せで健康管理の全体像把握、毎日の記録が習慣化の鍵です。",
          },
        ]}
      />
      <AffiliateSection slug="heart-lung-age" category="日常ツール" />
      <RelatedTools currentSlug="heart-lung-age" category="日常ツール" />
    </div>
  );
}
