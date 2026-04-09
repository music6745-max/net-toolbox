"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

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
      <AffiliateSection slug="heart-lung-age" category="日常ツール" />
      <RelatedTools currentSlug="heart-lung-age" category="日常ツール" />
    </div>
  );
}
