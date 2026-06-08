import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】住宅ローン金利徹底比較｜固定vs変動・主要5行を解説",
  description:
    "auじぶん銀行・住信SBI・PayPay銀行・三井住友信託・ARUHIフラット35の金利を徹底比較。固定vs変動の選び方、借り換えで総返済額を数百万円削減するコツを解説します。",
  alternates: { canonical: `${siteConfig.url}/guide/mortgage-rate-comparison` },
};

const faqItems = [
  {
    question: "変動金利と固定金利、どちらが有利ですか？",
    answer:
      "現状の金利水準では変動が圧倒的に低く、短期返済(15年以下)なら変動が有利。一方で20年以上の超長期では固定で総返済額を確定させる安心感も大きく、家計の余力やリスク許容度で判断します。",
  },
  {
    question: "ミックス金利型は使うべきですか？",
    answer:
      "借入額の半分を固定、半分を変動にすることで金利上昇リスクを分散できます。返済額の安定と低金利のいいとこ取りができますが、事務手続きはやや複雑です。",
  },
  {
    question: "借り換えで本当に得しますか？",
    answer:
      "現行金利との差が0.5%以上、残債1,000万円以上、残期間10年以上の3条件を満たせば、諸費用を引いても総返済額を100万円以上削減できる可能性が高いです。",
  },
  {
    question: "事前審査は何行まで通すべきですか？",
    answer:
      "3〜4行の同時並行が一般的。同時期であれば信用情報への影響は限定的で、最も金利・条件のよい銀行を選べます。",
  },
];

const banks = [
  { name: "auじぶん銀行", type: "ネット銀行", rate: "変動0.319%〜 / 固定10年1.105%〜", points: ["変動金利は業界最低水準", "がん50%保障団信が無料付帯", "au・UQモバイルセット割で0.05%優遇"], bestFor: "金利を最優先、auユーザー。" },
  { name: "住信SBIネット銀行", type: "ネット銀行", rate: "変動0.32%〜 / 固定10年1.265%〜", points: ["全疾病保障が無料付帯", "対面相談も可能", "事務手数料は借入額の2.2%"], bestFor: "団信の手厚さを重視。" },
  { name: "PayPay銀行", type: "ネット銀行", rate: "変動0.315%〜 / 固定10年1.130%〜", points: ["業界最低クラスの変動金利", "一般団信＋がん50%保障無料", "全国対応"], bestFor: "PayPay経済圏ユーザー。" },
  { name: "三井住友信託銀行", type: "信託銀行", rate: "変動0.475%〜 / 固定10年1.350%〜", points: ["対面サポートが手厚い", "ライフプラン相談が可能", "繰上返済手数料無料"], bestFor: "対面で相談したい人。" },
  { name: "ARUHI フラット35", type: "全期間固定", rate: "固定35年1.840%〜", points: ["35年固定で返済額が一定", "頭金1割以上で金利優遇", "団信は任意"], bestFor: "金利上昇リスクを避けたい人、自営業者。" },
];

export default function MortgageRateComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: siteConfig.url },
          { name: "ガイド", url: `${siteConfig.url}/guide` },
          { name: "住宅ローン金利比較", url: `${siteConfig.url}/guide/mortgage-rate-comparison` },
        ]}
      />
      <ArticleJsonLd headline="【2026年最新】住宅ローン金利徹底比較｜固定vs変動・主要5行を解説" description="auじぶん銀行・住信SBI・PayPay銀行・三井住友信託・ARUHIフラット35の金利を徹底比較。固定vs変動の選び方、借り換えで総返済額を数百万円削減するコツを解説します。" url={`${siteConfig.url}/guide/mortgage-rate-comparison`} />
      <FAQJsonLd items={faqItems.map((i) => ({ question: i.question, answer: i.answer }))} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>住宅ローン金利比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">15分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          【2026年最新】住宅ローン金利徹底比較｜固定vs変動・主要5行を解説
        </h1>
        <p className="text-muted leading-relaxed">
          住宅ローンは0.1%の差で総返済額が数十万円〜数百万円変わります。本記事では2026年現在の主要5行の最新金利を変動・固定の両軸で徹底比較し、ライフプランに合わせた最適な選び方を解説します。
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">固定 vs 変動 早見表</h2>
        <div className="space-y-2 text-sm text-slate-800 dark:text-slate-100">
          <p><span className="font-bold">短期返済（〜15年） → 変動金利が有利</span></p>
          <p><span className="font-bold">中期返済（15〜25年） → ミックス型がおすすめ</span></p>
          <p><span className="font-bold">長期返済（25年〜） → 固定金利で安定確保</span></p>
          <p><span className="font-bold">自営業・収入変動 → フラット35</span></p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">変動と固定、どう選ぶか</h2>
        <p className="text-muted leading-relaxed mb-4">
          住宅ローンの金利タイプは大きく「変動金利」「固定期間選択型」「全期間固定型」の3つに分かれます。変動金利は半年ごとに見直され、現在は0.3%台と歴史的な低水準。一方の全期間固定（フラット35）は1.8%前後と高めですが、35年間返済額が変わらない安心感があります。3,000万円を35年返済する場合、変動0.32%と固定1.84%では総返済額の差が約900万円にもなります。ただし変動は将来の金利上昇リスクを負うため、収入が安定し繰上返済の余力がある世帯に適します。固定は教育費・老後資金との兼ね合いで毎月の返済額を確定させたい家庭に向いています。
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">主要5行の金利比較</h2>
        <div className="space-y-6">
          {banks.map((b, idx) => (
            <div key={b.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{b.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{b.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">参考金利：{b.rate}</p>
              <ul className="space-y-1 mb-4">
                {b.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{b.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-3">※ 金利は2026年4月時点の参考値です。最新の適用金利は各銀行の公式サイトでご確認ください。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">借り換えで総返済額を圧縮するコツ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6 space-y-3 text-sm text-muted">
          <p><span className="font-bold text-foreground">1. 金利差0.5%以上が目安：</span>諸費用を引いてもメリットが出やすい水準。</p>
          <p><span className="font-bold text-foreground">2. 残債1,000万円以上：</span>少額残債では諸費用負けすることも。</p>
          <p><span className="font-bold text-foreground">3. 残期間10年以上：</span>削減効果が出やすい期間。</p>
          <p><span className="font-bold text-foreground">4. 諸費用は約60〜100万円：</span>事務手数料・登記費用・保証料を含めた総額を必ず試算。</p>
          <p><span className="font-bold text-foreground">5. 団信内容を見直し：</span>がん保障・三大疾病保障の追加も検討。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">よくある質問（FAQ）</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-card-bg border border-card-border rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">Q. {item.question}</h3>
              <p className="text-sm text-muted leading-relaxed">A. {item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">まとめ</h2>
        <div className="bg-card-bg border border-card-border rounded-xl p-6">
          <p className="text-muted leading-relaxed">
            住宅ローンは「金利水準」「団信内容」「諸費用」を総合判断するのが正解です。ネット銀行の変動金利は記録的な低水準で、団信の保障内容も大手行に劣りません。一方フラット35は将来の金利上昇から家計を守る盾となります。事前審査は3〜4行を並行で進め、最終的に最も総支払額が小さい銀行を選びましょう。
          </p>
        </div>
      </section>


      <section className="mb-10">
        <Link href="/tools/rent-budget-calculator" className="block bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-xl p-5 transition-colors">
          <div className="font-bold text-sm mb-1">家賃適正額計算ツールを使う</div>
          <p className="text-xs text-muted">年収から無理のない住居費の目安を自動計算 →</p>
        </Link>
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/housing-loan-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">住宅ローン比較</span>
            <p className="text-xs text-muted mt-1">基本の比較ガイド</p>
          </Link>
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット保険比較</span>
            <p className="text-xs text-muted mt-1">団信＋生命保険の最適化</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
