import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】女性の薄毛治療クリニック比較5選｜FAGA・びまん性脱毛症対策",
  description:
    "クリニックフォア・湘南美容クリニック・東京ビューティークリニック・銀座総合美容クリニック・AGAスキンクリニックレディースの女性薄毛5院を徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/hairloss-women-comparison` },
};

const faqItems = [
  { question: "FAGAとは？", answer: "Female AGA(女性男性型脱毛症)の略で、女性版の薄毛症状です。びまん性脱毛症(全体的に薄くなる)が多く、ホルモンバランスやストレスが原因とされます。" },
  { question: "費用相場は？", answer: "月1〜3万円が相場です。オンライン処方なら月数千円で始められるサービスもあります。" },
  { question: "効果が出るまでの期間は？", answer: "3〜6ヶ月で抜け毛減少、6〜12ヶ月で発毛効果を実感する人が多いです。最低6ヶ月の継続が推奨されます。" },
  { question: "副作用は？", answer: "ミノキシジル外用薬・内服薬の併用が一般的で、稀にかゆみや動悸の報告があります。医師の診察を受けて適切に使用しましょう。" },
];

const services = [
  { name: "クリニックフォア", type: "オンライン", feature: "業界最大級のオンライン", points: ["月額3,036円〜", "オンライン完結", "最短当日診療"], bestFor: "通院せず気軽に始めたい人。" },
  { name: "湘南美容クリニック", type: "美容クリニック", feature: "全国大手", points: ["女性向けプラン充実", "全国院数No.1", "治療実績豊富"], bestFor: "対面で本格治療したい人。" },
  { name: "東京ビューティークリニック", type: "女性専門", feature: "女性専門院", points: ["女性スタッフのみ", "プライバシー配慮", "オーダーメイド治療"], bestFor: "女性スタッフに相談したい人。" },
  { name: "銀座総合美容クリニック", type: "美容クリニック", feature: "発毛実績豊富", points: ["女性向け発毛プラン", "メソセラピー対応", "全国主要都市"], bestFor: "本格的な発毛治療を希望。" },
  { name: "AGAスキンクリニック レディース", type: "AGA特化", feature: "症例数220万件", points: ["女性専門院", "オーダーメイド治療", "全国展開"], bestFor: "AGAスキンの女性版を受けたい人。" },
];

export default function HairlossWomenComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "女性薄毛治療比較", url: `${siteConfig.url}/guide/hairloss-women-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】女性の薄毛治療クリニック比較5選" description="クリニックフォア・湘南美容・東京ビューティー・銀座総合・AGAスキンレディース徹底比較。" url={`${siteConfig.url}/guide/hairloss-women-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>女性薄毛治療比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】女性の薄毛治療クリニック比較5選｜FAGA・びまん性脱毛症対策</h1>
        <p className="text-muted leading-relaxed">女性の薄毛は男性とは原因も治療法も異なります。本記事ではFAGA・びまん性脱毛症の治療に特化した5院を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ女性薄毛治療5院</h2>
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
        <h2 className="text-xl font-bold mb-4">無料カウンセリング予約</h2>
        <ComparisonTableCTA
          services={[
            { name: "クリニックフォア", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "オンライン完結", price: "月3,036円〜", badge: "おすすめ" },
            { name: "湘南美容クリニック", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "全国大手", price: "無料カウンセリング" },
            { name: "東京ビューティークリニック", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "女性専門", price: "無料カウンセリング" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/aga-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">AGAクリニック比較</span>
            <p className="text-xs text-muted mt-1">男性向けAGA</p>
          </Link>
          <Link href="/guide/beauty-clinic-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">美容クリニック比較</span>
            <p className="text-xs text-muted mt-1">美容医療全般</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
