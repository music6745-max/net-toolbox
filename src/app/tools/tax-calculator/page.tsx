"use client";
import { useState } from "react";
import Link from "next/link";
import { RelatedTools } from "@/components/RelatedTools";
import { AffiliateSection } from "@/components/AffiliateSection";
import { ToolFAQSection } from "@/components/ToolFAQSection";
import { TrackedOfferLink } from "@/components/TrackedOfferLink";
import { onTrackedLinkClick } from "@/lib/tracking";

// クロスドメイン送客（toolbox→money-navi）の共通UTM
const CROSS_DOMAIN_UTM = "?utm_source=net-toolbox&utm_medium=referral&utm_campaign=tool_tax-calculator";

/**
 * 🎯 tax-calculator を「単発ツール」ではなく「税金・事業主の総合ハブ」にする。
 *
 * Search Console 実測: +229% の伸び率 = この1ページは toolbox-site 全体で
 * 最も伸びているエントリポイント。だからこそ、次に読ませるページを
 * 期待収益順に並べて、ここで離脱させない設計に切り替える。
 *
 * 優先順位（1件あたりの期待粗利 × 成約確度）:
 *  1. 税理士ドットコム（A8.net, ¥12,000/件） — 消費税計算 → インボイス対応相談は
 *     意図マッチ最強。「個人事業主」「インボイス」「副業ライター」向け。
 *  2. FP無料相談（A8.net, ¥10,000/件） — 税金計算した後「保険・老後も」の横展開。
 *  3. toshi-navi のインボイス完全ガイド → 内部で上記案件に再接続。
 *  4. toshi-navi の副業系ガイド — tax-calculator 利用者の実際のバックグラウンドと一致。
 */

const HIGH_VALUE_CTA = {
  zeirishi: {
    offerId: "zeirishi-dotcom",
    title: "税理士ドットコム（無料マッチング）",
    payoutNote: "全国5,900名の税理士が登録、相性の合う税理士を最短1日で紹介",
    why: "消費税の計算が出たあと、「この数字で本当に合っているか」「2割特例は適用できるか」を具体的に相談したい方へ。インボイス登録の要否判定にも使えます。",
  },
  hoken: {
    offerId: "hoken-mammoth",
    title: "保険マンモス（FP無料相談）",
    payoutNote: "業界経験12年超のベテランFPが平均12年の経験で家計全体を見直し",
    why: "税金だけでなく、保険・老後資金・住宅ローンなど人生のお金を一度に相談したい方へ。税理士より広範囲で相談できるのが強み。",
  },
};

const CROSS_DOMAIN_GUIDES = [
  {
    slug: "invoice-system-complete-guide",
    title: "インボイス制度完全ガイド 2026",
    desc: "適格請求書・2割特例・登録要否の判断基準を解説",
    priority: "★★★ 必読",
    priorityColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  },
  {
    slug: "denshi-chobo-preservation-guide",
    title: "電子帳簿保存法ガイド",
    desc: "2024年本格施行の対応方法・罰則回避",
    priority: "★★ 重要",
    priorityColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  },
  {
    slug: "company-expense-rules-guide",
    title: "会社員の経費計上ルール",
    desc: "副業経費・特定支出控除で年20〜30万円節税",
    priority: "★★ 重要",
    priorityColor: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  },
  {
    slug: "freelance-retirement-guide",
    title: "フリーランス年金完全ガイド",
    desc: "iDeCo/付加年金/基金で老後を自力設計",
    priority: "★ 関連",
    priorityColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
  {
    slug: "high-income-tax-strategy",
    title: "年収1000万円超の節税戦略",
    desc: "合法的に年50-80万円節税するフレームワーク",
    priority: "★ 関連",
    priorityColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
  {
    slug: "medical-expense-practical-guide",
    title: "医療費控除の実践ガイド",
    desc: "年10万円超の還付を最大化する方法",
    priority: "★ 関連",
    priorityColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
];

// tax-calculator と意図が近いツール群（実際に存在する slug のみ）
const RELATED_TAX_TOOLS = [
  { slug: "invoice-tax-calculator", name: "インボイス税額計算", icon: "📄", desc: "適格請求書発行時の税額計算" },
  { slug: "freelance-tax-calculator", name: "フリーランス税金計算", icon: "👔", desc: "売上から税金・手取りを逆算" },
  { slug: "side-business-tax-calculator", name: "副業税金計算", icon: "💼", desc: "本業＋副業の税額計算" },
  { slug: "furusato-tax-simulator", name: "ふるさと納税シミュレータ", icon: "🎁", desc: "控除上限額を即時計算" },
  { slug: "withholding-tax-calculator", name: "源泉徴収税額計算", icon: "💴", desc: "報酬から源泉徴収を計算" },
  { slug: "tax-bracket-calculator", name: "所得税率計算", icon: "📊", desc: "累進税率を早見化" },
  { slug: "smart-tax-saving-checker", name: "節税チェッカー", icon: "✅", desc: "使える控除を網羅診断" },
  { slug: "invoice-generator", name: "請求書ジェネレータ", icon: "📝", desc: "インボイス対応の請求書作成" },
];

export default function TaxCalculatorPage() {
  const [amount, setAmount] = useState(1000);
  const [taxRate, setTaxRate] = useState(10);
  const [mode, setMode] = useState<"exclude" | "include">("exclude");

  const taxIncluded = mode === "exclude" ? amount * (1 + taxRate / 100) : amount;
  const taxExcluded = mode === "include" ? amount / (1 + taxRate / 100) : amount;
  const taxAmount = taxIncluded - taxExcluded;

  // 「消費税額が年間100万円以上になる規模」かを判定して、CTAの出し方を変える
  // （大きい金額の試算をしている人＝事業者の可能性が高いので税理士相談の優先度を上げる）
  const isLikelyBusinessOwner = taxAmount >= 10000;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">トップ</Link>
        <span className="mx-2">/</span>
        <span>消費税計算</span>
      </nav>
      <h1 className="text-2xl font-bold mb-2">消費税計算ツール</h1>
      <p className="text-muted mb-8">税込・税抜価格を即座に計算。8%・10%の軽減税率にも対応。</p>

      {/* === 計算機本体 === */}
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

      {/* 🎯 計算結果直下の最高単価CTA（動的: 大きい金額の試算時はさらに強めに表示） */}
      <section className="mt-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-400 dark:border-amber-600 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <span className="text-3xl">💡</span>
          <div className="flex-1">
            <h2 className="text-base font-bold mb-2">
              {isLikelyBusinessOwner
                ? "この規模の取引なら、専門家に相談した方が数十万円得します"
                : "インボイス・2割特例の対象か、無料で確認できます"}
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-4">
              {isLikelyBusinessOwner
                ? "消費税額が年間10万円を超える規模の事業者は、課税事業者か免税事業者か・2割特例の適用可否・簡易課税の選択などで最終税額が大きく変わります。税理士ドットコムなら無料でマッチング＆初回相談可能。"
                : "消費税の計算は一瞬ですが、「そもそも申告が必要か」「2割特例は使えるか」「インボイス登録すべきか」の判断で損益が数十万円変わります。無料の税理士マッチングで方針を確認できます。"}
            </p>
            <TrackedOfferLink
              offerId={HIGH_VALUE_CTA.zeirishi.offerId}
              page="tool_tax-calculator"
              position="result_below_primary_cta"
              className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-bold transition-colors"
            >
              税理士ドットコムで無料相談 →
            </TrackedOfferLink>
            <p className="text-[11px] text-muted mt-2">※ PR・広告を含みます</p>
          </div>
        </div>
      </section>

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

      {/* 🎯 もう1本の高単価CTA（FP相談） — 税務相談とは異なる属性を取りに行く */}
      <section className="mt-8 bg-card-bg border border-card-border rounded-xl p-6">
        <h2 className="text-base font-bold mb-2">💼 税金の先にある「家計・老後」を設計したい方へ</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          {HIGH_VALUE_CTA.hoken.why}
        </p>
        <TrackedOfferLink
          offerId={HIGH_VALUE_CTA.hoken.offerId}
          page="tool_tax-calculator"
          position="hub_fp_cta"
          className="inline-block px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-medium transition-colors"
        >
          保険マンモスで無料FP相談 →
        </TrackedOfferLink>
        <p className="text-[11px] text-muted mt-2">
          {HIGH_VALUE_CTA.hoken.payoutNote}｜※ PR・広告を含みます
        </p>
      </section>

      {/* 🎯 money-navi 送客 — 優先度バッジつき */}
      <section className="mt-10 bg-gradient-to-br from-primary/5 to-blue-50/50 dark:from-primary/10 dark:to-blue-900/10 border-2 border-primary/30 rounded-xl p-6">
        <h2 className="text-lg font-bold mb-2">📖 消費税の計算に続けて読みたい記事</h2>
        <p className="text-sm text-muted mb-5">
          投資ナビJPの関連ガイド。インボイス・経費・節税の具体的な判断基準を詳しく解説しています。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CROSS_DOMAIN_GUIDES.map((g, i) => {
            const href = `https://toshi-navi.jp/guide/${g.slug}${CROSS_DOMAIN_UTM}`;
            return (
              <a
                key={g.slug}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onTrackedLinkClick({
                  page: "tool_tax-calculator",
                  position: `cross_domain_guide_${i + 1}`,
                  service: `toshi-navi:${g.slug}`,
                  href,
                })}
                data-analytics-tracked="true"
                className="block p-4 rounded-lg bg-card-bg border border-card-border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${g.priorityColor}`}>
                    {g.priority}
                  </span>
                  <span className="text-[10px] text-muted">投資ナビJP</span>
                </div>
                <div className="font-bold text-sm mb-1">{g.title}</div>
                <div className="text-xs text-muted">{g.desc}</div>
              </a>
            );
          })}
        </div>
      </section>

      {/* 🎯 近接ツール群へのハブ — 同意図の内部リンク密度UP */}
      <section className="mt-8">
        <h2 className="text-base font-bold mb-3">🔧 税金計算ツール群</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {RELATED_TAX_TOOLS.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="block p-3 rounded-lg bg-card-bg border border-card-border hover:border-primary/50 hover:shadow-sm transition-all text-center"
            >
              <div className="text-2xl mb-1">{t.icon}</div>
              <div className="text-xs font-semibold line-clamp-1">{t.name}</div>
              <div className="text-[11px] text-muted mt-1 line-clamp-2">{t.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <AffiliateSection slug="tax-calculator" category="日常ツール" />
      <RelatedTools currentSlug="tax-calculator" category="日常ツール" />
    </div>
  );
}
