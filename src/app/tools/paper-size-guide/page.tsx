"use client";
import Link from "next/link";
import { AffiliateSection } from "@/components/AffiliateSection";
import { RelatedTools } from "@/components/RelatedTools";

const sizes = [
  { name: "A0", w: 841, h: 1189, use: "ポスター・掲示" },
  { name: "A1", w: 594, h: 841, use: "ポスター・図面" },
  { name: "A2", w: 420, h: 594, use: "ポスター・図面" },
  { name: "A3", w: 297, h: 420, use: "プレゼン資料" },
  { name: "A4", w: 210, h: 297, use: "一般文書・印刷" },
  { name: "A5", w: 148, h: 210, use: "手帳・書籍" },
  { name: "A6", w: 105, h: 148, use: "はがき・メモ" },
  { name: "B0", w: 1030, h: 1456, use: "大判ポスター" },
  { name: "B1", w: 728, h: 1030, use: "ポスター" },
  { name: "B2", w: 515, h: 728, use: "ポスター" },
  { name: "B3", w: 364, h: 515, use: "チラシ" },
  { name: "B4", w: 257, h: 364, use: "チラシ・新聞折込" },
  { name: "B5", w: 182, h: 257, use: "雑誌・教科書" },
  { name: "B6", w: 128, h: 182, use: "文庫本" },
  { name: "はがき", w: 100, h: 148, use: "年賀状・暑中見舞い" },
  { name: "名刺", w: 55, h: 91, use: "ビジネス名刺" },
  { name: "L判", w: 89, h: 127, use: "写真印刷" },
];

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>用紙サイズ一覧</span></nav>
      <h1 className="text-2xl font-bold mb-2">用紙サイズ一覧（A判/B判/はがき/名刺）</h1>
      <p className="text-muted mb-8">A判・B判の用紙サイズをmm単位で一覧表示。印刷・デザインの参考に。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-card-border"><th className="text-left py-2 px-3">サイズ</th><th className="text-right py-2 px-3">幅(mm)</th><th className="text-right py-2 px-3">高さ(mm)</th><th className="text-left py-2 px-3">用途</th></tr></thead>
            <tbody>
              {sizes.map(s => (
                <tr key={s.name} className="border-b border-card-border/50 hover:bg-primary/5">
                  <td className="py-2 px-3 font-bold">{s.name}</td>
                  <td className="py-2 px-3 text-right">{s.w}</td>
                  <td className="py-2 px-3 text-right">{s.h}</td>
                  <td className="py-2 px-3 text-muted">{s.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AffiliateSection slug="paper-size-guide" category="日常ツール" />
      <RelatedTools currentSlug="paper-size-guide" category="日常ツール" />
    </div>
  );
}
