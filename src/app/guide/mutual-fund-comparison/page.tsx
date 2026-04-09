import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】投資信託おすすめ比較5選｜信託報酬・運用実績・人気銘柄を徹底解説",
  description:
    "eMAXIS Slim・SBI・楽天・ニッセイ・iFreeの投資信託を信託報酬・運用実績・人気銘柄で徹底比較。新NISA時代の選び方を解説。",
  alternates: { canonical: `${siteConfig.url}/guide/mutual-fund-comparison` },
};

const faqItems = [
  { question: "投資信託の選び方は？", answer: "信託報酬(コスト)・純資産総額・運用実績・分配方針の4点を必ず確認しましょう。長期投資なら信託報酬0.2%以下のインデックスファンドがおすすめです。" },
  { question: "新NISAで何を買うべき？", answer: "S&P500・全世界株式・先進国株式の3大インデックスが定番。リスクとリターンのバランスで選びましょう。" },
  { question: "毎月分配型は良い？", answer: "毎月分配型は元本を取り崩している場合が多くおすすめしません。長期投資ではトータルリターンを重視しましょう。" },
  { question: "アクティブとインデックスどちら？", answer: "長期実績ではインデックスが大半のアクティブを上回ります。コスト面でもインデックスが有利です。" },
];

const services = [
  { name: "eMAXIS Slim 全世界株式(オール・カントリー)", type: "オルカン", feature: "新NISA最人気", points: ["信託報酬0.05775%", "全世界に分散", "純資産総額No.1クラス"], bestFor: "1本で世界に投資したい人。" },
  { name: "eMAXIS Slim 米国株式(S&P500)", type: "S&P500", feature: "米国一強信仰", points: ["信託報酬0.09372%", "米国大型500社に投資", "過去20年好調"], bestFor: "米国経済を信じる人。" },
  { name: "SBI・V・S&P500", type: "S&P500", feature: "SBI×バンガード", points: ["信託報酬0.0938%", "VOOに連動", "SBI証券限定"], bestFor: "SBIユーザー。" },
  { name: "楽天・全世界株式インデックス", type: "オルカン", feature: "VTに連動", points: ["信託報酬0.192%", "楽天証券で人気", "VTに直接連動"], bestFor: "楽天ユーザー。" },
  { name: "ニッセイ外国株式インデックス", type: "先進国", feature: "コスト最安級", points: ["信託報酬0.09889%", "MSCIコクサイ連動", "長期実績豊富"], bestFor: "先進国に集中投資したい人。" },
];

export default function MutualFundComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "投資信託比較", url: `${siteConfig.url}/guide/mutual-fund-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】投資信託おすすめ比較5選" description="eMAXIS Slim・SBI・楽天・ニッセイ・iFree徹底比較。" url={`${siteConfig.url}/guide/mutual-fund-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>投資信託比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】投資信託おすすめ比較5選｜信託報酬・運用実績・人気銘柄を徹底解説</h1>
        <p className="text-muted leading-relaxed">※本記事は投資助言ではありません。最終判断はご自身で行ってください。新NISA時代の人気銘柄を比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">人気投資信託5選</h2>
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
        <h2 className="text-xl font-bold mb-4">投資信託を始める証券口座</h2>
        <ComparisonTableCTA
          services={[
            { name: "SBI証券", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "国内口座数No.1", price: "口座開設無料", badge: "定番" },
            { name: "楽天証券", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "楽天ポイント貯まる", price: "口座開設無料" },
            { name: "マネックス証券", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "米国株に強い", price: "口座開設無料" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/nisa-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">NISA口座比較</span>
            <p className="text-xs text-muted mt-1">非課税投資枠</p>
          </Link>
          <Link href="/guide/online-broker-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ネット証券比較</span>
            <p className="text-xs text-muted mt-1">証券口座選び</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
