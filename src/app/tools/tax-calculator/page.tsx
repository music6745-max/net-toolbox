"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";
import { ToolFAQSection } from "@/components/ToolFAQSection";

export default function TaxCalculatorPage() {
  const [amount, setAmount] = useState(1000);
  const [taxRate, setTaxRate] = useState(10);
  const [mode, setMode] = useState<"exclude" | "include">("exclude");

  const taxIncluded = mode === "exclude" ? amount * (1 + taxRate / 100) : amount;
  const taxExcluded = mode === "include" ? amount / (1 + taxRate / 100) : amount;
  const taxAmount = taxIncluded - taxExcluded;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6"><Link href="/" className="hover:text-primary">トップ</Link><span className="mx-2">/</span><span>消費税計算</span></nav>
      <h1 className="text-2xl font-bold mb-2">消費税計算ツール</h1>
      <p className="text-muted mb-8">税込・税抜価格を即座に計算。8%・10%の軽減税率にも対応。</p>
      <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-4">
        <div className="flex gap-2">
          <button onClick={() => setMode("exclude")} className={`flex-1 py-2 rounded-lg text-sm font-medium ${mode === "exclude" ? "bg-primary text-white" : "bg-background border border-card-border"}`}>税抜→税込</button>
          <button onClick={() => setMode("include")} className={`flex-1 py-2 rounded-lg text-sm font-medium ${mode === "include" ? "bg-primary text-white" : "bg-background border border-card-border"}`}>税込→税抜</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{mode === "exclude" ? "税抜価格" : "税込価格"}（円）</label>
            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full border border-card-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">税率</label>
            <div className="flex gap-2">
              {[8, 10].map((r) => (
                <button key={r} onClick={() => setTaxRate(r)} className={`flex-1 py-2.5 rounded-lg text-sm font-medium ${taxRate === r ? "bg-primary text-white" : "bg-background border border-card-border"}`}>{r}%</button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {[
            { label: "税抜価格", value: `¥${Math.round(taxExcluded).toLocaleString()}` },
            { label: "消費税額", value: `¥${Math.round(taxAmount).toLocaleString()}` },
            { label: "税込価格", value: `¥${Math.round(taxIncluded).toLocaleString()}` },
          ].map((s) => (
            <div key={s.label} className="bg-background rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <ToolFAQSection
        toolName="消費税計算"
        howTo={[
          "「税抜→税込」または「税込→税抜」ボタンで計算モードを選ぶ",
          "金額（円）を入力する",
          "税率（8%軽減税率 or 10%標準税率）を選ぶ",
          "税抜価格・消費税額・税込価格が自動計算される",
        ]}
        faqs={[
          {
            question: "軽減税率8%と標準税率10%の違いは？",
            answer: "軽減税率8%の対象：①飲食料品（酒類・外食を除く）②定期購読契約の新聞（週2回以上発行）。標準税率10%の対象：外食・酒類・その他の商品・サービス全般。例えばコンビニで購入した弁当（イートインは10%、テイクアウトは8%）、ビール（10%）、新聞定期購読（8%）など、購入シーンで区分けが必要です。",
          },
          {
            question: "2026年以降の消費税改定予定は？",
            answer: "2026年4月時点で消費税率は10%（軽減税率8%）のまま変更なし。政府は社会保障財源確保のため「中長期的な引上げ（12〜15%）」を議論中ですが、物価上昇・少子化・経済冷え込みで短期的な引上げは困難視されています。インボイス制度（2023年開始）・電子帳簿保存法の対応が引き続き事業者の優先課題となっています。",
          },
          {
            question: "個人事業主の消費税はいつ発生する？",
            answer: "個人事業主は「前々年の課税売上高が1000万円超」で消費税納税義務発生（翌々年から）。2023年10月のインボイス制度開始で、免税事業者でも「適格請求書発行事業者」登録が実質必須に。登録すると強制的に課税事業者となり、売上の消費税納税が必要。収入200〜1000万円の副業ライター・フリーランスに特に影響大、税理士相談がおすすめです。",
          },
          {
            question: "税込表示と税抜表示どっちが義務？",
            answer: "2021年4月から「税込表示」が義務化（総額表示義務）。全ての小売・サービス業者は税込価格を表示しなければならない（例：「1,100円（税込）」「1,100円」）。税抜価格のみの表示（「1,000円（税抜）」「1,000円＋税」）は違法。ネット販売でも例外なく総額表示が必須、事業者の方は表示切替えを済ませておきましょう。",
          },
        ]}
      />
      <section className="mt-10 bg-gradient-to-br from-primary/5 to-blue-50/50 dark:from-primary/10 dark:to-blue-900/10 border-2 border-primary/30 rounded-xl p-6">
        <h2 className="text-lg font-bold mb-3">💡 消費税の計算だけで終わらせない：専門家に相談する</h2>
        <p className="text-sm text-muted mb-4">
          計算は一瞬でも、インボイス制度・電帳法・青色申告・節税判断は個別事情で大きく変わります。無料で税理士にマッチングし、「自分のケースの最適解」を確認しておくと数十万円単位の節税に繋がります。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="https://toshi-navi.jp/guide/invoice-system-complete-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-lg bg-card-bg border border-card-border hover:border-primary transition-colors"
          >
            <div className="text-xs text-muted mb-1">関連ガイド</div>
            <div className="font-bold text-sm mb-1">インボイス制度完全ガイド 2026</div>
            <div className="text-xs text-muted">適格請求書・2割特例・登録要否の判断基準を解説</div>
          </a>
          <a
            href="https://toshi-navi.jp/guide/denshi-chobo-preservation-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-lg bg-card-bg border border-card-border hover:border-primary transition-colors"
          >
            <div className="text-xs text-muted mb-1">関連ガイド</div>
            <div className="font-bold text-sm mb-1">電子帳簿保存法ガイド</div>
            <div className="text-xs text-muted">2024年本格施行の対応方法・罰則回避</div>
          </a>
          <a
            href="https://toshi-navi.jp/guide/company-expense-rules-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-lg bg-card-bg border border-card-border hover:border-primary transition-colors"
          >
            <div className="text-xs text-muted mb-1">関連ガイド</div>
            <div className="font-bold text-sm mb-1">会社員の経費計上ルール</div>
            <div className="text-xs text-muted">副業経費・特定支出控除で年20〜30万円節税</div>
          </a>
          <a
            href="https://toshi-navi.jp/guide/medical-expense-practical-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-lg bg-card-bg border border-card-border hover:border-primary transition-colors"
          >
            <div className="text-xs text-muted mb-1">関連ガイド</div>
            <div className="font-bold text-sm mb-1">医療費控除の実践ガイド</div>
            <div className="text-xs text-muted">年10万円超の還付を最大化する方法</div>
          </a>
        </div>
      </section>
      <AffiliateSection slug="tax-calculator" category="日常ツール" />
      <RelatedTools currentSlug="tax-calculator" category="日常ツール" />
    </div>
  );
}
