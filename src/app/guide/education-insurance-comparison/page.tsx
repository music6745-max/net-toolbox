import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】学資保険比較5選｜返戻率・保障内容を徹底解説",
  description:
    "ソニー生命・明治安田生命・フコク生命・日本生命・第一生命の学資保険5社を返戻率・保障内容で徹底比較。NISAと併用するべきかも解説。",
  alternates: { canonical: `${siteConfig.url}/guide/education-insurance-comparison` },
};

const faqItems = [
  { question: "学資保険とジュニアNISAどちらが良い？", answer: "確実性重視なら学資保険、利回り重視ならNISAが適しています。両方を併用するのが理想的です。" },
  { question: "返戻率はどれくらい？", answer: "2026年時点で102〜108%が相場です。低金利下では大きな利息は期待できないため、税制優遇と保障機能で選ぶのがポイントです。" },
  { question: "途中解約は損？", answer: "短期解約は元本割れのリスクが高いです。最低でも10年以上の継続を前提に契約しましょう。" },
  { question: "親が亡くなったらどうなる？", answer: "保険料払込免除特約付きなら以降の保険料が免除され、満期時には予定通り保険金を受け取れます。これが学資保険最大のメリットです。" },
];

const services = [
  { name: "ソニー生命 学資保険", type: "返戻率重視", feature: "返戻率トップクラス", points: ["返戻率約108%(条件次第)", "ライフプランナーの個別相談", "柔軟な払込期間"], bestFor: "返戻率を最優先したい人。" },
  { name: "明治安田生命 つみたて学資", type: "総合", feature: "短期払いで効率よく", points: ["10年で払い込み完了", "返戻率約105%", "大手の安心感"], bestFor: "短期で集中して払いたい人。" },
  { name: "フコク生命 みらいのつばさ", type: "祝金型", feature: "節目で祝金が受け取れる", points: ["小学校〜大学まで複数回受取", "兄弟割引あり", "返戻率約105%"], bestFor: "教育費を段階的に使いたい人。" },
  { name: "日本生命 ニッセイ学資保険", type: "総合", feature: "業界最大手の信頼", points: ["返戻率約104%", "出生前加入OK", "大学進学に手厚い"], bestFor: "大手の安心感重視の人。" },
  { name: "第一生命 こども応援団", type: "保障重視", feature: "医療保障も充実", points: ["医療特約で入院・手術もカバー", "教育費＋医療の安心", "全国対応"], bestFor: "子どもの医療保障も同時に考えたい人。" },
];

export default function EducationInsuranceComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "学資保険比較", url: `${siteConfig.url}/guide/education-insurance-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】学資保険比較5選" description="ソニー生命・明治安田・フコク・日生・第一生命を徹底比較。" url={`${siteConfig.url}/guide/education-insurance-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>学資保険比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】学資保険比較5選｜返戻率・保障内容を徹底解説</h1>
        <p className="text-muted leading-relaxed">子どもの教育費は大学卒業まで1人約1000万円。学資保険は確実性と税制優遇を兼ね備えた手段として根強い人気があります。本記事では主要5社を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">学資保険選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">学資保険は『返戻率』と『保障機能』のバランスで選びます。新NISAと併用することで、リスク分散とリターンの両立が可能です。プロのファイナンシャルプランナーへの無料相談を利用するのが近道です。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ学資保険5選</h2>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <div key={s.name} className="bg-card-bg border border-card-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{idx + 1}</span>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">{s.type}</span>
              </div>
              <p className="text-sm font-bold mb-3">{s.feature}</p>
              <ul className="space-y-1 mb-4">
                {s.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted flex items-start gap-2"><span className="text-green-500 mt-0.5">&#9675;</span>{pt}</li>
                ))}
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm text-slate-800 dark:text-slate-100"><span className="font-bold">こんな人におすすめ：</span>{s.bestFor}</p>
              </div>
            </div>
          ))}
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
          <p className="text-muted leading-relaxed">学資保険は『元本割れリスクを避けつつ、保障機能も得たい』家庭向けです。返戻率重視ならソニー生命、保障重視なら第一生命など、自分に合うタイプを選びましょう。FP無料相談を活用するのが最短ルートです。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">無料FP相談・保険一括見積もり</h2>
        <ComparisonTableCTA
          services={[
            { name: "保険チャンネル", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "リクルート系のFP相談", price: "完全無料", badge: "人気" },
            { name: "保険見直しラボ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "経験豊富なFPが対応", price: "完全無料" },
            { name: "ほけんのぜんぶ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "子育て世帯に強い", price: "完全無料" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">生命保険比較</span>
            <p className="text-xs text-muted mt-1">家族の保障を見直す</p>
          </Link>
          <Link href="/guide/nisa-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">NISA口座比較</span>
            <p className="text-xs text-muted mt-1">教育資金もNISAで運用</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
