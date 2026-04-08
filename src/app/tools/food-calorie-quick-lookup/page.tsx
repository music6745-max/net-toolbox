"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

interface Food { name: string; unit: string; kcal: number; cat: string; }

const FOODS: Food[] = [
  // 主食
  { name: "ごはん", unit: "茶碗1杯(150g)", kcal: 234, cat: "主食" },
  { name: "玄米ごはん", unit: "茶碗1杯(150g)", kcal: 228, cat: "主食" },
  { name: "食パン", unit: "6枚切1枚", kcal: 158, cat: "主食" },
  { name: "クロワッサン", unit: "1個(40g)", kcal: 179, cat: "主食" },
  { name: "うどん(ゆで)", unit: "1玉(230g)", kcal: 242, cat: "主食" },
  { name: "そば(ゆで)", unit: "1玉(170g)", kcal: 224, cat: "主食" },
  { name: "ラーメン", unit: "1杯", kcal: 500, cat: "主食" },
  { name: "パスタ(ゆで)", unit: "1人前(250g)", kcal: 373, cat: "主食" },
  { name: "チャーハン", unit: "1人前", kcal: 700, cat: "主食" },
  { name: "カレーライス", unit: "1人前", kcal: 860, cat: "主食" },
  // 肉
  { name: "鶏むね肉(皮なし)", unit: "100g", kcal: 108, cat: "肉" },
  { name: "鶏もも肉(皮付き)", unit: "100g", kcal: 204, cat: "肉" },
  { name: "豚バラ肉", unit: "100g", kcal: 366, cat: "肉" },
  { name: "豚ロース", unit: "100g", kcal: 263, cat: "肉" },
  { name: "牛バラ肉", unit: "100g", kcal: 371, cat: "肉" },
  { name: "牛もも肉", unit: "100g", kcal: 196, cat: "肉" },
  { name: "ハム", unit: "1枚(15g)", kcal: 18, cat: "肉" },
  { name: "ウインナー", unit: "1本(20g)", kcal: 64, cat: "肉" },
  // 魚
  { name: "鮭", unit: "1切(80g)", kcal: 106, cat: "魚" },
  { name: "マグロ赤身", unit: "刺身5切(75g)", kcal: 94, cat: "魚" },
  { name: "サバ", unit: "1切(80g)", kcal: 202, cat: "魚" },
  { name: "ブリ", unit: "1切(80g)", kcal: 211, cat: "魚" },
  { name: "エビ", unit: "1尾(20g)", kcal: 16, cat: "魚" },
  { name: "ツナ缶(油漬)", unit: "1缶(70g)", kcal: 186, cat: "魚" },
  // 卵・乳
  { name: "卵", unit: "M玉1個(50g)", kcal: 71, cat: "卵・乳" },
  { name: "牛乳", unit: "コップ1杯(200ml)", kcal: 134, cat: "卵・乳" },
  { name: "ヨーグルト(無糖)", unit: "1個(100g)", kcal: 56, cat: "卵・乳" },
  { name: "チーズ(プロセス)", unit: "1個(18g)", kcal: 60, cat: "卵・乳" },
  { name: "バター", unit: "大さじ1(12g)", kcal: 89, cat: "卵・乳" },
  // 野菜
  { name: "キャベツ", unit: "100g", kcal: 21, cat: "野菜" },
  { name: "レタス", unit: "100g", kcal: 11, cat: "野菜" },
  { name: "トマト", unit: "1個(150g)", kcal: 29, cat: "野菜" },
  { name: "きゅうり", unit: "1本(100g)", kcal: 13, cat: "野菜" },
  { name: "にんじん", unit: "1本(150g)", kcal: 53, cat: "野菜" },
  { name: "じゃがいも", unit: "1個(135g)", kcal: 81, cat: "野菜" },
  { name: "さつまいも", unit: "中1本(200g)", kcal: 264, cat: "野菜" },
  { name: "ブロッコリー", unit: "100g", kcal: 37, cat: "野菜" },
  // 果物
  { name: "バナナ", unit: "1本(90g)", kcal: 77, cat: "果物" },
  { name: "りんご", unit: "1個(250g)", kcal: 138, cat: "果物" },
  { name: "みかん", unit: "1個(80g)", kcal: 36, cat: "果物" },
  { name: "いちご", unit: "5粒(75g)", kcal: 25, cat: "果物" },
  // お菓子
  { name: "ポテトチップス", unit: "1袋(60g)", kcal: 331, cat: "お菓子" },
  { name: "チョコレート", unit: "板チョコ1枚(50g)", kcal: 279, cat: "お菓子" },
  { name: "ショートケーキ", unit: "1切(100g)", kcal: 327, cat: "お菓子" },
  { name: "プリン", unit: "1個(80g)", kcal: 101, cat: "お菓子" },
  { name: "アイスクリーム", unit: "1個(110g)", kcal: 200, cat: "お菓子" },
  { name: "どら焼き", unit: "1個(80g)", kcal: 229, cat: "お菓子" },
  // 飲み物
  { name: "ビール", unit: "中瓶1本(500ml)", kcal: 200, cat: "飲み物" },
  { name: "日本酒", unit: "1合(180ml)", kcal: 193, cat: "飲み物" },
  { name: "赤ワイン", unit: "グラス1杯(120ml)", kcal: 88, cat: "飲み物" },
  { name: "オレンジジュース", unit: "200ml", kcal: 84, cat: "飲み物" },
  { name: "コーラ", unit: "350ml", kcal: 160, cat: "飲み物" },
  { name: "カフェラテ", unit: "トール(350ml)", kcal: 140, cat: "飲み物" },
];

export default function Page() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("すべて");

  const cats = ["すべて", ...Array.from(new Set(FOODS.map(f => f.cat)))];

  const filtered = useMemo(() => {
    return FOODS.filter(f =>
      (cat === "すべて" || f.cat === cat) &&
      (query === "" || f.name.includes(query))
    );
  }, [query, cat]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>主要食品カロリー早見表</span></nav>
      <h1 className="text-2xl font-bold mb-2">主要食品カロリー早見表</h1>
      <p className="text-muted mb-8">50品目以上の主要食品のカロリーを検索で素早く確認できます。</p>

      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="space-y-3">
          <input type="search" placeholder="食品名で検索（例：ラーメン）" value={query} onChange={e => setQuery(e.target.value)} className="w-full border border-card-border rounded-lg px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30" />
          <div className="flex flex-wrap gap-2">
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)} className={`px-3 py-1.5 rounded-full text-xs border ${cat === c ? "bg-primary text-white border-primary" : "border-card-border hover:bg-background"}`}>{c}</button>
            ))}
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left py-2 px-2">食品名</th>
                <th className="text-left py-2 px-2">目安量</th>
                <th className="text-right py-2 px-2">カロリー</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(f => (
                <tr key={f.name} className="border-b border-card-border/50">
                  <td className="py-2 px-2 font-medium">{f.name}</td>
                  <td className="py-2 px-2 text-muted">{f.unit}</td>
                  <td className="py-2 px-2 text-right font-bold">{f.kcal} kcal</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={3} className="py-6 text-center text-muted">該当する食品が見つかりません</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/guide/personal-gym-comparison" className="block bg-card-bg border border-card-border rounded-xl p-5 hover:border-primary transition">
          <div className="text-sm text-primary font-semibold mb-1">関連ガイド</div>
          <div className="font-bold">パーソナルジム徹底比較</div>
          <div className="text-xs text-muted mt-1">食事管理と併せて理想のカラダづくりを</div>
        </Link>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold mb-3">使い方</h2>
        <div className="text-sm text-muted space-y-2">
          <p>検索ボックスに食品名を入力するか、カテゴリでフィルタして目安カロリーを確認できます。数値は文部科学省「日本食品標準成分表」等を参考にした概算値です。</p>
        </div>
      </section>

      <AffiliateSection slug="food-calorie-quick-lookup" category="日常ツール" />
      <RelatedTools currentSlug="food-calorie-quick-lookup" category="日常ツール" />
    </div>
  );
}
