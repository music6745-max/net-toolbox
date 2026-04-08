"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

type Plan = "flat" | "tod" | "all_electric";

export default function Page() {
  const [plan, setPlan] = useState<Plan>("flat");
  const [total, setTotal] = useState("400");
  const [nightRatio, setNightRatio] = useState("40");

  const t = Math.max(0, parseFloat(total) || 0);
  const nr = Math.max(0, Math.min(100, parseFloat(nightRatio) || 0)) / 100;
  const day = t * (1 - nr);
  const night = t * nr;

  // 簡易料金モデル（円/kWh + 基本料金）
  const calc = (p: Plan): { base: number; cost: number; label: string } => {
    if (p === "flat") {
      // 従量電灯B相当: 段階制 ~30円/kWh平均
      const base = 1200;
      const cost = base + t * 30;
      return { base, cost, label: "従量電灯（標準）" };
    }
    if (p === "tod") {
      // 時間帯別: 昼35円 / 夜22円
      const base = 1500;
      const cost = base + day * 35 + night * 22;
      return { base, cost, label: "時間帯別（昼夜）" };
    }
    // オール電化: 昼38 / 夜18
    const base = 1800;
    const cost = base + day * 38 + night * 18;
    return { base, cost, label: "オール電化" };
  };

  const flat = calc("flat");
  const tod = calc("tod");
  const ae = calc("all_electric");
  const current = calc(plan);
  const cheapest = [flat, tod, ae].sort((a, b) => a.cost - b.cost)[0];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>電気料金プラン比較シミュレーター</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">電気料金プラン比較シミュレーター</h1>
      <p className="text-muted mb-8">月間使用量と昼夜の使用比率から、従量電灯・時間帯別・オール電化プランの月額を比較します。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">現在のプラン</label>
            <select value={plan} onChange={e => setPlan(e.target.value as Plan)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-background">
              <option value="flat">従量電灯（標準プラン）</option>
              <option value="tod">時間帯別プラン（昼夜別）</option>
              <option value="all_electric">オール電化プラン</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">月間使用量（kWh）</label>
            <input type="number" min="0" value={total} onChange={e => setTotal(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <p className="text-xs text-muted mt-1">目安: 一人暮らし200／二人350／4人家族450kWh</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">夜間（23時〜7時）の使用比率（%）</label>
            <input type="number" min="0" max="100" value={nightRatio} onChange={e => setNightRatio(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {[flat, tod, ae].map((p) => (
            <div key={p.label} className={`rounded-lg p-4 text-center ${p.label === cheapest.label ? "bg-primary/10 border border-primary/30" : "bg-background"}`}>
              <div className="text-xs text-muted mb-1">{p.label}</div>
              <div className={`text-xl font-bold ${p.label === cheapest.label ? "text-primary" : ""}`}>¥{Math.round(p.cost).toLocaleString()}</div>
              {p.label === cheapest.label && <div className="text-[10px] text-primary mt-1">最安</div>}
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-muted">
          現在のプラン（{current.label}）の月額: ¥{Math.round(current.cost).toLocaleString()} / 年間: ¥{Math.round(current.cost * 12).toLocaleString()}
        </div>
      </div>

      <section className="mt-8">
        <Link href="/guide/electric-company-comparison" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">電力会社おすすめ5選を比較</div>
          <p className="text-xs text-muted">新電力・大手電力の料金プラン・特典・切替方法をまとめて比較 →</p>
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>月間使用量と夜間使用比率を入力すると、3つの代表的プランの月額を比較します。料金は業界平均に基づく概算で、実際の料金は契約電力会社・地域・季節により異なります。</p>
        </div>
      </section>

      <AffiliateSection slug="electricity-rate-simulator" category="日常ツール" />
      <RelatedTools currentSlug="electricity-rate-simulator" category="日常ツール" />
    </div>
  );
}
