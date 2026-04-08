"use client";
import { useState } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

interface Child { age: string; }

export default function Page() {
  const [children, setChildren] = useState<Child[]>([{ age: "3" }, { age: "7" }]);

  // 2024年10月拡充後: 0-3歳未満=15,000円、3歳-高校生=10,000円、第3子以降=30,000円（高校生まで）
  const calcMonthly = () => {
    const ages = children.map(c => parseInt(c.age)).filter(a => !isNaN(a) && a >= 0 && a <= 18);
    // 多子カウント：第1子から順に数え、第3子以降は30000
    let total = 0;
    ages.sort((a, b) => b - a); // 年長から
    ages.forEach((age, idx) => {
      const order = idx + 1;
      if (order >= 3) {
        total += 30000;
      } else if (age < 3) {
        total += 15000;
      } else {
        total += 10000;
      }
    });
    return total;
  };

  const monthly = calcMonthly();
  const yearly = monthly * 12;
  // 総受給額：各子が18歳年度末まで受給する概算
  const totalLifetime = children.reduce((sum, c) => {
    const age = parseInt(c.age);
    if (isNaN(age) || age > 18) return sum;
    const yearsLeft = Math.max(0, 18 - age);
    let months = 0;
    // 簡易：年齢別月額合計
    for (let y = age; y < 18; y++) {
      if (y < 3) months += 15000 * 12;
      else months += 10000 * 12;
    }
    return sum + months;
  }, 0);

  const updateChild = (i: number, age: string) => {
    const next = [...children];
    next[i] = { age };
    setChildren(next);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>児童手当受給額シミュレーター</span></nav>
      <h1 className="text-2xl font-bold mb-2">児童手当受給額シミュレーター</h1>
      <p className="text-muted mb-8">子供の年齢・人数から児童手当の月額・年額・累計受給額を試算します（2024年10月拡充後の制度に対応・所得制限は撤廃されました）。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-4">
          {children.map((c, i) => (
            <div key={i} className="flex gap-3 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">第{i + 1}子の年齢（歳）</label>
                <input type="number" value={c.age} onChange={e => updateChild(i, e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              {children.length > 1 && (
                <button onClick={() => setChildren(children.filter((_, idx) => idx !== i))} className="px-3 py-3 text-sm border border-card-border rounded-lg hover:bg-background">削除</button>
              )}
            </div>
          ))}
          <button onClick={() => setChildren([...children, { age: "0" }])} className="text-sm text-primary hover:underline">＋ 子供を追加</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-primary/10 rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">月額合計</div><div className="text-xl font-bold text-primary">¥{monthly.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">年額合計</div><div className="text-xl font-bold">¥{yearly.toLocaleString()}</div></div>
          <div className="bg-background rounded-lg p-4 text-center"><div className="text-xs text-muted mb-1">18歳までの累計（概算）</div><div className="text-xl font-bold">¥{totalLifetime.toLocaleString()}</div></div>
        </div>
        <p className="text-xs text-muted mt-4">※ 2024年10月から所得制限撤廃・高校生年代まで拡充・第3子以降は月3万円。自治体により細部が異なる場合があります。</p>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">生命保険・学資保険比較</span>
            <p className="text-xs text-muted mt-1">子育て世帯の備え</p>
          </Link>
          <Link href="/guide/babysitter-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ベビーシッター比較</span>
            <p className="text-xs text-muted mt-1">育児サポート選び</p>
          </Link>
        </div>
      </section>

      <AffiliateSection slug="child-allowance-simulator" category="日常ツール" />
      <RelatedTools currentSlug="child-allowance-simulator" category="日常ツール" />
    </div>
  );
}
