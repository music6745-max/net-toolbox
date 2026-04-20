"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";
import { ToolFAQSection } from "@/components/ToolFAQSection";

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
      <ToolFAQSection
        toolName="犬猫の年齢換算"
        howTo={[
          "ペットの種類を選ぶ（小型犬・中型犬・大型犬・猫）",
          "現在のペットの年齢（歳）を入力する",
          "人間年齢への換算値が自動計算される",
          "ペットの健康管理・食事・運動量の参考にする",
        ]}
        faqs={[
          {
            question: "犬猫の平均寿命は？",
            answer: "犬の平均寿命：小型犬14〜16歳、中型犬13〜15歳、大型犬10〜12歳（体が大きいほど短命）。猫の平均寿命：完全室内飼い15〜20歳、外出OK11〜12歳。獣医療・栄養の進歩で20年前より2〜3年伸びている傾向、長寿犬猫の記録は犬29歳・猫38歳です。",
          },
          {
            question: "シニア期はいつから？",
            answer: "小型犬・猫：7歳〜（人間44〜56歳相当）、大型犬：6歳〜（人間42〜56歳相当）。シニア期は白内障・関節炎・腎臓病等のリスク上昇、年1〜2回の健康診断推奨。シニア用フード切替、運動量調整、寝床の見直し等、QOL維持の工夫が必要になります。",
          },
          {
            question: "ペットの医療費目安は？",
            answer: "年間医療費平均：犬5〜10万円・猫3〜7万円。重病（手術・がん治療等）：30〜100万円も。ペット保険加入率は10%前後、年保険料1〜5万円で7割補償が標準。若い時期からの加入推奨、10歳超だと加入制限・保険料高騰あり。保険マンモス等で比較検討がおすすめです。",
          },
          {
            question: "人間年齢との違いを知る意味は？",
            answer: "ペットは人間の5〜7倍のスピードで年を取るため、シニア期の健康管理が早く必要。5歳犬（人間36歳相当）、10歳犬（人間56歳相当）、15歳犬（人間76歳相当）。この認識で定期健診・食事管理・運動量調整を計画的に、長寿＆健康QOL維持に役立ちます。",
          },
        ]}
      />
      <AffiliateSection slug="dog-cat-age" category="日常ツール" />
      <RelatedTools currentSlug="dog-cat-age" category="日常ツール" />
    </div>
  );
}
