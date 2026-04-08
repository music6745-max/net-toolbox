import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】フードデリバリー配達員比較5選｜時給・配達単価・働きやすさを徹底解説",
  description:
    "Uber Eats・出前館・Wolt・menu・楽天デリバリーの配達員サービス5社を時給・配達単価・働きやすさで徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/delivery-driver-comparison` },
};

const faqItems = [
  { question: "配達員の時給はどれくらい？", answer: "都市部で時給1,500〜2,500円が相場です。ピークタイム・天候・キャンペーンで大きく変動します。" },
  { question: "未経験でも始められますか？", answer: "全社で未経験OK。スマホとバイク・自転車があれば即日開始可能なサービスもあります。" },
  { question: "副業として可能ですか？", answer: "可能です。空いた時間にスポット配達できるため、本業との両立もしやすいです。" },
  { question: "個人事業主扱いになりますか？", answer: "ほぼ全てのフードデリバリーは業務委託契約で個人事業主扱いです。確定申告が必要になる場合があります。" },
];

const services = [
  { name: "Uber Eats", type: "業界最大手", feature: "稼働エリア最大", points: ["全国主要都市で稼働", "アプリの使いやすさ", "ボーナスキャンペーン豊富"], bestFor: "副業で気軽に始めたい人。" },
  { name: "出前館", type: "国内大手", feature: "業務委託＋準社員", points: ["時給制と単価制を選択可", "ピーク時単価が高い", "全国展開"], bestFor: "安定した収入が欲しい人。" },
  { name: "Wolt", type: "北欧系", feature: "サポート充実", points: ["丁寧なサポート対応", "高単価傾向", "地方都市でも展開"], bestFor: "初心者で不安な人。" },
  { name: "menu", type: "国内", feature: "ボーナス制度", points: ["紹介ボーナス豊富", "都市部メイン", "アプリが使いやすい"], bestFor: "都市部で稼ぎたい人。" },
  { name: "楽天デリバリー", type: "新興", feature: "楽天ポイント還元", points: ["楽天ユーザーにお得", "サブで使いやすい", "今後の拡大に期待"], bestFor: "楽天経済圏ユーザー。" },
];

export default function DeliveryDriverComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "配達員比較", url: `${siteConfig.url}/guide/delivery-driver-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】フードデリバリー配達員比較5選" description="Uber Eats・出前館・Wolt・menu・楽天デリバリーを徹底比較。" url={`${siteConfig.url}/guide/delivery-driver-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>配達員比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】フードデリバリー配達員比較5選｜時給・配達単価・働きやすさを徹底解説</h1>
        <p className="text-muted leading-relaxed">スキマ時間で稼げるフードデリバリー配達員。複数サービスに登録して効率的に稼ぐのが2026年スタンダードです。本記事では主要5社を徹底比較します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">配達員の働き方</h2>
        <p className="text-muted leading-relaxed mb-4">フードデリバリーは業務委託契約で、好きな時間に好きな場所で稼働できます。複数アプリの併用が稼ぐコツで、上位配達員は月収40万円以上を稼いでいます。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめ配達員サービス5選</h2>
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
        <h2 className="text-xl font-bold mb-4">配達員登録・他の副業</h2>
        <ComparisonTableCTA
          services={[
            { name: "Uber Eats 配達パートナー", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "業界最大手で安心", price: "登録無料", badge: "おすすめ" },
            { name: "出前館 配達員", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "時給制プランあり", price: "登録無料" },
            { name: "freee会計", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "確定申告に必須", price: "月額制" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/side-business-tools" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">副業ツール</span>
            <p className="text-xs text-muted mt-1">副業全般の必須ツール</p>
          </Link>
          <Link href="/guide/tax-software-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">確定申告ソフト</span>
            <p className="text-xs text-muted mt-1">副業所得の申告に</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
