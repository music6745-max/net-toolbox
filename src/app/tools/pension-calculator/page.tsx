"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

export default function Page() {
  const [pensionType, setPensionType] = useState("employee");
  const [years, setYears] = useState("40");
  const [salary, setSalary] = useState("500");

  const y = Math.min(parseFloat(years) || 0, 40);
  const s = parseFloat(salary) || 0;

  const nationalPensionYearly = Math.round(816000 * (y / 40));
  const nationalPensionMonthly = Math.round(nationalPensionYearly / 12);

  const employeePensionYearly = pensionType === "employee" ? Math.round(s * 10000 * 0.005481 * y) : 0;
  const employeePensionMonthly = Math.round(employeePensionYearly / 12);

  const totalYearly = nationalPensionYearly + employeePensionYearly;
  const totalMonthly = Math.round(totalYearly / 12);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>年金受給額シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">年金受給額シミュレーター</h1>
      <p className="text-muted mb-8">将来の年金受給額を概算。国民年金と厚生年金の目安を計算します。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">加入種別</label>
          <select value={pensionType} onChange={e => setPensionType(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-card-bg">
            <option value="employee">会社員(厚生年金)</option>
            <option value="self">自営業(国民年金のみ)</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-sm font-medium mb-2">加入期間(年)</label><input type="number" value={years} onChange={e => setYears(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          {pensionType === "employee" && (
            <div><label className="block text-sm font-medium mb-2">平均年収(万円)</label><input type="number" value={salary} onChange={e => setSalary(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm" /></div>
          )}
        </div>
        <div className="space-y-3 mt-4">
          <div className="bg-background rounded-lg p-4">
            <div className="text-xs text-muted mb-1">国民年金</div>
            <div className="flex justify-between items-center">
              <div><span className="text-lg font-bold">¥{nationalPensionYearly.toLocaleString()}</span><span className="text-sm text-muted">/年</span></div>
              <div><span className="text-lg font-bold">¥{nationalPensionMonthly.toLocaleString()}</span><span className="text-sm text-muted">/月</span></div>
            </div>
          </div>
          {pensionType === "employee" && (
            <div className="bg-background rounded-lg p-4">
              <div className="text-xs text-muted mb-1">厚生年金</div>
              <div className="flex justify-between items-center">
                <div><span className="text-lg font-bold">¥{employeePensionYearly.toLocaleString()}</span><span className="text-sm text-muted">/年</span></div>
                <div><span className="text-lg font-bold">¥{employeePensionMonthly.toLocaleString()}</span><span className="text-sm text-muted">/月</span></div>
              </div>
            </div>
          )}
          <div className="bg-primary/10 rounded-lg p-4">
            <div className="text-xs text-muted mb-1">合計</div>
            <div className="flex justify-between items-center">
              <div><span className="text-xl font-bold text-primary">¥{totalYearly.toLocaleString()}</span><span className="text-sm text-muted">/年</span></div>
              <div><span className="text-xl font-bold text-primary">¥{totalMonthly.toLocaleString()}</span><span className="text-sm text-muted">/月</span></div>
            </div>
          </div>
        </div>
        <p className="text-xs text-muted mt-2">※ 概算値です。実際の金額は条件により異なります。</p>
      </div>
      <AffiliateSection slug="pension-calculator" category="日常ツール" />
      <RelatedTools currentSlug="pension-calculator" category="日常ツール" />
    </div>
  );
}
