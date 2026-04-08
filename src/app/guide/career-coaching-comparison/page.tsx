import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】キャリアコーチング比較5選｜料金・期間・強みを徹底解説",
  description:
    "ポジウィルキャリア・マジキャリ・キャリドラ・きづく。転職相談・ライフシフトラボのキャリアコーチング5社を料金・期間・特徴で徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/career-coaching-comparison` },
};

const faqItems = [
  { question: "転職エージェントとの違いは？", answer: "転職エージェントは求人紹介で企業から報酬を得るため転職前提ですが、キャリアコーチングは利用者からの料金で運営され『転職するかどうか』も含めて中立的に相談できます。" },
  { question: "費用相場はどれくらいですか？", answer: "1〜3ヶ月で30万円〜70万円が相場です。決して安くありませんが、長期的なキャリア形成を考えれば自己投資として効果は大きいです。" },
  { question: "オンラインだけで効果ありますか？", answer: "ほとんどのサービスがフルオンライン対応で、Zoom等を使った週1回の面談+チャットサポートが基本です。地方在住でも問題なく受講できます。" },
  { question: "返金保証はありますか？", answer: "主要サービスの多くが14日〜30日の全額返金保証を設けています。無料カウンセリングで相性を確認してから申し込むのがおすすめです。" },
];

const services = [
  { name: "ポジウィルキャリア", type: "業界最大手", feature: "自己分析特化のキャリア相談", points: ["業界初のキャリアコーチング", "受講者数1万人超", "全額返金保証14日"], bestFor: "本気で人生を変えたい人。" },
  { name: "マジキャリ", type: "転職重視型", feature: "転職成功実績が豊富", points: ["元エージェントによるコーチ陣", "面接対策・書類添削まで対応", "卒業後1年間サポート継続"], bestFor: "確実に転職を成功させたい人。" },
  { name: "キャリドラ", type: "年収アップ特化", feature: "年収アップに直結", points: ["コーチ全員がキャリア相談有資格", "年収アップ実績平均91万円", "完全オンライン対応"], bestFor: "今より稼ぎたい若手・中堅。" },
  { name: "きづく。転職相談", type: "中立型", feature: "押し売りなし・寄り添い型", points: ["無料相談が90分と長め", "業界最安級の料金", "コーチ指名OK"], bestFor: "転職するか迷っている段階の人。" },
  { name: "ライフシフトラボ", type: "ミドル特化", feature: "40代・50代に特化", points: ["副業・複業相談もOK", "ミドル層の実例多数", "コーチもミドル層"], bestFor: "ミドル・シニアでキャリアを再構築したい人。" },
];

export default function CareerCoachingComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "キャリアコーチング比較", url: `${siteConfig.url}/guide/career-coaching-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】キャリアコーチング比較5選" description="ポジウィル・マジキャリ・キャリドラ・きづく・ライフシフトラボを徹底比較。" url={`${siteConfig.url}/guide/career-coaching-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>キャリアコーチング比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】キャリアコーチング比較5選｜料金・期間・強みを徹底解説</h1>
        <p className="text-muted leading-relaxed">「このまま今の会社で良いのか」と悩む人が増えています。キャリアコーチングは、転職エージェントとは異なる『中立的な立場』で人生設計とキャリアプランを一緒に作るサービス。本記事では主要5社を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">キャリアコーチングとは</h2>
        <p className="text-muted leading-relaxed mb-4">キャリアコーチングは、有料のパーソナル相談サービスで、自己分析・強み発見・キャリアプラン策定・転職活動支援までを一貫してサポートします。料金は数十万円と高額ですが、ファイナンシャルプランナー以上に「人生を左右する自己投資」として近年急成長しています。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめキャリアコーチング5選</h2>
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
          <p className="text-muted leading-relaxed">キャリアコーチングは決して安くない投資ですが、長期的なリターンは大きいです。まずは無料カウンセリングで複数社を比較し、自分の悩みに最も寄り添ってくれるコーチを選びましょう。</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">無料カウンセリングを予約する</h2>
        <ComparisonTableCTA
          services={[
            { name: "doda", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "並行利用したい転職エージェント", price: "無料", badge: "定番" },
            { name: "リクルートエージェント", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "求人数業界最大", price: "無料" },
            { name: "マイナビエージェント", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "20代の手厚いサポート", price: "無料" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/job-site-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">転職サイト比較</span>
            <p className="text-xs text-muted mt-1">エージェントの比較</p>
          </Link>
          <Link href="/guide/online-counseling-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">オンラインカウンセリング</span>
            <p className="text-xs text-muted mt-1">メンタル面のサポート</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
