import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/tools";
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from "@/components/JsonLd";
import { ComparisonTableCTA } from "@/components/ComparisonTableCTA";

export const metadata: Metadata = {
  title: "【2026年最新】フォトスタジオ比較5選｜七五三/お宮参り/成人式の写真スタジオ徹底解説",
  description:
    "スタジオアリス・スタジオマリオ・スタジオキャラット・ライフスタジオ・PHOTORENTのフォトスタジオ5社を徹底比較。",
  alternates: { canonical: `${siteConfig.url}/guide/photo-studio-comparison` },
};

const faqItems = [
  { question: "七五三の費用相場は？", answer: "撮影料+衣装+データセットで2〜5万円が相場です。前撮りキャンペーンで割引が大きいです。" },
  { question: "事前予約は必要？", answer: "繁忙期(秋・成人式前)は2〜3ヶ月前の予約が必要です。早期予約特典がある店舗も多いです。" },
  { question: "衣装持ち込みは可能？", answer: "店舗によって異なります。アリスやマリオは衣装レンタル中心、ライフスタジオは持ち込みOKです。" },
  { question: "データのみ購入はできる？", answer: "可能です。最近はデータプランも増えており、紙焼き不要なら割安に済みます。" },
];

const services = [
  { name: "スタジオアリス", type: "業界最大手", feature: "全国490店舗以上", points: ["子ども写真館の最大手", "衣装500点以上で着替え自由", "キャラクターコラボあり"], bestFor: "豪華に楽しみたい家族。" },
  { name: "スタジオマリオ", type: "カメラのキタムラ系", feature: "全国350店舗", points: ["プロカメラマン在籍", "撮影料0円キャンペーン", "前撮りキャンペーン豊富"], bestFor: "コスパとクオリティ重視。" },
  { name: "スタジオキャラット", type: "総合", feature: "おしゃれな雰囲気", points: ["撮影セットがおしゃれ", "全国主要都市に展開", "着物・ドレス豊富"], bestFor: "成人式・卒業式撮影。" },
  { name: "ライフスタジオ", type: "ナチュラル系", feature: "自然光のスタジオ", points: ["全データプレゼント", "アーティスティックな写真", "日韓のスタッフ"], bestFor: "ナチュラルでアートな写真希望。" },
  { name: "PHOTORENT", type: "出張型", feature: "出張撮影サービス", points: ["プロカメラマンが指定場所へ", "ロケーション撮影に強い", "オンライン予約簡単"], bestFor: "屋外・自宅で撮影したい人。" },
];

export default function PhotoStudioComparisonPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "ホーム", url: siteConfig.url }, { name: "ガイド", url: `${siteConfig.url}/guide` }, { name: "フォトスタジオ比較", url: `${siteConfig.url}/guide/photo-studio-comparison` }]} />
      <ArticleJsonLd headline="【2026年最新】フォトスタジオ比較5選" description="アリス・マリオ・キャラット・ライフスタジオ・PHOTORENT徹底比較。" url={`${siteConfig.url}/guide/photo-studio-comparison`} />
      <FAQJsonLd items={faqItems} />

      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-primary">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/guide" className="hover:text-primary">ガイド</Link>
        <span className="mx-2">/</span>
        <span>フォトスタジオ比較</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">比較</span>
          <span className="text-xs text-muted">12分で読める</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 leading-tight">【2026年最新】フォトスタジオ比較5選｜七五三・お宮参り・成人式の写真スタジオ徹底解説</h1>
        <p className="text-muted leading-relaxed">家族の節目を彩るフォトスタジオ選び。本記事では大手5社を比較し、用途別のおすすめスタジオを解説します。</p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">おすすめフォトスタジオ5選</h2>
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
        <h2 className="text-xl font-bold mb-4">予約・キャンペーン</h2>
        <ComparisonTableCTA
          services={[
            { name: "スタジオアリス", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4XF71U+35XE+609HU", highlight: "業界最大手", price: "撮影料無料キャンペーン", badge: "定番" },
            { name: "スタジオマリオ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+1UOKJ6+3SPO+9FDI8Y", highlight: "前撮りお得", price: "撮影料無料キャンペーン" },
            { name: "ライフスタジオ", url: "https://px.a8.net/svt/ejp?a8mat=4B1DXI+4W8BUA+4JGQ+60WN6", highlight: "全データプレゼント", price: "セットプラン" },
          ]}
        />
      </section>

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-4">関連ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/guide/baby-goods-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">ベビー用品比較</span>
            <p className="text-xs text-muted mt-1">出産準備にも</p>
          </Link>
          <Link href="/guide/wedding-venue-comparison" className="block bg-card-bg border border-card-border rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
            <span className="text-sm font-bold hover:text-primary">結婚式場比較</span>
            <p className="text-xs text-muted mt-1">フォトウェディングも</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
