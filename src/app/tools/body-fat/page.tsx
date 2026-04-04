"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [height, setHeight] = useState("170");
  const [weight, setWeight] = useState("65");
  const [age, setAge] = useState("30");
  const [gender, setGender] = useState("male");
  const h = parseFloat(height)/100 || 1.7;
  const w = parseFloat(weight) || 65;
  const bmi = w / (h * h);
  const bf = gender === "male" ? 1.2 * bmi + 0.23 * (parseInt(age)||30) - 16.2 : 1.2 * bmi + 0.23 * (parseInt(age)||30) - 5.4;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>体脂肪率計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">体脂肪率計算ツール</h1>
      <p className="text-muted mb-8">身長・体重・年齢・性別からBMI法で体脂肪率を推定。健康管理に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-2">身長(cm)</label><input type="number" value={height} onChange={e=>setHeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div><label className="block text-sm font-medium mb-2">体重(kg)</label><input type="number" value={weight} onChange={e=>setWeight(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div><label className="block text-sm font-medium mb-2">年齢</label><input type="number" value={age} onChange={e=>setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" /></div>
            <div><label className="block text-sm font-medium mb-2">性別</label><select value={gender} onChange={e=>setGender(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"><option value="male">男性</option><option value="female">女性</option></select></div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">BMI</div><div className="text-xl font-bold">{bmi.toFixed(1)}</div></div>
            <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">推定体脂肪率</div><div className="text-xl font-bold text-primary">{bf.toFixed(1)}%</div></div>
          </div>
          <p className="text-xs text-muted mt-2">※BMI法による推定値です。正確な測定には体組成計をご使用ください。</p>
        </div>
      </div>
      <section className="mt-10"><h2 className="text-lg font-bold mb-3">使い方</h2><div className="text-sm text-muted space-y-2"><p>身長・体重・年齢・性別からBMI法で体脂肪率を推定。健康管理に。</p></div></section>
      <RelatedTools currentSlug="body-fat" category="日常ツール" />
    </div>
  );
}