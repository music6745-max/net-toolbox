"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [pet, setPet] = useState("dog-small");
  const [age, setAge] = useState("5");

  const a = parseFloat(age) || 0;
  let humanAge = 0;
  if (pet === "dog-small") {
    humanAge = a <= 1 ? a * 15 : 24 + (a - 2) * 4;
  } else if (pet === "dog-large") {
    humanAge = a <= 1 ? a * 12 : 20 + (a - 2) * 7;
  } else {
    humanAge = a <= 1 ? a * 15 : 24 + (a - 2) * 4;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>犬猫の年齢換算</span></nav>
      <h1 className="text-2xl font-bold mb-2">犬・猫の年齢を人間年齢に換算</h1>
      <p className="text-muted mb-8">ペットの年齢を人間の年齢に換算。種類別に計算します。ペットの健康管理の参考に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div><label className="block text-sm font-medium mb-2">ペットの種類</label>
          <select value={pet} onChange={e => setPet(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="dog-small">小型犬・中型犬</option>
            <option value="dog-large">大型犬</option>
            <option value="cat">猫</option>
          </select>
        </div>
        <div><label className="block text-sm font-medium mb-2">ペットの年齢(歳)</label><input type="number" step="0.1" value={age} onChange={e => setAge(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
        <div className="bg-primary/10 rounded-lg p-6 text-center mt-4">
          <div className="text-xs text-muted mb-1">人間の年齢で約</div>
          <div className="text-3xl font-bold text-primary">{Math.round(humanAge)}歳</div>
        </div>
      </div>
      <AffiliateSection slug="dog-cat-age" category="日常ツール" />
      <RelatedTools currentSlug="dog-cat-age" category="日常ツール" />
    </div>
  );
}
