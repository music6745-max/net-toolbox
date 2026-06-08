import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "【2026年最新】リフォーム会社一括見積もりサイト比較5選｜失敗しない選び方も解説",
  description:
    "ホームプロ・タウンライフリフォーム・リショップナビ・SUUMOリフォーム・LIFULLリフォームの5社を徹底比較。リフォーム業者を安く確実に選ぶコツ。",
  alternates: { canonical: `${siteConfig.url}/guide/renovation-comparison` },
};

const faqItems = [
  { question: "リフォーム費用の相場は？", answer: "キッチン交換50〜150万、浴室リフォーム60〜180万、フルリフォーム500〜1500万円が目安です。複数社比較で20〜30%安くなることもあります。" },
  { question: "見積もりは無料ですか？", answer: "ほぼ全社で初回見積もりは無料です。現地調査が必要な大規模リフォームでも基本的に無料です。" },
  { question: "悪徳業者を避けるには？", answer: "一括見積もりサイトは独自の審査基準を設けているため、無作為な飛び込みより安心です。さらに最低3社で相見積もりを取りましょう。" },
  { question: "補助金は使えますか？", answer: "省エネリフォーム・耐震リフォーム・バリアフリー化などは国・自治体の補助金対象となります。見積もり時に業者に相談しましょう。" },
];

const services = [
  { name: "ホームプロ", type: "総合", feature: "リクルート系の老舗", points: ["利用者90万人超の実績", "匿名でのやり取り可能", "成約手数料が業者持ち"], bestFor: "プライバシー重視の人。" },
  { name: "タウンライフリフォーム", type: "総合", feature: "プラン提案も無料", points: ["複数社からの提案書を一括取得", "全国対応", "厳選された優良業者のみ"], bestFor: "プランから比較したい人。" },
  { name: "リショップナビ", type: "総合", feature: "コンシェルジュ型", points: ["コンシェルジュが業者選定をサポート", "万が一の保証制度あり", "全国対応"], bestFor: "業者選びに自信がない初心者。" },
  { name: "SUUMOリフォーム", type: "総合", feature: "リクルートの安心感", points: ["大手・地元の双方を網羅", "口コミ情報が豊富", "細かい比較が可能"], bestFor: "情報量重視の人。" },
  { name: "LIFULLリフォーム", type: "総合", feature: "情報サイト連携", points: ["事例・費用相場の情報が豊富", "提携業者の質を厳選", "Web上で簡単比較"], bestFor: "じっくり比較したい人。" },
];

export default function RenovationComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "リフォーム業者比較", url: `${siteConfig.url}/guide/renovation-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】リフォーム会社一括見積もりサイト比較5選" description="ホームプロ・タウンライフ・リショップナビ・SUUMO・LIFULLを徹底比較。" url={`${siteConfig.url}/guide/renovation-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>リフォーム業者比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】リフォーム会社一括見積もりサイト比較5選｜失敗しない選び方も解説</h1>
        <p className="text-muted leading-relaxed">リフォームは業者によって金額が倍以上違うケースもあります。本記事では失敗しないための一括見積もりサイト5社を比較し、賢く選ぶコツを解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">リフォーム業者選びの基本</h2>
        <p className="text-muted leading-relaxed mb-4">『安い業者を見つけたい』だけでなく、『信頼できる業者と出会う』ことが何より重要です。一括見積もりサイトは事前審査済みの業者を紹介してくれるため、悪徳業者を避ける第一の防衛線になります。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめリフォーム一括見積もりサイト5選</h2>
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
          <p className="text-muted leading-relaxed">リフォーム成功の鍵は『複数社比較』。一括見積もりサイトを2〜3個併用すれば、より多くの業者から比較できます。まずは無料で見積もりを取り、相場感を掴みましょう。</p>
        </div>
      </section>


      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/home-builder-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ハウスメーカー比較</span>
            <p className="text-xs text-muted mt-1">注文住宅を建てる</p>
          </Link>
          <Link href="/guide/junk-removal-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">不用品回収比較</span>
            <p className="text-xs text-muted mt-1">リフォーム前の片付け</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
