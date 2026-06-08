import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】火災保険一括見積もり比較5選｜安く・補償充実の選び方を解説",
  description:
    "保険スクエアbang!・住宅本舗・i保険・インズウェブ・SBIホールディングスの火災保険一括見積もりサイトを徹底比較。値上げ時代に賢く選ぶコツを解説。",
  alternates: { canonical: `${siteConfig.url}/guide/fire-insurance-comparison` },
};

const faqItems = [
  { question: "火災保険は5年契約と1年契約どちらがお得？", answer: "5年一括契約が最も割引率が高くお得です。2022年の改定以降、最長5年契約となりました。" },
  { question: "水災補償は必要ですか？", answer: "ハザードマップで浸水想定がある地域では必須です。最近の豪雨被害増加を受けて加入率が上がっています。" },
  { question: "地震保険は別契約？", answer: "火災保険とセットで加入する必要があります。単独では加入できません。地震大国日本では加入を強く推奨します。" },
  { question: "見積もりは何社比較すべき？", answer: "最低3社、可能なら5社以上の比較が理想です。同じ補償内容でも年間2〜5万円の差が出ることもあります。" },
];

const services = [
  { name: "保険スクエアbang!", type: "総合", feature: "比較サイト最大手", points: ["最大15社一括見積もり", "保険見直しでも人気", "保険のプロが無料相談"], bestFor: "幅広く比較したい人。" },
  { name: "住宅本舗", type: "住宅特化", feature: "住宅ローンと一括", points: ["住宅取得者向け", "16社以上を一括比較", "住宅ローン相談も同時"], bestFor: "家を購入したばかりの人。" },
  { name: "i保険", type: "総合", feature: "国内主要9社", points: ["大手損保のみで安心", "Webで簡単完結", "比較表が見やすい"], bestFor: "大手志向の人。" },
  { name: "インズウェブ", type: "総合", feature: "SBI系の老舗", points: ["最大14社一括見積もり", "自動車保険でも有名", "ネット完結で気軽"], bestFor: "コスパ重視の人。" },
  { name: "SBIホールディングス", type: "ネット系", feature: "SBI損保系列", points: ["ネット系で手数料が安い", "シンプルな商品設計", "オンライン完結"], bestFor: "ネットで済ませたい人。" },
];

export default function FireInsuranceComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "火災保険比較", url: `${siteConfig.url}/guide/fire-insurance-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】火災保険一括見積もり比較5選" description="保険スクエアbang!・住宅本舗・i保険・インズウェブ・SBI比較。" url={`${siteConfig.url}/guide/fire-insurance-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>火災保険比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】火災保険一括見積もり比較5選｜安く・補償充実の選び方を解説</h1>
        <p className="text-muted leading-relaxed">2022年以降、火災保険料は2回連続で値上げされました。賢く選ぶには『複数社比較』が必須。本記事では一括見積もりサイト5社を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">火災保険選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">火災保険は『建物』『家財』『地震保険(任意)』『各種特約』の組み合わせで決まります。住宅ローン契約時に銀行から勧められる保険に何となく入る人も多いですが、実は数万円〜十数万円損していることが少なくありません。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ火災保険一括見積もりサイト5選</h2>
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
          <p className="text-muted leading-relaxed">火災保険は『見直すだけ』で年間数万円安くなる可能性のある保険です。一括見積もりサイトを使えば10分で複数社の見積もりが揃います。値上げ時代だからこそ放置せず動きましょう。</p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">生命保険比較</span>
            <p className="text-xs text-muted mt-1">家族の保障を見直す</p>
          </Link>
          <Link href="/guide/car-insurance-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">自動車保険比較</span>
            <p className="text-xs text-muted mt-1">車の保険も見直す</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
